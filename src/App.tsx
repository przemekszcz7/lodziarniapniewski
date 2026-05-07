import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  IceCream, 
  Star, 
  Facebook, 
  PartyPopper,
  Zap,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  ExternalLink,
  Coffee
} from 'lucide-react';

const IMAGES = {
  hero: "https://iili.io/Bt9CrLF.jpg",
  production: "https://iili.io/BQLsygV.jpg",
  aboutUs: "https://iili.io/BQLZlO7.jpg",
  cones: "https://iili.io/BQLZcRS.jpg",
  detail1: "https://iili.io/BQLL6CJ.jpg",
  detail2: "https://iili.io/BQLLZvI.jpg",
  catering: "https://iili.io/BQLLbTX.jpg",
  miedzyrzec: [
    "https://iili.io/BZyQiuV.jpg",
    "https://iili.io/BZyQ6yQ.jpg",
    "https://iili.io/BZyD8Gt.jpg"
  ],
  festyny: [
    "https://iili.io/BZytzga.jpg",
    "https://iili.io/BZytx0g.jpg"
  ],
  losice: "https://iili.io/BZytyIp.jpg",
  gallery: [
    "https://iili.io/BQLZaJ2.jpg",
    "https://iili.io/BQLLQYN.jpg",
    "https://iili.io/BQLLmjn.jpg",
    "https://iili.io/BQLQ9CG.jpg",
    "https://iili.io/BQLQqu9.jpg",
    "https://iili.io/BQLQBje.jpg"
  ]
};

const LOCATIONS = [
  { 
    city: "Międzyrzec Podlaski", 
    address: "ul. Jana Pawła II 2", 
    items: ["Lody gałkowe", "Lody włoskie", "Świderki", "Granita", "Shaki", "Kawa mrożona", "Flurry"],
    image: IMAGES.miedzyrzec[2],
    gallery: IMAGES.miedzyrzec
  },
  { 
    city: "Łosice", 
    address: "ul. Rynek 28a", 
    items: ["Lody gałkowe", "Świderki", "Granita"],
    image: "https://iili.io/BZytyIp.jpg"
  },
  { 
    city: "Zbuczyn", 
    address: "ul. Dębowa 1", 
    items: ["Lody gałkowe", "Lody włoskie", "Granita"],
    image: "https://iili.io/BQLsygV.jpg"
  }
];

