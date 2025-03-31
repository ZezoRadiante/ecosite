
import React from 'react';

const ProjectsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-[#71B707] bg-eco-100 px-4 py-1.5 rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in shadow-sm">
        Conheça Nosso Trabalho
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-delay-1 text-earth-700 text-center">
        Nossos <span className="text-[#71B707]">Projetos</span>
      </h2>
      
      <div className="w-24 h-1 bg-gradient-to-r from-[#71B707] to-eco-300 mx-auto rounded-full mb-6"></div>
      
      <p className="max-w-3xl mx-auto text-lg text-earth-600 opacity-0 animate-fade-in-delay-2 leading-relaxed">
        Confira alguns dos nossos projetos de conservação e sustentabilidade implementados em diferentes ecossistemas.
      </p>
    </div>
  );
};

export default ProjectsHeader;
