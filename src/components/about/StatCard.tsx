
import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  digits: string[];
  prefix?: string;
  suffix?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  digits, 
  prefix = '+', 
  suffix = '' 
}) => {
  return (
    <div className="stats-card relative overflow-hidden">
      <div className="p-4 rounded-lg border-2 border-sky-700 bg-eco-50/70 shadow-md flex flex-col items-center justify-center transition-all hover:shadow-lg hover:border-sky-800">
        <div className="text-earth-700 text-3xl md:text-4xl font-bold mb-2 flex items-center">
          <span className="text-sky-700">{prefix}</span>
          <span className="counter-value">
            {digits.length > 0 ? 
              digits.map((digit, idx) => {
                if (digit.includes('|')) {
                  // Extract the direction from the digit string
                  const parts = digit.split('|');
                  const direction = parseInt(parts.pop() || '0');
                  const sequence = parts;
                  
                  // Assign an animation class based on the direction
                  let animationClass = '';
                  switch (direction) {
                    case 0:
                      animationClass = 'animate-carousel-up';
                      break;
                    case 1:
                      animationClass = 'animate-carousel-right';
                      break;
                    case 2:
                      animationClass = 'animate-carousel-down';
                      break;
                    case 3:
                      animationClass = 'animate-carousel-left';
                      break;
                    default:
                      animationClass = 'animate-carousel-up';
                  }
                  
                  return (
                    <span key={idx} className="inline-block relative overflow-hidden h-[1.2em] align-bottom w-[0.6em]">
                      <span className={`absolute ${animationClass}`}>
                        {sequence.map((d, i) => (
                          <span key={i} className="digit block h-[1.2em] leading-[1.2em]">
                            {d}
                          </span>
                        ))}
                      </span>
                    </span>
                  );
                } else {
                  return <span key={idx} className="digit">{digit}</span>;
                }
              }) : 
              new Intl.NumberFormat('pt-BR').format(value)
            }
          </span>
          {suffix && <span className="ml-1 text-xl">{suffix}</span>}
        </div>
        <p className="text-earth-600 text-sm md:text-base text-center" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
      </div>
    </div>
  );
};
