import React, { useState } from 'react';
import { Star, Truck, Shield, ArrowRight } from 'lucide-react';

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="product" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80"
                alt="EcoBud Headband in use"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                alt="Sleeping with EcoBud"
                className="aspect-square object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
                alt="Meditation with EcoBud"
                className="aspect-square object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80"
                alt="Working out with EcoBud"
                className="aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(128 reviews)</span>
            </div>
            
            <h1 className="text-4xl font-bold">Bluetooth-Compatible Earphones Sports Sleeping Headband</h1>
            
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-bold text-green-600">$39.99</span>
              <span className="text-xl text-gray-400 line-through">$69.99</span>
              <span className="text-green-600 font-semibold">Save 43%</span>
            </div>

            <div className="space-y-4 border-t border-b py-4">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >
                  +
                </button>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-semibold flex items-center justify-center space-x-2">
                <span>Add to Cart</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}