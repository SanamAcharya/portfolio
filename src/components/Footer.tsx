import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 
                       transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sanam Acharya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer