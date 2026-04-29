import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UseCasesPageContent } from '@/components/UseCasesPageContent';

export const metadata = {
  title: 'Use Cases | ScoreJam',
  description: 'Discover how B2B consultants, fractional execs, coaches, and trainers use ScoreJam to prove their value before the call.',
};

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <UseCasesPageContent />
      <Footer />
    </>
  );
}
