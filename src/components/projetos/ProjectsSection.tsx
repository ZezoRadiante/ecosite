
import React, { useEffect, useRef } from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectCarousel from './ProjectCarousel';
import ProjectsDecorations from './ProjectsDecorations';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
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
    <section 
      id="projetos" 
      ref={sectionRef}
      className="py-28 overflow-hidden relative bg-gradient-to-b from-eco-50/40 via-eco-100/30 to-eco-200/20 transition-all duration-1000 ease-in-out"
      data-section="projetos"
    >
      <ProjectsDecorations />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-on-scroll">
          <ProjectsHeader />
        </div>
      </div>

      {/* Full width carousel with enhanced animation */}
      <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default ProjectsSection;
