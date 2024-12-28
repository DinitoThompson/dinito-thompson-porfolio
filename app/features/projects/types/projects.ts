// Project type definitions
export type ProjectCategory = "Enterprise" | "Personal" | "Academic";
export type ProjectRole =
  | "Lead Software Developer"
  | "Software Developer"
  | "Full Stack Developer";

interface CompanyDetails {
  name: string;
  position: string; // Your role at the company during the project
  timeline: string; // e.g., "2023 - Present"
}

interface TechnicalDetails {
  architecture?: string[]; // e.g., ["Microservices", "Event-driven"]
  infrastructure?: string[]; // e.g., ["AWS ECS", "RDS", "S3"]
  testing?: string[]; // e.g., ["Unit Testing", "E2E Testing"]
  deployment?: string[]; // e.g., ["CI/CD", "Docker", "Kubernetes"]
  performance?: string[]; // e.g., ["Caching", "Load Balancing"]
}

export interface Project {
  // Basic Information
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;

  // Company & Role Information
  company: CompanyDetails;
  role: ProjectRole;
  duration: {
    start: string; // YYYY-MM
    end?: string; // YYYY-MM or "Present"
  };

  // Technical Details
  technologies: string[];
  technicalDetails?: TechnicalDetails;
  features?: string[]; // Key features implemented
  challenges?: string[]; // Technical challenges overcome
  highlights?: string[]; // Key achievements/milestones

  // Impact & Metrics
  impact: {
    description: string;
    metrics?: string[]; // Quantifiable achievements
    businessValue?: string[]; // Business impact
  };

  // Media & Links
  screenshot: string;
  additionalImages?: string[];
  isPublic: boolean;
  github?: string;
  hasVideo: boolean;
  videoLink?: string;
  isLive?: boolean;
  websiteLink?: string;
  documentation?: string; // Link to technical documentation

