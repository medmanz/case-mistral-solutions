type Palette = "mistral" | "psg";

type Props = {
  size?: number;
  className?: string;
  palette?: Palette;
};

const PALETTES: Record<Palette, { r1: string; r2: string; r3: string; r4: string; r5: string }> = {
  mistral: {
    r1: "#FFD700", // crown yellow
    r2: "#FFAF00", // amber
    r3: "#FF8205", // bridge orange
    r4: "#FA500F", // mistral orange
    r5: "#E10500", // base red
  },
  psg: {
    r1: "#DC241C", // red crown
    r2: "#004170", // navy
    r3: "#DC241C", // red Eiffel band
    r4: "#004170", // navy
    r5: "#004170", // navy base
  },
};

/**
 * Vibe pixelated castle logo, ported from Paper.
 * 5-row gradient. Palette can be 'mistral' (default) or 'psg'.
 */
export function VibeLogo({ size = 34, className, palette = "mistral" }: Props) {
  // Source viewBox in Paper is 212.121 × 151.515, height/width ratio = 0.7142
  const width = size * 1.4;
  const c = PALETTES[palette];
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 212.121 151.515"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Vibe"
    >
      {/* Row 1, crown */}
      <rect x="30.303" y="0" width="30.303" height="30.303" fill={c.r1} />
      <rect x="151.515" y="0" width="30.303" height="30.303" fill={c.r1} />
      {/* Row 2 */}
      <rect x="30.303" y="30.303" width="60.606" height="30.303" fill={c.r2} />
      <rect x="121.212" y="30.303" width="60.606" height="30.303" fill={c.r2} />
      {/* Row 3, bridge */}
      <rect x="30.303" y="60.606" width="151.515" height="30.303" fill={c.r3} />
      {/* Row 4 */}
      <rect x="30.303" y="90.909" width="30.303" height="30.303" fill={c.r4} />
      <rect x="90.909" y="90.909" width="30.303" height="30.303" fill={c.r4} />
      <rect x="151.515" y="90.909" width="30.303" height="30.303" fill={c.r4} />
      {/* Row 5, base */}
      <rect x="0" y="121.212" width="90.909" height="30.303" fill={c.r5} />
      <rect x="121.212" y="121.212" width="90.909" height="30.303" fill={c.r5} />
    </svg>
  );
}
