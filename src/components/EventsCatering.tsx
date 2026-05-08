import React from 'react';
import { motion } from 'motion/react';
import { PartyPopper } from 'lucide-react';
import { IMAGES } from '../constants';

export default function EventsCatering() {
  return (
    <section id="imprezy" className="section-padding bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-berry opacity-5" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center relative z-10">
        <div>
          <span className="text-berry font-black tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 sm:mb-8 block">Wydarzenia & Catering</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 lg:mb-12 leading-[0.9]">
            Jesteśmy <br /> tam, gdzie <br /> <span className="text-stone-400">Ty.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-stone-400 mb-10 lg:mb-16 max-w-xl">
            Bierzemy udział w imprezach plenerowych: festynach i piknikach rodzinnych. Serwujemy nasze lody gałkowe, świderki, granitę oraz chrupiące nachosy.
            <br /><br />
            Oferujemy również mobilne stacje lodowe na wesela, chrzciny i komunie.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
             {['Festyny', 'Pikniki', 'Wesela', 'Nachosy'].map(tag => (
               <span key={tag} className="px-4 s:px-6 py-2 border border-white/20 rounded-full text-[10px] sm:text-sm font-bold uppercase tracking-widest">{tag}</span>
             ))}
          </div>
        </div>
        
        <div className="relative pt-12 sm:pt-32">
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              className="relative z-10 w-[85%] -ml-[15%] sm:-ml-[25%] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
            >
              <img src={IMAGES.festyny[0]} alt="Festyn 1" className="w-full h-auto block" loading="lazy" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-20 w-[85%] -mr-[15%] sm:-mr-[25%] -mt-[15%] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
            >
              <img src={IMAGES.festyny[1]} alt="Festyn 2" className="w-full h-auto block" loading="lazy" />
            </motion.div>
          </div>
          <a 
            href="#kontakt" 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:-bottom-10 sm:-left-10 sm:left-0 sm:translate-x-0 w-32 h-32 sm:w-48 sm:h-48 bg-berry rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform group z-30"
            aria-label="Zapytaj o ofertę cateringu"
          >
            <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-[10px] sm:text-sm tracking-widest uppercase">Zapytaj</span>
          </a>
        </div>
      </div>
    </section>
  );
}
