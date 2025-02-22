import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/content/projects";

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
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              image={project.images.thumbnail}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}