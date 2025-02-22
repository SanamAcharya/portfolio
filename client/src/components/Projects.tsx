import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";

const projects = [
  {
    id: "e-commerce-dashboard",
    title: "E-commerce Dashboard",
    category: "UI/UX Design • Development",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5"
  },
  {
    id: "travel-app",
    title: "Travel App",
    category: "Mobile Design • Development",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    id: "finance-platform",
    title: "Finance Platform",
    category: "UI/UX Design • Development",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
  },
  {
    id: "health-fitness",
    title: "Health & Fitness App",
    category: "Mobile Design • Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
