import type { MethodTheme } from "@/lib/site-content"

type MethodCopy = {
  title: string
  highlight: string
  frameworks: string
  origin: { start: string; strong: string; end: string }
  /** Two paragraphs under the origin line: the reveal, then the closing tagline. */
  elaboration: {
    reveal: { start: string; strong: string; rest: string }
    closer: { plain: string; strong: string; rest: string }
  }
  chain: string[]
}

/**
 * Sales Unlocked is argued, not diagrammed: the only structural element is the
 * Conversations → Intelligence → Decision chain, which is part of the argument.
 */
export function SalesMethod({
  copy,
  eyebrow,
  theme,
}: {
  copy: MethodCopy
  eyebrow: string
  theme: MethodTheme
}) {
  return (
    <>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${theme.accentText}`}>{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
        <span className="block text-balance">{copy.title}</span>
        <span className="block text-balance">{copy.highlight}</span>
      </h2>

      <div className="mt-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">{copy.frameworks}</p>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {copy.origin.start}
          <strong className="font-semibold text-navy">{copy.origin.strong}</strong>
          {copy.origin.end}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          {copy.elaboration.reveal.start}
          <strong className="font-semibold text-navy">{copy.elaboration.reveal.strong}</strong>
          {copy.elaboration.reveal.rest}
        </p>
        <p className="mt-6 font-serif text-xl leading-snug text-navy md:text-2xl">
          {copy.elaboration.closer.plain}
          <strong className="font-semibold">{copy.elaboration.closer.strong}</strong>
          {copy.elaboration.closer.rest}
        </p>
      </div>

      {/* The one structural claim of the method */}
      <ol className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-line py-6">
        {copy.chain.map((step, i) => (
          <li key={step} className="flex items-center gap-5">
            {i > 0 && (
              <span className={`text-xl ${theme.accentText}`} aria-hidden="true">
                &rarr;
              </span>
            )}
            <span className="font-serif text-2xl leading-none text-navy md:text-3xl">{step}</span>
          </li>
        ))}
      </ol>
    </>
  )
}
