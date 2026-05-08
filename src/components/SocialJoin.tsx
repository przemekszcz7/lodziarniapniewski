import React from 'react';
import { Facebook } from 'lucide-react';

export default function SocialJoin() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-stone-900 rounded-[2.5rem] lg:rounded-[4rem] p-8 sm:p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-berry/10 blur-[80px] lg:blur-[120px] rounded-full" />
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">Więcej na <br /><span className="text-berry">Facebooku</span></h3>
            <p className="text-stone-400 text-lg sm:text-xl mb-8 sm:mb-12 max-w-md mx-auto lg:mx-0">Dołącz do naszej społeczności. Odkryj nowe smaki, zobacz kulisy produkcji i bierz udział w konkursach!</p>
            <a 
              href="https://www.facebook.com/profile.php?id=100068910726686&locale=pl_PL" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-[#1877F2] text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-all"
              aria-label="Dołącz do nas na Facebooku"
            >
              <Facebook className="fill-current w-6 h-6" />
              Obserwuj nas
            </a>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 relative z-10 w-full md:w-auto">
            <div className="image-card aspect-square rounded-2xl sm:rounded-3xl">
              <img src="https://iili.io/Bt9TirX.jpg" alt="FB 1" loading="lazy" decoding="async" />
            </div>
            <div className="image-card aspect-square rounded-2xl sm:rounded-3xl translate-y-6 sm:translate-y-8">
              <img src="https://iili.io/Bt9TQ7s.jpg" alt="FB 2" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
