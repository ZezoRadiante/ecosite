
import React, { useEffect, useRef } from 'react';
import { bannerImages } from '@/data/projectData';

const Banner = () => {
  const bannerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = bannerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return <section id="banner" ref={bannerRef} className="py-6 md:py-8 section-gradient-light relative overflow-hidden section-transition">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-700 hover:opacity-15" style={{
      backgroundImage: `url('./lovable-uploads/7002d398-a9f7-424a-a14e-12c232731bc1.png')`
    }} />
      
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10 transition-opacity duration-700" />
      
      <div className="container mx-auto relative z-20">
        <div className="w-full space-y-3 text-center px-4 md:px-8 mb-0 transform transition-bounce hover:scale-[1.01] animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-earth-800 leading-tight lg:text-7xl">
            Promovendo um <span className="text-[#71B707] italic transition-all duration-500 hover:text-eco-500">Futuro Verde</span> para as Novas Gerações
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full my-2 transition-all duration-500 hover:w-32" />
          
          <p className="text-earth-600 leading-relaxed max-w-3xl mx-auto transition-all duration-500 hover:text-earth-800 font-normal text-center text-lg">
            A Eco-Lógica Brasil é uma empresa referência em consultoria e engenharia ambiental no Nordeste brasileiro, focada em soluções sustentáveis.
          </p>
          
          <p className="text-earth-600 leading-relaxed max-w-3xl mx-auto transition-all duration-500 hover:text-earth-800 font-normal text-center text-lg">
            Com serviços prestados em todas as regiões do país, somos referência em projetos ambientais de grande escala.
          </p>
        </div>
      </div>
      
      <div className="w-full overflow-hidden relative z-10 transition-all duration-1000 ease-in-out animate-on-scroll -mt-4">
        <img 
          src="./lovable-uploads/00770c6b-a0d1-4478-8551-42887c849476.png" 
          alt="Criança com capacete branco segurando uma muda em um viveiro de plantas" 
          className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-1000 filter hover:brightness-105" 
          onError={e => {
            console.error("Banner image failed to load, trying alternative path");
            (e.target as HTMLImageElement).src = "./lovable-uploads/becbdbe4-e862-4db5-bde6-5636d0c06f24.png";
          }} 
        />
      </div>
    </section>;
};

export default Banner;
