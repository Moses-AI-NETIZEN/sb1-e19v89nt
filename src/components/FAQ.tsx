import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I connect it via Bluetooth?',
    answer: 'Simply press and hold the power button for 3 seconds until you hear the pairing sound. Then select "EcoBud Headband" from your device\'s Bluetooth settings.'
  },
  {
    question: 'Is it washable?',
    answer: 'Yes! The headband is machine washable. Just remove the Bluetooth module before washing and hand wash in cold water. Air dry for best results.'
  },
  {
    question: 'How long does the battery last?',
    answer: 'The battery provides up to 10 hours of continuous playback on a single charge. Charging time is approximately 2 hours.'
  },
  {
    question: 'What\'s the warranty period?',
    answer: 'We offer a 1-year warranty against manufacturing defects, plus our 30-day money-back guarantee for complete peace of mind.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}