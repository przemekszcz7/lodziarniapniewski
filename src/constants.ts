export const IMAGES = {
  logo: "https://i.postimg.cc/qqZf0qQV/make-this-image-sharper-less-202605080855-(2).png",
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

export const LOCATIONS = [
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

export const REVIEWS = [
  { name: "Anna K.", text: "Najlepsze lody tradycyjne w regionie. Czuć naturalne składniki!", rating: 5 },
  { name: "Piotr L.", text: "Świderki to absolutny hit każdych wakacji. Polecam serdecznie.", rating: 5 },
  { name: "Małgorzata", text: "Zamówiliśmy catering na chrzciny – goście byli zachwyceni lodami!", rating: 5 }
];
