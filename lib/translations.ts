export const translations = {
  en: {
    nav: {
      home: "Home",
      startupUnlocked: "Startup Unlocked",
      salesUnlocked: "Sales Unlocked",
      about: "About Pierre",
      testimonials: "Testimonials",
      contact: "Contact",
      letsTalk: "Let's talk",
      // legacy keys, kept so old routes still compile until they are removed
      compass: "The Compass",
      switch: "The Switch",
      seminar: "Seminar",
      diagnostic: "Diagnostic",
      book: "The Book",
    },

    common: {
      newTab: "opens in a new tab",
      comingSoon: "Coming soon",
      readMore: "Learn more",
      tryApp: "Try it free",
    },

    footer: {
      tagline: "Two methods. Three ways to live them.",
      methodsTitle: "Methods",
      companyTitle: "34 Elements",
      contactTitle: "Get in touch",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
    },

    /** Sales Unlocked only: the software that carries the method into every deal. */
    salesSoftware: {
      eyebrow: "The software",
      title: "Switch — guide the next conversation.",
      /** What Switch is not, before what it does: the category has to be reset first. */
      positioning: {
        lead: "Not another tool that tells you whether you'll win.",
        emphasis: "A system that helps you figure out how to win.",
      },
      /** Three categories, three questions — the last one is the only actionable one. */
      ladder: [
        { name: "CRM", question: "What's happening?" },
        { name: "Revenue Intelligence", question: "What will probably happen?" },
        { name: "Switch", question: "What should you do now?" },
      ],
      /** Who gets what: two audiences, read side by side. */
      benefits: [
        {
          audience: "For sales leaders",
          items: [
            "Increase conversion rates",
            "Shorten sales cycles",
            "Turn your playbook into daily execution",
            "Spot struggling reps — and deals — earlier",
            "Ramp new reps faster",
          ],
        },
        {
          audience: "For sales reps",
          items: [
            "See what you're missing",
            "Know when you're too optimistic — or too pessimistic",
            "Understand what's really happening in every deal",
            "Learn your company's winning patterns faster",
            "Build better instincts. Close more.",
          ],
        },
      ],
      video: {
        src: "/videos/switch-demo-en.mp4",
        label: "See Switch in action",
        caption: "A walkthrough of the software, from the playbook to a deal read gate by gate.",
        ariaLabel: "Video demonstration of the Switch software",
        fallback: "Your browser cannot play this video.",
        fallbackCta: "Download the demo",
      },
      closing: "Same discipline, applied deal by deal, round after round.",
      pricing: {
        eyebrow: "Pricing",
        title: "One price, every deal.",
        plan: {
          label: "Per user",
          amount: "€49.99",
          unit: "per user / month",
          detail: "Billed monthly, cancel whenever you want. Every feature included.",
        },
        trial: {
          label: "Try the product",
          amount: "Free",
          detail: "No card required.",
        },
        button: "Try the product",
        note: "Prices excl. tax.",
      },
      /** Label of the link out to the full positioning page. */
      discoverCta: "Discover Switch",
      /**
       * The standalone positioning page: where Switch sits against the rest of
       * the sales-software market, and the three product moments that prove it.
       */
      positioningPage: {
        eyebrow: "Positioning",
        title: "AI sales tools analyze your deals. Switch tells you what to do next.",
        discipline: {
          title: "Not another sales methodology.",
          body: [
            "Switch is built on the discipline introduced in Sales Unlocked.",
            "Every deal is continuously challenged through four simple questions:",
          ],
          questions: [
            { q: "Should we stay?", sub: "Is there a real opportunity worth pursuing?" },
            { q: "Can we win?", sub: "Do we have a credible path to becoming the customer's choice?" },
            {
              q: "Is the impact big enough?",
              sub: "Is there enough value for the customer to justify making a decision?",
            },
            { q: "Is momentum building?", sub: "Is the customer actually moving toward that decision?" },
          ],
        },
        playbook: {
          title: "Your Sales Playbook adds what only your company knows.",
          body: "Together with the sales leader, Switch captures your company's sales knowledge: what must be discovered, what makes you win or lose, what matters in your specific market, and what previous deals and post-mortems have taught you.",
          couplet: {
            a: "The discipline tells Switch what to look for.",
            b: "Your Sales Playbook tells it what matters for you.",
          },
        },
        /** Three real moments in the product, in the order they happen. */
        sequence: {
          eyebrow: "How it runs",
          title: "Then every conversation becomes guidance.",
          lead: "Switch reads each customer conversation through both lenses — the discipline and your playbook.",
          steps: [
            {
              n: "01",
              label: "Your Sales Playbook",
              heading: "Filled once, with your sales leader.",
              body: "Seven sections hold what only your company knows: the value proposition by target, the playing field, the positioning, how the market sees you, the necessary actors, what must be found out — and the post-mortem loop that keeps feeding it.",
              image: {
                src: "/images/switch-playbook-en.png",
                w: 994,
                h: 1252,
                alt: "The Sales Playbook in Switch: seven sections, from the value proposition by target to the post-mortem loop.",
              },
            },
            {
              n: "02",
              label: "The briefing",
              heading: "Before the conversation, what it must confirm.",
              body: "Switch names what this round has to establish and what is still only assumed, then writes the briefing for the next one.",
              image: {
                src: "/images/switch-briefing-en.png",
                w: 912,
                h: 420,
                alt: "A Switch briefing listing what the next conversation must confirm, with the option to write the round 2 briefing.",
              },
            },
            {
              n: "03",
              label: "The read",
              heading: "After the capture, a read of the deal.",
              body: "Drop the transcript. Each gate gets a score — and every score shows what it rests on: quantified, corroborated, merely declared, or not captured at all.",
              bulletsLabel: "What it hands back",
              bullets: [
                "What we know — and what we're only assuming",
                "What's still missing",
                "What strengthens or weakens the deal",
                "What changed since the last conversation",
                "What we need to discover or challenge next",
                "What to ask in the next conversation",
                "Whether to keep going — or walk away",
              ],
              image: {
                src: "/images/switch-read-en.png",
                w: 1258,
                h: 838,
                alt: "A deal read in Switch: four gates, each with a score out of five and what the score rests on.",
              },
            },
          ],
        },
        difference: {
          title: "That's the difference.",
          rows: [
            { name: "Conversation Intelligence", text: "analyzes what was said." },
            { name: "Revenue Intelligence", text: "helps predict what will happen." },
            {
              name: "Switch",
              text: "helps the salesperson understand what is happening and what to do about it.",
            },
          ],
          note: "No generic coaching. No rigid methodology. No meaningless probability score.",
          kicker: "A simple discipline. Your sales knowledge. Every conversation. The next right move.",
        },
        cta: "Try Switch",
        back: "Back to Sales Unlocked",
      },
    },

    /** Compass34 is not ready yet: it is announced, and nothing more. */
    startupSoftware: {
      eyebrow: "The software",
      comingSoon: "Compass34, the software that carries the system — coming soon.",
    },

    /** Shared vocabulary for the three formats. */
    formats: {
      eyebrow: "Three ways to live the method",
      title: "Read the method. Master it with coaching. Tailor it to your business.",
      subtitle: "Same method, three levels of depth. Start where you are.",
      progression: ["Read", "Master", "Tailor"],
      book: {
        label: "The Book",
        tagline: "Read the method",
        cta: "Buy the book",
        ctaEn: "Buy in English",
        ctaFr: "Acheter en français",
        comingSoonNote: "The book is being written. It is not available yet.",
      },
      guided: {
        label: "The Guided Program",
        tagline: "Master it with coaching",
        modulesLabel: "modules",
        coachingLabel: "hours of 1-on-1 coaching",
        cycleTitle: "The cycle",
        ctaEn: "Start in English",
        ctaFr: "Commencer en français",
        frOnlyNote: "Currently available in French only.",
      },
      onsite: {
        label: "The On-Site Workshop",
        tagline: "Tailor it to your business",
        cta: "Discuss an on-site workshop",
      },
    },

    home: {
      hero: {
        eyebrow: "34 Elements",
        title: "The best companies are built.",
        titleHighlight: "The best deals are too.",
        subtitle:
          "Two problems. Two methods. One to build a company that makes sense. One to turn conversations into decisions.",
        signature: "Two methods. Three ways to live them.",
        ctaStartup: "Discover Startup Unlocked",
        ctaSales: "Discover Sales Unlocked",
      },
      methods: {
        eyebrow: "A system, a discipline",
        title: "Two problems. A system, a discipline.",
        titleLine2: "Pick the one that hurts.",
        subtitle:
          "Most advice mixes the two and helps with neither. Strategy and sales are different problems and need different tools.",
        startup: {
          name: "Startup Unlocked",
          promise: "Build the company, not just the product.",
          problem: "You have a product. You are not sure you have a company.",
          countLabel: "34 elements",
          cta: "Explore Startup Unlocked",
        },
        sales: {
          name: "Sales Unlocked",
          promise: "Stop persuading. Start building decisions.",
          problem: "You have deals. You don't know which ones are real.",
          countLabel: "3 gates + momentum",
          cta: "Explore Sales Unlocked",
        },
      },
      methodStory: {
        eyebrow: "The 34 Elements method",
        title: "Most entrepreneurs do the wrong things, beautifully.",
        systemLine: "A company is a system. A sale is too.",
        principles: [
          "Diagnose before optimizing.",
          "Understand causes before treating symptoms.",
          "Fix what unlocks everything else.",
        ],
        appsLead: "One principle. Two applications:",
        apps: ["Startup Unlocked", "Sales Unlocked"],
      },
      why: {
        eyebrow: "Why Pierre",
        title: "These methods were not invented in a classroom.",
        body: "Five companies co-founded, two exits, one IPO. Seventeen years building in Silicon Valley. Then 25 years of investing in and coaching entrepreneurs. Both methods come from what actually worked — and from watching what repeatedly did not.",
        stats: [
          { num: "300+", label: "startups and companies supported" },
          { num: "5", label: "companies co-founded" },
          { num: "17 yrs", label: "in Silicon Valley" },
          { num: "2", label: "exits, 1 IPO" },
        ],
        cta: "More about Pierre",
      },
      proof: {
        eyebrow: "Proof",
        title: "What entrepreneurs say afterwards.",
        subtitle: "Unedited, in the language they were written in.",
        cta: "Read all testimonials",
        badgeStartup: "Strategy",
        badgeSales: "Sales",
      },
      finalCta: {
        title: "Which challenge matters most right now?",
        subtitle: "Not sure? Book a 15-minute call and we will point you to the right one.",
        ctaStartup: "My company needs clarity",
        ctaSales: "My sales need to convert",
        ctaDiagnostic: "Take the free Startup Unlocked diagnostic",
        ctaCall: "Book a 15-min call",
      },
    },

    /** Both method pages are rendered from the same component with this shape. */
    method: {
      startup: {
        name: "Startup Unlocked",
        eyebrow: "System 1 · Strategy",
        heroTitle: "Building a product is half the job.",
        heroHighlight: "Build the company too.",
        heroLead:
          "Startup Unlocked is a system for the decisions nobody forces you to make — until it is too late. Vision, value, target, model, go-to-market, team. 34 elements that turn a product into a company.",
        audience: {
          eyebrow: "Who it's for",
          title: "For entrepreneurs before Series B.",
          body: "Startups before Series B — the ones questioning things because they aren't going the way they'd hoped, and the ones just starting out who want to do it with the right system, with enough humility to challenge themselves.",
          roles: [] as { label: string; text: string }[],
        },
        ctaFormats: "Choose your format",
        ctaMethod: "Discover the system",
        methodEyebrow: "The system",
        // Each method page names its own practice: Startup says "system", Sales says "discipline".
        formatsEyebrow: "Three ways to live the system",
        formatsTitle: "Read the system. Master it with coaching. Tailor it to your business.",
        formatsSubtitle: "Same system, three levels of depth. Start where you are.",
        closeBody:
          "Fifteen minutes is usually enough to know — or to find out that neither one is what you need. I will tell you either way.",
        cycle: ["Watch the module", "Apply it to your company", "Get challenged in coaching"],
        // The 34-element system replaces the former "ten decisions" grid.
        system: {
          title: "34 elements.",
          highlight: "0 blind spots.",
          lead: {
            start: "Your company is a system. We read it element by element — ",
            strong: "34 decisions, each with its decisive question, its score and its evidence.",
            end: " Not lessons to watch: a diagnostic to pass, and a defended strategy on the way out.",
          },
          componentWord: "Component",
          componentWordPlural: "Components",
          elementWord: "element",
          elementWordPlural: "elements",
          orderTitle: "The system, in order.",
          orderLead:
            "Each component asks a question your strategy has to survive. You do not move on by dodging it: an element left untreated counts against you.",
        },
        bookTitle: "Startup Unlocked — the book",
        bookDesc:
          "A practical, straight-to-the-point guide that walks you through the 34 elements with examples, checklists, and exercises you can run alone.",
        guidedDesc:
          "Ten modules, exercises that produce real strategic artifacts, and four hours of one-to-one coaching where I challenge your assumptions. Available in English and French.",
        onsiteLabel: "The On-Site Day",
        onsiteTagline: "Diagnose in the morning, fix in the afternoon.",
        onsiteDesc:
          "A full day at your place. We map your company as a system of nine domains, find the one link that blocks the others, and we do not stop there: the rest of the day goes into working that link with your team. You leave with the map and the first fix already underway.",
        crossTitle: "Your strategy is sharp, but deals still stall?",
        crossBody: "That is a different problem. Sales Unlocked is built for it.",
        crossCta: "Discover Sales Unlocked",
      },
      sales: {
        name: "Sales Unlocked",
        eyebrow: "Discipline 2 · Sales",
        heroTitle: "Stop persuading.",
        heroHighlight: "Start building decisions.",
        heroLead:
          "Sales Unlocked is not about persuasion techniques. It is about reading a deal: three gates, in order — should I stay? can I win? will it land? — and the momentum that tells you whether a decision is actually being built.",
        audience: {
          eyebrow: "Who it's for",
          title: "For complex B2B sales, startup to enterprise.",
          body: "",
          roles: [
            { label: "For the rep", text: "it works for you, not on you." },
            { label: "For the sales director", text: "your playbook becomes the way every deal is read." },
          ],
        },
        problem: {
          eyebrow: "The problem",
          lines: ["Three meetings. A demo. A proposal.", "Lots of activity."],
          question: "But did the decision move?",
          answer: "Switch tells you.",
        },
        ctaFormats: "Choose your format",
        ctaMethod: "Discover the discipline",
        ctaSwitch: "Discover Switch",
        switchBridge: {
          eyebrow: "The software behind the discipline",
          title: "Sales Unlocked is the discipline.",
          highlight: "Switch puts it to work on every deal.",
          body: "Switch applies Sales Unlocked to your real customer conversations, deal after deal. It shows you what you know, what you're assuming, what's missing — and what the next conversation needs to accomplish.",
          cta: "Discover Switch",
        },
        methodEyebrow: "The discipline",
        formatsEyebrow: "Three ways to live the discipline",
        formatsTitle: "Read the discipline. Master it with coaching. Tailor it to your business.",
        formatsSubtitle: "Same discipline, three levels of depth. Start where you are.",
        closeBody:
          "Fifteen minutes is usually enough to know — or to find out that neither discipline is what you need. I will tell you either way.",
        cycle: ["Learn the gate", "Apply it to a real deal", "Get challenged in coaching"],
        // The method is argued, not diagrammed as a map of gates.
        map: {
          title: "Keep your methodology.",
          highlight: "See the deal differently.",
          frameworks:
            "SPIN, MEDDIC, Challenger — or your own playbook. SWITCH doesn't tell you how to sell.",
          origin: {
            start: "It starts with what every sale is actually made of: ",
            strong: "conversations",
            end: ".",
          },
          elaboration: {
            reveal: {
              start: "Conversation after conversation, ",
              strong: "SWITCH",
              rest: " reveals what changed, what's missing, whether a decision is actually building — and what should happen next.",
            },
            closer: {
              plain: "Your sales know-how. ",
              strong: "SWITCH",
              rest: " intelligence.",
            },
          },
          chain: ["Conversations", "Intelligence", "Decision"],
        },
        bookTitle: "Sales Unlocked — the book",
        bookDesc:
          "The 3 gates and the momentum, written down as a practical guide: the questions to ask, the evidence to look for, and how to read a deal that is not moving.",
        guidedDesc:
          "Five modules, exercises applied to deals actually in your pipeline, and two hours of one-to-one coaching. Most clients see the impact on their next call.",
        onsiteLabel: "The On-Site Day",
        onsiteTagline: "A training that doesn't end when the day ends.",
        onsiteDesc:
          "Most workshops leave you with a great day and a document. This one leaves you with a system. Morning: the Switch discipline, taught in detail, applied to your real deals. Afternoon: we install the software that is the discipline, inside your company, with your pipeline in it. What you learned on Tuesday is what your team runs on Wednesday.",
        // Sales-only "what's included": overrides the shared onsite list.
        onsiteIncludes: [
          "The full day, at your place",
          "Three months of free Switch software for one person",
          "Access to my WhatsApp community of 400+ people",
        ],
        // The shared on-site day describes the Startup diagnostic, so the Sales
        // day overrides it end to end: title, intro, timeline and outcomes.
        onsiteDay: {
          dayTitle: "From the discipline to your reality. In one day.",
          intro: [
            "Most training stops at the method. This day goes all the way to putting it to work.",
            "In the morning, you learn SWITCH. Not a set of sales techniques, but a different way of understanding a deal: what to look for in every conversation, how to read what is actually happening on the client's side, what moves a decision forward — or what blocks it.",
            "In the afternoon, we move to your real deals. We install SWITCH, configure it with your commercial context, and work directly on your open opportunities. Your conversations become the raw material of the system.",
            "At the end of the day, you don't leave with a method to apply later. You leave with SWITCH already in place, on your real deals, ready to use the next morning.",
          ],
          day: [
            {
              when: "Morning",
              heading: "Understand the discipline",
              desc: "We lay the foundations of SWITCH: how to read a sale as a succession of conversations and decisions, rather than as stages in a pipeline. You learn what to understand, what to look for, and how to interpret what a prospect tells you — or does not tell you.",
            },
            {
              when: "Afternoon",
              heading: "Install the system",
              desc: "We configure SWITCH for your company and your way of selling. Then we import your real deals and your real conversations. We analyse them together, see what the system reveals, and how it prepares the next conversation.",
            },
          ],
          deliverableTitle: "By the end of the day",
          deliverable: [
            {
              heading: "Your team masters the SWITCH logic",
              desc: "They share one way of reading and running a deal.",
            },
            {
              heading: "The software is configured",
              desc: "With your context, your commercial know-how and your rules.",
            },
            {
              heading: "Your real deals are already in it",
              desc: "No textbook cases: the system starts with your reality.",
            },
            {
              heading: "You can use it the next morning",
              desc: "Every new conversation feeds the system and prepares the next one.",
            },
          ],
        },
        crossTitle: "Deals convert, but the company still feels shaky?",
        crossBody: "That is a strategy problem. Startup Unlocked is built for it.",
        crossCta: "Discover Startup Unlocked",
      },
    },

    /** Shared on-site workshop detail, reused by both method pages. */
    onsite: {
      eyebrow: "The on-site workshop",
      dayTitle: "Four phases. One convergence.",
      deliverableTitle: "A deliverable, not a report.",
      forWhoTitle: "Built for leaders who feel they're plateauing.",
      includesTitle: "What's included",
      includes: [
        "Upstream preparation (questionnaire)",
        "The full day, at your place",
        "The map of your system + the weak link",
      ],
      note: "A one-time investment, no subscription or long engagement. You leave autonomous, with a clear direction.",
      day: [
        { when: "Morning", heading: "We map the system", desc: "We go through the 8 domains, one by one. Each gear is scored — green, orange, red — with a written justification. By noon, you have an honest map of your company." },
        { when: "Noon", heading: "We isolate the cause, not the symptom", desc: "We look at the reds and trace the chain. A broken go-to-market often stems from a blurry target upstream. We name the limiting factor." },
        { when: "Afternoon", heading: "We go down into the engine", desc: "Most often, the link is commercial. We dive into your real cases — your own deals — with a qualification grid. \"It doesn't work\" becomes \"it leaks exactly here\"." },
        { when: "Closing", heading: "You leave with a sequence", desc: "1 to 3 ordered priorities. What to fix first, what it unlocks, the first concrete action. Not 34 projects — one path." },
      ],
      deliverable: [
        { heading: "The map of your system", desc: "The 8 domains scored, green / orange / red, justified." },
        { heading: "The weak link, identified", desc: "The limiting factor, explained — and why it comes first." },
        { heading: "1 to 3 sequenced priorities", desc: "The repair order, not a list of everything that's wrong." },
        { heading: "A common language", desc: "The 34 Elements: a vocabulary to steer after the day." },
      ],
      forWho: [
        { bold: "SME and small business leaders,", text: "especially in B2B, from a few people to around fifty." },
        { bold: "Growth that's stalling", text: "without knowing exactly where the brake is." },
        { bold: "Too many open projects,", text: "and the feeling of scattering without progressing." },
        { bold: "A day on site,", text: "with you — and 2 to 3 key people if you want to bring the team along." },
      ],
    },

    about: {
      eyebrow: "About",
        title: "I turned 25 years of building into a system and a discipline.",
      lead: "Not a consultant who read the books. An entrepreneur who made the mistakes, then wrote down what actually worked.",
      chapters: [
        {
          heading: "The entrepreneur",
          body: "Five companies co-founded. Two exits, one IPO. Also the failures nobody puts on a slide — the great product that had no company around it, the pipeline full of leads that never converted. Both methods come directly from those two specific pains.",
        },
        {
          heading: "Silicon Valley",
          body: "Seventeen years building in the Valley. What I learned there was not optimism, it was rigour: the discipline of deciding, writing the decision down, and being held to it. That discipline is the backbone of both methods.",
        },
        {
          heading: "The investor and coach",
          body: "25 years investing early-stage and coaching entrepreneurs. Over 300 startups and companies supported. Seeing the same mistakes repeat across hundreds of companies is what made the patterns impossible to ignore — and worth codifying.",
        },
        {
          heading: "The two methods",
          body: "Startup Unlocked for the company that does not hold together. Sales Unlocked for the pipeline that does not convert. Two problems that get mixed up constantly, and that need completely different tools. Each is now a book, a guided program, and a day on site — each with its own software to keep applying it.",
        },
      ],
      ctaTitle: "Which one do you need?",
      ctaStartup: "Startup Unlocked",
      ctaSales: "Sales Unlocked",
      ctaCall: "Book a 15-min call",
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      lead: "Fifteen minutes is usually enough to know which method fits — or whether neither does. I will tell you either way.",
      callTitle: "Book a call",
      callDesc: "Fifteen minutes, no preparation needed. Bring the problem that is bothering you most.",
      callCta: "Open my calendar",
      emailTitle: "Write to me",
      emailDesc: "Prefer writing first? Tell me where you are stuck and I will answer personally.",
      diagnosticTitle: "Take the free Startup Unlocked diagnostic",
      diagnosticDesc:
        "A short self-assessment that scores your company across the 34 elements. It belongs to Startup Unlocked — Sales Unlocked has no diagnostic.",
      diagnosticCta: "Start the diagnostic",
    },

    /** Two pull-quotes near the top of each method page. */
    methodProof: {
      eyebrow: "In their words",
    },

    /** Closing band on both method pages, so a page never ends on a bare button. */
    methodClose: {
      eyebrow: "Where to start",
      title: "Not sure which format fits?",
      body: "Fifteen minutes is usually enough to know — or to find out that neither method is what you need. I will tell you either way.",
    },
    hero: {
      eyebrow: "THE 34 ELEMENTS METHOD",
      title: "Your company is a system. We find what's broken",
      titleHighlight: "— before it kills your growth.",
      subtitle: "A startup performs at the level of its weakest element, not its strongest. After 300 companies and 17 years building in Silicon Valley, I codified what really matters into 8 categories and 34 interconnected elements. We diagnose all of them. Then we fix the ones that actually move the needle.",
      primaryCta: "Start with a free 15-minute diagnostic",
      secondaryCta: "Or book a 15-min call with Pierre",
    },
    sectionEyebrows: {
      pointOfView: "THE 34 ELEMENTS METHOD",
      framework: "THE SYSTEM",
      howWeWork: "HOW WE WORK",
      proof: "PROOF",
      whoItsFor: "WHO IT'S FOR",
      aboutPierre: "ABOUT PIERRE",
      programs: "PROGRAMS",
    },
    pointOfView: {
      title: "Most entrepreneurs are doing the wrong things, beautifully.",
      body: [
        "Entrepreneurial education obsesses over tactics — the how. It rarely teaches the what. So entrepreneurs end up executing flawlessly on a flawed strategy. An excellent salesperson with a poor strategy doesn't save the company. They accelerate its end.",
        "A startup is a system. Every element interacts with every other one. You can have a great product and still fail because your go-to-market is misaligned with your buyer, or your business model contradicts your positioning, or your team structure can't support your ambition.",
        "Most advisors look at one piece. We look at the whole system.",
      ],
    },
    framework: {
      title: "The 8 categories. The 34 elements. The system.",
      body: "Every company is built on the same 8 categories: Foundations, Value, Target, Product, Reach, Usage, Playbook, Scale. Inside them sit 34 specific elements that determine whether you grow, stall, or fail. The strength of your company is the strength of your weakest element — not the average.",
      caption: "Most companies are good at 6 or 7 of these. The other 1 or 2 are quietly killing them.",
    },
    howWeWork: {
      title: "We diagnose first. Always.",
      body: "We don't sell a generic course or a generic coaching package. We start by mapping your company against the 34 elements. We score each one. We find the 2 or 3 that are limiting everything else. Then we work on those — and only those.",
      steps: [
        {
          number: "1",
          title: "Diagnose",
          desc: "Score your company across the 34 elements (15 min, free).",
        },
        {
          number: "2",
          title: "Decide",
          desc: "In a 1-on-1 conversation, we identify the 2 or 3 weak elements that matter most right now.",
        },
        {
          number: "3",
          title: "Fix",
          desc: "Through The Compass, The Switch, or direct advisory, we rebuild what's weak. No more, no less.",
        },
      ],
    },
    proof: {
      quotes: [
        {
          text: "The 34 Elements Academy was a revolution in my life as an entrepreneur. Pierre changed our vision of startups. Thanks to this academy, we changed our business model to reach a market 50 times larger than our initial market.",
          author: "Liselotte Cousin",
          role: "CEO, Astuvet",
        },
        {
          text: "34 elements helped us gain clarity on both our positioning and our product. Pierre knows how to find the right words to create the necessary clicks.",
          author: "Caroline Mignaux",
          role: "CEO, ReachMaker",
        },
        {
          text: "Pierre forces you to make strong choices and focus on what matters. It's a common-sense, no-nonsense approach. It starts with the strategic vision, which we tend to forget being so product-focused.",
          author: "Quentin Rousselot",
          role: "CEO, Agrove",
        },
        {
          text: "If I had to choose between an 18-month MBA and the 34 Elements Bootcamp, I would choose the latter without hesitation. In 30 days, I gained clarity, method, and impact.",
          author: "Zaak Chalal",
          role: "CEO, Mobioos",
        },
        {
          text: "34 Elements is undoubtedly the best investment TeedUp has ever made. We restructured, found the Core Action for our app, and made a micro-pivot in the business model.",
          author: "Simon Kuster",
          role: "CEO, TeedUp",
        },
        {
          text: "More than a training course or an accelerator, 34 Elements is a simple yet effective framework. Despite 10 years of entrepreneurship, I see things more clearly, everything is simpler, and I can move forward again.",
          author: "Alexandre Touzet",
          role: "CEO, Better Ask Alex",
        },
      ],
      summary: "123 entrepreneurs. 25 cohorts. One method.",
      cta: "Read all testimonials",
    },
    whoItsFor: {
      title: "Who this is for",
      body: "This isn't for everyone. It works best for entrepreneurs who suspect — or know — that their strategy is the problem, and who are ready to question it.",
      buckets: [
        {
          title: "Entrepreneurs raising soon.",
          desc: "You need clarity on positioning, market, and business model before investors find the gaps you haven't seen yet.",
          cta: "Start with the diagnostic",
          ctaHref: "https://diagnostic-34-elements.vercel.app/",
        },
        {
          title: "Entrepreneurs whose growth has stalled.",
          desc: "You had traction. Then it slowed. The instinct is to push harder on sales. The fix is usually upstream.",
          cta: "Start with the diagnostic",
          ctaHref: "https://diagnostic-34-elements.vercel.app/",
        },
        {
          title: "Entrepreneurs selling poorly despite good leads.",
          desc: "The product works, the market is real, but conversations don't convert. The problem is rarely sales skill. It's positioning, urgency, and timing.",
          cta: "Start with The Switch",
          ctaHref: "/sales-unlocked#formats",
        },
      ],
    },
    whoAmI: {
      title: "Who am I?",
      credentials: [
        "Entrepreneur & investor",
        "2 exits and 1 IPO",
        "17 years spent in Silicon Valley",
        "General Partner of a San Francisco investment fund",
        "300 startups and companies supported",
        "Author of Startup Unlocked",
      ],
      spotlight: {
        title: "Think You're on the Right Track? Let's See.",
        description:
          "Answer 27 targeted questions and get instant insights, scoring, and next-step recommendations — in under 15 minutes.",
      },
      cta: "Your 1st diagnostic",
    },
    aboutPierre: {
      title: "The person behind the method",
      body: [
        "I spent 17 years in Silicon Valley as an entrepreneur, angel investor, and General Partner of an early-stage fund. Two exits, one IPO, 300 companies advised.",
        "But the credentials aren't the point. The point is what I did with what I learned. After watching hundreds of entrepreneurs make the same mistakes in the same order, I codified the work into a system: 8 categories, 34 elements, and a method to diagnose any company against all of them in under an hour.",
        "That system became a book — Startup Unlocked. It became a software diagnostic. It became the methodology behind The Compass and The Switch. And it's the lens through which I work with every entrepreneur I take on.",
      ],
      ctas: {
        book: "Read the book",
        diagnostic: "Take the diagnostic",
        call: "Book a call",
      },
    },
    programs: {
      title: "If the diagnostic shows where to fix, these are how we fix it.",
      compass: {
        title: "The Compass",
        desc: "For entrepreneurs whose weakness sits in strategy: vision, value proposition, positioning, target, business model, go-to-market. 10 modules, 4 hours of 1-on-1 coaching, in English or French. The deliverable is a defended strategy — not a slide deck.",
        cta: "Learn more",
      },
      switch: {
        title: "The Switch",
        desc: "For entrepreneurs whose weakness sits in conversion: how you sell, how you create urgency, how you guide the decision. 5 modules, 2 hours of 1-on-1 coaching. Most clients see the impact on their next call.",
        cta: "Learn more",
      },
      notSure: "Not sure which?",
      diagnosticCta: "The diagnostic will tell you.",
    },
    numbers: {
      statement: "300 companies diagnosed. 25 cohorts run. 400+ entrepreneurs rewired. One method behind all of it.",
    },
    compass: {
      eyebrow: "The Compass",
      title: "Gain clarity",
      highlight: "— move in the right direction",
      lead: "Diagnose your company, set a clear course, and accelerate your growth.",
      body: "The Compass is designed to help you gain strategic clarity, make better decisions, and align your business with what truly matters. You'll explore 10 essential strategic moves — the ones that shape your path, attract the right people, and help you grow without losing your way.",
      cta: "More information",
      cohortNote: "Cohort sizes are limited",
      features: [
        { title: "10 Key Topics", desc: "Focus your thinking where it matters most." },
        { title: '10 "Deep Dive" Sessions', desc: "30 minutes each with practical frameworks." },
        { title: "10 One‑on‑One Sessions", desc: "15 minutes to challenge and refine ideas." },
        { title: "Unlimited Replays", desc: "All Bootcamp videos available anytime." },
        { title: "Community Access", desc: "WhatsApp group + Circle community." },
      ],
    },
    switch: {
      eyebrow: "The Switch",
      title: "Turn every conversation into a client",
      highlight: "— reinvent how you sell",
      lead: "Double your conversion rate by building strategy as the conversation unfolds.",
      body: "The Switch is designed to transform the way you sell — from the inside out. You'll work on 5 essential themes, each unlocking a key shift in how you show up, connect, and close.",
      cta: "More information",
      features: [
        { title: "5 Key Topics", desc: "Essential themes for a modern sales approach." },
        { title: '5 "Deep Dive" Sessions', desc: "30 minutes each to give you a clear method." },
        { title: "5 One‑on‑One Sessions", desc: "15 minutes to stress‑test your approach." },
        { title: "Unlimited Replays", desc: "All Bootcamp videos available anytime." },
        { title: "Community Access", desc: "WhatsApp group + Circle community." },
      ],
    },
    whoWeWorkWith: {
      title: "Who We Work With at 34 Elements",
      startups: "Startups",
      smes: "SMEs",
      startupsItems: [
        {
          title: "Early Stage",
          desc: "Small team, product in progress, need to lay the right foundations.",
          program: "Program: The Compass",
        },
        {
          title: "Growth on Pause",
          desc: "Clients in place but growth is stalling. Time to revisit strategy and get perspective.",
          program: "Program: The Compass",
          program2: "then The Switch",
        },
        {
          title: "Scale",
          desc: "Launching a new offer with a solid, proven method.",
          program: "Program: The Compass",
        },
        {
          title: "Sales That Could Be Better",
          desc: "Clear target, but sales execution needs improvement.",
          program: "Program: The Switch",
        },
      ],
      smesItems: [
        {
          title: "Fresh Perspective",
          desc: "Want a deep, Silicon Valley–style diagnostic to unlock more results.",
          program: "Program: The Compass",
        },
        {
          title: "Sell Better",
          desc: "Boost sales performance without rebuilding everything from scratch.",
          program: "Program: The Switch",
        },
      ],
    },
    compassPage: {
      waitlist: {
        badge: "Coming soon",
        title: "Compass 34 application gives you the clearest path forward — every single week.",
        subtitle: "Be first to try it.",
        cta: "Join the Waitlist",
      },
      hero: {
        title: "Building a Product, it's Half the Job",
        subtitle: "Build the Business Too",
      },
      fourWays: {
        title: "The Compass delivers",
        hours: "4 hours",
        titleEnd: "of 1-on-1 coaching",
        subtitle: "Gain clarity — move in the right direction",
        description: "Diagnose your company, set a clear course, and accelerate your growth.",
        workshop: {
          title: "Workshop",
          points: [
            "10 videos",
            "A powerful 4-hour High-Impact Coaching Session to review all learnings in context.",
            "Community access",
          ],
        },
        bootcamp: {
          title: "Bootcamp",
          points: [
            "10 live methodology sessions",
            "A 10–15 minute one‑to‑one review after each topic to apply The Compass directly to your startup.",
            "10 cohort masterclasses to share and refine",
            "Community access",
          ],
        },
        book: {
          title: "Book – Startup Unlocked",
          desc: "A practical, straight‑to‑the‑point guide that walks you through The Compass principles with examples, checklists, and actionable insights.",
        },
        software: {
          title: "Software – Compass34",
          desc: "Your ongoing strategic co‑pilot: track diagnostics, follow recommendations, and keep your team aligned week after week.",
        },
      },
      howItWorks: {
        title: "How It Works",
        description:
          "This isn't a course where you passively consume content. It's a structured strategic process with expert guidance at each critical stage.",
        threeStepCycle: {
          title: "The Three-Step Cycle",
          steps: [
            {
              title: "Watch the Videos",
              desc: "Each 40-minute module delivers the frameworks, mental models, and strategic approach for one essential topic. No fluff, no theory for theory's sake — just the methodology you need to make better decisions.",
            },
            {
              title: "Do the Exercises",
              desc: "Apply what you learned to your specific business. These aren't worksheets — they're strategic artifacts. A positioning statement. A target customer profile. A pricing strategy. Real decisions that will shape your company.",
            },
            {
              title: "Coaching Sessions",
              desc: "You come prepared with your work. I challenge your assumptions, spot the blind spots, stress-test your logic. We don't waste time on explanations — every minute is spent refining your strategy until it's sharp enough to execute.",
            },
          ],
        },
        coachingHours: {
          title: "The 4 Coaching Hours",
          description:
            "The 10 modules are grouped into 4 coaching sessions, each focusing on related strategic themes:",
          hours: [
            { title: "Hour 1", desc: "(Videos 1 & 2)" },
            { title: "Hour 2", desc: "(Videos 3, 4 & 5)" },
            { title: "Hour 3", desc: "(Videos 6, 7 & 8)" },
            { title: "Hour 4", desc: "(Videos 9 & 10)" },
          ],
        },
        whyItWorks: {
          title: "Why This Sequence Works",
          description:
            "You're not learning in isolation. Each coaching hour builds on the previous work while the thinking is still fresh. You get feedback when it matters most — while you're still forming the strategy, not after you've already committed to the wrong path.",
          conclusion:
            "The videos give you the method. The exercises force you to think. The coaching makes sure you're not fooling yourself.",
        },
      },
      powerSteps: {
        title: "Your 10 power steps",
        steps: [
          {
            title: "Define Your Vision",
            desc: "Craft a clear, inspiring vision that unites your team and attracts believers.",
          },
          {
            title: "Shape Your Value Proposition",
            desc: "Align your offer with the market's real needs to create undeniable relevance.",
          },
          {
            title: "Stand Out in a Crowded Market",
            desc: "Differentiate when everyone else is saying the same thing.",
          },
          { title: "Rethink Your User", desc: "Identify your true user and adapt your product to their reality." },
          { title: "Share Your Culture", desc: "Communicate your values to attract and retain the right people." },
          {
            title: "Segment with Intention",
            desc: "Slice your market strategically while building a long-term growth plan.",
          },
          {
            title: "Design Your Go-to-Market",
            desc: "Align product, timing, and messaging for a strategic launch that sticks.",
          },
          {
            title: "Innovate Your Business Model",
            desc: "Make your model as distinctive and resilient as your product.",
          },
          { title: "Build the Right Team", desc: "Know who to hire, when to hire them, and for what role." },
          { title: "Measure What Matters", desc: "Track the right metrics to move forward faster and reduce risk." },
        ],
      },
      pricing: {
        title: "Pricing",
        subtitle: "Choose the format that fits where you are today.",
        note: "Everything is available in English and French",
        book: {
          title: "Book — Startup Unlocked",
          price: "$26",
          desc: "Practical, straight‑to‑the��point guide to The Compass.",
          cta: "Buy the book",
        },
        workshop: {
          title: "Workshop",
          price: "$1,450",
          points: [
            "10 videos",
            "A powerful 4-hour High-Impact Coaching Session to review all learnings in context",
            "Community access",
          ],
          ctaEn: "Workshop — English",
          ctaFr: "Atelier — Français",
        },
        bootcamp: {
          title: "Bootcamp",
          price: "$3,500",
          points: [
            "10 live methodology sessions",
            "10–15 min 1:1 review after each topic to apply The Compass directly to your startup.",
            "10 cohort masterclasses",
            "Community access",
          ],
          cta: "Join the Bootcamp",
        },
        compass34: {
          title: "Compass34",
          price: "$19",
          perMonth: "/ month",
          desc: "Strategic co‑pilot software to track diagnostics and keep your team aligned.",
          cta: "Start Compass34",
        },
      },
      schedule: {
        badge: "Schedule",
        title: "A Flexible Schedule",
        subtitle:
          "You choose your pace, but we schedule all 4 sessions upfront before you start. This creates the discipline you need to actually finish. Most people don't lack insight — they lack structure. We build it in from day one.",
        legend: {
          workshop: "Workshop",
          workshopDesc: "Power Method in Videos",
          bootcamp: "Bootcamp",
          bootcampDesc: "Power Method live",
        },
        week1: "Week 1",
        week2: "Week 2",
      },
    },
    switchPage: {
      waitlist: {
        badge: "Coming Soon",
        title: "Switch34 gives you the playbook — prospect by prospect, deal by deal.",
        subtitle: "Be the first to try it.",
        cta: "Join waitlist",
      },
      hero: {
        title: "Leads Don't Pay the Bills, Conversions Do.",
      },
      threeWays: {
        title: "The Switch delivers",
        hours: "2 hours",
        titleEnd: "of 1-on-1 coaching",
      },
      howItWorks: {
        title: "How It Works",
        description:
          "This isn't a course where you passively consume content. It's a structured strategic process with expert guidance at each critical stage.",
        threeStepCycle: {
          title: "The Three-Step Cycle",
          steps: [
            {
              title: "Watch the Videos",
              desc: "Each module delivers the frameworks, mental models, and strategic approach for one essential sales topic. No fluff, no theory for theory's sake — just the methodology you need to close more deals.",
            },
            {
              title: "Do the Exercises",
              desc: "Apply what you learned to your specific sales process. These aren't worksheets — they're strategic artifacts. A qualification framework. An objection-handling script. A closing strategy. Real decisions that will shape your conversions.",
            },
            {
              title: "Coaching Sessions",
              desc: "You come prepared with your work. I challenge your assumptions, spot the blind spots, stress-test your logic. We don't waste time on explanations — every minute is spent refining your sales strategy until it's sharp enough to execute.",
            },
          ],
        },
        coachingHours: {
          title: "The 2 Coaching Hours",
          description: "The 5 modules are grouped into 2 coaching sessions, each focusing on related strategic themes:",
          hours: [
            { title: "Hour 1", desc: "(Videos 1, 2 & 3)" },
            { title: "Hour 2", desc: "(Videos 4 & 5)" },
          ],
        },
        whyItWorks: {
          title: "Why This Sequence Works",
          description:
            "You don't learn in isolation. Each coaching hour builds on the previous work while the thinking is still fresh. You get feedback at the moment it matters most — while you're still forming the strategy, not after you've already committed to the wrong approach.",
          conclusion:
            "The videos give you the method. The exercises force you to think. The coaching ensures you're not fooling yourself.",
        },
      },
      powerSteps: {
        title: "Your 5 power steps",
        steps: [
          {
            title: "Be Seen",
            desc: "How to be captivating, credible, and move prospects to action. Learn to own the spotlight and make them lean in.",
          },
          {
            title: "Qualify with Intention",
            desc: "How to uncover real needs and steer the conversation toward value — not just features.",
          },
          {
            title: "Spot the True Urgency",
            desc: "How to recognize (and create) the perfect moment to present your solution.",
          },
          {
            title: "Deliver Value with Impact",
            desc: "How to present your offer in a way that's irresistible, memorable, and impossible to ignore.",
          },
          {
            title: "Navigate the Decision",
            desc: "How to guide prospects toward a clear, confident, and fast decision.",
          },
        ],
      },
      pricing: {
        title: "Pricing",
        note: "Everything is available in English and French",
        workshop: {
          title: "Workshop",
          price: "$725",
          points: [
            "5 videos",
            "A powerful 2-hour High-Impact Coaching Session to review all learnings in context",
            "Community access",
          ],
          ctaEn: "Workshop — English",
          ctaFr: "Atelier — Français",
        },
        bootcamp: {
          title: "Bootcamp",
          price: "$1,750",
          points: [
            "5 live methodology sessions",
            "A 10–15 minute one‑to‑one review after each topic to apply The Switch directly to your startup.",
            "5 masterclasses de cohorte",
            "Community access",
          ],
          cta: "Join the Bootcamp",
        },
        switch34: {
          title: "Switch34",
          badge: "Coming soon",
          desc: "Strategic co‑pilot software to track diagnostics and keep your team aligned.",
          cta: "Get notified",
        },
      },
      schedule: {
        title: "A Flexible Schedule",
        subtitle:
          "You choose your pace, but we schedule both sessions upfront before you start. This creates the discipline you need to actually finish. Most people don't lack insight — they lack structure. We build it in from day one.",
      },
    },
    bookPage: {
      hero: {
        title: "The Book",
      },
      intro: {
        text: "You're an entrepreneur, whether it's your first startup or not. You have questions:",
        questions: [
          "Am I taking the right actions?",
          "Why is every client so hard to convince?",
          "Have I targeted the right market?",
          "Why are we not seen as a priority?",
          "Why are investors so unresponsive?",
          "What's the right price?",
        ],
      },
      description: {
        p1: "This book is not just another guide on launching a startup – plenty already exist. It's a method of introspection that is applicable at any stage of your entrepreneurial journey.",
        p2: "You'll revisit the key decisions that have shaped your business and uncover whether critical aspects have been overlooked or underestimated.",
      },
      outcomes: {
        title: "After reading this book, you'll be able to:",
        items: [
          "Initiate meaningful changes, sometimes deeply transformative",
          "Identify what has been poorly executed",
          "Gain clarity and prioritize effectively",
        ],
      },
      author: {
        text: "This method comes from my experience: co-founder of 3 startups (1 IPO, 2 acquisitions), 17 years in San Francisco, and now a General Partner in a fund that has invested in over 50 startups. I've taken the time to turn this experience into expertise, and this book is the result.",
      },
      card: {
        title: "Startup Unlocked",
        description: "A practical introspection method to revisit your key decisions and regain clarity at any stage.",
        features: ["Actionable, stage-agnostic frameworks", "Built from real entrepreneur and investor experience"],
        ctaEn: "Buy the book in English",
        ctaFr: "Buy the book in French",
      },
    },
    testimonialsPage: {
      hero: {
        eyebrow: "Proof",
        title: "What entrepreneurs say once the work is done.",
        subtitle:
          "No selection, no editing. Every entrepreneur who went through a method, in the words they used.",
      },
      filters: {
        method: "Method",
        all: "All methods",
        startup: "Startup Unlocked",
        sales: "Sales Unlocked",
        search: "Search",
        searchPlaceholder: "Name or company…",
        clear: "Clear filters",
        // legacy keys
        program: "Program",
        cohort: "Cohort #",
        allCohorts: "All cohorts",
      },
      showing: "Showing",
      of: "of",
      testimonialsText: "testimonials",
      empty: "No testimonial matches your filters.",
      cohortLabel: "Cohort",
      badgeStartup: "Strategy",
      badgeSales: "Sales",
    },
    cookies: {
      message:
        "We use cookies to improve your experience, analyze traffic, and remember your preferences. You can accept all cookies or continue with only essential ones.",
      policy: "For details, see our",
      privacyLink: "Privacy Policy",
      rejectBtn: "Only essential",
      acceptBtn: "Accept all",
    },
    seminarPage: {
      hero: {
        eyebrow: "Diagnostic seminar · by selection",
        title: "Two days to see what you can no longer",
        titleHighlight: "see alone.",
        lead: "A collective diagnostic cabinet for 10 to 15 selected entrepreneurs. No slides. No theory. Your company laid bare as a system — to isolate the single point that's really holding it back.",
        cta: "Apply for a session",
        note: "A day and a half won't be enough to learn the method. It will be enough to find your blocking point.",
      },
      constat: {
        eyebrow: "The observation",
        title: "You are the only constant element of your company. That's why you can't see the breakdown anymore.",
        lead: "Technology evolves, customers change their minds, competition shifts, the team transforms. Everything moves — except you. By living inside the system, you end up confusing the symptom with the cause. The real problem stays where no one looks for it: in the entrepreneur's head, never formulated.",
      },
      system: {
        eyebrow: "The idea",
        title: "A company is a system. It doesn't break by a part — it breaks by an interaction.",
        lead: "Eight categories, thirty-four elements, interlocked like gears. A poorly resolved Target derails pricing, which derails go-to-market, which derails retention. The cascade is silent, and it's everywhere.",
        categories: [
          { num: "01", title: "Foundations", desc: "Founders, purpose, vision, team, culture." },
          { num: "02", title: "Value", desc: "Problem, competition, point of view, value proposition." },
          { num: "03", title: "Target", desc: "Positioning, market segment, timing." },
          { num: "04", title: "Product", desc: "Product vision, roadmap, entry barrier, experience." },
          { num: "05", title: "Reach", desc: "Go-to-market, distribution." },
          { num: "06", title: "Usage", desc: "Adoption, retention, monetization." },
          { num: "07", title: "Playbook", desc: "Analytics, proof-driven management." },
          { num: "08", title: "Scale", desc: "Financing, scaling up." },
        ],
        pullQuote: "The right question is never \"which gear is weak?\" but",
        pullHighlight: "\"which one, once fixed, unlocks all the others?\"",
      },
      notThis: {
        eyebrow: "To be clear",
        title: "What this seminar is not.",
        items: [
          {
            strike: "A training",
            heading: "You don't come to learn.",
            desc: "You come to diagnose your own company, with a method proven on hundreds of startups. What you leave with are conclusions about your case — not concepts.",
          },
          {
            strike: "A slide show",
            heading: "The only material is your company.",
            desc: "No deck to follow. We work on your numbers, your deals, your real positioning. The room is a workshop, not a lecture hall.",
          },
          {
            strike: "Networking",
            heading: "It's a peer council.",
            desc: "Ten to fifteen entrepreneurs at the same stage, who challenge each other without complacency and with a common language. No one is there to flatter you.",
          },
        ],
      },
      days: {
        eyebrow: "The program",
        title: "Two days, one single objective: isolate your limiting factor.",
        day1: {
          tag: "Day 1",
          heading: "Map the system, locate the break.",
          desc: "We make your company readable, then we look for where it creaks.",
          items: [
            "You score your 8 categories on three axes: explicit, coherent, proven.",
            "Your peers challenge you, question after question, to separate what you claim from what your evidence shows.",
            "You trace the interactions that no longer fit together — the hidden cascade.",
            "You formulate a first hypothesis: your limiting factor.",
          ],
        },
        day2: {
          tag: "Day 2",
          heading: "Put the hypothesis to the test, leave with a plan.",
          desc: "We verify that you're treating the cause, not the symptom.",
          items: [
            "The cohort pressure-tests your diagnosis in session — no filter.",
            "We go from symptom to root cause, with two-level questions.",
            "We transform the conclusion into a testable experiment, not another answer.",
            "You leave with a continuous diagnostic ritual — to stop flying blind.",
          ],
        },
      },
      outcomes: {
        eyebrow: "What you take away",
        title: "Four concrete things, on the evening of the second day.",
        items: [
          { num: "01", heading: "Your limiting factor, isolated.", desc: "The single point constraining your growth today — named, formulated, shared." },
          { num: "02", heading: "Your riskiest belief.", desc: "The hypothesis on which everything rests, ready to be tested rather than assumed." },
          { num: "03", heading: "A continuous diagnostic ritual.", desc: "A cadence to re-score your system and detect drift before it costs." },
          { num: "04", heading: "A handful of peers.", desc: "Entrepreneurs who now know your system — and who hold you accountable." },
        ],
      },
      forWho: {
        eyebrow: "For whom",
        title: "Small by requirement, not by comfort.",
        lead: "Peer diagnosis only has value if the peers understand each other. That's why each cohort is small, selected, and homogeneous in stage. You apply; I select.",
        facts: [
          { key: "10–15", value: "entrepreneurs per session, no more. Size protects depth." },
          { key: "Same stage", value: "cohort calibrated so peer diagnosis is fair and useful." },
          { key: "2 days", value: "in person, intensive, no half measures or downtime." },
          { key: "By application", value: "preparation is sent in advance: we don't use room time to collect data." },
        ],
      },
      author: {
        name: "Led by Pierre Gaubil",
        role: "Founder of 34 Elements",
        bio: "25 years of entrepreneurship, business angel and General Partner in early-stage funds, including several years in California. Creator of the 34 Elements framework, tested on hundreds of startups in transformation. His method doesn't teach what to think — it teaches how to diagnose yourself continuously, like a doctor follows a patient over time.",
        book: "Author of",
        bookTitle: "Startup Unlocked — The No-Nonsense Method to Fix What's Holding You Back.",
      },
      finalCta: {
        title: "You know something is blocking.",
        titleHighlight: "Come name it.",
        desc: "Sessions are intentionally small and by selection. Submit your application for the next cohort.",
        button: "Submit my application",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Invest in clarity.",
        earlyBird: {
          tag: "Early Bird",
          price: "2 800 €",
          desc: "First 6 registrations",
        },
        normal: {
          tag: "Standard",
          price: "3 200 €",
          desc: "Regular rate",
        },
        includes: "Includes 2 days of intensive seminar, all materials, lunches, and follow-up.",
      },
    },
    diagnosticPage: {
      hero: {
        eyebrow: "On-site diagnostic · One day",
        title: "Your company is a system. In one day, we find the",
        titleHighlight: "gear",
        titleEnd: "that's blocking it.",
        lead: "A structured diagnostic, domain by domain. By the end of the day: not a list of 34 problems, but the repair sequence for the link that actually matters.",
        cta: "Book my day",
        ctaSecondary: "See the agenda",
        price: "€1,900 excl. tax",
        priceNote: "all-inclusive, except travel expenses",
        systemCap: "The 8 domains — only one blocks you",
        weakFlag: "↑ the weak link the day reveals",
      },
      constat: {
        eyebrow: "The observation",
        title: "You're not short on problems. You're short on",
        titleHighlight: "priorities.",
        body: "Most leaders know their company's issues. The trap is trying to fix everything at once — and moving nothing forward. A company is a chain: a single weak link blocks the whole.",
        quote: "Improving everything means improving nothing.",
        bodyAfter: "The goal of the day isn't to inventory what's wrong. It's to find the limiting factor — the cause, not the symptom — and to order its repair.",
      },
      method: {
        eyebrow: "The method",
        title: "We look at your company as a system of 8 domains.",
        lead: "Each is a gear. We review them all, noting what turns and what grinds — then we trace the chain up to the gear that blocks the others.",
      },
      day: {
        eyebrow: "The day",
        title: "Four phases. One convergence.",
        steps: [
          { when: "Morning", tag: "Compass · the scan", heading: "We map the system", desc: "We go through the 8 domains, one by one. Each gear is scored — green, orange, red — with a written justification. By noon, you have an honest map of your company." },
          { when: "Noon", tag: "The weak link", heading: "We isolate the cause, not the symptom", desc: "We look at the reds and trace the chain. A broken go-to-market often stems from a blurry target upstream. We name the limiting factor." },
          { when: "Afternoon", tag: "Switch · the deep dive", heading: "We go down into the engine", desc: "Most often, the link is commercial. We dive into your real cases — your own deals — with a qualification grid. \"It doesn't work\" becomes \"it leaks exactly here\"." },
          { when: "Closing", tag: "The roadmap", heading: "You leave with a sequence", desc: "1 to 3 ordered priorities. What to fix first, what it unlocks, the first concrete action. Not 34 projects — one path." },
        ],
      },
      deliverable: {
        eyebrow: "What you leave with",
        title: "A deliverable, not a report.",
        items: [
          { heading: "The map of your system", desc: "The 8 domains scored, green / orange / red, justified." },
          { heading: "The weak link, identified", desc: "The limiting factor, explained — and why it comes first." },
          { heading: "1 to 3 sequenced priorities", desc: "The repair order, not a list of everything that's wrong." },
          { heading: "A common language", desc: "The 34 Elements: a vocabulary to steer after the day." },
        ],
      },
      forWho: {
        eyebrow: "For whom",
        title: "Built for leaders who feel they're plateauing.",
        items: [
          { bold: "SME and small business leaders,", text: "especially in B2B, from a few people to around fifty." },
          { bold: "Growth that's stalling", text: "without knowing exactly where the brake is." },
          { bold: "Too many open projects,", text: "and the feeling of scattering without progressing." },
          { bold: "A day on site,", text: "with you — and 2 to 3 key people if you want to bring the team along." },
        ],
      },
      offer: {
        eyebrow: "The offer",
        title: "Diagnostic of your company.",
        cardTitle: "A day on site",
        cardSub: "Compass in the morning · Switch in the afternoon",
        price: "1,900",
        priceUnit: "€ excl. tax",
        features: [
          "Upstream preparation (questionnaire + key figures)",
          "The full day, at your place",
          "The map of your system + the weak link",
        ],
        cta: "Book my day",
        sideText: "A one-time investment, no subscription or long engagement. You leave autonomous, with a clear direction.",
        sideQuote: "The cost of a day. The value of a decision made in the right place.",
        sideNote: "A 30-day follow-up point is possible, if you wish.",
      },
      animator: {
        eyebrow: "Who runs it",
        title: "Pierre, founder of 34 Elements.",
        body: "25 years of entrepreneurship, early-stage investment, and coaching. The Compass + Switch method isn't a theory: it was born from this practice, and it's documented in two books — Startup Unlocked and Sales Unlocked.",
        stats: [
          { num: "25 yrs", label: "of entrepreneurship" },
          { num: "300+", label: "startups supported" },
          { num: "5", label: "companies co-founded" },
          { num: "2", label: "books published" },
        ],
      },
      faq: {
        eyebrow: "Frequently asked questions",
        title: "Before you book.",
        items: [
          { q: "Will you tell me what I already know?", a: "No. You know your problems — the value isn't in the list, it's in the order. We find the cause behind the symptoms, and we sequence its repair. That's precisely what's missing when you're in the thick of it." },
          { q: "Do I need to prepare anything?", a: "A short questionnaire upfront and some key figures. We come with hypotheses, so we don't waste the morning collecting data." },
          { q: "Who should be present?", a: "You, at minimum. And 2 to 3 key people if you want the roadmap to be carried by the team rather than by you alone." },
          { q: "And after the day?", a: "You leave autonomous, with a clear direction and the first fix already underway. No follow-up commitment; a 30-day check-in is possible if you wish." },
          { q: "Does it work for my sector?", a: "The method looks at the company as a system, regardless of sector. It's particularly suited to small B2B companies, where the weak link most often sits in the commercial engine." },
        ],
      },
      finalCta: {
        title: "A day to stop improving everything, and fix what matters.",
        desc: "Book your on-site diagnostic. A date, a day, a clear direction.",
        button: "Book my day — €1,900 excl. tax",
        contact: "A question first? Write to",
      },
      domains: [
        { name: "FOUNDATIONS", desc: "Founders, vision, team, culture — the base." },
        { name: "VALUE", desc: "The problem solved, and what makes you different." },
        { name: "TARGET", desc: "The target, the precise segment, the right timing." },
        { name: "PRODUCT", desc: "The product vision, the experience, what protects you." },
        { name: "REACH", desc: "Go-to-market and acquisition channels." },
        { name: "USAGE", desc: "Adoption, retention, monetization." },
        { name: "PLAYBOOK", desc: "The commercial engine, structured and repeatable." },
        { name: "SCALE", desc: "Data-driven steering and financing." },
      ],
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      startupUnlocked: "Startup Unlocked",
      salesUnlocked: "Sales Unlocked",
      about: "À propos",
      testimonials: "Témoignages",
      contact: "Contact",
      letsTalk: "Parlons-en",
      // clés héritées, conservées le temps de retirer les anciennes routes
      compass: "The Compass",
      switch: "The Switch",
      seminar: "Séminaire",
      diagnostic: "Diagnostic",
      book: "Le Livre",
    },

    common: {
      newTab: "ouvre un nouvel onglet",
      comingSoon: "Bientôt disponible",
      readMore: "En savoir plus",
      tryApp: "Testez",
    },

    footer: {
      tagline: "Deux méthodes. Trois façons de les vivre.",
      methodsTitle: "Méthodes",
      companyTitle: "34 Elements",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
    },

    /** Vocabulaire partagé des trois formats. */
    salesSoftware: {
      eyebrow: "Le logiciel",
      title: "Switch — guidez la prochaine conversation.",
      /** What Switch is not, before what it does: the category has to be reset first. */
      positioning: {
        lead: "Pas un outil de plus qui vous dit si vous allez gagner.",
        emphasis: "Un système qui vous aide à trouver comment gagner.",
      },
      /** Three categories, three questions — the last one is the only actionable one. */
      ladder: [
        { name: "CRM", question: "Qu'est-ce qui se passe ?" },
        { name: "Revenue Intelligence", question: "Qu'est-ce qui va probablement se passer ?" },
        { name: "Switch", question: "Qu'est-ce que vous devriez faire maintenant ?" },
      ],
      /** Who gets what: two audiences, read side by side. */
      benefits: [
        {
          audience: "Pour les directeurs commerciaux",
          items: [
            "Augmenter les taux de conversion",
            "Raccourcir les cycles de vente",
            "Transformer votre playbook en exécution quotidienne",
            "Repérer plus tôt les commerciaux — et les deals — en difficulté",
            "Faire monter en compétence les nouveaux plus vite",
          ],
        },
        {
          audience: "Pour les commerciaux",
          items: [
            "Voir ce qui vous échappe",
            "Savoir quand vous êtes trop optimiste — ou trop pessimiste",
            "Comprendre ce qui se passe vraiment dans chaque deal",
            "Apprendre plus vite les schémas gagnants de votre entreprise",
            "Aiguiser votre instinct. Closer davantage.",
          ],
        },
      ],
      video: {
        src: "/videos/switch-demo.mp4",
        label: "Voir Switch en action",
        caption: "Une démonstration du logiciel, du playbook au deal lu porte par porte.",
        ariaLabel: "Démonstration vidéo du logiciel Switch",
        fallback: "Votre navigateur ne peut pas lire cette vidéo.",
        fallbackCta: "Télécharger la démonstration",
      },
      closing: "Même discipline, appliquée deal par deal, round après round.",
      pricing: {
        eyebrow: "Tarif",
        title: "Un seul prix, tous vos deals.",
        plan: {
          label: "Par utilisateur",
          amount: "49,99 €",
          unit: "par utilisateur / mois",
          detail: "Facturé chaque mois, résiliable à tout moment. Toutes les fonctionnalités incluses.",
        },
        trial: {
          label: "Tester le produit",
          amount: "Gratuit",
          detail: "Aucune carte bancaire demandée.",
        },
        button: "Tester le produit",
        note: "Prix HT.",
      },
      /** Label of the link out to the full positioning page. */
      discoverCta: "Découvrir Switch",
      /**
       * The standalone positioning page: where Switch sits against the rest of
       * the sales-software market, and the three product moments that prove it.
       */
      positioningPage: {
        eyebrow: "Positionnement",
        title: "Les outils de vente IA analysent vos deals. Switch vous dit quoi faire.",
        discipline: {
          title: "Pas une méthodologie de vente de plus.",
          body: [
            "Switch repose sur la discipline présentée dans Sales Unlocked.",
            "Chaque deal est remis en question en continu à travers quatre questions simples :",
          ],
          questions: [
            { q: "Est-ce qu'on reste ?", sub: "Y a-t-il une vraie opportunité qui mérite d'être poursuivie ?" },
            {
              q: "Est-ce qu'on peut gagner ?",
              sub: "Avons-nous un chemin crédible pour devenir le choix du client ?",
            },
            {
              q: "L'impact est-il assez grand ?",
              sub: "La valeur est-elle suffisante pour justifier une décision du client ?",
            },
            { q: "Une dynamique se construit-elle ?", sub: "Le client avance-t-il réellement vers cette décision ?" },
          ],
        },
        playbook: {
          title: "Votre Sales Playbook ajoute ce que seule votre entreprise sait.",
          body: "Avec le responsable commercial, Switch capture le savoir-faire commercial de votre entreprise : ce qu'il faut découvrir, ce qui vous fait gagner ou perdre, ce qui compte sur votre marché, et ce que les deals précédents et les post-mortems ont appris.",
          couplet: {
            a: "La discipline dit à Switch quoi chercher.",
            b: "Votre Sales Playbook lui dit ce qui compte pour vous.",
          },
        },
        /** Three real moments in the product, in the order they happen. */
        sequence: {
          eyebrow: "Le déroulé",
          title: "Chaque conversation devient alors une orientation.",
          lead: "Switch lit chaque conversation client à travers ces deux filtres — la discipline et votre playbook.",
          steps: [
            {
              n: "01",
              label: "Votre Sales Playbook",
              heading: "Rempli une fois, avec votre responsable commercial.",
              body: "Sept sections retiennent ce que seule votre entreprise sait : la proposition de valeur par cible, le terrain de jeu, le positionnement, la perception du marché, les acteurs nécessaires, les choses à savoir — et la boucle du post-mortem qui continue de l'alimenter.",
              image: {
                src: "/images/switch-playbook-fr.png",
                w: 938,
                h: 1086,
                alt: "Le Sales Playbook dans Switch : sept sections, de la proposition de valeur par cible à la boucle du post-mortem.",
              },
            },
            {
              n: "02",
              label: "Le briefing",
              heading: "Avant la conversation, ce qu'elle doit confirmer.",
              body: "Switch nomme ce que ce round doit établir et ce qui reste supposé, puis rédige le briefing du suivant.",
              image: {
                src: "/images/switch-briefing-fr.png",
                w: 1036,
                h: 494,
                alt: "Un briefing Switch listant ce que la prochaine conversation doit confirmer, avec la création du briefing du round 2.",
              },
            },
            {
              n: "03",
              label: "La lecture",
              heading: "Après la capture, une lecture du deal.",
              body: "Déposez le compte rendu. Chaque porte reçoit une note — et chaque note montre sur quoi elle repose : chiffré, corroboré, simplement déclaratif, ou pas capturé du tout.",
              bulletsLabel: "Ce qu'il vous rend",
              bullets: [
                "Ce que l'on sait — et ce que l'on suppose seulement",
                "Ce qui manque encore",
                "Ce qui renforce ou fragilise le deal",
                "Ce qui a changé depuis la dernière conversation",
                "Ce qu'il faut découvrir ou challenger ensuite",
                "Ce qu'il faut demander lors de la prochaine conversation",
                "S'il faut continuer — ou renoncer",
              ],
              image: {
                src: "/images/switch-read-fr.png",
                w: 1286,
                h: 780,
                alt: "La lecture d'un deal dans Switch : quatre portes, chacune avec une note sur cinq et ce sur quoi elle repose.",
              },
            },
          ],
        },
        difference: {
          title: "C'est là toute la différence.",
          rows: [
            { name: "Conversation Intelligence", text: "analyse ce qui a été dit." },
            { name: "Revenue Intelligence", text: "aide à prédire ce qui va se passer." },
            {
              name: "Switch",
              text: "aide le commercial à comprendre ce qui se passe et quoi faire.",
            },
          ],
          note: "Pas de coaching générique. Pas de méthodologie rigide. Pas de score de probabilité qui ne veut rien dire.",
          kicker: "Une discipline simple. Votre savoir-faire commercial. Chaque conversation. Le prochain bon geste.",
        },
        cta: "Essayer Switch",
        back: "Retour à Sales Unlocked",
      },
    },

    startupSoftware: {
      eyebrow: "Le logiciel",
      comingSoon: "Compass34, le logiciel qui porte le système — bientôt disponible.",
    },

    formats: {
      eyebrow: "Trois façons de vivre la méthode",
      title: "Lire la méthode. La maîtriser avec du coaching. L'adapter à votre entreprise.",
      subtitle: "Même méthode, trois niveaux de profondeur. Commencez là o�� vous en êtes.",
      progression: ["Lire", "Maîtriser", "Adapter"],
      book: {
        label: "Le livre",
        tagline: "Lire la méthode",
        cta: "Acheter le livre",
        ctaEn: "Acheter en anglais",
        ctaFr: "Acheter en français",
        comingSoonNote: "Le livre est en cours d'écriture. Il n'est pas encore disponible.",
      },
      guided: {
        label: "Le programme accompagné",
        tagline: "La maîtriser avec du coaching",
        modulesLabel: "modules",
        coachingLabel: "heures de coaching individuel",
        cycleTitle: "Le cycle",
        ctaEn: "Commencer en anglais",
        ctaFr: "Commencer en français",
        frOnlyNote: "Disponible en français uniquement pour le moment.",
      },
      onsite: {
        label: "La journée sur site",
        tagline: "L'adapter à votre entreprise",
        cta: "Discuter d'une journée sur site",
      },
    },

    home: {
      hero: {
        eyebrow: "34 Elements",
        title: "Les meilleures entreprises se construisent.",
        titleHighlight: "Les meilleurs deals aussi.",
        subtitle:
          "Deux problèmes. Deux méthodes. Une pour bâtir une entreprise qui a du sens. Une pour transformer les conversations en décisions.",
        signature: "Deux méthodes. Trois façons de les vivre.",
        ctaStartup: "Découvrir Startup Unlocked",
        ctaSales: "Découvrir Sales Unlocked",
      },
      methods: {
        eyebrow: "Un système, une discipline",
        title: "Deux problèmes. Un système, une discipline.",
        titleLine2: "Choisissez celui qui fait mal.",
        subtitle:
          "La plupart des conseils mélangent les deux et n'aident sur aucun. La stratégie et la vente sont deux problèmes différents : ils demandent des outils différents.",
        startup: {
          name: "Startup Unlocked",
          promise: "Construire l'entreprise, pas seulement le produit.",
          problem: "Vous avez un produit. Vous n'êtes pas sûr d'avoir une entreprise.",
          countLabel: "34 éléments",
          cta: "Explorer Startup Unlocked",
        },
        sales: {
          name: "Sales Unlocked",
          promise: "Arrêtez de convaincre. Construisez la décision.",
          problem: "Vous avez des deals. Vous ne savez pas lesquels sont réels.",
          countLabel: "3 portes + momentum",
          cta: "Explorer Sales Unlocked",
        },
      },
      methodStory: {
        eyebrow: "La méthode 34 Elements",
        title: "La plupart des entrepreneurs font les mauvaises choses, magnifiquement.",
        systemLine: "Une entreprise est un système. Une vente aussi.",
        principles: [
          "Diagnostiquer avant d'optimiser.",
          "Comprendre les causes avant de traiter les symptômes.",
          "Réparer ce qui débloque tout le reste.",
        ],
        appsLead: "Un principe. Deux applications :",
        apps: ["Startup Unlocked", "Sales Unlocked"],
      },
      why: {
        eyebrow: "Pourquoi Pierre",
        title: "Ces méthodes n'ont pas été inventées dans une salle de cours.",
        body: "Cinq entreprises co-fondées, deux exits, une introduction en bourse. Dix-sept ans à construire dans la Silicon Valley. Puis 25 ans à investir et à accompagner des entrepreneurs. Les deux méthodes viennent de ce qui a réellement marché — et de ce qui, à force, ne marchait jamais.",
        stats: [
          { num: "300+", label: "startups et entreprises accompagnées" },
          { num: "5", label: "entreprises co-fondées" },
          { num: "17 ans", label: "dans la Silicon Valley" },
          { num: "2", label: "exits, 1 IPO" },
        ],
        cta: "En savoir plus sur Pierre",
      },
      proof: {
        eyebrow: "Preuves",
        title: "Ce que disent les entrepreneurs, après.",
        subtitle: "Sans retouche, dans la langue d'origine.",
        cta: "Lire tous les témoignages",
        badgeStartup: "Stratégie",
        badgeSales: "Vente",
      },
      finalCta: {
        title: "Quel est votre enjeu le plus urgent ?",
        subtitle: "Vous hésitez ? Réservez 15 minutes et je vous orienterai.",
        ctaStartup: "Mon entreprise a besoin de clarté",
        ctaSales: "Mes ventes doivent convertir",
        ctaDiagnostic: "Faire le diagnostic gratuit Startup Unlocked",
        ctaCall: "Réserver 15 minutes",
      },
    },

    /** Les deux pages méthode sont rendues par le même composant, avec cette forme. */
    method: {
      startup: {
        name: "Startup Unlocked",
        eyebrow: "Système 1 · Stratégie",
        heroTitle: "Construire un produit, c'est la moitié du travail.",
        heroHighlight: "Construisez aussi l'entreprise.",
        heroLead:
          "Startup Unlocked est un système pour les décisions que personne ne vous force à prendre — jusqu'à ce qu'il soit trop tard. Vision, valeur, cible, modèle, go-to-market, équipe. 34 éléments qui transforment un produit en entreprise.",
        audience: {
          eyebrow: "Pour qui",
          title: "Pour les startups avant la série B.",
          body: "Les startups avant la série B — celles qui se posent des questions parce que les choses ne vont pas comme elles le souhaitent, et celles qui démarrent et veulent le faire avec le bon système, avec assez d'humilité pour se remettre en question.",
          roles: [] as { label: string; text: string }[],
        },
        ctaFormats: "Choisir mon format",
        ctaMethod: "Découvrir le système",
        methodEyebrow: "Le système",
        formatsEyebrow: "Trois façons de vivre le système",
        formatsTitle: "Lire le système. Le maîtriser avec du coaching. L'adapter à votre entreprise.",
        formatsSubtitle: "Même système, trois niveaux de profondeur. Commencez là où vous en êtes.",
        closeBody:
          "Quinze minutes suffisent généralement pour le savoir — ou pour découvrir qu'aucun des deux n'est ce qu'il vous faut. Je vous le dirai franchement.",
        cycle: ["Regarder le module", "L'appliquer à votre entreprise", "Se faire challenger en coaching"],
        // Le système des 34 éléments remplace l'ancienne grille « dix décisions ».
        system: {
          title: "34 éléments.",
          highlight: "0 angle mort.",
          lead: {
            start: "Votre entreprise est un système. Nous le lisons élément par élément — ",
            strong: "34 décisions, chacune avec sa question décisive, sa note et sa preuve.",
            end: " Pas des leçons à regarder : un diagnostic à passer, et une stratégie défendue à la sortie.",
          },
          componentWord: "Composante",
          componentWordPlural: "Composantes",
          elementWord: "élément",
          elementWordPlural: "éléments",
          orderTitle: "Le système, dans l'ordre.",
          orderLead:
            "Chaque composante pose une question à laquelle votre stratégie doit survivre. On ne passe pas à la suivante en l'esquivant : un élément non traité compte contre vous.",
        },
        bookTitle: "Startup Unlocked — le livre",
        bookDesc:
          "Un guide pratique et direct qui déroule les 34 éléments avec des exemples, des check-lists et des exercices que vous pouvez faire seul.",
        guidedDesc:
          "Dix modules, des exercices qui produisent de vrais artefacts stratégiques, et quatre heures de coaching individuel où je challenge vos hypothèses. Disponible en anglais et en français.",
        onsiteLabel: "La journée sur site",
        onsiteTagline: "Diagnostiquer le matin, réparer l'après-midi.",
        onsiteDesc:
          "Une journée complète chez vous. On cartographie votre entreprise comme un système de neuf domaines, on trouve le maillon qui bloque les autres, et on ne s'arrête pas là : le reste de la journée passe à travailler ce maillon avec votre équipe. Vous repartez avec la carte et le premier chantier déjà entamé.",
        crossTitle: "Votre stratégie est claire, mais les deals stagnent ?",
        crossBody: "C'est un autre problème. Sales Unlocked est fait pour ça.",
        crossCta: "Découvrir Sales Unlocked",
      },
      sales: {
        name: "Sales Unlocked",
        eyebrow: "Discipline 2 · Vente",
        heroTitle: "Arrêtez de persuader.",
        heroHighlight: "Construisez des décisions.",
        heroLead:
          "Sales Unlocked ne parle pas de techniques de persuasion. Il s'agit de lire un deal : trois portes, dans l'ordre — dois-je rester ? puis-je gagner ? est-ce que ça va aboutir ? — et le momentum qui vous dit si une décision est réellement en train de se construire.",
        audience: {
          eyebrow: "Pour qui",
          title: "Pour les ventes complexes en B2B, de la startup au grand groupe.",
          body: "",
          roles: [
            { label: "Pour le commercial", text: "ça travaille pour vous, pas sur vous." },
            {
              label: "Pour le directeur commercial",
              text: "votre playbook devient la façon dont chaque deal est lu.",
            },
          ],
        },
        problem: {
          eyebrow: "Le problème",
          lines: ["Trois rendez-vous. Une démo. Une proposition.", "Beaucoup d'activité."],
          question: "Mais la décision a-t-elle avancé ?",
          answer: "Switch vous le dit.",
        },
        ctaFormats: "Choisir mon format",
        ctaMethod: "Découvrir la discipline",
        ctaSwitch: "Découvrir Switch",
        switchBridge: {
          eyebrow: "Le logiciel derrière la discipline",
          title: "Sales Unlocked est la discipline.",
          highlight: "Switch la met en œuvre sur chaque deal.",
          body: "Switch applique Sales Unlocked à vos vraies conversations clients, deal après deal. Il vous montre ce que vous savez, ce que vous supposez, ce qui manque — et ce que la prochaine conversation doit accomplir.",
          cta: "Découvrir Switch",
        },
        methodEyebrow: "La discipline",
        formatsEyebrow: "Trois façons de vivre la discipline",
        formatsTitle: "Lire la discipline. La maîtriser avec du coaching. L'adapter à votre entreprise.",
        formatsSubtitle: "Même discipline, trois niveaux de profondeur. Commencez là où vous en êtes.",
        closeBody:
          "Quinze minutes suffisent généralement pour le savoir — ou pour découvrir qu'aucune des deux n'est ce qu'il vous faut. Je vous le dirai franchement.",
        cycle: ["Apprendre la porte", "L'appliquer à un deal réel", "Se faire challenger en coaching"],
        // La méthode s'expose par l'argument, sans carte des portes.
        map: {
          title: "Gardez votre méthodologie.",
          highlight: "Voyez le deal autrement.",
          frameworks:
            "SPIN, MEDDIC, Challenger — ou votre propre playbook. SWITCH ne vous dit pas comment vendre.",
          origin: {
            start: "Elle part de ce qui fait réellement chaque vente : ",
            strong: "les conversations",
            end: ".",
          },
          elaboration: {
            reveal: {
              start: "Conversation après conversation, ",
              strong: "SWITCH",
              rest: " révèle ce qui a changé, ce qui manque, si une décision est réellement en train de se construire — et ce qui devrait se passer ensuite.",
            },
            closer: {
              plain: "Votre savoir-faire commercial. L'intelligence ",
              strong: "SWITCH",
              rest: ".",
            },
          },
          chain: ["Conversations", "Intelligence", "Décision"],
        },
        bookTitle: "Sales Unlocked — le livre",
        bookDesc:
          "Les 3 portes et le momentum, écrits sous forme de guide pratique : les questions à poser, les preuves à chercher, et comment lire un deal qui n'avance pas.",
        guidedDesc:
          "Cinq modules, des exercices appliqués à des deals réellement dans votre pipeline, et deux heures de coaching individuel. La plupart des clients voient l'impact dès leur appel suivant.",
        onsiteLabel: "La journée sur site",
        onsiteTagline: "Une formation qui ne s'arrête pas quand la journée s'arrête.",
        onsiteDesc:
          "La plupart des ateliers vous laissent une belle journée et un document. Celui-ci vous laisse un système. Le matin : la discipline Switch, enseignée en détail, appliquée à vos vrais deals. L'après-midi : on installe le logiciel qui est la discipline, dans votre entreprise, avec votre pipeline dedans. Ce que vous avez appris le mardi, votre équipe l'applique dès le mercredi.",
        // Ce qui est inclus, propre à Sales : remplace la liste on-site partagée.
        onsiteIncludes: [
          "La journée complète chez vous",
          "Trois mois d'abonnement gratuit au logiciel Switch pour une personne",
          "L'accès à ma communauté WhatsApp de plus de 400 personnes",
        ],
        // The shared on-site day describes the Startup diagnostic, so the Sales
        // day overrides it end to end: title, intro, timeline and outcomes.
        onsiteDay: {
          dayTitle: "De la méthode à votre réalité. En une journée.",
          intro: [
            "La plupart des formations s'arrêtent à la méthode. Cette journée va jusqu'à sa mise en œuvre.",
            "Le matin, vous apprenez SWITCH. Pas une série de techniques de vente, mais une autre façon de comprendre un deal : ce qu'il faut chercher dans chaque conversation, comment lire ce qui se passe réellement chez le client, ce qui fait avancer une d��cision — ou ce qui la bloque.",
            "L'après-midi, on passe à vos vrais deals. On installe SWITCH, on le configure avec votre contexte commercial et on travaille directement sur vos opportunités en cours. Vos conversations deviennent la matière première du système.",
            "À la fin de la journée, vous ne repartez pas avec une méthode à appliquer plus tard. Vous repartez avec SWITCH déjà en place, sur vos vrais deals, prêt à être utilisé dès le lendemain.",
          ],
          day: [
            {
              when: "Matin",
              heading: "Comprendre la méthode",
              desc: "On pose les fondations de SWITCH : comment lire une vente comme une succession de conversations et de décisions, plutôt que comme des étapes dans un pipeline. Vous apprenez ce qu'il faut comprendre, ce qu'il faut chercher et comment interpréter ce que vous dit — ou ne vous dit pas — un prospect.",
            },
            {
              when: "Après-midi",
              heading: "Installer le système",
              desc: "On configure SWITCH pour votre entreprise et votre façon de vendre. Puis on importe vos vrais deals et vos vraies conversations. On les analyse ensemble, on voit ce que le système révèle et comment il prépare la prochaine conversation.",
            },
          ],
          deliverableTitle: "À la fin de la journée",
          deliverable: [
            {
              heading: "Votre équipe maîtrise la logique SWITCH",
              desc: "Elle partage une même façon de lire et de conduire un deal.",
            },
            {
              heading: "Le logiciel est configuré",
              desc: "Avec votre contexte, votre savoir-faire commercial et vos règles.",
            },
            {
              heading: "Vos vrais deals sont déjà dedans",
              desc: "Pas de cas d'école : le système démarre avec votre réalité.",
            },
            {
              heading: "Vous pouvez l'utiliser dès le lendemain",
              desc: "Chaque nouvelle conversation nourrit le système et prépare la suivante.",
            },
          ],
        },
        crossTitle: "Les deals convertissent, mais l'entreprise reste fragile ?",
        crossBody: "C'est un problème de stratégie. Startup Unlocked est fait pour ça.",
        crossCta: "Découvrir Startup Unlocked",
      },
    },

    /** Détail de la journée sur site, partagé par les deux méthodes. */
    onsite: {
      eyebrow: "La journée sur site",
      dayTitle: "Quatre phases. Une convergence.",
      deliverableTitle: "Un livrable, pas un rapport.",
      forWhoTitle: "Pensée pour les dirigeants qui sentent qu'ils plafonnent.",
      includesTitle: "Ce qui est inclus",
      includes: [
        "Préparation en amont (questionnaire)",
        "La journée complète, chez vous",
        "La carte de votre système + le maillon faible",
      ],
      note: "Un investissement unique, sans abonnement ni engagement long. Vous repartez autonome, avec une direction claire.",
      day: [
        { when: "Matin", heading: "On cartographie le système", desc: "On parcourt les 8 domaines, un par un. Chaque rouage est noté — vert, orange, rouge — avec une justification écrite. À midi, vous avez une carte honnête de votre entreprise." },
        { when: "Midi", heading: "On isole la cause, pas le symptôme", desc: "On regarde les rouges et on remonte la chaîne. Un go-to-market en panne s'explique souvent par une cible floue en amont. On désigne le facteur limitant." },
        { when: "Après-midi", heading: "On descend dans le moteur", desc: "Le plus souvent, le maillon est commercial. On plonge dans vos vrais dossiers — vos propres deals — avec une grille de qualification. « Ça ne marche pas » devient « ça fuit exactement ici »." },
        { when: "Clôture", heading: "On repart avec une séquence", desc: "1 à 3 priorités ordonnées. Quoi réparer d'abord, ce que ça débloque, la première action concrète. Pas 34 chantiers — un chemin." },
      ],
      deliverable: [
        { heading: "La carte de votre système", desc: "Les 8 domaines scorés, en vert / orange / rouge, justifiés." },
        { heading: "Le maillon faible, identifié", desc: "Le facteur limitant, expliqué — et pourquoi c'est lui en premier." },
        { heading: "1 à 3 priorités séquencées", desc: "L'ordre de réparation, pas une liste de tout ce qui ne va pas." },
        { heading: "Un langage commun", desc: "Les 34 Elements : un vocabulaire pour piloter après la journée." },
      ],
      forWho: [
        { bold: "Dirigeants de PME et TPE,", text: "surtout en B2B, de quelques personnes à une cinquantaine." },
        { bold: "Une croissance qui stagne", text: "sans qu'on sache exactement où se trouve le frein." },
        { bold: "Trop de chantiers ouverts,", text: "et le sentiment de s'éparpiller sans avancer." },
        { bold: "Une journée sur site,", text: "avec vous — et 2 à 3 personnes clés si vous voulez embarquer l'équipe." },
      ],
    },

    about: {
      eyebrow: "À propos",
        title: "J'ai transformé 25 ans de terrain en un système et une discipline.",
      lead: "Pas un consultant qui a lu les livres. Un entrepreneur qui a fait les erreurs, puis a écrit ce qui marchait vraiment.",
      chapters: [
        {
          heading: "L'entrepreneur",
          body: "Cinq entreprises co-fondées. Deux exits, une introduction en bourse. Et aussi les échecs qu'on ne met pas sur une slide — l'excellent produit sans entreprise autour, le pipeline plein de leads qui ne convertissaient jamais. Les deux méthodes viennent directement de ces deux douleurs précises.",
        },
        {
          heading: "La Silicon Valley",
          body: "Dix-sept ans à construire dans la Valley. Ce que j'y ai appris n'est pas l'optimisme, c'est la rigueur : la discipline de décider, d'écrire la décision, et d'en rendre compte. Cette discipline est la colonne vertébrale des deux méthodes.",
        },
        {
          heading: "L'investisseur et le coach",
          body: "25 ans à investir en early-stage et à accompagner des entrepreneurs. Plus de 300 startups et entreprises accompagnées. Voir les mêmes erreurs se répéter sur des centaines d'entreprises, c'est ce qui a rendu les schémas impossibles à ignorer — et utiles à codifier.",
        },
        {
          heading: "Les deux méthodes",
          body: "Startup Unlocked pour l'entreprise qui ne tient pas debout. Sales Unlocked pour le pipeline qui ne convertit pas. Deux problèmes qu'on confond constamment, et qui demandent des outils complètement différents. Chacun existe désormais en livre, en programme accompagné et en journée sur site — chacun avec son logiciel pour continuer à l'appliquer.",
        },
      ],
      ctaTitle: "De laquelle avez-vous besoin ?",
      ctaStartup: "Startup Unlocked",
      ctaSales: "Sales Unlocked",
      ctaCall: "Réserver 15 minutes",
    },

    contact: {
      eyebrow: "Contact",
      title: "Parlons-en.",
      lead: "Quinze minutes suffisent généralement à savoir quelle méthode convient — ou si aucune ne convient. Je vous le dirai franchement.",
      callTitle: "Réserver un appel",
      callDesc: "Quinze minutes, sans préparation. Venez avec le problème qui vous gêne le plus.",
      callCta: "Ouvrir mon agenda",
      emailTitle: "M'écrire",
      emailDesc: "Vous préférez écrire d'abord ? Dites-moi où vous bloquez et je vous réponds personnellement.",
      diagnosticTitle: "Faire le diagnostic gratuit Startup Unlocked",
      diagnosticDesc:
        "Une auto-évaluation courte qui situe votre entreprise sur les 34 éléments. Elle appartient à Startup Unlocked — il n'y a pas de diagnostic pour Sales Unlocked.",
      diagnosticCta: "Lancer le diagnostic",
    },

    /** Bande de clôture des deux pages méthode, pour ne pas finir sur un bouton nu. */
    methodProof: {
      eyebrow: "Dans leurs mots",
    },

    methodClose: {
      eyebrow: "Par où commencer",
      title: "Vous hésitez sur le format ?",
      body: "Quinze minutes suffisent généralement pour le savoir — ou pour découvrir qu'aucune des deux méthodes n'est ce qu'il vous faut. Je vous le dirai franchement.",
    },
    sectionEyebrows: {
      pointOfView: "LA MÉTHODE 34 ELEMENTS",
      framework: "LE SYSTÈME",
      howWeWork: "COMMENT NOUS TRAVAILLONS",
      proof: "PREUVES",
      whoItsFor: "POUR QUI",
      aboutPierre: "À PROPOS DE PIERRE",
      programs: "PROGRAMMES",
    },
    hero: {
      eyebrow: "LA MÉTHODE 34 ELEMENTS",
      title: "Votre entreprise est un système. Nous trouvons ce qui est cassé",
      titleHighlight: "— avant que cela ne tue votre croissance.",
      subtitle: "Une startup performe au niveau de son élément le plus faible, pas le plus fort. Après 300 entreprises et 17 ans de création dans la Silicon Valley, j'ai codifié ce qui compte vraiment en 8 catégories et 34 éléments interconnectés. Nous les diagnostiquons tous. Puis nous corrigeons ceux qui font vraiment avancer les choses.",
      primaryCta: "Commencez avec un diagnostic gratuit de 15 min",
      secondaryCta: "Ou réservez un appel de 15 min avec Pierre",
    },
    pointOfView: {
      title: "La plupart des entrepreneurs font les mauvaises choses, magnifiquement.",
      body: [
        "L'éducation entrepreneuriale est obsédée par les tactiques — le comment. Elle enseigne rarement le quoi. Alors les entrepreneurs finissent par exécuter parfaitement une stratégie défaillante. Un excellent commercial avec une mauvaise stratégie ne sauve pas l'entreprise. Il accélère sa fin.",
        "Une startup est un système. Chaque élément interagit avec tous les autres. Vous pouvez avoir un excellent produit et échouer quand même parce que votre go-to-market est mal aligné avec votre acheteur, ou votre modèle économique contredit votre positionnement, ou la structure de votre équipe ne peut pas soutenir votre ambition.",
        "La plupart des conseillers regardent une seule pièce. Nous regardons le système entier.",
      ],
    },
    framework: {
      title: "Les 8 catégories. Les 34 éléments. Le système.",
      body: "Chaque entreprise repose sur les mêmes 8 catégories : Fondations, Valeur, Cible, Produit, Portée, Usage, Playbook, Scale. À l'intérieur se trouvent 34 éléments spécifiques qui déterminent si vous grandissez, stagnez ou échouez. La force de votre entreprise est la force de votre élément le plus faible — pas la moyenne.",
      caption: "La plupart des entreprises sont bonnes sur 6 ou 7 de ces éléments. Les 1 ou 2 autres les tuent silencieusement.",
    },
    howWeWork: {
      title: "Nous diagnostiquons d'abord. Toujours.",
      body: "Nous ne vendons pas un cours générique ou un package de coaching générique. Nous commençons par cartographier votre entreprise par rapport aux 34 éléments. Nous notons chacun d'eux. Nous trouvons les 2 ou 3 qui limitent tout le reste. Puis nous travaillons sur ceux-là — et seulement ceux-là.",
      steps: [
        {
          number: "1",
          title: "Diagnostiquer",
          desc: "Évaluez votre entreprise sur les 34 éléments (15 min, gratuit).",
        },
        {
          number: "2",
          title: "Décider",
          desc: "Lors d'une conversation en 1-on-1, nous identifions les 2 ou 3 éléments faibles qui comptent le plus maintenant.",
        },
        {
          number: "3",
          title: "Corriger",
          desc: "Via The Compass, The Switch, ou un conseil direct, nous reconstruisons ce qui est faible. Ni plus, ni moins.",
        },
      ],
    },
    proof: {
      quotes: [
        {
          text: "L'Académie 34 Elements a été une révolution dans ma vie d'entrepreneur. Pierre a changé notre vision des startups. Grâce à cette académie, nous avons changé notre modèle économique pour atteindre un marché 50 fois plus grand que notre marché initial.",
          author: "Liselotte Cousin",
          role: "CEO, Astuvet",
        },
        {
          text: "34 elements nous a aidés à gagner en clarté sur notre positionnement et notre produit. Pierre sait trouver les bons mots pour créer les déclics nécessaires.",
          author: "Caroline Mignaux",
          role: "CEO, ReachMaker",
        },
        {
          text: "Pierre vous force à faire des choix forts et à vous concentrer sur ce qui compte. C'est une approche pragmatique et sans détour. Ça commence par la vision stratégique, qu'on a tendance à oublier en étant trop focalisé sur le produit.",
          author: "Quentin Rousselot",
          role: "CEO, Agrove",
        },
        {
          text: "Si je devais choisir entre un MBA de 18 mois et le Bootcamp 34 Elements, je choisirais le second sans hésiter. En 30 jours, j'ai gagné en clarté, en méthode et en impact.",
          author: "Zaak Chalal",
          role: "CEO, Mobioos",
        },
        {
          text: "34 Elements est sans aucun doute le meilleur investissement que TeedUp ait jamais fait. Nous avons restructuré, trouvé la Core Action de notre app, et fait un micro-pivot du modèle économique.",
          author: "Simon Kuster",
          role: "CEO, TeedUp",
        },
        {
          text: "Plus qu'une formation ou un accélérateur, 34 Elements est un framework simple mais efficace. Malgré 10 ans d'entrepreneuriat, je vois les choses plus clairement, tout est plus simple, et je peux avancer à nouveau.",
          author: "Alexandre Touzet",
          role: "CEO, Better Ask Alex",
        },
      ],
      summary: "123 entrepreneurs. 25 cohortes. Une méthode.",
      cta: "Lire tous les témoignages",
    },
    whoItsFor: {
      title: "A qui s'adresse ce programme",
      body: "Ce n'est pas pour tout le monde. Cela fonctionne mieux pour les entrepreneurs qui soupconnent — ou savent — que leur stratégie est le problème, et qui sont prêts à la remettre en question.",
      buckets: [
        {
          title: "Entrepreneurs en levée de fonds.",
          desc: "Vous avez besoin de clarté sur le positionnement, le marché et le modèle économique avant que les investisseurs ne trouvent les failles que vous n'avez pas encore vues.",
          cta: "Commencez par le diagnostic",
          ctaHref: "https://diagnostic-34-elements.vercel.app/",
        },
        {
          title: "Entrepreneurs dont la croissance a stagné.",
          desc: "Vous aviez de la traction. Puis ca a ralenti. L'instinct est de pousser plus fort sur les ventes. La solution est généralement en amont.",
          cta: "Commencez par le diagnostic",
          ctaHref: "https://diagnostic-34-elements.vercel.app/",
        },
        {
          title: "Entrepreneurs qui vendent mal malgré de bons leads.",
          desc: "Le produit fonctionne, le marché est réel, mais les conversations ne convertissent pas. Le problème est rarement les compétences commerciales. C'est le positionnement, l'urgence et le timing.",
          cta: "Commencez par The Switch",
          ctaHref: "/sales-unlocked#formats",
        },
      ],
    },
    whoAmI: {
      title: "Qui suis-je ?",
      credentials: [
        "Entrepreneur & investisseur",
        "2 sorties et 1 IPO",
        "17 ans passés dans la Silicon Valley",
        "General Partner d'un fonds d'investissement à San Francisco",
        "300 startups et entreprises accompagnées",
        "Auteur de Startup Unlocked",
      ],
      spotlight: {
        title: "Vous pensez être sur la bonne voie ? Vérifions.",
        description:
          "Répondez à 27 questions ciblées et obtenez des insights instantanés, un score et des recommandations — en moins de 15 minutes.",
      },
      cta: "Votre 1er diagnostic",
    },
    aboutPierre: {
      title: "La personne derrière la méthode",
      body: [
        "J'ai passé 17 ans dans la Silicon Valley en tant qu'entrepreneur, business angel et General Partner d'un fonds early-stage. Deux exits, une IPO, 300 entreprises conseillées.",
        "Mais les credentials ne sont pas le sujet. Le sujet, c'est ce que j'ai fait de ce que j'ai appris. Après avoir vu des centaines d'entrepreneurs faire les mêmes erreurs dans le même ordre, j'ai codifié ce travail en un système : 8 catégories, 34 éléments, et une méthode pour diagnostiquer n'importe quelle entreprise sur tous ces points en moins d'une heure.",
        "Ce système est devenu un livre — Startup Unlocked. Il est devenu un diagnostic logiciel. Il est devenu la méthodologie derrière The Compass et The Switch. Et c'est le prisme à travers lequel je travaille avec chaque entrepreneur que j'accompagne.",
      ],
      ctas: {
        book: "Lire le livre",
        diagnostic: "Faire le diagnostic",
        call: "Réserver un appel",
      },
    },
    programs: {
      title: "Si le diagnostic montre où corriger, voici comment nous le faisons.",
      compass: {
        title: "The Compass",
        desc: "Pour les entrepreneurs dont la faiblesse se situe dans la stratégie : vision, proposition de valeur, positionnement, cible, modèle économique, go-to-market. 10 modules, 4 heures de coaching 1-on-1, en anglais ou français. Le livrable est une stratégie défendue — pas un slide deck.",
        cta: "En savoir plus",
      },
      switch: {
        title: "The Switch",
        desc: "Pour les entrepreneurs dont la faiblesse se situe dans la conversion : comment vous vendez, comment vous créez l'urgence, comment vous guidez la décision. 5 modules, 2 heures de coaching 1-on-1. La plupart des clients voient l'impact dès leur prochain appel.",
        cta: "En savoir plus",
      },
      notSure: "Pas sûr lequel choisir ?",
      diagnosticCta: "Le diagnostic vous le dira.",
    },
    numbers: {
      title: "Nos Chiffres",
      statement: "300 entreprises diagnostiquées. 25 cohortes. 400+ entrepreneurs transformés. Une seule méthode derrière tout cela.",
    },
    compass: {
      eyebrow: "The Compass",
      title: "Gagnez en clarté",
      highlight: "— avancez dans la bonne direction",
      lead: "Diagnostiquez votre entreprise, définissez une trajectoire claire et accélérez votre croissance.",
      body: "The Compass est conçu pour vous aider à gagner en clarté stratégique, prendre de meilleures décisions et aligner votre entreprise avec ce qui compte vraiment. Vous explorerez 10 mouvements stratégiques essentiels — ceux qui façonnent votre chemin, attirent les bonnes personnes et vous aident à grandir sans perdre votre cap.",
      cta: "Plus d'informations",
      cohortNote: "Les places sont limitées",
      features: [
        { title: "10 Thèmes Clés", desc: "Concentrez votre réflexion là où ça compte le plus." },
        { title: '10 Sessions "Deep Dive"', desc: "30 minutes chacune avec des cadres pratiques." },
        { title: "10 Sessions Individuelles", desc: "15 minutes pour challenger et affiner vos idées." },
        { title: "Replays Illimités", desc: "Toutes les vidéos du Bootcamp disponibles à tout moment." },
        { title: "Accès Communauté", desc: "Groupe WhatsApp + communauté Circle." },
      ],
    },
    switch: {
      eyebrow: "The Switch",
      title: "Transformez chaque conversation en client",
      highlight: "— réinventez votre façon de vendre",
      lead: "Doublez votre taux de conversion en construisant la stratégie au fil de la conversation.",
      body: "The Switch est conçu pour transformer votre façon de vendre — de l'intérieur. Vous travaillerez sur 5 thèmes essentiels, chacun déverrouillant un changement clé dans votre présence, votre connexion et votre closing.",
      cta: "Plus d'informations",
      features: [
        { title: "5 Thèmes Clés", desc: "Thèmes essentiels pour une approche commerciale moderne." },
        { title: '5 Sessions "Deep Dive"', desc: "30 minutes chacune pour vous donner une méthode claire." },
        { title: "5 Sessions Individuelles", desc: "15 minutes pour tester votre approche." },
        { title: "Replays Illimités", desc: "Toutes les vidéos du Bootcamp disponibles à tout moment." },
        { title: "Accès Communauté", desc: "Groupe WhatsApp + communauté Circle." },
      ],
    },
    whoWeWorkWith: {
      title: "Avec qui nous travaillons chez 34 Elements",
      startups: "Startups",
      smes: "PME",
      startupsItems: [
        {
          title: "Début de Projet",
          desc: "Petite équipe, produit en cours, besoin de poser les bonnes fondations.",
          program: "Programme : The Compass",
        },
        {
          title: "Croissance en Pause",
          desc: "Clients en place mais croissance stagnante. Il est temps de revoir la stratégie et prendre du recul.",
          program: "Programme : The Compass",
          program2: "puis The Switch",
        },
        {
          title: "Scale",
          desc: "Lancement d'une nouvelle offre avec une méthode solide et éprouvée.",
          program: "Programme : The Compass",
        },
        {
          title: "Ventes à Améliorer",
          desc: "Cible claire, mais l'exécution commerciale doit être améliorée.",
          program: "Programme : The Switch",
        },
      ],
      smesItems: [
        {
          title: "Perspective Nouvelle",
          desc: "Vous voulez un diagnostic approfondi, façon Silicon Valley, pour débloquer plus de résultats.",
          program: "Programme : The Compass",
        },
        {
          title: "Mieux Vendre",
          desc: "Boostez vos performances commerciales sans tout reconstruire à partir de zéro.",
          program: "Programme : The Switch",
        },
      ],
    },
    compassPage: {
      waitlist: {
        badge: "Bientôt disponible",
        title: "Compass 34 application gives you the clearest path forward — every single week.",
        subtitle: "Be first to try it.",
        cta: "Join the Waitlist",
      },
      hero: {
        title: "Construire un Produit, c'est la Moitié du Travail",
        subtitle: "Construisez aussi l'Entreprise",
      },
      fourWays: {
        title: "The Compass délivre",
        hours: "4 heures",
        titleEnd: "de coaching individuel",
        subtitle: "Gagnez en clarté — avancez dans la bonne direction",
        description: "Diagnostiquez votre entreprise, définissez un cap clair et accélérez votre croissance.",
        workshop: {
          title: "Atelier",
          points: [
            "10 vidéos",
            "Une puissante session de coaching High-Impact de 4 heures pour revoir tous les apprentissages en contexte.",
            "Accès communauté",
          ],
        },
        bootcamp: {
          title: "Bootcamp",
          points: [
            "10 sessions méthodologiques en direct",
            "Un entretien individuel de 10-15 minutes après chaque sujet pour appliquer The Compass directement à votre startup.",
            "10 masterclasses de cohorte pour partager et affiner",
            "Accès communauté",
          ],
        },
        book: {
          title: "Livre – Startup Unlocked",
          desc: "Un guide pratique et direct qui vous accompagne à travers les principes de The Compass avec des exemples, des checklists et des insights actionnables.",
        },
        software: {
          title: "Logiciel – Compass34",
          desc: "Votre co-pilote stratégique permanent : suivez les diagnostics, suivez les recommandations et gardez votre équipe alignée semaine après semaine.",
        },
      },
      howItWorks: {
        title: "Comment ça fonctionne",
        description:
          "Ce n'est pas un cours où vous consommez passivement du contenu. C'est un processus stratégique structuré avec un accompagnement expert à chaque étape critique.",
        threeStepCycle: {
          title: "Le Cycle en Trois Étapes",
          steps: [
            {
              title: "Regardez les Vidéos",
              desc: "Chaque module de 40 minutes vous livre les frameworks, les modèles mentaux et l'approche stratégique pour un sujet essentiel. Pas de superflu, pas de théorie pour la théorie — juste la méthodologie dont vous avez besoin pour prendre de meilleures décisions.",
            },
            {
              title: "Faites les Exercices",
              desc: "Appliquez ce que vous avez appris à votre entreprise spécifique. Ce ne sont pas des fiches de travail — ce sont des artefacts stratégiques. Une déclaration de positionnement. Un profil client cible. Une stratégie de prix. De vraies décisions qui façonneront votre entreprise.",
            },
            {
              title: "Sessions de Coaching",
              desc: "Vous arrivez préparé avec votre travail. Je challenge vos hypothèses, repère les angles morts, teste votre logique. Nous ne perdons pas de temps en explications — chaque minute est consacrée à affiner votre stratégie jusqu'à ce qu'elle soit assez précise pour être exécutée.",
            },
          ],
        },
        coachingHours: {
          title: "Les 4 Heures de Coaching",
          description:
            "Les 10 modules sont regroupés en 4 sessions de coaching, chacune se concentrant sur des thèmes stratégiques liés :",
          hours: [
            { title: "Heure 1", desc: "(Vidéos 1 & 2)" },
            { title: "Heure 2", desc: "(Vidéos 3, 4 & 5)" },
            { title: "Heure 3", desc: "(Vidéos 6, 7 & 8)" },
            { title: "Heure 4", desc: "(Vidéos 9 & 10)" },
          ],
        },
        whyItWorks: {
          title: "Pourquoi Cette Séquence Fonctionne",
          description:
            "Vous n'apprenez pas en isolation. Chaque heure de coaching s'appuie sur le travail précédent pendant que la réflexion est encore fraîche. Vous recevez du feedback au moment où ça compte le plus — pendant que vous formez encore la stratégie, pas après vous être déjà engagé sur le mauvais chemin.",
          conclusion:
            "Les vidéos vous donnent la méthode. Les exercices vous forcent à réfléchir. Le coaching s'assure que vous ne vous leurrez pas.",
        },
      },
      powerSteps: {
        title: "Vos 10 étapes essentielles",
        steps: [
          {
            title: "Définir Votre Vision",
            desc: "Créez une vision claire et inspirante qui unit votre équipe et attire les croyants.",
          },
          {
            title: "Façonner Votre Proposition de Valeur",
            desc: "Alignez votre offre avec les vrais besoins du marché pour créer une pertinence indéniable.",
          },
          {
            title: "Se Démarquer dans un Marché Encombré",
            desc: "Différenciez-vous quand tout le monde dit la même chose.",
          },
          {
            title: "Repenser Votre Utilisateur",
            desc: "Identifiez votre véritable utilisateur et adaptez votre produit à sa réalité.",
          },
          {
            title: "Partager Votre Culture",
            desc: "Communiquez vos valeurs pour attirer et retenir les bonnes personnes.",
          },
          {
            title: "Segmenter avec Intention",
            desc: "Découpez votre marché stratégiquement tout en construisant un plan de croissance à long terme.",
          },
          {
            title: "Concevoir Votre Go-to-Market",
            desc: "Alignez produit, timing et message pour un lancement stratégique qui dure.",
          },
          {
            title: "Innover Votre Modèle d'Affaires",
            desc: "Rendez votre modèle aussi distinctif et résilient que votre produit.",
          },
          {
            title: "Construire la Bonne Équipe",
            desc: "Sachez qui embaucher, quand les embaucher et pour quel rôle.",
          },
          {
            title: "Mesurer Ce Qui Compte",
            desc: "Suivez les bonnes métriques pour avancer plus vite et réduire les risques.",
          },
        ],
      },
      pricing: {
        title: "Tarifs",
        subtitle: "Choisissez le format qui correspond à votre situation actuelle.",
        note: "Tout est disponible en anglais et en français",
        book: {
          title: "Livre — Startup Unlocked",
          price: "26 €",
          desc: "Guide pratique et direct vers The Compass.",
          cta: "Acheter le livre",
        },
        workshop: {
          title: "Atelier",
          price: "1 450 €",
          points: [
            "10 vidéos",
            "Une puissante session de coaching High-Impact de 4 heures pour revoir tous les apprentissages en contexte",
            "Accès à la communauté",
          ],
          ctaEn: "Atelier — English",
          ctaFr: "Atelier — Français",
        },
        bootcamp: {
          title: "Bootcamp",
          price: "3 500 €",
          points: [
            "10 sessions de méthodologie en direct",
            "Revue 1:1 de 10 à 15 min après chaque thème",
            "10 masterclasses de cohorte",
            "Accès à la communauté",
          ],
          cta: "Rejoindre le Bootcamp",
        },
        compass34: {
          title: "Compass34",
          price: "19 €",
          perMonth: "/ mois",
          desc: "Logiciel de copilote stratégique pour suivre les diagnostics et garder votre équipe alignée.",
          cta: "Démarrer Compass34",
        },
      },
      schedule: {
        badge: "Calendrier",
        title: "Un Calendrier Flexible",
        subtitle:
          "Vous choisissez votre rythme, mais nous planifions les 4 sessions à l'avance avant de commencer. Cela crée la discipline dont vous avez besoin pour vraiment terminer. La plupart des gens ne manquent pas d'idées — ils manquent de structure. Nous l'intégrons d��s le premier jour.",
        legend: {
          workshop: "Atelier",
          workshopDesc: "Méthode Power en Vidéos",
          bootcamp: "Bootcamp",
          bootcampDesc: "Méthode Power en direct",
        },
        week1: "Semaine 1",
        week2: "Semaine 2",
      },
    },
    switchPage: {
      waitlist: {
        badge: "Bientôt disponible",
        title: "Switch34 vous donne le playbook — prospect par prospect, deal par deal.",
        subtitle: "Soyez le premier à l'essayer.",
        cta: "Rejoindre la liste d'attente",
      },
      hero: {
        title: "Les Leads ne Paient pas les Factures, les Conversions Oui.",
      },
      threeWays: {
        title: "The Switch délivre",
        hours: "2 heures",
        titleEnd: "de coaching\u00A01‑on‑1",
      },
      howItWorks: {
        title: "Comment ça fonctionne",
        description:
          "Ce n'est pas un cours où vous consommez passivement du contenu. C'est un processus stratégique structuré avec un accompagnement expert à chaque étape critique.",
        threeStepCycle: {
          title: "Le Cycle en Trois Étapes",
          steps: [
            {
              title: "Regardez les Vidéos",
              desc: "Chaque module vous livre les frameworks, les modèles mentaux et l'approche stratégique pour un sujet de vente essentiel. Pas de superflu, pas de théorie pour la théorie — juste la méthodologie dont vous avez besoin pour conclure plus de ventes.",
            },
            {
              title: "Faites les Exercices",
              desc: "Appliquez ce que vous avez appris à votre processus de vente spécifique. Ce ne sont pas des fiches de travail — ce sont des artefacts stratégiques. Un framework de qualification. Un script de gestion des objections. Une strat��gie de closing. De vraies décisions qui façonneront vos conversions.",
            },
            {
              title: "Sessions de Coaching",
              desc: "Vous arrivez préparé avec votre travail. Je challenge vos hypothèses, repère les angles morts, teste votre logique. Nous ne perdons pas de temps en explications — chaque minute est consacrée à affiner votre stratégie de vente jusqu'à ce qu'elle soit assez précise pour être exécutée.",
            },
          ],
        },
        coachingHours: {
          title: "Les 2 Heures de Coaching",
          description:
            "Les 5 modules sont regroupés en 2 sessions de coaching, chacune se concentrant sur des thèmes stratégiques liés :",
          hours: [
            { title: "Heure 1", desc: "(Vidéos 1, 2 & 3)" },
            { title: "Heure 2", desc: "(Vidéos 4 & 5)" },
          ],
        },
        whyItWorks: {
          title: "Pourquoi Cette Séquence Fonctionne",
          description:
            "Vous n'apprenez pas en isolation. Chaque heure de coaching s'appuie sur le travail précédent pendant que la réflexion est encore fraîche. Vous recevez du feedback au moment où ça compte le plus — pendant que vous formez encore la stratégie, pas après vous être déjà engagé sur le mauvais chemin.",
          conclusion:
            "Les vidéos vous donnent la méthode. Les exercices vous forcent à réfléchir. Le coaching s'assure que vous ne vous leurrez pas.",
        },
      },
      powerSteps: {
        title: "Vos 5 étapes essentielles",
        steps: [
          {
            title: "Être Vu",
            desc: "Comment être captivant, crédible et inciter les prospects à l'action. Apprenez à occuper le devant de la scène et à les faire pencher vers vous.",
          },
          {
            title: "Qualifier avec Intention",
            desc: "Comment découvrir les vrais besoins et orienter la conversation vers la valeur — pas seulement les fonctionnalités.",
          },
          {
            title: "Repérer la Vraie Urgence",
            desc: "Comment reconnaître (et créer) le moment parfait pour présenter votre solution.",
          },
          {
            title: "Délivrer de la Valeur avec Impact",
            desc: "Comment présenter votre offre d'une manière irrésistible, mémorable et impossible à ignorer.",
          },
          {
            title: "Naviguer dans la Décision",
            desc: 'Comment guider les prospects vers un "oui" clair, confiant et rapide.',
          },
        ],
      },
      pricing: {
        title: "Tarifs",
        note: "Tout est disponible en anglais et en français",
        workshop: {
          title: "Atelier",
          price: "725 €",
          points: [
            "5 vidéos",
            "Une puissante session de coaching High-Impact de 2 heures pour revoir tous les apprentissages en contexte",
            "Accès à la communauté",
          ],
          ctaEn: "Atelier — English",
          ctaFr: "Atelier — Français",
        },
        bootcamp: {
          title: "Bootcamp",
          price: "1 750 €",
          points: [
            "5 sessions de méthodologie en direct",
            "Une revue individuelle de 10 à 15 minutes après chaque thème pour appliquer The Switch directement à votre startup.",
            "5 masterclasses de cohorte pour partager et affiner",
            "Accès à la communauté",
          ],
          cta: "Rejoindre le Bootcamp",
        },
        switch34: {
          title: "Switch34",
          badge: "Bientôt disponible",
          desc: "Logiciel de copilote stratégique pour suivre les diagnostics et garder votre équipe alignée.",
          cta: "Être notifié",
        },
      },
      schedule: {
        title: "Un Calendrier Flexible",
        subtitle:
          "Vous choisissez votre rythme, mais nous planifions les 2 sessions à l'avance avant de commencer. Cela crée la discipline dont vous avez besoin pour vraiment terminer. La plupart des gens ne manquent pas d'idées — ils manquent de structure. Nous l'intégrons dès le premier jour.",
      },
    },
    bookPage: {
      hero: {
        title: "Le Livre",
      },
      intro: {
        text: "Vous êtes entrepreneur, que ce soit votre première startup ou non. Vous avez des questions :",
        questions: [
          "Est-ce que je prends les bonnes actions ?",
          "Pourquoi chaque client est-il si difficile à convaincre ?",
          "Ai-je ciblé le bon marché ?",
          "Pourquoi ne sommes-nous pas considérés comme une priorité ?",
          "Pourquoi les investisseurs ne répondent-ils pas ?",
          "Quel est le bon prix ?",
        ],
      },
      description: {
        p1: "Ce livre n'est pas un énième guide sur le lancement d'une startup – il en existe déjà beaucoup. C'est une méthode d'introspection applicable à n'importe quelle étape de votre parcours entrepreneurial.",
        p2: "Vous revisiterez les décisions cl��s qui ont façonné votre entreprise et découvrirez si des aspects critiques ont été négligés ou sous-estimés.",
      },
      outcomes: {
        title: "Après avoir lu ce livre, vous serez capable de :",
        items: [
          "Initier des changements significatifs, parfois profondément transformateurs",
          "Identifier ce qui a été mal exécuté",
          "Gagner en clarté et prioriser efficacement",
        ],
      },
      author: {
        text: "Cette méthode provient de mon expérience : cofondateur de 3 startups (1 IPO, 2 acquisitions), 17 ans à San Francisco, et maintenant General Partner dans un fonds qui a investi dans plus de 50 startups. J'ai pris le temps de transformer cette expérience en expertise, et ce livre en est le résultat.",
      },
      card: {
        title: "Startup Unlocked",
        description:
          "Une méthode d'introspection pratique pour revisiter vos décisions clés et retrouver la clarté à n'importe quelle étape.",
        features: [
          "Cadres actionnables, indépendants du stade de développement",
          "Construit à partir d'une expérience réelle d'entrepreneur et d'investisseur",
        ],
        ctaEn: "Acheter le livre en anglais",
        ctaFr: "Acheter le livre en français",
      },
    },
    testimonialsPage: {
      hero: {
        eyebrow: "Preuves",
        title: "Ce que disent les entrepreneurs, le travail fait.",
        subtitle:
          "Sans sélection ni retouche. Tous ceux qui ont suivi une méthode, dans leurs mots.",
      },
      filters: {
        method: "Méthode",
        all: "Toutes les méthodes",
        startup: "Startup Unlocked",
        sales: "Sales Unlocked",
        search: "Recherche",
        searchPlaceholder: "Nom ou entreprise…",
        clear: "Réinitialiser",
        // clés héritées
        program: "Programme",
        cohort: "Cohorte #",
        allCohorts: "Toutes les cohortes",
      },
      showing: "Affichage de",
      of: "sur",
      testimonialsText: "témoignages",
      empty: "Aucun témoignage ne correspond à vos filtres.",
      cohortLabel: "Cohorte",
      badgeStartup: "Stratégie",
      badgeSales: "Vente",
    },
    cookies: {
      message:
        "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et mémoriser vos préférences. Vous pouvez accepter tous les cookies ou continuer avec seulement les essentiels.",
      policy: "Pour plus de détails, consultez notre",
      privacyLink: "Politique de Confidentialité",
      rejectBtn: "Essentiels uniquement",
      acceptBtn: "Tout accepter",
    },
    seminarPage: {
      hero: {
        eyebrow: "Séminaire de diagnostic · sur sélection",
        title: "Deux jours pour voir ce que vous ne pouvez",
        titleHighlight: "plus voir seul.",
        lead: "Un cabinet de diagnostic collectif pour 10 à 15 entrepreneurs choisis. Pas de slides. Pas de théorie. Votre entreprise mise à nu comme un système — pour isoler le seul point qui la freine vraiment.",
        cta: "Candidater à une session",
        note: "Une journée et demie ne suffira pas à apprendre la méthode. Elle suffira à trouver votre point de blocage.",
      },
      constat: {
        eyebrow: "Le constat",
        title: "Vous êtes le seul élément constant de votre entreprise. C'est pour ça que vous ne voyez plus la panne.",
        lead: "La technologie évolue, les clients changent d'avis, la concurrence se déplace, l'équipe se transforme. Tout bouge — sauf vous. À force de vivre à l'intérieur du système, on finit par confondre le symptôme et la cause. Le vrai problème reste là où personne ne va le chercher : dans la tête du entrepreneur, jamais formulé.",
      },
      system: {
        eyebrow: "L'idée",
        title: "Une entreprise est un système. Elle ne casse pas par une pièce — elle casse par une interaction.",
        lead: "Huit catégories, trente-quatre éléments, emboîtés comme des engrenages. Un Target mal résolu déraille le pricing, qui déraille la go-to-market, qui déraille la rétention. La cascade est silencieuse, et elle est partout.",
        categories: [
          { num: "01", title: "Foundations", desc: "Founders, raison d'être, vision, équipe, culture." },
          { num: "02", title: "Value", desc: "Problème, concurrence, point de vue, proposition de valeur." },
          { num: "03", title: "Target", desc: "Positionnement, segment de marché, timing." },
          { num: "04", title: "Product", desc: "Vision produit, roadmap, barrière à l'entrée, expérience." },
          { num: "05", title: "Reach", desc: "Go-to-market, distribution." },
          { num: "06", title: "Usage", desc: "Adoption, rétention, monétisation." },
          { num: "07", title: "Playbook", desc: "Analytics, pilotage par la preuve." },
          { num: "08", title: "Scale", desc: "Financement, changement d'échelle." },
        ],
        pullQuote: "La bonne question n'est jamais « quel engrenage est faible ? » mais",
        pullHighlight: "« lequel, une fois réparé, débloque tous les autres ? »",
      },
      notThis: {
        eyebrow: "À mettre au clair",
        title: "Ce que ce séminaire n'est pas.",
        items: [
          {
            strike: "Une formation",
            heading: "Vous ne venez pas apprendre.",
            desc: "Vous venez diagnostiquer votre propre entreprise, avec une méthode éprouvée sur des centaines de startups. Ce qui repart avec vous, ce sont des conclusions sur votre cas — pas des concepts.",
          },
          {
            strike: "Un défilé de slides",
            heading: "Le seul support, c'est votre boîte.",
            desc: "Pas de deck à suivre. On travaille sur vos chiffres, vos deals, votre positionnement réel. La salle est un atelier, pas un amphi.",
          },
          {
            strike: "Du networking",
            heading: "C'est un conseil de pairs.",
            desc: "Dix à quinze entrepreneurs au même stade, qui se challengent sans complaisance et avec un langage commun. Personne n'est là pour vous flatter.",
          },
        ],
      },
      days: {
        eyebrow: "Le déroulé",
        title: "Deux jours, un seul objectif : isoler votre facteur limitant.",
        day1: {
          tag: "Jour 1",
          heading: "Cartographier le système, localiser la cassure.",
          desc: "On rend votre entreprise lisible, puis on cherche où ça grince.",
          items: [
            "Vous scorez vos 8 catégories sur trois axes : explicite, cohérent, prouvé.",
            "Vos pairs vous challengent, question après question, pour séparer ce que vous affirmez de ce que vos preuves montrent.",
            "Vous tracez les interactions qui ne s'emboîtent plus — la cascade cachée.",
            "Vous formulez une première hypothèse : votre facteur limitant.",
          ],
        },
        day2: {
          tag: "Jour 2",
          heading: "Mettre l'hypothèse à l'épreuve, repartir avec un plan.",
          desc: "On vérifie que vous traitez la cause, pas le symptôme.",
          items: [
            "La cohorte pressure-teste votre diagnostic en séance — sans filtre.",
            "On descend du symptôme à la cause racine, avec des questions à deux niveaux.",
            "On transforme la conclusion en une expérience testable, pas en une réponse de plus.",
            "Vous repartez avec un rituel de diagnostic continu — pour ne plus piloter à l'aveugle.",
          ],
        },
      },
      outcomes: {
        eyebrow: "Ce que vous emportez",
        title: "Quatre choses concrètes, le soir du deuxième jour.",
        items: [
          { num: "01", heading: "Votre facteur limitant, isolé.", desc: "Le seul point qui contraint votre croissance aujourd'hui ��� nommé, formulé, partagé." },
          { num: "02", heading: "Votre croyance la plus risquée.", desc: "L'hypothèse sur laquelle tout repose, prête à être testée plutôt que supposée." },
          { num: "03", heading: "Un rituel de diagnostic continu.", desc: "Une cadence pour re-scorer votre système et détecter la dérive avant qu'elle ne coûte." },
          { num: "04", heading: "Une poignée de pairs.", desc: "Des entrepreneurs qui connaissent désormais votre système — et qui vous tiennent." },
        ],
      },
      forWho: {
        eyebrow: "Pour qui",
        title: "Petit par exigence, pas par confort.",
        lead: "Le diagnostic entre pairs n'a de valeur que si les pairs se comprennent. C'est pourquoi chaque cohorte est petite, choisie, et homogène en stade. Vous candidatez ; je sélectionne.",
        facts: [
          { key: "10–15", value: "entrepreneurs par session, pas un de plus. La taille protège la profondeur." },
          { key: "Même stade", value: "cohorte calibrée pour que le diagnostic entre pairs soit juste et utile." },
          { key: "2 jours", value: "en présentiel, intensifs, sans demi-mesure ni temps mort." },
          { key: "Sur dossier", value: "une préparation est envoyée en amont : on n'utilise pas le temps de salle à collecter des données." },
        ],
      },
      author: {
        name: "Animé par Pierre Gaubil",
        role: "Fondateur de 34 Elements",
        bio: "25 ans d'entrepreneuriat, de business angel et de General Partner en fonds early-stage, dont plusieurs années en Californie. Créateur du cadre des 34 Elements, mis à l'épreuve sur des centaines de startups en transformation. Sa m��thode n'enseigne pas ce qu'il faut penser — elle apprend à se diagnostiquer en continu, comme un médecin suit un patient dans le temps.",
        book: "Auteur de",
        bookTitle: "Startup Unlocked — The No-Nonsense Method to Fix What's Holding You Back.",
      },
      finalCta: {
        title: "Vous savez que quelque chose bloque.",
        titleHighlight: "Venez le nommer.",
        desc: "Les sessions sont volontairement petites et sur sélection. Déposez votre candidature pour la prochaine cohorte.",
        button: "Déposer ma candidature",
      },
      pricing: {
        eyebrow: "Tarifs",
        title: "Investissez dans la clarté.",
        earlyBird: {
          tag: "Early Bird",
          price: "2 800 €",
          desc: "Les 6 premières inscriptions",
        },
        normal: {
          tag: "Tarif normal",
          price: "3 200 €",
          desc: "Tarif standard",
        },
        includes: "Inclut 2 jours de séminaire intensif, tous les supports, les déjeuners et le suivi.",
      },
    },
    diagnosticPage: {
      hero: {
        eyebrow: "Diagnostic sur site · Une journée",
        title: "Votre entreprise est un système. En un jour, on trouve le",
        titleHighlight: "rouage",
        titleEnd: "qui la bloque.",
        lead: "Un diagnostic structuré, domaine par domaine. À la fin de la journée : pas une liste de 34 problèmes, mais la séquence de réparation du maillon qui compte vraiment.",
        cta: "Réserver ma journée",
        ctaSecondary: "Voir le déroulé",
        price: "1 900 € HT",
        priceNote: "tout compris, hors frais de déplacement",
        systemCap: "Les 8 domaines — un seul vous bloque",
        weakFlag: "↑ le maillon faible que la journée révèle",
      },
      constat: {
        eyebrow: "Le constat",
        title: "Vous ne manquez pas de problèmes. Vous manquez de",
        titleHighlight: "priorités.",
        body: "La plupart des dirigeants connaissent les soucis de leur entreprise. Le piège, c'est de vouloir tout réparer en même temps — et de ne rien faire avancer. Une entreprise est une chaîne : un seul maillon faible bloque l'ensemble.",
        quote: "Améliorer tout, c'est n'améliorer rien.",
        bodyAfter: "L'objectif de la journée n'est pas d'inventorier ce qui cloche. C'est de trouver le facteur limitant à la cause, pas le symptôme — et d'ordonner sa réparation.",
      },
      method: {
        eyebrow: "La méthode",
        title: "On regarde votre entreprise comme un système de 8 domaines.",
        lead: "Chacun est un rouage. On les passe tous en revue, on note ce qui tourne et ce qui grince — puis on remonte la chaîne jusqu'au rouage qui en bloque d'autres.",
      },
      day: {
        eyebrow: "La journée",
        title: "Quatre temps. Une convergence.",
        steps: [
          { when: "Matin", tag: "Compass · le balayage", heading: "On cartographie le système", desc: "On parcourt les 8 domaines, un par un. Chaque rouage est noté — vert, orange, rouge — avec une justification écrite. À midi, vous avez une carte honnête de votre entreprise." },
          { when: "Midi", tag: "Le maillon faible", heading: "On isole la cause, pas le symptôme", desc: "On regarde les rouges et on remonte la chaîne. Un go-to-market en panne s'explique souvent par une cible floue en amont. On désigne le facteur limitant." },
          { when: "Après-midi", tag: "Switch · la plongée", heading: "On descend dans le moteur", desc: "Le plus souvent, le maillon est commercial. On plonge dans vos vrais dossiers — vos propres deals — avec une grille de qualification. « Ça ne marche pas » devient « ça fuit exactement ici »." },
          { when: "Clôture", tag: "La roadmap", heading: "On repart avec une séquence", desc: "1 à 3 priorités ordonnées. Quoi réparer d'abord, ce que ça débloque, la première action concrète. Pas 34 chantiers — un chemin." },
        ],
      },
      deliverable: {
        eyebrow: "Ce que vous repartez avec",
        title: "Un livrable, pas un compte rendu.",
        items: [
          { heading: "La carte de votre système", desc: "Les 8 domaines scorés, en vert / orange / rouge, justifiés." },
          { heading: "Le maillon faible, identifié", desc: "Le facteur limitant, expliqué — et pourquoi c'est lui en premier." },
          { heading: "1 à 3 priorités séquencées", desc: "L'ordre de réparation, pas une liste de tout ce qui ne va pas." },
          { heading: "Un langage commun", desc: "Les 34 Elements : un vocabulaire pour piloter après la journée." },
        ],
      },
      forWho: {
        eyebrow: "Pour qui",
        title: "Pensé pour les dirigeants qui sentent que ça plafonne.",
        items: [
          { bold: "Dirigeants de PME et TPE,", text: "surtout en B2B, de quelques personnes à une cinquantaine." },
          { bold: "Une croissance qui stagne", text: "sans qu'on sache exactement où se trouve le frein." },
          { bold: "Trop de chantiers ouverts,", text: "et le sentiment de s'éparpiller sans avancer." },
          { bold: "Une journée sur site,", text: "avec vous — et 2 à 3 personnes clés si vous voulez embarquer l'équipe." },
        ],
      },
      offer: {
        eyebrow: "L'offre",
        title: "Diagnostic de votre entreprise.",
        cardTitle: "Une journée sur site",
        cardSub: "Compass le matin · Switch l'après-midi",
        price: "1 900",
        priceUnit: "€ HT",
        features: [
          "Préparation en amont (questionnaire + chiffres clés)",
          "La journée complète, chez vous",
          "La carte de votre système + le maillon faible",
        ],
        cta: "Réserver ma journée",
        sideText: "Un investissement unique, sans abonnement ni mission longue. Vous repartez autonome, avec une direction claire.",
        sideQuote: "Le coût d'une journée. La valeur d'une décision prise au bon endroit.",
        sideNote: "Un point de suivi à 30 jours est possible, si vous le souhaitez.",
      },
      animator: {
        eyebrow: "Qui anime",
        title: "Pierre, fondateur de 34 Elements.",
        body: "25 ans d'entrepreneuriat, d'investissement early-stage et d'accompagnement. La méthode Compass + Switch n'est pas une théorie : elle est née de cette pratique, et elle est documentée dans deux livres — Startup Unlocked et Sales Unlocked.",
        stats: [
          { num: "25 ans", label: "d'entrepreneuriat" },
          { num: "300+", label: "startups accompagnées" },
          { num: "5", label: "entreprises co-fondées" },
          { num: "2", label: "livres publiés" },
        ],
      },
      faq: {
        eyebrow: "Questions fréquentes",
        title: "Avant de réserver.",
        items: [
          { q: "Vous allez me dire ce que je sais déjà ?", a: "Non. Vous connaissez vos problèmes — la valeur n'est pas dans la liste, elle est dans l'ordre. On trouve la cause derrière les symptômes, et on séquence sa réparation. C'est précisément ce qui manque quand on est dans le guidon." },
          { q: "Faut-il préparer quelque chose ?", a: "Un court questionnaire en amont et quelques chiffres clés. On arrive avec des hypothèses, pour ne pas perdre la matinée à collecter des données." },
          { q: "Qui doit être présent ?", a: "Vous, au minimum. Et 2 à 3 personnes clés si vous voulez que la roadmap soit portée par l'équipe plutôt que par vous seul." },
          { q: "Et après la journée ?", a: "Vous repartez autonome, avec une direction claire et le premier chantier déjà entamé. Aucun engagement de suite ; un point de contrôle à 30 jours est possible si vous le souhaitez." },
          { q: "Ça marche pour mon secteur ?", a: "La méthode regarde l'entreprise comme un système, indépendamment du secteur. Elle est particulièrement adaptée aux petites entreprises B2B, où le maillon faible se loge le plus souvent dans le moteur commercial." },
        ],
      },
      finalCta: {
        title: "Une journée pour arrêter de tout améliorer, et réparer ce qui compte.",
        desc: "Réservez votre diagnostic sur site. Une date, une journée, une direction claire.",
        button: "Réserver ma journée — 1 900 € HT",
        contact: "Une question d'abord ? Écrivez à",
      },
      domains: [
        { name: "FOUNDATIONS", desc: "Fondateurs, vision, équipe, culture — la base." },
        { name: "VALUE", desc: "Le problème résolu, et ce qui vous rend différent." },
        { name: "TARGET", desc: "La cible, le segment précis, le bon moment." },
        { name: "PRODUCT", desc: "La vision produit, l'expérience, ce qui protège." },
        { name: "REACH", desc: "Le go-to-market et les canaux d'acquisition." },
        { name: "USAGE", desc: "Adoption, rétention, monétisation." },
        { name: "PLAYBOOK", desc: "Le moteur commercial, structuré et répétable." },
        { name: "SCALE", desc: "Le pilotage par la donnée et le financement." },
      ],
    },
  },
}

export type TranslationKey = keyof typeof translations.en
