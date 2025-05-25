
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'AI & Python Developer',
    company: 'Smart Tech',
    period: 'Jan 2023 - Present',
    description: 'Developing computer vision solutions for retail analytics and customer behavior tracking. Implemented object detection and tracking algorithms that improved conversion rates by 15%.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI']
  },
  {
    id: 2,
    title: 'Computer Vision Engineer',
    company: 'ITSOLERA',
    period: 'Jun 2022 - Dec 2022',
    description: 'Designed and implemented CV systems for autonomous robots. Created custom object detection models that achieved 92% accuracy in industrial environments.',
    technologies: ['Python', 'PyTorch', 'YOLO', 'ROS']
  },
  {
    id: 3,
    title: 'IOT Engineer',
    company: 'Spark Foundation',
    period: 'Jan 2022 - May 2022',
    description: 'Developed IoT solutions for smart home applications. Integrated computer vision capabilities with IoT devices for enhanced security systems.',
    technologies: ['Python', 'Raspberry Pi', 'ESP32', 'MQTT']
  },
  {
    id: 4,
    title: '3D Printer Engineer',
    company: 'NUTech Innovation Center',
    period: 'Sep 2021 - Dec 2021',
    description: 'Maintained and improved 3D printers. Implemented computer vision for print quality monitoring and error detection.',
    technologies: ['Python', 'C++', 'OpenCV', 'Arduino']
  },
  {
    id: 5,
    title: 'Freelance CV Developer',
    company: 'Fiverr & LinkedIn',
    period: '2020 - Present',
    description: 'Completed 18+ projects in computer vision, OCR, and AI-powered applications for various clients worldwide.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Docker']
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            My journey in the field of computer vision and AI development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-tech-blue/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-10 w-4 h-4 rounded-full bg-tech-blue border-4 border-white dark:border-gray-900 -translate-x-1/2"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4`}>
                  <div className="md:w-1/2 md:text-right md:pr-8 flex flex-col items-start md:items-end">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="inline-flex items-center mb-2">
                        <Calendar className="h-4 w-4 mr-2 text-tech-grey" />
                        <span className="text-sm text-tech-grey">{exp.period}</span>
                      </div>
                      {index % 2 === 0 ? <div className="hidden md:block" /> : null}
                    </div>
                  </div>

                  <Card className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} glass-card animate-fade-in`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-1">
                        <Briefcase className="h-4 w-4 mr-2 text-tech-blue dark:text-tech-light-blue" />
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                      </div>
                      <CardDescription className="font-medium text-tech-blue dark:text-tech-light-blue">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-tech-grey dark:text-tech-light-grey">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map(tech => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
