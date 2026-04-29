'use client';

const sections = [
  {
    title: '1. Information We Collect',
    text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us.\n\nThis includes:\n- Account information: name, email address, company name, phone number\n- Usage data: how you interact with our platform, diagnostics created, scores generated\n- Device information: browser type, IP address, operating system\n- Payment information: processed securely through our payment provider (we do not store card details)',
  },
  {
    title: '2. How We Use Your Information',
    text: 'We use the information we collect to:\n- Provide, maintain, and improve our services\n- Process transactions and send related information\n- Send you technical notices, updates, and support messages\n- Respond to your comments, questions, and requests\n- Monitor and analyze trends, usage, and activities\n- Personalize and improve your experience',
  },
  {
    title: '3. Information Sharing',
    text: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following situations:\n- With service providers who assist us in operating our platform\n- To comply with legal obligations or respond to lawful requests\n- To protect the rights, property, or safety of Scorejam, our users, or others\n- With your consent or at your direction',
  },
  {
    title: '4. Data Security',
    text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption in transit and at rest, regular security audits, and access controls.',
  },
  {
    title: '5. Data Retention',
    text: 'We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us.',
  },
  {
    title: '6. Your Rights',
    text: 'Depending on your location, you may have the following rights regarding your personal data:\n- Access: request a copy of your personal data\n- Rectification: request correction of inaccurate data\n- Erasure: request deletion of your data\n- Portability: request transfer of your data\n- Objection: object to the processing of your data\n\nTo exercise these rights, contact us at contact@scorejam.ai.',
  },
  {
    title: '7. Cookies',
    text: 'We use essential cookies to ensure the proper functioning of our platform. We may also use analytics cookies to understand how you use our service. You can manage your cookie preferences through your browser settings.',
  },
  {
    title: '8. Contact Us',
    text: 'If you have any questions about this Privacy Policy, please contact us at:\n\nEmail: contact@scorejam.ai\nAddress: Scorejam SAS, Paris, France',
  },
];

export function PrivacyContent() {
  return (
    <main className="relative pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">Last updated: March 22, 2026</p>

        <div className="flex flex-col gap-10">
          {/* Intro */}
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Scorejam (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
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
