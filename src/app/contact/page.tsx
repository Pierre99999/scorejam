import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | ScoreJam',
  description: 'Get in touch with the ScoreJam team. We typically respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--page-bg)]">
      <Header />
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-4">
            Contact Us
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            Get In Touch
          </h1>
          
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12">
            Have a question about ScoreJam? Ready to get started or have questions? Reach out to our team.
          </p>
          
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 hover:border-[var(--card-border-hover)] transition-all duration-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6">
              <Mail className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
              Email Us
            </h2>
            
            <a 
              href="mailto:contact@scorejam.ai"
              className="inline-block text-xl font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity mb-4"
            >
              contact@scorejam.ai
            </a>
            
            <p className="text-sm text-[var(--text-muted)]">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
