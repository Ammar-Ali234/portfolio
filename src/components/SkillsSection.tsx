
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Cpu, Database, Globe } from 'lucide-react';

interface SkillCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Languages',
    icon: <Code className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'C++', level: 80 },
      { name: 'MATLAB', level: 75 },
      { name: 'Verilog', level: 70 },
    ]
  },
  {
    id: 2,
    name: 'Frameworks & Tools',
    icon: <Globe className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />,
    skills: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'OpenCV', level: 95 },
      { name: 'HuggingFace', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Flask', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 75 },
    ]
  },
  {
    id: 3,
    name: 'Hardware',
    icon: <Cpu className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />,
    skills: [
      { name: 'Raspberry Pi', level: 90 },
      { name: 'Arduino', level: 85 },
      { name: 'Jetson Nano', level: 80 },
      { name: 'ESP32', level: 75 },
      { name: 'OAK-D', level: 85 },
    ]
  },
  {
    id: 4,
    name: 'Software',
    icon: <Database className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />,
    skills: [
      { name: 'Roboflow', level: 85 },
      { name: 'CVAT', level: 80 },
      { name: 'Vivado', level: 75 },
      { name: 'Proteus', level: 70 },
      { name: 'Eagle PCB', level: 65 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            A comprehensive overview of my technical skills and competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="glass-card animate-fade-in">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-tech-blue/10 dark:bg-tech-blue/20">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" 
                        indicatorClassName="bg-gradient-to-r from-tech-blue to-tech-light-blue" 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
