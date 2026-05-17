import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductManagerContent } from '@/components/ProductManagerContent';

export const metadata = {
  title: 'Product Manager | ScoreJam',
  description: 'Diagnostics for product managers — feature prioritization, beta validation, UX assessment, and more.',
};

export default function ProductManagerPage() {
  return (
    <>
      <Header />
      <ProductManagerContent />
      <Footer />
    </>
  );
}
