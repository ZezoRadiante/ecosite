import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export const AboutContent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
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
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  return <div ref={contentRef} className="space-y-6 text-center max-w-3xl mx-auto p-8 rounded-xl backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:bg-white/20 animate-on-scroll">
      <div className="space-y-5 text-earth-800 text-lg">
        <p className="font-medium text-xl leading-relaxed transition-all duration-500 hover:text-sky-700 transform hover:translate-y-[-2px]">SOMOS O PRINCIPAL PARCEIRO EM CONSULTORIA AMBIENTAL NO BRASIL</p>
        
        <p className="leading-relaxed transition-all duration-500 hover:text-sky-700 transform hover:translate-y-[-2px]">Fundada em 2015 por engenheiros visionários, a Eco-Lógica Brasil se destaca pela experiência em estudos ambientais e na produção e plantio de mudas em larga escala. Com capacidade técnica para produzir e plantar mais de 500 mil mudas por ano, nossa empresa é sinônimo de excelêcia e inovação.
Além disso, a Eco-Lógica Brasil adota práticas sustentáveis e tecnologias avançadas em todos os seus processos, reforçando o compromisso com a preservação ambiental e o desenvolvimento sustentável.</p>
        
        <p className="leading-relaxed transition-all duration-500 hover:text-sky-700 transform hover:translate-y-[-2px]">Com uma equipe altamente qualificada e motivada, a em- presa busca constantemente soluções inovadoras para con- tribuir com a recuperação de ecossistemas e a melhoria da qualidade de vida das comunidades onde atua.</p>
      </div>
      
      <div className="pt-6">
        <Button variant="eco" className="rounded-full group px-6 py-2.5 shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:from-eco-500 hover:to-eco-300" asChild>
          <a href="#contact">
            Fale Conosco
            <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </Button>
      </div>
    </div>;
};