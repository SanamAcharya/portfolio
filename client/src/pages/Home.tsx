import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import { fadeIn } from "@/lib/animations";

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Contact />
        <Hero />
        <Projects />
      </div>
      <BackToTop />
    </motion.div>
  );
}