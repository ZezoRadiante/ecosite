
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { heroImages } from '@/data/projectData';
import VideoBackground from './hero/VideoBackground';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = ({
  onVideoLoaded
}: {
  onVideoLoaded?: () => void;
}) => {
  const isMobile = useIsMobile();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  
  const handleMediaLoaded = () => {
    setIsContentLoaded(true);
    if (onVideoLoaded) onVideoLoaded();
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background as Primary Content */}
      <VideoBackground 
        videoSrc={heroImages.video} 
        onMediaLoaded={handleMediaLoaded}
      />

      {/* Main Content */}
      <HeroContent isVisible={isContentLoaded} />

      {/* Scroll Indicator */}
      <ScrollIndicator isVisible={isContentLoaded} />
      
      {/* Enhanced bottom gradient transition to Banner section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20 transition-all duration-1000"></div>
    </section>
  );
};

export default Hero;
