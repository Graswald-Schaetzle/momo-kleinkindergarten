/* Neu gezeichnete Illustration eines schlafenden Hundes auf einem Kissen,
   als reines SVG (also von Natur aus transparent, keine Karte/Box drumherum).
   Ersetzt das Lovable-Video, dessen cremefarbener Kartenhintergrund sich
   nicht zuverlässig freistellen ließ und für das keine Lovable-Credits mehr
   zur Verfügung stehen, um eine transparente Version zu erzeugen. */

export function SleepingDogIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 360"
      className={`breathing-dog ${className}`}
      role="img"
      aria-label="Aquarell-artige Illustration: schlummernder grauer Hund auf einem rotbraunen Kissen"
    >
      <defs>
        <filter id="dogTexture" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"
          />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
        <filter id="dogShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#2B1B26" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#dogShadow)">
        {/* Kissen */}
        <path
          d="M 40 272
             C 42 232, 130 215, 262 218
             C 396 221, 480 240, 478 276
             C 476 308, 392 328, 262 326
             C 132 324, 38 310, 40 272 Z"
          fill="#8B4A3A"
          stroke="#2B1B26"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M 70 266 C 160 280, 340 282, 450 263"
          fill="none"
          stroke="#6E3A2D"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      <g filter="url(#dogTexture)">
        {/* Vordere Pfote, unter dem Kinn hervorschauend */}
        <path
          d="M 300 258
             C 296 248, 310 240, 326 242
             C 340 244, 348 254, 344 264
             C 340 273, 324 277, 310 271
             C 303 268, 300 264, 300 258 Z"
          fill="#B7AC9D"
          stroke="#2B1B26"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Gekringelter Körper */}
        <path
          d="M 92 240
             C 58 205, 60 130, 118 100
             C 172 72, 252 74, 298 108
             C 328 132, 336 168, 322 196
             C 336 218, 330 244, 308 258
             C 262 282, 178 280, 128 264
             C 108 257, 96 250, 92 240 Z"
          fill="#A79C8E"
          stroke="#2B1B26"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Schattierung auf dem Rücken */}
        <path
          d="M 130 130 C 172 96, 240 88, 288 112 C 246 104, 180 116, 148 148 Z"
          fill="#8F8375"
          opacity="0.6"
        />

        {/* Ohr, hängt herab */}
        <path
          d="M 336 168
             C 310 182, 298 218, 308 252
             C 313 268, 330 277, 341 268
             C 329 248, 325 216, 335 186
             C 338 180, 338 172, 336 168 Z"
          fill="#8F8375"
          stroke="#2B1B26"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        {/* Kopf-Profil, verschmilzt zur Schnauze */}
        <path
          d="M 296 196
             C 300 158, 340 130, 388 128
             C 432 126, 466 148, 480 182
             C 490 206, 486 230, 468 246
             C 460 253, 450 256, 440 254
             C 434 262, 420 265, 408 258
             C 398 268, 380 268, 368 258
             C 340 268, 312 258, 300 234
             C 292 220, 291 207, 296 196 Z"
          fill="#A79C8E"
          stroke="#2B1B26"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Nase */}
        <ellipse cx="470" cy="196" rx="9" ry="7" fill="#4A362D" stroke="#2B1B26" strokeWidth="2" />

        {/* geschlossenes Auge, deutlich sichtbar */}
        <path
          d="M 368 192 Q 386 206 406 194"
          fill="none"
          stroke="#2B1B26"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
