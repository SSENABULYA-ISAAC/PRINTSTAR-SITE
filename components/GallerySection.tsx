import React, { useState } from 'react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    category: 'Branding',
    title: 'Custom T-Shirts & Uniforms'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800',
    category: 'Stationary',
    title: 'School & Office Supplies'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    category: 'Photography',
    title: 'Professional Photography'
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
            <ImageIcon className="text-indigo-600" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A glimpse into our world of design, photography, and high-quality printing.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg aspect-[4/3]"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">{item.category}</span>
                <h3 className="text-lg font-bold text-center leading-tight">{item.title}</h3>
                <div className="mt-3 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                  <ZoomIn size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <div className="max-w-5xl w-full max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              style={{ maxHeight: '85vh' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <span className="text-indigo-400 font-medium text-sm">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;