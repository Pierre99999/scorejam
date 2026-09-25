"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

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
      steps: [
        { label: "Conversation nº 1", lines: ["Que savons-nous ?", "Que supposons-nous ?", "Qu'est-ce qui manque ?"] },
        {
          label: "Briefing nº 2",
          lines: ["Que faut-il comprendre ensuite ?", "Quelles questions comptent ?", "Qu'éviter de faire trop tôt ?"],
        },
        {
          label: "Conversation nº 2",
          lines: [
            "Qu'est-ce qui a changé ?",
            "Qu'est-ce qui s'est renforcé ?",
            "Qu'est-ce qui s'est affaibli ?",
            "Quelles nouvelles hypothèses sont apparues ?",
          ],
        },
        { label: "Briefing nº 3", lines: ["Que doit-il se passer ensuite ?"] },
      ],
      cycle: "Et le cycle continue jusqu'à ce que vous **gagniez — ou décidiez que le deal ne vaut pas la peine.**",
      remembersConversation: "Switch ne se souvient pas seulement de la conversation.",
      remembersDeal: "Il se souvient du deal.",
      slot: "La boucle d'un deal : conversation → briefing → conversation.",
    },

    combines: {
      title: ["Vos conversations.", "Votre playbook.", "La prochaine action."],
      intro: "Switch combine trois choses.",
      blocks: [
        {
          n: "01",
          label: "Votre client",
          lines: [
            "Ce qu'il a réellement dit.",
            "Comptes rendus, transcriptions et informations recueillies tout au long du deal.",
          ],
        },
        {
          n: "02",
          label: "Votre playbook",
          lines: [
            "Votre offre. Vos clients. Votre positionnement. Votre valeur.",
            "Ce qui vous fait gagner. Ce qui vous fait perdre.",
            "La façon dont votre entreprise vend.",
          ],
        },
        {
          n: "03",
          label: "Sales Unlocked",
          lines: [
            "La discipline derrière Switch.",
            "Une manière systématique de comprendre comment les clients passent d'un problème à une décision.",
          ],
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
    },

    before: {
      title: "Avant le prochain rendez-vous, sachez ce qui compte.",
      intro: "Switch transforme tout ce qu'il sait du deal en un briefing.",
      notGeneric: ["Pas vingt questions génériques.", "Les questions qui comptent **maintenant**."],
      items: [
        "Ce qu'il vous reste à comprendre.",
        "Ce qui doit être validé.",
        "Quelle hypothèse met le deal en danger.",
        "Quelle objection peut surgir.",
        "Ce qu'il ne faut pas encore présenter.",
        "Ce que la prochaine conversation doit accomplir.",
      ],
      close: "Vous arrivez au rendez-vous en sachant **pourquoi vous y êtes.**",
      slot: "Le briefing d'avant rendez-vous.",
    },

    after: {
      title: "Après le rendez-vous, déposez la conversation.",
      intro: ["Ajoutez votre compte rendu ou votre transcription.", "Switch analyse ce qui s'est passé et met à jour le deal."],
      questions: [
        "Qu'est-ce qui a été confirmé ?",
        "Qu'est-ce qui reste une hypothèse ?",
        "Qu'est-ce que le client a contredit ?",
        "Qu'est-ce qui a changé ?",
        "Qu'avez-vous omis d'explorer ?",
        "Le deal a-t-il réellement avancé ?",
      ],
      thenPrepare: "Puis Switch prépare la suite.",
      flow: "Conversation → Analyse → Briefing → Conversation.",
      slot: "L'import d'une conversation et l'analyse qui met à jour le deal.",
    },

    between: {
      title: "Ne perdez plus le deal entre les rendez-vous.",
      intro: [
        "Les deals n'avancent pas qu'en rendez-vous.",
        "Switch vous aide à décider ce qui doit se passer entre les conversations.",
      ],
      items: [
        "Envoyer la bonne relance.",
        "Clarifier une question restée sans réponse.",
        "Confirmer ce qui a été convenu.",
        "Partager quelque chose qui aide le client à décider.",
        "Faire entrer un autre interlocuteur dans la conversation.",
      ],
      sometimes: "Ou parfois :",
      doNothing: "ne rien faire encore.",
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
        "Voyez ce que vous avez mal compris.",
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
      acrossTeam: "Sur toute l'équipe, voyez :",
      items: [
        "Quels deals demandent de l'attention.",
        "Quelles opportunités s'affaiblissent.",
        "Où manque une information critique.",
        "Où des hypothèses sont prises pour des faits.",
        "Où la dynamique disparaît.",
        "Où un commercial a besoin d'aide.",
        "Et où votre temps peut avoir le plus d'impact.",
      ],
      close:
        "Les revues de deals deviennent des conversations sur **les preuves et l'action**, pas sur la confiance et les pourcentages du CRM.",
    },

    mission: {
      eyebrow: "MISSION CONTROL",
      title: ["N'inspectez pas chaque deal.", "Sachez où intervenir."],
      intro: "Switch offre aux directeurs commerciaux une vue portefeuille de leurs opportunités.",
      asksIntro: "Demandez :",
      asks: [
        "Où dois-je intervenir ?",
        "Quels deals sont en danger ?",
        "Où se trouve le plus gros potentiel ?",
        "Que pouvons-nous gagner vite ?",
      ],
      then: "Puis entrez directement dans les deals qui comptent.",
      notDashboard: "Switch n'est pas un tableau de bord de plus à surveiller.",
      isWay: "C'est une façon de savoir où votre attention a de la valeur.",
      slot: "Mission Control : la vue portefeuille des opportunités.",
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
        "Un atelier.",
        "Un cadre.",
        "Un playbook.",
        "Puis chacun retourne au travail.",
        "Et retombe peu à peu dans ses vieilles habitudes.",
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
        "Trouver les informations manquantes.",
        "Repérer les hypothèses non étayées.",
        "Comprendre pourquoi un deal est bloqué.",
        "Préparer les bonnes questions.",
        "Décider quoi envoyer entre deux rendez-vous.",
        "Mener des revues de deals fondées sur les preuves.",
        "Coacher un commercial sur une opportunité réelle.",
        "Appliquer votre playbook avec constance.",
        "Intégrer plus vite les nouveaux commerciaux.",
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
        "De meilleures revues de deals.",
        "Un meilleur coaching.",
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
            "Switch est une plateforme d'intelligence de deal, propulsée par l'IA, pour les ventes B2B complexes.",
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
          todo: "Préciser la fonctionnalité exacte actuelle.",
          a: [
            "Switch peut analyser [comptes rendus / transcriptions / enregistrements — préciser exactement ce qui est pris en charge aujourd'hui].",
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
          todo: "Réponse réelle.",
          a: [
            "Votre playbook fournit à Switch le contexte dont il a besoin pour comprendre comment votre entreprise vend, à qui, et ce qui compte dans un deal.",
          ],
        },
        {
          q: "Switch s'intègre-t-il à mon CRM ?",
          todo: "Intégrations actuelles / roadmap.",
          a: [],
        },
        {
          q: "Switch s'intègre-t-il à Zoom, Teams ou Google Meet ?",
          todo: "Fonctionnalité actuelle.",
          a: [],
        },
        {
          q: "Mes données clients sont-elles sécurisées ?",
          todo: "Informations sécurité / hébergement / RGPD.",
          a: [],
        },
        {
          q: "Mes données servent-elles à entraîner des modèles d'IA ?",
          todo: "Politique de données exacte.",
          a: [],
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
      steps: [
        { label: "Conversation #1", lines: ["What do we know?", "What are we assuming?", "What is missing?"] },
        {
          label: "Briefing #2",
          lines: ["What needs to be understood next?", "Which questions matter?", "What should you avoid doing too early?"],
        },
        {
          label: "Conversation #2",
          lines: [
            "What changed?",
            "What became stronger?",
            "What became weaker?",
            "What new assumptions appeared?",
          ],
        },
        { label: "Briefing #3", lines: ["What should happen next?"] },
      ],
      cycle: "And the cycle continues until you **win — or decide the deal isn't worth pursuing.**",
      remembersConversation: "Switch doesn't just remember the conversation.",
      remembersDeal: "It remembers the deal.",
      slot: "One deal's loop: conversation → briefing → conversation.",
    },

    combines: {
      title: ["Your conversations.", "Your playbook.", "The next action."],
      intro: "Switch combines three things.",
      blocks: [
        {
          n: "01",
          label: "Your customer",
          lines: [
            "What they actually said.",
            "Meeting notes, transcripts and the information collected throughout the deal.",
          ],
        },
        {
          n: "02",
          label: "Your playbook",
          lines: [
            "Your offer. Your customers. Your positioning. Your value.",
            "What makes you win. What makes you lose.",
            "The way your company sells.",
          ],
        },
        {
          n: "03",
          label: "Sales Unlocked",
          lines: [
            "The discipline behind Switch.",
            "A systematic way to understand how customers move from a problem to a decision.",
          ],
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
    },

    before: {
      title: "Before the next meeting, know what matters.",
      intro: "Switch turns everything it knows about the deal into a briefing.",
      notGeneric: ["Not twenty generic questions.", "The questions that matter **now**."],
      items: [
        "What you still need to understand.",
        "What needs to be validated.",
        "What assumption is putting the deal at risk.",
        "What objection may appear.",
        "What shouldn't be presented yet.",
        "What the next conversation should accomplish.",
      ],
      close: "You walk into the meeting knowing **why you're there.**",
      slot: "The pre-meeting briefing.",
    },

    after: {
      title: "After the meeting, drop in the conversation.",
      intro: ["Add your meeting notes or transcript.", "Switch analyzes what happened and updates the deal."],
      questions: [
        "What was confirmed?",
        "What remains an assumption?",
        "What did the customer contradict?",
        "What changed?",
        "What did you fail to explore?",
        "Did the deal actually move forward?",
      ],
      thenPrepare: "Then Switch prepares the next move.",
      flow: "Conversation → Analysis → Briefing → Conversation.",
      slot: "Importing a conversation and the analysis that updates the deal.",
    },

    between: {
      title: "Stop losing the deal between meetings.",
      intro: [
        "Deals don't only move during meetings.",
        "Switch helps you decide what should happen between conversations.",
      ],
      items: [
        "Send the right follow-up.",
        "Clarify an unanswered question.",
        "Confirm what was agreed.",
        "Share something that helps the customer make the decision.",
        "Bring another stakeholder into the conversation.",
      ],
      sometimes: "Or sometimes:",
      doNothing: "do nothing yet.",
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
        "See what you misunderstood.",
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
      acrossTeam: "Across the team, see:",
      items: [
        "Which deals need attention.",
        "Which opportunities are weakening.",
        "Where critical information is missing.",
        "Where assumptions are being treated as facts.",
        "Where momentum is disappearing.",
        "Where a rep needs help.",
        "And where your time can have the biggest impact.",
      ],
      close:
        "Deal reviews become conversations about **evidence and action**, not confidence and CRM percentages.",
    },

    mission: {
      eyebrow: "MISSION CONTROL",
      title: ["Don't inspect every deal.", "Know where to intervene."],
      intro: "Switch gives sales leaders a portfolio view of their opportunities.",
      asksIntro: "Ask:",
      asks: [
        "Where should I intervene?",
        "Which deals are in danger?",
        "Where is the biggest potential return?",
        "What can we win quickly?",
      ],
      then: "Then go directly into the deals that matter.",
      notDashboard: "Switch isn't another dashboard to monitor.",
      isWay: "It's a way to know where your attention is worth something.",
      slot: "Mission Control: the portfolio view of opportunities.",
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
        "A workshop.",
        "A framework.",
        "A playbook.",
        "Then everyone goes back to work.",
        "And slowly goes back to their old habits.",
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
        "Find missing information.",
        "Identify unsupported assumptions.",
        "Understand why a deal is stuck.",
        "Prepare the right questions.",
        "Decide what to send between meetings.",
        "Run evidence-based deal reviews.",
        "Coach a salesperson on a real opportunity.",
        "Apply your playbook consistently.",
        "Onboard new salespeople faster.",
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
        "Better deal reviews.",
        "Better coaching.",
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
          todo: "Insert exact current functionality here.",
          a: ["Switch can analyze [meeting notes / transcripts / recordings — specify exactly what is currently supported]."],
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
          todo: "Insert real answer.",
          a: [
            "Your playbook provides Switch with the context it needs to understand how your company sells, who you sell to and what matters in a deal.",
          ],
        },
        { q: "Does Switch integrate with my CRM?", todo: "Insert current integrations / roadmap.", a: [] },
        { q: "Does Switch integrate with Zoom, Teams or Google Meet?", todo: "Insert current functionality.", a: [] },
        { q: "Is my customer data secure?", todo: "Insert security / hosting / GDPR information.", a: [] },
        { q: "Is my data used to train AI models?", todo: "Insert exact data policy.", a: [] },
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

/** A numbered blank placeholder marking where a screenshot should go. */
function ShotSlot({ n, label, ratio = "16 / 10" }: { n: number; label: string; ratio?: string }) {
  return (
    <figure
      className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-line bg-paper-2 px-6 py-10 text-center"
      style={{ aspectRatio: ratio }}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-orange font-mono text-base font-semibold text-orange">
        {n}
      </span>
      <figcaption className="max-w-sm text-sm leading-relaxed text-muted">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-orange">Visuel {n}</span>
        <span className="mt-2 block">{label}</span>
      </figcaption>
    </figure>
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

          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            {t.loop.steps.map((step) => (
              <li key={step.label} className="rounded-2xl border border-line bg-paper p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-orange">{step.label}</p>
                <ul className="mt-4 space-y-2">
                  {step.lines.map((l, i) => (
                    <li key={i} className="leading-relaxed text-navy">
                      {l}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <ShotSlot n={3} label={t.loop.slot} ratio="16 / 7" />
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
              <ShotSlot n={4} label={t.fourQ.slot} ratio="4 / 3" />
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

      {/* 8. BEFORE THE MEETING */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div>
            <SectionHeading lines={t.before.title} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.before.intro}</p>
            <div className="mt-4 space-y-1 text-lg leading-relaxed text-muted">
              {t.before.notGeneric.map((l, i) => (
                <p key={i}>
                  <Emph text={l} strongClass="font-semibold text-orange" />
                </p>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {t.before.items.map((item) => (
                <li key={item} className="border-t border-line pt-3 leading-relaxed text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-pretty font-serif text-2xl leading-snug text-navy">
              <Emph text={t.before.close} strongClass="font-semibold text-orange" />
            </p>
          </div>

          <ShotSlot n={5} label={t.before.slot} ratio="3 / 4" />
        </div>
      </section>

      {/* 9. AFTER THE MEETING */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <ShotSlot n={6} label={t.after.slot} ratio="4 / 3" />

          <div>
            <SectionHeading lines={t.after.title} />
            <div className="mt-6 space-y-3 text-lg leading-relaxed text-muted">
              {t.after.intro.map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {t.after.questions.map((q) => (
                <li key={q} className="border-t border-line py-3 leading-relaxed text-navy">
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg leading-relaxed text-muted">{t.after.thenPrepare}</p>
            <p className="mt-3 font-mono text-base font-semibold text-orange">{t.after.flow}</p>
          </div>
        </div>
      </section>

      {/* 10. BETWEEN MEETINGS */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
          <SectionHeading lines={t.between.title} />
          <div className="mt-6 space-y-3 text-lg leading-relaxed text-muted">
            {t.between.intro.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {t.between.items.map((item) => (
              <li key={item} className="border-t border-line pt-3 leading-relaxed text-navy">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-muted">{t.between.sometimes}</p>
          <p className="mt-2 font-serif text-2xl leading-snug text-navy md:text-3xl">{t.between.doNothing}</p>
          <p className="mt-8 text-lg leading-relaxed text-muted">{t.between.objNot}</p>
          <p className="mt-2 font-serif text-2xl leading-snug text-orange md:text-3xl">{t.between.objYes}</p>
        </div>
      </section>

      {/* 11. FOR SALESPEOPLE */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          <div>
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

          <ShotSlot n={7} label={t.forReps.slot} ratio="4 / 3" />
        </div>
      </section>

      {/* 12. FOR SALES LEADERS */}
      <section className="border-b border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[880px]">
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
          <p className="mt-8 font-medium text-navy">{t.forLeaders.acrossTeam}</p>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {t.forLeaders.items.map((item) => (
              <li key={item} className="border-t border-line py-3 leading-relaxed text-navy">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-pretty font-serif text-xl leading-snug text-navy md:text-2xl">
            <Emph text={t.forLeaders.close} strongClass="font-semibold text-orange" />
          </p>
        </div>
      </section>

      {/* 13. MISSION CONTROL */}
      <section className="border-b border-line bg-paper-2 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{t.mission.eyebrow}</p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-normal leading-[1.1] text-navy md:text-4xl">
              {t.mission.title.map((l, i) => (
                <span key={i} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.mission.intro}</p>
          </div>

          <div className="mt-12">
            <ShotSlot n={8} label={t.mission.slot} ratio="16 / 9" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-medium text-navy">{t.mission.asksIntro}</p>
              <ul className="mt-4 space-y-3">
                {t.mission.asks.map((a) => (
                  <li key={a} className="border-l-2 border-orange pl-5 font-serif text-xl leading-snug text-navy">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-2">
              <p className="text-lg leading-relaxed text-muted">{t.mission.then}</p>
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
