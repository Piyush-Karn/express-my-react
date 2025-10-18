import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { MapPin, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('UewmYWUs3hoPXF89e');

    if (contactInfoRef.current) {
      gsap.to(contactInfoRef.current, {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 1,
      });
    }

    if (contactFormRef.current) {
      gsap.to(contactFormRef.current, {
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm('service_7mqwkia', 'template_gxmro7y', formRef.current);
      toast({
        title: 'Success!',
        description: 'Message delivered successfully.',
      });
      formRef.current.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          Contact <span className="text-primary">Me</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={contactInfoRef} className="opacity-0 -translate-x-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <MapPin className="mr-3 text-primary" /> Get in Touch
            </h3>
            <p className="text-lg mb-8 text-muted-foreground">
              I'm excited to collaborate on innovative AI projects. Reach out to discuss opportunities or just say hi!
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p>piyushkarn96@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/piyush-kumar-045b4b2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:-translate-y-1 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Piyush-Karn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:-translate-y-1 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/PiyushKarn34316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:-translate-y-1 transition-transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={contactFormRef} className="opacity-0 translate-x-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here..."
                      required
                      className="mt-2"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full hover:-translate-y-1 transition-transform"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
