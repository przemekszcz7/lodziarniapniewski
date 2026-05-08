import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section id="produkty" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl sm:text-6xl font-bold mb-6 lg:mb-8">Nasza Galeria</h2>
          <p className="text-stone-500 text-lg sm:text-xl font-medium">Zdjęcia z naszych lokali oraz imprez plenerowych.</p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
          {IMAGES.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft break-inside-avoid shadow-lg"
            >
              <img src={img} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt={`Lodziarnia Pniewski ${i}`} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <a href={img} target="_blank" rel="noreferrer" className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-2xl hover:bg-berry hover:text-white transition-all transform scale-50 group-hover:scale-100 duration-500" aria-label={`Otwórz zdjęcie ${i + 1} w pełnym rozmiarze`}>
                  <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
