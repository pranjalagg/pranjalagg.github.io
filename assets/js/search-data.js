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
  },{id: "nav-projects",
          title: "projects",
          description: "a growing collection of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Looking for co-op 2024 in Boulder/Denver area.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-i-too-had-a-dream",
          title: 'I Too Had A Dream',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/i_too_had_a_dream/";
            },},{id: "news-started-my-internship-at-ibm",
          title: 'Started my internship at IBM',
          description: "",
          section: "News",},{id: "news-internship-at-ibm-converted-to-full-time-as-an-application-developer",
          title: 'Internship at IBM, converted to full time as an application developer',
          description: "",
          section: "News",},{id: "news-graduated-with-a-bachelor-s-degree-from-the-indian-institute-of-information-technology-iiit-dharwad",
          title: 'Graduated with a bachelor’s degree from the Indian Institute of Information Technology (IIIT)...',
          description: "",
          section: "News",},{id: "news-joined-cu-boulder-as-a-master-s-student",
          title: 'Joined CU Boulder as a master’s student',
          description: "",
          section: "News",},{id: "projects-android-malware-classification",
          title: 'android malware classification',
          description: "cybersecurity is a constant battle against the shadows of malwares; with each threat detected and neutralized, we reinforce the fortress of digital resilience",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_andmal/";
            },},{id: "projects-hope-speech-detection",
          title: 'hope speech detection',
          description: "hope is the beacon that illuminates our darkest moments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_hsd/";
            },},{id: "projects-mitigating-sql-injection-attacks",
          title: 'mitigating sql injection attacks',
          description: "sql injection: where a single misplaced character can turn a database into a liability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-text-detection-in-distorted-social-media-images",
          title: 'text detection in distorted social media images',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%61%6E%6A%61%6C.%61%67%67%61%72%77%61%6C@%63%6F%6C%6F%72%61%64%6F.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=C8gMS2gAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pranjalagg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pranjal-aggarwal", "_blank");
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
