
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { fallbackImages } from '@/data/projectData';

interface ProjectItemProps {
  project: {
    src: string;
    title: string;
    description: string;
    stats: string;
  };
  distance: number;
  isActive: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, distance, isActive }) => {
  const [imageError, setImageError] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  // Função para tentar caminhos alternativos para imagens
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    console.error(`Image failed to load: ${img.src}`);
    
    // Se já usamos o caminho com ./ tente com /
    if (img.src.startsWith('./') && !imageError) {
      const newPath = img.src.replace('./', '/');
      console.log(`Trying alternative path: ${newPath}`);
      img.src = newPath;
    } else {
      // Se todos os caminhos falharem, use a imagem de fallback
      setImageError(true);
    }
  };
  
  return (
    <div 
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-[100%] sm:basis-[100%] md:basis-[100%] lg:basis-[100%] transition-all duration-700",
        isActive 
          ? "scale-100 z-20 opacity-100" 
          : distance === 1 
            ? "scale-95 z-10 opacity-85" 
            : "scale-90 opacity-70"
      )}
    >
      <div 
        className={cn(
          "overflow-hidden rounded-3xl transition-all duration-500 relative group cursor-pointer",
          isActive 
            ? "h-[500px] md:h-[550px] shadow-xl ring-2 ring-eco-600" 
            : "h-[450px] md:h-[500px] shadow-md"
        )}
      >
        <div className="relative w-full h-full">
          <img 
            src={imageError ? fallbackImages.default : project.src} 
            alt={`Projeto ${project.title}`} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={handleImageError}
          />
          
          {/* Basic title always visible */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-earth-900/90 to-transparent">
            <h3 className="text-3xl font-bold text-white text-center">{project.title}</h3>
            
            {/* Show details button only for active slide - Updated for subtle, transparent styling */}
            {isActive && !showInfo && (
              <div className="flex justify-center mt-4">
                <button 
                  onClick={() => setShowInfo(true)}
                  className="bg-transparent backdrop-blur-sm hover:bg-eco-600/20 text-white/90 border border-white/30 px-5 py-2 rounded-full transition-all text-sm"
                >
                  Mostrar detalhes
                </button>
              </div>
            )}
          </div>
          
          {/* Detailed overlay that appears only when showInfo is true */}
          {isActive && showInfo && (
            <div 
              className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/50 to-transparent backdrop-blur-sm"
              onClick={() => setShowInfo(false)}
            >
              <div className="absolute bottom-0 left-0 w-full p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white animate-carousel-up">{project.title}</h3>
                  <div className="w-20 h-1.5 bg-eco-400 rounded-full mx-auto mb-2 animate-carousel-right"></div>
                  <p className="text-lg text-white/90 font-light animate-carousel-up">{project.description}</p>
                  <p className="text-2xl md:text-3xl font-semibold text-eco-300 mt-3 animate-carousel-down">{project.stats}</p>
                  
                  <div className="pt-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowInfo(false);
                      }}
                      className="bg-earth-800/60 hover:bg-earth-700 text-white px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
                    >
                      Fechar detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
