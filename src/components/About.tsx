import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 1,
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
      });
    }
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          About <span className="text-primary">Me</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="opacity-0 -translate-x-8">
            <div className="relative w-full max-h-[400px] flex items-center justify-center popup-card rounded-lg shadow-xl overflow-hidden bg-black h-[400px]">
              {/* Replaced placeholder with the local image */}
              <img 
                src="/aboutme.png" 
                alt="Piyush Kumar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Piyush Kumar</h3>
                <p className="text-primary-foreground">AI Developer</p>
              </div>
            </div>
          </div>
          <div ref={contentRef} className="opacity-0 translate-x-8">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-lg mb-6">
              I'm Piyush Kumar, a B.Tech CSE student passionate about AI development, with a focus on
              solving real-world problems through intelligent systems. I thrive on building innovative
              solutions that leverage cutting-edge technologies.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="mb-2">
                  <strong>Name:</strong> Piyush Kumar
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> piyushkarn96@gmail.com
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>Location:</strong> Delhi, India
                </p>
                <p className="mb-2">
                  <strong>Available:</strong> Full-time
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button
                variant="default"
                className="shadow-lg hover:-translate-y-1 transition-transform"
                asChild
              >
                <a href="https://www.linkedin.com/in/piyush-kumar-045b4b2b7/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="secondary"
                className="shadow-lg hover:-translate-y-1 transition-transform bg-gray-800 hover:bg-gray-900 text-white"
                asChild
              >
                <a href="https://github.com/Piyush-Karn" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;