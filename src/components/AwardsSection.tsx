
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface Award {
  id: number;
  title: string;
  event: string;
  year: string;
  description: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: '1st Place',
    event: 'AI Innofest 2024',
    year: '2024',
    description: 'Won first place for developing an innovative computer vision solution for accessibility.'
  },
  {
    id: 2,
    title: 'Winner',
    event: 'COMPPEC 2024',
    year: '2024',
    description: 'Winner of the Computer Vision Challenge for real-time object detection system.'
  },
  {
    id: 3,
    title: 'Most Promising Innovation',
    event: 'Ready Tensor',
    year: '2023',
    description: 'Recognized for creating a highly efficient computer vision model for industrial applications.'
  },
  {
    id: 4,
    title: '3rd Place',
    event: 'AMD AI Competition',
    year: '2023',
    description: 'Secured third position in the AMD-sponsored AI development contest.'
  }
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            Recognition received for innovation and excellence in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <Card key={award.id} className="glass-card animate-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-24 h-24 bg-tech-blue/10 dark:bg-tech-blue/20 transform rotate-45 translate-x-12 -translate-y-12"></div>
              </div>
              
              <CardContent className="pt-6 pb-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-tech-blue/10 dark:bg-tech-blue/20 flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-tech-blue dark:text-tech-light-blue" />
                </div>
                
                <h3 className="text-xl font-bold text-tech-blue dark:text-tech-light-blue mb-1">{award.title}</h3>
                <p className="text-sm font-medium mb-1">{award.event}</p>
                <p className="text-xs text-tech-grey mb-3">{award.year}</p>
                
                <p className="text-sm text-tech-grey dark:text-tech-light-grey">
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
