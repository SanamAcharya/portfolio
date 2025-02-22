import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub, SiDribbble, SiBehance } from "react-icons/si";
import CopyButton from "./CopyButton";
import { personalInfo } from "@/content/personal-info";

export default function Contact() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4">
          <div className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{personalInfo.contact.email}</span>
                <CopyButton text={personalInfo.contact.email} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{personalInfo.contact.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{personalInfo.contact.location}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={personalInfo.social.dribbble} target="_blank" rel="noopener noreferrer">
                <SiDribbble className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
              <a href={personalInfo.social.behance} target="_blank" rel="noopener noreferrer">
                <SiBehance className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}