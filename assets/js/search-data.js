// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research and work experience, and awards. A PDF version is available from the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-presented-our-ssm-interpretability-project-emergence-of-primacy-and-recency-effect-in-mamba-at-the-riken-aip-llm-ml-workshop-in-japan",
          title: 'Presented our SSM interpretability project, “Emergence of Primacy and Recency Effect in Mamba”,...',
          description: "",
          section: "News",},{id: "news-our-paper-asr-under-noise-exploring-robustness-for-sundanese-and-javanese-received-the-best-paper-award-at-the-9th-winlp-workshop-at-emnlp-2025",
          title: 'Our paper “ASR Under Noise: Exploring Robustness for Sundanese and Javanese” received the...',
          description: "",
          section: "News",},{id: "news-gave-a-guest-lecture-on-the-interpretability-of-large-language-models-for-if5153-natural-language-processing-at-institut-teknologi-bandung-itb",
          title: 'Gave a guest lecture on the interpretability of large language models for IF5153...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-msc-thesis-on-vision-language-model-interpretability",
          title: 'Successfully defended my MSc thesis on vision-language model interpretability. 🎓',
          description: "",
          section: "News",},{id: "news-graduated-with-an-msc-in-natural-language-processing-from-mbzuai",
          title: 'Graduated with an MSc in Natural Language Processing from MBZUAI.',
          description: "",
          section: "News",},{id: "news-our-paper-a-unified-safety-subspace-exists-in-speech-language-models-has-been-accepted-at-interspeech-2026",
          title: 'Our paper “A Unified Safety Subspace Exists in Speech Language Models” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-sparse-long-memory-and-transition-bottlenecks-shape-positional-recall-in-mamba-language-models-has-been-accepted-to-findings-of-emnlp-2026-see-you-in-budapest",
          title: 'Our paper “Sparse Long Memory and Transition Bottlenecks Shape Positional Recall in Mamba...',
          description: "",
          section: "News",},{
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
