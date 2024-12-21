import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80"
          alt="Peaceful meditation background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Rest, Relax, Recharge: The Ultimate Bluetooth Headband
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Seamlessly combines comfort, sound, and style for better sleep, workouts, and relaxation.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Shop Now
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors">
              <PlayCircle className="w-6 h-6" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}