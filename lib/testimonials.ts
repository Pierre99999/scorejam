// Testimonial data for the whole site.
// `program` and `cohort` are preserved as historical metadata.
// `method` is the derived field the UI filters on.

export type MethodKey = "startup" | "sales"

/**
 * Quotes are stored in both languages so every visitor reads them in their own.
 * Most of these founders spoke French originally; the English was already a
 * translation, so neither side is more "authentic" than the other.
 */
export type LocalizedText = { en: string; fr: string }

export type TestimonyEntry = {
  name: string
  role: string
  company: string
  cohort: string
  text: LocalizedText
  program: string
}

export type Testimonial = TestimonyEntry & { method: MethodKey }

const baseTestimonials: TestimonyEntry[] = [
  {
    name: "Mehdi Djabri",
    role: "CEO",
    company: "Itération X",
    cohort: "1",
    text: {
      en: `The program creates a space and structure that forces you to delve deeper into key strategic topics that you don't necessarily dwell on in your day-to-day activities. Being able to discuss key strategic elements with Pierre, my co-founders, and the other entrepreneurs was very powerful. Communicating your ideas clearly and concisely to a diverse group and getting their feedback and perspectives is a game-changer.`,
      fr: `Le programme crée un espace et une structure qui obligent à creuser les sujets stratégiques clés, ceux sur lesquels on ne s'attarde pas forcément dans le quotidien. Pouvoir discuter des éléments stratégiques essentiels avec Pierre, mes cofondateurs et les autres entrepreneurs a été très puissant. Exposer ses idées clairement et de façon concise à un groupe varié, puis recevoir leurs retours et leurs perspectives, change tout.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Morgane Surlenet",
    role: "CEO",
    company: "Skribix",
    cohort: "1",
    text: {
      en: `A revolution. 34 Elements Academy offers a modern way of thinking that will long influence my entrepreneurial vision.`,
      fr: `Une révolution. 34 Elements Academy propose une façon de penser moderne qui marquera longtemps ma vision d'entrepreneure.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Philippe Masseau",
    role: "CEO",
    company: "Ekstere",
    cohort: "1",
    text: {
      en: `By joining 34 elements, I knew we would be challenged on the strategy and direction of our project! And we have been, deep down, always with good intentions, understanding and objective analysis. Thank you Pierre for the value you brought us, and thank you to all the other entrepreneurs for sharing their experiences during these 7 weeks!`,
      fr: `En rejoignant 34 elements, je savais que nous serions challengés sur la stratégie et la direction de notre projet ! Et nous l'avons été, en profondeur, toujours avec de bonnes intentions, de la compréhension et une analyse objective. Merci Pierre pour la valeur que tu nous as apportée, et merci à tous les autres entrepreneurs d'avoir partagé leur expérience pendant ces 7 semaines !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Agathe Martin",
    role: "COO",
    company: "Kiligi",
    cohort: "1",
    text: {
      en: `Starting a business raises thousands of questions, which can lead to millions of answers. With 34 Elements, you focus on only the questions that matter and guide you toward the right answers. And you do it all with the help of a talented team and committed fellow entrepreneurs.`,
      fr: `Créer une entreprise soulève des milliers de questions, qui peuvent mener à des millions de réponses. Avec 34 Elements, on se concentre uniquement sur les questions qui comptent et qui mènent aux bonnes réponses. Et tout cela avec l'aide d'une équipe talentueuse et d'autres entrepreneurs engagés.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Stéphane Rouquette",
    role: "CEO",
    company: "Le Marché de mon village",
    cohort: "1",
    text: {
      en: `Pierre brings the best of entrepreneurship to the world at an astonishing level of simplicity and understanding. His global and international experiences are invaluable in opening eyes to what a business should be. He challenges founders, the project, our vision, and our ambitions to take them to the next level. This course should be mandatory for everyone when they become entrepreneurs.`,
      fr: `Pierre transmet le meilleur de l'entrepreneuriat avec un niveau de simplicité et de compréhension étonnant. Ses expériences internationales sont précieuses pour ouvrir les yeux sur ce que doit être une entreprise. Il challenge les fondateurs, le projet, notre vision et nos ambitions pour les faire passer au niveau supérieur. Ce parcours devrait être obligatoire pour toute personne qui se lance dans l'entrepreneuriat.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Sofiane Laurent",
    role: "CEO",
    company: "Kobi",
    cohort: "1",
    text: {
      en: `Thank you so much! It was truly enriching to experience this adventure with you and the rest of the group.`,
      fr: `Merci infiniment ! Ce fut vraiment enrichissant de vivre cette aventure avec toi et avec le reste du groupe.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Nicolas Réaud",
    role: "COO",
    company: "Kobi",
    cohort: "1",
    text: {
      en: `34 Elements allowed us to be more organized among the founders and focus on our goals. It helped us create a clear product vision to communicate to the team. We became better entrepreneurs!`,
      fr: `34 Elements nous a permis d'être mieux organisés entre fondateurs et de nous concentrer sur nos objectifs. Cela nous a aidés à construire une vision produit claire à transmettre à l'équipe. Nous sommes devenus de meilleurs entrepreneurs !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Marie Tors",
    role: "CEO",
    company: "Graffiti",
    cohort: "1",
    text: {
      en: `"Make haste slowly, and without losing courage, Put your work back on the loom twenty times, Polish it without ceasing, and repolish it, Add sometimes, and often erase." Pierre is to start-ups what Boileau was to poetry. This path that seemed strewn with bumps will become a highway of impeccable smoothness... after long hours spent questioning everything! :-) 34elements has been very valuable to us. A big thank you to both of them.`,
      // Boileau's original verse, restored rather than translated back.
      fr: `« Hâtez-vous lentement, et sans perdre courage, Vingt fois sur le métier remettez votre ouvrage, Polissez-le sans cesse et le repolissez, Ajoutez quelquefois, et souvent effacez. » Pierre est aux start-ups ce que Boileau était à la poésie. Ce chemin qui semblait semé d'embûches deviendra une autoroute d'une fluidité impeccable... après de longues heures passées à tout remettre en question ! :-) 34elements nous a été très précieux. Un grand merci à eux deux.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Alexandre Hernandez",
    role: "COO",
    company: "Jobgether",
    cohort: "1",
    text: {
      en: `34 Elements was a game-changer for us. We realized how important it was to take the time to discuss strategy and vision. We now feel more confident.`,
      fr: `34 Elements a tout changé pour nous. Nous avons compris à quel point il était important de prendre le temps de parler de stratégie et de vision. Nous nous sentons désormais plus confiants.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Arnaud Gazet",
    role: "CEO",
    company: "Refer",
    cohort: "1",
    text: {
      en: `34 Elements helped us gain a clear perspective on our startup and ask ourselves the right questions to approach the future. A great product without a concrete strategy is a marriage doomed to failure.`,
      fr: `34 Elements nous a aidés à porter un regard clair sur notre startup et à nous poser les bonnes questions pour aborder l'avenir. Un excellent produit sans stratégie concrète est un mariage voué à l'échec.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Alexis Martin",
    role: "Co-founder",
    company: "Uniseed",
    cohort: "1",
    text: {
      en: `34 Elements gave us a holistic view of our startup. This was especially valuable because we're usually caught up in day-to-day activities and rarely get a good, objective overview and understanding of areas we need to improve.`,
      fr: `34 Elements nous a donné une vision globale de notre startup. C'était d'autant plus précieux que nous sommes habituellement pris par le quotidien et que nous obtenons rarement une vue d'ensemble objective, ni une bonne compréhension des points à améliorer.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Olivier Mermet",
    role: "CEO",
    company: "Mirepoi",
    cohort: "1",
    text: {
      en: `34 Elements delivered far more than we initially expected. It was truly a two-month communion, it brought us closer, it helped us align our vision early on, and the feedback from fellow entrepreneurs, regardless of their background, was always relevant. Pierre is a true master of his craft. We recommend him without hesitation!`,
      fr: `34 Elements nous a apporté bien plus que ce que nous attendions au départ. Ce fut véritablement une communion de deux mois, cela nous a rapprochés, cela nous a aidés à aligner notre vision très tôt, et les retours des autres entrepreneurs, quel que soit leur parcours, étaient toujours pertinents. Pierre maîtrise son art. Nous le recommandons sans hésiter !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Sappey Marine",
    role: "Co-founder",
    company: "Ekstere",
    cohort: "1",
    text: {
      en: `The 34 elements experience is very structured to build you up more solidly and it may start with a saving destructuring... a well-constructed method to unfold the 7 weeks, group exchanges with mirror effects and above all the eye of the coach, demanding and benevolent who in a holistic approach will highlight the points to work on. What else? Just do it! Thank you to the 34 elements team for the richness of this course! Essential for any entrepreneur!`,
      fr: `L'expérience 34 elements est très structurée pour vous reconstruire plus solidement, et cela peut commencer par une déstructuration salvatrice... une méthode bien construite pour dérouler les 7 semaines, des échanges de groupe avec des effets miroir et surtout l'œil du coach, exigeant et bienveillant, qui dans une approche holistique met en lumière les points à travailler. Quoi d'autre ? Foncez ! Merci à l'équipe 34 elements pour la richesse de ce parcours ! Indispensable pour tout entrepreneur !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Loïc Lechelle",
    role: "CEO",
    company: "Skewer Lab",
    cohort: "2",
    text: {
      en: `The only "training" that opened my eyes to concrete actions to take as a founder. Constructive discussions, which shift the focus on the vision we have of each element. There is, in my experience, no other valid method for achieving the consolidation of the fundamentals of your company. Love.`,
      fr: `La seule « formation » qui m'a ouvert les yeux sur les actions concrètes à mener en tant que fondateur. Des échanges constructifs, qui déplacent le regard sur la vision que l'on a de chaque élément. Il n'existe, d'après mon expérience, aucune autre méthode valable pour consolider les fondamentaux de son entreprise. Love.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Benoît Cerceau",
    role: "CEO",
    company: "OnSpot",
    cohort: "2",
    text: {
      en: `I am happy to have discovered 34 Elements and to have found in Pierre the entrepreneurial spirit that I was always accustomed to while creating my first two startups in California. Pierre and his team will guide your startup through a thorough thought process consisting of 34 elements that you will need to address in order to increase the chances of getting your project off the ground. I would highly recommend anyone who is serious about their project to enroll in this academy and unless you can move to Silicon Valley, 34 Elements is your best bet. I will be on the lookout for the new batch of startups and look forward to the amazing alumni networking opportunities. Keep up the good work, guys!`,
      fr: `Je suis heureux d'avoir découvert 34 Elements et d'avoir retrouvé chez Pierre l'esprit entrepreneurial auquel j'étais habitué en créant mes deux premières startups en Californie. Pierre et son équipe guident votre startup à travers une réflexion approfondie composée de 34 éléments qu'il faut traiter pour augmenter les chances de faire décoller son projet. Je recommande vivement à quiconque prend son projet au sérieux de rejoindre cette académie : à moins de pouvoir déménager dans la Silicon Valley, 34 Elements est votre meilleure option. Je suivrai de près la prochaine promotion et j'attends avec impatience les formidables opportunités de networking entre alumni. Continuez comme ça !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jérôme Bourgeois",
    role: "CEO",
    company: "Sapio Arts",
    cohort: "2",
    text: {
      en: `Honestly, there will be a before and after. Your program makes us think and helps us a lot. Although I studied at a top school, the clarity of the method is truly excellent. Thank you.`,
      fr: `Honnêtement, il y aura un avant et un après. Votre programme fait réfléchir et aide énormément. Bien que j'aie fait une grande école, la clarté de la méthode est vraiment excellente. Merci.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anthony Retailleau",
    role: "CEO",
    company: "Feelback",
    cohort: "3",
    text: {
      en: `More than just a batch of new knowledge, 34 Elements has offered us a new way to analyze our daily actions, our solution, our strategy... It is now a new beginning full of ambition for the Feelback team.`,
      fr: `Plus qu'un simple lot de nouvelles connaissances, 34 Elements nous a offert une nouvelle façon d'analyser nos actions quotidiennes, notre solution, notre stratégie... C'est maintenant un nouveau départ plein d'ambition pour l'équipe Feelback.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Sarah Gaillard",
    role: "Co-founder",
    company: "Luminous",
    cohort: "3",
    text: {
      en: `Personally, 34 elements is a very useful experience that allowed me to gain confidence in myself, in my entrepreneurial instinct that had been detected a long time ago, but it is only today that I see it. My motivation and ambition have suddenly increased tenfold. For our team, it also allowed us to concretely sit down to reflect on key and founding subjects thanks to the framework and methodology provided by Pierre. It is also reassuring to do it with an experienced mentor who guides you on the path. We come out changed, with directions to take, confident that they are the right ones and new professional reflexes. Then, we have to go for it!`,
      fr: `Personnellement, 34 elements est une expérience très utile qui m'a permis de prendre confiance en moi, en mon instinct entrepreneurial repéré depuis longtemps, mais que je ne vois qu'aujourd'hui. Ma motivation et mon ambition ont été décuplées d'un coup. Pour notre équipe, cela nous a aussi permis de nous asseoir concrètement pour réfléchir à des sujets clés et fondateurs, grâce au cadre et à la méthodologie apportés par Pierre. C'est également rassurant de le faire avec un mentor expérimenté qui vous guide sur le chemin. On en sort changés, avec des directions à prendre, la confiance que ce sont les bonnes et de nouveaux réflexes professionnels. Ensuite, il n'y a plus qu'à foncer !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Olivier Bellucci",
    role: "Co-fondateur",
    company: "MonitorHR",
    cohort: "3",
    text: {
      // "334" in the source was a typo for "34".
      en: `34 Elements was a real turning point for MonitorHR. We realized the importance of constantly challenging our strategy and the positive impact this approach had on our performance. During these seven weeks, we grew as founders, but above all, as a company. We feel better equipped to achieve our ambition.`,
      fr: `34 Elements a été un véritable tournant pour MonitorHR. Nous avons pris conscience de l'importance de challenger en permanence notre stratégie et de l'impact positif de cette démarche sur nos performances. Pendant ces sept semaines, nous avons grandi en tant que fondateurs, mais surtout en tant qu'entreprise. Nous nous sentons mieux armés pour réaliser notre ambition.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Matthieu Coussi",
    role: "CEO",
    company: "Luminous",
    cohort: "3",
    text: {
      en: `Our 34 EL sessions were a real catalyst for Luminous: we came away with more focus and more ambition. It generated great discussions between co-founders and partners; it allowed us to refine our Go to market and our Business Model. While the first one was relatively expected, the focus on the BM was a surprise. Pierre is also very structuring in the approach and allows us to effectively frame the discussions. As a result, 34 EL was beneficial for Luminous, with more strategic and tactical vision and better control of priorities. It was recommended to me (thank you) and I am doing the same.`,
      fr: `Nos sessions 34 EL ont été un véritable catalyseur pour Luminous : nous en sommes sortis avec plus de focus et plus d'ambition. Cela a généré d'excellentes discussions entre cofondateurs et associés ; cela nous a permis d'affiner notre Go to market et notre Business Model. Si le premier était relativement attendu, le travail sur le BM a été une surprise. Pierre est aussi très structurant dans l'approche et permet de bien cadrer les échanges. Résultat : 34 EL a été bénéfique pour Luminous, avec une vision plus stratégique et tactique et une meilleure maîtrise des priorités. On me l'a recommandé (merci) et j'en fais de même.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Charles Pellé",
    role: "CEO",
    company: "Revelhome",
    cohort: "3",
    text: {
      en: `I learned! A lot in a short time. Mainly that the product is simply a consequence of structured strategic thinking. What I like about 34 EL? The American mindset, with common sense. The method is formidable; everyone draws on Pierre's experience and that of their cohort mates.`,
      fr: `J'ai appris ! Beaucoup, en peu de temps. Principalement que le produit n'est qu'une conséquence d'une réflexion stratégique structurée. Ce que j'aime chez 34 EL ? Le mindset américain, avec du bon sens. La méthode est redoutable ; chacun puise dans l'expérience de Pierre et dans celle de ses camarades de promotion.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Bruno Smadja",
    role: "CEO",
    company: "Mobilevent",
    cohort: "3",
    text: {
      en: `34 elements is primarily designed for start-ups, and many of them participate, some of which will soon be part of our daily lives. But 34 elements is also good for entrepreneurs who need to question the fundamentals, even for a 17-year-old company like mine. It did me a world of good, both through the method and through the discussions with Pierre and the other entrepreneurs. I recommend it to everyone; you will always get something positive out of it in your business management. Thank you, Pierre!`,
      fr: `34 elements est d'abord conçu pour les start-ups, et beaucoup y participent, dont certaines feront bientôt partie de notre quotidien. Mais 34 elements est aussi bénéfique aux entrepreneurs qui ont besoin de réinterroger les fondamentaux, même pour une entreprise de 17 ans comme la mienne. Cela m'a fait un bien fou, autant par la méthode que par les échanges avec Pierre et les autres entrepreneurs. Je le recommande à tous ; vous en tirerez toujours quelque chose de positif dans la gestion de votre entreprise. Merci Pierre !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Mélanie Pin",
    role: "CEO",
    company: "Your Charlie",
    cohort: "3",
    text: {
      en: `I learned how to organize my entrepreneurial intuitions thanks to 34 Elements. It's so valuable. Thank you, Pierre!`,
      fr: `J'ai appris à organiser mes intuitions d'entrepreneure grâce à 34 Elements. C'est tellement précieux. Merci Pierre !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anas Erridaoui",
    role: "CEO",
    company: "Fungu'it",
    cohort: "3",
    text: {
      en: `We are more aware of the challenges to overcome and the assumptions to de-risk. Thanks to Pierre, we are applying these elements to our startup, which have led to profound changes from the first week.`,
      fr: `Nous avons une conscience plus nette des défis à relever et des hypothèses à dérisquer. Grâce à Pierre, nous appliquons ces éléments à notre startup, ce qui a provoqué des changements profonds dès la première semaine.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Quentin Roquigny",
    role: "COO",
    company: "Kannelle",
    cohort: "4",
    text: {
      en: `Pierre is a valuable help in gaining perspective and (re)asking the right questions! I highly recommend the 34Elements experience to continue improving, strengthening your team cohesion and clarifying your startup's messages!`,
      fr: `Pierre est une aide précieuse pour prendre du recul et (re)poser les bonnes questions ! Je recommande vivement l'expérience 34Elements pour continuer à progresser, renforcer la cohésion de son équipe et clarifier les messages de sa startup !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Marc Guesneau",
    role: "CEO",
    company: "Alber",
    cohort: "4",
    text: {
      en: `Thanks to this unique and unorthodox method implemented by Pierre, we completely redesigned our model in just a few weeks. We could have reached the same conclusions in several months, but thanks to Pierre, it only took us 8 weeks! Many challenges and questioning are necessary to move in the right direction, even if it means leaving our comfort zone. 34 Elements is a must at any stage of progress, I recommend it to all entrepreneurs! Thanks again Pierre and congratulations on everything you do!`,
      fr: `Grâce à cette méthode unique et peu orthodoxe mise en place par Pierre, nous avons entièrement repensé notre modèle en quelques semaines seulement. Nous aurions pu arriver aux mêmes conclusions en plusieurs mois, mais grâce à Pierre il ne nous a fallu que 8 semaines ! Beaucoup de challenges et de remises en question sont nécessaires pour aller dans la bonne direction, quitte à sortir de sa zone de confort. 34 Elements est un incontournable à tous les stades d'avancement, je le recommande à tous les entrepreneurs ! Merci encore Pierre et bravo pour tout ce que tu fais !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Ryad Saadaoui",
    role: "CEO",
    company: "MIAP",
    cohort: "4",
    text: {
      en: `As life does things well, 34 elements have fallen into place in our development! After a first year of marketing, the program allowed us to take a step back from our activities, identify the weaknesses of our structure, clarify our vision and our strategy, optimize the management of our priorities, strengthen ties between the funding team, ... A thousand thanks Pierre! Go accelerate our growth.`,
      fr: `Comme la vie fait bien les choses, 34 elements est tombé au bon moment dans notre développement ! Après une première année de commercialisation, le programme nous a permis de prendre du recul sur nos activités, d'identifier les faiblesses de notre structure, de clarifier notre vision et notre stratégie, d'optimiser la gestion de nos priorités, de renforcer les liens au sein de l'équipe fondatrice... Mille mercis Pierre ! En route pour accélérer notre croissance.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Ghislain Trabichet",
    role: "CEO",
    company: "Odopass",
    cohort: "4",
    text: {
      en: `The ONLY training course created by an entrepreneur for entrepreneurs! No bullshit, 34 Elements gives you the keys to execute well, question yourself and progress while staying focused on what is really important when building your startup! This should be a must-have! And the icing on the cake, Pierre will give you valuable feedback thanks to his many experiences as an entrepreneur and VC. You will see, you will be a better founder after these 8 intensive weeks`,
      fr: `La SEULE formation créée par un entrepreneur pour des entrepreneurs ! Sans bullshit, 34 Elements vous donne les clés pour bien exécuter, vous remettre en question et progresser tout en restant concentré sur ce qui compte vraiment quand on construit sa startup ! Ça devrait être un incontournable ! Et cerise sur le gâteau, Pierre vous fera des retours précieux grâce à ses nombreuses expériences d'entrepreneur et de VC. Vous verrez, vous serez un meilleur fondateur après ces 8 semaines intensives`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Vanessa Bianconi",
    role: "CEO",
    company: "Miloé",
    cohort: "4",
    text: {
      en: `Pierre, through his unique method, helps us ask the right questions but above all to structure ourselves thanks to a methodology that places us at the heart of our reflections. Beyond providing us with the best expertise possible, Pierre helps us to bring out our qualities and to have confidence in our choices. The 34Éléments Académie is a unique program, imagined and delivered by entrepreneurs who have gone through all the stages they approach, which makes it a most legitimate and qualitative program that I recommend to any entrepreneur, at any stage of their project`,
      fr: `Pierre, par sa méthode unique, nous aide à nous poser les bonnes questions mais surtout à nous structurer grâce à une méthodologie qui nous place au cœur de nos réflexions. Au-delà de nous apporter la meilleure expertise possible, Pierre nous aide à révéler nos qualités et à avoir confiance en nos choix. La 34Éléments Académie est un programme unique, imaginé et animé par des entrepreneurs qui ont traversé toutes les étapes qu'ils abordent, ce qui en fait un programme des plus légitimes et qualitatifs, que je recommande à tout entrepreneur, à n'importe quel stade de son projet`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Grégory Besson",
    role: "CEO",
    company: "ABE",
    cohort: "4",
    text: {
      en: `In just a few weeks, we've been able to progress faster than we've ever made in the past 18 months. Pierre puts his finger on the sore spots and then makes us think so we can find ways to correct our trajectory on our own. He questions your strategy and vision and invites you, via the 34e éléments platform, to find the answer.`,
      fr: `En quelques semaines seulement, nous avons progressé plus vite que durant les 18 derniers mois. Pierre met le doigt là où ça fait mal, puis nous fait réfléchir pour que nous trouvions nous-mêmes comment corriger notre trajectoire. Il questionne votre stratégie et votre vision et vous invite, via la plateforme 34 éléments, à trouver la réponse.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Liselotte Cousin",
    role: "CEO",
    company: "Astuvet",
    cohort: "4",
    text: {
      en: `The 34 Elements Academy was a revolution in my life as an entrepreneur!! Pierre changed our vision of startups. Thanks to this academy, we changed our business model to reach a market 50 times larger than our initial market. Thank you, Pierre!`,
      fr: `La 34 Elements Academy a été une révolution dans ma vie d'entrepreneure !! Pierre a changé notre vision des startups. Grâce à cette académie, nous avons changé de business model pour adresser un marché 50 fois plus grand que notre marché initial. Merci Pierre !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Franck Botta",
    role: "CEO",
    company: "Wizama",
    cohort: "4",
    text: {
      en: `It's 8 weeks to deconstruct my preconceived ideas and fears, thanks to tailor-made coaching! I'm already feeling the effects through my mindset, revisiting my vision, giving it more light, and changing Wizama's strategy to ensure its success. Thank you for this gift. It's a real investment.`,
      fr: `Ce sont 8 semaines pour déconstruire mes idées préconçues et mes peurs, grâce à un coaching sur mesure ! J'en ressens déjà les effets dans mon mindset, en revisitant ma vision, en lui donnant plus de lumière et en changeant la stratégie de Wizama pour assurer sa réussite. Merci pour ce cadeau. C'est un véritable investissement.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Andréa Mocellin",
    role: "CEO",
    company: "Revolve Mobility",
    cohort: "5",
    text: {
      en: `As an entrepreneur of an early-stage startup, I found working with Pierre truly eye-opening in his exploration of all the alternatives and potential of the project. I highly recommend him to entrepreneurs who want to challenge their business vision with an international mindset.`,
      fr: `En tant qu'entrepreneur d'une startup en early-stage, travailler avec Pierre m'a vraiment ouvert les yeux par sa façon d'explorer toutes les alternatives et tout le potentiel du projet. Je le recommande vivement aux entrepreneurs qui veulent challenger leur vision business avec un état d'esprit international.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jonathan Amsellem",
    role: "CSO",
    company: "Onecode.ca",
    cohort: "5",
    text: {
      en: `Pierre has a strategic mind and loves entrepreneurs. 34 Elements' support is tremendous and keeps us on the right track. I can't be grateful enough. I met some exceptional entrepreneurs during the session and learned a lot from their experiences. Every entrepreneur should take the 34 Elements program.`,
      fr: `Pierre a un esprit stratégique et aime les entrepreneurs. L'accompagnement de 34 Elements est formidable et nous garde sur la bonne voie. Je ne saurais dire assez ma gratitude. J'ai rencontré des entrepreneurs exceptionnels pendant la session et j'ai beaucoup appris de leurs expériences. Chaque entrepreneur devrait suivre le programme 34 Elements.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Thomas Pandraud",
    role: "CEO",
    company: "Air Tech",
    cohort: "5",
    text: {
      en: `Pierre's approach, very American in its mentality, allows us to approach our entrepreneurial project differently, to ask ourselves deep questions and to carry out a real introspection on our startup. In particular, the work done on our purpose was the real starting point for all the themes covered in the academy and allowed us to then realign the strategy, the team, the value proposition, the gotomarket, etc. I appreciated the 1/1 with Pierre, who with his experience and his method, makes us ask ourselves the right questions and go further in our reflection. I recommend 34 Elements Academy, thank you Pierre`,
      fr: `L'approche de Pierre, très américaine dans sa mentalité, permet d'aborder son projet entrepreneurial différemment, de se poser des questions profondes et de mener une véritable introspection sur sa startup. En particulier, le travail réalisé sur notre purpose a été le vrai point de départ de tous les thèmes abordés dans l'académie et nous a permis de réaligner ensuite la stratégie, l'équipe, la proposition de valeur, le go-to-market, etc. J'ai apprécié les 1/1 avec Pierre qui, avec son expérience et sa méthode, nous pousse à nous poser les bonnes questions et à aller plus loin dans notre réflexion. Je recommande 34 Elements Academy, merci Pierre`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Cassiano Gobet",
    role: "CEO",
    company: "Troovr",
    cohort: "5",
    text: {
      en: `It's a transformative experience. Pierre asks questions most founders don't think about. Every problem you discover in your projects has its origins elsewhere. It's an uncomfortable but essential process. Virtually nothing in your current plans will end the process in the same place.`,
      fr: `C'est une expérience transformatrice. Pierre pose des questions auxquelles la plupart des fondateurs ne pensent pas. Chaque problème que vous découvrez dans vos projets a son origine ailleurs. C'est un processus inconfortable mais essentiel. Presque rien de vos plans actuels ne finira au même endroit.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Aurelien Coget",
    role: "CEO",
    company: "R2Devops",
    cohort: "6",
    text: {
      en: `How lucky to have been introduced to Pierre. One of the best choices I made for my project. Pierre makes us feel how essential strategy is to our project. He doesn't give you the solution; he makes you touch and feel it! The pace is intense and captivating. You thought you had a good idea, the 34 Elements program will allow you to convince others.`,
      fr: `Quelle chance d'avoir été mis en relation avec Pierre. L'un des meilleurs choix que j'ai faits pour mon projet. Pierre nous fait ressentir à quel point la stratégie est essentielle à notre projet. Il ne vous donne pas la solution ; il vous la fait toucher et ressentir ! Le rythme est intense et captivant. Vous pensiez avoir une bonne idée : le programme 34 Elements vous permettra d'en convaincre les autres.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Raphaël Salimi",
    role: "CEO",
    company: "Insidy",
    cohort: "6",
    text: {
      en: `Despite a first round of discussions with prestigious BAs, I had a biased view of my problems and my company in general. Pierre brings you out of the cave and shows you where to look. It's transformative, challenging, and humanly enriching! No matter your internship and what you think you know, go for it!`,
      fr: `Malgré un premier tour d'échanges avec des business angels prestigieux, j'avais une vision biaisée de mes problèmes et de mon entreprise en général. Pierre vous fait sortir de la caverne et vous montre où regarder. C'est transformateur, challengeant et humainement enrichissant ! Peu importe votre stade et ce que vous croyez savoir, foncez !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Alexandre Touzet",
    role: "CEO",
    company: "Better Ask Alex",
    cohort: "6",
    text: {
      en: `More than a training course or an accelerator, 34elements is a simple yet effective framework. Despite 10 years of entrepreneurship, I am grateful to Pierre for allowing me to benefit from it. Thanks to him, I see things more clearly, everything is simpler, and I can move forward again.`,
      fr: `Plus qu'une formation ou un accélérateur, 34elements est un cadre simple et pourtant efficace. Malgré 10 ans d'entrepreneuriat, je suis reconnaissant à Pierre de m'en avoir fait bénéficier. Grâce à lui, je vois les choses plus clairement, tout est plus simple, et je peux avancer de nouveau.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Pierre Noguès",
    role: "CEO",
    company: "Wolfschool",
    cohort: "6",
    text: {
      en: `You can join 34 elements with your eyes closed! In my opinion, you're even taking a lot more risks if you don't take this training!! ;) Unconscious incompetence is the worst thing for a startup and a founding team. With Pierre Gaubil and 34 elements, you'll discover a structure, challenges, and keys to improving your business positioning: saving time & avoiding pitfalls, here we come! For our part, the change of direction is undeniable and we highly recommend it!`,
      fr: `Vous pouvez rejoindre 34 elements les yeux fermés ! À mon avis, vous prenez même beaucoup plus de risques à ne pas suivre cette formation !! ;) L'incompétence inconsciente est la pire chose pour une startup et une équipe fondatrice. Avec Pierre Gaubil et 34 elements, vous découvrirez une structure, des challenges et des clés pour améliorer le positionnement de votre business : gain de temps et pièges évités, nous voilà ! De notre côté, le changement de direction est indéniable et nous le recommandons vivement !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jean-David Rombi",
    role: "CEO",
    company: "Akius",
    cohort: "6",
    text: {
      en: `Think you know everything there is to know about innovation, iteration, or entrepreneurship in general? Then wait until you join 34Elements, expertly led by El Professor. The program is designed to make it impossible for you not to improve your offering. For eight intense weeks, ask yourself the right questions and answer them straightforwardly. Thank you, Pierre, and long live 34Elements!`,
      fr: `Vous pensez tout savoir sur l'innovation, l'itération ou l'entrepreneuriat en général ? Alors attendez de rejoindre 34Elements, magistralement animé par El Professor. Le programme est conçu pour qu'il vous soit impossible de ne pas améliorer votre offre. Pendant huit semaines intenses, posez-vous les bonnes questions et répondez-y sans détour. Merci Pierre, et longue vie à 34Elements !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Guillaume Lainé",
    role: "CEO",
    company: "Coach Rameur",
    cohort: "6",
    text: {
      en: `Through the 34 Elements training, Pierre helped me structure my thinking and become strategic. I loved the intensity of the program and its structure. It was the service I needed to successfully complete my project. Many thanks, Pierre.`,
      fr: `À travers la formation 34 Elements, Pierre m'a aidé à structurer ma réflexion et à devenir stratégique. J'ai adoré l'intensité du programme et sa structure. C'était exactement l'accompagnement dont j'avais besoin pour mener mon projet à bien. Un grand merci Pierre.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Florence Rusconi",
    role: "CEO",
    company: "Shopliv",
    cohort: "6",
    text: {
      en: `If you're looking to seriously rethink your startup or if you're stuck, you've come to the right place! Solo founders or not, 34 elements adapt to everyone. Prepare to sweat, but not to cry, because Pierre is always kind, because he's always right. Like a surgeon, he will operate with you on your startup to help you take it to the next level. An experience not to be missed and an excellent investment!`,
      fr: `Si vous cherchez à repenser sérieusement votre startup ou si vous êtes bloqué, vous êtes au bon endroit ! Solo founders ou non, 34 elements s'adapte à chacun. Préparez-vous à suer, mais pas à pleurer, car Pierre est toujours bienveillant, et parce qu'il a toujours raison. Comme un chirurgien, il opérera votre startup avec vous pour la faire passer au niveau supérieur. Une expérience à ne pas manquer et un excellent investissement !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Omar Hassan",
    role: "CEO",
    company: "Fysali",
    cohort: "6",
    text: {
      en: `Pierre is the Guardiola of entrepreneurship. His foresight and strategic thinking allowed me to better understand the world of startups and investors, allowing me to save considerable time and refine our business strategy. Unlike many programs or so-called "experts/mentors," Pierre has already experienced the highest level, and that is priceless.`,
      fr: `Pierre est le Guardiola de l'entrepreneuriat. Sa vision et sa réflexion stratégique m'ont permis de mieux comprendre le monde des startups et des investisseurs, de gagner un temps considérable et d'affiner notre stratégie business. Contrairement à beaucoup de programmes ou de soi-disant « experts/mentors », Pierre a déjà vécu le plus haut niveau, et cela n'a pas de prix.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Caroline Mignaux",
    role: "CEO",
    company: "ReachMaker",
    cohort: "7",
    text: {
      en: `34 elements helped us gain clarity on both our positioning and our product. In practice, Pierre knows how to find the right words to create the necessary clicks. It was also a wonderful collective experience! We will definitely be back.`,
      fr: `34 elements nous a aidés à gagner en clarté, autant sur notre positionnement que sur notre produit. Dans la pratique, Pierre sait trouver les mots justes pour provoquer les déclics nécessaires. C'était aussi une magnifique expérience collective ! Nous reviendrons, c'est certain.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Sonia Bendif",
    role: "CEO",
    company: "Use my Feed",
    cohort: "7",
    text: {
      en: `The 34 elements academy or one of the most beautiful opportunities of my career. Clearly before 34 elements I was not aware that my project without this knowledge, had no chance of reaching the level that I wanted. Regardless of the professional background, the training, certain information is transmitted from person to person and the strength of 34 elements is also that! Pierre is extraordinarily calm, direct, blunt but caring, always! He will not whisper the answers to you but he will give you all the keys to go and find them!! A journey that will not be forgotten! And a journey that continues with 35 elements... if I had to say a single word to Jean David.R who opened this door for me and to Pierre it would be THANK YOU!`,
      fr: `La 34 elements academy, ou l'une des plus belles opportunités de ma carrière. Clairement, avant 34 elements, je n'avais pas conscience que mon projet, sans ces connaissances, n'avait aucune chance d'atteindre le niveau que je voulais. Peu importe le parcours professionnel, la formation : certaines informations se transmettent de personne à personne, et la force de 34 elements est aussi là ! Pierre est extraordinairement calme, direct, cash mais bienveillant, toujours ! Il ne vous soufflera pas les réponses, mais il vous donnera toutes les clés pour aller les chercher !! Un parcours qu'on n'oublie pas ! Et un parcours qui continue avec 35 elements... si je devais dire un seul mot à Jean-David R., qui m'a ouvert cette porte, et à Pierre, ce serait MERCI !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Laurent Guiraud",
    role: "Co-founder",
    company: "ColibrITD",
    cohort: "7",
    text: {
      en: `When you create a startup, you embark on an adventure for which many tell you what not to do, the wrong directions, and that it will never work, especially in deeptech. Sometimes we forget the why and the vision. 34 Elements allowed us to rediscover and anchor the meaning of our adventure by presenting us in a clear and caring way the foundations of our entrepreneurial adventure.`,
      fr: `Quand on crée une startup, on se lance dans une aventure où beaucoup vous disent ce qu'il ne faut pas faire, les mauvaises directions, et que ça ne marchera jamais, surtout en deeptech. On en oublie parfois le pourquoi et la vision. 34 Elements nous a permis de retrouver et d'ancrer le sens de notre aventure en nous présentant de façon claire et bienveillante les fondations de notre aventure entrepreneuriale.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jean-Luc Besset",
    role: "CEO",
    company: "Ever.li",
    cohort: "7",
    text: {
      en: `34 Elements Academy is a great experience that I highly recommend to any tech entrepreneur who thinks big. You come out transformed (the product, the model, the vision, etc.), deconstructed and then rebuilt, while having asked yourself the right questions. An abrasive but essential filter before the big dive, a condensed version of high-intensity Silicon Valley, guaranteed without bullshit, with plenty of emulation and good humor inside. Thanks Pierre`,
      fr: `34 Elements Academy est une super expérience que je recommande vivement à tout entrepreneur tech qui voit grand. On en sort transformé (le produit, le modèle, la vision, etc.), déconstruit puis reconstruit, après s'être posé les bonnes questions. Un filtre abrasif mais indispensable avant le grand plongeon, un condensé de Silicon Valley haute intensité, garanti sans bullshit, avec beaucoup d'émulation et de bonne humeur inside. Merci Pierre`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Victor Saison",
    role: "CEO",
    company: "Reov",
    cohort: "7",
    text: {
      en: `We had the good idea (and the luck) to participate in Pierre's academy when we launched our start-up. He quickly helped us identify our most urgent problems and then co-construct actionable solutions immediately. He doesn't do things for us, better: he helps us think. 0 bullshit, only concrete things, a broad perspective, operational... in short: strategy! It's very valuable. Thank you Pierre`,
      fr: `Nous avons eu la bonne idée (et la chance) de participer à l'académie de Pierre au lancement de notre start-up. Il nous a rapidement aidés à identifier nos problèmes les plus urgents, puis à co-construire des solutions actionnables immédiatement. Il ne fait pas les choses à notre place, mieux : il nous aide à réfléchir. 0 bullshit, que du concret, une vision large, opérationnelle... bref : de la stratégie ! C'est très précieux. Merci Pierre`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anis Moualdi",
    role: "CEO",
    company: "Skaly",
    cohort: "7",
    text: {
      en: `Stop scrolling through testimonials and pay for your academy right away! An entrepreneur takes risks when it comes to making their project a reality. Here's an investment that will do your project the greatest good without taking any risks. At least the slight doubt about the relevance of this academy will instantly fade after speaking with Pierre for just a few minutes. I don't understand the price of this training; it should be much more expensive. I don't understand how entrepreneurs can launch projects without asking themselves all these questions that Pierre addresses with great intelligence, both in terms of content and form. Not everyone is lucky enough to have a trusted advisor by their side, a VC on their board, a senior in their team, a strategy expert to help them make the right decisions. Pierre is all these people at the same time, and for 8 weeks, you will live in the shoes of a real business leader who makes decisions not blindly but with great lucidity and perspective. Never do this training if you are not ready to question your project, yourself, your ambition, your expertise and especially your offer. Pierre's support lasts 8 weeks but in reality it changes the life of an entrepreneur. Beyond that, Pierre pays a lot of attention to following his protégés well after the academy by giving of his time. Don't worry, you will continue to benefit from Pierre's enormous kindness while giving you a slap in the face of reality. I asked Pierre why he launched this academy when he didn't "need" it. He replied "to give a chance to undertake to those whom life has forgotten." If you have read this far, it is because you did not listen to my advice from the beginning, so listen to it now: go sign up for this gem that Pierre is offering you before he changes his mind!`,
      fr: `Arrêtez de scroller les témoignages et payez votre académie tout de suite ! Un entrepreneur prend des risques quand il s'agit de concrétiser son projet. Voici un investissement qui fera le plus grand bien à votre projet sans prendre aucun risque. Au minimum, le léger doute sur la pertinence de cette académie s'envolera instantanément après quelques minutes de discussion avec Pierre. Je ne comprends pas le prix de cette formation ; elle devrait être bien plus chère. Je ne comprends pas comment des entrepreneurs peuvent lancer des projets sans se poser toutes ces questions que Pierre traite avec une grande intelligence, sur le fond comme sur la forme. Tout le monde n'a pas la chance d'avoir un conseiller de confiance à ses côtés, un VC à son board, un senior dans son équipe, un expert en stratégie pour aider à prendre les bonnes décisions. Pierre est toutes ces personnes à la fois, et pendant 8 semaines, vous vivrez dans la peau d'un véritable dirigeant qui décide non pas à l'aveugle mais avec beaucoup de lucidité et de recul. Ne faites surtout pas cette formation si vous n'êtes pas prêt à remettre en question votre projet, vous-même, votre ambition, votre expertise et surtout votre offre. L'accompagnement de Pierre dure 8 semaines mais il change en réalité la vie d'un entrepreneur. Au-delà, Pierre prend grand soin de suivre ses protégés bien après l'académie en donnant de son temps. Rassurez-vous, vous continuerez à bénéficier de son immense bienveillance, tout en recevant une bonne claque de réalité. J'ai demandé à Pierre pourquoi il avait lancé cette académie alors qu'il n'en avait pas « besoin ». Il m'a répondu « pour donner une chance d'entreprendre à ceux que la vie a oubliés ». Si vous avez lu jusqu'ici, c'est que vous n'avez pas écouté mon conseil du début, alors écoutez-le maintenant : allez vous inscrire à cette perle que Pierre vous offre avant qu'il ne change d'avis !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anthony Graveline",
    role: "CEO",
    company: "DISAITEK",
    cohort: "8",
    text: {
      en: `Participating in the program offered by Pierre through 34 elements was not only instructive but also very enjoyable. Pierre generously distills his rich and varied experience. Based on his analysis of his successes but also the mistakes he may have made during his many entrepreneurial experiences, he has drawn up a rich program that leads you to take a step back from your own intuitions and develop new approaches to streamline your development. Almost all of the topics covered have since been implemented for the good of society. Beyond the program and its richness, it is a chance to have Pierre to lead it. He is incredibly human, attentive, and a source of sound advice. It is also appreciable to see that the relationship is long-lasting, well beyond the initial program, and in a completely selfless manner with all the alumni who have passed through his academy. A big congratulations to him and his initiative in favor of entrepreneurs.`,
      fr: `Participer au programme proposé par Pierre à travers 34 elements a été non seulement instructif mais aussi très agréable. Pierre distille généreusement son expérience riche et variée. À partir de l'analyse de ses réussites mais aussi des erreurs qu'il a pu commettre au fil de ses nombreuses expériences entrepreneuriales, il a bâti un programme riche qui amène à prendre du recul sur ses propres intuitions et à développer de nouvelles approches pour fluidifier son développement. La quasi-totalité des sujets abordés ont depuis été mis en œuvre pour le bien de l'entreprise. Au-delà du programme et de sa richesse, c'est une chance d'avoir Pierre pour l'animer. Il est incroyablement humain, attentif et source de conseils avisés. Il est aussi appréciable de voir que la relation dure, bien au-delà du programme initial, et de façon totalement désintéressée avec tous les alumni passés par son académie. Un grand bravo à lui et à son initiative en faveur des entrepreneurs.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Elisabeth Zambelis",
    role: "CEO",
    company: "Aima Health",
    cohort: "8",
    text: {
      en: `When I met Pierre, I had just spent a year on the project. A year of 'good advice', negative and sometimes frankly inappropriate comments from people who have never been 'beaten in the arena' of entrepreneurship. Without saying that I had lost faith, I can say that I was tired. I no longer knew how to move the project forward. For several weeks, the Academy allowed me to rework the project in depth, to question everything and to structure elements that needed to be. It also gave me access to a part of the ecosystem that we rarely have the opportunity to meet: those who have succeeded. Being able to work with one of them is an opportunity not to be missed. Upon finishing the Academy, I realize the intelligence with which it was built, the work it allowed me to do on my position as an entrepreneur and what it allowed me to glimpse into the future of the project. Pierre, thank you for the Academy, the time, energy and knowledge that you put at the service of entrepreneurs.`,
      fr: `Quand j'ai rencontré Pierre, je venais de passer un an sur le projet. Un an de « bons conseils », de remarques négatives et parfois franchement déplacées de la part de personnes qui ne se sont jamais « battues dans l'arène » de l'entrepreneuriat. Sans dire que j'avais perdu la foi, je peux dire que j'étais fatiguée. Je ne savais plus comment faire avancer le projet. Pendant plusieurs semaines, l'Académie m'a permis de retravailler le projet en profondeur, de tout remettre en question et de structurer les éléments qui devaient l'être. Elle m'a aussi donné accès à une partie de l'écosystème que l'on a rarement l'occasion de croiser : ceux qui ont réussi. Pouvoir travailler avec l'un d'eux est une opportunité à ne pas manquer. En terminant l'Académie, je mesure l'intelligence avec laquelle elle a été construite, le travail qu'elle m'a permis de faire sur ma posture d'entrepreneure et ce qu'elle m'a permis d'entrevoir de l'avenir du projet. Pierre, merci pour l'Académie, le temps, l'énergie et le savoir que tu mets au service des entrepreneurs.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Johan Bocquet",
    role: "CEO",
    company: "Kotatio",
    cohort: "8",
    text: {
      en: `I hadn't expected to experience and witness such high-quality exchanges and content so soon! The method is very effective. Pierre was a great help in structuring my startup. My best investment of the year!`,
      fr: `Je ne m'attendais pas à vivre et à observer si tôt des échanges et des contenus d'une telle qualité ! La méthode est très efficace. Pierre m'a beaucoup aidé à structurer ma startup. Mon meilleur investissement de l'année !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Nicolas Boivin",
    role: "CEO",
    company: "Neemo",
    cohort: "8",
    text: {
      en: `34 Elements, the support you absolutely must follow! Thanks to Pierre, we have undergone a profound transformation in the way we approach Neemo. The proposed methodology allows us to review each essential point in a pragmatic manner. His valuable advice and constructive criticism allowed us to thoroughly analyze our product, its market, its strengths and weaknesses, and to rethink our strategy. For example, the 34 Elements experience gave us a new perspective on how we design our product by reflecting on our core value. We are now more confident and aligned with our vision, ready to take on challenges and transform our product-market fit into a success. A big thank you to Pierre for his unwavering support!`,
      fr: `34 Elements, l'accompagnement qu'il faut absolument suivre ! Grâce à Pierre, nous avons connu une transformation profonde dans notre façon d'aborder Neemo. La méthodologie proposée permet de revoir chaque point essentiel de manière pragmatique. Ses conseils précieux et ses critiques constructives nous ont permis d'analyser en profondeur notre produit, son marché, ses forces et ses faiblesses, et de repenser notre stratégie. Par exemple, l'expérience 34 Elements nous a donné un nouveau regard sur la façon dont nous concevons notre produit, en réfléchissant à notre valeur centrale. Nous sommes désormais plus confiants et alignés avec notre vision, prêts à relever les défis et à transformer notre product-market fit en succès. Un grand merci à Pierre pour son soutien sans faille !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Alan Ghenassia",
    role: "CEO",
    company: "Vogz",
    cohort: "9",
    text: {
      en: `Taking this course was the most profitable investment I've made since launching my startup. A very well-oiled methodology that allowed me to complete the course alongside my project. Pierre is a genius; he transformed my vision of entrepreneurship. By choosing to invest in 34 Elements, you are choosing to invest in yourself.`,
      fr: `Suivre ce parcours a été l'investissement le plus rentable que j'ai fait depuis le lancement de ma startup. Une méthodologie très bien huilée qui m'a permis de suivre le programme en parallèle de mon projet. Pierre est un génie ; il a transformé ma vision de l'entrepreneuriat. En choisissant d'investir dans 34 Elements, vous choisissez d'investir en vous-même.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Matthieu Nasri",
    role: "CEO",
    company: "Unfair",
    cohort: "9",
    text: {
      en: `I met many so-called "experts" in entrepreneurship. They all gave me advice, and Pierre gave me a method. I now have the means to answer all my questions and be confident in where I'm going. Not only am I moving forward faster, but I'm moving forward with much more peace of mind!`,
      fr: `J'ai rencontré beaucoup de soi-disant « experts » de l'entrepreneuriat. Ils m'ont tous donné des conseils, et Pierre m'a donné une méthode. J'ai maintenant les moyens de répondre à toutes mes questions et d'être confiant sur la direction que je prends. Non seulement j'avance plus vite, mais j'avance beaucoup plus sereinement !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Marcelo Dias de Amorin",
    role: "CTO",
    company: "Hopcast",
    cohort: "10",
    text: {
      en: `For those who like to fumble and dive into all sorts of new ideas, move on; there are plenty of other very expensive training courses for that. But if you want a clear methodology, examples, to be constantly challenged, and not waste time, don't hesitate. For a long time, I was constantly on the lookout for "experts" who told me to do this or that without really explaining why... After the 34 Elements training, I realize I've wasted a lot of time with useless advice. If you still have any doubts, listen to the interviews, podcasts, and other online resources with Pierre and his "competitors." I think any doubts will dissipate in 2 minutes :-)`,
      fr: `Pour ceux qui aiment tâtonner et se jeter sur toutes sortes de nouvelles idées, passez votre chemin ; il existe plein d'autres formations très chères pour ça. Mais si vous voulez une méthodologie claire, des exemples, être challengé en permanence et ne pas perdre de temps, n'hésitez pas. Pendant longtemps, j'étais sans cesse à l'affût d'« experts » qui me disaient de faire ceci ou cela sans vraiment expliquer pourquoi... Après la formation 34 Elements, je me rends compte que j'ai perdu beaucoup de temps avec des conseils inutiles. S'il vous reste des doutes, écoutez les interviews, podcasts et autres ressources en ligne avec Pierre et ses « concurrents ». Je pense que le doute se dissipera en 2 minutes :-)`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Kevin Smouts",
    role: "Co-founder",
    company: "Zygon",
    cohort: "10",
    text: {
      en: `34Elements helps you avoid the pitfalls of opportunistic development. Pierre's method forces you to conduct a thorough strategic analysis of your business, positioning you in the segment where you need to be with the right message, in order to iterate more successfully.`,
      fr: `34Elements aide à éviter les pièges du développement opportuniste. La méthode de Pierre oblige à mener une analyse stratégique approfondie de son business, à se positionner sur le segment où l'on doit être avec le bon message, afin d'itérer avec plus de succès.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Florent Vaudelin",
    role: "CEO",
    company: "Trackstone",
    cohort: "10",
    text: {
      en: `I am the co-founder of Trackstone, which is my third startup, and I can confirm that Pierre's Academy is very effective and provides a lot for an entrepreneur. Especially if this is your first entrepreneurial adventure. Pierre is incisive and impactful, and he will not leave you indifferent and will forever change your perspective on entrepreneurship. As far as I'm concerned, I can only recommend him.`,
      fr: `Je suis cofondateur de Trackstone, qui est ma troisième startup, et je peux confirmer que l'Académie de Pierre est très efficace et apporte beaucoup à un entrepreneur. Surtout s'il s'agit de votre première aventure entrepreneuriale. Pierre est incisif et percutant, il ne vous laissera pas indifférent et changera à jamais votre regard sur l'entrepreneuriat. En ce qui me concerne, je ne peux que le recommander.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anne Sophie Brossard",
    role: "CEO",
    company: "Social Bright Revolution",
    cohort: "10",
    text: {
      en: `I was a project manager in IT, I had followed different coaching sessions, to dare to get started... and once that was done, well... I didn't really know how to organize myself, what to think, in what order to start... Even if I had clients, I was a little lost on how to continue. My project management side shows that I like structure and organization - I admit :-) I discovered Pierre's training via a podcast, and I was amazed by what he brought - he answered all the questions I could have! I signed up for the freemium to see, and there, what a surprise! It's clear, precise, we live it, we project ourselves. I was scared to death of not understanding anything, but the momentum of the group, the kindness and the professionalism of Pierre pulled me up. Clearly, I am not the same today, my project has taken shape, made sense and I am very happy about it. It's often said that we are the result of the 5 people we spend the most time with. Here, I won the jackpot!`,
      fr: `J'étais cheffe de projet en informatique, j'avais suivi différents coachings pour oser me lancer... et une fois cela fait, eh bien... je ne savais pas vraiment comment m'organiser, quoi penser, dans quel ordre commencer... Même avec des clients, j'étais un peu perdue sur la façon de continuer. Mon côté gestion de projet montre que j'aime la structure et l'organisation - je l'avoue :-) J'ai découvert la formation de Pierre via un podcast, et j'ai été émerveillée par ce qu'il apportait : il répondait à toutes les questions que je pouvais avoir ! Je me suis inscrite au freemium pour voir, et là, quelle surprise ! C'est clair, précis, on le vit, on se projette. J'avais une peur bleue de ne rien comprendre, mais l'élan du groupe, la bienveillance et le professionnalisme de Pierre m'ont tirée vers le haut. Clairement, je ne suis plus la même aujourd'hui, mon projet a pris forme, a pris sens et j'en suis très heureuse. On dit souvent que nous sommes le résultat des 5 personnes avec qui nous passons le plus de temps. Ici, j'ai gagné le jackpot !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Caroline Bisval",
    role: "CEO",
    company: "Décidées",
    cohort: "10",
    text: {
      en: `I don't know where you are in your entrepreneurial adventure...in this case, I'm rather early stage. I'll share my journey with you up to 34 elements. After 14 years of employment, I decided to take the plunge and I started by joining Station F. I met peers there and was able to attend tons of workshops (always want to learn!), including those at HEC with great speakers. The problem is that after 6 months, I realized that I was working my network, I was accumulating a ton of knowledge but in bulk without prioritization and I wasn't moving forward on my project. The reality is that people were looking more for incubation to have "cheap" offices in Paris than for the teaching itself...but I was looking for a mentor to move faster and progress, so I left. A few months later, during a lunch with a coach, I shared my desire to develop a more strategic vision of my company. He recommended Pierre to me, but I admit I'm a little fed up with video conferences and training of all kinds... I contacted two former alumni who confirmed the power of the program. I'm using the freemium program and I actually understand the relevance, scope, and importance of laying the right foundations for your business. It's not easy when you're starting out (without a big budget) to allocate time and money to progress, but it's the best decision I've made! The method works for all businesses. Each element is well explained by Pierre, and the 15 minutes with him in a 1-to-1 session are worth 1 hour of executive coaching. He understands your issues and advises you wisely. The 6-week duration is perfect, and plan time to work between each session. I recommend it with my eyes closed; I'd even say you should start there to save time later.`,
      fr: `Je ne sais pas où vous en êtes dans votre aventure entrepreneuriale... en l'occurrence, je suis plutôt early stage. Je vous partage mon parcours jusqu'à 34 elements. Après 14 ans de salariat, j'ai décidé de me lancer et j'ai commencé par rejoindre Station F. J'y ai rencontré des pairs et j'ai pu assister à des tonnes d'ateliers (toujours envie d'apprendre !), y compris ceux d'HEC avec de très bons intervenants. Le problème, c'est qu'au bout de 6 mois, j'ai réalisé que je travaillais mon réseau, que j'accumulais énormément de connaissances mais en vrac, sans priorisation, et que je n'avançais pas sur mon projet. La réalité, c'est que les gens cherchaient davantage l'incubation pour avoir des bureaux « pas chers » à Paris que l'enseignement lui-même... alors que je cherchais un mentor pour aller plus vite et progresser, donc je suis partie. Quelques mois plus tard, lors d'un déjeuner avec un coach, je lui ai partagé mon envie de développer une vision plus stratégique de mon entreprise. Il m'a recommandé Pierre, mais j'avoue que j'étais un peu lassée des visioconférences et des formations en tout genre... J'ai contacté deux anciens alumni qui m'ont confirmé la puissance du programme. J'utilise le programme freemium et je comprends concrètement la pertinence, la portée et l'importance de poser les bonnes fondations de son entreprise. Ce n'est pas simple quand on démarre (sans gros budget) d'allouer du temps et de l'argent pour progresser, mais c'est la meilleure décision que j'ai prise ! La méthode fonctionne pour toutes les entreprises. Chaque élément est bien expliqué par Pierre, et les 15 minutes avec lui en 1-to-1 valent 1 heure de coaching de dirigeant. Il comprend vos enjeux et vous conseille avec justesse. La durée de 6 semaines est parfaite, et prévoyez du temps pour travailler entre chaque session. Je le recommande les yeux fermés ; je dirais même qu'il faut commencer par là pour gagner du temps ensuite.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Tim Guillois",
    role: "CEO",
    company: "Mindhunters",
    cohort: "10",
    text: {
      en: `The best investment I've ever made as an entrepreneur to help me make the right decisions and save time, rather than waste it. I'm lucky enough to meet some very brilliant people in my field. I've also met many coaches and mentors of all kinds. In my 20-year career, Pierre is probably the person who has helped me the most and influenced me in my entrepreneurial adventure. With incredible clarity, no waffle, and even be prepared to be truly shaken up in a positive way. That's the deal with Pierre! Go for it now, don't wait!`,
      fr: `Le meilleur investissement que j'ai fait en tant qu'entrepreneur pour m'aider à prendre les bonnes décisions et gagner du temps, plutôt que d'en perdre. J'ai la chance de croiser des personnes très brillantes dans mon domaine. J'ai aussi rencontré beaucoup de coachs et de mentors en tout genre. Dans ma carrière de 20 ans, Pierre est probablement la personne qui m'a le plus aidé et le plus influencé dans mon aventure entrepreneuriale. Avec une clarté incroyable, sans blabla, et attendez-vous même à être vraiment secoué, de façon positive. C'est le deal avec Pierre ! Foncez maintenant, n'attendez pas !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Diane Lenne",
    role: "CEO",
    company: "WAP",
    cohort: "11",
    text: {
      en: `Pierre has a way of thinking that makes leadership crystal clear. We've changed and built a much stronger value proposition as a result of the program, and the direction is much clearer. The alternating phases of one-on-one and group sessions force us to work on all strategic elements.`,
      fr: `Pierre a une façon de penser qui rend le leadership limpide. À l'issue du programme, nous avons changé et construit une proposition de valeur bien plus forte, et la direction est beaucoup plus claire. L'alternance entre sessions individuelles et sessions de groupe nous oblige à travailler tous les éléments stratégiques.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Simon Kuster",
    role: "CEO",
    company: "Teed Up",
    cohort: "11",
    text: {
      en: `34 Elements is undoubtedly the best investment TeedUp has ever made. We restructured, found the "Core Action" for our app, and made a micro-pivot in the business model. In short, these are essential adjustments that now allow us to know exactly what to do to get TeedUp off the ground.`,
      fr: `34 Elements est sans aucun doute le meilleur investissement que TeedUp ait jamais fait. Nous nous sommes restructurés, nous avons trouvé la « Core Action » de notre application et opéré un micro-pivot du business model. Bref, des ajustements essentiels qui nous permettent aujourd'hui de savoir exactement quoi faire pour faire décoller TeedUp.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Céline Mas",
    role: "CEO",
    company: "Love for Livres",
    cohort: "11",
    text: {
      en: `34 Elements is an entrepreneurship school you won't find anywhere else. Its effectiveness can be summed up in three words: method, content, and Pierre, an entrepreneur who knows what he's talking about. His voice is unique, his contributions strategic and pragmatic, and his professionalism helps you ask the right questions and move forward with the right aim, no matter what. I recommend him without reservation.`,
      fr: `34 Elements est une école d'entrepreneuriat que vous ne trouverez nulle part ailleurs. Son efficacité se résume en trois mots : méthode, contenu, et Pierre, un entrepreneur qui sait de quoi il parle. Sa parole est singulière, ses apports stratégiques et pragmatiques, et son professionnalisme vous aide à vous poser les bonnes questions et à avancer avec la bonne visée, quoi qu'il arrive. Je le recommande sans réserve.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Niels Rolland",
    role: "CEO",
    company: "Paatch",
    cohort: "12",
    text: {
      en: `We started with 34 elements after having a breakthrough with Cédric during the academy's free "Purpose" phase. There were then 3 other major breakthroughs (the founders, the core action, and the business model) that unblocked the situation Paatch was in to move on to the next stage. All founders should get stuck in! Thanks, Pierre.`,
      fr: `Nous avons démarré avec 34 elements après un déclic avec Cédric pendant la phase « Purpose » gratuite de l'académie. Il y a eu ensuite 3 autres déclics majeurs (les fondateurs, la core action et le business model) qui ont débloqué la situation dans laquelle Paatch se trouvait pour passer à l'étape suivante. Tous les fondateurs devraient s'y plonger ! Merci Pierre.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Léa Gatinois",
    role: "CEO",
    company: "Amble Wine",
    cohort: "12",
    text: {
      en: `Pierre's methodology is incredibly effective; it has allowed me to structure my startup in a remarkable way, and I have already seen a positive impact on my sales. His advice has been extremely valuable, prompting me to ask myself essential questions about my business and its environment. The digital platform and presentation materials are also very well designed. Overall, I highly recommend the experience to all entrepreneurs; this academy is a real opportunity to develop your startup. Thank you, Pierre!`,
      fr: `La méthodologie de Pierre est incroyablement efficace ; elle m'a permis de structurer ma startup de façon remarquable, et j'ai déjà constaté un impact positif sur mes ventes. Ses conseils ont été extrêmement précieux et m'ont amenée à me poser des questions essentielles sur mon entreprise et son environnement. La plateforme digitale et les supports de présentation sont également très bien conçus. Globalement, je recommande vivement l'expérience à tous les entrepreneurs ; cette académie est une véritable opportunité pour développer sa startup. Merci Pierre !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Fabrice De Oliveira",
    role: "Research and biomedical Engineer",
    company: "",
    cohort: "12",
    text: {
      en: `Recently, I had the privilege of participating in an intensive program with 34 Elements and Pierre Gaubil. This transformative experience rigorously challenged and reshaped my mindset. The lessons I learned are invaluable for anyone embarking on the journey of building a business. From refining my company vision to developing a compelling value proposition, designing an effective go-to-market strategy, and mastering the art of analytics and measurement, every aspect of my thinking was recalibrated. Throughout this journey, I learned to think differently, to approach each stage of development with fresh perspectives. Today, I can confidently say that I am fully aligned with what I seek to achieve in my startup, in all its dimensions. Many thanks to Pierre Gaubil for his mentorship, his wisdom, and especially for aligning my project with his beliefs and experiences. I truly believe that my time at 34 Elements has added significant value to my startup journey, transforming my project into something far beyond what it was. Throughout my journey, I will be sure to stay in touch with Pierre, who has been a true mentor throughout this process. I thank him and look forward to what the future holds.`,
      fr: `J'ai récemment eu le privilège de participer à un programme intensif avec 34 Elements et Pierre Gaubil. Cette expérience transformatrice a rigoureusement challengé et remodelé mon état d'esprit. Les leçons que j'en ai tirées sont précieuses pour quiconque se lance dans la construction d'une entreprise. De l'affinage de la vision de mon entreprise au développement d'une proposition de valeur convaincante, en passant par la conception d'une stratégie go-to-market efficace et la maîtrise de l'analytics et de la mesure, chaque aspect de ma réflexion a été recalibré. Tout au long de ce parcours, j'ai appris à penser différemment, à aborder chaque étape du développement avec un regard neuf. Aujourd'hui, je peux dire en confiance que je suis pleinement aligné avec ce que je cherche à accomplir dans ma startup, dans toutes ses dimensions. Un grand merci à Pierre Gaubil pour son mentorat, sa sagesse, et surtout pour avoir aligné mon projet avec ses convictions et ses expériences. Je crois sincèrement que mon passage chez 34 Elements a apporté une valeur significative à mon parcours de startup, transformant mon projet en quelque chose qui dépasse largement ce qu'il était. Tout au long de mon chemin, je veillerai à rester en contact avec Pierre, qui a été un véritable mentor durant tout ce processus. Je le remercie et j'attends avec impatience ce que l'avenir réserve.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Maxence Boddaert",
    role: "CEO",
    company: "NewLife",
    cohort: "13",
    text: {
      en: `Efficient. Pierre has a very pragmatic approach. He's one of the few people who told us things straight. I highly recommend this month-long project, which was carried out prior to a fundraising campaign. Thanks to the team for the excellent organization.`,
      fr: `Efficace. Pierre a une approche très pragmatique. C'est l'une des rares personnes à nous avoir dit les choses cash. Je recommande vivement ce travail d'un mois, mené en amont d'une levée de fonds. Merci à l'équipe pour l'excellente organisation.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Hedi Marinier",
    role: "CEO",
    company: "InterFast",
    cohort: "13",
    text: {
      en: `Before I entered the tumultuous world of startups, I was overwhelmed by the abundance of information, conflicting advice, and a seemingly endless to-do list. It was in this confusion that I discovered "34elements," the coaching offered by Pierre Gaubil. From the outset, Pierre helped us navigate the complex landscape of building a startup with clarity and confidence. His approach is structured, insightful, and deeply rooted in real-world experience of what actually works in the startup world. With "34elements," we quickly identified the key elements we needed to focus on, eliminating unnecessary distractions and assumptions. What I particularly appreciated about Pierre was his ability to deconstruct past startup successes to extract essential lessons. This offered us a unique and valuable perspective, allowing us to understand the underlying mechanisms and strategies that lead to success. I can honestly say that 34elements has been a game changer for us. Instead of fumbling in the dark, we found a clear direction, supported by Pierre's wisdom and expertise. If you're considering launching a startup and want to avoid common pitfalls while maximizing your chances of success, I can't recommend 34elements' support enough. It's a wise investment in your future success. Thank you, Pierre, for your invaluable support and commitment to our vision. Thanks to you, we're well-equipped to do great things in the entrepreneurial world!`,
      fr: `Avant d'entrer dans le monde tumultueux des startups, j'étais submergé par l'abondance d'informations, les conseils contradictoires et une to-do list qui semblait sans fin. C'est dans cette confusion que j'ai découvert « 34elements », l'accompagnement proposé par Pierre Gaubil. D'emblée, Pierre nous a aidés à naviguer dans le paysage complexe de la construction d'une startup avec clarté et confiance. Son approche est structurée, pénétrante et profondément ancrée dans l'expérience réelle de ce qui fonctionne vraiment dans le monde des startups. Avec « 34elements », nous avons rapidement identifié les éléments clés sur lesquels nous concentrer, en éliminant les distractions et les hypothèses inutiles. Ce que j'ai particulièrement apprécié chez Pierre, c'est sa capacité à déconstruire les succès de startups passés pour en extraire les leçons essentielles. Cela nous a offert un regard unique et précieux, en nous permettant de comprendre les mécanismes et les stratégies sous-jacents qui mènent au succès. Je peux honnêtement dire que 34elements a tout changé pour nous. Au lieu de tâtonner dans le noir, nous avons trouvé une direction claire, portée par la sagesse et l'expertise de Pierre. Si vous envisagez de lancer une startup et que vous voulez éviter les pièges classiques tout en maximisant vos chances de réussite, je ne peux que recommander l'accompagnement de 34elements. C'est un investissement avisé dans votre succès futur. Merci Pierre pour ton soutien inestimable et ton engagement dans notre vision. Grâce à toi, nous sommes bien armés pour faire de grandes choses dans le monde entrepreneurial !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Anthony Piquet",
    role: "COO",
    company: "Merci Prosper",
    cohort: "14",
    text: {
      en: `A caring but unfiltered pro who allows us to challenge the key success factors of our project, to ensure that there are no holes in the racket, to offer the opportunity to the "founding" team to be perfectly aligned and to benefit from the feedback of other start-ups... The idea is not to add layers to an existing project, nor to destroy everything that has been done, but to deconstruct without blindness, to rebuild methodically. In summary, you can go there with your eyes closed! But especially during the sessions, don't forget to open them, you will be amazed!!!`,
      fr: `Un pro bienveillant mais sans filtre, qui permet de challenger les facteurs clés de succès de son projet, de s'assurer qu'il n'y a pas de trous dans la raquette, d'offrir à l'équipe « fondatrice » l'occasion d'être parfaitement alignée et de bénéficier des retours d'autres start-ups... L'idée n'est pas d'ajouter des couches à un projet existant, ni de détruire tout ce qui a été fait, mais de déconstruire sans aveuglement pour reconstruire méthodiquement. En résumé, vous pouvez y aller les yeux fermés ! Mais surtout, pendant les sessions, n'oubliez pas de les ouvrir, vous serez émerveillés !!!`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Isadora Bigourdan",
    role: "CEO",
    company: "Itakh",
    cohort: "14",
    text: {
      en: `Joining the Academy saves precious time. I can approach all aspects of my startup pragmatically and efficiently in record time. Pierre's feedback is invaluable. The Academy ultimately means benefiting from a top-quality advisor to refine or boost my startup. At the end of the program, we were able to completely pivot our project. Join the community to accelerate your deployment.`,
      fr: `Rejoindre l'Académie fait gagner un temps précieux. Je peux aborder tous les aspects de ma startup de façon pragmatique et efficace en un temps record. Les retours de Pierre sont inestimables. L'Académie, c'est finalement bénéficier d'un advisor de très haut niveau pour affiner ou booster sa startup. À la fin du programme, nous avons pu pivoter complètement notre projet. Rejoignez la communauté pour accélérer votre déploiement.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Rudy Mroz",
    role: "CEO",
    company: "Etyope",
    cohort: "14",
    text: {
      en: `34 elements is, in my opinion, the ideal bootcamp for a seed startup! In just a few weeks, between group sessions and individual sessions, I gained clarity at all levels, and obviously, the gain in execution quality is considerable! Beyond Pierre's experience as a seasoned entrepreneur, he very quickly leads you to ask yourself the essential questions about your market. 34 elements is a must-have in an entrepreneur's journey. I recommend it without moderation!`,
      fr: `34 elements est, à mon avis, le bootcamp idéal pour une startup en seed ! En quelques semaines seulement, entre sessions de groupe et sessions individuelles, j'ai gagné en clarté à tous les niveaux, et évidemment le gain en qualité d'exécution est considérable ! Au-delà de l'expérience de Pierre en tant qu'entrepreneur aguerri, il vous amène très vite à vous poser les questions essentielles sur votre marché. 34 elements est un incontournable dans le parcours d'un entrepreneur. Je le recommande sans modération !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jamel Ghechoua",
    role: "CEO",
    company: "Yuwway",
    cohort: "14",
    text: {
      en: `This program allowed us to deconstruct everything we have done so far to better rebuild by taking into account all of Pierre's experience and having more depth in our thinking and thus having a solid base to redefine our objectives, our positioning and our development strategy. With all this upstream work, which we will continue and continue to enrich, we are better equipped and prepared to start a road show serenely.`,
      fr: `Ce programme nous a permis de déconstruire tout ce que nous avions fait jusqu'ici pour mieux reconstruire, en tenant compte de toute l'expérience de Pierre, en gagnant en profondeur de réflexion et donc en disposant d'une base solide pour redéfinir nos objectifs, notre positionnement et notre stratégie de développement. Avec tout ce travail amont, que nous allons poursuivre et continuer d'enrichir, nous sommes mieux armés et préparés pour démarrer un road show sereinement.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Olivier Soudée",
    role: "CEO",
    company: "Haliro",
    cohort: "15",
    text: {
      en: `We seized the opportunity of being in the early stages of our startup to enroll in the bootcamp. The goal was to refine certain aspects of our strategy. Pierre covers each topic comprehensively, from vision to execution, while challenging us on each one. The content is comparable to that of a business school bootcamp or offered by incubators or accelerators. However, the difference lies in Pierre's innovative methodology. Not only is it proven by his experience, but it also disrupts conventional approaches like TAM, SAM, and SOM, by offering a framework that promises to distinguish your startup in the market and compared to other startups.`,
      fr: `Nous avons saisi l'opportunité d'être aux premiers stades de notre startup pour nous inscrire au bootcamp. L'objectif était d'affiner certains aspects de notre stratégie. Pierre traite chaque sujet de façon complète, de la vision à l'exécution, tout en nous challengeant sur chacun. Le contenu est comparable à celui d'un bootcamp de business school ou proposé par des incubateurs et accélérateurs. La différence réside toutefois dans la méthodologie innovante de Pierre. Non seulement elle est éprouvée par son expérience, mais elle bouscule aussi les approches conventionnelles type TAM, SAM et SOM, en offrant un cadre qui promet de distinguer votre startup sur le marché et par rapport aux autres startups.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Christian Verdier",
    role: "CEO",
    company: "Karanext",
    cohort: "15",
    text: {
      en: `Thank you so much for your academy. It was very helpful for us. Your method allowed us to conceptualize complex topics, allowing us to think intuitively instead. Personally, I've rarely learned so much in such a short time, and especially things we can use. I will definitely recommend you as much as I can.`,
      fr: `Merci infiniment pour votre académie. Elle nous a beaucoup aidés. Votre méthode nous a permis de conceptualiser des sujets complexes, et donc de raisonner ensuite de façon intuitive. Personnellement, j'ai rarement autant appris en si peu de temps, et surtout des choses utilisables. Je vous recommanderai sans hésiter autant que je peux.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Denis Latreille",
    role: "CEO",
    company: "ZideeUp",
    cohort: "15",
    text: {
      en: `If you're a young startup, I recommend following the 34 Elements course, which takes place over one month. It's extremely well structured, with no bullshit, just concrete lessons to explore the essentials of the project: purpose, problem statement, unique value proposition, culture & team, market, go-to-market, user experience, etc. In short, it's a summary of what you need to know before hoping to "succeed." I've been in business for four years and have attended quite a few sessions here and there, but this summary is a gem!`,
      fr: `Si vous êtes une jeune startup, je vous recommande de suivre le parcours 34 Elements, qui se déroule sur un mois. C'est extrêmement bien structuré, sans bullshit, uniquement des enseignements concrets pour explorer l'essentiel du projet : purpose, problem statement, proposition de valeur unique, culture & équipe, marché, go-to-market, expérience utilisateur, etc. Bref, c'est un condensé de ce qu'il faut savoir avant d'espérer « réussir ». Je suis entrepreneur depuis quatre ans et j'ai suivi pas mal de sessions ici et là, mais ce condensé est une perle !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Hubert Plessis",
    role: "CTO",
    company: "Piter",
    cohort: "15",
    text: {
      en: `An encounter can change your life, your future, your vision... and Pierre is one of those encounters that inspires me because he speaks the truth, with precision and relevance. Far from storytellers who transcribe what they've read and understood, Pierre knows because he's lived it. He knows the way. He challenges you with humility thanks to his experiences as a successful startupper at the very heart of Silicon Valley's powerhouse. Challenge your entrepreneurial project now with Pierre; don't wait until you're struggling or lost! His questions are powerful and effective... success often depends on a single detail and simplicity :-) May the force be with you`,
      fr: `Une rencontre peut changer votre vie, votre avenir, votre vision... et Pierre est l'une de ces rencontres qui m'inspirent, parce qu'il dit vrai, avec précision et pertinence. Loin des conteurs qui retranscrivent ce qu'ils ont lu et compris, Pierre sait parce qu'il l'a vécu. Il connaît le chemin. Il vous challenge avec humilité, fort de ses expériences de startupper à succès au cœur même de la machine de la Silicon Valley. Challengez votre projet entrepreneurial maintenant avec Pierre ; n'attendez pas d'être en difficulté ou perdu ! Ses questions sont puissantes et efficaces... le succès tient souvent à un seul détail et à la simplicité :-) Que la force soit avec vous`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Julie Nguyễn",
    role: "CEO",
    company: "ArNuméral",
    cohort: "16",
    text: {
      en: `After 18 months of the project, we had piles of data on the table, a bunch of hypotheses, and a lot of difficulty prioritizing it all to draw clear conclusions. In one month, Pierre helped us organize all these elements to build the real startup project we'd envisioned from the beginning, but were unable to put it into practice. This vision, with which we were perfectly aligned, allowed us to quickly plan our Go To Market, which yielded initial positive results even before the end of the Bootcamp. Whatever the stage of development of your project, Pierre's method will help you take stock, shed light on the gray areas of your thinking, and tie everything together into a coherent vision. My only regret at the end of this Bootcamp: not having met Pierre and his 34 Elements method earlier. It would have saved us time and spared us many of the disappointments we experienced at our previous startup with pseudo-support programs. Pierre generously shares his knowledge and experience, and this is a real opportunity for the French startup ecosystem. It's up to you to seize this opportunity by quickly reserving a place in the next Bootcamp! :-)`,
      fr: `Après 18 mois de projet, nous avions des piles de données sur la table, un tas d'hypothèses et beaucoup de mal à tout prioriser pour en tirer des conclusions claires. En un mois, Pierre nous a aidés à organiser tous ces éléments pour construire le véritable projet de startup que nous avions imaginé depuis le début, sans parvenir à le mettre en pratique. Cette vision, sur laquelle nous étions parfaitement alignés, nous a permis de planifier rapidement notre Go To Market, qui a donné de premiers résultats positifs avant même la fin du Bootcamp. Quel que soit le stade d'avancement de votre projet, la méthode de Pierre vous aidera à faire le point, à éclairer les zones grises de votre réflexion et à relier le tout en une vision cohérente. Mon seul regret à l'issue de ce Bootcamp : ne pas avoir rencontré Pierre et sa méthode 34 Elements plus tôt. Cela nous aurait fait gagner du temps et évité bien des déceptions vécues dans notre précédente startup avec des pseudo-programmes d'accompagnement. Pierre partage généreusement son savoir et son expérience, et c'est une véritable chance pour l'écosystème startup français. À vous de saisir cette opportunité en réservant vite une place au prochain Bootcamp ! :-)`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Cédric Leblanc",
    role: "CEO",
    company: "L'atout",
    cohort: "16",
    text: {
      en: `If you want to gain 2 years on your business, don't hesitate to invest 45 minutes a day for 30 days with Pierre and go follow his Bootcamp. You're not immune to having 2 or 3 revelations that will change your vision.`,
      fr: `Si vous voulez gagner 2 ans sur votre business, n'hésitez pas à investir 45 minutes par jour pendant 30 jours avec Pierre et allez suivre son Bootcamp. Vous n'êtes pas à l'abri d'avoir 2 ou 3 révélations qui changeront votre vision.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Michaël Pastor",
    role: "CEO",
    company: "Vrombr",
    cohort: "16",
    text: {
      en: `Once again, we say to ourselves that if we had known, we would have done it before!! The academy allowed us to refocus on clear objectives that were in line with our situation. We came out of it feeling better and more aligned among our partners. Exchanging ideas with Pierre every day is truly enriching; it requires work, but it's super beneficial!`,
      fr: `Une fois de plus, on se dit que si on avait su, on l'aurait fait avant !! L'académie nous a permis de nous recentrer sur des objectifs clairs et cohérents avec notre situation. Nous en sommes sortis mieux dans nos baskets et plus alignés entre associés. Échanger avec Pierre chaque jour est vraiment enrichissant ; ça demande du travail, mais c'est super bénéfique !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Yoran Brault",
    role: "CTO",
    company: "ArNuméral",
    cohort: "16",
    text: {
      en: `When you're both CTO and co-founder, the main challenge is making decisions outside the "tech" framework and taking responsibility for them collectively. Having already created a startup with Julie (CEO), I tried everything to escape the untenable "me tech, you... the rest" paradigm: books, courses, various "support"... Everything ended in a waste of time and money, often both. For me, the first major strength of the 34 Elements approach is that we only talk about "product" at the very end of the process, which forced me from the very beginning to let go of the only thing I've mastered a little... The method itself is very well suited to a Cartesian mindset, because everything flows together in a fluid logic, without any awkward transitions, punctuated by the only practical example that interests us: our own. Finally, there's the "magic" ingredient in this story: Pierre, who analyzes, dissects, and often takes apart our daily productions without the slightest compromise, but always with simplicity and genuine kindness. This very intense month of bootcamp really helped me progress. Rest assured, I didn't become a salesperson, but today, I finally have a shared culture with my co-founder that allows us to be aligned in our decisions.`,
      fr: `Quand on est à la fois CTO et cofondateur, le principal défi est de prendre des décisions en dehors du cadre « tech » et de les assumer collectivement. Ayant déjà créé une startup avec Julie (CEO), j'ai tout essayé pour échapper au paradigme intenable « moi la tech, toi... le reste » : livres, formations, « accompagnements » divers... Tout s'est terminé en perte de temps et d'argent, souvent les deux. Pour moi, la première grande force de l'approche 34 Elements est qu'on ne parle de « produit » qu'à la toute fin du processus, ce qui m'a obligé dès le départ à lâcher la seule chose que je maîtrise un peu... La méthode elle-même convient très bien à un esprit cartésien, car tout s'enchaîne dans une logique fluide, sans transitions bancales, ponctuée par le seul exemple pratique qui nous intéresse : le nôtre. Enfin, il y a l'ingrédient « magique » de cette histoire : Pierre, qui analyse, dissèque et souvent démonte nos productions quotidiennes sans le moindre compromis, mais toujours avec simplicité et une bienveillance sincère. Ce mois de bootcamp très intense m'a vraiment fait progresser. Rassurez-vous, je ne suis pas devenu commercial, mais aujourd'hui j'ai enfin une culture commune avec ma cofondatrice qui nous permet d'être alignés dans nos décisions.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Joel Hierrezuelo",
    role: "CEO",
    company: "rushup.io",
    cohort: "17",
    text: {
      en: `Here's what I'm thinking: What if entrepreneurship started with 34 Elements? When Pierre takes apart the nuts and bolts of your business one by one, you have only one option: review all your most solid analyses and arguments. Each challenge is based on solid expertise and a powerful approach that challenges speeches and advice that are sometimes devoid of experience and logic. Sharing knowledge — that's my take on 34 Elements! Imposing discipline on yourself, asking the right questions, and seeing how even the most complex and technical subjects become clear and achievable. Our vision is clearer, and our strategy is already refined. Pierre is here to help you progress with an effective, unfiltered method. The master sessions are top-notch, the one-on-ones are perfect, and the results are there, and above all, you find the answers that move you forward. After this Bootcamp, we never approach our business issues the same way again.`,
      fr: `Voilà ce que je me dis : et si l'entrepreneuriat commençait par 34 Elements ? Quand Pierre démonte un à un les rouages de votre business, vous n'avez qu'une option : revoir toutes vos analyses et vos arguments les plus solides. Chaque challenge s'appuie sur une expertise solide et une approche puissante qui bousculent les discours et les conseils parfois dénués d'expérience et de logique. Partager le savoir — voilà ma lecture de 34 Elements ! S'imposer une discipline, se poser les bonnes questions et voir comment même les sujets les plus complexes et techniques deviennent clairs et atteignables. Notre vision est plus claire et notre stratégie déjà affinée. Pierre est là pour vous faire progresser avec une méthode efficace et sans filtre. Les master sessions sont excellentes, les 1-to-1 sont parfaits, les résultats sont là, et surtout on trouve les réponses qui font avancer. Après ce Bootcamp, on n'aborde plus jamais ses problématiques business de la même façon.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Farah Kernou",
    role: "CEO",
    company: "Claym",
    cohort: "17",
    text: {
      en: `In a time of uncertainty and questioning my Product Market Fit, I decided to do this bootcamp, which was recommended to me by several successful entrepreneurs. It's one of the best investments I've made since launching Claym. While it does come at a cost for a new entrepreneur, the return on investment is multiplied, and if I could have done it earlier, I would have. This bootcamp is worth all the acceleration programs I've ever tried. Pierre provides an effective, easily understandable method that allows you to put all the aspects covered into practice in one month. It's very structured, and I'm delighted to be part of the community today. Thanks to Pierre, I've understood the importance of topics I hadn't even considered before. Many thanks again to Pierre, and I remain at your disposal if you'd like to chat directly or have any questions.`,
      fr: `Dans une période d'incertitude et de remise en question de mon Product Market Fit, j'ai décidé de faire ce bootcamp, qui m'avait été recommandé par plusieurs entrepreneurs à succès. C'est l'un des meilleurs investissements que j'ai faits depuis le lancement de Claym. Même si cela représente un coût pour une jeune entrepreneure, le retour sur investissement est démultiplié, et si j'avais pu le faire plus tôt, je l'aurais fait. Ce bootcamp vaut tous les programmes d'accélération que j'ai pu essayer. Pierre apporte une méthode efficace et facilement compréhensible qui permet de mettre en pratique tous les sujets abordés en un mois. C'est très structuré, et je suis ravie de faire partie de la communauté aujourd'hui. Grâce à Pierre, j'ai compris l'importance de sujets auxquels je n'avais même pas pensé avant. Encore un grand merci à Pierre, et je reste disponible si vous souhaitez échanger directement ou si vous avez des questions.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Laurence Descamps",
    role: "CEO",
    company: "Ipesland",
    cohort: "18",
    text: {
      en: `After working in two incubators that I won't name, the meeting with Pierre Gaubil came at just the right time to support our pivot. The support is effective, demanding, and rather time-consuming because it forces us to ask the right questions and address disillusionment at a rapid pace. This is someone who knows what he's talking about, unlike others, as he's already started companies and has experience. I don't know what will become of Ipesland, but I learned a lot to find our new target and get us back on track. Thanks again, Pierre!`,
      fr: `Après être passée par deux incubateurs que je ne nommerai pas, la rencontre avec Pierre Gaubil est arrivée au bon moment pour accompagner notre pivot. L'accompagnement est efficace, exigeant et plutôt chronophage, car il oblige à se poser les bonnes questions et à affronter les désillusions à un rythme rapide. C'est quelqu'un qui sait de quoi il parle, contrairement à d'autres, puisqu'il a déjà créé des entreprises et qu'il a de l'expérience. Je ne sais pas ce que deviendra Ipesland, mais j'ai beaucoup appris pour trouver notre nouvelle cible et nous remettre sur les rails. Merci encore Pierre !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Astride Darmon Rouzin",
    role: "COO",
    company: "Augment 3D",
    cohort: "18",
    text: {
      en: `What I took away from this experience was a pragmatic approach that encouraged deep reflection on the fundamentals of one's business, several pit stops, the famous "why," the "problem," unlike the intuitions we often have when we have a startup idea. When you create your business, you're in an F1 car, you spread yourself a little thin, you don't take much time to stop by the pits, take breaks, you skim over certain topics, you watch your competitors on the track. This is ultra-concrete and actionable, which goes beyond a masterclass where you're sometimes a spectator, since you're the one doing the exercise, and therefore the one answering your own doubts and questions. You're in charge of your plan.`,
      fr: `Ce que j'ai retiré de cette expérience, c'est une approche pragmatique qui pousse à une réflexion profonde sur les fondamentaux de son entreprise, plusieurs arrêts au stand, le fameux « pourquoi », le « problème », à l'opposé des intuitions que l'on a souvent quand on a une idée de startup. Quand on crée son entreprise, on est dans une F1, on se disperse un peu, on ne prend pas beaucoup le temps de passer au stand, de faire des pauses, on survole certains sujets, on regarde ses concurrents sur la piste. Là, c'est ultra concret et actionnable, cela dépasse une masterclass où l'on est parfois spectateur, puisque c'est vous qui faites l'exercice, et donc vous qui répondez à vos propres doutes et questions. Vous êtes maître de votre plan.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Ghalia Alami",
    role: "CEO",
    company: "Mooji",
    cohort: "18",
    text: {
      en: `There is a lot of content on entrepreneurship and the keys to business success. But Pierre is the only one who has managed to build a clear, concise, and very actionable program to move from theory to real answers and levers for his business. Also, Pierre presents dense and complex information in a very clear manner. Thanks to his bootcamp, we understood our levers of action and made key decisions.`,
      fr: `Il existe beaucoup de contenus sur l'entrepreneuriat et les clés du succès en business. Mais Pierre est le seul à avoir réussi à construire un programme clair, concis et très actionnable pour passer de la théorie à de vraies réponses et à de vrais leviers pour son entreprise. Pierre présente aussi des informations denses et complexes de façon très claire. Grâce à son bootcamp, nous avons compris nos leviers d'action et pris des décisions clés.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Basma Sadani",
    role: "COO",
    company: "Deplano",
    cohort: "19",
    text: {
      en: `A month ago, my co-founder and I attended Pierre Gaubil's 34 Elements Academy Bootcamp, and what I can tell you is that you won't come out of it unscathed, but that's actually a good thing. Pierre is indeed the other voice you should hear at least once in your entrepreneurial adventure, and preferably at the beginning! Pierre challenges you, pushes you to your limits every day of the Bootcamp, and asks you the painful questions that you've been avoiding until now, either out of comfort or intellectual laziness. His pragmatism and unique methodology led us to relentlessly challenge our initial "assumptions." And in such a short time, we've made giant strides in our project, resulting in a clearer positioning of our service, better identified customer targets, and relevant strategic decisions.`,
      fr: `Il y a un mois, mon cofondateur et moi avons suivi le Bootcamp de la 34 Elements Academy de Pierre Gaubil, et ce que je peux vous dire, c'est qu'on n'en sort pas indemne — et c'est justement une bonne chose. Pierre est en effet cette autre voix qu'il faut entendre au moins une fois dans son aventure entrepreneuriale, et de préférence au début ! Pierre vous challenge, vous pousse dans vos limites chaque jour du Bootcamp et vous pose les questions douloureuses que vous évitiez jusqu'ici, par confort ou par paresse intellectuelle. Son pragmatisme et sa méthodologie unique nous ont amenés à challenger sans relâche nos « assumptions » de départ. Et en si peu de temps, nous avons fait des pas de géant sur notre projet : un positionnement plus clair de notre service, des cibles clients mieux identifiées et des décisions stratégiques pertinentes.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Dominique Lin",
    role: "CEO",
    company: "Promptility Research",
    cohort: "19",
    text: {
      en: `Over the course of four weeks, Pierre gave us a 360-degree tour of our startup. He helped us gain perspective, but also led us to re-examine critical points that we always put off. Furthermore, although I was initially skeptical about the 15-minute follow-up sessions, I quickly realized their relevance. Finally, a big thank you for the time he decided to dedicate to the entrepreneurs.`,
      fr: `En quatre semaines, Pierre nous a fait faire un tour à 360 degrés de notre startup. Il nous a aidés à prendre du recul, mais nous a aussi amenés à réexaminer des points critiques que nous remettions toujours à plus tard. Par ailleurs, bien que j'aie été initialement sceptique sur les points de suivi de 15 minutes, j'en ai vite mesuré la pertinence. Enfin, un grand merci pour le temps qu'il a décidé de consacrer aux entrepreneurs.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Florent de Salaberry",
    role: "CEO",
    company: "Draw me a garden",
    cohort: "20",
    text: {
      en: `My partner and I just finished a month-long 34 Elements bootcamp with Pierre. An incredible 20-day session that followed one another, incredibly dense and rich. Many of our paradigms and mistakes became very clear to us. The need to be consistent from start to finish, to sometimes revisit topics that we thought were clear and transparent, to rebuild everything up to the roadmap and the "Go to Market", became obvious at the end. If we had been able to do this earlier, we would have saved a lot of time, efficiency, and money - even if we also capitalized on the progress made and the lessons and mistakes made. It is also a very concrete and pragmatic, operational journey, with actions that we are currently implementing. Far from a theoretical and academic vision, as one can learn in renowned MBAs. Another striking element is the rereading we are doing at the moment, to re-appropriate the dozens of pages of notes, reflections and exercises. Rereading to identify the general vision and the path, and to be sure that we have not missed anything, is almost as involving as this past month. This is how we realize that Pierre has a perfect mastery of his subject, which leads to a very coherent structuring of reflections, coherence that we continue to understand even now. One of the strongest learnings is the discovery (and questioning) of the "Core Action" of the client. This changes our perspectives. I won't say more because we have to discover it with Pierre. Incredible results, then. Looking forward to the fruits of this work. We have already recommended this bootcamp to many people!`,
      fr: `Mon associé et moi venons de terminer un bootcamp 34 Elements d'un mois avec Pierre. Vingt jours incroyables qui se sont enchaînés, d'une densité et d'une richesse folles. Beaucoup de nos paradigmes et de nos erreurs nous sont apparus très clairement. La nécessité d'être cohérent du début à la fin, de revisiter parfois des sujets que nous croyions clairs et limpides, de tout reconstruire jusqu'à la roadmap et au « Go to Market », est devenue évidente à la fin. Si nous avions pu le faire plus tôt, nous aurions gagné beaucoup de temps, d'efficacité et d'argent — même si nous avons aussi capitalisé sur les progrès réalisés, les enseignements et les erreurs commises. C'est également un parcours très concret, pragmatique et opérationnel, avec des actions que nous mettons en œuvre en ce moment. Loin d'une vision théorique et académique, comme on peut l'apprendre dans des MBA renommés. Autre élément marquant : la relecture que nous faisons actuellement, pour nous réapproprier les dizaines de pages de notes, de réflexions et d'exercices. Relire pour dégager la vision d'ensemble et le chemin, et s'assurer de n'avoir rien manqué, est presque aussi engageant que ce mois écoulé. C'est ainsi qu'on réalise que Pierre maîtrise parfaitement son sujet, ce qui aboutit à une structuration très cohérente des réflexions, cohérence que nous continuons de comprendre encore aujourd'hui. L'un des apprentissages les plus forts est la découverte (et la remise en question) de la « Core Action » du client. Cela change nos perspectives. Je n'en dirai pas plus, car il faut la découvrir avec Pierre. Des résultats incroyables, donc. Nous attendons avec impatience les fruits de ce travail. Nous avons déjà recommandé ce bootcamp à beaucoup de monde !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Barthélémy Fosse",
    role: "CEO",
    company: "Emycare",
    cohort: "21",
    text: {
      en: `5 weeks to start over and question what already exists. Pierre brings his experience, with rigor and kindness. At the end of the bootcamp, Emycare's vision and mission are identified and the priorities are clear. 34 elements is an investment that I would recommend to all my friends founding a startup.`,
      fr: `5 semaines pour repartir de zéro et remettre en question l'existant. Pierre apporte son expérience, avec rigueur et bienveillance. À la fin du bootcamp, la vision et la mission d'Emycare sont identifiées et les priorités sont claires. 34 elements est un investissement que je recommanderais à tous mes amis qui fondent une startup.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Benjamin Latli",
    role: "CEO",
    company: "Jiccee",
    cohort: "21",
    text: {
      en: `Clear words, advice that can be applied the same day. Pierre puts things right. Pierre understood our business perfectly and provided us with radically original and relevant advice during each exchange. In terms of metrics, 15 minutes of one-on-one time is equivalent to a month of strategic thinking. Thank you, Pierre, for your pragmatism and kindness throughout this bootcamp.`,
      fr: `Des mots clairs, des conseils applicables le jour même. Pierre remet les choses à leur place. Il a parfaitement compris notre business et nous a apporté à chaque échange des conseils radicalement originaux et pertinents. En termes de métriques, 15 minutes de 1-to-1 équivalent à un mois de réflexion stratégique. Merci Pierre pour ton pragmatisme et ta bienveillance tout au long de ce bootcamp.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Michael Ferrec",
    role: "CEO",
    company: "Inspeere",
    cohort: "21",
    text: {
      en: `Olivier and I led this bootcamp as a founding team. Beyond the relevance of Pierre's highly pragmatic and relevant method, this bootcamp also had the significant benefit of aligning us, as partners, on the essential issues of our project. This was work that would have taken months with uncertain chances of success. One of our best investments, one we should have made sooner.`,
      fr: `Olivier et moi avons mené ce bootcamp en équipe fondatrice. Au-delà de la pertinence de la méthode très pragmatique de Pierre, ce bootcamp a aussi eu le bénéfice majeur de nous aligner, entre associés, sur les enjeux essentiels de notre projet. Un travail qui nous aurait pris des mois, avec des chances de réussite incertaines. L'un de nos meilleurs investissements, que nous aurions dû faire plus tôt.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Francis Meleard",
    role: "CEO",
    company: "P322",
    cohort: "22",
    text: {
      en: `Pierre Gaubil's bootcamp came at just the right time for our startup, just a few weeks before our product launch. This experience was a real catalyst, allowing us to align our visions as co-founders on crucial aspects of our startup. What particularly struck us was Pierre's straightforward approach. Pierre gets straight to the point. No blah blah about our product. We leave with concrete actions and a clear direction. He has this ability to cut to the chase, eliminating the superfluous to keep only the essentials. We realized that a prospect, even a promising one, is worthless without a defined sales trajectory. Every interaction must serve the company's objectives, period. This bootcamp redefined our values, refined our positioning, and reframed our go-to-market strategy. Pierre forced us to see our startup from a new perspective: more strategic, more focused. Thank you, Pierre. You shook us up, shook us out of our certainties. It was necessary. Thanks to you, we're approaching the launch with a clear vision and renewed energy. We're going to rock.`,
      fr: `Le bootcamp de Pierre Gaubil est arrivé au bon moment pour notre startup, quelques semaines seulement avant le lancement de notre produit. Cette expérience a été un véritable catalyseur, en nous permettant d'aligner nos visions de cofondateurs sur des aspects cruciaux de notre startup. Ce qui nous a particulièrement marqués, c'est l'approche cash de Pierre. Pierre va droit au but. Pas de blabla sur notre produit. On repart avec des actions concrètes et une direction claire. Il a cette capacité à trancher, à éliminer le superflu pour ne garder que l'essentiel. Nous avons compris qu'un prospect, même prometteur, ne vaut rien sans trajectoire commerciale définie. Chaque interaction doit servir les objectifs de l'entreprise, point. Ce bootcamp a redéfini nos valeurs, affiné notre positionnement et recadré notre stratégie go-to-market. Pierre nous a obligés à voir notre startup sous un nouvel angle : plus stratégique, plus focalisé. Merci Pierre. Tu nous as secoués, sortis de nos certitudes. C'était nécessaire. Grâce à toi, nous abordons le lancement avec une vision claire et une énergie neuve. On va tout casser.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Benoit Duhamel",
    role: "CEO",
    company: "Supply Group",
    cohort: "23",
    text: {
      en: `Participating in the 34Elements bootcamp was a truly transformative experience. Pierre Gaubil has a real ability to create a stimulating and caring environment, where each participant is encouraged to think differently, push their limits, and adopt a clear strategic vision. The lessons are concrete, with directly applicable methodologies and honest and relevant feedback. What I particularly appreciated was the exchanges with the other participants, which allowed us not only to grow individually, but also together. The daily one-on-ones with Pierre are impactful! If you are looking to structure your thinking, accelerate your projects, and gain confidence in your strategic choices, I can only recommend 34Elements. This bootcamp is not just a training program; it is a no-bullshit exchange that will really move you forward.`,
      fr: `Participer au bootcamp 34Elements a été une expérience véritablement transformatrice. Pierre Gaubil a une réelle capacité à créer un environnement stimulant et bienveillant, où chaque participant est encouragé à penser différemment, à repousser ses limites et à adopter une vision stratégique claire. Les enseignements sont concrets, avec des méthodologies directement applicables et des retours honnêtes et pertinents. Ce que j'ai particulièrement apprécié, ce sont les échanges avec les autres participants, qui nous ont permis de grandir non seulement individuellement, mais aussi ensemble. Les 1-to-1 quotidiens avec Pierre sont percutants ! Si vous cherchez à structurer votre réflexion, accélérer vos projets et gagner en confiance dans vos choix stratégiques, je ne peux que recommander 34Elements. Ce bootcamp n'est pas qu'un programme de formation ; c'est un échange sans bullshit qui vous fera réellement avancer.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Sylvain Denoncin",
    role: "CEO",
    company: "Okeenea",
    cohort: "23",
    text: {
      en: `The Bootcamp we did with Pierre was by far the most useful for us, compared to the 5 other incubators, accelerators, and other bootcamps we had already attended. In just one month, we came away with a clear and concrete vision of the priority areas to work on to accelerate our development.`,
      fr: `Le Bootcamp que nous avons fait avec Pierre a été de loin le plus utile pour nous, comparé aux 5 autres incubateurs, accélérateurs et autres bootcamps que nous avions déjà suivis. En un mois seulement, nous en sommes ressortis avec une vision claire et concrète des chantiers prioritaires pour accélérer notre développement.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Didier Delhez",
    role: "CEO",
    company: "MeepleJack",
    cohort: "23",
    text: {
      en: `Pierre cast his expert eye over my project, grasped its essence, and helped me effectively align it with the path to success, while opening doors I had previously overlooked. I left his academy more confident and better prepared. Thank you so much!`,
      fr: `Pierre a posé son œil d'expert sur mon projet, en a saisi l'essence et m'a aidé à l'aligner efficacement sur le chemin du succès, tout en ouvrant des portes que j'avais négligées jusque-là. Je suis sorti de son académie plus confiant et mieux préparé. Merci infiniment !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Solenne Bocquillon-Le Goaziou",
    role: "CEO",
    company: "Softkids",
    cohort: "24",
    text: {
      en: `I had the opportunity to attend the 34 Elements bootcamp, and I highly recommend it to any entrepreneur looking to gain clarity and efficiency. This program is pragmatic, ultra-focused, and above all, adaptable to my CEO schedule, which was an essential criterion for me. In just 30 days, it allowed me to review the fundamentals of my business and structure my thinking to make better strategic decisions with confidence. Pierre Gaubil gets straight to the point. His approach is demanding, without frills, but always constructive. The individual sessions are intense and impactful, and the methodologies he shares are immediately applicable. If you're looking for a program that challenges you, forces you to ask yourself the right questions, and helps you structure the brain of your startup, this is the one for you. An investment with a high ROI, both in time and impact.`,
      fr: `J'ai eu l'occasion de suivre le bootcamp 34 Elements, et je le recommande vivement à tout entrepreneur qui cherche à gagner en clarté et en efficacité. Ce programme est pragmatique, ultra focalisé et surtout compatible avec mon agenda de CEO, ce qui était un critère essentiel pour moi. En 30 jours seulement, il m'a permis de revoir les fondamentaux de mon business et de structurer ma réflexion pour prendre de meilleures décisions stratégiques en confiance. Pierre Gaubil va droit au but. Son approche est exigeante, sans fioritures, mais toujours constructive. Les sessions individuelles sont intenses et percutantes, et les méthodologies qu'il partage sont immédiatement applicables. Si vous cherchez un programme qui vous challenge, vous force à vous poser les bonnes questions et vous aide à structurer le cerveau de votre startup, c'est celui-là. Un investissement à fort ROI, en temps comme en impact.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Tao Xu",
    role: "CEO",
    company: "Likikiwi",
    cohort: "24",
    text: {
      en: `To be honest, I wasn't a fan of business training at first. I thought that since every business is different, there was no set protocol to follow. However, after the bootcamp, we restructured our thinking about our business and realized that we lacked structure in managing all the essential elements. It gave us a new perspective on our small business.`,
      fr: `Pour être honnête, je n'étais pas fan des formations business au départ. Je pensais que, chaque entreprise étant différente, il n'existait pas de protocole à suivre. Pourtant, après le bootcamp, nous avons restructuré notre réflexion sur notre business et réalisé que nous manquions de structure pour piloter tous les éléments essentiels. Cela nous a donné un nouveau regard sur notre petite entreprise.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Zaak Chalal",
    role: "CEO",
    company: "Mobioos",
    cohort: "24",
    text: {
      en: `I was fortunate enough to attend the 34 Elements Bootcamp, and it is, without a doubt, one of the most profitable investments I've made as an entrepreneur. With several startups under my belt, I thought I had solid beliefs about business, product, and growth. However, this program successfully challenged, structured, and reinforced my beliefs. Some were confirmed, others were shaken up — and that's precisely the value of this training. Pierre leaves nothing to chance: every decision must be measurable, every pillar of the company must be rigorously managed. He implements methods, values, and metrics that allow me to build a sustainable and scalable company. If I had to choose between an 18-month MBA and the 34 Elements Bootcamp, I would choose the latter without hesitation. In 30 days, I gained clarity, method, and impact. Do you want to build a business based on concrete facts, not assumptions? Do you want demanding, pragmatic, and structured support? Then go for it.`,
      fr: `J'ai eu la chance de suivre le Bootcamp 34 Elements, et c'est sans aucun doute l'un des investissements les plus rentables que j'ai faits en tant qu'entrepreneur. Avec plusieurs startups derrière moi, je pensais avoir des convictions solides sur le business, le produit et la croissance. Ce programme a pourtant réussi à challenger, structurer et renforcer mes convictions. Certaines ont été confirmées, d'autres bousculées — et c'est précisément là la valeur de cette formation. Pierre ne laisse rien au hasard : chaque décision doit être mesurable, chaque pilier de l'entreprise doit être piloté avec rigueur. Il met en place des méthodes, des valeurs et des métriques qui me permettent de construire une entreprise durable et scalable. S'il fallait choisir entre un MBA de 18 mois et le Bootcamp 34 Elements, je choisirais ce dernier sans hésiter. En 30 jours, j'ai gagné en clarté, en méthode et en impact. Vous voulez construire un business basé sur des faits concrets et non sur des hypothèses ? Vous voulez un accompagnement exigeant, pragmatique et structuré ? Alors foncez.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Jean Christophe Laurent",
    role: "CEO",
    company: "Penon Partners",
    cohort: "24",
    text: {
      en: `I just finished the 34 Elements bootcamp with Pierre Gaubil and wanted to share my experience. The proposed method is solid, based on very pragmatic know-how and full of common sense. The sequence of group and individual sessions with a daily cadence forces you to move forward day by day on all the topics covered, without penalizing you in your daily life. Pierre's expertise and experience make the difference - he doesn't hesitate to challenge you, give you new and relevant angles on your positioning, your products, your customers... and offers you powerful insights into your business throughout the bootcamp with valuable recommendations. The group effect is real and gives a warm dimension to the experience. I highly recommend you participate if you want to review the fundamentals of your start-up/SME, be challenged with kindness, and obtain relevant keys that will allow you to scale. It's worth it!`,
      fr: `Je viens de terminer le bootcamp 34 Elements avec Pierre Gaubil et je voulais partager mon expérience. La méthode proposée est solide, appuyée sur un savoir-faire très pragmatique et plein de bon sens. L'enchaînement de sessions collectives et individuelles à cadence quotidienne oblige à avancer jour après jour sur tous les sujets abordés, sans pénaliser votre quotidien. L'expertise et l'expérience de Pierre font la différence — il n'hésite pas à vous challenger, à vous donner des angles nouveaux et pertinents sur votre positionnement, vos produits, vos clients... et vous offre tout au long du bootcamp des insights puissants sur votre business, accompagnés de recommandations précieuses. L'effet groupe est réel et donne une dimension chaleureuse à l'expérience. Je vous recommande vivement d'y participer si vous voulez revoir les fondamentaux de votre start-up/PME, être challengé avec bienveillance et obtenir des clés pertinentes pour scaler. Ça vaut le coup !`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Iris Ramos",
    role: "CEO",
    company: "Step",
    cohort: "25",
    text: {
      en: `Participating in Pierre Gaubil's bootcamp was a very good investment, both professionally and personally. I found much more than just training: it's a real accelerator of skills, ambition, and clarity. Pierre generously shares his experience as an entrepreneur and investor, with rare candor. He doesn't sell dreams: he gives you concrete tools, proven strategies, and above all, the mindset to build a solid, scalable project aligned with the market. What I appreciated most was the demanding nature of the program, mixed with a caring atmosphere. You are challenged, but always in the right way. At the end of the bootcamp, I not only had a much clearer vision of my project, but also a network of highly motivated founders, all ready to help each other (they were just as helpful as Pierre). I 100% recommend this bootcamp to anyone who is serious about building an impactful business, raising money, or simply taking things to the next level.`,
      fr: `Participer au bootcamp de Pierre Gaubil a été un très bon investissement, professionnellement et personnellement. J'y ai trouvé bien plus qu'une formation : c'est un véritable accélérateur de compétences, d'ambition et de clarté. Pierre partage généreusement son expérience d'entrepreneur et d'investisseur, avec une franchise rare. Il ne vend pas du rêve : il vous donne des outils concrets, des stratégies éprouvées et surtout l'état d'esprit pour construire un projet solide, scalable et aligné avec le marché. Ce que j'ai le plus apprécié, c'est l'exigence du programme mêlée à une ambiance bienveillante. On est challengé, mais toujours de la bonne manière. À la fin du bootcamp, j'avais non seulement une vision beaucoup plus claire de mon projet, mais aussi un réseau de fondateurs très motivés, tous prêts à s'entraider (ils ont été aussi utiles que Pierre). Je recommande ce bootcamp à 100 % à quiconque est sérieux dans l'idée de construire un business à impact, de lever des fonds ou simplement de passer au niveau supérieur.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Bacely T.",
    role: "CEO",
    company: "Scorton",
    cohort: "25",
    text: {
      en: `A huge thank you to Pierre Gaubil and the 34 Elements Bootcamp. This program allowed me to deconstruct all the illusions of growth that pollute the startup world. I finally understood what it means to look for (and find) a true Product-Market Fit. If you want to stop going around in circles and build a solid startup, go for it. It's concrete, real, and it transforms.`,
      fr: `Un immense merci à Pierre Gaubil et au Bootcamp 34 Elements. Ce programme m'a permis de déconstruire toutes les illusions de croissance qui polluent le monde des startups. J'ai enfin compris ce que signifie chercher (et trouver) un vrai Product-Market Fit. Si vous voulez arrêter de tourner en rond et construire une startup solide, foncez. C'est concret, c'est vrai, et ça transforme.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Florent de Salaberry",
    role: "CEO",
    company: "Draw me a garden",
    cohort: "2",
    text: {
      en: `In two weeks, we:
validated the target customer and the messages we wanted to convey
understood that we had to decide when a customer was a good fit
identified how to create urgency
given the value for customers
and worked on how to accelerate the decision, with good timing.
The added value is truly enormous in just a few days.
We changed our questioning during the first exchange with a customer. Surprisingly, we now start with two closed questions, before opening up to better discover and listen. We were able to implement this the very next day, and the results are quite incredible. We don't have the figures yet, but the impressions we're getting from our customers are incredible.
We also re-emphasized the work needed to create urgency, and we realized that there are elements that seem basic, but are essential: reiterating the facts, reminding customers how much of a problem they have to solve. We're almost no longer in a mode of questioning, but of assertion. Here again, by trying every day with the team, the impact is significant.
And finally, the work to understand what the right timing is for clients and what factors can accelerate or slow things down. This really helped us review our questioning method and our playbook.
Great, Pierre, thank you so much!`,
      fr: `En deux semaines, nous avons :
validé le client cible et les messages que nous voulions faire passer
compris qu'il fallait décider à quel moment un client était un bon fit
identifié comment créer l'urgence
donné la valeur pour les clients
et travaillé la façon d'accélérer la décision, avec le bon timing.
La valeur ajoutée est vraiment énorme en seulement quelques jours.
Nous avons changé notre questionnement lors du premier échange avec un client. Étonnamment, nous commençons désormais par deux questions fermées, avant d'ouvrir pour mieux découvrir et écouter. Nous avons pu l'appliquer dès le lendemain, et les résultats sont assez incroyables. Nous n'avons pas encore les chiffres, mais les retours de nos clients sont incroyables.
Nous avons aussi remis l'accent sur le travail nécessaire pour créer l'urgence, et nous avons réalisé qu'il existe des éléments qui semblent basiques mais qui sont essentiels : réénoncer les faits, rappeler au client l'ampleur du problème qu'il doit résoudre. On n'est presque plus dans un mode d'interrogation, mais d'affirmation. Là encore, en essayant chaque jour avec l'équipe, l'impact est significatif.
Et enfin, le travail pour comprendre quel est le bon timing pour les clients et quels facteurs peuvent accélérer ou ralentir les choses. Cela nous a vraiment aidés à revoir notre méthode de questionnement et notre playbook.
Génial, Pierre, merci beaucoup !`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Jean Christophe Le Ho",
    role: "CEO",
    company: "Just WC",
    cohort: "2",
    text: {
      en: `Pierre Gaubil's "The Switch" really revolutionized our approach to prospects: in just a few hours, we rethought our entire sales process, we tested it immediately, and the results were felt from the very first calls. It's short, concrete, and well-oiled — frankly, go for it.`,
      fr: `« The Switch » de Pierre Gaubil a vraiment révolutionné notre approche des prospects : en quelques heures, nous avons repensé tout notre process commercial, nous l'avons testé immédiatement, et les résultats se sont fait sentir dès les premiers appels. C'est court, concret et bien huilé — franchement, foncez.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Zaak Chalal",
    role: "CEO",
    company: "Moobius",
    cohort: "2",
    text: {
      en: `After several startups, one challenge kept coming up: getting out of my technical comfort zone to truly put myself in the customer's shoes. As someone with a very tech-focused background, I thought I could do it. In reality, I remained unconsciously attached to my area of expertise. Pierre's sales training was a real turning point. I learned to understand the real business challenges of my interlocutors, without trying to reduce everything to technical aspects. I finally cut the cord with this dependence on "proof by tech". Thank you, Pierre, for helping me bridge this gap. I feel aligned, more clear-headed, and above all, closer to my customers.`,
      fr: `Après plusieurs startups, un défi revenait toujours : sortir de ma zone de confort technique pour me mettre véritablement à la place du client. Avec un parcours très tech, je pensais y arriver. En réalité, je restais inconsciemment attaché à mon domaine d'expertise. La formation vente de Pierre a été un véritable tournant. J'ai appris à comprendre les vrais enjeux business de mes interlocuteurs, sans chercher à tout ramener à la technique. J'ai enfin coupé le cordon avec cette dépendance à la « preuve par la tech ». Merci Pierre de m'avoir aidé à franchir ce cap. Je me sens aligné, plus lucide et surtout plus proche de mes clients.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Caroline Bisval",
    role: "Sales Manager",
    company: "Les Parents Zens",
    cohort: "3",
    text: {
      en: `A shot of pragmatism and common sense — but above all, a wake-up call on essential sales steps. Everyone wants to shorten their sales cycle, but no one dares to walk away and stop conversations that linger in the hope of "closing someday." After going through 34 Elements, I brought my boss into this bootcamp, and he was so convinced he asked me to train my team in this mindset!`,
      fr: `Une piqûre de pragmatisme et de bon sens — mais surtout un électrochoc sur les étapes essentielles de la vente. Tout le monde veut raccourcir son cycle de vente, mais personne n'ose renoncer et arrêter les conversations qui s'éternisent dans l'espoir de « closer un jour ». Après être passée par 34 Elements, j'ai amené mon patron dans ce bootcamp, et il a été si convaincu qu'il m'a demandé de former mon équipe à cet état d'esprit !`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Caroline Bisval",
    role: "Sales Manager",
    company: "Les Parents Zens",
    cohort: "3",
    text: {
      en: `A shot of pragmatism and common sense — but above all, a wake-up call on essential sales steps. Everyone wants to shorten their sales cycle, but no one dares to walk away and stop conversations that linger in the hope of "closing someday." After going through 34 Elements, I brought my boss into this bootcamp, and he was so convinced he asked me to train my team in this mindset!`,
      fr: `Une piqûre de pragmatisme et de bon sens — mais surtout un électrochoc sur les étapes essentielles de la vente. Tout le monde veut raccourcir son cycle de vente, mais personne n'ose partir et arrêter les conversations qui s'éternisent dans l'espoir de « conclure un jour ». Après avoir suivi 34 Elements, j'ai embarqué mon patron dans ce bootcamp, et il a été tellement convaincu qu'il m'a demandé de former mon équipe à cet état d'esprit !`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Mehdi Bouaziz",
    role: "CEO",
    company: "LeadLeadBangBang",
    cohort: "3",
    text: {
      en: `A fundamental bootcamp — absolutely essential for anyone selling their product or services! I started applying Pierre's methods during the bootcamp and saw their impact on my results in real time:
1. Create urgency to turn a prospect into a client as quickly as possible.
2. Quickly filter those who see the value of my product from those who don't → instead of wasting weeks in vague discussions, shorten the conversation and politely end the meeting after 15 minutes, explaining that we're not convinced we can help them. Just from the time and mental energy saved thanks to this small adjustment, the bootcamp pays for itself in the first week.
3. Understand it's never about price, it's about perceived value. If you deliver a 10× ROI for your client, the size of the investment barely matters.
4. Don't talk about the product/service — focus on the client's problems, their daily life, and their priorities. Ask questions to truly understand what's bothering them and whether you can help. If the answer is no → Next. If yes, explain the results they'll get by solving their problems and what it will mean for their daily life.
In short, there's a lot more that could be said. Some will say Pierre is simply hammering the fundamentals, that what he preaches is "just common sense." It is. And that's exactly why his magic potion strengthens and sharpens the mind. Buy anything he sells without hesitation — you'll thank yourself for the rest of your life.`,
      fr: `Un bootcamp fondamental — absolument indispensable pour quiconque vend son produit ou ses services ! J'ai commencé à appliquer les méthodes de Pierre pendant le bootcamp et j'ai vu leur impact sur mes résultats en temps réel :
1. Créer l'urgence pour transformer un prospect en client le plus vite possible.
2. Filtrer rapidement ceux qui voient la valeur de mon produit de ceux qui ne la voient pas → au lieu de perdre des semaines en discussions floues, écourter l'échange et mettre poliment fin au rendez-vous au bout de 15 minutes en expliquant que nous ne sommes pas convaincus de pouvoir les aider. Rien qu'avec le temps et l'énergie mentale économisés grâce à ce petit ajustement, le bootcamp est rentabilisé dès la première semaine.
3. Comprendre que ce n'est jamais une question de prix, mais de valeur perçue. Si vous délivrez un ROI de 10× pour votre client, la taille de l'investissement compte à peine.
4. Ne pas parler du produit/service — se concentrer sur les problèmes du client, son quotidien et ses priorités. Poser des questions pour comprendre réellement ce qui le gêne et si vous pouvez l'aider. Si la réponse est non → Next. Si oui, expliquer les résultats qu'il obtiendra en résolvant ses problèmes et ce que cela changera dans son quotidien.
Bref, il y aurait bien plus à dire. Certains diront que Pierre ne fait que marteler les fondamentaux, que ce qu'il prêche relève « du simple bon sens ». C'est vrai. Et c'est exactement pour cela que sa potion magique fortifie et aiguise l'esprit. Achetez tout ce qu'il vend sans hésiter — vous vous remercierez toute votre vie.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Axel Gauvain",
    role: "CEO",
    company: "Loyale",
    cohort: "2",
    text: {
      en: `Magic power to gain: Knowing in very little time if you're going to make the sale — and how. How? Spend 15 days working and building a new sales approach with Pierre Gaubil and a cohort of outstanding companies. Unique.`,
      fr: `Pouvoir magique à gagner : savoir en très peu de temps si vous allez faire la vente — et comment. Comment ? Passer 15 jours à travailler et à construire une nouvelle approche commerciale avec Pierre Gaubil et une cohorte d'entreprises remarquables. Unique.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Benjamin Latli",
    role: "CEO",
    company: "JICCEE",
    cohort: "3",
    text: {
      en: `Traction, great user feedback, but trouble closing — Pierre's The Switch bootcamp came exactly when my startup needed it. You come out with immediately actionable methods tailored to your own situation. Pierre's effective approach strikes the perfect balance between the time you can devote to training and the urgency of a startup's daily reality. The mix of group sessions, exercises, and one-on-ones is incredibly effective.`,
      fr: `De la traction, d'excellents retours utilisateurs, mais des difficultés à closer — le bootcamp The Switch de Pierre est arrivé exactement au moment où ma startup en avait besoin. On en ressort avec des méthodes immédiatement actionnables et adaptées à sa propre situation. L'approche efficace de Pierre trouve le juste équilibre entre le temps que l'on peut consacrer à une formation et l'urgence du quotidien d'une startup. Le mélange de sessions collectives, d'exercices et de 1-to-1 est incroyablement efficace.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Xavier Coiffard",
    role: "Co-Founder",
    company: "LeadLeadBangBang",
    cohort: "3",
    text: {
      en: `Sales is a true science — and Pierre has all the right formulas to help you sell better. This isn't yet another theoretical training: with him, you apply, you test, you improve. If you're struggling to sell your product and you like hands-on training that gets things moving, jump in with your eyes closed!`,
      fr: `La vente est une véritable science — et Pierre a toutes les bonnes formules pour vous aider à mieux vendre. Ce n'est pas une énième formation théorique : avec lui, on applique, on teste, on s'améliore. Si vous avez du mal à vendre votre produit et que vous aimez les formations concrètes qui font bouger les choses, foncez les yeux fermés !`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Gary Roth",
    role: "CEO",
    company: "Upstride",
    cohort: "",
    text: {
      en: `The 34 Elements methodology combined with Pierre's exceptional mentorship has been a game changer for us and I would highly recommend any CEO, CTO or COO to take time out of their already busy schedule and work with 34 Elements. The ROI is immediate.`,
      fr: `La méthodologie 34 Elements, combinée au mentorat exceptionnel de Pierre, a tout changé pour nous, et je recommande vivement à tout CEO, CTO ou COO de dégager du temps dans son agenda déjà chargé pour travailler avec 34 Elements. Le ROI est immédiat.`,
    },
    program: "Coaching",
  },
  {
    name: "Quentin Rousselot",
    role: "CEO",
    company: "Agrove",
    cohort: "",
    text: {
      en: `Pierre forces you to make strong choices and focus on what matters. It's a common-sense, no-nonsense approach. It starts with the strategic vision, which we tend to forget in these times, being so product-focused. From there, everything he does across 34 elements makes sense, with clear business objectives.`,
      fr: `Pierre vous force à faire des choix forts et à vous concentrer sur ce qui compte. C'est une approche de bon sens, sans détour. Cela commence par la vision stratégique, que l'on a tendance à oublier par les temps qui courent, tant on est focalisé sur le produit. À partir de là, tout ce qu'il fait à travers les 34 éléments prend du sens, avec des objectifs business clairs.`,
    },
    program: "Coaching",
  },
  {
    name: "Corinne Grillet",
    role: "CEO",
    company: "Alygne",
    cohort: "",
    text: {
      en: `Working with Pierre and the 34 Elements app was a huge help in structuring how to look at our early-stage startup honestly and objectively. It was especially helpful in building strategic thinking and actionable elements around the "non-product" part: go-to-market, distribution channels, how to chart an early path to revenue. I would definitely recommend working with Pierre and his methodology and benefiting from his guidance and wealth of experience.`,
      fr: `Travailler avec Pierre et l'application 34 Elements nous a énormément aidés à structurer notre façon de regarder notre startup early stage avec honnêteté et objectivité. Cela a été particulièrement utile pour construire une réflexion stratégique et des éléments actionnables sur la partie « non produit » : go-to-market, canaux de distribution, comment tracer un premier chemin vers le revenu. Je recommande sans réserve de travailler avec Pierre et sa méthodologie, et de bénéficier de son accompagnement et de sa grande expérience.`,
    },
    program: "Coaching",
  },
  {
    name: "Nicolas Chéry",
    role: "CEO",
    company: "Noléo",
    cohort: "",
    text: {
      en: `I would highly recommend working with Pierre and using the software he developed to any entrepreneur, no matter what stage you are in, as he will provide unbiased/unfiltered constructive feedback that is usually hard to get from people.`,
      fr: `Je recommande vivement à tout entrepreneur, quel que soit son stade, de travailler avec Pierre et d'utiliser le logiciel qu'il a développé, car il vous apportera un retour constructif, sans biais ni filtre, qu'il est généralement difficile d'obtenir.`,
    },
    program: "Coaching",
  },
  {
    name: "John Raucher",
    role: "CEO",
    company: "Cobot it",
    cohort: "",
    text: {
      en: `Whether you're a serial entrepreneur or a new CEO, having Pierre thoughtfully challenge your growth strategy is an incredible gift you can give your startup. Pierre knows how to turn your big idea into a big success and shares his ideas freely and clearly. Thank you, Pierre!`,
      fr: `Que vous soyez un entrepreneur en série ou un nouveau CEO, laisser Pierre challenger avec finesse votre stratégie de croissance est un cadeau incroyable à offrir à votre startup. Pierre sait transformer une grande idée en grand succès et partage ses réflexions librement et clairement. Merci Pierre !`,
    },
    program: "Coaching",
  },
  {
    name: "Olivier Borde",
    role: "CEO",
    company: "TOK1N",
    cohort: "",
    text: {
      en: `I just completed Pierre's video training, and I wasn't ready... Pierre has a knack for giving advice, a legitimacy to recommend, and a very good teaching style. He enjoys sharing, helping entrepreneurs, and sharing his feedback with a very precise and supportive method that encourages you to ask the right questions. When you take a video format, you expect to have to listen attentively, without interacting with the trainer... But I was surprised to see that this format also includes exercises to complete (like in the bootcamp), with exercises that aren't theoretical, but rather focused on the context of my startup and its product. In addition, Pierre organizes one-on-one discussions via video (with WhatsApp support) to ensure understanding, follow-up, and explanations of our understanding of the method and how it applies to his business context, in the proposed exercises. And these exchanges don't stop at the end of the course; Pierre is available and remains present throughout the duration... Having already delivered e-learning training, this is the first time I've seen this hybrid format, which transforms one-way video content into high-value training with a unique, clear, and precise method delivered by a trainer who embodies it fully. For the company and its founder, there is clearly a before and after 34 Elements.`,
      fr: `Je viens de terminer la formation vidéo de Pierre, et je n'étais pas prêt... Pierre a le don du conseil, une légitimité pour recommander et une très bonne pédagogie. Il aime partager, aider les entrepreneurs et transmettre ses retours avec une méthode très précise et bienveillante qui pousse à se poser les bonnes questions. Quand on suit un format vidéo, on s'attend à devoir écouter attentivement, sans interagir avec le formateur... Mais j'ai été surpris de découvrir que ce format inclut aussi des exercices à réaliser (comme dans le bootcamp), des exercices qui ne sont pas théoriques mais centrés sur le contexte de ma startup et de son produit. En plus, Pierre organise des échanges en 1-to-1 en visio (avec un suivi WhatsApp) pour s'assurer de la compréhension, du suivi et de l'explication de notre lecture de la méthode et de son application à notre contexte business, dans les exercices proposés. Et ces échanges ne s'arrêtent pas à la fin du parcours ; Pierre est disponible et reste présent dans la durée... Ayant moi-même déjà délivré des formations e-learning, c'est la première fois que je vois ce format hybride, qui transforme un contenu vidéo à sens unique en une formation à forte valeur, avec une méthode unique, claire et précise, portée par un formateur qui l'incarne pleinement. Pour l'entreprise et son fondateur, il y a clairement un avant et un après 34 Elements.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Frederic Leens",
    role: "CEO",
    company: "Exostiv labs",
    cohort: "",
    text: {
      en: `I took "The Compass" video training course, and it's by far my best investment in "startup CEO training" in a long time. First, the format is extremely effective. The in-person bootcamp tempted me, but... it was never possible to be away for several days. With the video Compass, I set the pace, did the exercises, and chatted live with Pierre. In short, I worked on MY startup from day one, with a top-notch instructor. Then, the real value is the instructor. Pierre is a "benevolent iconoclastic scientist" (yes, all that). He puts his finger on the sore spot and gives you the clarity you need to continue leading your startup. You know that feeling when something isn't right in your startup, but you're not sure what needs to change? Don't hesitate. This is for you.`,
      fr: `J'ai suivi la formation vidéo « The Compass », et c'est de loin mon meilleur investissement en « formation de CEO de startup » depuis longtemps. D'abord, le format est extrêmement efficace. Le bootcamp en présentiel me tentait, mais... il n'a jamais été possible de m'absenter plusieurs jours. Avec le Compass en vidéo, je fixe le rythme, je fais les exercices et j'échange en direct avec Pierre. Bref, j'ai travaillé sur MA startup dès le premier jour, avec un formateur de très haut niveau. Ensuite, la vraie valeur, c'est le formateur. Pierre est un « scientifique iconoclaste bienveillant » (oui, tout ça à la fois). Il met le doigt là où ça fait mal et vous donne la clarté nécessaire pour continuer à diriger votre startup. Vous connaissez cette sensation où quelque chose ne va pas dans votre startup, sans savoir exactement quoi changer ? N'hésitez pas. C'est fait pour vous.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Julien Boulinguez",
    role: "CEO",
    company: "Demain",
    cohort: "",
    text: {
      en: `My partner and I followed the 34 Elements course, and it's by far one of the best online training courses I've ever taken. The structure is clear, the content is actionable, and above all, Pierre's personalized feedback, based on his own experience as an entrepreneur, is invaluable. It saved us a lot of time and clarified key points for the development of our startup. The self-paced video format is very valuable, and the result is there: a solid foundation, a clear vision, and a Notion we're proud of (and no, this post is not sponsored). I definitely recommend it to any founder who wants to lay the right foundations from the start.`,
      fr: `Mon associé et moi avons suivi le parcours 34 Elements, et c'est de loin l'une des meilleures formations en ligne que j'ai suivies. La structure est claire, le contenu est actionnable, et surtout les retours personnalisés de Pierre, nourris par sa propre expérience d'entrepreneur, sont inestimables. Cela nous a fait gagner beaucoup de temps et clarifié des points clés pour le développement de notre startup. Le format vidéo à son rythme est très précieux, et le résultat est là : des fondations solides, une vision claire et un Notion dont nous sommes fiers (et non, ce post n'est pas sponsorisé). Je le recommande sans réserve à tout fondateur qui veut poser les bonnes bases dès le départ.`,
    },
    program: "Startup Unlocked",
  },
  {
    name: "Tim Guillois",
    role: "CEO",
    company: "Mindhunters",
    cohort: "1",
    text: {
      en: `Deconstructing everything to start anew on a powerful new foundation is what I did thanks to Pierre's Sales training. Sales is a science and a crucial discipline. If thanks to Pierre you increase your closing rate even a little, then it's the best investment of your year.`,
      fr: `Tout déconstruire pour repartir sur une nouvelle base puissante : c'est ce que j'ai fait grâce à la formation vente de Pierre. La vente est une science et une discipline cruciale. Si grâce à Pierre vous augmentez ne serait-ce qu'un peu votre taux de closing, alors c'est le meilleur investissement de votre année.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Frederic Leens",
    role: "CEO",
    company: "Exostiv labs",
    cohort: "1",
    text: {
      en: `Sales is THE essential skill for startup CEOs, and Switch is THE essential training course for understanding it and managing your prospects on YOUR terms. Are you tired of processes, recipes, funnels, and closing stats? With Pierre Gaubil, you'll understand that it's a science, a meticulous approach. Be careful, the essential prerequisite: questioning yourself. Brilliant and fun.`,
      fr: `La vente est LA compétence essentielle des CEO de startup, et Switch est LA formation essentielle pour la comprendre et gérer vos prospects à VOS conditions. Vous en avez assez des process, des recettes, des funnels et des stats de closing ? Avec Pierre Gaubil, vous comprendrez que c'est une science, une approche méticuleuse. Attention, prérequis indispensable : se remettre en question. Brillant et fun.`,
    },
    program: "Sales Unlocked",
  },
  {
    name: "Aurelien Coget",
    role: "CEO",
    company: "R2Devops",
    cohort: "1",
    text: {
      en: `The Switch made me love sales. Why? Because I now dedicate my time to the clients for whom I have the most impact. You learn to bring together all the elements that truly help clients make an informed decision, and that changes everything. No more uncomfortable "clumsy salesperson" position, which no one wants to be. With each module, you progress in a concrete way, you take action, and you get answers. How? Take the Switch, you'll understand.`,
      fr: `The Switch m'a fait aimer la vente. Pourquoi ? Parce que je consacre désormais mon temps aux clients pour lesquels j'ai le plus d'impact. On apprend à réunir tous les éléments qui aident réellement le client à prendre une décision éclairée, et cela change tout. Fini l'inconfortable posture du « commercial maladroit », que personne ne veut endosser. À chaque module, on progresse concrètement, on passe à l'action et on obtient des réponses. Comment ? Faites le Switch, vous comprendrez.`,
    },
    program: "Sales Unlocked",
  },
]

const extraTestimonials: TestimonyEntry[] = []

function dedupeTestimonials(items: TestimonyEntry[]): TestimonyEntry[] {
  const seen = new Set<string>()
  const out: TestimonyEntry[] = []
  for (const t of items) {
    const key = `${t.name}|${t.role}|${t.company}|${t.program}|${t.cohort || ""}`
    if (!seen.has(key)) {
      seen.add(key)
      out.push(t)
    }
  }
  return out
}

function methodFor(program: string): MethodKey {
  return program === "Sales Unlocked" ? "sales" : "startup"
}

export const testimonials: Testimonial[] = dedupeTestimonials([
  ...baseTestimonials,
  ...extraTestimonials,
]).map((t) => ({ ...t, method: methodFor(t.program) }))

/**
 * A varied subset used on the home page.
 *
 * The home cards are small, so a long quote gets clamped and ends mid-word —
 * which reads as filler. We therefore prefer quotes short enough to be shown
 * whole (in BOTH languages, so switching locale never introduces a cut), and
 * only fall back to longer ones if there are not enough short ones to fill the
 * grid. Order within each method is preserved.
 */
const WHOLE_QUOTE_MAX_CHARS = 300

function fitsWhole(t: Testimonial): boolean {
  return t.text.en.length <= WHOLE_QUOTE_MAX_CHARS && t.text.fr.length <= WHOLE_QUOTE_MAX_CHARS
}

/**
 * Short, punchy pull-quotes curated for the top of each method page.
 * Referenced by company so the exact two quotes are guaranteed, regardless of
 * ordering changes elsewhere in the list. The Agathe/Kiligi quote is shortened
 * here to a single line for the method page; the full version still lives in the
 * testimonials archive.
 */
const METHOD_PAGE_QUOTES: Record<MethodKey, { company: string; text?: LocalizedText }[]> = {
  startup: [
    {
      company: "Kiligi",
      text: {
        en: `With 34 Elements, you focus on only the questions that matter.`,
        fr: `Avec 34 Elements, on se concentre uniquement sur les questions qui comptent.`,
      },
    },
    {
      company: "ABE",
      text: {
        en: `In just a few weeks, we've been able to progress faster than we've ever made in the past 18 months.`,
        fr: `En seulement quelques semaines, nous avons pu progresser plus vite que jamais au cours des 18 derniers mois.`,
      },
    },
  ],
  sales: [
    {
      company: "Loyale",
      text: {
        en: `Knowing in very little time if you're going to make the sale — and how.`,
        fr: `Savoir en très peu de temps si vous allez conclure la vente — et comment.`,
      },
    },
    {
      company: "R2Devops",
      text: {
        en: `You learn to bring together all the elements that truly help clients make an informed decision — and that changes everything.`,
        fr: `On apprend à réunir tous les éléments qui aident vraiment les clients à prendre une décision éclairée — et ça change tout.`,
      },
    },
  ],
}

export function methodTestimonials(method: MethodKey): Testimonial[] {
  return METHOD_PAGE_QUOTES[method]
    .map(({ company, text }) => {
      const match = testimonials.find((t) => t.company === company && t.method === method)
      if (!match) return null
      // Allow a method-page-specific short quote to override the archived text.
      return text ? { ...match, text } : match
    })
    .filter((t): t is Testimonial => t !== null)
}

export function featuredTestimonials(count = 8): Testimonial[] {
  /** Quotes pinned to the front of the home proof grid, by name + company. */
  const PINNED: Record<MethodKey, { name: string; company: string }[]> = {
    startup: [],
    sales: [{ name: "Caroline Bisval", company: "Les Parents Zens" }],
  }

  /** Pinned quotes first, then short quotes, then longer ones as backfill. */
  const byMethod = (key: MethodKey) => {
    const pool = testimonials.filter((t) => t.method === key)
    const isPinned = (t: Testimonial) => PINNED[key].some((p) => p.name === t.name && p.company === t.company)
    const pinned = PINNED[key]
      .map((p) => pool.find((t) => t.name === p.name && t.company === p.company))
      .filter((t): t is Testimonial => Boolean(t))
    const rest = pool.filter((t) => !isPinned(t))
    return [...pinned, ...rest.filter(fitsWhole), ...rest.filter((t) => !fitsWhole(t))]
  }

  const startup = byMethod("startup")
  const sales = byMethod("sales")
  const out: Testimonial[] = []
  const half = Math.ceil(count / 2)
  for (let i = 0; i < half; i++) {
    if (startup[i]) out.push(startup[i])
    if (sales[i] && out.length < count) out.push(sales[i])
  }
  return out.slice(0, count)
}
