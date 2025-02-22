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
      <Contact />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Hero />
        <Projects />
      </div>
      <BackToTop />
    </motion.div>
  );
}