// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My publications, listed in reverse chronological order. † denotes equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-excited-to-be-joining-two-sigma-investments-as-a-software-engineering-intern-on-modeling-insights-this-summer-2025",
          title: 'Excited to be joining Two Sigma Investments as a Software Engineering Intern on...',
          description: "",
          section: "News",},{id: "news-trust-by-design-skill-profiles-for-transparent-cost-aware-llm-routing-bella-accepted-as-a-poster-at-mlsys-yps-2025",
          title: 'Trust by Design: Skill Profiles for Transparent, Cost-Aware LLM Routing (BELLA) accepted as...',
          description: "",
          section: "News",},{id: "news-flame-holistic-finance-language-model-evaluation-accepted-to-acl-findings-2025",
          title: 'FLaME (Holistic Finance Language Model Evaluation) accepted to ACL Findings 2025!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-the-human-centered-explainable-ai-hcxai-2026-workshop-at-chi-explainable-model-routing-for-agentic-workflows-and-counterfactual-explanations-for-agentic-workflows-as-spotlight-presentations",
          title: 'Two papers accepted to the Human-Centered Explainable AI (HCXAI) 2026 workshop at CHI:...',
          description: "",
          section: "News",},{id: "news-where-does-social-reasoning-come-from-capability-provenance-in-language-models-accepted-to-conference-on-language-modeling-colm-2026-this-was-a-collaboration-between-mark-riedl-s-lab-and-eleuther-ai-on-tracing-social-reasoning-capabilities-in-llms-to-specific-pretraining-data-sources-using-gradient-based-attribution",
          title: 'Where Does Social Reasoning Come From? Capability Provenance in Language Models accepted to...',
          description: "",
          section: "News",},{id: "news-why-do-ai-agents-break-rules-how-framing-context-and-social-signals-shape-compliance-accepted-to-aies-2026-aaai-acm-conference-on-ai-ethics-and-society-and-to-the-colm-2026-workshop-on-agent-behavior",
          title: 'Why Do AI Agents Break Rules? How Framing, Context, and Social Signals Shape...',
          description: "",
          section: "News",},{id: "news-new-preprint-pact-can-enterprise-ai-assistants-be-trusted-under-pressure-a-novel-benchmark-testing-whether-ai-assistants-keep-following-company-rules-when-violating-them-is-the-convenient-choice-check-out-the-website-paper-and-code",
          title: 'New preprint: PACT: Can Enterprise AI Assistants Be Trusted Under Pressure? A novel...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6B%61%68%6F%6B%61%6D%6F%74%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mika-okamoto", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mokamoto", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rcmk3uwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
