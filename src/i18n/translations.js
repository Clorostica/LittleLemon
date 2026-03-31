const BASE = 'https://clorostica.github.io/LittleLemon2/img/'

const translations = {
  en: {
    nav: {
      links: ['Home', 'About Us', 'Services', 'Contact'],
      cta: 'Book a Table',
    },
    hero: {
      badge: '🍋 Little Lemon · Mediterranean Cuisine',
      title: 'Flavors That',
      titleEm: 'Tell Stories',
      desc: 'Enjoy a unique dining experience where every dish is a work of art crafted with the freshest seasonal ingredients and a passion for Mediterranean cuisine.',
      cta1: 'Make a Reservation',
      cta2: 'View Menu',
      stats: [
        { number: '200+', label: 'Unique dishes' },
        { number: '15k+', label: 'Happy guests' },
        { number: '4.9★', label: 'Average rating' },
      ],
    },
    section1: {
      label: 'Our Offer',
      title: 'The Best of Little Lemon',
      desc: 'From our kitchen to your table — every experience is crafted to surprise and delight you.',
    },
    section2: {
      label: 'Experiences',
      title: 'Live the Experience',
    },
    cards1: [
      {
        img: BASE + 'foodex.jpg',
        alt: 'menu',
        tag: 'New',
        title: 'Our New Menu',
        text: 'Seasonal dishes made with the finest fresh ingredients and Mediterranean cooking techniques.',
        link: 'Explore the menu',
      },
      {
        img: BASE + 'chef.jpg',
        alt: 'reservation',
        tag: 'Experience',
        title: 'Book a Table',
        text: 'Enjoy a unique evening in our main dining room or on our terrace overlooking the garden.',
        link: 'Book now',
      },
      {
        img: BASE + 'cloup.jpg',
        alt: 'team',
        tag: 'Careers',
        title: 'Work With Us',
        text: 'Join our team of passionate professionals dedicated to gastronomy and excellence in service.',
        link: 'See openings',
      },
    ],
    cards2: [
      {
        img: BASE + 'velero-calle-80-4.webp',
        tag: 'Atmosphere',
        title: 'Unique Moments',
        text: 'Our seasonal favorites are back, alongside new creations with a special twist.',
        btn: 'View Menu',
      },
      {
        img: BASE + 'comida.jpg',
        tag: 'Offer',
        title: 'Happy Hour',
        text: 'Mon–Fri from 3 to 6 pm. Handcrafted cocktails and bites starting at just $4.',
        btn: 'Join Us',
      },
      {
        img: BASE + 'comida2.jpg',
        tag: 'Events',
        title: 'Celebrations',
        text: 'Let us do the cooking so you can enjoy an unforgettable event with your guests.',
        btn: 'Reserve',
      },
    ],
    carousel: [
      { img: BASE + 'carousel1.jpg', title: 'Home Delivery', subtitle: 'Your favorite dishes, right at your door', btn: 'Order now' },
      { img: BASE + 'carousel2.jpeg', title: 'Fast & Fresh', subtitle: 'From the flame to your table in minutes', btn: 'See the offer' },
      { img: BASE + 'carousel3.jpg', title: 'Unique Flavors', subtitle: 'A different kind of dining experience', btn: 'View Menu' },
    ],
    footer: {
      brand: 'Mediterranean cuisine with soul. Fresh ingredients, seasonal recipes and a service that makes every guest feel at home.',
      nav: {
        title: 'Navigation',
        links: ['Home', 'About Us', 'Services', 'Blog', 'Contact'],
      },
      hours: {
        title: 'Opening Hours',
        rows: [
          { day: 'Mon – Fri', time: '12:00 – 10:00 pm' },
          { day: 'Saturday',  time: '12:00 – 11:00 pm' },
          { day: 'Sunday',    time: '12:00 – 9:00 pm'  },
          { day: 'Holidays',  time: '1:00 – 8:00 pm'   },
        ],
      },
      newsletter: {
        title: 'Newsletter',
        desc: 'Get our news, exclusive offers and seasonal menus delivered straight to your inbox.',
        placeholder: 'your@email.com',
        submit: 'Subscribe',
      },
      bottom: {
        copy: (year) => `© ${year} Little Lemon · Claudia Saez. All rights reserved.`,
        links: ['Privacy', 'Terms', 'Cookies'],
      },
    },
  },

  de: {
    nav: {
      links: ['Startseite', 'Über uns', 'Leistungen', 'Kontakt'],
      cta: 'Tisch reservieren',
    },
    hero: {
      badge: '🍋 Little Lemon · Mediterrane Küche',
      title: 'Aromen, die',
      titleEm: 'Geschichten erzählen',
      desc: 'Genießen Sie ein einzigartiges kulinarisches Erlebnis, bei dem jedes Gericht ein Kunstwerk ist — zubereitet mit frischen Zutaten und einer Leidenschaft für mediterrane Küche.',
      cta1: 'Tisch reservieren',
      cta2: 'Speisekarte ansehen',
      stats: [
        { number: '200+', label: 'Einzigartige Gerichte' },
        { number: '15k+', label: 'Zufriedene Gäste' },
        { number: '4,9★', label: 'Durchschnittswertung' },
      ],
    },
    section1: {
      label: 'Unser Angebot',
      title: 'Das Beste von Little Lemon',
      desc: 'Von unserer Küche auf Ihren Tisch — jedes Erlebnis ist darauf ausgerichtet, Sie zu überraschen und zu begeistern.',
    },
    section2: {
      label: 'Erlebnisse',
      title: 'Das Erlebnis erleben',
    },
    cards1: [
      {
        img: BASE + 'foodex.jpg',
        alt: 'menu',
        tag: 'Neu',
        title: 'Unsere neue Speisekarte',
        text: 'Saisonale Gerichte aus den besten frischen Zutaten mit mediterranen Kochtechniken.',
        link: 'Speisekarte erkunden',
      },
      {
        img: BASE + 'chef.jpg',
        alt: 'reservierung',
        tag: 'Erlebnis',
        title: 'Tisch reservieren',
        text: 'Erleben Sie einen einzigartigen Abend in unserem Hauptsaal oder auf unserer Terrasse mit Gartenblick.',
        link: 'Jetzt reservieren',
      },
      {
        img: BASE + 'cloup.jpg',
        alt: 'team',
        tag: 'Karriere',
        title: 'Arbeiten Sie mit uns',
        text: 'Werden Sie Teil unseres Teams aus leidenschaftlichen Profis für Gastronomie und erstklassigen Service.',
        link: 'Stellen ansehen',
      },
    ],
    cards2: [
      {
        img: BASE + 'velero-calle-80-4.webp',
        tag: 'Atmosphäre',
        title: 'Unvergessliche Momente',
        text: 'Unsere saisonalen Favoriten sind zurück — zusammen mit neuen Kreationen mit einem besonderen Touch.',
        btn: 'Speisekarte',
      },
      {
        img: BASE + 'comida.jpg',
        tag: 'Angebot',
        title: 'Happy Hour',
        text: 'Mo–Fr von 15:00–18:00 Uhr. Handgefertigte Cocktails und Snacks ab $4.',
        btn: 'Mitmachen',
      },
      {
        img: BASE + 'comida2.jpg',
        tag: 'Veranstaltungen',
        title: 'Feiern & Feste',
        text: 'Lassen Sie uns kochen, damit Sie ein unvergessliches Fest mit Ihren Gästen genießen können.',
        btn: 'Reservieren',
      },
    ],
    carousel: [
      { img: BASE + 'carousel1.jpg', title: 'Lieferung nach Hause', subtitle: 'Ihre Lieblingsgerichte direkt an Ihre Tür', btn: 'Jetzt bestellen' },
      { img: BASE + 'carousel2.jpeg', title: 'Schnell & Frisch', subtitle: 'Von der Flamme auf Ihren Tisch in Minuten', btn: 'Angebot ansehen' },
      { img: BASE + 'carousel3.jpg', title: 'Einzigartige Aromen', subtitle: 'Ein kulinarisches Erlebnis der besonderen Art', btn: 'Speisekarte' },
    ],
    footer: {
      brand: 'Mediterrane Küche mit Seele. Frische Zutaten, saisonale Rezepte und ein Service, der jeden Gast wie zu Hause fühlen lässt.',
      nav: {
        title: 'Navigation',
        links: ['Startseite', 'Über uns', 'Leistungen', 'Blog', 'Kontakt'],
      },
      hours: {
        title: 'Öffnungszeiten',
        rows: [
          { day: 'Mo – Fr', time: '12:00 – 22:00' },
          { day: 'Samstag', time: '12:00 – 23:00' },
          { day: 'Sonntag', time: '12:00 – 21:00' },
          { day: 'Feiertage', time: '13:00 – 20:00' },
        ],
      },
      newsletter: {
        title: 'Newsletter',
        desc: 'Erhalten Sie unsere Neuigkeiten, exklusive Angebote und Saisonmenüs direkt in Ihren Posteingang.',
        placeholder: 'ihre@email.de',
        submit: 'Abonnieren',
      },
      bottom: {
        copy: (year) => `© ${year} Little Lemon · Claudia Saez. Alle Rechte vorbehalten.`,
        links: ['Datenschutz', 'AGB', 'Cookies'],
      },
    },
  },
}

export default translations
