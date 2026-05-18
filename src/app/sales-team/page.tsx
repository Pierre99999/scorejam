import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SalesTeamContent } from '@/components/SalesTeamContent';

export default function SalesTeamPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Header />
      <SalesTeamContent />
      <Footer />
    </div>
  );
}
