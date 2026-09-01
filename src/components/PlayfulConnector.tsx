import sprigA from "@/assets/vine-sprig-a.png.asset.json";
import sprigB from "@/assets/vine-sprig-b.png.asset.json";

/**
 * The branch is built out of leaf clusters cut directly from the "Natur"
 * painting, chained densely along a stem so it has the same leaf density as
 * the bush itself and looks like the bush simply keeps growing upwards.
 *
 * Coordinates are percentages of the connector box (0-100 in both axes).
 * Text columns sit at x 10-42 and x 58-90, so the stems only travel through
 * the left margin (x ≈ 8) and the centre gutter (x ≈ 50).
 */

type P = [number, number];

/** cubic bezier chain: [start, c1, c2, end, c1, c2, end, ...] */
type Chain = P[];

// grows out of the crown of the bush in the "Natur" section
const STEM_A: Chain = [
  [24, 68],
  [34, 64],
  [46, 60],
  [50, 54],
  [50, 46],
  [50, 38],
  [49, 30],
  [49, 26],
  [52, 22],
  [58, 19],
  [63, 17],
  [67, 15.5],
  [70, 13.8],
];

const STEM_B: Chain = [
  [21, 69],
  [12, 67],
  [5, 63],
  [4.5, 57],
  [4, 48],
  [5, 40],
  [4.5, 32],
  [4, 26],
  [10, 21],
  [22, 19.5],
  [40, 19],
  [58, 17],
  [70, 13.8],
];

function bezier(p0: P, p1: P, p2: P, p3: P, t: number): P {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
}

function toPathD(chain: Chain) {
  const start = chain[0] as P;
  let d = `M ${start[0]} ${start[1]}`;
  for (let i = 1; i + 2 < chain.length; i += 3) {
    const c1 = chain[i] as P;
    const c2 = chain[i + 1] as P;
    const end = chain[i + 2] as P;
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${end[0]} ${end[1]}`;
  }
  return d;
}

/** dense sample points with tangent angle along the whole chain */
function samples(chain: Chain, perSegment: number) {
  const out: { x: number; y: number; angle: number }[] = [];
  for (let i = 1; i + 2 < chain.length; i += 3) {
    const p0 = chain[i - 1] as P;
    const p1 = chain[i] as P;
    const p2 = chain[i + 1] as P;
    const p3 = chain[i + 2] as P;
    for (let s = 0; s < perSegment; s++) {
      const t = s / perSegment;
      const pt = bezier(p0, p1, p2, p3, t);
      const nx = bezier(p0, p1, p2, p3, Math.min(t + 0.01, 1));
      const angle =
        (Math.atan2(nx[1] - pt[1], nx[0] - pt[0]) * 180) / Math.PI;
      out.push({ x: pt[0], y: pt[1], angle });
    }
  }
  return out;
}

const LEAF_A = sprigA.url;
const LEAF_B = sprigB.url;

function Leaves({ chain, perSegment }: { chain: Chain; perSegment: number }) {
  const pts = samples(chain, perSegment);
  return (
    <>
      {pts.map((p, i) => {
        // alternate sides and artwork so the foliage reads as dense as the bush
        const side = i % 2 === 0 ? 1 : -1;
        const src = i % 3 === 0 ? LEAF_B : LEAF_A;
        const size = 3.6 + ((i * 7) % 5) * 0.5;
        const jitterX = (((i * 13) % 7) - 3) * 0.25;
        const jitterY = (((i * 11) % 7) - 3) * 0.25;
        return (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{
              left: `${p.x + jitterX}%`,
              top: `${p.y + jitterY}%`,
              width: `${size}%`,
              transform: `translate(-50%, -50%) rotate(${p.angle + 90 + side * 34}deg) scaleX(${side})`,
            }}
          />
        );
      })}
    </>
  );
}

export function PlayfulConnector() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-x-10 inset-y-0 overflow-hidden"
    >
      {/* painted stem underneath the foliage */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <g fill="none" strokeLinecap="round">
          <path d={toPathD(STEM_A)} stroke="#4F7A38" strokeWidth={0.9} vectorEffect="non-scaling-stroke" />
          <path d={toPathD(STEM_B)} stroke="#4F7A38" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
          <path d={toPathD(STEM_A)} stroke="#254B1E" strokeWidth={0.35} vectorEffect="non-scaling-stroke" opacity={0.7} />
          <path d={toPathD(STEM_B)} stroke="#254B1E" strokeWidth={0.3} vectorEffect="non-scaling-stroke" opacity={0.65} />
        </g>
      </svg>

      <Leaves chain={STEM_A} perSegment={11} />
      <Leaves chain={STEM_B} perSegment={11} />
    </div>
  );
}
