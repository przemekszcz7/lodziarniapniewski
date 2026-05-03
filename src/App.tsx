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
  ExternalLink
} from 'lucide-react';

const IMAGES = {
  hero: "https://i.postimg.cc/tgtJ7kJ1/480961144-941818678125148-3037792705025883459-n.jpg",
  production: "https://i.postimg.cc/R0zqMySn/481020898-941803321460017-8461447160377720249-n.jpg",
  cones: "https://i.postimg.cc/8CBcs4cb/480753262-941821381458211-2059226857396943844-n.jpg",
  detail1: "https://i.postimg.cc/JhWt1vrb/480960481-941803224793360-6173252906819934744-n.jpg",
  detail2: "https://i.postimg.cc/43bynPyV/481046533-941821491458200-5211304892360777474-n.jpg",
  catering: "https://i.postimg.cc/zf13J6zW/481057821-941802964793386-8500870500046739899-n.jpg",
  gallery: [
    "https://i.postimg.cc/FKgz1pzp/481057858-941821471458202-7783894601647205844-n.jpg",
    "https://i.postimg.cc/Bvcbtpbm/481059731-941821454791537-6535778530981969827-n.jpg",
    "https://i.postimg.cc/HL4njzn9/481083849-941821481458201-4712006091994697700-n.jpg",
    "https://i.postimg.cc/25f3zMkd/481084993-941818878125128-243131916248003929-n.jpg",
    "https://i.postimg.cc/d0KDqps2/481189733-941818874791795-6359057596519914800-n.jpg",
    "https://i.postimg.cc/TPq1h01r/481303693-941821461458203-393238435237643731-n.jpg"
  ]
};

