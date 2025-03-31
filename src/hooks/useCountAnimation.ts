
import { useState, useEffect, useRef } from 'react';

export const useCountAnimation = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const [digits, setDigits] = useState<string[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset the count if end changes to zero
    if (end === 0) {
      setCount(0);
      setDigits([]);
      return;
    }
    
    // Cancel any existing animation
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    
    let startTimestamp: number | null = null;
    const startValue = 0; // Always start from zero for carousel effect
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutExpo for a nice carousel effect
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const nextValue = Math.floor(startValue + easeProgress * (end - startValue));
      
      setCount(nextValue);
      
      // Generate the carousel effect with digits
      if (end > 0) {
        const currentDigits = nextValue.toString().split('');
        const endDigits = end.toString().split('');
        
        // Pad with zeros if needed to match target length
        while (currentDigits.length < endDigits.length) {
          currentDigits.unshift('0');
        }
        
        // Create digit carousel for each position
        const carouselDigits = currentDigits.map((digit, index) => {
          // For complete animation, just return the digit
          if (progress === 1) {
            return endDigits[index] || digit;
          }
          
          // For carousel effect, create a sequence of digits for animation
          const digitValue = parseInt(digit);
          let sequence = [];
          
          // Create a sequence with 5 numbers leading up to the current digit
          for (let i = -4; i <= 0; i++) {
            const val = (digitValue + i + 10) % 10; // Ensure we get positive values
            sequence.push(val.toString());
          }
          
          // Assign a different direction to each digit
          // Use modulo to create alternating directions
          const direction = index % 4;
          return `${sequence.join('|')}|${direction}`;
        });
        
        setDigits(carouselDigits);
      }
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        // Ensure we end at the exact target value
        setCount(end);
        setDigits(end.toString().split(''));
        frameRef.current = null;
      }
    };
    
    frameRef.current = requestAnimationFrame(step);
    
    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration]);

  return { count, digits };
};
