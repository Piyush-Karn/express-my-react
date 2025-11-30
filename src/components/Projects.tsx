import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChromaGrid from './react-bits/ChromaGrid';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
        gsap.fromTo(containerRef.current, 
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
            }
        );
    }
  }, []);

  const projects = [
    {
      title: 'Flappy Bird',
      subtitle: 'Python & Pygame Game',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
      handle: 'View Demo',
      url: 'https://youtu.be/qHYKrENg14k',
      gradient: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
      borderColor: '#fdbb2d'
    },
    {
      title: 'Movie Recommender',
      subtitle: 'ML Content-Based System',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop',
      handle: 'Try App',
      url: 'https://smartpicks-movie-recommender.streamlit.app/',
      gradient: 'linear-gradient(135deg, #000000, #434343)',
      borderColor: '#ffffff'
    },
    {
      title: 'ResumeSnap',
      subtitle: 'AI Resume Analyzer',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      handle: 'View Demo',
      url: 'https://youtu.be/FubPTTuLrU0',
      gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
      borderColor: '#38ef7d'
    },
    {
      title: 'NIRVACHAN',
      subtitle: 'AI Manifesto Analyzer (WIP)',
      image: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=600&h=400&fit=crop',
      handle: 'Coming Soon',
      url: '',
      gradient: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
      borderColor: '#fcb045'
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          My <span className="text-primary">Projects</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        
        <div ref={containerRef} className="w-full">
            <ChromaGrid 
                items={projects}
                columns={3}
                rows={2} // Adjusted to fit 4 items better
                radius={200}
                className="w-full"
            />
        </div>
      </div>
    </section>
  );
};

export default Projects;