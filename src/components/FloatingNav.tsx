import { useEffect, useState } from 'react';
import { Home, User, Code, Briefcase, BookOpen, Mail } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'home';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= window.innerHeight / 3 && sectionTop + sectionHeight > 0) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: Home },
    { id: 'about', icon: User },
    { id: 'skills', icon: Code },
    { id: 'projects', icon: Briefcase },
    { id: 'education', icon: BookOpen },
    { id: 'contact', icon: Mail },
  ];

  return (
    <nav className="floating-nav hidden md:flex items-center gap-2">
      {navItems.map(({ id, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            activeSection === id
              ? 'text-primary scale-125'
              : 'text-foreground hover:text-primary hover:-translate-y-1'
          }`}
          aria-label={`Navigate to ${id}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </nav>
  );
};

export default FloatingNav;
