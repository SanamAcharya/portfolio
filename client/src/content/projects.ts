import { Project } from './types';

// Add your projects here
export const projects: Project[] = [
  {
    id: "e-commerce-dashboard",
    title: "E-commerce Dashboard",
    category: "UI/UX Design • Development",
    role: "UI/UX Designer & Developer",
    timeline: "3 months (Q1 2024)",
    tools: "Figma, React, TailwindCSS",
    overview: "A detailed description of the project, its goals, and the problems it solves.",
    challenge: "Description of the main challenges faced during the project.",
    solution: "Explanation of the solutions implemented to address the challenges.",
    results: "Discussion of the project's outcomes and impact.",
    images: {
      thumbnail: "/images/projects/e-commerce/thumbnail.jpg",
      header: "/images/projects/e-commerce/header.jpg",
      gallery: [
        "/images/projects/e-commerce/gallery-1.jpg",
        "/images/projects/e-commerce/gallery-2.jpg",
        "/images/projects/e-commerce/gallery-3.jpg",
        "/images/projects/e-commerce/gallery-4.jpg"
      ]
    }
  }
  // Add more projects here...
];
