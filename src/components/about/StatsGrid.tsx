
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountAnimation } from '@/hooks/useCountAnimation';
import { StatCard } from './StatCard';

export const StatsGrid: React.FC = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Initialize counters with ref to track if animation already started
  const animatedRef = useRef(false);
  
  const { count: mudasCount, digits: mudasDigits } = useCountAnimation(inView || animatedRef.current ? 1000000 : 0, 2000);
  const { count: hectaresCount, digits: hectaresDigits } = useCountAnimation(inView || animatedRef.current ? 100000 : 0, 2000);
  const { count: licencasCount, digits: licencasDigits } = useCountAnimation(inView || animatedRef.current ? 300 : 0, 2000);
  const { count: anosCount, digits: anosDigits } = useCountAnimation(inView || animatedRef.current ? 10 : 0, 2000);

  useEffect(() => {
    if (inView) {
      animatedRef.current = true;
    }
  }, [inView]);

  return (
    <div 
      ref={inViewRef} 
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto opacity-0 animate-fade-in-delay-3"
    >
      <StatCard 
        title="Mudas Produzidas e Plantadas" 
        value={mudasCount} 
        digits={mudasDigits} 
      />
      
      <StatCard 
        title="Hectares regularizados junto ao INCRA" 
        value={hectaresCount} 
        digits={hectaresDigits} 
      />
      
      <StatCard 
        title="Licenças ambientais emitidas" 
        value={licencasCount} 
        digits={licencasDigits} 
      />
      
      <StatCard 
        title="De atuação no setor ambiental" 
        value={anosCount} 
        digits={anosDigits} 
        suffix="ANOS"
      />
    </div>
  );
};
