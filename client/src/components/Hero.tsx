import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="min-h-[80vh] flex flex-col justify-center py-20"
    >
      <motion.p 
        variants={fadeIn}
        className="text-lg text-muted-foreground mb-4"
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
        className="text-lg text-muted-foreground max-w-2xl mb-8"
      >
        I'm a designer focused on creating beautiful and functional interfaces 
        that help businesses grow and succeed in the digital world.
      </motion.p>

      <motion.div 
        variants={fadeIn}
        className="flex gap-4"
      >
        <Button size="lg" asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
