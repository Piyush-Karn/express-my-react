import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 w-12 h-7 bg-card rounded-full flex items-center p-1 cursor-pointer z-50 shadow-lg transition-colors"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun className="w-3 h-3 text-foreground" />
        <Moon className="w-3 h-3 text-foreground" />
      </div>
      <div
        className={`w-5 h-5 bg-primary rounded-full transition-transform duration-300 ${
          isDark ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
