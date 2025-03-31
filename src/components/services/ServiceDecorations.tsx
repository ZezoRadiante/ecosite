
import React from 'react';

const ServiceDecorations = () => {
  return (
    <>
      {/* Dots decorativos com animação */}
      <div className="absolute -top-10 -left-10 w-20 h-20 opacity-30">
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse left-8" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse top-8" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse top-8 left-8" style={{ animationDelay: '0.9s' }}></div>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-20 h-20 opacity-30">
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse left-8" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse top-8" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse top-8 left-8" style={{ animationDelay: '1.1s' }}></div>
      </div>
    </>
  );
};

export default ServiceDecorations;
