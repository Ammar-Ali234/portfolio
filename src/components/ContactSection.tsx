
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally connect to a backend service
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="w-full h-full bg-[url('/circuit-bg.svg')] bg-center bg-repeat-space"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-tech-grey dark:text-tech-light-grey">
            Have a project in mind or interested in collaboration? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="glass-card col-span-1 lg:col-span-2 animate-fade-in">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="tech-gradient w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="glass-card animate-fade-in">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-tech-blue/10 dark:bg-tech-blue/20 p-2.5 rounded-full">
                      <Mail className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:mammarali299@gmail.com" 
                        className="text-tech-blue hover:underline dark:text-tech-light-blue text-sm"
                      >
                        mammarali299@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-tech-blue/10 dark:bg-tech-blue/20 p-2.5 rounded-full">
                      <Phone className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-tech-grey dark:text-tech-light-grey text-sm">Available upon request</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-tech-blue/10 dark:bg-tech-blue/20 p-2.5 rounded-full">
                      <MapPin className="h-5 w-5 text-tech-blue dark:text-tech-light-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-tech-grey dark:text-tech-light-grey text-sm">Islamabad, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <a 
                      href="https://www.linkedin.com/in/ammarali" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <a 
                      href="https://github.com/ammarali" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <a 
                      href="mailto:mammarali299@gmail.com" 
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
