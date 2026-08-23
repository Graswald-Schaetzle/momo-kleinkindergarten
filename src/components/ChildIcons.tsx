// Einfache, kindlich gezeichnete Symbole als handgezeichnet SVGs.
// Wackelige, weiche Striche im Crayon-Stil — passend zur Wasserfarben-Ästhetik.

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const base = (size: number, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

// 1. Ankommen & Frühstück — eine Tasse mit dampfender Welle
export const BreakfastIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <path d="M9 14 h11 a0 0 0 0 1 0 0 v3 a5.5 5.5 0 0 1 -11 0 v-3" strokeWidth={strokeWidth} />
      <path d="M20 15 h2.2 a2.3 2.3 0 0 1 0 4.6 H20" strokeWidth={strokeWidth} />
      <path d="M12 9 c -1 -1.2 0.6 -2.2 0 -3.4" strokeWidth={strokeWidth} />
      <path d="M16 9 c -1 -1.2 0.6 -2.2 0 -3.4" strokeWidth={strokeWidth} />
    </>
  );

// 2. Freispiel — ein Ball mit geschwungenen Bändern
export const PlayIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <circle cx="16" cy="16" r="8.5" strokeWidth={strokeWidth} />
      <path d="M8 14 c 3 1 5 1 8 0" strokeWidth={strokeWidth} />
      <path d="M9 21 c 3 -1.5 6 -1.5 9 0.5" strokeWidth={strokeWidth} />
      <path d="M16 7.5 c 1.5 3 1.5 6 0 9" strokeWidth={strokeWidth} />
    </>
  );

// 3. Morgenkreis — eine Sonne mit Wellenstrahlen
export const CircleIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <circle cx="16" cy="16" r="5.5" strokeWidth={strokeWidth} />
      <path d="M16 4 v3.5" strokeWidth={strokeWidth} />
      <path d="M16 24.5 v3.5" strokeWidth={strokeWidth} />
      <path d="M4 16 h3.5" strokeWidth={strokeWidth} />
      <path d="M24.5 16 h3.5" strokeWidth={strokeWidth} />
      <path d="M8 8 l2.4 2.4" strokeWidth={strokeWidth} />
      <path d="M21.6 21.6 l2.4 2.4" strokeWidth={strokeWidth} />
      <path d="M24 8 l-2.4 2.4" strokeWidth={strokeWidth} />
      <path d="M10.4 21.6 l-2.4 2.4" strokeWidth={strokeWidth} />
    </>
  );

// 4. Gemeinsame Aktivität — ein Pinsel mit Farbklecks
export const BrushIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <path d="M10 22 c -2 1 -3 3 -2 5 c 2 1 4 0 5 -2" strokeWidth={strokeWidth} />
      <path d="M12.5 19.5 l7 -7" strokeWidth={strokeWidth} />
      <path d="M19.5 12.5 l2.5 -2.5 l1 1 l-2.5 2.5" strokeWidth={strokeWidth} />
      <path d="M7 9 c 1.5 1 3 0.5 4 -1" strokeWidth={strokeWidth} />
      <path d="M24 7 c -1 1.5 -0.5 3 1 4" strokeWidth={strokeWidth} />
    </>
  );

// 5. Übergangsrituale — eine Hand mit Wassertropfen
export const WashIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <path d="M11 9 c 0 -1.4 2 -1.4 2 0 v6" strokeWidth={strokeWidth} />
      <path d="M13 15 v-4 c 0 -1.3 2 -1.3 2 0 v4" strokeWidth={strokeWidth} />
      <path d="M15 15 v-3 c 0 -1.3 2 -1.3 2 0 v3" strokeWidth={strokeWidth} />
      <path d="M17 15 v-2 c 0 -1.3 2 -1.3 2 0 v5 c 0 3 -2 5 -5 5 h-1 c -2.5 0 -4 -1.5 -5 -3.5 l-2 -3.5 c -0.6 -1.2 1 -2.2 2 -1 l2 2.5" strokeWidth={strokeWidth} />
    </>
  );

// 6. Mittagessen — ein Teller mit Gabel & Löffel
export const MealIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <circle cx="16" cy="17" r="7" strokeWidth={strokeWidth} />
      <path d="M10 9 v5" strokeWidth={strokeWidth} />
      <path d="M8.5 9 v3.5" strokeWidth={strokeWidth} />
      <path d="M11.5 9 v3.5" strokeWidth={strokeWidth} />
      <path d="M10 12.5 v1.5" strokeWidth={strokeWidth} />
      <path d="M22 9 c -1.4 0 -2 1.4 -2 3 c 0 1.6 0.8 2.5 2 2.5 v3.5" strokeWidth={strokeWidth} />
    </>
  );

// 7. Schlafenszeit — ein Mond mit Sternchen
export const SleepIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <path d="M21 6 a8 8 0 1 0 4 10 a6.5 6.5 0 0 1 -4 -10 z" strokeWidth={strokeWidth} />
      <path d="M12 8 l0.8 1.6 l1.6 0.8 l-1.6 0.8 l-0.8 1.6 l-0.8 -1.6 l-1.6 -0.8 l1.6 -0.8 z" strokeWidth={strokeWidth} />
    </>
  );

// 8. Abholzeit — eine kleine Tür / Haus
export const HomeIcon = ({ size = 18, strokeWidth = 1.6 }: IconProps) =>
  base(
    size,
    <>
      <path d="M6 15 l10 -8 l10 8" strokeWidth={strokeWidth} />
      <path d="M8 14 v12 h16 v-12" strokeWidth={strokeWidth} />
      <path d="M14 26 v-6 h4 v6" strokeWidth={strokeWidth} />
    </>
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
