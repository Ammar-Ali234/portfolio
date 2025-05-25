
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900/80 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-tech-blue dark:text-tech-light-blue">
              Ammar<span className="text-tech-grey dark:text-tech-light-grey">.dev</span>
            </h3>
            <p className="text-sm text-tech-grey dark:text-tech-light-grey mt-1">
              Computer Vision & AI Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/ammarali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tech-grey hover:text-tech-blue dark:text-tech-light-grey dark:hover:text-tech-light-blue transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ammarali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tech-grey hover:text-tech-blue dark:text-tech-light-grey dark:hover:text-tech-light-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mammarali299@gmail.com"
                className="text-tech-grey hover:text-tech-blue dark:text-tech-light-grey dark:hover:text-tech-light-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-tech-grey dark:text-tech-light-grey">
              © {currentYear} Ammar Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
