/* Sitzender, wacher Weimaraner im Aquarell-Stil der Startseite.
   Der Schwanz wackelt endlos.  Farbe, Outline und Stil orientieren sich
   am schlafenden Hund-Video: translucentes Grau, schwarze Tinte-Outline,
   rosa Nase. */

export function WaggingDog({
  className = "",
  size = 220,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 300 360"
      width={size}
      height={(size * 360) / 300}
      className={className}
      role="img"
      aria-label="Wacher, sitzender Hund mit wedelndem Schwanz"
      fill="none"
    >
      <defs>
        {/* Wasserfarben-Textur */}
        <filter id="dog-paper" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="2" seed="5" result="n1" />
          <feDisplacementMap in="SourceGraphic" in2="n1" scale="4" xChannelSelector="R" yChannelSelector="G" result="w1" />
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" seed="2" result="n2" />
          <feDisplacementMap in="w1" in2="n2" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* Aquarell-Verlauf für das Fell */}
        <radialGradient id="fur-grad" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#C5C5C5" stopOpacity="0.92" />
          <stop offset="55%" stopColor="#A8A8A8" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#8A8A8A" stopOpacity="0.82" />
        </radialGradient>
        <radialGradient id="ear-grad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0B0B0" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#888" stopOpacity="0.75" />
        </radialGradient>
      </defs>

      <g filter="url(#dog-paper)">
        {/* ===== Schwanz (wedelt) ===== */}
        <g
          style={{
            transformOrigin: "262px 230px",
            animation: "dog-wag 0.9s ease-in-out infinite alternate",
          }}
        >
          {/* Schwanz: leicht geschwungene Form nach rechts oben */}
          <path
            d="M 258 232 Q 278 200 288 172 Q 294 158 280 154 Q 268 152 260 168 Q 250 200 246 230 Z"
            fill="url(#fur-grad)"
            stroke="#1D1D1D"
            strokeWidth="2.4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>

        {/* ===== Hinterbeine / Sitzbasis ===== */}
        <ellipse
          cx="150"
          cy="300"
          rx="95"
          ry="50"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.4"
        />
        {/* linkes Hinterbein */}
        <path
          d="M 95 285 Q 80 305 85 335 Q 90 348 110 345 Q 120 320 118 290 Z"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* rechtes Hinterbein */}
        <path
          d="M 205 285 Q 220 305 215 335 Q 210 348 190 345 Q 180 320 182 290 Z"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Pfoten */}
        <ellipse cx="97" cy="342" rx="20" ry="10" fill="#9E9E9E" stroke="#1D1D1D" strokeWidth="2" />
        <ellipse cx="203" cy="342" rx="20" ry="10" fill="#9E9E9E" stroke="#1D1D1D" strokeWidth="2" />

        {/* ===== Körper (sitzend) ===== */}
        <path
          d="M 80 290 Q 72 220 95 175 Q 120 140 150 138 Q 180 140 205 175 Q 228 220 220 290 Q 150 305 80 290 Z"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* ===== Vorderbeine ===== */}
        <path
          d="M 108 250 Q 100 290 102 320 Q 104 332 120 330 Q 128 300 126 255 Z"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M 192 250 Q 200 290 198 320 Q 196 332 180 330 Q 172 300 174 255 Z"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* vordere Pfoten */}
        <ellipse cx="111" cy="328" rx="16" ry="9" fill="#9E9E9E" stroke="#1D1D1D" strokeWidth="2" />
        <ellipse cx="189" cy="328" rx="16" ry="9" fill="#9E9E9E" stroke="#1D1D1D" strokeWidth="2" />

        {/* ===== Ohren (hängend, lang) ===== */}
        <path
          d="M 92 108 Q 70 120 62 165 Q 58 195 72 200 Q 88 195 96 165 Q 100 135 100 115 Z"
          fill="url(#ear-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.3"
          strokeLinejoin="round"
        />
        <path
          d="M 208 108 Q 230 120 238 165 Q 242 195 228 200 Q 212 195 204 165 Q 200 135 200 115 Z"
          fill="url(#ear-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.3"
          strokeLinejoin="round"
        />

        {/* ===== Kopf ===== */}
        <ellipse
          cx="150"
          cy="120"
          rx="60"
          ry="58"
          fill="url(#fur-grad)"
          stroke="#1D1D1D"
          strokeWidth="2.6"
        />

        {/* ===== Augen (offen, wach) ===== */}
        <g>
          {/* linkes Auge */}
          <ellipse cx="128" cy="110" rx="7" ry="9" fill="#1D1D1D" />
          <circle cx="130" cy="107" r="2.5" fill="#fff" fillOpacity="0.9" />
          {/* rechtes Auge */}
          <ellipse cx="172" cy="110" rx="7" ry="9" fill="#1D1D1D" />
          <circle cx="174" cy="107" r="2.5" fill="#fff" fillOpacity="0.9" />
          {/* Augenbrauen-Stopp (leicht) */}
          <path d="M 118 96 Q 128 92 138 97" stroke="#1D1D1D" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 162 97 Q 172 92 182 96" stroke="#1D1D1D" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </g>

        {/* ===== Schnauze ===== */}
        <ellipse cx="150" cy="145" rx="30" ry="22" fill="#B5B5B5" fillOpacity="0.7" stroke="#1D1D1D" strokeWidth="2" />

        {/* ===== Nase (rosa, herzförmig wie beim Original) ===== */}
        <path
          d="M 150 138 C 144 130 136 133 138 140 C 139 145 150 152 150 152 C 150 152 161 145 162 140 C 164 133 156 130 150 138 Z"
          fill="#D1A1A9"
          stroke="#1D1D1D"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M 150 152 L 150 160" stroke="#1D1D1D" strokeWidth="1.4" strokeLinecap="round" />

        {/* ===== Mund (leicht lächelnd / entspannt) ===== */}
        <path
          d="M 150 160 Q 140 170 132 166"
          stroke="#1D1D1D"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 150 160 Q 160 170 168 166"
          stroke="#1D1D1D"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <style>{`
        @keyframes dog-wag {
          0%   { transform: rotate(-18deg); }
          100% { transform: rotate(22deg); }
        }
      `}</style>
    </svg>
  );
}
