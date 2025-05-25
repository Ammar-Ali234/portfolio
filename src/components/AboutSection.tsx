
import React from 'react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Computer Vision', 'Deep Learning', 'AI Deployment', 
  'Robotics', 'Embedded Systems', 'PyTorch', 'TensorFlow'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>

        <div className="">
          <div className="lg:w-2/5 bg-yellow-500">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-tech-blue/10 blur-xl"></div>
              
              
              
            </div>
          </div>

          <div >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-4xl font-bold text-tech-blue dark:text-tech-light-blue">Computer Vision & AI Engineer</h3>
              
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a Computer Engineering graduate from NUTech with a passion for building intelligent systems that solve real-world problems. My expertise lies at the intersection of computer vision, AI, and hardware integration.
                </p>
                
                <p className="text-lg">
                  With experience across multiple domains including assistive technology, safety systems, and IOT applications, I've developed a strong foundation in both theoretical concepts and practical implementation.
                </p>
                
                <p className="text-lg">
                  When I'm not coding, you can find me participating in robotics competitions and exploring the latest advancements in AI research.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-medium text-tech-grey mb-3">Key Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
