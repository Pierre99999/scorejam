'use client';

const sections = [
  {
    title: '1. Acceptance of Terms',
    text: 'By accessing or using Scorejam, you agree to these Terms and our Privacy Policy. If you do not agree, you may not use our services. If you are using our services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.',
  },
  {
    title: '2. Description of Service',
    text: 'Scorejam is an AI-powered scoring platform that enables users to create diagnostics, collect responses, and generate insights. We offer free and paid subscription plans with varying features and credit allowances.',
  },
  {
    title: '3. User Accounts',
    text: 'To use our services, you must create an account with accurate and complete information. You are responsible for:\n- Maintaining the confidentiality of your account credentials\n- All activities that occur under your account\n- Notifying us immediately of any unauthorized use',
  },
  {
    title: '4. Subscription and Payments',
    text: 'Paid plans are billed in advance on a monthly basis. Credit packs are one-time purchases. All prices are in USD unless otherwise stated.\n- You may cancel your subscription at any time, effective at the end of the current billing period\n- Refunds are handled on a case-by-case basis\n- We reserve the right to change pricing with 30 days notice\n- Credits purchased through packs never expire',
  },
  {
    title: '5. Acceptable Use',
    text: 'You agree not to:\n- Use the service for any unlawful purpose\n- Attempt to gain unauthorized access to our systems\n- Interfere with or disrupt the service\n- Upload malicious content or code\n- Resell or redistribute the service without authorization\n- Use the service to collect data in violation of applicable privacy laws',
  },
  {
    title: '6. Intellectual Property',
    text: 'The Scorejam platform, including its design, features, and content, is owned by Scorejam SAS and protected by intellectual property laws. You retain ownership of the data you submit to the platform. By using our service, you grant us a limited license to process your data solely to provide the service.',
  },
  {
    title: '7. Limitation of Liability',
    text: 'To the maximum extent permitted by law, Scorejam shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.',
  },
  {
    title: '8. Termination',
    text: 'We may suspend or terminate your access to the service at any time for violation of these Terms, with reasonable notice when possible. Upon termination, your right to use the service ceases immediately. You may request export of your data within 30 days of termination.',
  },
  {
    title: '9. Changes to Terms',
    text: 'We may modify these Terms at any time. We will notify you of material changes via email or through the platform. Your continued use of the service after changes take effect constitutes acceptance of the modified Terms.',
  },
  {
    title: '10. Governing Law',
    text: 'These Terms are governed by the laws of France. Any disputes shall be resolved in the competent courts of Paris, France.\n\nFor questions about these Terms, contact us at legal@scorejam.com.',
  },
];

export function TermsContent() {
  return (
    <main className="relative pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: March 22, 2026</p>

        <div className="flex flex-col gap-10">
          {/* Intro */}
          <p className="text-[var(--text-secondary)] leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Scorejam platform. By using our services, you agree to be bound by these Terms.
          </p>

          {/* Sections */}
          {sections.map(({ title, text }) => (
            <section key={title}>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {title}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
