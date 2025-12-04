import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to start your project or need assistance with our services? 
              Visit us in Kabowa or give us a call.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 p-3 rounded-lg shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-300">Kabowa St Anne, Opposite St.Kizito Secondary School</p>
                  <p className="text-gray-400 text-sm mt-1">Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
                    <a href="tel:+256787411898" className="hover:text-white transition">+256 787 411898</a>
                    <a href="tel:+256703166291" className="hover:text-white transition">+256 703 166291</a>
                    <a href="tel:+256756627921" className="hover:text-white transition">+256 756 627921</a>
                    <a href="tel:+256749568306" className="hover:text-white transition">+256 749 568306</a>
                    <a href="tel:+256708105602" className="hover:text-white transition">+256 708 105 602</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                  <p className="text-gray-300">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side (Placeholder visual) */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden h-[400px] relative border border-gray-700 shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
               <div className="text-center p-6">
                 <MapPin size={48} className="text-pink-500 mx-auto mb-4 animate-bounce" />
                 <h4 className="text-xl font-bold">Locate Us in Kabowa</h4>
                 <p className="text-gray-400 mt-2">Opposite St.Kizito Secondary School</p>
                 <a 
                   href="https://www.google.com/maps/search/?api=1&query=St+Kizito+Secondary+School+Kabowa" 
                   target="_blank" 
                   rel="noreferrer"
                   className="inline-block mt-6 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition"
                 >
                   View on Google Maps
                 </a>
               </div>
             </div>
             {/* Simple decorative grid to simulate map texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;