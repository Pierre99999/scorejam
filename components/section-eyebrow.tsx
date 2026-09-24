interface SectionEyebrowProps {
  text: string
}

export function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.22em] text-orange">
      {text}
    </span>
  )
}
