// Bunte, kindlich gekritzelte Symbole im Wachsmalstift-Stil:
// gesättigte Primärfarben, wackelige organische Formen, kleine
// Punkt-Strich-Gesichter, wachsige Textur — wie aus einem Kinder-Malbuch.

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/* helle, gesättigte Kinderfarben */
const C = {
  red: "#E8412F",
  orange: "#F2931E",
  yellow: "#F7D046",
  yellowDeep: "#E8B421",
  green: "#5BAE52",
  greenDeep: "#3E8B3A",
  teal: "#3FA9A0",
  blue: "#2E6FD6",
  sky: "#7EC4F0",
  purple: "#8E54A8",
  pink: "#F08FB0",
  pinkDeep: "#D8638C",
  brown: "#8B5A2B",
  ink: "#3A2A22",
  cream: "#FFF7E8",
};

/** gemeinsamer Wachsmalstift-Filter: körnige, wachsige Textur */
const grainId = "child-grain";
const crayonDefs = (
  <defs>
    <filter id={grainId} x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" result="g" />
      <feComposite in="SourceGraphic" in2="g" operator="over" />
    </filter>
    <filter id={`${grainId}-soft`} x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="7" result="n" />
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.22 0" result="g" />
      <feComposite in="SourceGraphic" in2="g" operator="over" />
    </filter>
  </defs>
);

const base = (
  size: number,
  children: React.ReactNode,
  rotate = 0,
  className?: string
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ transform: `rotate(${rotate}deg)`, overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {crayonDefs}
    <g filter={`url(#${grainId})`}>{children}</g>
  </svg>
);

/* kleines Gesicht: zwei Punktaugen + Lächeln */
const Face = ({
  cx,
  cy,
  r = 0.5,
  spread = 1.6,
  smile = 2.2,
}: {
  cx: number;
  cy: number;
  r?: number;
  spread?: number;
  smile?: number;
}) => (
  <>
    <circle cx={cx - spread} cy={cy} r={r} fill={C.ink} />
    <circle cx={cx + spread} cy={cy} r={r} fill={C.ink} />
    <path
      d={`M ${cx - smile} ${cy + 1.6} q ${smile} ${1.6} ${smile * 2} 0`}
      stroke={C.ink}
      strokeWidth={0.7}
      fill="none"
    />
  </>
);

// 1. Ankommen & Frühstück — schiefes Tässchen mit Dampf & Gesicht
export const BreakfastIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Dampf */}
      <path d="M15 7 c-1.6 -2 1 -3 -0.4 -5" stroke={C.sky} strokeWidth={1.4} />
      <path d="M20 7.5 c-1.7 -2.2 1 -3.2 -0.3 -5.3" stroke={C.sky} strokeWidth={1.4} />
      {/* Tasse */}
      <path
        d="M10 16 c5 -1.4 11 -1.2 15.4 0.6 c0.4 5 -0.6 8.6 -2.2 11 c-3.4 2.6 -8 2.4 -11.2 -0.4 c-1.8 -2.4 -2.4 -6.2 -2 -11.2 z"
        fill={C.pink}
      />
      <path
        d="M10 16 c5 -1.4 11 -1.2 15.4 0.6 c0.4 5 -0.6 8.6 -2.2 11 c-3.4 2.6 -8 2.4 -11.2 -0.4 c-1.8 -2.4 -2.4 -6.2 -2 -11.2 z"
        stroke={C.pinkDeep}
        strokeWidth={1.6}
      />
      {/* Henkel */}
      <path
        d="M25.4 18 c3.4 -0.8 5.6 0.8 5.4 3.4 c-0.2 2.4 -2.6 3.6 -5 3"
        stroke={C.pinkDeep}
        strokeWidth={1.6}
        fill="none"
      />
      {/* Gesicht */}
      <Face cx={17.7} cy={21} spread={1.8} smile={1.7} />
      {/* Untertasse */}
      <path d="M8 27.5 c5 1.4 12 1.4 17 -0.2" stroke={C.brown} strokeWidth={1.6} />
    </>,
    -6,
    className
  );

