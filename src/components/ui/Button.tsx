import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-colors',
        {
          'bg-green-600 hover:bg-green-700 text-white': variant === 'primary',
          'bg-white hover:bg-gray-100 text-gray-900': variant === 'secondary',
          'border-2 border-gray-200 hover:border-gray-300': variant === 'outline',
          'px-4 py-2': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}