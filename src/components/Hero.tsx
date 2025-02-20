import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-20 px-4 sm:px-6 lg:px-8 hero-gradient flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">
                Sanam Acharya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              I craft engaging, user-friendly digital experiences
            </p>
            <div className="space-x-4">
              <a
                href="#projects"
                className="cta-button"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 rounded-lg font-medium border-2 border-primary 
                         text-primary dark:text-white hover:bg-primary hover:text-white
                         transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-primary hover:text-primary-dark transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero