
import React, { useEffect, useRef } from 'react';
import { StatsGrid } from './about/StatsGrid';
import { AboutContent } from './about/AboutContent';
import { aboutImages } from '@/data/projectData';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div 
      id="about" 
      ref={aboutRef}
      className="py-24 relative bg-cover bg-center bg-no-repeat min-h-[600px] section-transition"
      style={{
        backgroundImage: `url('${aboutImages.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle worker image as decorative element */}
      <div 
        className="absolute right-0 bottom-0 w-full h-full bg-right-bottom bg-no-repeat opacity-5 transition-opacity duration-700 hover:opacity-10"
        style={{ 
          backgroundImage: `url('./lovable-uploads/7002d398-a9f7-424a-a14e-12c232731bc1.png')`,
          backgroundSize: '30%',
          backgroundPosition: 'right bottom'
        }}
      ></div>
      
      {/* Enhanced overlay with smoother blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/70 backdrop-blur-[2px] z-0 transition-all duration-1000 hover:backdrop-blur-[3px]"></div>
      
      {/* Enhanced top gradient transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-eco-100/60 to-transparent z-10 transition-opacity duration-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12 transform transition-bounce hover:scale-[1.01] animate-on-scroll">
          <span className="inline-block text-sky-700 bg-sky-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-3 shadow-sm transition-all duration-500 hover:shadow-md hover:bg-sky-50/90">
            Nossa História
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-earth-800 mb-4 transition-all duration-500 hover:text-earth-700">
            Sobre a <span className="text-sky-700 transition-colors duration-500 hover:text-sky-600">Eco-lógica Brasil</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-sky-700 to-eco-400 mx-auto rounded-full transition-all duration-500 hover:w-32"></div>
        </div>

        {/* Content with enhanced animations */}
        <AboutContent />
            
        {/* Stats grid with enhanced animations */}
        <div className="mt-16 animate-on-scroll">
          <StatsGrid />
        </div>
      </div>
      
      {/* Enhanced bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sky-50/50 to-transparent z-10 transition-opacity duration-700"></div>
    </div>
  );
};

export default About;
