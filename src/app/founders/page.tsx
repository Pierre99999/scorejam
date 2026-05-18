import { FoundersContent } from '@/components/FoundersContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'ScoreJam for Founders - The diagnostic engine',
  description: 'Pick the question you\'re trying to answer. Diagnostics for market fit, competitive position, pricing, and growth.',
};

export default function FoundersPage() {
  return (
    <>
      <Header />
      <FoundersContent />
      <Footer />
    </>
  );
}
