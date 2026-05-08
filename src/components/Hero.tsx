import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-56 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-berry/5 text-berry font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 rounded-full border border-berry/10">
              <Zap className="w-4 h-4 fill-berry" />
              Manufaktura pełna smaku
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tight text-balance">
              Prawdziwe <br />
              <span className="text-berry">Lody.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Odkryj smak rzemieślniczej pasji ukrytej w każdej gałce. Tradycja, naturalność i radość w każdym kęsie.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <a href="#produkty" className="px-10 py-5 bg-stone-900 text-white rounded-full font-bold flex items-center justify-center gap-4 hover:bg-berry transition-all shadow-2xl shadow-stone-200 group text-lg" aria-label="Zobacz naszą ofertę produktów">
                Nasza oferta
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden sm:block"
          >
            <div className="aspect-[4/5] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 border-[8px] lg:border-[16px] border-white">
              <img src={IMAGES.hero} alt="Lody Hero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-berry/10 rounded-full blur-3xl font-display italic text-berry/20 text-7xl lg:text-9xl">Creamy</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
