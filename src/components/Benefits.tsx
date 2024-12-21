import React from 'react';
import { Headphones, Moon, Heart, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Headphones,
    title: 'Wireless Audio',
    description: 'Premium Bluetooth 5.0 connectivity for crystal-clear sound'
  },
  {
    icon: Moon,
    title: 'Ultra-Soft Comfort',
    description: 'Luxurious fabric for all-night comfort and peaceful sleep'
  },
  {
    icon: Heart,
    title: 'Light-Blocking',
    description: 'Perfect darkness for enhanced sleep quality'
  },
  {
    icon: Zap,
    title: 'Active Lifestyle',
    description: 'Durable design for workouts and daily activities'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EcoBud?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}