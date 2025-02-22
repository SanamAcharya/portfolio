import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import CopyButton from "./CopyButton";

export default function Contact() {
  return (
    <div id="contact-section" className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b">
      <div className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">hello@example.com</span>
            <CopyButton text="hello@example.com" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">+1 (234) 567-890</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">San Francisco, CA</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SiLinkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <SiGithub className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <SiDribbble className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <SiBehance className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}