// 2. Freispiel — bunter Ball mit Gesicht
export const PlayIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M20 8 c6.6 -0.4 11.6 4.8 10.8 11.4 c-0.8 6.4 -5.8 10.6 -11.8 10 c-6 -0.5 -10.2 -5.4 -9.4 -11.6 c0.6 -5.6 4.6 -9.5 10.4 -9.8 z"
        fill={C.yellow}
      />
      <path
        d="M20 8 c6.6 -0.4 11.6 4.8 10.8 11.4 c-0.8 6.4 -5.8 10.6 -11.8 10 c-6 -0.5 -10.2 -5.4 -9.4 -11.6 c0.6 -5.6 4.6 -9.5 10.4 -9.8 z"
        stroke={C.yellowDeep}
        strokeWidth={1.6}
      />
      {/* Segmente */}
      <path d="M10 17 c4.6 1.6 8 1.4 11.6 -0.6" stroke={C.red} strokeWidth={1.5} />
      <path d="M11.4 25 c4 -2.2 8 -1.8 11.8 1" stroke={C.blue} strokeWidth={1.5} />
      <path d="M20 8 c2.4 4.2 1.8 8.4 -0.6 12.4" stroke={C.green} strokeWidth={1.5} />
      <Face cx={20} cy={18} spread={2} smile={2} />
    </>,
    5,
    className
  );

