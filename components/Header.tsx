import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavSection } from '../types';

interface HeaderProps {
  activeSection: NavSection;
  setActiveSection: (section: NavSection) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: NavSection.HOME, label: 'Home' },
    { id: NavSection.SERVICES, label: 'Services' },
    { id: NavSection.GALLERY, label: 'Gallery' },
    { id: NavSection.TEAM, label: 'Our Team' },
    { id: NavSection.CONTACT, label: 'Contact Us' },
  ];

  const handleNavClick = (section: NavSection) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    // Removed window.scrollTo({ top: 0 }) to allow specific section scrolling from App.tsx
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick(NavSection.HOME)}>
           <span className="text-2xl font-bold text-gray-900">
            Print<span className="text-green-500">St</span><span className="text-pink-600">ar</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="tel:+256787411898" className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-medium ${
                  activeSection === item.id ? 'text-pink-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
             <a href="tel:+256787411898" className="flex justify-center items-center space-x-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition">
                <Phone size={18} />
                <span>Call +256 787 411898</span>
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;