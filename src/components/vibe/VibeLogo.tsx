type Props = {
  size?: number;
  className?: string;
};

/**
 * Vibe pixelated castle logo, ported from Paper.
 * 5-row gradient: yellow → amber → orange → mistral orange → red.
 */
export function VibeLogo({ size = 34, className }: Props) {
  // Source viewBox in Paper is 212.121 × 151.515, height/width ratio = 0.7142
  const width = size * 1.4;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 212.121 151.515"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Vibe"
    >
      {/* Row 1 — crown (yellow #FFD700) */}
      <rect x="30.303" y="0" width="30.303" height="30.303" fill="#FFD700" />
      <rect x="151.515" y="0" width="30.303" height="30.303" fill="#FFD700" />
      {/* Row 2 — amber #FFAF00 */}
      <rect x="30.303" y="30.303" width="60.606" height="30.303" fill="#FFAF00" />
      <rect x="121.212" y="30.303" width="60.606" height="30.303" fill="#FFAF00" />
      {/* Row 3 — bridge orange #FF8205 */}
      <rect x="30.303" y="60.606" width="151.515" height="30.303" fill="#FF8205" />
      {/* Row 4 — Mistral orange #FA500F */}
      <rect x="30.303" y="90.909" width="30.303" height="30.303" fill="#FA500F" />
      <rect x="90.909" y="90.909" width="30.303" height="30.303" fill="#FA500F" />
      <rect x="151.515" y="90.909" width="30.303" height="30.303" fill="#FA500F" />
      {/* Row 5 — base red #E10500 */}
      <rect x="0" y="121.212" width="90.909" height="30.303" fill="#E10500" />
      <rect x="121.212" y="121.212" width="90.909" height="30.303" fill="#E10500" />
    </svg>
  );
}
