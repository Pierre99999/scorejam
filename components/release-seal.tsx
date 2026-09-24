/**
 * A small hand-stamped seal pinned to a book cover to announce its publication
 * date. Drawn entirely with CSS so it stays crisp and translatable — no image.
 */
export function ReleaseSeal({
  label,
  day,
  className = "",
  size = "md",
}: {
  label: string
  day: string
  /** Positioning is left to the caller, since covers differ in size. */
  className?: string
  size?: "sm" | "md"
}) {
  const box = size === "sm" ? "h-16 w-16" : "h-20 w-20"
  const labelText = size === "sm" ? "text-[7px]" : "text-[8px]"
  const dayText = size === "sm" ? "text-[11px]" : "text-sm"

  return (
    <div
      className={`pointer-events-none absolute grid ${box} -rotate-12 place-items-center rounded-full bg-navy text-white shadow-lg ring-2 ring-paper ${className}`}
    >
      {/* Read as one phrase, since the stacked lines would be announced separately */}
      <span className="sr-only">{`${label} ${day}`}</span>
      {/* The dashed inner ring is what makes it read as a stamp rather than a badge */}
      <span aria-hidden="true" className="absolute inset-1 rounded-full border border-dashed border-white/45" />
      <span aria-hidden="true" className="flex flex-col items-center leading-none">
        <span className={`${labelText} font-semibold uppercase tracking-[0.14em] text-white/80`}>{label}</span>
        <span className={`mt-1 font-serif ${dayText} font-normal`}>{day}</span>
      </span>
    </div>
  )
}
