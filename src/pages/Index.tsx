import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Solucoes from '@/components/Services';
import Projetos from '@/components/Projetos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Loading } from '@/components/ui/loading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadingTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        console.log("Forcing content display after timeout");
        setIsLoading(false);
        setContentReady(true);
      }
    }, 7000);
    
    const failsafeTimeout = setTimeout(() => {
      setIsLoading(false);
      setContentReady(true);
      document.body.classList.remove('loading');
      console.warn("Failsafe timeout triggered - forcing content display");
    }, 10000);
    
    document.body.classList.add('loading');
    
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      clearTimeout(failsafeTimeout);
      document.body.classList.remove('loading');
    };
  }, []);

  const handleContentLoaded = () => {
    console.log("Content loaded successfully");
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }
    setTimeout(() => {
      setIsLoading(false);
      setContentReady(true);
      document.body.classList.remove('loading');
    }, 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!isLoading && contentReady) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              
              if (entry.target.tagName.toLowerCase() === 'section') {
                const sectionId = entry.target.id;
                if (sectionId) {
                  document.body.setAttribute('data-active-section', sectionId);
                }
              }
            }
          });
        },
        { 
          threshold: 0.15,
          rootMargin: '-80px 0px -20% 0px'
        }
      );
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      document.querySelectorAll('section').forEach(el => {
        observer.observe(el);
      });
      
      return () => {
        document.querySelectorAll('.animate-on-scroll, section').forEach(el => {
          observer.unobserve(el);
        });
      };
    }
  }, [isLoading, contentReady]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700">
          <Loading 
            size="lg" 
            variant="eco" 
            text="Carregando experiência sustentável..."
            className="scale-110 transform animate-pulse-gentle"
          />
        </div>
      )}
      
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{ 
          backgroundImage: `url('./lovable-uploads/7002d398-a9f7-424a-a14e-12c232731bc1.png')`,
          backgroundSize: '20%',
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'soft-light',
          filter: 'blur(0.5px)'
        }}
      ></div>
      
      <div 
        ref={sectionsRef}
        className={`min-h-screen transition-all duration-1000 ${!contentReady ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navbar />
        <Hero onVideoLoaded={handleContentLoaded} />
        <Banner />
        <About />
        <Solucoes />
        <Projetos />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
