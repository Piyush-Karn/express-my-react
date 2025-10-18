import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
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

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KCC Institute Of Technology and Management',
      period: '2023 - 2027',
      description: 'Currently studying CSE, with experience participating in AI hackathons and coding competitions.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'SM Arya Public School',
      period: '2022-2023',
      description: 'Completed 12th grade with a focus on Physics, Chemistry, and Mathematics.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          My <span className="text-primary">Education</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="timeline-item opacity-0 -translate-x-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {item.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-primary">
                    {item.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
