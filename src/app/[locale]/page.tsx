import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCases } from '@/components/UseCases';
import { ProductPreview } from '@/components/ProductPreview';
import { SocialProof } from '@/components/SocialProof';
import { Differentiation } from '@/components/Differentiation';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <UseCases />
        <ProductPreview />
        <SocialProof />
        <Differentiation />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
