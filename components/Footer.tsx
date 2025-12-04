import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
           <span className="text-2xl font-bold text-gray-100">
            Print<span className="text-green-500">St</span><span className="text-pink-600">ar</span>
          </span>
        </div>
        <div className="text-sm text-gray-400">
          <p>Kabowa St Anne, Opposite St.Kizito Secondary School</p>
          <p className="mt-2">Design - Print - Photography</p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
          &copy; {currentYear} Printstar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;