import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { AnswersToDecisions } from '@/components/AnswersToDecisions';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { ParticipantExperience } from '@/components/ParticipantExperience';
import { UseCases } from '@/components/UseCases';
import { Channels } from '@/components/Channels';
import { FAQ } from '@/components/FAQ';
import { InlineCTA } from '@/components/InlineCTA';
import { Differentiation } from '@/components/Differentiation';

import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Problem />
        <AnswersToDecisions />
        <ParticipantExperience />
        <Solution />
        <HowItWorks />
        <InlineCTA />
        <Differentiation />
        <Channels />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
