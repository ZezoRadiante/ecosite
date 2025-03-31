
import React from 'react';
import { cn } from "@/lib/utils";

interface CarouselDotsProps {
  selectedIndex?: number;
  activeIndex?: number;
  dotsCount?: number;
  count?: number;
  onDotClick?: (index: number) => void;
  onClick?: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ 
  selectedIndex, 
  activeIndex,
  dotsCount,
  count,
  onDotClick,
  onClick
}) => {
  // Use either naming convention that's provided
  const currentIndex = selectedIndex ?? activeIndex ?? 0;
  const totalDots = dotsCount ?? count ?? 0;
  const handleClick = onDotClick ?? onClick ?? (() => {});
  
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-colors duration-300",
            index === currentIndex 
              ? "bg-sky-700" 
              : "bg-sky-700/30 hover:bg-sky-700/50"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
