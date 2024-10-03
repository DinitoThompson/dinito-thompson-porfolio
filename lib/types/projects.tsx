interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  screenshot: string;
  role: string;
  impact: string;
  isPublic: boolean;
  github?: string;
  hasVideo: boolean;
  videoLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Campus Vision",
    company: "University of Technology",
    description:
      "AI-powered platform for real-time vehicle monitoring and analysis of campus entries and exits.",
    technologies: ["Python", "TensorFlow", "Pytorch"],
    screenshot: "/assets/development/campus-vision.png",
    role: "Lead Software Developer",
    impact:
      "Enhanced security and vehicle monitoring for campus entries and exits.",
    isPublic: true,
    github:
      "https://github.com/DinitoThompson/Automatic-License-Plate-Recognition",
    hasVideo: false,
  },
  {
    id: 2,
    title: "Konnocate",
    company: "Konnexx Services Limited",
    description:
      "In house Job management system for the Konnexx Services Limited",
    technologies: ["PHP", "Yii2", "Flutter"],
    screenshot: "/assets/development/konnocate.png",
    role: "Lead Software Developer",
    impact: "Enhanced job creation, employee engagement, and productivity.",
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 3,
    title: "Massy Operations",
    company: "Massy Groups",
    description: "Delivery and logistics management system for Massy Groups",
    technologies: ["NextJS", "Yii2", "Flutter"],
    screenshot: "/assets/development/massy-ops.png",
    role: "Lead Software Developer",
    impact: "Optimized delivery and logistics for Massy Groups.",
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 4,
    title: "Pirates Prime",
    company: "Idle Project",
    description: "IMDB-like movie showcase website",
    technologies: ["ReactJS", "TailwindCSS", "Firebase"],
    screenshot: "/assets/development/pirates-prime.png",
    role: "Lead Software Developer",
    impact:
      "Gained expertise in Firebase for real-time data synchronization and authentication.",
    isPublic: true,
    github: "https://github.com/DinitoThompson/React-Pirates-Prime",
    hasVideo: true,
    videoLink: "https://youtu.be/8kSEmysnpbM",
  },
  {
    id: 5,
    title: "Smart Home",
    company: "Konnexx Services Limited",
    description: "Digicel+ home security system, using smart technology",
    technologies: ["PHP", "Java", "Flutter"],
    screenshot: "/assets/development/smart-home.png",
    role: "Code Contributor",
    impact: "Resolved a playback issue affecting certain devices.",
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 6,
    title: "AirSpace",
    company: "ByteOptima",
    description: "Courier and logistics management system",
    technologies: ["SpringBoot", "PostgreSQL", "NextJS"],
    screenshot: "/assets/development/air-space.jpg",
    role: "Software Developer",
    impact: "Created a feature for the courier and logistics system.",
    isPublic: false,
    hasVideo: false,
  },
];
