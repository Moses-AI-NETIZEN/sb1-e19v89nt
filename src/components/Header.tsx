import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold text-green-700">EcoBud</h1>
        </div>
        <div className="hidden lg:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-green-700">Features</a>
          <a href="#benefits" className="text-gray-600 hover:text-green-700">Benefits</a>
          <a href="#reviews" className="text-gray-600 hover:text-green-700">Reviews</a>
          <a href="#faq" className="text-gray-600 hover:text-green-700">FAQ</a>
        </div>
        <button className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </button>
      </nav>
    </header>
  );
}