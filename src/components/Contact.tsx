import React from 'react';
import { Github, Mail, Phone, FileDown, Linkedin, Twitter } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, children, ...props }) => (
  <a
    href={href}
    className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300 
               hover:text-primary dark:hover:text-primary transform hover:-translate-y-1 
               transition-all duration-300"
    {...props}
  >
    <Icon className="w-6 h-6" />
    <span className="text-lg">{children}</span>
  </a>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
               text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary 
               transform hover:-translate-y-1 transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br 
                                   from-gray-50 via-white to-gray-100 dark:from-gray-900 
                                   dark:via-gray-800 dark:to-gray-900 overflow-hidden 
                                   transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#6C63FF20,transparent)] 
                      dark:bg-[radial-gradient(circle_at_30%_50%,#6C63FF30,transparent)]" />
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-8">
            <ContactLink href="mailto:sanam@example.com" icon={Mail}>
              heyesanam1@gmail.com
            </ContactLink>
            
            <ContactLink href="tel:+9771234567890" icon={Phone}>
              +977 9807939593
            </ContactLink>
            
            <ContactLink 
              href="Sanam_Acharya_Resume.pdf" 
              icon={FileDown} 
              download
            >
              Download Resume
            </ContactLink>
          </div>
          
          <div className="flex justify-center md:justify-end items-center space-x-6">
            <SocialLink href="https://github.com/sanam" icon={Github} />
            <SocialLink href="https://linkedin.com/in/sanam" icon={Linkedin} />
            <SocialLink href="https://twitter.com/sanam" icon={Twitter} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact