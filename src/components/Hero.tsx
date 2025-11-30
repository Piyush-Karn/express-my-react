import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hyperspeed from '@/components/react-bits/Hyperspeed';
import RotatingText from '@/components/react-bits/RotatingText';

const Hero = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero content animation
    if (heroContentRef.current) {
      gsap.to(heroContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed 
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div ref={heroContentRef} className="opacity-0 translate-y-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Hi, I'm <span className="text-primary">Piyush Kumar</span>
          </h1>
          <div className="text-xl md:text-3xl font-medium mb-8 flex items-center justify-center gap-2 text-white">
            I'm a 
            <RotatingText
              texts={['AI Developer', 'Problem Solver', 'Tech Enthusiast']}
              mainClassName="bg-primary px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
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
              className="shadow-lg hover:-translate-y-1 transition-transform border-primary text-primary hover:bg-primary hover:text-white"
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