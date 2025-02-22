import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useContactDialog } from "@/components/ContactDialog";

export default function Hero() {
  const { openContactDialog } = useContactDialog();

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="py-20 md:py-32"
    >
      <motion.p 
        variants={fadeIn}
        className="text-sm text-muted-foreground mb-4"
      >
        UI/UX Designer & Developer
      </motion.p>

      <motion.h1 
        variants={fadeIn}
        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
      >
        Creating digital<br />
        experiences that matter
      </motion.h1>

      <motion.p 
        variants={fadeIn}
        className="text-base text-muted-foreground max-w-2xl mb-8"
      >
        I'm a designer focused on creating beautiful and functional interfaces 
        that help businesses grow and succeed in the digital world.
      </motion.p>

      <motion.div 
        variants={fadeIn}
        className="flex gap-4"
      >
        <Button size="lg" onClick={scrollToProjects}>
          View Projects
        </Button>
        <Button size="lg" variant="outline" onClick={openContactDialog}>
          Contact Me
        </Button>
      </motion.div>
    </motion.section>
  );
}