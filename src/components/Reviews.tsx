import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Star, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section id="opinie" className="section-padding bg-cream/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#1877F2] font-black tracking-widest text-[10px] uppercase mb-4">
              <Facebook className="w-4 h-4 fill-current" />
              Opinie naszych gości z Facebooka
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-balance">Inni już <span className="text-berry">pokochali</span> nasze lody</h2>
          </div>
          <a 
            href="https://www.facebook.com/profile.php?id=100068910726686&sk=reviews&locale=pl_PL" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-stone-200 rounded-full font-bold text-xs sm:text-sm hover:shadow-lg transition-all flex items-center gap-2 group whitespace-nowrap"
            aria-label="Zobacz wszystkie opinie na Facebooku"
          >
            Wszystkie opinie
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 sm:p-10 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6 sm:mb-8">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-lg sm:text-xl text-stone-700 italic mb-8 sm:mb-10 leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-100 rounded-full flex-shrink-0 flex items-center justify-center text-stone-400 font-bold group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                   {review.name[0]}
                 </div>
                 <div>
                   <div className="font-black text-stone-900 uppercase tracking-widest text-[10px] mb-1">{review.name}</div>
                   <div className="text-[8px] sm:text-[10px] text-stone-400 uppercase font-bold">Facebook Reviewer</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
