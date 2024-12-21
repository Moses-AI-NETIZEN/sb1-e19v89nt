import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <button onClick={onToggle} className="p-2">
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>
      )}
    </div>
  );
}