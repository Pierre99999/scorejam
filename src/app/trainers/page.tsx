import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrainersLandingContent } from '@/components/TrainersLandingContent';

export const metadata = {
  title: 'ScoreJam for Trainers - Stop guessing what your training actually changes',
  description: 'ScoreJam gives trainers three diagnostics that line up with the three moments that matter — before, right after, and six months later.',
};

export default function TrainersPage() {
  return (
    <>
      <Header />
      <TrainersLandingContent />
      <Footer />
    </>
  );
}
