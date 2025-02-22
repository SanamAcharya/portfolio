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
      headerImage: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5",
      images: [
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ],
      overview: "A detailed description of the project, its goals, and the problems it solves. This section provides context about why the project was undertaken and its significance.",
      challenge: "Description of the main challenges faced during the project and how they were approached. This includes technical challenges, design constraints, and user requirements.",
      solution: "Explanation of the solutions implemented to address the challenges. This covers the design decisions, technical implementations, and user experience considerations.",
      results: "Discussion of the project's outcomes, its impact on users, and any metrics or feedback received. This helps demonstrate the value and success of the solution."
    }
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

        <motion.div variants={fadeIn} className="space-y-12">
          {/* Project Header with Image and Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src={project.headerImage} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-muted-foreground">{project.overview}</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
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
            </div>
          </div>

          {/* Project Content */}
          <div className="space-y-12 border-t pt-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
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