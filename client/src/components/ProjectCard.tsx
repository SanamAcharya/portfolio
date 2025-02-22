import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({ id, title, category, image }: ProjectCardProps) {
  return (
    <motion.div variants={fadeIn}>
      <Link href={`/project/${id}`}>
        <Card className="cursor-pointer overflow-hidden transition-transform hover:scale-[1.02]">
          <CardContent className="p-0">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
