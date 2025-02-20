import React from 'react';
import { Github, Mail, Phone, FileDown, Linkedin, Twitter, MapPin } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, children, ...props }) => (
  <a
    href={href}
    className="flex items-center space-x-3 text-gray-700 hover:text-primary 
               transform hover:-translate-y-1 transition-all duration-300 p-4 rounded-lg
               hover:bg-gray-50"
    {...props}
  >
    <Icon className="w-6 h-6" />
    <span className="text-lg">{children}</span>
  </a>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="flex flex-col items-center space-y-2 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl
               transform hover:-translate-y-1 transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-4 rounded-full bg-primary/10 text-primary">
      <Icon className="w-8 h-8" />
    </div>
    <span className="text-sm font-medium text-gray-600">{label}</span>
  </a>
);

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
            
            <ContactLink href="mailto:sanam@example.com" icon={Mail}>
              sanam@example.com
            </ContactLink>
            
            <ContactLink href="tel:+9771234567890" icon={Phone}>
              +977 123 456 7890
            </ContactLink>
            
            <ContactLink href="#" icon={MapPin}>
              Kathmandu, Nepal
            </ContactLink>
            
            <ContactLink 
              href="Sanam_Acharya_Resume.pdf" 
              icon={FileDown} 
              download
            >
              Download Resume
            </ContactLink>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <SocialLink href="https://github.com/sanam" icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/sanam" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://twitter.com/sanam" icon={Twitter} label="Twitter" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg
                       hover:bg-primary-dark transform hover:-translate-y-0.5 
                       transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;