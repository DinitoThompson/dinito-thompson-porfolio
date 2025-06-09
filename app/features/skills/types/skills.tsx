import { ReactElement } from "react";
import {
  Code,
  Globe,
  Smartphone,
  Server,
  Database,
  Cloud,
  Terminal,
  PenTool,
  Brain,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: ReactElement;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code />,
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    name: "Frontend",
    icon: <Globe />,
    skills: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone />,
    skills: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    name: "Backend",
    icon: <Server />,
    skills: [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Yii2",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      },
    ],
  },
  {
    name: "Databases",
    icon: <Database />,
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud />,
    skills: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
  {
    name: "Tools & IDEs",
    icon: <Terminal />,
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Cursor",
        icon: "/assets/icons/cursor.png",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
    ],
  },
  {
    name: "Design & Creative",
    icon: <PenTool />,
    skills: [
      {
        name: "Affinity",
        icon: "/assets/icons/affinity.png",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Canva",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      },
    ],
  },
  {
    name: "AI & Data",
    icon: <Brain />,
    skills: [
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "OpenCV",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
      {
        name: "Claude",
        icon: "/assets/icons/claude.webp",
      },
    ],
  },
];
