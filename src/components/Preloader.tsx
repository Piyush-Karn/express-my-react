import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[9999] transition-opacity duration-500">
      <div className="text-4xl font-bold text-primary tracking-[2px] animate-pulse">
        PK
      </div>
    </div>
  );
};

export default Preloader;
