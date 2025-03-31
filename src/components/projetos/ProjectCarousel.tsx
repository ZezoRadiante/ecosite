
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectItem from './ProjectItem';
import { projectImages } from '@/data/projectData';
import CarouselDots from './CarouselDots';
import CarouselNavigation from './CarouselNavigation';

const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Call once to set initial state
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const getDistance = (index: number) => {
    const count = projectImages.length;
    let distance = Math.abs(index - activeIndex);
    if (distance > count / 2) {
      distance = count - distance;
    }
    return distance;
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full relative overflow-hidden py-20">
      <div className="w-full mx-auto">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projectImages.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  project={project} 
                  distance={getDistance(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
          </div>

          <CarouselNavigation 
            onPrevClick={scrollPrev}
            onNextClick={scrollNext}
          />
        </div>

        <div className="mt-12">
          <CarouselDots 
            activeIndex={activeIndex} 
            count={projectImages.length} 
            onClick={scrollTo} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
