
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Link, Eye } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  platform: string;
  date: string;
  abstract: string;
  tags: string[];
  url: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'VisionMate: AI-Powered Assistance for the Visually Impaired',
    platform: 'Ready Tensor',
    date: 'Feb 2024',
    abstract: 'This article presents VisionMate, an advanced computer vision solution designed to assist visually impaired individuals in navigating everyday environments.',
    tags: ['Computer Vision', 'Assistive Technology', 'AI'],
    url: 'https://readytensor.com/visionmate'
  },
  {
    id: 2,
    title: 'NeuroOptix: Industrial Safety Enhancement Through Computer Vision',
    platform: 'Ready Tensor',
    date: 'Nov 2023',
    abstract: 'NeuroOptix is a novel computer vision system that enhances industrial safety by detecting safety vests and estimating distances in 3D space.',
    tags: ['Computer Vision', 'Industrial Safety', '3D Vision'],
    url: 'https://readytensor.com/neurooptix'
  },
  {
    id: 3,
    title: 'Optimizing Edge AI for Real-Time Computer Vision Applications',
    platform: 'AMD AI Developer Contest',
    date: 'Jul 2023',
    abstract: 'This publication explores techniques for optimizing deep learning models to run efficiently on edge devices with limited computational resources.',
    tags: ['Edge AI', 'Optimization', 'Computer Vision'],
    url: 'https://amd.ai/contest/publications/12345'
  }
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            Research articles and technical publications showcasing my work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Card key={pub.id} className="glass-card animate-fade-in flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                </div>
                <CardDescription>{pub.platform} • {pub.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-tech-grey dark:text-tech-light-grey mb-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-1">
                  {pub.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="default" size="sm" className="tech-gradient w-full" asChild>
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" /> Read Publication
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
