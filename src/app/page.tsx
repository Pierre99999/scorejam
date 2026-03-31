import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { ParticipantExperience } from '@/components/ParticipantExperience';
import { UseCases } from '@/components/UseCases';
import { Channels } from '@/components/Channels';
import { InlineCTA } from '@/components/InlineCTA';
import { ProductPreview } from '@/components/ProductPreview';
import { SocialProof } from '@/components/SocialProof';
import { Differentiation } from '@/components/Differentiation';

import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ProductPreview />
        <HowItWorks />
        <ParticipantExperience />
        <UseCases />
        <InlineCTA />
        <SocialProof />
        <Differentiation />
        <Channels />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