  // Team & Collaboration
  teamSize?: number;
  responsibilities?: string[]; // Specific responsibilities in the project
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Campus Vision",
    category: "Academic",
    company: {
      name: "University of Technology",
      position: "Student Developer",
      timeline: "2022-2023",
    },
    description:
      "AI-powered platform for real-time vehicle monitoring and analysis of campus entries and exits.",
    duration: {
      start: "2022-09",
      end: "2023-05",
    },
    features: [
      "Real-time license plate recognition",
      "Vehicle tracking dashboard",
      "Security system integration",
      "Analytics reporting",
    ],
    challenges: [
      "Optimizing model performance for real-time processing",
      "Handling varying lighting conditions",
      "Implementing robust error handling",
    ],
    highlights: [
      "Successfully processed 200+ vehicle entries daily",
      "Achieved 95% accuracy in plate recognition",
      "Reduced manual verification time",
    ],
    technicalDetails: {
      architecture: ["Microservices", "Event-driven"],
      infrastructure: ["Github", "Google Cloud"],
      testing: ["Unit Testing", "Integration Testing"],
      deployment: ["Docker", "GitHub Actions"],
      performance: ["Image optimization", "Caching"],
    },
    technologies: ["Python", "TensorFlow", "Pytorch", "OpenCV"],
    screenshot: "/assets/development/campus-vision.png",
    role: "Lead Software Developer",
    impact: {
      description:
        "Enhanced security and vehicle monitoring for campus entries and exits.",
      metrics: [
        "Reduced manual verification time",
        "Processed over 200+ vehicles daily",
        "95% accuracy in plate recognition",
      ],
      businessValue: [
        "Improved campus security operations",
        "Enhanced visitor tracking capabilities",
        "Reduced security staff workload",
        "Enforced parking lot reservation rules",
      ],
    },
    teamSize: 5,
    responsibilities: [
      "Led technical architecture design",
      "Implemented core ML algorithms",
      "Managed team deliverables",
      "Coordinated with security department",
    ],
    isPublic: true,
    github:
      "https://github.com/DinitoThompson/Automatic-License-Plate-Recognition",
    hasVideo: false,
  },
  {
    id: 2,
    title: "Konnocate",
    category: "Enterprise",
    company: {
      name: "Konnexx Services Limited",
      position: "Lead Software Developer",
      timeline: "2023 - Present",
    },
    description: "In-house Job management system for Konnexx Services Limited",
    duration: {
      start: "2023-05",
      end: "Present",
    },
    features: [
      "Real-time job tracking and assignment",
      "Employee performance analytics",
      "Mobile workforce management",
      "Automated reporting system",
    ],
    challenges: [
      "Complex workflow implementation",
      "Legacy system integration",
      "Real-time synchronization across platforms",
    ],
    highlights: [
      "Successfully managed over 1000+ in-field jobs",
      "Reduced job assignment time by 60%",
      "Implemented comprehensive tracking system",
    ],
    technicalDetails: {
      architecture: [
        "Microservices",
        "Image Processing",
        "Signature Verification",
      ],
      infrastructure: ["AWS EC2", "Github", "S3", "Firebase"],
      testing: ["PHPUnit", "Flutter Testing", "Integration Tests"],
      deployment: ["File-Zilla", "Putty"],
      performance: ["Query optimization", "Caching layers"],
    },
    technologies: ["PHP", "Yii2", "Flutter"],
    screenshot: "/assets/development/konnocate.png",
    role: "Lead Software Developer",
    impact: {
      description:
        "Enhanced job creation, employee engagement, and productivity.",
      metrics: [
        "Reduction in job assignment time",
        "Increase in job completion rate",
        "Improvement in resource allocation",
      ],
      businessValue: [
        "Streamlined operations management",
        "Improved workforce efficiency",
        "Enhanced data-driven decision making",
      ],
    },
    teamSize: 2,
    responsibilities: [
      "Led architecture design and implementation",
      "Managed development team",
      "Coordinated with stakeholders",
      "Oversaw deployment and maintenance",
    ],
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 3,
    title: "Massy Operations",
    category: "Enterprise",
    company: {
      name: "Konnexx Services Limited",
      position: "Lead Software Developer",
      timeline: "2023 - Present",
    },
    description: "Delivery and logistics management system for Massy Groups",
    duration: {
      start: "2024-10",
      end: "Present",
    },
    features: [
      "Real-time delivery tracking",
      "Route optimization",
      "Inventory management",
      "Driver assignment system",
      "Analytics dashboard",
    ],
    challenges: ["Complex routing algorithms", "Real-time location tracking"],
    highlights: [
      "Optimized delivery routes for 100+ vehicles",
      "Implemented real-time tracking system",
      "Integrated with existing Massy SDC system",
    ],
    technicalDetails: {
      architecture: ["Microservices", "Event-driven"],
      infrastructure: ["AWS ECS", "S3", "RDS", "ElasticSearch", "Firebase"],
      testing: ["Jest", "E2E Testing", "Load Testing"],
      deployment: ["Docker", "GitHub Actions"],
      performance: ["Geospatial indexing", "Load balancing"],
    },
    technologies: ["NextJS", "Yii2", "Flutter"],
    screenshot: "/assets/development/massy-ops.png",
    role: "Lead Software Developer",
    impact: {
      description: "Optimized delivery and logistics for Massy Groups.",
      metrics: [
        "Reduction in delivery times",
        "Reduction in fuel cost",
        "Increase in delivery success rate",
        "Delivery report generation for all drivers",
      ],
      businessValue: [
        "Improved customer satisfaction",
        "Reduced operational costs",
        "Enhanced logistics efficiency",
      ],
    },
    teamSize: 2,
    responsibilities: [
      "Document and design system architecture",
      "Created and assigned development tasks",
      "Managed project deliverables",
      "Coordinated with stakeholders",
      "Oversaw deployment and maintenance",
      "Led mobile app development",
    ],
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 4,
    title: "Pirates Prime",
    category: "Personal",
    company: {
      name: "Personal Project",
      position: "Junior Software Developer",
      timeline: "2022",
    },
    description: "IMDB-like movie showcase website",
    duration: {
      start: "2023-06",
      end: "2023-07",
    },
    features: [
      "Movie browsing and search",
      "User authentication",
      "Watch-list management",
      "Real-time updates",
      "Responsive design",
    ],
    challenges: [
      "Real-time data synchronization",
      "Complex state management",
      "Performance optimization",
    ],
    highlights: [
      "Implemented real-time updates using Firebase",
      "Built responsive UI for all devices",
      "Integrated with TMDB API",
    ],
    technicalDetails: {
      architecture: ["Component-based", "Single Page Application"],
      infrastructure: ["Firebase", "Cloud Functions"],
      testing: ["React Testing Library", "Jest"],
      deployment: ["Firebase Hosting", "GitHub Actions"],
      performance: ["Lazy loading", "Image optimization"],
    },
    technologies: ["ReactJS", "TailwindCSS", "Firebase"],
    screenshot: "/assets/development/pirates-prime.png",
    role: "Lead Software Developer",
    impact: {
      description:
        "Personal project to learn Firebase real-time sync and authentication.",
      metrics: [
        "User registration and login",
        "Sub-second page load times",
        "Lighthouse performance score",
      ],
      businessValue: [
        "Gained expertise in Firebase",
        "Improved React skills",
        "Enhanced UI/UX knowledge",
      ],
    },
    teamSize: 1,
    responsibilities: [
      "Full system architecture",
      "Frontend development",
      "Backend integration",
      "Deployment and maintenance",
    ],
    isPublic: true,
    github: "https://github.com/DinitoThompson/React-Pirates-Prime",
    hasVideo: true,
    videoLink: "https://youtu.be/8kSEmysnpbM",
  },
  {
    id: 5,
    title: "Smart Home",
    category: "Enterprise",
    company: {
      name: "Konnexx Services Limited",
      position: "Software Developer",
      timeline: "2023 - Present",
    },
    description: "Digicel+ home security system, using smart technology",
    duration: {
      start: "2023-06",
      end: "Present",
    },
    features: [
      "Real-time camera feeds",
      "Motion detection",
      "Mobile app control",
      "Device integration",
      "Event notifications",
    ],
    challenges: [
      "Android playback optimization",
      "Real-time video streaming",
      "Device compatibility",
    ],
    highlights: [
      "Resolved critical Android playback issues",
      "Improved video streaming performance",
      "Enhanced device integration",
    ],
    technicalDetails: {
      architecture: ["Microservices", "Event-driven"],
      infrastructure: ["AWS EC2", "S3", "Load Balancer"],
      testing: ["JUnit", "Flutter Testing", "Integration Tests"],
      deployment: ["Docker", "GitHub Actions"],
      performance: ["Video optimization", "Network efficiency"],
    },
    technologies: ["PHP", "Java", "Flutter"],
    screenshot: "/assets/development/smart-home.png",
    role: "Software Developer",
    impact: {
      description:
        "Resolved a playback issue affecting certain android devices.",
      metrics: [
        "Reduction in playback issues",
        "Improved stream stability",
        "Significant increase in uptime",
      ],
      businessValue: [
        "Increased customer satisfaction",
        "Reduced support tickets",
        "Improved system reliability",
      ],
    },
    teamSize: 4,
    responsibilities: ["Backend optimization", "Bug resolution"],
    isPublic: false,
    hasVideo: false,
  },
  {
    id: 6,
    title: "AirSpace",
    category: "Enterprise",
    company: {
      name: "ByteOptima",
      position: "Software Developer",
      timeline: "2024",
    },
    description: "Courier and logistics management system",
    duration: {
      start: "2024-01",
      end: "Present",
    },
    features: [
      "Shipment tracking",
      "Customer portal",
      "Billing management",
      "Reporting system",
    ],
    challenges: [
      "Complex pricing calculations",
      "Multi-carrier integration",
      "Real-time tracking",
    ],
    highlights: [
      "Implemented end-to-end tracking system",
      "Built robust API architecture",
      "Integrated multiple third-party services",
    ],
    technicalDetails: {
      architecture: ["Clean Architecture", "REST APIs"],
      infrastructure: ["AWS ECS", "PostgreSQL", "Redis", "S3"],
      testing: ["JUnit", "Integration Testing"],
      deployment: ["Docker", "GitHub Actions"],
      performance: ["Query optimization", "Caching"],
    },
    technologies: ["SpringBoot", "PostgreSQL", "NextJS"],
    screenshot: "/assets/development/air-space.jpg",
    role: "Software Developer",
    impact: {
      description:
        "Developed full-stack features, handling API endpoints, frontend development, and integration.",
      metrics: [
        "Processed 1000+ shipments in first quarter",
        "Reduced shipping processing time by 65%",
        "Cut operational costs by 40% through route optimization",
      ],
      businessValue: [
        "Streamlined shipping operations",
        "Improved customer tracking experience",
        "Enhanced operational efficiency",
      ],
    },
    teamSize: 2,
    responsibilities: [
      "API development",
      "Database design",
      "Frontend implementation",
      "System integration",
    ],
    isPublic: true,
    hasVideo: false,
    isLive: true,
    websiteLink: "https://airspacelogisticshub.com",
  },
];
