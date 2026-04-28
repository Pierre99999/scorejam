import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { VideoSection } from '@/components/VideoSection';
import { HowItWorks } from '@/components/HowItWorks';
import { ParticipantExperience } from '@/components/ParticipantExperience';
import { UseCases } from '@/components/UseCases';
import { Objections } from '@/components/Objections';
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
        <TrustStrip />
        <VideoSection />
        <UseCases />
        <Objections />
        <ParticipantExperience />
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
