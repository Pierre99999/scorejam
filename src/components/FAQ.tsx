'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const faqs = [
  {
    question: 'Who is ScoreJam for?',
    answer: 'Three groups, mostly:\n\nCommercial leaders — Heads of Sales, CS, and revenue who want to know which deals are real, which customers are about to leave, and which ones are ready to grow. They\'ve made enough decisions on instinct. They want the instinct pressure-tested by the people closest to the truth — prospects, customers, the buyers who said no.\n\nPeople leaders — Trainers, L&D owners, HR and People leads who want to know whether the training is hitting, whether the engagement is real or performative, whether the new hire fits the role, whether the culture says what it does. They run programs on cohorts of humans and want a way to ask those humans honestly.\n\nProduct and founder operators — PMs, founders, and GTM leaders who want to know whether the roadmap matches what users actually need, whether the messaging lands, whether there\'s PMF, whether the price is leaving money on the table. They\'ve heard enough conference advice. They want their own data.\n\nIf you\'ve ever made a decision about people, deals, or product based on a hunch you wished you could pressure-test — ScoreJam is for you.',
  },
  {
    question: 'What is ScoreJam?',
    answer: 'ScoreJam turns every questionnaire into a two-way exchange. Participants answer — and instantly get a personalized score and recommendations. You get structured, scored, segment-ready data you can act on the same day. The AI does the hard part: asking sharper questions, scoring answers against weighted criteria, and turning raw responses into concrete next steps.',
  },
  {
    question: 'How does ScoreJam work?',
    answer: 'Pick one of 33+ pre-wired diagnostics — lead qualifier, churn risk, product-market fit, skills check, culture health, pricing explorer, and more — or build your own. Drop in your expertise and context. ScoreJam generates the focus areas, writes the questions, scores every response, and delivers a personalized report to each participant plus an analytics dashboard for you.',
  },
  {
    question: 'What makes ScoreJam different?',
    answer: 'Form builders collect. ScoreJam diagnoses. Every path ships with weighted focus areas, scoring logic, and AI-generated recommendations built on real domain expertise — not empty templates. Participants get genuine value on the spot, which is why they answer honestly. You get data that\'s already structured for decisions, not a spreadsheet to untangle.',
  },
  {
    question: 'How much does ScoreJam cost?',
    answer: 'Pricing starts at $14.99/month and scales with ambition, not feature gates. Tiers map to what you\'re actually running — a lightweight lead qualifier, a multi-segment market diagnostic, or a full certification-readiness assessment.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[var(--line-subtle)] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-[var(--text-primary)] pr-4">{question}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center text-purple-400 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <div className="pb-5 text-[var(--text-secondary)] leading-relaxed space-y-4">
          {answer.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Everything you need to know about ScoreJam
          </p>
        </AnimatedSection>

        {/* FAQ Items */}
        <AnimatedSection delay={0.1}>
          <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--line-subtle)] p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
