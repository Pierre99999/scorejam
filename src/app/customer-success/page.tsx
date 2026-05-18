import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CustomerSuccessContent } from '@/components/CustomerSuccessContent';

export const metadata = {
  title: 'Customer Success | ScoreJam',
  description: 'Diagnostics for customer success teams — implementation readiness, onboarding progress, customer health, and churn risk.',
};

export default function CustomerSuccessPage() {
  return (
    <>
      <Header />
      <CustomerSuccessContent />
      <Footer />
    </>
  );
}
