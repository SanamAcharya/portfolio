import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { ChevronLeft } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();

  const projects = {
    "e-commerce-dashboard": {
      title: "E-commerce Dashboard",
      category: "UI/UX Design • Development",
      role: "UI/UX Designer & Developer",
      timeline: "3 months (Q1 2024)",
      tools: "Figma, React, TailwindCSS",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5",
      challenge: "Description of the main challenges faced during the project and how they were approached. This includes technical challenges, design constraints, and user requirements.",
      solution: "Explanation of the solutions implemented to address the challenges. This covers the design decisions, technical implementations, and user experience considerations.",
      results: "Discussion of the project's outcomes, its impact on users, and any metrics or feedback received. This helps demonstrate the value and success of the solution."
    },
    // Add other projects as needed
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <motion.div variants={fadeIn} className="space-y-8">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools Used</h3>
              <p className="text-muted-foreground">{project.tools}</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
              <p className="text-muted-foreground">{project.results}</p>
            </section>
          </div>

          <Button size="lg" className="mt-8">
            View Live Project
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
