import React from 'react';
import { Button } from '@/components/ui/button';
import pfppic from '/assets/pfppic.png';
import { ArrowRight, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-tech-blue/10 animate-float"></div>
      <div className="absolute bottom-1/3 left-10 w-24 h-24 rounded-full bg-tech-light-blue/10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-tech-grey/10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Hello, I'm</span>
                <span className="block text-tech-blue dark:text-tech-light-blue">Ammar Ali</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-tech-grey dark:text-tech-light-grey font-medium">Computer Vision & AI Engineer</h2>
            </div>

            <p className="text-lg max-w-xl">
              Results-oriented Computer Engineer with expertise in computer vision, real-time AI integration, and hardware-software co-design. Passionate about building impactful, intelligent solutions for real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="tech-gradient hover:bg-tech-dark-blue" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/assets/Ammar_Ali_Computer_Vision_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-tech-blue/20 blur-2xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-tech-blue/40 dark:border-tech-light-blue/40 overflow-hidden relative z-10">
                <img 
                  src={pfppic} 
                  alt="Ammar Ali" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-tech-light-blue/20 shadow-lg">
                  <span className="flex space-x-1">
                    {[1, 2, 3].map((_, i) => (
                      <span 
                        key={i} 
                        className="w-1 h-4 bg-tech-blue animate-wave" 
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></span>
                    ))}
                  </span>
                  <span className="text-sm font-medium ml-2">AI Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