// 3. Morgenkreis — Sonne mit Gesicht & Strahlen
export const CircleIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Strahlen */}
      {[
        [20, 5, 20, 9],
        [20, 35, 20, 31],
        [5, 20, 9, 20],
        [35, 20, 31, 20],
        [9, 9, 12, 12],
        [31, 31, 28, 28],
        [31, 9, 28, 12],
        [9, 31, 12, 28],
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M ${x1} ${y1} L ${x2} ${y2}`}
          stroke={i % 2 ? C.orange : C.yellowDeep}
          strokeWidth={1.6}
        />
      ))}
      {/* Sonne */}
      <path
        d="M20 11 c4.4 -0.2 7.6 3 7.4 7.2 c-0.2 4 -3.6 6.8 -7.6 6.4 c-4 -0.4 -6.6 -3.4 -6.2 -7.4 c0.4 -3.6 2.8 -6 6.4 -6.2 z"
        fill={C.yellow}
      />
      <path
        d="M20 11 c4.4 -0.2 7.6 3 7.4 7.2 c-0.2 4 -3.6 6.8 -7.6 6.4 c-4 -0.4 -6.6 -3.4 -6.2 -7.4 c0.4 -3.6 2.8 -6 6.4 -6.2 z"
        stroke={C.orange}
        strokeWidth={1.6}
      />
      <Face cx={20} cy={18} spread={2.2} smile={2} />
    </>,
    -4,
    className
  );

// 4. Gemeinsame Aktivität — Pinsel mit Farbklecksen
export const BrushIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Farbkleckse */}
      <ellipse cx={9} cy={12} rx={2.6} ry={2} fill={C.green} opacity={0.85} />
      <ellipse cx={31} cy={9} rx={2.4} ry={1.8} fill={C.red} opacity={0.85} />
      <ellipse cx={32} cy={28} rx={2.2} ry={1.8} fill={C.purple} opacity={0.85} />
      {/* Stiel */}
      <path d="M14 28 c3.4 -3.2 6.8 -6.2 10 -9.2" stroke={C.brown} strokeWidth={2} />
      {/* Pinselhaar */}
      <path
        d="M11.6 30 c-2.8 1.8 -3.8 4.4 -2.2 7 c2.8 1.2 5.6 -0.2 6.8 -3 c-1.6 -1.2 -3 -2.6 -4.6 -4 z"
        fill={C.blue}
      />
      <path
        d="M11.6 30 c-2.8 1.8 -3.8 4.4 -2.2 7 c2.8 1.2 5.6 -0.2 6.8 -3"
        stroke={C.teal}
        strokeWidth={1.4}
      />
      {/* Metallring */}
      <path d="M16 27 c1 -1 2 -1.8 3 -2.6" stroke={C.ink} strokeWidth={1.4} />
      {/* Pinselgriff */}
      <path
        d="M24 19 c1.4 -1.6 3 -3 4.6 -4.2 c0.8 0.6 1.4 1.4 1.6 2.2 c-1.4 1.4 -2.8 2.6 -4.2 3.8"
        fill={C.red}
      />
      <path
        d="M24 19 c1.4 -1.6 3 -3 4.6 -4.2 c0.8 0.6 1.4 1.4 1.6 2.2 c-1.4 1.4 -2.8 2.6 -4.2 3.8"
        stroke={C.red}
        strokeWidth={1.4}
      />
    </>,
    6,
    className
  );

// 5. Übergangsrituale — Hände & Wassertropfen
export const WashIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Wassertropfen */}
      <path d="M28 7 c2 2.4 2.4 4 1 5 c-1.4 0.8 -2.6 -0.4 -2.4 -1.8 c0.2 -1 0.6 -1.8 1.4 -3.2 z" fill={C.blue} />
      <path d="M32 13 c1.6 1.8 1.8 3 0.6 3.6 c-1.2 0.4 -1.8 -0.4 -1.6 -1.4 c0.1 -0.7 0.4 -1.2 1 -2.2 z" fill={C.sky} />
      {/* Hand */}
      <path
        d="M12 19 c2 -0.8 3.8 0.6 5 2 c0.6 -4.6 0.8 -8.4 0.6 -11.4 c1.6 -1.4 3 -1 3.2 0.8 c0.6 -1.8 2.6 -1.6 3 0.4 c0.6 -1.6 2.6 -1.2 2.8 0.8 c0.4 3.2 0.4 6.4 0 9.4 c-0.6 4.4 -3.4 7 -7.6 6.8 c-3.6 -0.2 -5.8 -2.2 -7.2 -5.2 l-2.4 -4.2 c-0.6 -1.4 1.4 -2.6 2.6 -1 z"
        fill={C.orange}
      />
      <path
        d="M14 11 c0.2 -2 2.8 -1.8 2.8 0.4 v8"
        stroke={C.brown}
        strokeWidth={1.4}
      />
      <path
        d="M16.8 18.5 v-5.4 c0 -1.8 2.6 -1.6 2.6 0.2 v5"
        stroke={C.brown}
        strokeWidth={1.4}
      />
      <path
        d="M19.4 18.2 v-3.8 c0 -1.8 2.6 -1.6 2.6 0.2 v3.6"
        stroke={C.brown}
        strokeWidth={1.4}
      />
      <path
        d="M22 18.2 v-2.6 c0 -1.8 2.8 -1.6 2.8 0.4 v6.6 c0 4 -2.8 6.6 -6.8 6.4 c-3.4 -0.2 -5.4 -2.2 -6.6 -4.8 l-2.4 -4.2 c-0.6 -1.6 1.4 -2.8 2.6 -1.2 l2.6 3.2"
        stroke={C.brown}
        strokeWidth={1.4}
      />
    </>,
    -5,
    className
  );

// 6. Mittagessen — Teller mit Gesicht, Gabel & Löffel
export const MealIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Gabel */}
      <path d="M10 8 v6" stroke={C.blue} strokeWidth={1.6} />
      <path d="M8.4 8 v4" stroke={C.blue} strokeWidth={1.6} />
      <path d="M11.6 8 v3.8" stroke={C.blue} strokeWidth={1.6} />
      <path d="M10 13.5 v9" stroke={C.blue} strokeWidth={1.6} />
      {/* Löffel */}
      <path
        d="M28 8 c-2 0.4 -2.8 2.2 -2.4 4.2 c0.2 1.2 0.8 2 1.6 2.4 v8"
        stroke={C.purple}
        strokeWidth={1.6}
      />
      {/* Teller */}
      <path
        d="M20 13 c5.6 -0.4 9.6 3.6 9.2 8.8 c-0.4 4.8 -4.2 8.2 -9.2 8 c-5 -0.2 -8.4 -4 -8 -8.6 c0.4 -4.4 3.4 -7.2 8 -8.2 z"
        fill={C.cream}
      />
      <path
        d="M20 13 c5.6 -0.4 9.6 3.6 9.2 8.8 c-0.4 4.8 -4.2 8.2 -9.2 8 c-5 -0.2 -8.4 -4 -8 -8.6 c0.4 -4.4 3.4 -7.2 8 -8.2 z"
        stroke={C.greenDeep}
        strokeWidth={1.6}
      />
      {/* Essen im Teller */}
      <ellipse cx={20} cy={20.5} rx={4.2} ry={3} fill={C.red} opacity={0.8} />
      <ellipse cx={22.5} cy={19.5} rx={1.8} ry={1.3} fill={C.green} opacity={0.8} />
      <Face cx={18} cy={20.5} spread={1.4} smile={1.5} />
    </>,
    4,
    className
  );

// 7. Schlafenszeit — Mond mit Schlafmütze & Sterne
export const SleepIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Sterne */}
      <path
        d="M11 7 l0.8 1.6 l1.6 0.8 l-1.6 0.8 l-0.8 1.6 l-0.8 -1.6 l-1.6 -0.8 l1.6 -0.8 z"
        fill={C.yellow}
      />
      <path
        d="M31 18 l0.6 1.2 l1.2 0.6 l-1.2 0.6 l-0.6 1.2 l-0.6 -1.2 l-1.2 -0.6 l1.2 -0.6 z"
        fill={C.pink}
      />
      {/* Mond */}
      <path
        d="M26 7 c-6 1 -10 5.6 -9.6 11.4 c0.4 5.8 5.4 9.6 11.2 8.8 c-2.4 4 -7.6 5.8 -12 4 c-5 -2 -7.6 -7.4 -6.4 -12.6 c1.2 -5.2 6.2 -8.8 11.6 -8.4 c1.8 0.2 3.2 0.6 5.2 -3.2 z"
        fill={C.blue}
      />
      <path
        d="M25.4 7.4 c-5.6 1.2 -9 5.6 -8.6 11 c0.4 5.4 4.8 9.2 10.4 8.8 c-2.4 4.2 -7.6 6 -12.2 4 c-5 -2.2 -7.6 -7.6 -6.2 -12.8 c1.4 -5.2 6.2 -8.8 11.6 -8.2"
        stroke={C.purple}
        strokeWidth={1.5}
      />
      {/* Schlafmütze */}
      <path d="M19 9 c1.4 -2 3 -2.6 4.6 -2.2" stroke={C.red} strokeWidth={1.5} />
      {/* geschlossene Augen */}
      <path d="M19.5 14.5 c0.8 0.6 1.6 0.6 2.4 0" stroke={C.ink} strokeWidth={0.9} />
      <path d="M22.5 14.5 c0.8 0.6 1.6 0.6 2.4 0" stroke={C.ink} strokeWidth={0.9} />
      {/* Zzz */}
      <path d="M30 8 c0 1 -0.6 1.2 -1.2 1.2 h1.2" stroke={C.purple} strokeWidth={0.8} fill="none" />
    </>,
    -7,
    className
  );

// 8. Abholzeit — schiefes Häuschen mit Gesicht
export const HomeIcon = ({ size = 18, className }: IconProps) =>
  base(
    size,
    <>
      {/* Dach */}
      <path
        d="M7 17 L20 7.5 L33 16.5 L31 17.5 L9 17.5 z"
        fill={C.red}
      />
      <path d="M7 17 c4.4 -3.6 8.6 -6.8 13 -9.5 c4.4 2.6 8.6 5.8 13 9" stroke={C.red} strokeWidth={1.6} />
      {/* Wand */}
      <path
        d="M10 16.5 c-0.4 5 -0.4 10 0 14.8 c6.6 0.4 13.4 0.4 20 0 c0.4 -5 0.4 -9.8 0 -14.8 z"
        fill={C.yellow}
      />
      <path
        d="M10 16.5 c-0.4 5 -0.4 10 0 14.8 c6.6 0.4 13.4 0.4 20 0 c0.4 -5 0.4 -9.8 0 -14.8"
        stroke={C.brown}
        strokeWidth={1.6}
      />
      {/* Tür */}
      <path
        d="M17 31.4 c-0.2 -3 -0.2 -5.8 0 -8 c2 -0.2 4 -0.2 6 0 c0.2 2.2 0.2 5 0 8"
        fill={C.teal}
        stroke={C.greenDeep}
        strokeWidth={1.4}
      />
      {/* Fenster = Gesicht */}
      <Face cx={20} cy={22} spread={2.4} smile={1.6} />
    </>,
    3,
    className
  );

export const childIcons = {
  breakfast: BreakfastIcon,
  play: PlayIcon,
  circle: CircleIcon,
  brush: BrushIcon,
  wash: WashIcon,
  meal: MealIcon,
  sleep: SleepIcon,
  home: HomeIcon,
} as const;

export type ChildIconName = keyof typeof childIcons;
