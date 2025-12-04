import React from 'react';
import { Camera, Printer, Globe } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
        {/* Removed "Open for Business" badge */}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Bringing Your Ideas to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">Life</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Printstar is your one-stop solution for premium printing, professional photography, branding, and essential e-services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onCtaClick}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-pink-600/30"
          >
            Explore Services
          </button>
          <a 
            href="tel:+256787411898"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-3 px-8 rounded-lg transition-all backdrop-blur-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Printer className="w-8 h-8 text-green-400 mb-3" />
            <h3 className="font-semibold">High Quality Print</h3>
            <p className="text-sm text-gray-400">Crisp, clear, and vibrant prints.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Camera className="w-8 h-8 text-pink-500 mb-3" />
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-gray-400">Capturing moments that last.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Globe className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="font-semibold">E-Services</h3>
            <p className="text-sm text-gray-400">Passports & URA payments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;