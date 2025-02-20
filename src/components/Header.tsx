import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-primary dark:bg-gray-900 shadow-md' : 'bg-primary/95 dark:bg-gray-900/95'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-white hover:text-white/80 dark:text-gray-400 dark:hover:text-primary
                   hover:bg-white/10 dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        
        <ul className="flex justify-end space-x-8 h-20 items-center">
          <li>
            <a 
              href="#home" 
              className="text-white hover:text-white/80 dark:text-gray-200 dark:hover:text-primary 
                       transition-colors duration-300 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-white hover:text-white/80 dark:text-gray-200 dark:hover:text-primary 
                       transition-colors duration-300 font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-white hover:text-white/80 dark:text-gray-200 dark:hover:text-primary 
                       transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;