const REVIEWS = [
  { name: "Anna K.", text: "Najlepsze lody tradycyjne w regionie. Czuć naturalne składniki!", rating: 5 },
  { name: "Piotr L.", text: "Świderki to absolutny hit każdych wakacji. Polecam serdecznie.", rating: 5 },
  { name: "Małgorzata", text: "Zamówiliśmy catering na chrzciny – goście byli zachwyceni lodami!", rating: 5 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-berry/20 selection:text-berry overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight">
              Lodziarnia <span className="text-berry">Pniewski</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['O nas', 'Produkty', 'Imprezy', 'Kontakt'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-stone-600 hover:text-berry transition-colors uppercase tracking-widest">
                {item}
              </a>
            ))}
            <a href="#kontakt" className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-berry transition-all shadow-xl shadow-stone-200">
              Catering
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-stone-900">
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
              <a onClick={() => setIsMenuOpen(false)} href="#o-nas">O nas</a>
              <a onClick={() => setIsMenuOpen(false)} href="#produkty">Produkty</a>
              <a onClick={() => setIsMenuOpen(false)} href="#imprezy">Imprezy</a>
              <a onClick={() => setIsMenuOpen(false)} href="#kontakt">Kontakt</a>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 bg-stone-100 rounded-full">
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
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
                <a href="#produkty" className="px-10 py-5 bg-stone-900 text-white rounded-full font-bold flex items-center justify-center gap-4 hover:bg-berry transition-all shadow-2xl shadow-stone-200 group text-lg">
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

      {/* Intro section emphasizing all photos */}
      <section id="o-nas" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative order-2 lg:order-1">
                <div className="space-y-6 sm:pt-16">
                  <div className="image-card aspect-[3/4]">
                    <img src={IMAGES.aboutUs} alt="Nasza produkcja" />
                  </div>
                  <div className="image-card aspect-square sm:translate-x-6">
                    <img src={IMAGES.detail1} alt="Lody z bliska" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="image-card aspect-square sm:-translate-x-6">
                    <img src={IMAGES.detail2} alt="Detale lodów" />
                  </div>
                  <div className="image-card aspect-[3/4]">
                    <img src={IMAGES.cones} alt="Wafelki i lody" />
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
                 W Łosicach i Międzyrzecu Podlaskim serwujemy lody, które powstają z pasji do prawdziwego smaku.
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

      {/* Catering / Events Section */}
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
                <img src={IMAGES.festyny[0]} alt="Festyn 1" className="w-full h-auto block" />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -50, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-20 w-[85%] -mr-[15%] sm:-mr-[25%] -mt-[15%] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
              >
                <img src={IMAGES.festyny[1]} alt="Festyn 2" className="w-full h-auto block" />
              </motion.div>
            </div>
            <a 
              href="#kontakt" 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:-bottom-10 sm:-left-10 sm:left-0 sm:translate-x-0 w-32 h-32 sm:w-48 sm:h-48 bg-berry rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform group z-30"
            >
              <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-[10px] sm:text-sm tracking-widest uppercase">Zapytaj</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modern Gallery Grid */}
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
                <img src={img} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt={`Lodziarnia Pniewski ${i}`} />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a href={img} target="_blank" rel="noreferrer" className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-2xl hover:bg-berry hover:text-white transition-all transform scale-50 group-hover:scale-100 duration-500">
                    <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews Section */}
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

      {/* Social / Joing Us Section */}
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
              >
                <Facebook className="fill-current w-6 h-6" />
                Obserwuj nas
              </a>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4 relative z-10 w-full md:w-auto">
              <div className="image-card aspect-square rounded-2xl sm:rounded-3xl">
                <img src="https://iili.io/Bt9TirX.jpg" alt="FB 1" />
              </div>
              <div className="image-card aspect-square rounded-2xl sm:rounded-3xl translate-y-6 sm:translate-y-8">
                <img src="https://iili.io/Bt9TQ7s.jpg" alt="FB 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations - Individual Sections */}
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
                          <img src={loc.gallery[0]} alt={`${loc.city} 1`} />
                        </div>
                        <div className="image-card aspect-square rounded-2xl overflow-hidden shadow-xl translate-y-8 sm:translate-y-12">
                          <img src={loc.gallery[1]} alt={`${loc.city} 2`} />
                        </div>
                        <div className="image-card aspect-[4/3] rounded-2xl overflow-hidden shadow-xl col-span-2 mt-4 sm:mt-8">
                          <img src={loc.gallery[2]} alt={`${loc.city} 3`} />
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src={loc.image} alt={loc.city} className="w-full h-full object-cover" />
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
                <a href="tel:+48507419726" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white hover:text-berry transition-colors whitespace-nowrap">507 419 726</a>
              </div>
              
              <div className="h-px w-24 bg-white/10" />

              <div className="text-center lg:text-right w-full">
                <div className="flex items-center justify-center lg:justify-end gap-3 text-berry mb-2">
                   <Mail className="w-5 h-5" />
                   <span className="font-black uppercase tracking-widest text-[10px]">Napisz e-mail</span>
                </div>
                <a href="mailto:radekpniewskii@interia.pl" className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white/80 hover:text-white transition-colors whitespace-nowrap">radekpniewskii@interia.pl</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center border-t border-stone-200/50 pt-12 sm:pt-16">
          <div className="mb-6 sm:mb-8">
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter uppercase text-center block">Lodziarnia <span className="text-berry">Pniewski</span></span>
          </div>
          <div className="text-stone-400 font-bold uppercase tracking-widest text-[8px] sm:text-[10px] mb-8">
             © {new Date().getFullYear()} Lodziarnia Radosław Pniewski
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="#" className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-stone-900 hover:text-berry">Powrót do góry</a>
            <a href="https://www.facebook.com/profile.php?id=100068910726686&locale=pl_PL" target="_blank" rel="noreferrer" className="font-black uppercase tracking-widest text-[8px] sm:text-[10px] text-stone-900 hover:text-berry">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

