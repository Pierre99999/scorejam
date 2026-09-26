"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Sparkle, X } from "lucide-react"

const SIGNUP_URL = "https://www.switch34.com/signup"

type Lang = "fr" | "en"

type FaqItem = { q: string; a: string[]; todo?: string }

const CONTENT = {
  fr: {
    cta: "Essayer Switch gratuitement",
    noCard: "Sans carte bancaire.",
    newTab: "ouvre un nouvel onglet",
    todoLabel: "À compléter",

    hero: {
      eyebrow: "SWITCH · VENTES COMPLEXES B2B",
      title: ["Vous croyez savoir où en sont vos deals.", "La plupart du temps, vous devinez."],
      description: "Switch lit vos conversations clients et distingue ce que vous **savez** de ce que vous **supposez**.",
      benefit: ["Sachez quels deals sont réels.", "Ce qui manque.", "Et quoi faire ensuite."],
      slot: "L'analyse d'un deal : ce qui est établi, ce qui manque, la prochaine action.",
      panel: {
        aside: "OÙ EN EST LE DEAL",
        round: "Round 6",
        eyebrow: "LA DÉCISION APPROCHE",
        title: "Une décision est prévue le 30 septembre — dans 5 jours.",
        lead: "Ce sur quoi elle va se jouer, et où vous êtes encore court — du plus fragile au moins fragile :",
        items: [
          { label: "Réalité d'adoption", score: "2,5" },
          { label: "Crédibilité et perception", score: "2,5" },
          { label: "Adéquation problème/solution", score: "2,9" },
        ],
      },
    },

    crm: {
      title: ["Votre CRM sait ce que vous lui avez dit.", "Switch sait ce que le client vous a dit."],
      lines: [
        "Le rendez-vous s'est bien passé.",
        "Le client a aimé la démo. Il a demandé une proposition. Il a dit que le projet était important.",
        "Donc le deal a l'air bien engagé.",
      ],
      questions: [
        "Mais a-t-il vraiment confirmé le problème ?",
        "Y a-t-il une vraie raison d'agir maintenant ?",
        "Savez-vous qui intervient dans la décision ?",
        "L'impact est-il assez fort pour justifier un changement ?",
        "Ou comblez-vous les vides vous-même ?",
      ],
      close: "C'est là que les deals se gagnent ou se perdent.",
    },

    meeting: {
      title: "Un bon rendez-vous ne fait pas un bon deal.",
      intro: [
        "Les commerciaux manquent rarement d'informations.",
        "Ils manquent de clarté sur les informations qu'ils ont déjà.",
      ],
      separates: "Après chaque conversation, Switch distingue :",
      cats: [
        { label: "Établi", body: "Ce que le client a réellement confirmé." },
        { label: "Supposé", body: "Ce que vous croyez mais n'avez pas validé." },
        { label: "Manquant", body: "Ce qu'il vous reste à comprendre." },
        { label: "Changé", body: "Ce qui s'est renforcé ou affaibli depuis la dernière conversation." },
        { label: "Suite", body: "Ce que la prochaine conversation doit accomplir." },
      ],
      notSummary: "Pas un énième compte rendu d'appel.",
      clearer: "Un deal plus clair.",
      slot: "Une conversation répartie en Établi · Supposé · Manquant · Changé · Suite.",
    },

    builtFor: {
      title: "Conçu pour les ventes qui demandent plus d'une conversation.",
      lines: [
        "Switch est conçu pour les **ventes B2B complexes**.",
        "Des ventes où les décisions se construisent dans le temps.",
      ],
      attributes: [
        "Plusieurs conversations.",
        "Plusieurs interlocuteurs.",
        "Des priorités concurrentes.",
        "Une urgence floue.",
        "De la politique interne.",
        "De vraies conséquences en cas de mauvaise décision.",
      ],
      designedForIntro: "Switch est fait pour :",
      designedFor: [
        "Les équipes de vente B2B",
        "Les fondateurs qui vendent des produits ou services complexes",
        "Les Account Executives",
        "Les managers et directeurs commerciaux",
      ],
      inYes: "Si votre vente dépend de la compréhension de **la façon dont un client prend sa décision**, Switch est fait pour vous.",
      inNo: "Si la vente se conclut en un seul appel ou est purement transactionnelle, ce n'est probablement pas pour vous.",
    },

    loop: {
      title: "Chaque conversation devrait faire évoluer le deal.",
      intro: [
        "Switch n'analyse pas les rendez-vous isolément.",
        "Il construit sa compréhension du deal **conversation après conversation**.",
      ],
      cycle: "Et le cycle continue jusqu'à ce que vous **gagniez — ou décidiez que le deal ne vaut pas la peine.**",
      remembersConversation: "Switch ne se souvient pas seulement de la conversation.",
      remembersDeal: "Il se souvient du deal.",
      flow: {
        playbook: {
          label: "SALES PLAYBOOK",
          desc: "ce que vous vendez, à qui, contre qui — et ce que le directeur commercial sait",
        },
        sameRef: "la même référence",
        boxes: [
          { n: 1, title: "Le deal", desc: "site et documents lus, puis confrontés au playbook" },
          { n: 2, title: "Le briefing", desc: "les questions que ce moment du deal réclame" },
          { n: 3, title: "La conversation", desc: "capturée, attribuée à des voix pesées selon leur rôle" },
          { n: 4, title: "Le diagnostic", desc: "trois portes, un momentum, vingt critères plafonnés" },
        ],
        connectors: ["ce qui manque", "à établir", "ce qui a été dit"],
        brace: "le seul geste du vendeur",
        feedback: "round suivant : le diagnostic écrit le briefing",
        note: {
          label: "AUCUNE MISE À JOUR MANUELLE DU DEAL",
          desc: "Pas de formulaires façon CRM. Pas de notation manuelle. Pas de questionnaire sur l'état du deal. Le vendeur apporte la conversation. Switch construit l'analyse.",
        },
      },
    },

    combines: {
      title: ["Vos conversations.", "Votre playbook.", "La prochaine action."],
      intro: "Switch combine trois choses.",
      blocks: [
        {
          n: "01",
          label: "Votre client",
          lines: ["Ce qu'il a réellement dit — comptes rendus, transcriptions, tout ce qui a été recueilli pendant le deal."],
        },
        {
          n: "02",
          label: "Votre playbook",
          lines: [
            "Votre offre, vos clients, votre positionnement, votre valeur.",
            "Ce qui vous fait gagner. Ce qui vous fait perdre.",
          ],
        },
        {
          n: "03",
          label: "Sales Unlocked",
          lines: ["La discipline derrière Switch : comment un client passe d'un problème à une décision."],
        },
      ],
      closeLead: "Switch n'analyse pas une conversation dans le vide.",
      closeStrong:
        "Il analyse cette conversation dans le contexte de votre client, de votre activité et du deal que vous cherchez à gagner.",
    },

    fourQ: {
      title: ["Quatre questions.", "Chaque deal."],
      intro: "Switch évalue en continu chaque opportunité à travers quatre questions.",
      questions: [
        {
          title: "Y a-t-il une opportunité ?",
          lines: ["Y a-t-il un vrai problème ?", "Est-il assez important ?", "Y a-t-il une raison de changer ?"],
        },
        {
          title: "Pouvons-nous gagner ?",
          lines: ["Sommes-nous pertinents ?", "Sommes-nous différenciés ?", "Le client voit-il pourquoi nous ?"],
        },
        {
          title: "L'impact est-il assez fort ?",
          lines: [
            "Que se passe-t-il s'ils agissent ?",
            "Que se passe-t-il s'ils n'agissent pas ?",
            "La valeur est-elle assez significative pour justifier la décision ?",
          ],
        },
        {
          title: "Y a-t-il une dynamique ?",
          lines: [
            "Pourquoi maintenant ?",
            "Qu'est-ce qui fait avancer la décision ?",
            "Qui doit être impliqué ?",
            "Qu'est-ce qui pourrait l'arrêter ?",
          ],
        },
      ],
      evolve: "Ces quatre questions évoluent après chaque conversation.",
      closeStrong: "Parce qu'un deal n'est pas une étape. C'est une décision en mouvement.",
      slot: "Les quatre questions évaluées sur un deal.",
      chart: {
        eyebrow: "L'ÉVOLUTION DES NOTES",
        hint: "Cliquez un round pour lire ce qu'il a changé",
        rounds: [
          { id: "R1", date: "13 juil." },
          { id: "R2", date: "14 juil." },
          { id: "R3", date: "10 sept." },
          { id: "R4", date: "10 sept." },
          { id: "R5", date: "23 sept.", who: "Paul" },
        ],
        series: ["L'opportunité", "La capacité à gagner", "L'impact", "Momentum"],
      },
    },

    sequence: {
      flow: "Conversation → Analyse → Briefing → Conversation.",
      title: "Avant, après et entre les rendez-vous.",
    },

    before: {
      label: "Avant le rendez-vous",
      lead: "Switch prépare le briefing. Pas vingt questions génériques : celles qui comptent **maintenant**.",
      items: [
        "Ce qui compte maintenant.",
        "Ce qui manque encore.",
        "Ce qui doit être validé.",
        "Les questions à poser.",
        "Les objections possibles.",
        "L'objectif de la conversation.",
      ],
      close: "Vous arrivez en sachant **pourquoi vous y êtes.**",
      cta: "Créer le briefing du round 3",
    },

    after: {
      label: "Après le rendez-vous",
      lead: "Importez le compte rendu ou la transcription. Switch identifie :",
      items: [
        "Ce qui a été confirmé.",
        "Ce qui reste supposé.",
        "Ce qui a changé.",
        "Ce qui s'est renforcé ou affaibli.",
        "Ce qui a été manqué.",
      ],
      dialog: {
        title: "Importer la conversation du round 6",
        desc: "Round 6. Switch le lit, attribue chaque propos à celui qui l'a tenu, note les critères et met à jour le diagnostic.",
        drop: "Choisir un fichier — Gong, Fireflies, Granola, Otter, Teams, Zoom…",
        or: "ou collez-le",
        paste: "Collez le transcript. Gardez les noms des intervenants : Switch pondère chaque propos selon le rôle de celui qui l'a dit.",
        more: "Un élément est venu avec cette conversation",
        analyze: "Analyser la conversation",
        manual: "Pas de transcript ? Saisir à la main",
      },
    },

    between: {
      label: "Entre les rendez-vous",
      lead: "Switch aide à choisir la bonne prochaine action :",
      items: [
        "Relancer.",
        "Clarifier.",
        "Confirmer.",
        "Partager quelque chose d'utile.",
        "Faire entrer un autre interlocuteur.",
        "Ou, délibérément, ne rien faire encore.",
      ],
      objNot: "L'objectif n'est pas de rester visible.",
      objYes: "C'est de faire avancer la décision.",
    },

    forReps: {
      eyebrow: "POUR LES COMMERCIAUX",
      title: "Sachez où vous en êtes vraiment.",
      intro: "Switch vous aide à voir la différence entre votre perception du deal et les preuves qu'il contient.",
      items: [
        "Repérez où vous êtes trop optimiste.",
        "Repérez où vous êtes trop pessimiste.",
        "Sachez ce qui vous manque.",
        "Sachez quoi demander ensuite.",
        "Sachez quand pousser.",
        "Sachez quand ne pas le faire.",
        "Et sachez quand un deal doit être abandonné.",
      ],
      close: "Moins de suppositions. De meilleures conversations. De meilleures décisions.",
      slot: "La vue d'un commercial : perception face aux preuves.",
    },

    forLeaders: {
      eyebrow: "POUR LES DIRECTEURS COMMERCIAUX",
      title: ["Arrêtez de gérer le récit.", "Gérez les preuves."],
      intro: ["Vos commerciaux vous disent qu'un deal est à 80 %.", "Switch vous montre pourquoi.", "Ou pourquoi pas."],
      close:
        "Les revues de deals deviennent des conversations sur **les preuves et l'action**, pas sur la confiance et les pourcentages du CRM.",
    },

    mission: {
      eyebrow: "MISSION CONTROL",
      title: ["N'inspectez pas chaque deal.", "Sachez où intervenir."],
      intro: "Switch offre aux directeurs commerciaux une vue portefeuille de leurs opportunités.",
      showsIntro: "Sur toute l'équipe, Mission Control montre :",
      items: [
        "Quels deals demandent de l'attention — et pourquoi.",
        "Où des preuves manquent.",
        "Où des hypothèses sont prises pour des faits.",
        "Où la dynamique s'affaiblit.",
        "Où un commercial a besoin d'aide.",
        "Où votre attention aura le plus d'impact.",
      ],
      notDashboard: "Switch n'est pas un tableau de bord de plus à surveiller.",
      isWay: "C'est une façon de savoir où votre attention a de la valeur.",
      scatter: {
        legend: {
          inplay: "en cours",
          stale: "rien depuis 10 jours",
          off: "hors playbook",
          decision: "date de décision fixée",
        },
        zones: ["L'opportunité", "La capacité à gagner", "L'impact"],
        xLeft: "Début",
        xCenter: "Portes franchies",
        xRight: "Signature",
        yLabel: "Momentum",
      },
    },

    methodology: {
      title: "Votre méthode de vente n'a pas besoin d'être remplacée.",
      questions: ["Vous utilisez déjà MEDDIC ?", "SPIN ?", "Challenger ?", "Sandler ?", "Votre propre méthode ?"],
      keepIt: "Gardez-la.",
      notAnother: "Switch n'est pas une méthode de plus que vos commerciaux doivent mémoriser.",
      turns:
        "Il transforme votre savoir-faire commercial existant en quelque chose d'applicable **dans chaque deal réel, après chaque conversation réelle.**",
      playbookStops: "Votre playbook cesse de vivre dans un support de formation.",
      startsLiving: "Il se met à vivre dans la vente.",
    },

    notCrm: {
      title: "Switch n'est pas un CRM de plus.",
      crmRecords: "Votre CRM enregistre l'opportunité.",
      switchHelps: "Switch vous aide à la comprendre.",
      cols: [
        { label: "CRM", q: "Qu'a saisi le commercial ?", items: ["Contacts.", "Activités.", "Étapes.", "Montants.", "Dates de closing."] },
        {
          label: "Intelligence conversationnelle",
          q: "Que s'est-il passé pendant l'appel ?",
          items: ["Enregistrement.", "Transcription.", "Résumé.", "Sujets."],
        },
        { label: "Prévision", q: "Que pourrait-il se passer ?", items: ["Probabilité du pipeline.", "Prévision.", "Risque."] },
        {
          label: "Switch",
          q: "Que faut-il comprendre et faire ensuite ?",
          items: ["Preuves.", "Hypothèses.", "Informations manquantes.", "Évolution du deal.", "Prochaine conversation."],
        },
      ],
      close1: "Switch ne remplace pas les systèmes dont vous avez besoin pour enregistrer votre activité commerciale.",
      close2: "Il change ce que vous faites de la conversation elle-même.",
    },

    training: {
      title: "De la formation à la discipline commerciale.",
      lines: [
        "La plupart des formations à la vente se déroulent en dehors du deal.",
        "Un atelier. Un cadre. Un playbook.",
        "Puis chacun retourne au travail — et à ses vieilles habitudes.",
      ],
      putsInside: [
        "Switch met la discipline **à l'intérieur du deal**.",
        "Après chaque conversation.",
        "Avant chaque rendez-vous.",
        "Sur chaque opportunité.",
      ],
      notLabel: "Non pas :",
      notQ: "« Vous vous souvenez de la méthode ? »",
      butLabel: "Mais :",
      butQ: "« De quoi ce deal a-t-il besoin maintenant ? »",
    },

    canDo: {
      title: "Ce que Switch vous aide à faire",
      items: [
        "Préparer un rendez-vous client.",
        "Analyser une conversation.",
        "Challenger votre perception d'un deal.",
        "Repérer les informations manquantes et les hypothèses non étayées.",
        "Comprendre pourquoi un deal est bloqué.",
        "Préparer les prochaines questions et la prochaine action.",
        "Mener des revues de deals fondées sur les preuves.",
        "Coacher un commercial sur une opportunité réelle.",
        "Appliquer le playbook de l'entreprise avec constance.",
        "Décider de poursuivre ou d'abandonner un deal.",
      ],
      closeLead: "Et au fond :",
      closeStrong: "aider les clients à prendre de meilleures décisions.",
    },

    changes: {
      title: "Qu'est-ce qui change quand vous arrêtez de deviner ?",
      items: [
        "Moins de deals poursuivis pour de mauvaises raisons.",
        "Des problèmes découverts plus tôt.",
        "Moins de pitchs prématurés.",
        "Moins de remises pour sauver des deals faibles.",
        "Des cycles de décision plus courts.",
        "Un meilleur taux de conversion.",
      ],
      fewerLead: "Et moins de :",
      fewerQuote: "« On pensait que celui-là allait se signer. »",
    },

    realSales: {
      title: ["Né de vraies ventes.", "Pas de théorie."],
      body: "Switch repose sur **Sales Unlocked**, la discipline commerciale développée par Pierre Gaubil après des décennies passées à vendre, bâtir des entreprises, investir dans des startups et accompagner des centaines de fondateurs et d'équipes de vente.",
      principle: "Le principe est simple :",
      notConvincing: "Vendre, ce n'est pas convaincre quelqu'un d'acheter.",
      isUnderstanding:
        "C'est comprendre comment un client parvient à une décision — et aider cette décision à devenir claire.",
      ctaLabel: "Découvrir Sales Unlocked",
    },

    pricing: {
      title: "Un tarif simple.",
      price: "49,99 €",
      unit: "/ utilisateur / mois",
      details: ["Toutes les fonctionnalités incluses.", "Sans engagement.", "Résiliable à tout moment."],
    },

    faq: {
      title: "Questions fréquentes",
      items: [
        {
          q: "Qu'est-ce que Switch, exactement ?",
          a: [
            "Switch est une plateforme d'intelligence de deal par IA pour les ventes B2B complexes.",
            "Il analyse les conversations clients à l'aune de votre playbook commercial pour distinguer les preuves des hypothèses, repérer les informations manquantes, suivre l'évolution d'un deal et préparer la prochaine conversation.",
          ],
        },
        {
          q: "À qui s'adresse Switch ?",
          a: [
            "Switch est conçu pour les fondateurs, les Account Executives, les commerciaux et les directeurs commerciaux qui vendent des produits ou services B2B complexes au fil de plusieurs conversations.",
            "Il est particulièrement utile quand comprendre le problème du client, son urgence, l'impact, les interlocuteurs et le processus de décision détermine si un deal se gagnera.",
          ],
        },
        {
          q: "À qui Switch ne s'adresse-t-il pas ?",
          a: [
            "Switch n'est pas conçu avant tout pour les ventes transactionnelles, le e-commerce ou les ventes qui se concluent en une seule interaction.",
            "Plus une vente dépend de plusieurs conversations et d'une décision client complexe, plus Switch est utile.",
          ],
        },
        {
          q: "Switch enregistre-t-il mes appels ?",
          a: [
            "Non.",
            "En revanche, Switch lit les comptes rendus et transcriptions produits par Gong, Fireflies, Granola, Otter, Teams, Zoom et d'autres outils.",
          ],
        },
        {
          q: "Quelles informations Switch utilise-t-il ?",
          a: [
            "Switch combine les informations de la conversation client avec le contexte du prospect, l'offre de votre entreprise et votre playbook commercial.",
            "Il conserve aussi ce qui a été appris lors des conversations précédentes, pour que chaque nouvelle analyse s'appuie sur l'historique du deal.",
          ],
        },
        {
          q: "Switch se souvient-il des conversations précédentes ?",
          a: [
            "Oui.",
            "Switch suit le deal dans le temps.",
            "Chaque conversation peut confirmer une information, invalider une hypothèse, révéler du nouveau ou modifier la solidité de l'opportunité.",
            "Le briefing suivant reflète cette évolution.",
          ],
        },
        {
          q: "Suis-je obligé d'utiliser Sales Unlocked ?",
          a: [
            "Non.",
            "Sales Unlocked fournit la discipline sous-jacente utilisée par Switch, mais Switch peut intégrer le playbook et la méthode propres à votre entreprise.",
          ],
        },
        {
          q: "Puis-je utiliser Switch avec MEDDIC, SPIN, Challenger ou une autre méthode ?",
          a: [
            "Oui.",
            "Switch est conçu pour rendre votre savoir-faire commercial actionnable dans les deals réels, plutôt que de vous forcer à le remplacer par un autre cadre.",
          ],
        },
        {
          q: "Switch est-il un CRM ?",
          a: [
            "Non.",
            "Un CRM enregistre et organise l'activité commerciale.",
            "Switch analyse ce que le client vous dit, ce qui reste incertain et ce qui doit se passer ensuite.",
            "Switch complète donc un CRM plutôt qu'il ne le duplique.",
          ],
        },
        {
          q: "En quoi Switch diffère-t-il des outils d'intelligence conversationnelle ?",
          a: [
            "Les outils d'intelligence conversationnelle captent et analysent surtout ce qui s'est passé pendant un rendez-vous.",
            "Switch utilise la conversation comme preuve pour comprendre le **deal** : ce qui est établi, ce qui est supposé, ce qui manque, comment l'opportunité évolue et ce que la prochaine conversation doit accomplir.",
          ],
        },
        {
          q: "Que me donne Switch avant un rendez-vous ?",
          a: [
            "Switch crée un briefing à partir de tout ce que l'on sait du deal à cet instant.",
            "Il identifie l'information la plus importante, les questions à poser, les hypothèses à valider, les objections possibles et l'objectif de la prochaine conversation.",
          ],
        },
        {
          q: "Que me donne Switch après un rendez-vous ?",
          a: [
            "Switch analyse la nouvelle conversation, met à jour sa compréhension de l'opportunité et identifie ce qui a changé.",
            "Il utilise ensuite cette compréhension actualisée pour préparer la prochaine action.",
          ],
        },
        {
          q: "Que peut voir un manager commercial ?",
          a: [
            "Les managers peuvent utiliser Mission Control pour repérer les deals qui demandent de l'attention et comprendre pourquoi.",
            "Ils peuvent ensuite examiner les preuves derrière un deal précis et concentrer leur coaching sur les opportunités et les commerciaux où intervenir compte le plus.",
          ],
        },
        {
          q: "Combien de temps faut-il pour mettre en place Switch ?",
          a: [
            "Une conversation peut être lue dans la minute qui suit.",
            "Votre playbook fournit à Switch le contexte dont il a besoin pour comprendre comment votre entreprise vend, à qui, et ce qui compte dans un deal.",
          ],
        },
        {
          q: "Switch s'intègre-t-il à mon CRM ?",
          a: [
            "Pas encore.",
            "Switch fonctionne indépendamment de votre CRM et n'a pas besoin de ses données pour comprendre et analyser un deal.",
            "Vous pouvez donc commencer à utiliser Switch sans rien changer à votre CRM.",
          ],
        },
        {
          q: "Switch s'intègre-t-il directement à Zoom, Teams ou Google Meet ?",
          a: [
            "Pas encore.",
            "Switch analyse déjà les transcriptions et fichiers produits par Zoom, Teams, Gong, Fireflies, Granola, Otter et d'autres outils de conversation. Aucune intégration native n'est nécessaire pour commencer.",
          ],
        },
        {
          q: "Mes données clients sont-elles sécurisées ?",
          a: [
            "Oui.",
            "Vos données ne servent pas à entraîner des modèles d'IA.",
            "Le traitement, l'hébergement et la protection de vos données sont détaillés dans les mentions légales, les conditions et la politique de confidentialité, accessibles dans le logiciel.",
          ],
        },
        {
          q: "Mes données servent-elles à entraîner des modèles d'IA ?",
          a: ["Non."],
        },
        {
          q: "Combien coûte Switch ?",
          a: [
            "Switch coûte **49,99 € par utilisateur et par mois**.",
            "Toutes les fonctionnalités sont incluses, sans engagement, et vous pouvez résilier à tout moment.",
          ],
        },
        {
          q: "Puis-je essayer Switch avant de payer ?",
          a: ["Oui.", "Vous pouvez essayer Switch sans saisir de carte bancaire."],
        },
      ] as FaqItem[],
    },

    final: {
      title: "Vous n'avez pas besoin de plus de deals dans votre CRM.",
      subtitle: "Vous avez besoin de savoir lesquels sont réels.",
      stopGuessing: "Arrêtez de deviner.",
      lines: ["Sachez ce que vous savez.", "Sachez ce que vous ignorez.", "Sachez quoi faire ensuite."],
    },
  },

  en: {
    cta: "Try Switch for free",
    noCard: "No credit card required.",
    newTab: "opens in a new tab",
    todoLabel: "To complete",

    hero: {
      eyebrow: "SWITCH · COMPLEX B2B SALES",
      title: ["You think you know where your deals stand.", "Most of the time, you're guessing."],
      description: "Switch reads your customer conversations and separates what you **know** from what you **assume**.",
      benefit: ["Know which deals are real.", "What's missing.", "And what to do next."],
      slot: "A deal analysis: what's established, what's missing, the next action.",
      panel: {
        aside: "WHERE THE DEAL STANDS",
        round: "Round 6",
        eyebrow: "THE DECISION IS COMING",
        title: "A decision is expected on September 30 — in 5 days.",
        lead: "What it will hinge on, and where you're still short — from most fragile to least fragile:",
        items: [
          { label: "Adoption reality", score: "2.5" },
          { label: "Credibility and perception", score: "2.5" },
          { label: "Problem/solution fit", score: "2.9" },
        ],
      },
    },

    crm: {
      title: ["Your CRM knows what you told it.", "Switch knows what the customer told you."],
      lines: [
        "The meeting went well.",
        "The customer liked the demo. They asked for a proposal. They said the project was important.",
        "So the deal looks good.",
      ],
      questions: [
        "But did they actually confirm the problem?",
        "Is there a real reason to act now?",
        "Do you know who is involved in the decision?",
        "Is the impact important enough to justify change?",
        "Or are you filling the gaps yourself?",
      ],
      close: "That's where deals are won or lost.",
    },

    meeting: {
      title: "A good meeting doesn't mean a good deal.",
      intro: [
        "Salespeople don't usually lack information.",
        "They lack clarity about the information they already have.",
      ],
      separates: "After every conversation, Switch separates:",
      cats: [
        { label: "Established", body: "What the customer actually confirmed." },
        { label: "Assumed", body: "What you believe but haven't validated." },
        { label: "Missing", body: "What you still need to understand." },
        { label: "Changed", body: "What became stronger or weaker since the previous conversation." },
        { label: "Next", body: "What the next conversation needs to accomplish." },
      ],
      notSummary: "Not another call summary.",
      clearer: "A clearer deal.",
      slot: "One conversation split into Established · Assumed · Missing · Changed · Next.",
    },

    builtFor: {
      title: "Built for sales that take more than one conversation.",
      lines: ["Switch is built for **complex B2B sales**.", "Sales where decisions develop over time."],
      attributes: [
        "Multiple conversations.",
        "Multiple stakeholders.",
        "Competing priorities.",
        "Unclear urgency.",
        "Internal politics.",
        "Real consequences for getting the decision wrong.",
      ],
      designedForIntro: "Switch is designed for:",
      designedFor: [
        "B2B sales teams",
        "Founders selling complex products or services",
        "Account executives",
        "Sales managers and leaders",
      ],
      inYes: "If your sale depends on understanding **how a customer reaches a decision**, Switch is built for you.",
      inNo: "If the sale happens in one call or is purely transactional, it probably isn't.",
    },

    loop: {
      title: "Every conversation should change the deal.",
      intro: [
        "Switch doesn't analyze meetings in isolation.",
        "It builds its understanding of the deal **conversation after conversation**.",
      ],
      cycle: "And the cycle continues until you **win — or decide the deal isn't worth pursuing.**",
      remembersConversation: "Switch doesn't just remember the conversation.",
      remembersDeal: "It remembers the deal.",
      flow: {
        playbook: {
          label: "SALES PLAYBOOK",
          desc: "what you sell, to whom, against whom — and what the sales director knows",
        },
        sameRef: "the same reference",
        boxes: [
          { n: 1, title: "The deal", desc: "site and documents read, then checked against the playbook" },
          { n: 2, title: "The briefing", desc: "the questions this moment of the deal calls for" },
          { n: 3, title: "The conversation", desc: "captured, attributed to voices weighted by their role" },
          { n: 4, title: "The diagnostic", desc: "three gates, one momentum, twenty capped criteria" },
        ],
        connectors: ["what's missing", "to establish", "what was said"],
        brace: "the seller's only move",
        feedback: "next round: the diagnostic writes the briefing",
        note: {
          label: "NO MANUAL DEAL UPDATES",
          desc: "No CRM-like forms. No manual scoring. No deal-status questionnaires. The seller brings the conversation. Switch builds the analysis.",
        },
      },
    },

    combines: {
      title: ["Your conversations.", "Your playbook.", "The next action."],
      intro: "Switch combines three things.",
      blocks: [
        {
          n: "01",
          label: "Your customer",
          lines: ["What they actually said — meeting notes, transcripts, everything collected throughout the deal."],
        },
        {
          n: "02",
          label: "Your playbook",
          lines: ["Your offer, your customers, your positioning, your value.", "What makes you win. What makes you lose."],
        },
        {
          n: "03",
          label: "Sales Unlocked",
          lines: ["The discipline behind Switch: how customers move from a problem to a decision."],
        },
      ],
      closeLead: "Switch doesn't analyze a conversation in a vacuum.",
      closeStrong:
        "It analyzes that conversation in the context of your customer, your business and the deal you're trying to win.",
    },

    fourQ: {
      title: ["Four questions.", "Every deal."],
      intro: "Switch continuously evaluates every opportunity through four questions.",
      questions: [
        {
          title: "Is there an opportunity?",
          lines: ["Is there a real problem?", "Is it important enough?", "Is there a reason to change?"],
        },
        {
          title: "Can we win?",
          lines: ["Are we relevant?", "Are we differentiated?", "Can the customer see why us?"],
        },
        {
          title: "Is the impact strong enough?",
          lines: [
            "What happens if they act?",
            "What happens if they don't?",
            "Is the value significant enough to justify the decision?",
          ],
        },
        {
          title: "Is there momentum?",
          lines: ["Why now?", "What is moving the decision forward?", "Who needs to be involved?", "What could stop it?"],
        },
      ],
      evolve: "These four questions evolve after every conversation.",
      closeStrong: "Because a deal isn't a stage. It's a decision in motion.",
      slot: "The four questions scored on a deal.",
      chart: {
        eyebrow: "HOW THE SCORES MOVED",
        hint: "Click a round to read what it changed",
        rounds: [
          { id: "R1", date: "13 Jul" },
          { id: "R2", date: "14 Jul" },
          { id: "R3", date: "10 Sept" },
          { id: "R4", date: "10 Sept" },
          { id: "R5", date: "23 Sept", who: "Paul" },
        ],
        series: ["The opportunity", "The ability to win", "The impact", "Momentum"],
      },
    },

    sequence: {
      flow: "Conversation → Analysis → Briefing → Conversation.",
      title: "Before, after and between meetings.",
    },

    before: {
      label: "Before the meeting",
      lead: "Switch prepares the briefing. Not twenty generic questions: the ones that matter **now**.",
      items: [
        "What matters now.",
        "What is still missing.",
        "What needs validation.",
        "The questions worth asking.",
        "The objections that may come up.",
        "The objective of the conversation.",
      ],
      close: "You walk in knowing **why you're there.**",
      cta: "Write the round 3 briefing",
    },

    after: {
      label: "After the meeting",
      lead: "Import the notes or transcript. Switch identifies:",
      items: [
        "What was confirmed.",
        "What remains assumed.",
        "What changed.",
        "What became stronger or weaker.",
        "What was missed.",
      ],
      dialog: {
        title: "Import the round 6 conversation",
        desc: "Round 6. Switch reads it, attributes each statement to whoever made it, scores the criteria and updates the diagnostic.",
        drop: "Choose a file — Gong, Fireflies, Granola, Otter, Teams, Zoom…",
        or: "or paste it",
        paste: "Paste the transcript. Keep the speakers' names: Switch weighs each statement by the role of whoever said it.",
        more: "Something else came with this conversation",
        analyze: "Analyse the conversation",
        manual: "No transcript? Type it in",
      },
    },

    between: {
      label: "Between meetings",
      lead: "Switch helps you choose the right next action:",
      items: [
        "Follow up.",
        "Clarify.",
        "Confirm.",
        "Share something useful.",
        "Involve another stakeholder.",
        "Or deliberately do nothing yet.",
      ],
      objNot: "The objective isn't to stay visible.",
      objYes: "It's to keep the decision moving.",
    },

    forReps: {
      eyebrow: "FOR SALESPEOPLE",
      title: "Know where you really stand.",
      intro: "Switch helps you see the difference between your perception of the deal and the evidence inside the deal.",
      items: [
        "Spot where you're being too optimistic.",
        "Spot where you're being too pessimistic.",
        "Know what you're missing.",
        "Know what to ask next.",
        "Know when to push.",
        "Know when not to.",
        "And know when a deal should be abandoned.",
      ],
      close: "Less guessing. Better conversations. Better decisions.",
      slot: "A rep's view: perception against evidence.",
    },

    forLeaders: {
      eyebrow: "FOR SALES LEADERS",
      title: ["Stop managing the story.", "Manage the evidence."],
      intro: ["Your reps tell you a deal is at 80%.", "Switch shows you why.", "Or why not."],
      close:
        "Deal reviews become conversations about **evidence and action**, not confidence and CRM percentages.",
    },

    mission: {
      eyebrow: "MISSION CONTROL",
      title: ["Don't inspect every deal.", "Know where to intervene."],
      intro: "Switch gives sales leaders a portfolio view of their opportunities.",
      showsIntro: "Across the team, Mission Control shows:",
      items: [
        "Which deals need attention — and why.",
        "Where evidence is missing.",
        "Where assumptions are being treated as facts.",
        "Where momentum is weakening.",
        "Where a salesperson needs help.",
        "Where your attention will have the biggest impact.",
      ],
      notDashboard: "Switch isn't another dashboard to monitor.",
      isWay: "It's a way to know where your attention is worth something.",
      scatter: {
        legend: {
          inplay: "in play",
          stale: "nothing for 10 days",
          off: "off playbook",
          decision: "decision date set",
        },
        zones: ["The opportunity", "The ability to win", "The impact"],
        xLeft: "Start",
        xCenter: "Gates carried",
        xRight: "Signature",
        yLabel: "Momentum",
      },
    },

    methodology: {
      title: "Your sales methodology doesn't need replacing.",
      questions: ["Already using MEDDIC?", "SPIN?", "Challenger?", "Sandler?", "Your own methodology?"],
      keepIt: "Keep it.",
      notAnother: "Switch isn't another methodology your salespeople have to memorize.",
      turns:
        "It turns your existing sales know-how into something that can be applied **inside every real deal, after every real conversation.**",
      playbookStops: "Your playbook stops living in a training deck.",
      startsLiving: "It starts living in the sale.",
    },

    notCrm: {
      title: "Switch is not another CRM.",
      crmRecords: "Your CRM records the opportunity.",
      switchHelps: "Switch helps you understand it.",
      cols: [
        {
          label: "CRM",
          q: "What did the salesperson enter?",
          items: ["Contacts.", "Activities.", "Stages.", "Amounts.", "Close dates."],
        },
        {
          label: "Conversation intelligence",
          q: "What happened during the call?",
          items: ["Recording.", "Transcript.", "Summary.", "Topics."],
        },
        { label: "Forecasting", q: "What might happen?", items: ["Pipeline probability.", "Forecast.", "Risk."] },
        {
          label: "Switch",
          q: "What should we understand and do next?",
          items: ["Evidence.", "Assumptions.", "Missing information.", "Deal evolution.", "Next conversation."],
        },
      ],
      close1: "Switch doesn't replace the systems you need to record your sales activity.",
      close2: "It changes what you do with the conversation itself.",
    },

    training: {
      title: "From sales training to sales discipline.",
      lines: [
        "Most sales training happens outside the deal.",
        "A workshop. A framework. A playbook.",
        "Then everyone goes back to work — and to their old habits.",
      ],
      putsInside: [
        "Switch puts the discipline **inside the deal**.",
        "After every conversation.",
        "Before every next meeting.",
        "On every opportunity.",
      ],
      notLabel: "Not:",
      notQ: "“Do you remember the methodology?”",
      butLabel: "But:",
      butQ: "“What does this deal require now?”",
    },

    canDo: {
      title: "What Switch can help you do",
      items: [
        "Prepare for a customer meeting.",
        "Analyze a conversation.",
        "Challenge your perception of a deal.",
        "Identify missing information and unsupported assumptions.",
        "Understand why a deal is stuck.",
        "Prepare the next questions and the next action.",
        "Run evidence-based deal reviews.",
        "Coach a salesperson on a real opportunity.",
        "Apply the company's sales playbook consistently.",
        "Decide whether to pursue or exit a deal.",
      ],
      closeLead: "And ultimately:",
      closeStrong: "help customers make better decisions.",
    },

    changes: {
      title: "What changes when you stop guessing?",
      items: [
        "Fewer deals pursued for the wrong reasons.",
        "Problems discovered earlier.",
        "Less premature pitching.",
        "Less discounting to rescue weak deals.",
        "Shorter decision cycles.",
        "Higher conversion.",
      ],
      fewerLead: "And fewer:",
      fewerQuote: "“We thought this one was going to close.”",
    },

    realSales: {
      title: ["Built from real sales.", "Not sales theory."],
      body: "Switch is built on **Sales Unlocked**, the sales discipline developed by Pierre Gaubil after decades selling, building companies, investing in startups and working with hundreds of founders and sales teams.",
      principle: "The principle is simple:",
      notConvincing: "Selling isn't convincing someone to buy.",
      isUnderstanding:
        "It's understanding how a customer reaches a decision — and helping that decision become clear.",
      ctaLabel: "Discover Sales Unlocked",
    },

    pricing: {
      title: "Simple pricing.",
      price: "€49.99",
      unit: "/ user / month",
      details: ["All features included.", "No long-term commitment.", "Cancel anytime."],
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What exactly is Switch?",
          a: [
            "Switch is an AI deal intelligence platform for complex B2B sales.",
            "It analyzes customer conversations against your sales playbook to separate evidence from assumptions, identify missing information, follow how a deal evolves and prepare the next conversation.",
          ],
        },
        {
          q: "Who is Switch for?",
          a: [
            "Switch is designed for founders, account executives, salespeople and sales leaders selling complex B2B products or services through multiple customer conversations.",
            "It is particularly useful when understanding the customer's problem, urgency, impact, stakeholders and decision process determines whether a deal will be won.",
          ],
        },
        {
          q: "Who is Switch not for?",
          a: [
            "Switch is not designed primarily for transactional sales, ecommerce or sales that are completed in a single interaction.",
            "The more a sale depends on multiple conversations and a complex customer decision, the more useful Switch becomes.",
          ],
        },
        {
          q: "Does Switch record my calls?",
          a: [
            "No.",
            "It does, however, read the notes and transcripts produced by Gong, Fireflies, Granola, Otter, Teams, Zoom and other tools.",
          ],
        },
        {
          q: "What information does Switch use?",
          a: [
            "Switch combines information from the customer conversation with the context of the prospect, your company's offer and your sales playbook.",
            "It also retains what has been learned during previous conversations so each new analysis builds on the history of the deal.",
          ],
        },
        {
          q: "Does Switch remember previous conversations?",
          a: [
            "Yes.",
            "Switch follows the deal over time.",
            "Each conversation can confirm previous information, invalidate assumptions, reveal new information or change the strength of the opportunity.",
            "The next briefing reflects that evolution.",
          ],
        },
        {
          q: "Do I need to use Sales Unlocked?",
          a: [
            "No.",
            "Sales Unlocked provides the underlying discipline used by Switch, but Switch can incorporate your company's own sales playbook and methodology.",
          ],
        },
        {
          q: "Can I use Switch with MEDDIC, SPIN, Challenger or another methodology?",
          a: [
            "Yes.",
            "Switch is designed to make your sales know-how actionable inside real deals rather than force you to replace it with another framework.",
          ],
        },
        {
          q: "Is Switch a CRM?",
          a: [
            "No.",
            "A CRM records and organizes sales activity.",
            "Switch analyzes what the customer is telling you, what remains uncertain and what needs to happen next.",
            "Switch can therefore complement a CRM rather than duplicate it.",
          ],
        },
        {
          q: "How is Switch different from conversation intelligence tools?",
          a: [
            "Conversation intelligence tools primarily capture and analyze what happened during a meeting.",
            "Switch uses the conversation as evidence to understand the **deal**: what is established, what is assumed, what is missing, how the opportunity is evolving and what the next conversation should accomplish.",
          ],
        },
        {
          q: "What does Switch give me before a meeting?",
          a: [
            "Switch creates a briefing based on everything currently known about the deal.",
            "It identifies the information that matters most, questions worth asking, assumptions that need validation, potential objections and the objective of the next conversation.",
          ],
        },
        {
          q: "What does Switch give me after a meeting?",
          a: [
            "Switch analyzes the new conversation, updates its understanding of the opportunity and identifies what changed.",
            "It then uses that updated understanding to prepare the next action.",
          ],
        },
        {
          q: "What can a sales manager see?",
          a: [
            "Sales managers can use Mission Control to identify deals requiring attention and understand why.",
            "They can then inspect the evidence behind an individual deal and focus their coaching on the opportunities and salespeople where intervention matters most.",
          ],
        },
        {
          q: "How long does Switch take to set up?",
          a: [
            "A conversation can be read within the minute.",
            "Your playbook provides Switch with the context it needs to understand how your company sells, who you sell to and what matters in a deal.",
          ],
        },
        {
          q: "Does Switch integrate with my CRM?",
          a: [
            "Not yet.",
            "Switch works independently from your CRM and does not require CRM data to understand or analyze a deal.",
            "You can therefore start using Switch without changing your existing CRM setup.",
          ],
        },
        {
          q: "Does Switch integrate directly with Zoom, Teams or Google Meet?",
          a: [
            "Not yet.",
            "Switch can already analyze transcripts and files produced by Zoom, Teams, Gong, Fireflies, Granola, Otter and other conversation tools. Native integrations are not required to start using Switch.",
          ],
        },
        {
          q: "Is my customer data secure?",
          a: [
            "Yes.",
            "Your data is not used to train AI models.",
            "How your data is processed, hosted and protected is set out in the legal notices, terms and privacy policy, available inside the software.",
          ],
        },
        { q: "Is my data used to train AI models?", a: ["No."] },
        {
          q: "How much does Switch cost?",
          a: [
            "Switch costs **€49.99 per user per month**.",
            "All features are included, there is no long-term commitment and you can cancel at any time.",
          ],
        },
        { q: "Can I try Switch before paying?", a: ["Yes.", "You can try Switch without entering a credit card."] },
      ] as FaqItem[],
    },

    final: {
      title: "You don't need more deals in your CRM.",
      subtitle: "You need to know which ones are real.",
      stopGuessing: "Stop guessing.",
      lines: ["Know what you know.", "Know what you don't.", "Know what to do next."],
    },
  },
} as const

