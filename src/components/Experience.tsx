import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.experience-item');
    timelineItems.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2,
      });
    });
  }, []);

  const experiences = [
    {
      title: 'AI Project Developer',
      company: 'Personal Projects',
      period: '2023',
      description:
        'Designed and developed AI-powered applications including a resume analysis tool (ResumeSnap), a Movie recommendation system using Python and web frameworks.',
      skills: ['Python', 'TensorFlow', 'Flask'],
    },
    {
      title: 'AI Hackathon Participant',
      company: 'College & Online Hackathons',
      period: '2023 - Present',
      description:
        'Led and collaborated on projects that tackled real-world problems using AI, such as voter awareness and job matching. Focused on model development, UI design, and team coordination.',
      skills: ['Python', 'Flask', 'NLP'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          Work <span className="text-primary">Experience</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <div key={index} className="experience-item opacity-0 -translate-x-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {item.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-primary">
                    {item.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
