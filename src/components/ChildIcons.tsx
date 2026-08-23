// Bunte, kindlich gekritzelte Symbole — wackelige Striche, schiefe Formen,
// über den Rand gemalte Farbflächen, wie mit Wachsmalstiften gezeichnet.

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const C = {
  red: "#D2553F",
  orange: "#E2903C",
  yellow: "#EFC24B",
  green: "#7A9B5C",
  teal: "#5E9A96",
  blue: "#5B7FA6",
  purple: "#8B6BA0",
  pink: "#DC8C9B",
  brown: "#8A6242",
  ink: "#4A3B33",
};

const base = (
  size: number,
  children: React.ReactNode,
  rotate = 0,
  className?: string
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ transform: `rotate(${rotate}deg)`, overflow: "visible" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

// 1. Ankommen & Frühstück — schiefe Tasse mit Dampf
export const BreakfastIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M8.6 13.8 c4 -0.8 8.4 -0.6 11.6 0.2 c0.3 3.6 -0.4 6.4 -1.6 8 c-2.6 1.9 -6 1.7 -8.2 -0.3 c-1.3 -1.8 -1.9 -4.6 -1.8 -7.9 z"
        fill={C.pink}
        opacity="0.85"
      />
      <path
        d="M8.4 13.6 c4.2 -1 8.6 -0.8 12 0.2 c0.2 4 -0.5 6.9 -1.8 8.5 c-2.7 2 -6.3 1.8 -8.6 -0.4 c-1.3 -1.9 -1.8 -4.9 -1.6 -8.3 z"
        stroke={C.red}
        strokeWidth={strokeWidth}
      />
      <path
        d="M20.2 15.4 c2.4 -0.6 4.2 0.6 4 2.4 c-0.2 1.7 -2 2.6 -3.8 2.2"
        stroke={C.red}
        strokeWidth={strokeWidth}
      />
      <path d="M12.4 9.6 c-1.2 -1.4 0.8 -2.4 -0.2 -3.8" stroke={C.orange} strokeWidth={strokeWidth} />
      <path d="M16.4 9.8 c-1.3 -1.5 0.7 -2.6 -0.3 -4" stroke={C.yellow} strokeWidth={strokeWidth} />
    </>,
    -6,
    className
  );

// 2. Freispiel — bunter Ball
export const PlayIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M16.4 7.2 c5.2 -0.3 9.2 3.8 8.6 8.9 c-0.6 5.1 -4.6 8.4 -9.4 8 c-4.7 -0.4 -8 -4.3 -7.5 -9.2 c0.5 -4.4 3.7 -7.5 8.3 -7.7 z"
        fill={C.yellow}
        opacity="0.8"
      />
      <path
        d="M16.4 7.2 c5.2 -0.3 9.2 3.8 8.6 8.9 c-0.6 5.1 -4.6 8.4 -9.4 8 c-4.7 -0.4 -8 -4.3 -7.5 -9.2 c0.5 -4.4 3.7 -7.5 8.3 -7.7 z"
        stroke={C.blue}
        strokeWidth={strokeWidth}
      />
      <path d="M8.4 14.2 c3.4 1.3 5.9 1.1 8.8 -0.4" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M9.6 21 c3.2 -1.8 6.4 -1.4 9.4 0.8" stroke={C.green} strokeWidth={strokeWidth} />
      <path d="M16.2 7.4 c1.8 3.4 1.4 6.6 -0.4 9.6" stroke={C.purple} strokeWidth={strokeWidth} />
    </>,
    5,
    className
  );

// 3. Morgenkreis — Sonne mit wackeligen Strahlen
export const CircleIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M16.2 10.4 c3.4 -0.2 6 2.4 5.8 5.8 c-0.2 3.2 -2.8 5.4 -6 5.1 c-3.1 -0.3 -5.2 -2.7 -4.9 -5.9 c0.3 -2.9 2.3 -4.8 5.1 -5 z"
        fill={C.yellow}
      />
      <path
        d="M16.2 10.4 c3.4 -0.2 6 2.4 5.8 5.8 c-0.2 3.2 -2.8 5.4 -6 5.1 c-3.1 -0.3 -5.2 -2.7 -4.9 -5.9 c0.3 -2.9 2.3 -4.8 5.1 -5 z"
        stroke={C.orange}
        strokeWidth={strokeWidth}
      />
      <path d="M16 4.4 c0.4 1.4 0.2 2.4 -0.2 3.4" stroke={C.orange} strokeWidth={strokeWidth} />
      <path d="M16.4 24.4 c-0.5 1.2 -0.2 2.3 0.2 3.3" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M4.4 15.6 c1.4 0.5 2.4 0.2 3.4 -0.2" stroke={C.orange} strokeWidth={strokeWidth} />
      <path d="M24.6 16.4 c1.2 -0.5 2.4 -0.2 3.2 0.3" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M7.8 7.6 c1.2 0.6 2 1.6 2.6 2.6" stroke={C.yellow} strokeWidth={strokeWidth} />
      <path d="M21.8 21.8 c1 0.7 1.8 1.6 2.4 2.6" stroke={C.orange} strokeWidth={strokeWidth} />
      <path d="M24.4 7.6 c-1.1 0.7 -2 1.6 -2.6 2.7" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M10.2 21.8 c-1 0.8 -1.9 1.7 -2.4 2.7" stroke={C.yellow} strokeWidth={strokeWidth} />
    </>,
    -4,
    className
  );

