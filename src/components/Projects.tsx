import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.2,
      });
    });
  }, []);

  const projects = [
    {
      title: 'Flappy Bird',
      description: 'A classic game recreated using Python and Pygame, featuring smooth controls and challenging gameplay.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
      tags: ['Python', 'Pygame'],
      liveDemo: 'https://youtu.be/qHYKrENg14k',
      github: 'https://github.com/Piyush-Karn/Flappy-Bird',
    },
    {
      title: 'Movie Recommendation System',
      description: 'A content-based filtering system using ML to recommend movies based on user preferences.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop',
      tags: ['Python', 'Machine Learning'],
      liveDemo: 'https://smartpicks-movie-recommender.streamlit.app/',
      github: 'https://github.com/Piyush-Karn/Movie-Recommendation-System',
    },
    {
      title: 'ResumeSnap',
      description: 'An AI-powered platform to evaluate resumes and match candidates with job opportunities.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
      tags: ['Python', 'AI', 'Flask'],
      liveDemo: 'https://youtu.be/FubPTTuLrU0',
      github: 'https://github.com/Piyush-Karn/resumesnap',
    },
    {
      title: 'NIRVACHAN [In Progress]',
      description: 'An AI-powered manifesto analyzer (under development) to verify political claims and enhance voter awareness using NLP and data analysis.',
      image: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?w=400&h=300&fit=crop',
      tags: ['Python', 'AI', 'NLP'],
      liveDemo: null,
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          My <span className="text-primary">Projects</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card opacity-0 translate-y-8">
              <Card className="popup-card overflow-hidden h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-muted-foreground font-medium flex items-center cursor-not-allowed">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Coming Soon
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-muted-foreground font-medium flex items-center cursor-not-allowed">
                      <Github className="mr-1 h-4 w-4" />
                      Coming Soon
                    </span>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
