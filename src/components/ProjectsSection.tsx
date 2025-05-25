import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProjectTag = 'Computer Vision' | 'AI' | 'OCR' | 'Chatbot' | 'GAN' | 'IoT' | 'Embedded' | 'All';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  tags: ProjectTag[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EyeMate',
    description: 'Assistive AI tool for visually impaired users that provides real-time environment description and navigation assistance.',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Raspberry Pi'],
    tags: ['Computer Vision', 'AI'],
  },
  {
    id: 2,
    title: 'NeuroOptix',
    description: 'Safety vest detection & 3D distance estimation system for industrial environments to prevent accidents.',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'OAK-D'],
    tags: ['Computer Vision', 'AI'],
  },
  {
    id: 3,
    title: 'CV Attendance System',
    description: 'Automated attendance tracking system using facial recognition with Raspberry Pi and OAK-D.',
    techStack: ['Python', 'dlib', 'OpenCV', 'Raspberry Pi', 'OAK-D'],
    tags: ['Computer Vision', 'AI', 'Embedded'],
  },
  {
    id: 4,
    title: 'ANPR System',
    description: 'Automatic Number Plate Recognition using YOLO for detection and PaddleOCR for text recognition.',
    techStack: ['Python', 'YOLO', 'PaddleOCR', 'TensorRT'],
    tags: ['Computer Vision', 'OCR'],
  },
  {
    id: 5,
    title: 'Age Transformation App',
    description: 'GAN-based application that transforms facial images to different age groups.',
    techStack: ['Python', 'PyTorch', 'StyleGAN', 'Flask'],
    tags: ['AI', 'GAN'],
  },
  {
    id: 6,
    title: 'Vehicle Accident Detection',
    description: 'Real-time monitoring system that detects vehicle accidents from CCTV footage.',
    techStack: ['Python', 'TensorFlow', 'LSTM', 'OpenCV'],
    tags: ['Computer Vision', 'AI'],
  },
  {
    id: 7,
    title: 'Gemini-based Customer Service Chatbot',
    description: 'Intelligent customer service chatbot powered by Google Gemini and trained on custom data.',
    techStack: ['Python', 'Google Gemini API', 'LangChain', 'FastAPI'],
    tags: ['AI', 'Chatbot'],
  }
];

const allTags: ProjectTag[] = ['All', 'Computer Vision', 'AI', 'OCR', 'Chatbot', 'GAN', 'IoT', 'Embedded'];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState<ProjectTag>('All');
  
  const filteredProjects = projects.filter(project => 
    activeTag === 'All' || project.tags.includes(activeTag)
  );

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            Explore my portfolio of AI and computer vision projects that solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                activeTag === tag ? "bg-tech-blue text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              )}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden animate-fade-in h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-tech-blue dark:text-tech-light-blue">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-tech-grey mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-tech-grey mb-2">Categories:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;