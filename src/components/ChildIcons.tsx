// Gekritzelte Symbole im Filzstift-auf-Papier-Stil:
// eine einzige wackelige schwarze Kontur, keine Farbflächen,
// kleine Punkt-Strich-Gesichter — wie schnell hingekritzelt.

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const wobbleId = "scribble-wobble";

const scribbleDefs = (
  <defs>
    <filter id={wobbleId} x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.025"
        numOctaves="2"
        seed="9"
        result="noise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="4.5"
        xChannelSelector="R"
        yChannelSelector="G"
        result="wob1"
      />
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.14"
        numOctaves="2"
        seed="3"
        result="noise2"
      />
      <feDisplacementMap
        in="wob1"
        in2="noise2"
        scale="2.2"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </defs>
);

const base = (
  size: number,
  strokeWidth: number,
  children: React.ReactNode,
  rotate = 0,
  className?: string
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ transform: `rotate(${rotate}deg)`, overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {scribbleDefs}
    <g filter={`url(#${wobbleId})`}>{children}</g>
  </svg>
);

/* kleines Gesicht: zwei Punktaugen + Strichmund */
const Face = ({
  cx,
  cy,
  spread = 2.2,
  smile = 2.6,
}: {
  cx: number;
  cy: number;
  spread?: number;
  smile?: number;
}) => (
  <>
    <path d={`M${cx - spread} ${cy} l0 0.4`} strokeWidth={2} />
    <path d={`M${cx + spread} ${cy} l0 0.4`} strokeWidth={2} />
    <path
      d={`M${cx - smile} ${cy + 2.6} q${smile} ${smile * 0.8} ${smile * 2} 0`}
    />
  </>
);

/* Frühstück: Tasse mit Henkel und Dampf */
export const BreakfastIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M9 15 q0.4 13 4 15 q6 1.6 11 0 q3.6 -2 4 -15 q-9.5 1.4 -19 0 Z" />
      <path d="M28 18 q5 -1 5 3.5 q0 4.5 -5 4" />
      <path d="M14 9.5 q2 -2 0 -4" />
      <path d="M20 8.5 q2 -2.4 0 -4.5" />
      <path d="M26 9.5 q2 -2 0 -4" />
      <Face cx={18.5} cy={21} />
    </>,
    -2,
    className
  );

/* Freispiel: Bauklötze */
export const PlayIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M7 22.5 q6 -1 11.5 0 q0.6 5.5 0 10.5 q-6 1 -11.5 0 q-0.7 -5.5 0 -10.5 Z" />
      <path d="M21.5 24.5 q5.5 -1 10.5 0 q0.6 4.5 0 8.5 q-5.5 0.9 -10.5 0 q-0.7 -4.5 0 -8.5 Z" />
      <path d="M13 18.5 l6.5 -10 l6.5 10 q-6.5 1.2 -13 0 Z" />
      <Face cx={12.5} cy={27} spread={2} smile={2.2} />
    </>,
    0,
    className
  );

/* Morgenkreis: Kreis aus Strichfiguren */
export const CircleIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M20 6.5 q13.5 0.5 13.5 13.5 q0 13.5 -13.5 13.5 q-13.5 0 -13.5 -13.5 q0 -13 13.5 -13.5 Z" />
      <path d="M20 12.5 q2.6 0 2.6 2.6 q0 2.6 -2.6 2.6 q-2.6 0 -2.6 -2.6 q0 -2.6 2.6 -2.6 Z" />
      <path d="M12 20 q2.4 0 2.4 2.4 q0 2.4 -2.4 2.4 q-2.4 0 -2.4 -2.4 q0 -2.4 2.4 -2.4 Z" />
      <path d="M28 20 q2.4 0 2.4 2.4 q0 2.4 -2.4 2.4 q-2.4 0 -2.4 -2.4 q0 -2.4 2.4 -2.4 Z" />
      <path d="M20 26.5 q2.4 0 2.4 2.4 q0 2.4 -2.4 2.4 q-2.4 0 -2.4 -2.4 q0 -2.4 2.4 -2.4 Z" />
    </>,
    0,
    className
  );

/* Angebot: Pinsel */
export const BrushIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M26.5 6.5 q4 0.4 4.5 3 q-6.5 8 -13 15.5 q-2.6 -0.6 -4 -3 q6 -8 12.5 -15.5 Z" />
      <path d="M13.5 25.5 q-3.5 4 -6.5 8 q5 -1.5 9.5 -4.5" />
      <path d="M10 30 q2 0.6 3 2.2" />
      <Face cx={22} cy={14} spread={1.8} smile={1.8} />
    </>,
    0,
    className
  );

/* Händewaschen: Hand mit Wassertropfen */
export const WashIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M11 22 q0 -8 4 -8 q1.8 0 1.8 4 q0.4 -7 2.6 -7 q2 0 2 6.5 q0.6 -6 2.6 -6 q2 0 2 6.5 q1 -4 2.6 -3.5 q1.8 0.6 0.6 7 q-1 6 -5 8 q-6 2.5 -10 -1.5 q-2.6 -2.6 -3.2 -6 Z" />
      <path d="M11 8 q2 2.5 0 4 q-2 -1.5 0 -4 Z" />
      <path d="M17 4.5 q2 2.5 0 4 q-2 -1.5 0 -4 Z" />
      <path d="M25 5.5 q2 2.5 0 4 q-2 -1.5 0 -4 Z" />
    </>,
    0,
    className
  );

/* Mittagessen: Teller mit Gabel und Löffel */
export const MealIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M20 10 q10 0.4 10 10 q0 9.6 -10 9.6 q-10 0 -10 -9.6 q0 -9.6 10 -10 Z" />
      <path d="M20 14.5 q5.6 0.3 5.6 5.5 q0 5.4 -5.6 5.4 q-5.6 0 -5.6 -5.4 q0 -5.2 5.6 -5.5 Z" />
      <path d="M5 8 l0 8 q0 2 2 2.4 l0 13" />
      <path d="M7 8 l0 6" />
      <path d="M34 8 q3 3 0.8 8 q-0.8 1.6 -0.8 15" />
      <Face cx={20} cy={19} spread={1.6} smile={1.8} />
    </>,
    0,
    className
  );

/* Schlafen: Mond mit Zzz */
export const SleepIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M23 8 q-12 1.5 -12 12.5 q0 11 12 12 q-7 -5 -7 -12 q0 -7.5 7 -12.5 Z" />
      <path d="M26 10 h5 l-5 5 h5.5" />
      <path d="M30.5 20 h4 l-4 4 h4.5" />
      <path d="M27 28 h3 l-3 3 h3.5" />
    </>,
    0,
    className
  );

/* Abholzeit: Haus */
export const HomeIcon = ({ size = 40, strokeWidth = 1.6, className }: IconProps) =>
  base(
    size,
    strokeWidth,
    <>
      <path d="M20 6.5 l13 11.5 q-13 1.4 -26 0 l13 -11.5 Z" />
      <path d="M10.5 19 q0.6 8 0 14.5 q9.5 1.2 19 0 q-0.6 -6.5 0 -14.5" />
      <path d="M16.5 33.5 q-0.5 -7 0 -9.5 q3.5 -0.6 7 0 q0.5 3 0 9.5" />
      <path d="M27 7 l0 4" />
    </>,
    0,
    className
  );
