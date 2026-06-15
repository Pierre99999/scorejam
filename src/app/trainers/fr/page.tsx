import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrainersLandingContentFr } from '@/components/TrainersLandingContentFr';

export const metadata = {
  title: 'ScoreJam pour les formateurs - Arrêtez de deviner ce que votre formation change vraiment',
  description: 'ScoreJam offre aux formateurs trois diagnostics qui correspondent aux trois moments qui comptent — avant, juste après, et six mois plus tard.',
};

export default function TrainersFrPage() {
  return (
    <>
      <Header />
      <TrainersLandingContentFr />
      <Footer />
    </>
  );
}
