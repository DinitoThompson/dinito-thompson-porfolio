export interface Design {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year?: string; // Optional year for chronological organization
  featured?: boolean; // Optional flag for featured designs
}

// Enhanced designs array with better organization and metadata
export const designs: Design[] = [
  // Portrait Category
  {
    id: 1,
    title: "Ansel Collins - Portrait",
    description:
      "Portrait of the legendary Ansel Collins, capturing the essence of a musical icon",
    image: "https://utfs.io/f/ZgFGPQ6nd3OU6P26yQKxE9YgXm7V6CTyfQOkAF0Mei2BLW8G",
    category: "Portrait",
    year: "2023",
    featured: true,
  },
  {
    id: 20,
    title: "Bob Marley - Always Good",
    description:
      "Tribute design to the legendary Bob Marley, celebrating his enduring legacy",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUG6L1Zx4hTgCuVMILYbZzBArqdk0ER1aP3lQN",
    category: "Portrait",
    year: "2023",
    featured: true,
  },

  // Logo Category - Professional Brand Identity Work
  {
    id: 3,
    title: "Body In",
    description:
      "Fitness and body positivity concept design with modern typography",
    image: "https://utfs.io/f/ZgFGPQ6nd3OU9EJLjxLyHTQKCwgec1dzAYtsEJpb978qS6n4",
    category: "Logo",
    year: "2024",
  },
  {
    id: 4,
    title: "Chelsea Jo",
    description:
      "Personal branding design for Chelsea Jo featuring elegant minimalism",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUUjXj3hmvO12rf3DtwxRyo9GepligmK8IW46n",
    category: "Logo",
    year: "2024",
  },
  {
    id: 5,
    title: "Crown of Ester",
    description:
      "Elegant design featuring a refined crown motif with premium aesthetics",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUpiUMmRkVYjgcfh3UCHq61rF0ZN5wtW7iybQx",
    category: "Logo",
    year: "2023",
  },
  {
    id: 10,
    title: "Fllego",
    description:
      "Modern and minimalist logo design for Fllego with clean typography",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUpnCt6TkVYjgcfh3UCHq61rF0ZN5wtW7iybQx",
    category: "Logo",
    year: "2024",
  },
  {
    id: 11,
    title: "Getting Fit",
    description:
      "Motivational fitness brand and logo design with dynamic energy",
    image: "https://utfs.io/f/ZgFGPQ6nd3OU85IsZUnXrAGBoWpghOtqS4lCFKvwcsMbjyJd",
    category: "Logo",
    year: "2023",
  },
  {
    id: 15,
    title: "Ivy House of Style",
    description:
      "Elegant branding for Ivy House of Style with sophisticated appeal",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUMSuV9fqYPcX1mQUodizhkS46rqRIlupwV2Zn",
    category: "Logo",
    year: "2024",
    featured: true,
  },
  {
    id: 16,
    title: "Lux & Lot",
    description: "Luxury brand design for Lux & Lot with premium positioning",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUN9aKEDVvWewfTxDtarCnpQ1O5SHicY0LZb9g",
    category: "Logo",
    year: "2024",
  },
  {
    id: 17,
    title: "Momis Homes",
    description:
      "Warm and inviting design for Momis Homes real estate branding",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUEoDM3mUlNorxWUXZ4FsTYa8tfM7Cuhcpk0lV",
    category: "Logo",
    year: "2023",
  },
  {
    id: 18,
    title: "Nella Styles",
    description:
      "Fashion-forward branding for Nella Styles with contemporary flair",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUEMFGdolNorxWUXZ4FsTYa8tfM7Cuhcpk0lVB",
    category: "Logo",
    year: "2024",
  },
  {
    id: 19,
    title: "Pengin",
    description:
      "Playful and minimalist penguin-inspired design with character",
    image: "https://utfs.io/f/ZgFGPQ6nd3OU7yZVsnzceYxn53J9W7tECpB4RyuwGKfF8HLX",
    category: "Logo",
    year: "2023",
  },
  {
    id: 21,
    title: "Poshbytoya",
    description: "Sophisticated branding for Poshbytoya with luxury appeal",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUlbWcfNiYokLNVhF9W3S5ZQi4gKb8c2Red6p7",
    category: "Logo",
    year: "2024",
  },

  // Clothing & Apparel Designs
  {
    id: 7,
    title: "Divine Fitness",
    description:
      "Logo and branding for Divine Fitness gym with athletic energy",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUQyoX1RNY7FluNnE48VhzsZodCHeI1O63UGtp",
    category: "Clothing",
    year: "2023",
  },
  {
    id: 8,
    title: "Fit & Fabulous",
    description: "Inspiring fitness and lifestyle brand design for apparel",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUKbESvTdIEOTfulgcUzHk5ASMZxtja4JQrDes",
    category: "Clothing",
    year: "2024",
  },
  {
    id: 9,
    title: "Fit and Ageless",
    description:
      "Branding for age-defying fitness concept with motivational messaging",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUtdi07VCGxmzL5MPYcNhwOA89vk1K2q3d06to",
    category: "Clothing",
    year: "2024",
  },
  {
    id: 23,
    title: "Stronger Than You Think",
    description:
      "Inspirational fitness and mental strength branding for apparel",
    image: "https://utfs.io/f/ZgFGPQ6nd3OURlyQy6jV4jDQ0xSB2kPs5MpnWLNTz7cIhFfu",
    category: "Clothing",
    year: "2023",
    featured: true,
  },

  // Inspirational & Motivational Designs
  {
    id: 12,
    title: "Working Towards Hope",
    description: "Inspirational design for personal growth and transformation",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUzQG0Hmrs94PYEKtD32hjxiqugJelyAZXVnSc",
    category: "Inspirational",
    year: "2023",
  },
  {
    id: 13,
    title: "Life Relaunch",
    description: "Brand design for personal transformation and new beginnings",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUtxxJXNaCGxmzL5MPYcNhwOA89vk1K2q3d06t",
    category: "Inspirational",
    year: "2024",
  },
  {
    id: 14,
    title: "Living, Not Just Existing",
    description: "Empowering lifestyle brand concept with meaningful messaging",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUL8WSipyx7goc5mnqUzB2a3HMkTbYOEPDFerJ",
    category: "Inspirational",
    year: "2024",
    featured: true,
  },
  {
    id: 22,
    title: "Speak Over Yourself",
    description:
      "Empowering self-affirmation brand concept with positive messaging",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUFwYlEi86aLdAHpe2WwGjXFOk1QgurS7KnU9B",
    category: "Inspirational",
    year: "2023",
  },

  // Conceptual & Creative Work
  {
    id: 2,
    title: "Blue Power Showcase",
    description:
      "A dynamic showcase of blue power and energy with artistic flair",
    image: "https://utfs.io/f/ZgFGPQ6nd3OUF02qlg86aLdAHpe2WwGjXFOk1QgurS7KnU9B",
    category: "Conceptual",
    year: "2023",
  },

  // Brand Redesign Projects
  {
    id: 6,
    title: "D&J Life Coaches",
    description:
      "Professional branding redesign for D&J Life Coaching services",
    image: "https://utfs.io/f/ZgFGPQ6nd3OU45ShqntMQa0FlkPtfTUox5WeJszG29byDXH1",
    category: "Redesign",
    year: "2024",
  },
];

// Helper functions for better organization
export const getFeaturedDesigns = (): Design[] => {
  return designs.filter((design) => design.featured);
};

export const getDesignsByCategory = (category: string): Design[] => {
  if (category === "All") return designs;
  return designs.filter((design) => design.category === category);
};

export const getDesignsByYear = (year: string): Design[] => {
  return designs.filter((design) => design.year === year);
};

export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  designs.forEach((design) => {
    counts[design.category] = (counts[design.category] || 0) + 1;
  });
  return counts;
};
