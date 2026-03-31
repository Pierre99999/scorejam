"use client";

// Use cases component for team-specific diagnostics
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

type TabKey = "sales" | "marketing" | "customer-success" | "product" | "hr" | "training";

interface TabContent {
  tabKey: TabKey;
  label: string;
  scenario: string;
}

const tabs: TabContent[] = [
  {
    tabKey: "sales",
    label: "Sales",
    scenario: "Your sales team sends a 3-minute diagnostic to 50 prospects. Within a day, the dashboard shows 12 are in the \"Critical Need\" segment with high buying readiness — and exactly which pain points to lead with. The other 38 get nurtured automatically. No pipeline reviews. No guessing.",
  },
  {
    tabKey: "customer-success",
    label: "Customer Success",
    scenario: "You run a health check diagnostic across 80 accounts. The dashboard flags 6 silently at-risk customers — accounts that score fine on satisfaction but show churn-pattern signals underneath. Your team reaches out before the renewal conversation, not after.",
  },
  {
    tabKey: "hr",
    label: "HR",
    scenario: "After onboarding 30 new hires, you run a readiness diagnostic. Instead of a spreadsheet of Likert-scale averages, you see exactly which teams are ramping well, which are stuck, and what's causing the gap — with specific recommendations per segment.",
  },
  {
    tabKey: "training",
    label: "Learning",
    scenario: "You delivered a certification program to 60 people. The diagnostic shows who actually retained the skills vs. who passed on momentum. The analytics separate real competency gaps from confidence gaps — so you know where to reinvest.",
  },
  {
    tabKey: "marketing",
    label: "Marketing",
    scenario: "You need to understand how your market perceives your positioning. The diagnostic goes to 100 contacts. You get back structured awareness segments, message-resonance scores, and the exact gaps between what you're saying and what they're hearing.",
  },
  {
    tabKey: "product",
    label: "Product",
    scenario: "You're prioritizing the next quarter's roadmap. A feature-priority diagnostic goes to 200 users. Instead of a wishlist, you get scored feature demand cross-referenced by user segment, adoption maturity, and pain intensity. The roadmap writes itself.",
  },
];

const tabKeys: TabKey[] = ["sales", "customer-success", "hr", "training", "marketing", "product"];

export function UseCases() {
  const [activeTab, setActiveTab] = useState<TabKey>("sales");

  const activeContent = tabs.find((tab) => tab.tabKey === activeTab)!;

  return (
    <section id="use-cases" className="relative py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section heading */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight">
            Built For Your Team
          </h2>
        </AnimatedSection>

        {/* Tab buttons */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {tabKeys.map((key) => {
            const tab = tabs.find((t) => t.tabKey === key)!;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border",
                  activeTab === key
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-900/30"
                    : "text-[var(--text-secondary)] border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-border-hover)] hover:text-[var(--text-primary)]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </AnimatedSection>

        {/* Tab content with AnimatePresence crossfade */}
        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="relative rounded-2xl p-px bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-500/5">
                <div className="relative rounded-2xl bg-[var(--card-bg)] p-8 sm:p-10 overflow-hidden backdrop-blur-sm">
                  {/* Subtle inner glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--glow-purple)] blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[var(--glow-blue)] blur-2xl pointer-events-none" />

                  <div className="relative">
                    {/* Scenario text */}
                    <p className="text-[var(--text-secondary)] text-lg sm:text-xl leading-relaxed">
                      {activeContent.scenario}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