// 4. Gemeinsame Aktivität — Pinsel mit Farbklecks
export const BrushIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M9.6 21.6 c-2.2 1.4 -3 3.4 -1.8 5.4 c2.2 1 4.4 -0.2 5.4 -2.4 c-1.4 -0.9 -2.6 -1.9 -3.6 -3 z"
        fill={C.pink}
        opacity="0.9"
      />
      <path
        d="M9.6 21.6 c-2.2 1.4 -3 3.4 -1.8 5.4 c2.2 1 4.4 -0.2 5.4 -2.4"
        stroke={C.purple}
        strokeWidth={strokeWidth}
      />
      <path d="M12.2 19.4 c2.6 -2.4 5.1 -4.9 7.4 -7.2" stroke={C.brown} strokeWidth={strokeWidth + 0.6} />
      <path
        d="M19.4 12.2 c1 -1.2 2 -2.2 3 -3 c0.6 0.4 1 0.9 1.2 1.5 c-0.9 1 -1.9 2 -2.9 2.9"
        fill={C.teal}
        stroke={C.teal}
        strokeWidth={strokeWidth}
      />
      <path d="M6.8 9.4 c1.6 1 3.2 0.4 4.2 -1.2" stroke={C.green} strokeWidth={strokeWidth} />
      <path d="M24.4 6.6 c-1.1 1.6 -0.5 3.2 1.2 4.2" stroke={C.red} strokeWidth={strokeWidth} />
    </>,
    6,
    className
  );

// 5. Übergangsrituale — Hand mit Wassertropfen
export const WashIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M9.6 16.4 c1.6 -0.6 3 0.4 4 1.6 c0.4 -3.6 0.5 -6.6 0.4 -9 c1.2 -1.2 2.4 -0.9 2.6 0.6 c0.4 -1.4 2 -1.4 2.4 0.2 c0.5 -1.2 2 -1 2.3 0.5 c0.3 2.5 0.3 5 0 7.4 c-0.4 3.4 -2.6 5.4 -6 5.4 c-2.8 0 -4.6 -1.6 -5.8 -4 c-0.6 -1.1 -0.6 -2 0.1 -2.7 z"
        fill={C.orange}
        opacity="0.55"
      />
      <path d="M11.2 9.2 c0.2 -1.6 2.2 -1.5 2.2 0.2 v6.2" stroke={C.brown} strokeWidth={strokeWidth} />
      <path d="M13.4 15.4 v-4.2 c0 -1.5 2.1 -1.4 2.1 0.1 v4" stroke={C.brown} strokeWidth={strokeWidth} />
      <path d="M15.5 15.2 v-3 c0 -1.4 2.1 -1.4 2.1 0.1 v2.9" stroke={C.brown} strokeWidth={strokeWidth} />
      <path
        d="M17.6 15.2 v-2.1 c0 -1.4 2.2 -1.3 2.2 0.2 v5.1 c0 3.1 -2.2 5.2 -5.3 5.1 c-2.6 -0.1 -4.2 -1.7 -5.2 -3.7 l-1.9 -3.3 c-0.5 -1.2 1.1 -2.2 2.1 -0.9 l2 2.5"
        stroke={C.brown}
        strokeWidth={strokeWidth}
      />
      <path d="M22.6 6.4 c1.6 1.8 1.9 3 0.8 3.7 c-1.1 0.6 -2 -0.2 -1.8 -1.4 c0.1 -0.7 0.4 -1.4 1 -2.3 z" fill={C.teal} />
      <path d="M26 12 c1.1 1.3 1.3 2.2 0.5 2.6 c-0.8 0.4 -1.4 -0.1 -1.3 -1 c0.1 -0.5 0.3 -1 0.8 -1.6 z" fill={C.blue} />
    </>,
    -5,
    className
  );

