'use client';

import { AnimatedSection } from './AnimatedSection';

export function AnswersToDecisions() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] rounded-full bg-gradient-radial from-purple-600/10 via-blue-600/5 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            From Answers to Decisions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
            From Answers to Decisions
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            See how responses turn into clear scores, priorities, and concrete actions.
          </p>
        </AnimatedSection>

        {/* Dashboard Preview */}
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-xl p-[1px] bg-gradient-to-br from-purple-500/50 via-blue-500/30 to-purple-500/20 shadow-lg shadow-purple-500/10">
          <div className="rounded-xl bg-gray-50 dark:bg-gray-900 p-6 overflow-hidden">
            
            {/* Segments Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)] text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                SEGMENTS
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Thriving */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400" />
                  <div className="flex items-center gap-1.5 text-yellow-500 text-xs font-semibold mb-2">
                    <span>⭐</span> THRIVING
                  </div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">26</div>
                  <div className="text-sm text-[var(--text-secondary)] mb-3">25.7%</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">High confidence in safety</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Positive interactions</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">Leverage their positive experiences to advocate for programs.</p>
                </div>

                {/* Stable */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-green-500" />
                  <div className="flex items-center gap-1.5 text-green-500 text-xs font-semibold mb-2">
                    <span>✅</span> STABLE
                  </div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">45</div>
                  <div className="text-sm text-[var(--text-secondary)] mb-3">44.6%</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Moderate perceptions</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Mixed interactions</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">Engage them with initiatives to enhance local safety.</p>
                </div>

                {/* At Risk */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-orange-400" />
                  <div className="flex items-center gap-1.5 text-orange-500 text-xs font-semibold mb-2">
                    <span>⚠️</span> AT RISK
                  </div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">20</div>
                  <div className="text-sm text-[var(--text-secondary)] mb-3">19.8%</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Frequent avoidance</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Concerns about crime</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">Implement targeted outreach to address their concerns.</p>
                </div>

                {/* Critical */}
                <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
                  <div className="flex items-center gap-1.5 text-red-500 text-xs font-semibold mb-2">
                    <span>🚨</span> CRITICAL
                  </div>
                  <div className="text-3xl font-bold text-[var(--text-primary)]">10</div>
                  <div className="text-sm text-[var(--text-secondary)] mb-3">9.9%</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Severe safety concerns</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Low trust</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">Immediate intervention required.</p>
                </div>
              </div>
            </div>

            {/* Key Findings Section */}
            <div className="mb-8 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
              <div className="flex items-center gap-2 mb-4 text-[var(--text-primary)] font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Key Findings
              </div>
              
              {/* Finding 1 */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--text-secondary)]">1</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">High fear of crime impacts daily life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-xs text-[var(--text-secondary)]">8/100</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">39%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-[var(--badge-bg)] overflow-hidden mb-1">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '80%' }} />
                </div>
                <p className="text-xs text-[var(--text-secondary)] pl-5">→ Increase community policing and outreach efforts.</p>
              </div>

              {/* Finding 2 */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--text-secondary)]">2</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">Public space safety concerns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-xs text-[var(--text-secondary)]">7/100</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">38%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-[var(--badge-bg)] overflow-hidden mb-1">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '70%' }} />
                </div>
                <p className="text-xs text-[var(--text-secondary)] pl-5">→ Enhance lighting and maintenance in public areas.</p>
              </div>

              {/* Finding 3 */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--text-secondary)]">3</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">Community cohesion is low</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-xs text-[var(--text-secondary)]">6/100</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">20%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-[var(--badge-bg)] overflow-hidden mb-1">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '40%' }} />
                </div>
                <p className="text-xs text-[var(--text-secondary)] pl-5">→ Foster community events to build connections.</p>
              </div>
            </div>

            {/* Risk/Gap Analysis & Priority Actions Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Risk / Gap Analysis */}
              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-semibold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Risk / Gap Analysis
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                    <div className="flex-1">
                      <span className="text-sm text-[var(--text-primary)]">Residents feeling unsafe may leave the community.</span>
                      <span className="text-sm text-[var(--text-secondary)] ml-2">(19%)</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">High</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                    <div className="flex-1">
                      <span className="text-sm text-[var(--text-primary)]">Low engagement in community safety programs.</span>
                      <span className="text-sm text-[var(--text-secondary)] ml-2">(44%)</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">Moderate</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <span className="text-sm text-[var(--text-primary)]">Mismatch between perceived and actual safety.</span>
                      <span className="text-sm text-[var(--text-secondary)] ml-2">(25%)</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">Moderate</span>
                  </div>
                </div>
              </div>

              {/* Priority Actions */}
              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5">
                <div className="flex items-center gap-2 mb-4 text-gray-900 dark:text-white font-semibold">
                  Priority Actions
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">1</span>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-primary)] mb-2">Launch a community safety awareness campaign targeting at-risk areas.</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded border border-red-400/50 text-red-400 text-xs">high priority</span>
                        <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Moderate</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">2</span>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-primary)] mb-2">Increase neighborhood watch programs to enhance community engagement.</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded border border-yellow-400/50 text-yellow-400 text-xs">medium priority</span>
                        <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--text-secondary)] text-xs">Moderate</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">3</span>
                    <div className="flex-1">
                      <p className="text-sm text-[var(--text-primary)] mb-2">Conduct regular safety assessments in public spaces.</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded border border-yellow-400/50 text-yellow-400 text-xs">medium priority</span>
                        <span className="px-2 py-0.5 rounded border border-orange-400/50 text-orange-400 text-xs">Heavy Effort</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
