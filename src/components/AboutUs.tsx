import React from 'react';
import { IceCream, Zap, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export default function AboutUs() {
  return (
    <section id="o-nas" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative order-2 lg:order-1">
              <div className="space-y-6 sm:pt-16">
                <div className="image-card aspect-[3/4]">
                  <img src={IMAGES.aboutUs} alt="Nasza produkcja" loading="lazy" decoding="async" />
                </div>
                <div className="image-card aspect-square sm:translate-x-6">
                  <img src={IMAGES.detail1} alt="Lody z bliska" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="image-card aspect-square sm:-translate-x-6">
                  <img src={IMAGES.detail2} alt="Detale lodów" loading="lazy" decoding="async" />
                </div>
                <div className="image-card aspect-[3/4]">
                  <img src={IMAGES.cones} alt="Wafelki i lody" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-berry rounded-full flex items-center justify-center text-white shadow-2xl z-20 border-4 sm:border-8 border-white">
                <span className="font-display font-bold text-2xl sm:text-4xl italic">Fresh</span>
              </div>
           </div>

           <div className="order-1 lg:order-2">
             <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
               Tajemnica tkwi w <span className="italic text-berry/80 underline decoration-berry/20 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">składnikach</span>
             </h2>
             <p className="text-lg sm:text-xl text-stone-600 mb-10 leading-relaxed">
               Lodziarnia Radosław Pniewski to efekt lat doskonalenia rzemiosła. 
               W Łosicach, Międzyrzecu Podlaskim i Zbuczynie serwujemy lody, które powstają z pasji do prawdziwego smaku.
             </p>
             
             <div className="space-y-4 sm:space-y-6">
               {[
                 { t: "Produkcja Własna", d: "Świeże lody gałkowe kręcone codziennie.", icon: <IceCream /> },
                 { t: "Kultowe Świderki", d: "Zawsze idealna konsystencja i pełny aromat.", icon: <Zap /> },
                 { t: "Owocowa Granita", d: "Najlepszy sposób na orzeźwienie w upalne dni.", icon: <ArrowRight /> }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4 sm:gap-6 p-6 sm:p-8 bg-cream/50 rounded-[1.5rem] sm:rounded-[2rem] border border-stone-100 hover:border-berry/20 transition-colors group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center text-berry shadow-sm group-hover:bg-berry group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-1">{item.t}</h4>
                      <p className="text-sm sm:text-base text-stone-500">{item.d}</p>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
