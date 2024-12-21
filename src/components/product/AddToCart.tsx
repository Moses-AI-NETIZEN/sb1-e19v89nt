import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface AddToCartProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

export function AddToCart({ 
  quantity, 
  onQuantityChange, 
  onAddToCart 
}: AddToCartProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
        >
          -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button 
          onClick={() => onQuantityChange(quantity + 1)}
          className="w-10 h-10 rounded-full border flex items-center justify-center"
        >
          +
        </button>
      </div>
      
      <Button 
        onClick={onAddToCart}
        className="w-full flex items-center justify-center space-x-2"
        size="lg"
      >
        <span>Add to Cart</span>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}