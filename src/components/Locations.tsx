import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Phone, Mail, Coffee } from 'lucide-react';
import { LOCATIONS } from '../constants';

export default function Locations() {
  return (
    <section id="kontakt" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-16 px-4">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">Nasz świat <span className="text-berry">lodów</span></h2>
          <p className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto">Zapraszamy do naszych trzech wyjątkowych punktów. Każdy z nich to inna historia, ale ta sama rzemieślnicza pasja.</p>
        </div>
      </div>

      {LOCATIONS.map((loc, i) => (
        <div key={i} className={`py-16 sm:py-24 ${i % 2 === 1 ? 'bg-cream/30' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative">
                  {loc.gallery ? (
                    <div className="grid grid-cols-2 gap-6 sm:gap-8">
                      <div className="image-card aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img src={loc.gallery[0]} alt={`${loc.city} 1`} loading="lazy" />
                      </div>
                      <div className="image-card aspect-square rounded-2xl overflow-hidden shadow-xl translate-y-8 sm:translate-y-12">
                        <img src={loc.gallery[1]} alt={`${loc.city} 2`} loading="lazy" />
                      </div>
                      <div className="image-card aspect-[4/3] rounded-2xl overflow-hidden shadow-xl col-span-2 mt-4 sm:mt-8">
                        <img src={loc.gallery[2]} alt={`${loc.city} 3`} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src={loc.image} alt={loc.city} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  {loc.city === "Międzyrzec Podlaski" && (
                    <div className="absolute -bottom-6 -right-6 bg-berry text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hidden sm:flex flex-col items-center text-center">
                      <Coffee className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                      <span className="font-bold block text-sm sm:text-lg">Najszersza<br />Oferta</span>
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="inline-flex items-center gap-2 text-berry font-black tracking-widest text-[10px] uppercase mb-4 sm:mb-6">
                  <MapPin className="w-4 h-4" />
                  Lokalizacja
                </div>
                <h3 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">{loc.city}</h3>
                <p className="text-xl sm:text-2xl text-stone-900 font-bold mb-8">{loc.address}</p>
                
                <div className="space-y-4 mb-8 sm:mb-12">
                  <p className="text-stone-500 font-bold uppercase tracking-widest text-[10px]">U nas znajdziesz:</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {loc.items.map((item, j) => (
                      <span key={j} className="px-4 sm:px-5 py-1.5 sm:py-2 bg-white border border-stone-200 rounded-full text-[10px] sm:text-sm font-bold text-stone-700 shadow-sm whitespace-nowrap">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.city} ${loc.address}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-stone-900 font-bold hover:text-berry transition-colors group text-sm sm:text-base"
                  aria-label={`Nawiguj do lokalu w miejscowości ${loc.city}`}
                >
                  Nawiguj do lokalu
                  <ArrowRight className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Contact Details Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="bg-stone-900 rounded-[2.5rem] sm:rounded-[3rem] lg:rounded-[5rem] overflow-hidden p-8 sm:p-12 lg:p-24 flex flex-col lg:flex-row justify-between items-center gap-12 mt-16 sm:mt-24">
          <div className="text-center lg:text-left">
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Masz pytania?</h3>
            <p className="text-stone-400 text-lg sm:text-xl max-w-md mx-auto lg:mx-0">Skontaktuj się z nami bezpośrednio lub odwiedź nas w jednym z naszych punktów.</p>
          </div>
          
          <div className="flex flex-col gap-8 lg:gap-10 items-center lg:items-end w-full lg:w-auto">
            <div className="text-center lg:text-right w-full">
              <div className="flex items-center justify-center lg:justify-end gap-3 text-berry mb-2">
                 <Phone className="w-5 h-5" />
                 <span className="font-black uppercase tracking-widest text-[10px]">Zadzwoń do nas</span>
              </div>
              <a href="tel:+48507419726" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white hover:text-berry transition-colors whitespace-nowrap" aria-label="Zadzwoń do nas">507 419 726</a>
            </div>
            
            <div className="h-px w-24 bg-white/10" />

            <div className="text-center lg:text-right w-full">
              <div className="flex items-center justify-center lg:justify-end gap-3 text-berry mb-2">
                 <Mail className="w-5 h-5" />
                 <span className="font-black uppercase tracking-widest text-[10px]">Napisz e-mail</span>
              </div>
              <a href="mailto:radekpniewskii@interia.pl" className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white/80 hover:text-white transition-colors whitespace-nowrap" aria-label="Wyślij do nas wiadomość e-mail">radekpniewskii@interia.pl</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
