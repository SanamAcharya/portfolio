import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  longDescription?: string;
  technologies?: string[];
  link?: string;
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div 
    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl 
               transition-all duration-500 bg-white dark:bg-gray-800 cursor-pointer h-[400px]"
    onClick={onClick}
  >
    <div className="relative h-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-primary 
                      rounded-full text-sm font-medium backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 
                      group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-white/90 mb-4">{project.description}</p>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <button className="px-4 py-2 bg-primary text-white rounded-lg 
                         hover:bg-primary-dark transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects: Project[] = [
    // Web Projects
    {
      title: "Modern E-commerce Platform",
      description: "A full-featured online shopping experience with real-time inventory.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200",
      category: "Web Application",
      longDescription: "A sophisticated e-commerce platform featuring real-time inventory management, AI-powered product recommendations, and seamless payment integration.",
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      link: "#"
    },
    {
      title: "Creative Portfolio Hub",
      description: "A platform for creatives to showcase their work with style.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200",
      category: "Web Application",
      longDescription: "An innovative portfolio platform enabling creative professionals to present their work through customizable galleries and interactive presentations.",
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
      link: "#"
    },
    // Mobile Projects
    {
      title: "AI Fitness Coach",
      description: "Your personal AI-powered fitness companion.",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1200",
      category: "Mobile Application",
      longDescription: "A smart fitness application that leverages AI to provide personalized workout plans and real-time form correction.",
      technologies: ['React Native', 'TypeScript', 'TensorFlow'],
      link: "#"
    },
    {
      title: "Gourmet Food Delivery",
      description: "Premium food delivery experience with live tracking.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200",
      category: "Mobile Application",
      longDescription: "A sophisticated food delivery platform featuring real-time order tracking, AI-powered recommendations, and seamless payment processing.",
      technologies: ['Flutter', 'Dart', 'Firebase'],
      link: "#"
    },
    // Product Projects
    {
      title: "Smart Living Hub",
      description: "Next-generation smart home control center.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200",
      category: "Product Design",
      longDescription: "An intuitive smart home interface that brings together device control, automation, and energy management in one beautiful dashboard.",
      technologies: ['Figma', 'Protopie', 'After Effects'],
      link: "#"
    },
    {
      title: "HealthTech Platform",
      description: "Revolutionary healthcare management system.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
      category: "Product Design",
      longDescription: "A comprehensive healthcare platform that streamlines patient care, appointment scheduling, and medical record management.",
      technologies: ['Figma', 'Framer', 'Principle'],
      link: "#"
    }
  ];

  const categories = [...new Set(allProjects.map(project => project.category))];
  
  const filteredProjects = selectedCategory
    ? allProjects.filter(project => project.category === selectedCategory)
    : allProjects;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white 
                                    dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4 reveal">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto reveal mb-8">
            Explore my portfolio of web applications, mobile experiences, and product designs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${!selectedCategory 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          ))}
        </div>

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedCategory || "All Projects"}
          projects={filteredProjects}
        />
      </div>
    </section>
  );
};

export default Projects;