// 6. Mittagessen — Teller mit Gabel & Löffel
export const MealIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M16.2 10.6 c4.4 -0.3 7.6 2.9 7.3 7 c-0.3 3.9 -3.4 6.6 -7.4 6.3 c-4 -0.3 -6.7 -3.3 -6.4 -7.3 c0.3 -3.5 2.8 -5.8 6.5 -6 z"
        fill={C.green}
        opacity="0.5"
      />
      <path
        d="M16.2 10.6 c4.4 -0.3 7.6 2.9 7.3 7 c-0.3 3.9 -3.4 6.6 -7.4 6.3 c-4 -0.3 -6.7 -3.3 -6.4 -7.3 c0.3 -3.5 2.8 -5.8 6.5 -6 z"
        stroke={C.green}
        strokeWidth={strokeWidth}
      />
      <path d="M13.4 15.8 c1.8 -1.2 3.8 -1.2 5.6 0.2" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M9.8 8.6 v5.6" stroke={C.blue} strokeWidth={strokeWidth} />
      <path d="M8.2 8.6 v3.6" stroke={C.blue} strokeWidth={strokeWidth} />
      <path d="M11.4 8.8 v3.4" stroke={C.blue} strokeWidth={strokeWidth} />
      <path d="M22.2 8.6 c-1.6 0.2 -2.2 1.6 -2 3.2 c0.2 1.5 1.1 2.3 2.2 2.3 v4" stroke={C.purple} strokeWidth={strokeWidth} />
    </>,
    4,
    className
  );

// 7. Schlafenszeit — Mond mit Sternchen
export const SleepIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path
        d="M21.4 5.8 c-4.8 0.8 -8 4.4 -7.6 8.9 c0.4 4.6 4.3 7.6 9 7 c-1.9 3.2 -6 4.6 -9.6 3.2 c-4 -1.6 -6.2 -5.8 -5.2 -10 c1 -4.2 5 -7 9.4 -6.6 c1.4 0.1 2.6 0.5 4 -2.5 z"
        fill={C.blue}
        opacity="0.65"
      />
      <path
        d="M20.8 6 c-4.4 0.9 -7.2 4.4 -6.8 8.6 c0.4 4.3 3.9 7.2 8.4 6.9 c-1.9 3.3 -6.1 4.7 -9.7 3.2 c-4 -1.7 -6.1 -5.9 -5 -10.1 c1.1 -4.1 5 -6.9 9.3 -6.4"
        stroke={C.purple}
        strokeWidth={strokeWidth}
      />
      <path d="M11.4 6.6 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 z" fill={C.yellow} stroke={C.yellow} strokeWidth="1" />
      <path d="M25.4 15.6 l0.7 1.4 l1.4 0.7 l-1.4 0.7 l-0.7 1.4 l-0.7 -1.4 l-1.4 -0.7 l1.4 -0.7 z" fill={C.pink} stroke={C.pink} strokeWidth="1" />
    </>,
    -7,
    className
  );

// 8. Abholzeit — kleines schiefes Haus
export const HomeIcon = ({ size = 18, strokeWidth = 2, className }: IconProps) =>
  base(
    size,
    <>
      <path d="M6 15.4 l10 -8.2 l10.2 8 l-2 0.6 l-16.4 0.2 z" fill={C.red} opacity="0.75" />
      <path d="M8.2 14.6 c-0.4 4 -0.4 8 0 11.8 c5.3 0.3 10.5 0.3 15.6 0 c0.3 -3.9 0.3 -7.9 0 -11.8 z" fill={C.yellow} opacity="0.6" />
      <path d="M5.8 15.6 c3.4 -3 6.8 -5.8 10.2 -8.4 c3.5 2.6 6.9 5.4 10.2 8.2" stroke={C.red} strokeWidth={strokeWidth} />
      <path d="M8.2 14.4 c-0.3 4.1 -0.3 8.1 0 12 c5.3 0.3 10.6 0.3 15.8 0 c0.3 -4 0.3 -8 0 -12" stroke={C.brown} strokeWidth={strokeWidth} />
      <path d="M13.8 26.2 c-0.2 -2.2 -0.2 -4.3 0 -6.2 c1.5 -0.2 2.9 -0.2 4.3 0 c0.2 2 0.2 4.1 0 6.2" stroke={C.teal} strokeWidth={strokeWidth} />
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
