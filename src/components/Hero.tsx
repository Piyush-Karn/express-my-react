import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import gsap from 'gsap';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Typed.js animation
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['AI Developer', 'Problem Solver', 'Tech Enthusiast'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  useEffect(() => {
    // Hero content animation
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
      });
    }

    // Create particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full opacity-30 bg-primary';
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current.appendChild(particle);

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient animate-[rotate_30s_linear_infinite]" />
      <div ref={particlesRef} className="absolute inset-0" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div ref={heroContentRef} className="opacity-0 translate-y-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Piyush Kumar</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-medium mb-8">
            I'm a <span ref={typedRef} className="text-primary" />
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="default"
              size="lg"
              className="shadow-lg hover:-translate-y-1 transition-transform"
              asChild
            >
              <a href="/Resume/Piyush_Kumar_Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-lg hover:-translate-y-1 transition-transform border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
