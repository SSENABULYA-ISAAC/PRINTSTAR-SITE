import React from 'react';
import { Printer, Camera, PenTool, Globe, CreditCard, ShoppingBag, Palette, FileText } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'Printing Services',
    description: 'From business cards to large format banners, flyers, posters, and documents. We ensure high-resolution output.',
    icon: Printer,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Photography',
    description: 'Professional studio shoots, outdoor events, and instant photo printing to capture your memories.',
    icon: Camera,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Branding',
    description: 'Corporate branding including t-shirt printing, caps, mugs, vehicle branding, and office signage.',
    icon: Palette,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'E-Services & Passport',
    description: 'Fast processing for passports, online visa applications, and general internet services.',
    icon: Globe,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'URA Payments',
    description: 'Secure and quick URA tax payments and assessments. We handle the technical details for you.',
    icon: CreditCard,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Stationary',
    description: 'Quality office and school supplies including books, pens, rims of paper, and envelopes.',
    icon: ShoppingBag,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Graphic Design',
    description: 'Creative logo design, layout for brochures, magazines, and invitation cards.',
    icon: PenTool,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Scanning & Typing',
    description: 'Document digitization, typesetting, and photocopying services.',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of solutions tailored to meet your personal and business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;