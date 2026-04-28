import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { B2BTeamsContent } from '@/components/B2BTeamsContent';
import { Problem } from '@/components/Problem';
import { AnswersToDecisions } from '@/components/AnswersToDecisions';
import { Solution } from '@/components/Solution';

export const metadata = {
  title: 'B2B Teams | ScoreJam',
  description: 'ScoreJam for Sales, Customer Success, HR, L&D, Marketing, and Product teams. Qualify leads, assess skills, and capture real user signal.',
};

export default function B2BTeamsPage() {
  return (
    <>
      <Header />
      <B2BTeamsContent />
      <Problem />
      <Solution />
      <AnswersToDecisions />
      <Footer />
    </>
  );
}