const REVIEWS = [
  { name: "Anna K.", text: "Najlepsze lody tradycyjne w regionie. Czuć naturalne składniki!", rating: 5 },
  { name: "Piotr L.", text: "Świderki to absolutny hit każdych wakacji. Polecam serdecznie.", rating: 5 },
  { name: "Małgorzata", text: "Zamówiliśmy catering na chrzciny – goście byli zachwyceni lodami!", rating: 5 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-berry/20 selection:text-berry">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold tracking-tight">
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
            className="fixed inset-0 z-40 bg-cream pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-10 text-4xl font-display font-bold">
              <a onClick={() => setIsMenuOpen(false)} href="#o-nas">O nas</a>
              <a onClick={() => setIsMenuOpen(false)} href="#produkty">Produkty</a>
              <a onClick={() => setIsMenuOpen(false)} href="#imprezy">Imprezy</a>
              <a onClick={() => setIsMenuOpen(false)} href="#kontakt">Kontakt</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-56 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-berry/5 text-berry font-bold text-xs tracking-[0.2em] uppercase mb-10 rounded-full border border-berry/10">
                <Zap className="w-4 h-4 fill-berry" />
                Manufaktura pełna smaku
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-12 tracking-tight text-balance">
                Prawdziwe <br />
                <span className="text-berry">Lody.</span>
              </h1>
              <p className="text-2xl text-stone-600 mb-12 max-w-lg leading-relaxed font-medium">
                Odkryj smak rzemieślniczej pasji ukrytej w każdej gałce. Tradycja, naturalność i radość w każdym kęsie.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#produkty" className="px-12 py-6 bg-stone-900 text-white rounded-full font-bold flex items-center gap-4 hover:bg-berry transition-all shadow-2xl shadow-stone-200 group text-lg">
                  Nasza oferta
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 border-[16px] border-white">
                <img src={IMAGES.hero} alt="Lody Hero" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-berry/10 rounded-full blur-3xl font-display italic text-berry/20 text-9xl">Creamy</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro section emphasizing all photos */}
      <section id="o-nas" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="grid grid-cols-2 gap-6 relative">
                <div className="space-y-6 pt-16">
                  <div className="image-card aspect-[3/4]">
                    <img src={IMAGES.production} alt="Nasza produkcja" />
                  </div>
                  <div className="image-card aspect-square translate-x-6">
                    <img src={IMAGES.detail1} alt="Lody z bliska" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="image-card aspect-square -translate-x-6">
                    <img src={IMAGES.detail2} alt="Detale lodów" />
                  </div>
                  <div className="image-card aspect-[3/4]">
                    <img src={IMAGES.cones} alt="Wafelki i lody" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-berry rounded-full flex items-center justify-center text-white shadow-2xl z-20 border-8 border-white">
                  <span className="font-display font-bold text-4xl italic">Fresh</span>
                </div>
             </div>

             <div>
               <h2 className="font-display text-5xl lg:text-7xl font-bold mb-10 leading-tight">
                 Tajemnica tkwi w <span className="italic text-berry/80 underline decoration-berry/20 decoration-8 underline-offset-8">składnikach</span>
               </h2>
               <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                 Lodziarnia Radosław Pniewski to efekt lat doskonalenia rzemiosła. 
                 W Łosicach i Międzyrzecu Podlaskim serwujemy lody, które powstają z pasji do prawdziwego smaku.
               </p>
               
               <div className="space-y-6">
                 {[
                   { t: "Produkcja Własna", d: "Świeże lody gałkowe kręcone codziennie.", icon: <IceCream /> },
                   { t: "Kultowe Świderki", d: "Zawsze idealna konsystencja i pełny aromat.", icon: <Zap /> },
                   { t: "Owocowa Granita", d: "Najlepszy sposób na orzeźwienie w upalne dni.", icon: <ArrowRight /> }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-6 p-8 bg-cream/50 rounded-[2rem] border border-stone-100 hover:border-berry/20 transition-colors group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-berry shadow-sm group-hover:bg-berry group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                        <p className="text-stone-500">{item.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Catering / Events Section */}
      <section id="imprezy" className="section-padding bg-stone-900 text-white relative">
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-berry opacity-5" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="text-berry font-black tracking-[0.3em] uppercase text-sm mb-8 block">Wydarzenia Specjalne</span>
            <h2 className="font-display text-6xl lg:text-8xl font-bold mb-12 leading-[0.9]">
              Lody na <br /> Twoim <br /> <span className="text-stone-400">weselu.</span>
            </h2>
            <p className="text-2xl text-stone-400 mb-16 max-w-xl">
              Uatrakcyjnij swoją imprezę naszą ofertą cateringową. Obsługujemy wesela, chrzciny, komunie oraz urodziny. 
              Mobilna stacja lodowa to gwarancja uśmiechu Twoich gości.
            </p>
            <div className="flex gap-4">
               {['Wesela', 'Chrzciny', 'Eventy'].map(tag => (
                 <span key={tag} className="px-6 py-2 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest">{tag}</span>
               ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="image-card aspect-square rounded-[4rem] border-[12px] border-stone-800">
               <img src={IMAGES.catering} alt="Catering lodowy" />
            </div>
            <a 
              href="#kontakt" 
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-berry rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
            >
              <PartyPopper className="w-10 h-10 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-sm tracking-widest uppercase">Zapytaj</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modern Gallery Grid - Using all remaining photos */}
      <section id="produkty" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl font-bold mb-8">Nasza Galeria</h2>
            <p className="text-stone-500 text-xl font-medium">Kliknij w zdjęcie, aby zobaczyć je w pełnej okazałości.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group rounded-3xl overflow-hidden shadow-soft break-inside-avoid shadow-lg"
              >
                <img src={img} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt={`Lodziarnia Pniewski ${i}`} />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a href={img} target="_blank" rel="noreferrer" className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-2xl hover:bg-berry hover:text-white transition-all transform scale-50 group-hover:scale-100 duration-500">
                    <ExternalLink className="w-8 h-8" />
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
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <div className="flex items-center gap-2 text-[#1877F2] font-black tracking-widest text-xs uppercase mb-4">
                <Facebook className="w-4 h-4 fill-current" />
                Opinie naszych gości z Facebooka
              </div>
              <h2 className="font-display text-5xl lg:text-7xl font-bold">Inni już <span className="text-berry">pokochali</span> nasze lody</h2>
            </div>
            <a 
              href="https://www.facebook.com/profile.php?id=100068910726686&sk=reviews&locale=pl_PL" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white border border-stone-200 rounded-full font-bold text-sm hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              Zobacz wszystkie na FB
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-xl text-stone-700 italic mb-10 leading-relaxed font-medium">"{review.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 font-bold group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                     {review.name[0]}
                   </div>
                   <div>
                     <div className="font-black text-stone-900 uppercase tracking-widest text-xs mb-1">{review.name}</div>
                     <div className="text-[10px] text-stone-400 uppercase font-bold">Facebook Reviewer</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Joing Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-stone-900 rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-berry/10 blur-[120px] rounded-full" />
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-display text-5xl lg:text-6xl font-bold text-white mb-8">Więcej na <br /><span className="text-berry">Facebooku</span></h3>
              <p className="text-stone-400 text-xl mb-12 max-w-md">Dołącz do naszej społeczności. Odkryj nowe smaki, zobacz kulisy produkcji i bierz udział w konkursach!</p>
              <a 
                href="https://www.facebook.com/profile.php?id=100068910726686&locale=pl_PL" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-4 px-12 py-6 bg-[#1877F2] text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                <Facebook className="fill-current" />
                Obserwuj nas
              </a>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="image-card aspect-square rounded-3xl">
                <img src={IMAGES.gallery[0]} alt="FB 1" />
              </div>
              <div className="image-card aspect-square rounded-3xl translate-y-8">
                <img src={IMAGES.gallery[1]} alt="FB 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations - Dark Section */}
      <section id="kontakt" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-stone-900 rounded-[5rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-16 lg:p-24">
              <h2 className="font-display text-5xl font-bold text-white mb-16 underline decoration-berry/50 decoration-4 underline-offset-8">Gdzie jesteśmy?</h2>
              
              <div className="space-y-12">
                {[
                  { c: "Łosice", a: "ul. Rynek 28" },
                  { c: "Międzyrzec Podlaski", a: "Pl. Jana Pawła II 2" }
                ].map((loc, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-berry group-hover:bg-berry group-hover:text-white transition-all">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{loc.c}</h4>
                      <p className="text-stone-400 font-medium">{loc.a}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-12 border-t border-white/10 space-y-8">
                  <div className="flex gap-8 items-center">
                    <Phone className="w-8 h-8 text-berry" />
                    <a href="tel:+48507419726" className="text-2xl font-bold text-white hover:text-berry transition-colors">507 419 726</a>
                  </div>
                  <div className="flex gap-8 items-center">
                    <Mail className="w-8 h-8 text-berry" />
                    <a href="mailto:radekpniewskii@interia.pl" className="text-xl font-medium text-stone-400 hover:text-white transition-colors">radekpniewskii@interia.pl</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center p-12 bg-berry/10">
               <div className="text-center relative z-10">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-stone-900 mb-8 mx-auto shadow-2xl">
                    <MessageSquare className="w-10 h-10" />
                 </div>
                 <h3 className="text-3xl font-display font-black text-white mb-6 uppercase tracking-tighter">Czekamy na Ciebie!</h3>
                 <p className="text-stone-300 max-w-sm mb-12 mx-auto">Masz pytania dotyczące składników lub zamówień na imprezy? Zadaj je nam przez email lub telefon.</p>
                 <a 
                  href="https://www.facebook.com/profile.php?id=100068910726686&sk=reviews&locale=pl_PL" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-10 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-berry hover:text-white transition-all"
                 >
                   Opinie Klientów
                 </a>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-berry/20 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center border-t border-stone-200/50 pt-16">
          <div className="mb-8 md:mb-0">
            <span className="font-display font-black text-3xl tracking-tighter uppercase">Lodziarnia <span className="text-berry">Pniewski</span></span>
          </div>
          <div className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">
             © {new Date().getFullYear()} Lodziarnia Radosław Pniewski
          </div>
          <div className="flex gap-10 mt-8 md:mt-0">
            <a href="#" className="font-black uppercase tracking-widest text-[10px] text-stone-900 hover:text-berry">Powrót do góry</a>
            <a href="https://www.facebook.com/profile.php?id=100068910726686&locale=pl_PL" target="_blank" rel="noreferrer" className="font-black uppercase tracking-widest text-[10px] text-stone-900 hover:text-berry">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