/** Renders **bold** spans inside a plain string. */
function Emph({ text, strongClass = "font-semibold text-navy" }: { text: string; strongClass?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className={strongClass}>
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  )
}

type FlowData = {
  playbook: { label: string; desc: string }
  sameRef: string
  boxes: readonly { n: number; title: string; desc: string }[]
  connectors: readonly string[]
  brace: string
  feedback: string
  note: { label: string; desc: string }
}

/** Slot 3 — the deal→briefing→conversation→diagnostic pipeline, rendered natively so it localizes. */
function FlowDiagram({ data }: { data: FlowData }) {
  const green = "#2f7d6b"
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper-2 p-6 md:p-10">
      {/* Playbook banner */}
      <div className="rounded-xl border border-navy/25 bg-paper px-6 py-5 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-navy">{data.playbook.label}</p>
        <p className="mt-2 text-pretty leading-relaxed text-muted">{data.playbook.desc}</p>
      </div>

      {/* Feeds all steps */}
      <p
        className="mt-4 text-center font-mono text-xs tracking-[0.12em]"
        style={{ color: green }}
      >
        {"↓ "}
        {data.sameRef}
        {" ↓"}
      </p>

      {/* Steps */}
      <ol className="mt-4 flex flex-col items-stretch gap-4 md:flex-row md:items-start">
        {data.boxes.map((box, i) => (
          <li key={box.n} className="flex flex-col md:flex-1 md:flex-row md:items-start">
            <div className="flex-1">
              <div className="rounded-xl border border-navy/25 bg-paper p-5">
                <p className="font-mono text-xs text-muted">{box.n}</p>
                <p className="mt-2 font-semibold text-navy-deep">{box.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{box.desc}</p>
              </div>
              {/* Brace under step 3 */}
              {box.n === 3 && (
                <div className="mt-3 text-center">
                  <div className="mx-auto h-2 w-full rounded-b-md border-x border-b" style={{ borderColor: green }} />
                  <p className="mt-2 font-mono text-xs tracking-[0.1em]" style={{ color: green }}>
                    {data.brace}
                  </p>
                </div>
              )}
            </div>
            {/* Connector to next step */}
            {i < data.boxes.length - 1 && (
              <div className="flex shrink-0 flex-col items-center justify-center gap-1 py-2 md:w-24 md:self-stretch md:py-0 md:pt-8">
                <span className="text-center font-mono text-[0.7rem] leading-tight text-muted">
                  {data.connectors[i]}
                </span>
                <span aria-hidden="true" className="text-lg text-navy md:rotate-0" style={{ transform: "none" }}>
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>

      {/* Feedback loop */}
      <p className="mt-6 text-center font-mono text-xs tracking-[0.1em] text-muted">
        <span aria-hidden="true" className="mr-2">
          ↺
        </span>
        {data.feedback}
      </p>

      {/* No-input note */}
      <div className="mt-6 rounded-xl border border-dashed p-5" style={{ borderColor: green }}>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: green }}>
          {data.note.label}
        </p>
        <p className="mt-2 text-pretty leading-relaxed" style={{ color: green }}>
          {data.note.desc}
        </p>
      </div>
    </figure>
  )
}

/** A delivered screenshot, framed like the placeholders it replaces. */
type DecisionPanelData = {
  aside: string
  round: string
  eyebrow: string
  title: string
  lead: string
  items: readonly { label: string; score: string }[]
}

/** Slot 1 — the "decision approaching" deal read, rendered natively so it localizes. */
function DecisionPanel({ panel }: { panel: DecisionPanelData }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper-2 p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] sm:gap-8">
        <div className="text-right sm:border-none">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{panel.aside}</p>
          <p className="mt-2 font-mono text-sm text-muted">{panel.round}</p>
        </div>
        <div className="border-l-2 border-orange-deep pl-5 md:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">{panel.eyebrow}</p>
          <p className="mt-3 text-balance font-serif text-2xl font-normal leading-[1.15] text-navy-deep md:text-[1.75rem]">
            {panel.title}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">{panel.lead}</p>
          <ul className="mt-4 space-y-2">
            {panel.items.map((it, i) => (
              <li key={i} className="text-base leading-relaxed text-navy">
                <span aria-hidden="true" className="mr-2 text-muted">·</span>
                {it.label} <span className="text-muted">— {it.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  )
}

/** A localized screenshot that follows the FR/EN toggle. */
function LocalizedShot({ srcFr, srcEn, lang, alt }: { srcFr: string; srcEn: string; lang: Lang; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper-2">
      <img
        src={lang === "en" ? srcEn : srcFr}
        alt={alt}
        className="h-auto w-full"
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

type ScoreChartData = {
  eyebrow: string
  hint: string
  rounds: readonly { readonly id: string; readonly date: string; readonly who?: string }[]
  series: readonly string[]
}

/** An interactive line chart showing how the four scores moved across rounds. */
function ScoreChart({ data }: { data: ScoreChartData }) {
  // Scores are language-independent, so they live here keyed by series/round index.
  const values = [
    [1.9, 2.6, 3.2, 4.0, 3.6],
    [0.8, 1.2, 3.2, 3.6, 3.5],
    [0.4, 0.5, 1.2, 1.4, 3.0],
    [0.4, 0.4, 0.9, 1.3, 2.9],
  ]
  const dashes = ["none", "7 5", "1.5 4", "9 4 1.5 4"]
  const last = data.rounds.length - 1
  const [active, setActive] = useState(last)

  const W = 720
  const H = 300
  const padL = 40
  const padR = 60
  const padT = 18
  const padB = 26
  const x = (i: number) => padL + ((W - padL - padR) * i) / last
  const y = (v: number) => padT + (H - padT - padB) * (1 - v / 5)
  const gridLines = [0, 1, 2, 3, 4, 5]

  // Nudge overlapping end-of-line value labels apart so close scores stay legible.
  const endLabels = values
    .map((row, s) => ({ s, value: row[last], yy: y(row[last]) }))
    .sort((a, b) => a.yy - b.yy)
  const minGap = 15
  for (let i = 1; i < endLabels.length; i++) {
    if (endLabels[i].yy - endLabels[i - 1].yy < minGap) {
      endLabels[i].yy = endLabels[i - 1].yy + minGap
    }
  }

  return (
    <figure className="rounded-2xl border border-line bg-paper p-5 md:p-6">
      <figcaption className="mb-4">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{data.eyebrow}</p>
        <p className="mt-2 font-mono text-sm text-muted">{data.hint}</p>
      </figcaption>

      <div className="flex flex-wrap gap-2">
        {data.rounds.map((r, i) => {
          const on = i === active
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
                on ? "border-navy/40 bg-navy/5" : "border-line bg-paper-2 hover:border-navy/25"
              }`}
            >
              <span className="block font-mono text-sm font-bold text-navy">{r.id}</span>
              <span className="mt-0.5 block font-mono text-xs text-muted">{r.date}</span>
              {r.who ? <span className="block font-mono text-xs text-muted">{r.who}</span> : null}
            </button>
          )
        })}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-6 h-auto w-full text-navy"
        role="img"
        aria-label={data.eyebrow}
      >
        {gridLines.map((g) => (
          <g key={g}>
            <line
              x1={padL}
              x2={W - padR}
              y1={y(g)}
              y2={y(g)}
              stroke="currentColor"
              strokeOpacity={0.12}
            />
            <text
              x={padL - 10}
              y={y(g)}
              dominantBaseline="middle"
              textAnchor="end"
              className="font-mono"
              fontSize={12}
              fill="currentColor"
              fillOpacity={0.5}
            >
              {g}
            </text>
          </g>
        ))}

        <line
          x1={x(active)}
          x2={x(active)}
          y1={y(5)}
          y2={y(0)}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeDasharray="4 4"
        />

        {values.map((row, s) => (
          <path
            key={s}
            d={row.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={dashes[s] === "none" ? undefined : dashes[s]}
          />
        ))}

        {values.map((row, s) =>
          row.map((v, i) => (
            <circle
              key={`${s}-${i}`}
              cx={x(i)}
              cy={y(v)}
              r={i === active ? 4.5 : 2.5}
              fill="currentColor"
            />
          )),
        )}

        {endLabels.map((l) => (
          <text
            key={`lbl-${l.s}`}
            x={W - padR + 8}
            y={l.yy}
            dominantBaseline="middle"
            className="font-mono"
            fontSize={13}
            fontWeight={700}
            fill="currentColor"
          >
            {l.value.toFixed(1)}
          </text>
        ))}
      </svg>

      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {data.series.map((label, s) => (
          <li key={label} className="flex items-center gap-2 text-navy">
            <svg viewBox="0 0 30 8" className="h-2 w-[30px] shrink-0 text-navy" aria-hidden="true">
              <line
                x1={0}
                x2={30}
                y1={4}
                y2={4}
                stroke="currentColor"
                strokeWidth={2}
                strokeDasharray={dashes[s] === "none" ? undefined : dashes[s]}
              />
            </svg>
            <span className="text-sm">{label}</span>
            <span className="font-mono text-sm font-semibold">{values[s][last].toFixed(1)}</span>
          </li>
        ))}
      </ul>
    </figure>
  )
}

/** A numbered blank placeholder marking where a screenshot should go. */
function BriefingCta({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 rounded-xl bg-orange px-7 py-4 font-semibold text-paper shadow-sm transition-colors hover:bg-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <Sparkle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden="true" />
      <span className="text-lg">{label}</span>
    </button>
  )
}

function ImportDialog({
  d,
}: {
  d: {
    title: string
    desc: string
    drop: string
    or: string
    paste: string
    more: string
    analyze: string
    manual: string
  }
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
      <div className="flex items-start justify-between gap-4 px-7 pt-7">
        <h3 className="text-pretty font-serif text-2xl font-normal leading-tight text-navy">{d.title}</h3>
        <span
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-muted"
          aria-hidden="true"
        >
          <X className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>
      <p className="px-7 pt-3 text-base leading-relaxed text-muted">{d.desc}</p>

      <div className="px-7 pt-6">
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-line px-6 py-8 text-center">
          <span className="text-pretty text-base font-semibold text-navy">{d.drop}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 px-7 pt-5">
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-sm text-muted">{d.or}</span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="px-7 pt-4">
        <div className="min-h-[140px] rounded-md border-b-2 border-navy/70 bg-paper-2 px-5 py-4">
          <p className="text-pretty text-base leading-relaxed text-muted">{d.paste}</p>
        </div>
      </div>

      <p className="px-7 pt-6 text-base font-semibold text-navy">
        <span className="text-muted">+ </span>
        {d.more}
      </p>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-7 pb-7 pt-5">
        <span className="inline-flex items-center gap-2 rounded-lg bg-orange/40 px-6 py-3.5 font-semibold text-paper">
          <Sparkle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden="true" />
          {d.analyze}
        </span>
        <span className="inline-flex items-center gap-2 text-base text-muted">
          {d.manual}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </figure>
  )
}

type ScatterData = {
  legend: { inplay: string; stale: string; off: string; decision: string }
  zones: readonly string[]
  xLeft: string
  xCenter: string
  xRight: string
  yLabel: string
}

/**
 * Slot 8 — the portfolio scatter (Momentum × gates carried). The point geometry is
 * language-independent, so it lives here; only the legend/zone/axis copy is translated.
 * x = gates carried (0–3), y = momentum (0–5). base "stale" = hatched (nothing for 10 days),
 * "inplay" = open ring; `off` adds an off-playbook dot, `decision` recolors the ring green.
 */
const SCATTER_POINTS: readonly {
  name: string
  x: number
  y: number
  r: number
  base: "inplay" | "stale"
  off?: boolean
  decision?: boolean
  side?: "left" | "right"
}[] = [
  { name: "Kelvyn", x: 2.95, y: 4.7, r: 24, base: "stale", side: "left" },
  { name: "BD Gest", x: 1.5, y: 3.05, r: 26, base: "inplay", decision: true, off: true, side: "right" },
  { name: "Casely", x: 0.62, y: 2.45, r: 22, base: "inplay", side: "right" },
  { name: "Teedup", x: 1.42, y: 1.75, r: 22, base: "stale", side: "right" },
  { name: "Lemlist", x: 1.66, y: 1.58, r: 26, base: "stale", off: true, side: "right" },
  { name: "Bubble Teach", x: 1.46, y: 1.48, r: 24, base: "stale", side: "right" },
  { name: "Ekstere", x: 0.75, y: 1.45, r: 24, base: "stale", side: "right" },
  { name: "Kmotors", x: 1.34, y: 1.12, r: 22, base: "stale", side: "right" },
  { name: "taamis", x: 1.2, y: 1.05, r: 22, base: "stale", side: "left" },
  { name: "haliro", x: 1.52, y: 1.05, r: 20, base: "inplay", side: "right" },
  { name: "Ortec", x: 0.36, y: 1.1, r: 24, base: "stale", side: "right" },
  { name: "buddy", x: 0.52, y: 0.92, r: 30, base: "stale", side: "right" },
  { name: "boring cash…", x: 0.26, y: 0.86, r: 24, base: "stale", side: "right" },
  { name: "memory", x: 0.66, y: 0.68, r: 34, base: "stale", side: "right" },
  { name: "Kobi", x: 0.26, y: 0.52, r: 24, base: "stale", side: "right" },
  { name: "Reform", x: 0.58, y: 0.2, r: 24, base: "inplay", side: "right" },
  { name: "Tonton gege", x: 0.2, y: 0.05, r: 22, base: "stale", side: "right" },
]

function PortfolioScatter({ data }: { data: ScatterData }) {
  const RED = "#9e3b2a"
  const GREEN = "#1f7a5c"
  const W = 1000
  const H = 520
  const padL = 64
  const padR = 16
  const padT = 56
  const padB = 66
  const px = (v: number) => padL + (v / 3) * (W - padL - padR)
  const py = (v: number) => H - padB - (v / 5) * (H - padT - padB)
  const zoneTints = ["#FCFBF9", "#F0E9DD", "#EBE2D1"]
  const yTicks: { v: number; label: string }[] = [
    { v: 0, label: "0" },
    { v: 2.5, label: "2,5" },
    { v: 5, label: "5" },
  ]

  return (
    <figure className="rounded-2xl border border-line bg-paper p-5 md:p-6">
      {/* Legend */}
      <figcaption className="mb-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-navy">
        <span className="inline-flex items-center gap-2">
          <svg width="18" height="18" aria-hidden="true">
            <circle cx="9" cy="9" r="7" fill="none" stroke={RED} strokeWidth="2" />
          </svg>
          {data.legend.inplay}
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="18" height="18" aria-hidden="true">
            <defs>
              <pattern id="legend-hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="#7d8296" strokeWidth="1.1" />
              </pattern>
            </defs>
            <circle cx="9" cy="9" r="7" fill="url(#legend-hatch)" stroke={RED} strokeWidth="1.5" />
          </svg>
          {data.legend.stale}
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="14" height="14" aria-hidden="true">
            <circle cx="7" cy="7" r="5" fill={RED} />
          </svg>
          {data.legend.off}
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="18" height="18" aria-hidden="true">
            <circle cx="9" cy="9" r="7" fill="none" stroke={GREEN} strokeWidth="2" />
          </svg>
          {data.legend.decision}
        </span>
      </figcaption>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={data.yLabel}>
        <defs>
          <pattern id="scatter-hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#FBFAF7" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="#7d8296" strokeWidth="1.2" />
          </pattern>
        </defs>

        {/* Zone bands + labels */}
        {data.zones.map((z, i) => (
          <g key={i}>
            <rect x={px(i)} y={padT} width={px(i + 1) - px(i)} height={H - padT - padB} fill={zoneTints[i]} />
            <text
              x={px(i) + 12}
              y={padT - 18}
              className="font-sans"
              fontSize={17}
              fill="#4a4a4a"
            >
              <tspan fontWeight={700} fill="#1a1a1a">{`${i + 1} · `}</tspan>
              {z}
            </text>
          </g>
        ))}

        {/* Y grid + ticks */}
        {yTicks.map((t) => (
          <g key={t.v}>
            <line
              x1={padL}
              x2={W - padR}
              y1={py(t.v)}
              y2={py(t.v)}
              stroke="#1A2B5C"
              strokeOpacity={0.14}
              strokeDasharray={t.v === 2.5 ? "4 5" : undefined}
            />
            <text
              x={padL - 12}
              y={py(t.v)}
              dominantBaseline="middle"
              textAnchor="end"
              className="font-sans"
              fontSize={15}
              fill="#6b6b6b"
            >
              {t.label}
            </text>
          </g>
        ))}

        {/* Y axis label */}
        <text
          x={18}
          y={(padT + (H - padB)) / 2}
          transform={`rotate(-90 18 ${(padT + (H - padB)) / 2})`}
          textAnchor="middle"
          className="font-sans"
          fontSize={15}
          fill="#6b6b6b"
        >
          {data.yLabel}
        </text>

        {/* X ticks (1,2,3) */}
        {[1, 2, 3].map((v) => (
          <text
            key={v}
            x={px(v)}
            y={H - padB + 26}
            textAnchor="middle"
            className="font-sans"
            fontSize={15}
            fill="#6b6b6b"
          >
            {v}
          </text>
        ))}

        {/* X axis captions */}
        <text x={padL} y={H - 12} textAnchor="start" className="font-sans" fontSize={15} fill="#6b6b6b">
          {data.xLeft}
        </text>
        <text x={px(1.5)} y={H - 12} textAnchor="middle" className="font-sans" fontSize={15} fill="#6b6b6b">
          {data.xCenter}
        </text>
        <text x={W - padR} y={H - 12} textAnchor="end" className="font-sans" fontSize={15} fill="#6b6b6b">
          {data.xRight}
        </text>

        {/* Bubbles */}
        {SCATTER_POINTS.map((p) => {
          const cx = px(p.x)
          const cy = py(p.y)
          const ring = p.decision ? GREEN : RED
          const fill = p.base === "stale" ? "url(#scatter-hatch)" : "#FBFAF7"
          const labelX = p.side === "left" ? cx - p.r - 8 : cx + p.r + 8
          return (
            <g key={p.name}>
              <circle cx={cx} cy={cy} r={p.r} fill={fill} stroke={ring} strokeWidth={p.decision ? 2.5 : 1.6} />
              {p.off ? <circle cx={cx + p.r * 0.72} cy={cy - p.r * 0.72} r={5.5} fill={RED} /> : null}
              <text
                x={labelX}
                y={cy}
                dominantBaseline="middle"
                textAnchor={p.side === "left" ? "end" : "start"}
                className="font-mono"
                fontSize={15}
                fill="#3a3a3a"
              >
                {p.name}
              </text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

function CtaBand({ label, newTab }: { label: string; newTab: string }) {
  return (
    <section className="border-b border-line bg-paper-2 px-6 py-14 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-[880px] justify-center">
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
        >
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">({newTab})</span>
        </a>
      </div>
    </section>
  )
}

export function SwitchPage() {
  const { language } = useLanguage()
  const lang: Lang = language === "en" ? "en" : "fr"
  const t = CONTENT[lang]

  const CtaButton = ({ withNote = true }: { withNote?: boolean }) => (
    <div className="flex flex-col items-start gap-3">
      <a
        href={SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
      >
        {t.cta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">({t.newTab})</span>
      </a>
      {withNote && <p className="text-sm text-muted">{t.noCard}</p>}
    </div>
  )

  const SectionHeading = ({ lines }: { lines: readonly string[] | string }) => {
    const arr = Array.isArray(lines) ? lines : [lines]
    return (
      <h2 className="text-balance font-serif text-3xl font-normal leading-[1.1] text-navy md:text-4xl">
        {arr.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </h2>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />

      {/* 1. HERO */}
      <section className="border-b border-line px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.hero.eyebrow}</p>
            <h1 className="mt-5 text-balance font-serif text-4xl font-normal leading-[1.05] text-navy-deep md:text-5xl lg:text-[3.5rem]">
              {t.hero.title.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              <Emph text={t.hero.description} />
            </p>
            <div className="mt-6 font-serif text-xl leading-snug text-navy md:text-2xl">
              {t.hero.benefit.map((l, i) => (
                <span key={i} className="block text-pretty">
                  {l}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <CtaButton />
            </div>
          </div>

          <DecisionPanel panel={t.hero.panel} />
        </div>
      </section>

      {/* 2. CRM vs SWITCH */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading lines={t.crm.title} />
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
            {t.crm.lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {t.crm.questions.map((q, i) => (
              <li key={i} className="border-l-2 border-line pl-5 text-lg leading-relaxed text-navy">
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-balance font-serif text-2xl leading-snug text-orange md:text-3xl">{t.crm.close}</p>
        </div>
      </section>

      {/* 3. A GOOD MEETING — the five categories */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <SectionHeading lines={t.meeting.title} />
            <div className="mt-6 space-y-3 text-lg leading-relaxed text-muted">
              {t.meeting.intro.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
              <p className="pt-2 font-medium text-navy">{t.meeting.separates}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {t.meeting.cats.map((c) => (
                <li key={c.label} className="bg-paper p-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-orange">{c.label}</p>
                  <p className="mt-2 leading-relaxed text-navy">{c.body}</p>
                </li>
              ))}
            </ol>

            <div className="lg:sticky lg:top-24">
              <LocalizedShot
                srcFr="/images/switch-gates-fr.png"
                srcEn="/images/switch-gates-en.png"
                lang={lang}
                alt={t.meeting.slot}
              />
              <p className="mt-8 text-lg leading-relaxed text-muted">{t.meeting.notSummary}</p>
              <p className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.meeting.clearer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUILT FOR COMPLEX SALES */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading lines={t.builtFor.title} />
          <div className="mt-8 space-y-3 text-lg leading-relaxed text-muted">
            {t.builtFor.lines.map((l, i) => (
              <p key={i}>
                <Emph text={l} />
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {t.builtFor.attributes.map((a) => (
              <li key={a} className="border-t border-line py-4 leading-relaxed text-navy">
                {a}
              </li>
            ))}
          </ul>

          <p className="mt-12 font-medium text-navy">{t.builtFor.designedForIntro}</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {t.builtFor.designedFor.map((d) => (
              <li key={d} className="rounded-full border border-line bg-paper-2 px-4 py-2 text-sm text-navy">
                {d}
              </li>
            ))}
          </ul>

          <p className="mt-12 text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">
            <Emph text={t.builtFor.inYes} strongClass="font-semibold text-orange" />
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.builtFor.inNo}</p>
        </div>
      </section>

      {/* 5. THE LOOP */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <SectionHeading lines={t.loop.title} />
            <div className="mt-6 space-y-3 text-lg leading-relaxed text-muted">
              {t.loop.intro.map((l, i) => (
                <p key={i}>
                  <Emph text={l} />
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <FlowDiagram data={t.loop.flow} />
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">
              <Emph text={t.loop.cycle} strongClass="font-semibold text-navy" />
            </p>
            <p className="mt-8 text-lg leading-relaxed text-muted">{t.loop.remembersConversation}</p>
            <p className="mt-2 font-serif text-2xl leading-snug text-orange md:text-3xl">{t.loop.remembersDeal}</p>
          </div>
        </div>
      </section>

      <CtaBand label={t.cta} newTab={t.newTab} />

      {/* 6. THREE INGREDIENTS */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <SectionHeading lines={t.combines.title} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.combines.intro}</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {t.combines.blocks.map((b) => (
              <div key={b.n} className="flex flex-col gap-4 bg-paper p-8">
                <div className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="font-mono text-sm font-semibold text-navy/40">
                    {b.n}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">{b.label}</p>
                </div>
                <div className="space-y-2 leading-relaxed text-navy">
                  {b.lines.map((l, i) => (
                    <p key={i}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">{t.combines.closeLead}</p>
            <p className="mt-3 text-pretty font-serif text-2xl leading-snug text-navy md:text-3xl">
              {t.combines.closeStrong}
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOUR QUESTIONS */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <SectionHeading lines={t.fourQ.title} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.fourQ.intro}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
            <ol className="grid gap-4 sm:grid-cols-2">
              {t.fourQ.questions.map((q) => (
                <li key={q.title} className="rounded-2xl border border-line bg-paper p-6">
                  <p className="font-serif text-xl leading-snug text-navy">{q.title}</p>
                  <ul className="mt-4 space-y-2">
                    {q.lines.map((l, i) => (
                      <li key={i} className="leading-relaxed text-muted">
                        {l}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="lg:sticky lg:top-24">
              <ScoreChart data={t.fourQ.chart} />
            </div>
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">{t.fourQ.evolve}</p>
            <p className="mt-3 text-pretty font-serif text-2xl leading-snug text-orange md:text-3xl">
              {t.fourQ.closeStrong}
            </p>
          </div>
        </div>
      </section>

      {/* 8. BEFORE · AFTER · BETWEEN MEETINGS */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold text-orange">{t.sequence.flow}</p>
            <div className="mt-4">
              <SectionHeading lines={t.sequence.title} />
            </div>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
            {[t.before, t.after, t.between].map((stage) => (
              <li key={stage.label} className="flex flex-col gap-4 bg-paper p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-orange">{stage.label}</p>
                <p className="leading-relaxed text-muted">
                  <Emph text={stage.lead} strongClass="font-semibold text-orange" />
                </p>
                <ul className="flex flex-col">
                  {stage.items.map((item) => (
                    <li key={item} className="border-t border-line py-2.5 leading-relaxed text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <ImportDialog d={t.after.dialog} />
            <div className="flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-5">
                <p className="text-pretty font-serif text-2xl leading-snug text-navy">
                  <Emph text={t.before.close} strongClass="font-semibold text-orange" />
                </p>
                <BriefingCta label={t.before.cta} />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-muted">{t.between.objNot}</p>
                <p className="mt-2 font-serif text-2xl leading-snug text-orange md:text-3xl">{t.between.objYes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand label={t.cta} newTab={t.newTab} />

      {/* 11. FOR SALESPEOPLE */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.forReps.eyebrow}</p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-[1.1] text-navy md:text-4xl">
            {t.forReps.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.forReps.intro}</p>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {t.forReps.items.map((item) => (
              <li key={item} className="border-t border-line py-3 leading-relaxed text-navy">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-pretty font-serif text-2xl leading-snug text-orange">{t.forReps.close}</p>
        </div>
      </section>

      {/* 12. FOR SALES LEADERS · MISSION CONTROL */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.forLeaders.eyebrow}</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-[1.1] text-navy md:text-4xl">
              {t.forLeaders.title.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <div className="mt-6 space-y-2 text-lg leading-relaxed text-muted">
              {t.forLeaders.intro.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.mission.eyebrow}</p>
            <p className="mt-4 text-balance font-serif text-2xl leading-snug text-navy md:text-3xl">
              {t.mission.title.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t.mission.intro}</p>
          </div>

          <div className="mt-10">
            <PortfolioScatter data={t.mission.scatter} />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-medium text-navy">{t.mission.showsIntro}</p>
              <ul className="mt-4 flex flex-col">
                {t.mission.items.map((item) => (
                  <li key={item} className="border-t border-line py-3 leading-relaxed text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-8">
              <p className="text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">
                <Emph text={t.forLeaders.close} strongClass="font-semibold text-orange" />
              </p>
              <p className="mt-8 text-lg leading-relaxed text-muted">{t.mission.notDashboard}</p>
              <p className="mt-2 font-serif text-2xl leading-snug text-orange md:text-3xl">{t.mission.isWay}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. METHODOLOGY */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading lines={t.methodology.title} />
          <ul className="mt-8 flex flex-wrap gap-3">
            {t.methodology.questions.map((q) => (
              <li key={q} className="rounded-full border border-line bg-paper-2 px-4 py-2 text-sm text-navy">
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.methodology.keepIt}</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{t.methodology.notAnother}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            <Emph text={t.methodology.turns} />
          </p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{t.methodology.playbookStops}</p>
          <p className="mt-2 font-serif text-2xl leading-snug text-orange md:text-3xl">{t.methodology.startsLiving}</p>
        </div>
      </section>

      {/* 15. NOT A CRM — comparison */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <SectionHeading lines={t.notCrm.title} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.notCrm.crmRecords}</p>
            <p className="mt-1 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.notCrm.switchHelps}</p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {t.notCrm.cols.map((col) => {
              const isSwitch = col.label === "Switch"
              return (
                <div key={col.label} className={`flex flex-col gap-4 p-6 ${isSwitch ? "bg-navy" : "bg-paper"}`}>
                  <div>
                    <p
                      className={`font-mono text-xs font-semibold uppercase tracking-[0.14em] ${
                        isSwitch ? "text-orange" : "text-navy"
                      }`}
                    >
                      {col.label}
                    </p>
                    <p className={`mt-2 font-serif text-lg leading-snug ${isSwitch ? "text-paper" : "text-navy"}`}>
                      {col.q}
                    </p>
                  </div>
                  <ul className={`space-y-1.5 text-sm leading-relaxed ${isSwitch ? "text-paper/80" : "text-muted"}`}>
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">{t.notCrm.close1}</p>
            <p className="mt-3 text-pretty font-serif text-2xl leading-snug text-orange md:text-3xl">
              {t.notCrm.close2}
            </p>
          </div>
        </div>
      </section>

      {/* 16. TRAINING → DISCIPLINE */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading lines={t.training.title} />
            <div className="mt-8 space-y-2 text-lg leading-relaxed text-muted">
              {t.training.lines.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </div>
          <div className="lg:pt-2">
            <div className="space-y-2 text-lg leading-relaxed text-navy">
              {t.training.putsInside.map((l, i) => (
                <p key={i}>
                  <Emph text={l} strongClass="font-semibold text-orange" />
                </p>
              ))}
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{t.training.notLabel}</p>
                <p className="mt-2 font-serif text-xl leading-snug text-muted line-through decoration-line">
                  {t.training.notQ}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange">{t.training.butLabel}</p>
                <p className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.training.butQ}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand label={t.cta} newTab={t.newTab} />

      {/* 17. WHAT SWITCH CAN HELP YOU DO */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeading lines={t.canDo.title} />
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.canDo.items.map((item) => (
              <li key={item} className="border-t border-line py-4 leading-relaxed text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-lg leading-relaxed text-muted">{t.canDo.closeLead}</p>
            <p className="mt-2 text-pretty font-serif text-2xl leading-snug text-orange md:text-3xl">
              {t.canDo.closeStrong}
            </p>
          </div>
        </div>
      </section>

      {/* 18. WHAT CHANGES */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading lines={t.changes.title} />
          <ul className="mt-10 space-y-3">
            {t.changes.items.map((item) => (
              <li key={item} className="border-t border-line pt-3 text-lg leading-relaxed text-navy">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-lg leading-relaxed text-muted">{t.changes.fewerLead}</p>
            <p className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.changes.fewerQuote}</p>
          </div>
        </div>
      </section>

      {/* 19. BUILT FROM REAL SALES */}
      <section className="border-b border-line bg-navy px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-balance font-serif text-3xl font-normal leading-[1.1] text-paper md:text-4xl">
            {t.realSales.title.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-paper/80">
            <Emph text={t.realSales.body} strongClass="font-semibold text-orange" />
          </p>
          <p className="mt-8 text-paper/70">{t.realSales.principle}</p>
          <p className="mt-2 font-serif text-2xl leading-snug text-paper md:text-3xl">{t.realSales.notConvincing}</p>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">{t.realSales.isUnderstanding}</p>
          <div className="mt-10">
            <Link
              href="/sales-unlocked"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-base font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              {t.realSales.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 20. PRICING */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px] text-center">
          <SectionHeading lines={t.pricing.title} />
          <div className="mt-10 flex items-baseline justify-center gap-2">
            <span className="font-serif text-5xl font-normal text-navy md:text-6xl">{t.pricing.price}</span>
            <span className="text-lg text-muted">{t.pricing.unit}</span>
          </div>
          <ul className="mt-8 flex flex-col items-center gap-2">
            {t.pricing.details.map((d) => (
              <li key={d} className="leading-relaxed text-muted">
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">({t.newTab})</span>
            </a>
            <p className="text-sm text-muted">{t.noCard}</p>
          </div>
        </div>
      </section>

      {/* 21. FAQ */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[820px]">
          <SectionHeading lines={t.faq.title} />
          <div className="mt-10 divide-y divide-line border-y border-line">
            {t.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-serif text-lg leading-snug text-navy md:text-xl">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-mono text-xl text-orange transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
                  {item.todo && (
                    <p className="inline-flex items-center gap-2 rounded-md border border-orange/40 bg-orange/10 px-3 py-1.5 text-sm font-medium text-orange">
                      <span className="font-mono text-xs uppercase tracking-[0.12em]">{t.todoLabel}</span>
                      <span>{item.todo}</span>
                    </p>
                  )}
                  {item.a.map((p, i) => (
                    <p key={i}>
                      <Emph text={p} />
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 22. FINAL CTA */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="text-balance font-serif text-3xl font-normal leading-[1.1] text-navy-deep md:text-5xl">
            {t.final.title}
          </h2>
          <p className="mt-4 text-pretty font-serif text-2xl leading-snug text-orange md:text-3xl">
            {t.final.subtitle}
          </p>
          <p className="mt-8 text-lg font-medium text-navy">{t.final.stopGuessing}</p>
          <div className="mt-4 space-y-1 text-lg leading-relaxed text-muted">
            {t.final.lines.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">({t.newTab})</span>
            </a>
            <p className="text-sm text-muted">{t.noCard}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
