// Project data
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github: string;
  demo: string;
  playStore?: string;
  platform?: "mobile app" | "web + mobile";
  status?: "live" | "in-progress" | "private" | "screenshot";
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "My IPO App",
    description:
      "A comprehensive utility app for Nepalese stock market investors to manage multiple Meroshare accounts, apply for IPOs in bulk, check IPO results, track portfolios, and access financial tools all from a single mobile app.",
    technologies: ["React Native", "Expo", "React", "TypeScript"],
    images: [],
    github: "",
    demo: "",
    playStore: "https://play.google.com/store/apps/details?id=com.sauravnr.MyIpoApp",
    platform: "mobile app",
    status: "live",
  },
  {
    id: 7,
    title: "Sajilo Patro",
    description:
      "A Nepali calendar app with offline BS dates, festivals, holidays, panchang, and BS/AD date conversion. Brings weather, reminders, news, and Nepali radio together in one mobile app.",
    technologies: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
    images: [],
    github: "",
    demo: "",
    playStore: "https://play.google.com/store/apps/details?id=com.sajilopatro.app",
    platform: "mobile app",
    status: "live",
  },
  {
    id: 8,
    title: "Fendr",
    description:
      "A private messaging app with real-time chat, audio and video calls, voice notes, and live location sharing. Features encrypted messages, local chat history, friend requests, and encrypted Google Drive backups.",
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "SQLite"],
    images: [],
    github: "",
    demo: "",
    playStore: "https://play.google.com/store/apps/details?id=com.saurav.duochat",
    platform: "mobile app",
    status: "live",
  },
  {
    id: 9,
    title: "ZimaPDF Mobile",
    description:
      "A mobile PDF toolkit to compress, merge, split, rotate, and protect documents on your device. Includes offline OCR, in-app PDF previews, and tools to save and share files.",
    technologies: ["React Native", "Expo", "Expo Router", "pdf-lib", "ML Kit"],
    images: [],
    github: "",
    demo: "",
    playStore: "https://play.google.com/store/apps/details?id=com.zimapdf.mobile",
    platform: "mobile app",
    status: "live",
  },
  {
    id: 10,
    title: "Abhigat Staff",
    description:
      "A mobile app for restaurant, cafe, and hotel staff to handle guest requests submitted through QR codes. Staff can view live queues, claim and complete tasks, manage availability, receive urgent alerts, and queue actions offline.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase"],
    images: [],
    github: "",
    demo: "",
    playStore: "https://play.google.com/store/apps/details?id=com.abhigat.staff",
    platform: "mobile app",
    status: "live",
  },
  {
    id: 2,
    title: "Hare Krishna Dairy Farm",
    description:
      "A modern, bilingual (English & Nepali), responsive website for Hare Krishna Krishi Tatha Pashu Panchhi Farm, a registered small-scale village farm in Nepal. Showcases fresh dairy products with smooth animations and full internationalisation.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "next-intl",
    ],
    images: [],
    github: "",
    demo: "https://hkk.com.np",
    status: "live",
  },
  {
    id: 3,
    title: "Blood Nation",
    description:
      "An online blood management platform where donors can register and provide details to help people searching for blood. Built as a college project using PHP and MySQL.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS", "JavaScript"],
    images: [
      "/projects/blood-nation1.png",
      "/projects/blood-nation2.png",
      "/projects/blood-nation3.png",
    ],
    github: "",
    demo: "",
    status: "screenshot",
  },
  {
    id: 4,
    title: "E-Dairy Farm",
    description:
      "A web-based dairy farm management system to replace traditional pen-and-paper record keeping. Manages cow records, staff & salary, pregnancy & vaccine monitoring, milk and cow sales.",
    technologies: ["React", "Laravel", "MySQL"],
    images: [
      "/projects/e-dairy1.png",
      "/projects/e-dairy2.png",
      "/projects/e-dairy3.png",
    ],
    github: "",
    demo: "",
    status: "screenshot",
  },
  {
    id: 5,
    title: "Ludo Pi",
    description:
      "A Ludo game for Android and the web with real-time multiplayer matches, private rooms, and in-game chat. Play offline against the computer or share a phone with friends in pass-and-play mode, with seasonal leaderboards and collectible boards, dice, and tokens.",
    technologies: [
      "React 19",
      "Capacitor",
      "Vite",
      "Socket.IO",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
    ],
    images: [],
    github: "",
    demo: "https://ludopi.fun",
    playStore: "https://play.google.com/store/apps/details?id=fun.ludopi.app",
    platform: "web + mobile",
    status: "live",
  },
  {
    id: 6,
    title: "ZimaPDF",
    description:
      "A free, open-source PDF editor that just works. Merge, split, compress, rotate, crop, edit, add watermarks, extract text with OCR, and more entirely in your browser with no installation required. Secure, private, and supports files on any device.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web APIs"],
    images: [],
    github: "",
    demo: "https://zimapdf.com",
    status: "live",
  },
];

// Skills data
export const SKILLS = [
  { name: "React", level: 90 },
  { name: "React Native", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "TypeScript", level: 82 },
  { name: "Node.js", level: 85 },
  { name: "PHP", level: 75 },
  { name: "Laravel", level: 72 },
  { name: "MySQL", level: 78 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Socket.IO", level: 78 },
  { name: "REST APIs", level: 88 },
];

// Timeline data
export const TIMELINE = [
  {
    year: "2024",
    title: "Full-Stack Developer",
    description:
      "Building production applications with React and Node.js, focusing on real-world problem solving.",
  },
  {
    year: "2023",
    title: "React Specialist",
    description:
      "Deep diving into React ecosystem, created multiple MERN applications for different use cases.",
  },
  {
    year: "2022",
    title: "Started Web Development",
    description:
      "Began learning React and JavaScript, built first interactive web applications.",
  },
];

export const BIO = `I build practical web and mobile applications that solve real-world problems.
With a strong focus on React and React Native, I enjoy turning complex ideas into clean, usable products that actually get used.
More builder than talker. I learn by shipping.`;

export const SOCIAL_LINKS = {
  github: "https://github.com/sauravnr",
  linkedin: "https://www.linkedin.com/in/sauravniroula01/",
  twitter: "https://x.com/saurav_niroula",
  email: "sauravniroula01@gmail.com",
};
