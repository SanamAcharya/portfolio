import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import CopyButton from "./CopyButton";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="space-y-12">
        <motion.div variants={fadeIn} className="space-y-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-medium">Email</p>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">hello@example.com</span>
                <CopyButton text="hello@example.com" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6" />
            <div>
              <p className="font-medium">Phone</p>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">+1 (234) 567-890</span>
                <CopyButton text="+1 (234) 567-890" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                <SiDribbble className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                <SiBehance className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
