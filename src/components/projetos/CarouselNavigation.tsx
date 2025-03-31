
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  onPrevClick,
  onNextClick
}) => {
  return (
    <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-10 px-4">
      <button
        onClick={onPrevClick}
        className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 text-sky-600"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNextClick}
        className="bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 text-sky-600"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CarouselNavigation;
