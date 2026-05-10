import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu,
  X
} from 'lucide-react';
import { IMAGES } from './constants';
import Hero from './components/Hero';

// Lazy load non-critical sections
const AboutUs = lazy(() => import('./components/AboutUs'));
const EventsCatering = lazy(() => import('./components/EventsCatering'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const SocialJoin = lazy(() => import('./components/SocialJoin'));
const Locations = lazy(() => import('./components/Locations'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center" role="status" aria-label="Ładowanie sekcji">
    <div className="w-8 h-8 border-4 border-berry/20 border-t-berry rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-berry/20 selection:text-berry overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group" aria-label="Lodziarnia Pniewscy - Strona główna">
              <img 
                src={IMAGES.logo} 
                alt="Lodziarnia Pniewscy Logo" 
                className="h-12 w-auto object-contain" 
                width="48"
                height="48"
                fetchPriority="high"
                decoding="sync"
              />
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight hidden sm:block">
                Lodziarnia <span className="text-berry">Pniewscy</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['O nas', 'Produkty', 'Imprezy', 'Kontakt'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-stone-600 hover:text-berry transition-colors uppercase tracking-widest" aria-label={`Przejdź do sekcji ${item}`}>
                {item}
              </a>
            ))}
            <a href="#kontakt" className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-berry transition-all shadow-xl shadow-stone-200" aria-label="Dowiedz się więcej o naszej ofercie cateringu">
              Catering
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-stone-900" aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-4xl font-display font-bold">
              <a onClick={() => setIsMenuOpen(false)} href="#o-nas" aria-label="Przejdź do sekcji O nas">O nas</a>
              <a onClick={() => setIsMenuOpen(false)} href="#produkty" aria-label="Przejdź do sekcji Produkty">Produkty</a>
              <a onClick={() => setIsMenuOpen(false)} href="#imprezy" aria-label="Przejdź do sekcji Imprezy">Imprezy</a>
              <a onClick={() => setIsMenuOpen(false)} href="#kontakt" aria-label="Przejdź do sekcji Kontakt">Kontakt</a>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 bg-stone-100 rounded-full" aria-label="Zamknij menu">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Critical Section loaded immediately */}
        <Hero />

        {/* Suspense wrapped lazy sections */}
        <Suspense fallback={<SectionLoader />}>
          <AboutUs />
          <EventsCatering />
          <Gallery />
          <Reviews />
          <SocialJoin />
          <Locations />
        </Suspense>
      </main>

      {/* Footer is small enough to stay in main bundle or could be lazy loaded too */}
      <footer className="py-12 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center border-t border-stone-200/50 pt-12 sm:pt-16">
          <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
            <img 
              src={IMAGES.logo} 
              alt="Lodziarnia Pniewscy Logo - Lody z tradycją" 
              className="h-16 w-auto object-contain mb-4" 
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
            />
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter uppercase block">Lodziarnia <span className="text-berry">Pniewscy</span></span>
          </div>
          <div className="text-stone-400 font-bold uppercase tracking-widest text-[8px] sm:text-[10px] mb-8">
             © {new Date().getFullYear()} Lodziarnia Pniewscy
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="#" className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-stone-900 hover:text-berry" aria-label="Powrót na górę strony">Powrót do góry</a>
            <a href="https://www.facebook.com/profile.php?id=100068910726686&locale=pl_PL" target="_blank" rel="noreferrer" className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-stone-900 hover:text-berry" aria-label="Odwiedź nasz profil na Facebooku">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

