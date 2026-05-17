import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HRContent } from '@/components/HRContent';

export const metadata = {
  title: 'HR & People Leaders | ScoreJam',
  description: 'Diagnostics for hiring, performance evaluation, engagement, and culture health.',
};

export default function HRPage() {
  return (
    <>
      <Header />
      <HRContent />
      <Footer />
    </>
  );
}
