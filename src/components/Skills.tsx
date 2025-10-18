import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Wrench, Brain, Database, BarChart3, GitBranch, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const techSkillsRef = useRef<HTMLDivElement>(null);
  const frameworkSkillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (techSkillsRef.current) {
      gsap.to(techSkillsRef.current, {
        scrollTrigger: {
          trigger: techSkillsRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        duration: 1,
      });
    }

    if (frameworkSkillsRef.current) {
      gsap.to(frameworkSkillsRef.current, {
        scrollTrigger: {
          trigger: frameworkSkillsRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        duration: 1,
        delay: 0.3,
      });
    }

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar) => {
      ScrollTrigger.create({
        trigger: bar,
        start: 'top 90%',
        onEnter: () => {
          const progress = bar.getAttribute('data-progress');
          gsap.to(bar, { width: `${progress}%`, duration: 1.5, ease: 'power2.out' });
        },
      });
    });
  }, []);

  const technicalSkills = [
    { name: 'Python', percentage: 95, color: 'bg-purple-600' },
    { name: 'Machine Learning', percentage: 90, color: 'bg-emerald-600' },
    { name: 'Deep Learning', percentage: 85, color: 'bg-amber-600' },
    { name: 'Natural Language Processing', percentage: 80, color: 'bg-pink-600' },
    { name: 'Computer Vision', percentage: 85, color: 'bg-blue-600' },
    { name: 'Data Science', percentage: 90, color: 'bg-indigo-600' },
  ];

  const frameworks = [
    { name: 'TensorFlow', icon: Brain },
    { name: 'PyTorch', icon: Code },
    { name: 'Pandas', icon: Database },
    { name: 'Scikit-learn', icon: BarChart3 },
    { name: 'Flask', icon: Server },
    { name: 'Hugging Face', icon: GitBranch },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative">
          My <span className="text-primary">Skills</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div ref={techSkillsRef} className="opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Code className="mr-3 text-primary" /> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className={`progress-fill ${skill.color}`}
                      data-progress={skill.percentage}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Framework Skills */}
          <div ref={frameworkSkillsRef} className="opacity-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Wrench className="mr-3 text-primary" /> Frameworks & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {frameworks.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="bg-card border border-border rounded-lg p-6 text-center popup-card shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold hover:text-primary transition-colors">{name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
