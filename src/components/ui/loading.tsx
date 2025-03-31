
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'eco';
  text?: string;
}

export function Loading({
  size = 'md',
  variant = 'default',
  text,
  className,
  ...props
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  
  const variantClasses = {
    default: 'text-earth-800',
    eco: 'text-earth-800',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)} {...props}>
      <Loader2 className={cn('animate-spin', sizeClasses[size], variantClasses[variant])} />
      {text && (
        <p className={cn('text-sm font-medium animate-pulse', variantClasses[variant])}>
          {text}
        </p>
      )}
    </div>
  );
}
