
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verificationUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    date: 'Sep 2022',
    description: 'Comprehensive specialization covering neural networks, convolutional networks, sequence models, and more.',
    skills: ['Neural Networks', 'CNN', 'RNN', 'LSTM', 'Transfer Learning'],
    verificationUrl: 'https://coursera.org/verify/12345'
  },
  {
    id: 'cert-2',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Mar 2022',
    description: 'Professional certification demonstrating proficiency in using TensorFlow for developing ML applications.',
    skills: ['TensorFlow', 'Keras', 'CNN', 'Time Series', 'NLP'],
    verificationUrl: 'https://tensorflow.org/certificate/12345'
  },
  {
    id: 'cert-3',
    title: 'OpenCV Bootcamp',
    issuer: 'OpenCV',
    date: 'Nov 2021',
    description: 'Advanced computer vision techniques and practical implementation using the OpenCV library.',
    skills: ['Image Processing', 'Object Detection', 'Feature Extraction', 'Video Analysis'],
    verificationUrl: 'https://opencv.org/verify/12345'
  },
  {
    id: 'cert-4',
    title: 'Computer Vision with PyTorch',
    issuer: 'Udemy',
    date: 'Jul 2021',
    description: 'Comprehensive course on implementing computer vision applications using PyTorch.',
    skills: ['PyTorch', 'Transfer Learning', 'GANs', 'Object Detection'],
    verificationUrl: 'https://udemy.com/certificate/12345'
  },
  {
    id: 'cert-5',
    title: 'Edge AI and Computer Vision',
    issuer: 'Great Learning',
    date: 'Mar 2021',
    description: 'Course focused on deploying computer vision models on edge devices.',
    skills: ['Edge AI', 'Model Optimization', 'TensorRT', 'OpenVINO'],
    verificationUrl: 'https://greatlearning.com/verify/12345'
  },
  {
    id: 'cert-6',
    title: 'Embedded Systems Design',
    issuer: 'FAST',
    date: 'Dec 2020',
    description: 'Certification in designing and implementing embedded systems for IoT applications.',
    skills: ['Embedded C', 'RTOS', 'Microcontrollers', 'IoT Protocols'],
    verificationUrl: 'https://fast.edu.pk/verify/12345'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Training</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            Professional certifications and specialized training I've completed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="glass-card animate-fade-in h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Award className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </div>
                    <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                  </div>
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:text-tech-dark-blue dark:text-tech-light-blue dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-tech-grey dark:text-tech-light-grey mb-4">
                  {cert.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="glass-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Additional Training & Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">AI Frameworks & Libraries</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pl-6 list-disc">
                      <li>Advanced PyTorch Techniques (Udemy)</li>
                      <li>TensorFlow for Computer Vision (Coursera)</li>
                      <li>HuggingFace Transformers (HuggingFace)</li>
                      <li>Advanced OpenCV (OpenCV.org)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Embedded Systems & Hardware</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pl-6 list-disc">
                      <li>Raspberry Pi Masterclass (Udemy)</li>
                      <li>NVIDIA Jetson Development (NVIDIA DLI)</li>
                      <li>Arduino Advanced Applications (Arduino.cc)</li>
                      <li>Edge AI Optimization (Intel)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Software Development</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pl-6 list-disc">
                      <li>API Development with FastAPI (Udemy)</li>
                      <li>Docker for ML Applications (Coursera)</li>
                      <li>Git & GitHub for Team Collaboration (Udemy)</li>
                      <li>Database Design and Implementation (MongoDB University)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
