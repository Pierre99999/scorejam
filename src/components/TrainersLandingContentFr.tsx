'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, MessageSquare, TrendingUp, Target, Clock, FileCheck, Layers, Award, BarChart3, GraduationCap, Check, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Conçu pour la formation, pas adapté de sondages.',
    description: 'La plupart des formateurs mesurent la formation avec des outils de sondage pensés pour les études marketing ou le NPS. Ils produisent des « moyennes de satisfaction » qui ne disent rien sur l\'efficacité réelle de la formation.',
  },
  {
    icon: Clock,
    title: 'Le diagnostic à 6 mois que presque personne ne réalise.',
    description: 'Chaque formateur sait qu\'il devrait mesurer l\'impact des mois après la fin du programme. Presque aucun ne le fait, car concevoir un instrument de persistance des comportements de zéro est difficile.',
  },
  {
    icon: FileCheck,
    title: 'Des preuves à présenter à un client ou à un dirigeant.',
    description: 'Les retours sur tableur et les exports Typeform ne survivent pas à une réunion avec les parties prenantes. ScoreJam produit des rapports structurés — cartes des écarts classées, rapports d\'amélioration de programme, scores de persistance.',
  },
  {
    icon: Layers,
    title: 'Une plateforme, trois moments, la même cohorte.',
    description: 'Les formateurs qui réalisent les évaluations de besoins dans un outil, les sondages post-programme dans un autre, et qui sautent l\'impact, se retrouvent avec des données déconnectées impossibles à croiser.',
  },
];

const moments = [
  {
    timing: 'Avant',
    title: 'Diagnostic des besoins de formation',
    description: 'Cadrez les programmes selon les écarts réels',
    icon: ClipboardCheck,
    color: 'from-amber-400 to-orange-500',
  },
  {
    timing: 'Juste après',
    title: 'Diagnostic de satisfaction de formation',
    description: 'Évaluez les cohortes d\'une manière qui suscite le changement',
    icon: MessageSquare,
    color: 'from-green-400 to-emerald-500',
  },
  {
    timing: '6 mois plus tard',
    title: 'Diagnostic d\'impact de formation',
    description: 'Prouvez un changement de comportement durable',
    icon: TrendingUp,
    color: 'from-blue-400 to-cyan-500',
  },
];

const specificSituations = [
  {
    title: 'Validation des compétences',
    description: 'Une image concrète de ce que les gens savent réellement faire aujourd\'hui.',
    icon: Award,
    color: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Maturité des compétences',
    description: 'Situez les apprenants sur un continuum du débutant à l\'avancé.',
    icon: BarChart3,
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: 'Préparation à la certification',
    description: 'Prédisez la probabilité de réussite avant l\'examen.',
    icon: GraduationCap,
    color: 'from-teal-400 to-cyan-500',
  },
];

export function TrainersLandingContentFr() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--glow-purple)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--glow-blue)] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-purple-400 text-xs font-medium tracking-wide uppercase mb-6">
              Pour les formateurs
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
              Arrêtez de deviner ce que votre formation{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                change vraiment.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-10">
              ScoreJam offre aux formateurs trois diagnostics qui correspondent aux trois moments qui comptent — avant, juste après, et six mois plus tard. Cadrez les programmes selon les écarts réels. Évaluez les cohortes d&apos;une manière qui suscite réellement le changement. Prouvez un changement de comportement durable aux clients et aux parties prenantes qui ne cessent de demander « est-ce que ça a marché ? »
            </p>

            <a
              href="https://www.scorejam.app/app/categories/trainers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Ouvrir ScoreJam pour les formateurs
              <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Three Moments Section */}
      <section className="py-20 border-t border-[var(--line-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Trois moments qui comptent
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Une plateforme, une mesure cohérente, des insights connectés
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {moments.map((moment, index) => {
              const Icon = moment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 text-center hover:border-purple-500/30 transition-colors"
                >
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${moment.color} text-white text-xs font-bold mb-4`}>
                    {moment.timing}
                  </div>
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${moment.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {moment.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specific Situations Section */}
      <section className="py-16 border-t border-[var(--line-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Pour des situations spécifiques
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {specificSituations.map((situation, index) => {
              const Icon = situation.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 hover:border-purple-500/30 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${situation.color} flex items-center justify-center mb-3 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {situation.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {situation.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 border-t border-[var(--line-subtle)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Vidéo de 30s
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video overflow-hidden"
          >
            <iframe
              src="https://www.youtube.com/embed/a2p1PYM-a60"
              title="ScoreJam pour les formateurs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--card-bg)] border-t border-b border-[var(--line-subtle)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Pourquoi les formateurs choisissent ScoreJam
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-[var(--line-subtle)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Tarifs simples
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Commencez gratuitement, passez à l&apos;offre supérieure quand vous en avez besoin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6"
            >
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                Découverte
              </p>
              <h3 className="text-4xl font-bold text-[var(--text-primary)] mb-1">
                Gratuit
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Parfait pour découvrir ScoreJam
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--text-muted)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Inclus :</span> Créez, prévisualisez et testez 2 diagnostics, sans carte bancaire
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--text-muted)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[var(--text-muted)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Expiration des crédits :</span> Valides jusqu&apos;à utilisation
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Subscription Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-[var(--card-bg)] border-2 border-purple-500/50 rounded-2xl p-6"
            >
              {/* Badge */}
              <div className="absolute -top-3 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 text-white text-xs font-bold">
                  Abonnement
                </span>
              </div>

              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                Abonnement
              </p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-[var(--text-primary)]">14,99</span>
                <span className="text-lg text-[var(--text-secondary)]">€</span>
                <span className="text-sm text-[var(--text-secondary)]">/mois</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Pour les équipes qui veulent de vrais résultats
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-rose-400" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Crédits inclus :</span> 15 crédits / mois
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-rose-400" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-medium">Expiration des crédits :</span> Réinitialisation mensuelle
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Prêt à prouver que votre formation fonctionne ?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Commencez gratuitement. Votre premier diagnostic opérationnel en 5 minutes.
            </p>
            <a
              href="https://www.scorejam.app/app/categories/trainers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-0.5"
            >
              Ouvrir ScoreJam pour les formateurs
              <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
