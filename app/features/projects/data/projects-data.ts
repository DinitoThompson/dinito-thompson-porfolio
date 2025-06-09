export interface Project {
  id: string; // Unique identifier, can be a slug too
  title: string;
  slug: string; // URL-friendly version of the title
  shortDescription: string;
  longDescription: string; // Detailed description, can include markdown/HTML
  mainImage: string; // URL or path to the main project image
  images?: string[]; // Array of URLs/paths for a gallery
  videos?: string[]; // Array of video URLs or embed codes
  technologies: string[]; // Array of technology names or objects
  liveDemoLink?: string;
  sourceCodeLink?: string;
  date: string; // e.g., "2023" or "Jan 2023 - Mar 2023"
  category?: string; // e.g., "Web Development", "Mobile App"
}

// Sample project data - replace with your actual projects
export const projectsData: Project[] = [
  {
    id: "project-1",
    slug: "cool-portfolio-enhancement",
    title: "Cool Portfolio Enhancement",
    shortDescription: "Refactored project viewing with dedicated pages.",
    longDescription: `
      This project involved a significant refactor of the portfolio\'s project section.
      The main goal was to improve user experience by providing dedicated pages for each project,
      allowing for more detailed information and a less cramped layout.
      Key features include dynamic routing, responsive design for project details,
      and clear navigation back to the main projects list.
    `,
    mainImage: "/images/projects/portfolio-enhancement/main.jpg", // Example path
    images: [
      "/images/projects/portfolio-enhancement/gallery1.jpg",
      "/images/projects/portfolio-enhancement/gallery2.jpg",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveDemoLink: "https://yourportfolio.com/home/projects",
    sourceCodeLink: "https://github.com/yourusername/yourportfolio",
    date: "2024",
    category: "Web Development",
  },
  {
    id: "project-2",
    slug: "awesome-mobile-app",
    title: "Awesome Mobile App",
    shortDescription:
      "A cross-platform mobile application for task management.",
    longDescription: `
      The Awesome Mobile App is designed to help users manage their daily tasks efficiently.
      Built with Flutter, it offers a seamless experience on both iOS and Android.
      Features include offline support, reminders, and categorization of tasks.
    `,
    mainImage: "/images/projects/mobile-app/main.png",
    technologies: ["Flutter", "Dart", "Firebase"],
    sourceCodeLink: "https://github.com/yourusername/awesome-mobile-app",
    date: "2023",
    category: "Mobile App",
  },
  // Add more projects here
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};
