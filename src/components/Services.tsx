import React, { useState } from 'react';
import ServiceDecorations from './services/ServiceDecorations';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useMediaQuery } from '@/hooks/use-media-query';
import CarouselDots from './projetos/CarouselDots';
import { useEffect } from 'react';
const Services = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const slides = 5; // Total number of slides/services

  // Use embla-carousel API to track current slide and setup navigation
  useEffect(() => {
    if (!api) return;
    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    // Cleanup
    return () => {
      api.off('select');
    };
  }, [api]);

  // Handler for dot navigation
  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };
  return <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <div className="container relative px-4 mx-auto">
        <ServiceDecorations />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-earth-800 bg-gradient-to-r from-eco-500 to-eco-700 bg-clip-text text-transparent">Nossos Serviços</h2>
          <p className="text-earth-700 max-w-2xl mx-auto font-medium text-lg">
            Oferecemos soluções ambientais completas, desde consultoria até implementação de projetos sustentáveis.
          </p>
        </div>
        
        {/* Services Carousel */}
        <div className="w-full max-w-5xl mx-auto">
          <Carousel opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          containScroll: "trimSnaps"
        }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Serviço 1 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100 h-full">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-800">Licenciamento Ambiental</h3>
                  <p className="text-earth-700 mb-6">
                    Facilitamos todo o processo de licenciamento ambiental para sua empresa, garantindo conformidade legal.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
                    
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Serviço 2 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100 h-full">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-800">Consultoria Ambiental</h3>
                  <p className="text-earth-700 mb-6">
                    Avaliamos seus processos e identificamos oportunidades para melhorar seu desempenho ambiental.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
                    
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Serviço 3 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100 h-full">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-800">Gestão de Resíduos</h3>
                  <p className="text-earth-700 mb-6">
                    Desenvolvemos e implementamos estratégias eficientes para gestão de resíduos industriais e comerciais.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
                    
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Serviço 4 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100 h-full">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-800">Eficiência Energética</h3>
                  <p className="text-earth-700 mb-6">
                    Oferecemos soluções para reduzir o consumo de energia e promover o uso de fontes renováveis.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
                    
                  </Button>
                </div>
              </CarouselItem>
              
              {/* Serviço 5 */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-eco-100 h-full">
                  <div className="w-14 h-14 bg-eco-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-eco-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-earth-800">Educação Ambiental</h3>
                  <p className="text-earth-700 mb-6">
                    Programas de conscientização e treinamento para funcionários e comunidades sobre práticas sustentáveis.
                  </p>
                  <Button variant="link" className="p-0 h-auto font-medium group text-eco-800 hover:text-eco-600" asChild>
                    
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <div className="mt-8 md:mt-10 flex items-center justify-center">
              <CarouselDots activeIndex={currentSlide} count={slides} onClick={scrollToSlide} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default Services;