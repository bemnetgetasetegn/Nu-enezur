export type Language = 'en' | 'am' | 'om';

export interface TranslationDictionary {
  nav: {
    home: string;
    packages: string;
    destinations: string;
    about: string;
    contact: string;
    bookTour: string;
    selectLanguage: string;
    langTitle: string;
  };
  hero: {
    badgeAuthentic: string;
    badgeOrigins: string;
    brandName: string;
    tagline: string;
    headline: string;
    description: string;
    destinationLabel: string;
    destinationDefault: string;
    seasonLabel: string;
    seasonDefault: string;
    travelersLabel: string;
    travelersDefault: string;
    bookSchedule: string;
    unescoCount: string;
    unescoLabel: string;
    bottomDesc: string;
  };
  destinations: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    seeAll: string;
    from: string;
    expeditionBasecamp: string;
    expeditionDesc: string;
    spherePrompt: string;
    sphereSub: string;
    cards: {
      [id: string]: {
        name: string;
        region: string;
        duration: string;
        description: string;
      };
    };
  };
  sphere: {
    badge: string;
    title: string;
    items: {
      [titleKey: string]: {
        title: string;
        description: string;
      };
    };
  };
  packages: {
    badge: string;
    title: string;
    subtitle: string;
    exploreAll: string;
    viewItinerary: string;
    bookPackage: string;
    cards: {
      [id: string]: {
        title: string;
        category: string;
        duration: string;
        groupSize: string;
        summary: string;
      };
    };
  };
  why: {
    badge: string;
    title: string;
    nameExplain: string;
    nameQuote: string;
    nameMeaning: string;
    descriptionRest: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    charterLink: string;
    certTitle: string;
    certDesc: string;
  };
  testimonials: {
    badge: string;
    title: string;
    quotes: {
      [id: string]: {
        quote: string;
        tourTaken: string;
      };
    };
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    destLabel: string;
    datesLabel: string;
    datesPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    tagline: string;
    description: string;
    address: string;
    popularPackages: string;
    destinationsTitle: string;
    exploreTitle: string;
    viewAllPackages: string;
    aboutStory: string;
    curatedPackages: string;
    guestReviews: string;
    contactSupport: string;
    tailorMade: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      packages: "Packages",
      destinations: "Destinations",
      about: "About Us",
      contact: "Contact",
      bookTour: "Book Tour",
      selectLanguage: "Select Language",
      langTitle: "Language / ቋንቋ / Afaan",
    },
    hero: {
      badgeAuthentic: "Authentic Expeditions",
      badgeOrigins: "Land of Origins",
      brandName: "NU-ENEZUR",
      tagline: "Explore • Connect • Inspire",
      headline: "Uncover Ethiopia's Sacred & Untamed Wonders",
      description: "Bespoke journeys through ancient rock sanctuaries of Lalibela, living tribal cultures of the Lower Omo Valley, and extraterrestrial salt geysers of the Danakil Depression.",
      destinationLabel: "Destination",
      destinationDefault: "Lalibela & Omo Valley",
      seasonLabel: "Season / Month",
      seasonDefault: "Nov 2026 - Jan 2027",
      travelersLabel: "Travelers",
      travelersDefault: "2 Travelers",
      bookSchedule: "Book schedule",
      unescoCount: "12 UNESCO",
      unescoLabel: "World Heritage Sites",
      bottomDesc: "Discover Ethiopia's finest sanctuaries — from ancient monolithic rock-hewn churches in Lalibela and living ancestral cultures of the Omo Valley to the extraterrestrial salt plains of the Danakil Depression.",
    },
    destinations: {
      badge: "Our Destinations",
      titleLine1: "Your Journey to the Heart of",
      titleLine2: "Ethiopia Begins Here",
      seeAll: "See All Destinations",
      from: "From",
      expeditionBasecamp: "Expedition Basecamp",
      expeditionDesc: "Wilderness glamping & safari camps beneath the Ethiopian stars.",
      spherePrompt: "Explore 3D Expedition Sphere Below ↓",
      sphereSub: "Drag and spin the interactive globe",
      cards: {
        "addis-ababa": {
          name: "Addis Ababa City Experience",
          region: "Central Shewa",
          duration: "1 - 2 Days",
          description: "Explore the National Museum (home of 3.2-million-year-old Lucy), the vibrant Mercato, panoramic views from Mount Entoto, and traditional coffee ceremonies.",
        },
        "omo-valley": {
          name: "Lower Omo Valley Tribal Safari",
          region: "Southern Nations & Peoples",
          duration: "7 - 9 Days",
          description: "An authentic expedition into the UNESCO-recognized cultural landscapes of the Hamer, Mursi, Karo, and Dassanech tribes along the great Omo River.",
        },
        "lalibela": {
          name: "Rock-Hewn Churches of Lalibela",
          region: "Amhara Highlands",
          duration: "3 - 4 Days",
          description: "Eleventh-century subterranean monolithic rock churches carved directly into pink volcanic tuff by King Lalibela, including Saint George (Bete Giorgis).",
        },
        "danakil-depression": {
          name: "Danakil & Erta Ale Volcano",
          region: "Afar Triangle",
          duration: "4 - 5 Days",
          description: "Descend 125 meters below sea level to witness neon yellow and green sulfur springs at Dallol and trek to the boiling lava lake of active Erta Ale Volcano.",
        },
        "simien-mountains": {
          name: "Simien Mountains High Escarpments",
          region: "North Gondar",
          duration: "3 - 6 Days",
          description: "Trek along 4,000-meter sheer Afro-Alpine precipices, encounter majestic Gelada baboon troops, and spot rare Walia ibex in UNESCO-listed wilderness.",
        },
        "bale-mountains": {
          name: "Bale Mountains Alpine Wilderness",
          region: "Oromia Highlands",
          duration: "3 - 5 Days",
          description: "Traverse the Sanetti Plateau, primary habitat of the endangered Ethiopian wolf, and immerse in the mystical lichen-draped Harenna cloud forest.",
        },
      },
    },
    sphere: {
      badge: "Interactive Sphere",
      title: "Explore Ethiopia Beyond Horizons",
      items: {
        "Bete Giyorgis Monolith": {
          title: "Bete Giyorgis Monolith",
          description: "11th-century monolithic cruciform sanctuary carved deep into volcanic rock in Lalibela.",
        },
        "Erta Ale & Dallol": {
          title: "Erta Ale & Dallol",
          description: "Alien salt geysers and one of Earth's only persistent active basaltic lava lakes.",
        },
        "Simien High Escarpments": {
          title: "Simien High Escarpments",
          description: "Dramatic 4,000m Afro-Alpine ridges, home of endemic Walia ibex and Geladas.",
        },
        "Omo Valley Ceremonies": {
          title: "Omo Valley Ceremonies",
          description: "Living anthropology with the ancestral Hamer, Mursi, and Karo communities.",
        },
        "Addis Ababa Capital": {
          title: "Addis Ababa Capital",
          description: "The vibrant diplomatic hub of Africa, home to Lucy and panoramic Entoto Hills.",
        },
        "Sanetti Plateau & Wolves": {
          title: "Sanetti Plateau & Wolves",
          description: "Afro-alpine sanctuary of the Ethiopian Wolf and primeval Harenna cloud forest.",
        },
        "Highland Sanctuaries": {
          title: "Highland Sanctuaries",
          description: "Pristine vistas, sacred mountain monasteries, and pure Land of Origins horizons.",
        },
        "Fasil Ghebbi Castles": {
          title: "Fasil Ghebbi Castles",
          description: "The Camelot of Africa — 17th-century medieval stone palaces in historical Gondar.",
        },
      },
    },
    packages: {
      badge: "Curated Itineraries",
      title: "Featured Tour Packages",
      subtitle: "From our famous Addis Ababa full-day city exploration to multi-week expeditions across the Omo Valley and Danakil Depression.",
      exploreAll: "Explore All 12 Packages",
      viewItinerary: "View Itinerary",
      bookPackage: "Book Package",
      cards: {
        "book-addis-ababa-city-tour": {
          title: "Addis Ababa Full-Day Cultural & Historical Experience",
          category: "Cultural & City",
          duration: "1 Full Day (8 Hours)",
          groupSize: "1 - 8 Travelers (Private)",
          summary: "Uncover the diplomatic heartbeat of Africa with Lucy at the National Museum, panoramic vistas from Mount Entoto, Mercato bustling alleys, and sacred Holy Trinity Cathedral.",
        },
        "omo-valley-cultural-expedition": {
          title: "Lower Omo Valley Living Anthropology & Tribal Safari",
          category: "Cultural Expedition",
          duration: "8 Days / 7 Nights",
          groupSize: "2 - 10 Travelers",
          summary: "An ethical and respectful immersion into ancestral cultures of the Hamer, Mursi, Karo, and Dassanech tribes, including authentic ceremonies and Lake Chamo boat safari.",
        },
        "danakil-erta-ale-adventure": {
          title: "Danakil Depression, Dallol & Erta Ale Volcano Expedition",
          category: "Extreme Adventure",
          duration: "4 Days / 3 Nights",
          groupSize: "2 - 8 Travelers",
          summary: "Venture into the hottest geothermal desert on Earth. Camp near active boiling basaltic lava lakes, witness neon hydrothermal acid pools, and Afar camel caravans.",
        },
        "historic-north-lalibela-gondar": {
          title: "Historic Northern Circuit: Lalibela & Gondar Royal Enclosure",
          category: "Heritage & History",
          duration: "6 Days / 5 Nights",
          groupSize: "2 - 12 Travelers",
          summary: "Marvel at King Lalibela's 11 subterranean monolithic rock-hewn sanctuaries and step inside the 17th-century medieval stone palaces of Emperor Fasilides in Gondar.",
        },
      },
    },
    why: {
      badge: "Why Nu-Enezur?",
      title: "Rooted in Ethiopian Hospitality, Driven by Purpose.",
      nameExplain: '"Nu-Enezur"',
      nameQuote: " in Amharic translates to ",
      nameMeaning: '"Come, Let Us Explore Together."',
      descriptionRest: " Born from a collective of veteran local tour directors, cultural anthropologists, and mountaineers, we offer deep-rooted connections rather than superficial tourism.",
      feature1Title: "Licensed & Insured",
      feature1Desc: "Ministry of Tourism registered with private Toyota Land Cruisers.",
      feature2Title: "Indigenous Partnerships",
      feature2Desc: "Direct fair-trade village compensation across Omo & Afar.",
      feature3Title: "Bespoke & Small Group",
      feature3Desc: "Private itineraries tailored to your photography & trekking pace.",
      feature4Title: "Expert Local Storytellers",
      feature4Desc: "Guides with decades of historical and cultural fluency.",
      charterLink: "Read our complete founding story & ethics charter →",
      certTitle: "Certified Sustainable Tour Operator",
      certDesc: "Operating in full harmony with local village councils and nature reserves throughout Ethiopia.",
    },
    testimonials: {
      badge: "Guest Testimonials",
      title: "Chronicles From Fellow Travelers",
      quotes: {
        "1": {
          quote: "Our expedition through Lalibela and Danakil with Nu-Enezur was transformative. Their local connections allowed us into sacred ceremonies respectfully, and our guide treated us like family from day one.",
          tourTaken: "Historic North & Danakil Expedition",
        },
        "2": {
          quote: "The Omo Valley cultural safari was conducted with supreme ethics and cultural sensitivity. Nu-Enezur works hand-in-hand with the tribes. It felt authentic, eye-opening, and deeply moving.",
          tourTaken: "Omo Valley Tribal Safari",
        },
        "3": {
          quote: "As a wildlife photographer, trekking the Simien Mountains with Nu-Enezur was a dream. The guides placed us right beside Gelada baboons at sunrise and managed campsite logistics flawlessly.",
          tourTaken: "Simien Mountains Trekking",
        },
      },
    },
    cta: {
      badge: "Your Ethiopian Odyssey",
      title: "Ready to Explore Ethiopia with Nu-Enezur?",
      subtitle: "Whether you want a private day excursion through Addis Ababa or a bespoke 14-day traverse across the Omo Valley, Danakil Depression, and Lalibela, our local expedition directors are ready to craft your journey.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Eleanor Vance",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g. eleanor@domain.com",
      destLabel: "Preferred Destination",
      datesLabel: "Approximate Dates / Season",
      datesPlaceholder: "e.g. November 2026",
      messageLabel: "Tell Us About Your Dream Trip",
      messagePlaceholder: "Share your travel style, interests (wildlife, culture, hiking), and group size...",
      submitBtn: "Request Custom Itinerary",
      successTitle: "Amesegenalehu! (Thank You)",
      successDesc: "We have received your inquiry. A Nu-Enezur expedition designer will reach out with a customized itinerary within 24 hours.",
    },
    footer: {
      tagline: "Explore • Connect • Inspire",
      description: "Your premier Ethiopian travel specialist. Inspired by the living traditions of the Omo Valley, the ancient sanctity of Lalibela, and the untamed frontiers of Danakil and Simien Mountains.",
      address: "Bole Road, Near Medhanialem, Addis Ababa, Ethiopia",
      popularPackages: "Popular Packages",
      destinationsTitle: "Destinations",
      exploreTitle: "Explore Nu-Enezur",
      viewAllPackages: "View All Packages →",
      aboutStory: "About Our Story",
      curatedPackages: "Curated Packages",
      guestReviews: "Guest Reviews",
      contactSupport: "Contact & Support",
      tailorMade: "Tailor-Made Tour",
      copyright: "All rights reserved. Explore Ethiopia with love & reverence.",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      packages: "የጉዞ ፓኬጆች",
      destinations: "የመዳረሻ ቦታዎች",
      about: "ስለ እኛ",
      contact: "ያግኙን",
      bookTour: "ቦታ ያስይዙ",
      selectLanguage: "ቋንቋ ይምረጡ",
      langTitle: "ቋንቋ / Language / Afaan",
    },
    hero: {
      badgeAuthentic: "እውነተኛ ጉዞዎች",
      badgeOrigins: "የሰው ዘር መገኛ",
      brandName: "ኑ-እንዙር",
      tagline: "ያስሱ • ይገናኙ • ያነሳሱ",
      headline: "የኢትዮጵያን ቅዱስ እና ያልተዳሰሱ ድንቆች ያግኙ",
      description: "በጥንታዊው የላሊበላ ፍልፍል አብያተ ክርስቲያናት፣ በደቡብ ኦሞ ሸለቆ ባህላዊ ማህበረሰቦች እና በዳናኪል ድንቅ የጨው ሜዳዎች የማይረሳ ጉዞ ያድርጉ።",
      destinationLabel: "መዳረሻ",
      destinationDefault: "ላሊበላ እና ኦሞ ሸለቆ",
      seasonLabel: "ወቅት / ወር",
      seasonDefault: "ህዳር 2019 - ጥር 2019",
      travelersLabel: "ተጓዦች",
      travelersDefault: "2 ተጓዦች",
      bookSchedule: "ቀጠሮ ያስይዙ",
      unescoCount: "12 የዩኔስኮ",
      unescoLabel: "የዓለም ቅርስ ቦታዎች",
      bottomDesc: "የኢትዮጵያን ምርጥ መዳረሻዎች ያስሱ — ከላሊበላ ጥንታዊ የድንጋይ ውቅር አብያተ ክርስቲያናት እስከ ኦሞ ሸለቆ ህያው ባህሎች እና የዳናኪል ድንቅ የተፈጥሮ ገጽታዎች።",
    },
    destinations: {
      badge: "መዳረሻዎቻችን",
      titleLine1: "ወደ ኢትዮጵያ ልብ የሚደረገው",
      titleLine2: "ጉዞዎ እዚህ ይጀምራል",
      seeAll: "ሁሉንም መዳረሻዎች ይመልከቱ",
      from: "ከ",
      expeditionBasecamp: "የጉዞ ካምፕ (Basecamp)",
      expeditionDesc: "በኢትዮጵያ ከዋክብት ስር የተፈጥሮ ድንኳን እና ሳፋሪ ካምፖች።",
      spherePrompt: "በይነተገናኝ የ 3D ሉል ከታች ያስሱ ↓",
      sphereSub: "ሉሉን በማሽከርከር ድንቅ ቦታዎችን ይመልከቱ",
      cards: {
        "addis-ababa": {
          name: "የአዲስ አበባ ከተማ ጉብኝት",
          region: "ማዕከላዊ ሸዋ",
          duration: "1 - 2 ቀናት",
          description: "የብሔራዊ ሙዚየም (የ3.2 ሚሊዮን ዓመቷ ሉሲ መገኛ)፣ የመርካቶ ገበያ፣ የእንጦጦ ተራራ እይታ እና ባህላዊ የቡና ማፍላት ስነ-ስርዓት።",
        },
        "omo-valley": {
          name: "የደቡብ ኦሞ ሸለቆ ባህላዊ ጉዞ",
          region: "ደቡብ ኢትዮጵያ",
          duration: "7 - 9 ቀናት",
          description: "የሐመር፣ የሙርሲ፣ የካሮ እና የዳሰነች ማህበረሰቦችን ድንቅ ባህልና አኗኗር በታላቁ ኦሞ ወንዝ ዙሪያ የሚጎበኙበት እውነተኛ ጉዞ።",
        },
        "lalibela": {
          name: "የላሊበላ ውቅር አብያተ ክርስቲያናት",
          region: "አማራ ክልል",
          duration: "3 - 4 ቀናት",
          description: "በ12ኛው መቶ ክፍለ ዘመን በንጉሥ ላሊበላ ከአንድ ወጥ አለት ተፈልፍለው የተሰሩ አስደናቂ አብያተ ክርስቲያናት፣ በተለይም ቤተ ጊዮርጊስ።",
        },
        "danakil-depression": {
          name: "ዳናኪል እና ኤርታ አሌ እሳተ ጎመራ",
          region: "አፋር ክልል",
          duration: "4 - 5 ቀናት",
          description: "ከባህር ጠለል በታች 125 ሜትር ዝቅ ብለው የዳሎልን የሰልፈር ምንጮች፣ ሰፊ የጨው ሜዳዎችና የሚንተከተከውን የኤርታ አሌ እሳተ ጎመራ ይመልከቱ።",
        },
        "simien-mountains": {
          name: "የሰሜን ተራሮች ብሔራዊ ፓርክ",
          region: "ሰሜን ጎንደር",
          duration: "3 - 6 ቀናት",
          description: "ከባህር ጠለል በላይ 4,000 ሜትር ከፍታ ያላቸው የተራራ ጫፎች፣ ብርቅዬው ዋሊያ አይቤክስ እና ጭላዳ ዝንጀሮዎች መገኛ።",
        },
        "bale-mountains": {
          name: "የባሌ ተራሮች ብሔራዊ ፓርክ",
          region: "ኦሮሚያ ክልል",
          duration: "3 - 5 ቀናት",
          description: "የኢትዮጵያ ቀይ ቀበሮ መገኛ የሆነው የሳኔቲ ሜዳ እና ጥንታዊው የሃረና ዝናባማ ደን አስደናቂ የተፈጥሮ ገነት።",
        },
      },
    },
    sphere: {
      badge: "በይነተገናኝ ሉል",
      title: "ኢትዮጵያን ከአድማስ ባሻገር ያስሱ",
      items: {
        "Bete Giyorgis Monolith": {
          title: "ቤተ ጊዮርጊስ ፍልፍል ቤተክርስቲያን",
          description: "በ11ኛው መቶ ክፍለ ዘመን በላሊበላ ከእሳተ ገሞራ አለት በጥልቀት ተፈልፍሎ የተሰራ ድንቅ የመስቀል ቅርጽ ቤተክርስቲያን።",
        },
        "Erta Ale & Dallol": {
          title: "ኤርታ አሌ እና ዳሎል",
          description: "አስደናቂ የጨው ጋይሰሮች እና በምድር ላይ ካሉ ቀጣይነት ያላቸው ንቁ የላቫ ሀይቆች አንዱ።",
        },
        "Simien High Escarpments": {
          title: "የሰሜን ተራሮች ከፍተኛ ሸለቆዎች",
          description: "4,000 ሜትር ከፍታ ያላቸው ገደሎች፣ ብርቅዬዎቹ የዋሊያ አይቤክስ እና የጭላዳ ዝንጀሮዎች መኖሪያ።",
        },
        "Omo Valley Ceremonies": {
          title: "የኦሞ ሸለቆ ባህላዊ ስነ-ስርዓቶች",
          description: "ከሐመር፣ ሙርሲ እና ካሮ ጥንታዊ ማህበረሰቦች ጋር የሚደረግ ህያው የባህል ጉዞ።",
        },
        "Addis Ababa Capital": {
          title: "የዲፕሎማሲያዊ መዲና አዲስ አበባ",
          description: "የአፍሪካ የዲፕሎማሲ ማዕከል፣ የሉሲ መገኛ እና ውብ የእንጦጦ ተራራ እይታዎች።",
        },
        "Sanetti Plateau & Wolves": {
          title: "የሳኔቲ ሜዳ እና የኢትዮጵያ ቀበሮዎች",
          description: "ብርቅዬው የኢትዮጵያ ቀይ ቀበሮ መኖሪያ እና ጥንታዊው የሃረና ደን።",
        },
        "Highland Sanctuaries": {
          title: "የደጋው ቅዱሳን ስፍራዎች",
          description: "ንጹህ የተፈጥሮ እይታዎች፣ የተቀደሱ ገዳማት እና የሰው ዘር መገኛ አድማሶች።",
        },
        "Fasil Ghebbi Castles": {
          title: "የፋሲል ግቢ ቤተ መንግሥታት",
          description: "የአፍሪካ ካሜሎት — በታሪካዊቷ ጎንደር የሚገኙ የ17ኛው መቶ ክፍለ ዘመን የድንጋይ ቤተ መንግሥታት።",
        },
      },
    },
    packages: {
      badge: "የተመረጡ የጉዞ መርሃ ግብሮች",
      title: "ተወዳጅ የጉዞ ፓኬጆች",
      subtitle: "ከሙሉ ቀን የአዲስ አበባ የከተማ ጉብኝት እስከ ሳምንታት የሚወስዱ የኦሞ ሸለቆ እና የዳናኪል ጉዞዎች።",
      exploreAll: "ሁሉንም 12 ፓኬጆች ያስሱ",
      viewItinerary: "የጉዞ መርሃ ግብር",
      bookPackage: "ይህን ፓኬጅ ያስይዙ",
      cards: {
        "book-addis-ababa-city-tour": {
          title: "የአዲስ አበባ ሙሉ ቀን የባህል እና የታሪክ ጉብኝት",
          category: "ባህል እና ከተማ",
          duration: "1 ሙሉ ቀን (8 ሰዓታት)",
          groupSize: "1 - 8 ተጓዦች (የግል)",
          summary: "የአፍሪካን ዲፕሎማሲያዊ ማዕከል ከ3.2 ሚሊዮን ዓመቷ ሉሲ በብሔራዊ ሙዚየም፣ የእንጦጦ እይታ፣ የመርካቶ ገበያ እና ቅድስት ሥላሴ ካቴድራል ጋር ያስሱ።",
        },
        "omo-valley-cultural-expedition": {
          title: "የደቡብ ኦሞ ሸለቆ ባህላዊ ሳፋሪ ጉዞ",
          category: "ባህላዊ ጉዞ",
          duration: "8 ቀናት / 7 ሌሊቶች",
          groupSize: "2 - 10 ተጓዦች",
          summary: "ከሐመር፣ ሙርሲ፣ ካሮ እና ዳሰነች ማህበረሰቦች ጋር የሚደረግ የተከበረ የባህል ትስስር፣ እውነተኛ ስነ-ስርዓቶች እና የጫሞ ሀይቅ የጀልባ ሳፋሪ።",
        },
        "danakil-erta-ale-adventure": {
          title: "የዳናኪል ድብርት፣ ዳሎል እና ኤርታ አሌ እሳተ ጎመራ",
          category: "ጀብደኝነት",
          duration: "4 ቀናት / 3 ሌሊቶች",
          groupSize: "2 - 8 ተጓዦች",
          summary: "በምድር ላይ እጅግ ሞቃታማ ወደሆነው ስፍራ ጉዞ ያድርጉ። በሚፈላ የእሳተ ጎመራ ሀይቅ አጠገብ ያድሩ፣ ደማቅ የሰልፈር ምንጮችና የአፋር የግመል ቅፍለቶችን ይመልከቱ።",
        },
        "historic-north-lalibela-gondar": {
          title: "የታሪካዊው ሰሜን ጉዞ፡ የላሊበላ አብያተ ክርስቲያናት እና የጎንደር ቤተ መንግሥት",
          category: "ታሪክ እና ቅርስ",
          duration: "6 ቀናት / 5 ሌሊቶች",
          groupSize: "2 - 12 ተጓዦች",
          summary: "የንጉሥ ላሊበላን 11 የፍልፍል አብያተ ክርስቲያናት ይጎብኙ፤ በጎንደር የሚገኙ የ17ኛው መቶ ክፍለ ዘመን የንጉሥ ፋሲለደስ ግንቦችን ያስሱ።",
        },
      },
    },
    why: {
      badge: "ለምን ኑ-እንዙር?",
      title: "በኢትዮጵያዊ መስተንግዶ የደመቀ፣ በዓላማ የሚመራ።",
      nameExplain: '"ኑ-እንዙር"',
      nameQuote: " በአማርኛ ሲተረጎም ",
      nameMeaning: '"ኑ፣ አብረን እንዙር/እንጎብኝ"',
      descriptionRest: " ማለት ነው። ከአካባቢው አንጋፋ የጉብኝት መሪዎች፣ የባህል ተመራማሪዎች እና የተራራ አስጎብኚዎች የተመሰረተ ድርጅት ሲሆን፣ ከላይ ላዩን ከሚደረግ ጉብኝት ይልቅ ጥልቅ ትስስር እና እውነተኛ ልምድ እንዲኖርዎት ያደርጋል።",
      feature1Title: "ህጋዊ ፈቃድ እና መድን ያለው",
      feature1Desc: "በቱሪዝም ሚኒስቴር የተመዘገበ፣ ምቹ እና አስተማማኝ ቶዮታ ላንድ ክሩዘር ተሽከርካሪዎች።",
      feature2Title: "ከአካባቢው ማህበረሰብ ጋር ቀጥተኛ ትብብር",
      feature2Desc: "በኦሞ እና አፋር ለሚገኙ መንደሮች ቀጥተኛና ፍትሃዊ ተጠቃሚነትን የሚያረጋግጥ።",
      feature3Title: "ልዩ እና አነስተኛ የቡድን ጉዞዎች",
      feature3Desc: "ለፎቶግራፍ እና ለእግር ጉዞ ፍላጎትዎ የተመቻቹ የግል መርሃ ግብሮች።",
      feature4Title: "ባለሙያ የአካባቢው አስጎብኚዎች",
      feature4Desc: "የአካባቢውን ታሪክ እና ባህል ጠንቅቀው የሚያውቁ አንጋፋ መሪዎች።",
      charterLink: "ሙሉ የታሪክ እና የስነ-ምግባር መመሪያችንን ያንብቡ →",
      certTitle: "ህጋዊ ዘላቂ የቱሪዝም ድርጅት",
      certDesc: "በመላው ኢትዮጵያ ከሚገኙ የገጠር ማህበረሰቦች እና የተፈጥሮ ጥበቃ ቦታዎች ጋር በተስማማ መልኩ የሚሰራ።",
    },
    testimonials: {
      badge: "የተጓዦች ምስክርነት",
      title: "ከተጓዦች የተሰበሰቡ ታሪኮች",
      quotes: {
        "1": {
          quote: "ከኑ-እንዙር ጋር በላሊበላ እና ዳናኪል ያደረግነው ጉዞ የማይረሳ ነበር። የአካባቢ ትስስራቸው ቅዱሳን ስነ-ስርዓቶችን በአክብሮት እንድንካፈል ረድቶናል፤ መሪያችን ከመጀመሪያው ቀን ጀምሮ እንደ ቤተሰብ ተንከባክቦናል።",
          tourTaken: "የታሪካዊ ሰሜን እና ዳናኪል ጉዞ",
        },
        "2": {
          quote: "የኦሞ ሸለቆ ባህላዊ ሳፋሪ እጅግ ከፍተኛ ስነ-ምግባርና ባህላዊ አክብሮት የተላበሰ ነበር። ኑ-እንዙር ከማህበረሰቡ ጋር በቅርበት ይሰራል፤ በጣም እውነተኛ፣ ልብ የሚነካ ተሞክሮ ነበር።",
          tourTaken: "የኦሞ ሸለቆ ባህላዊ ሳፋሪ",
        },
        "3": {
          quote: "እንደ የዱር እንስሳት ፎቶግራፍ አንሺ፣ በሰሜን ተራሮች ከኑ-እንዙር ጋር ያደረግኩት ጉዞ ህልሜን ያሳካ ነበር። መሪዎቹ በጠዋቱ የጭላዳ ዝንጀሮዎችን እንድቀርብ ረድተውናል፣ የካምፑ አያያዝም ምርጥ ነበር።",
          tourTaken: "የሰሜን ተራሮች የእግር ጉዞ",
        },
      },
    },
    cta: {
      badge: "የኢትዮጵያ ድንቅ ጉዞዎ",
      title: "ከኑ-እንዙር ጋር ኢትዮጵያን ለማሰስ ዝግጁ ኖት?",
      subtitle: "የአንድ ቀን የአዲስ አበባ ጉብኝትም ይሁን የ14 ቀናት የኦሞ ሸለቆ፣ የዳናኪል እና የላሊበላ ጉዞ፣ የአካባቢው የጉዞ መሪዎቻችን ለእርስዎ የተዘጋጀ ጉዞ ለማዘጋጀት ዝግጁ ናቸው።",
      nameLabel: "ሙሉ ስም",
      namePlaceholder: "ምሳሌ፡ አልአዛር ተስፋዬ",
      emailLabel: "የኢሜይል አድራሻ",
      emailPlaceholder: "ምሳሌ፡ aleazar@domain.com",
      destLabel: "የሚመርጡት መዳረሻ",
      datesLabel: "የታሰበበት ቀን / ወቅት",
      datesPlaceholder: "ምሳሌ፡ ህዳር 2019",
      messageLabel: "ስለ ሕልም ጉዞዎ ይንገሩን",
      messagePlaceholder: "የጉዞ ዘይቤዎን፣ ፍላጎቶችዎን (የዱር እንስሳት፣ ባህል፣ የእግር ጉዞ) እና የቡድን ብዛትን ያጋሩን...",
      submitBtn: "የግል የጉዞ መርሃ ግብር ይጠይቁ",
      successTitle: "እናመሰግናለን! (Thank You)",
      successDesc: "ጥያቄዎ ደርሶናል። የኑ-እንዙር የጉዞ አዘጋጅ በ 24 ሰዓታት ውስጥ የተዘጋጀ መርሃ ግብር ይዞ ያገኝዎታል።",
    },
    footer: {
      tagline: "ያስሱ • ይገናኙ • ያነሳሱ",
      description: "ዋነኛው የኢትዮጵያ ጉዞ አጋርዎ። በኦሞ ሸለቆ ህያው ባህል፣ በላሊበላ ታሪካዊ ቅድስና እና በዳናኪልና ሰሜን ተራሮች ድንቅ ተፈጥሮ የተቃኘ።",
      address: "ቦሌ መንገድ፣ መድኃኔዓለም አጠገብ፣ አዲስ አበባ፣ ኢትዮጵያ",
      popularPackages: "ተወዳጅ ፓኬጆች",
      destinationsTitle: "መዳረሻዎች",
      exploreTitle: "ኑ-እንዙርን ያስሱ",
      viewAllPackages: "ሁሉንም ፓኬጆች ይመልከቱ →",
      aboutStory: "ስለ እኛ ታሪክ",
      curatedPackages: "የተመረጡ ፓኬጆች",
      guestReviews: "የተጓዦች አስተያየት",
      contactSupport: "ያግኙን እና ድጋፍ",
      tailorMade: "የግል ጉዞ ያዘጋጁ",
      copyright: "መብቱ በህግ የተጠበቀ ነው። ኢትዮጵያን በፍቅር ያስሱ።",
    },
  },
  om: {
    nav: {
      home: "Fuula Dura",
      packages: "Paakeejjiiwwan",
      destinations: "Bakkeewwan",
      about: "Waa'ee Keenya",
      contact: "Nu Qunnamaa",
      bookTour: "Bakka Qabadhaa",
      selectLanguage: "Afaan Filadhaa",
      langTitle: "Afaan / Language / ቋንቋ",
    },
    hero: {
      badgeAuthentic: "Imala Dhugaa",
      badgeOrigins: "Hundee Dhala Namaa",
      brandName: "NU-ENEZUR",
      tagline: "Daawwadhaa • Wal-qunnamaa • Kaka'aa",
      headline: "Dinqisiisoo fi Qulqullummaa Itoophiyaa Daawwadhaa",
      description: "Manni qulqullummaa Laallibalaa durii, aadaa hawaasa Oomoo gadii, fi lafa ashaboo Daanaakil keessa imala addaa taasisaa.",
      destinationLabel: "Bakka Imalaa",
      destinationDefault: "Laallibalaa fi Sulula Oomoo",
      seasonLabel: "Waqtii / Ji'a",
      seasonDefault: "Muddee 2026 - Amajjii 2027",
      travelersLabel: "Imaltoota",
      travelersDefault: "Imaltoota 2",
      bookSchedule: "Sagantaa Qabadhaa",
      unescoCount: "Yuuneeskoo 12",
      unescoLabel: "Dhaala Addunyaa",
      bottomDesc: "Bakkeewwan Itoophiyaa adda ta'an daawwadhaa — manneen qulqullummaa dhagaa irraa tolfaman Laallibalaa irraa hanga aadaa Oomoo fi lafa ashaboo Daanaakilitti.",
    },
    destinations: {
      badge: "Bakkeewwan Keenya",
      titleLine1: "Imalli Gara Wiirtuu",
      titleLine2: "Itoophiyaa Asii Eegala",
      seeAll: "Bakkeewwan Hundaa Ilaalaa",
      from: "Ka'umsa",
      expeditionBasecamp: "Kaampii Imalaa (Basecamp)",
      expeditionDesc: "Urjiiwwan Itoophiyaa jalatti kaampii fi daawwanna qilleensa qulqulluu.",
      spherePrompt: "Kubbaa 3D Daawwanna Asii Gadii Daawwadhaa ↓",
      sphereSub: "Kubbaa naannessuun iddoowwan dinqisiisoo ilaalaa",
      cards: {
        "addis-ababa": {
          name: "Muuxannoo Magaalaa Finfinnee",
          region: "Shawaa Gidduugaleessaa",
          duration: "Guyyoota 1 - 2",
          description: "Muuziyeemii Biyyooleessaa (iddoo Luusii ganna miliyoona 3.2), gabaa Markaatoo, tulluu Intoxxoo fi sirna buna dhuguu aadaa.",
        },
        "omo-valley": {
          name: "Imala Aadaa Sulula Oomoo Gadii",
          region: "Kibba Itoophiyaa",
          duration: "Guyyoota 7 - 9",
          description: "Aadaa fi jireenya uummata Haamar, Mursii, Kaaroo fi Dassaanech sulula laga Oomoo keessatti imala daawwanna dhugaa.",
        },
        "lalibela": {
          name: "Manneen Qulqullummaa Dhagaa Laallibalaa",
          region: "Naannoo Amaaraa",
          duration: "Guyyoota 3 - 4",
          description: "Jaarraa 12ffaa keessa Mootii Laallibalaatiin dhagaa tokko irraa kan bocaman manneen qulqullummaa dinqisiisoo, keessumattuu Bete Giyoorgis.",
        },
        "danakil-depression": {
          name: "Daanaakil fi Voolkaanoo Ertaa Alee",
          region: "Naannoo Afaar",
          duration: "Guyyoota 4 - 5",
          description: "Sadarkaa galaanaa gadi meetira 125 gadi bu'uun madda ashaboo Daalol, dirree ashaboo bal'aa fi voolkaanoo Ertaa Alee daawwadhaa.",
        },
        "simien-mountains": {
          name: "Paarkii Biyyooleessaa Gaarreen Simieen",
          region: "Gondar Kaabaa",
          duration: "Guyyoota 3 - 6",
          description: "Gaarreen olka'iinsa meetira 4,000 qaban, iddoo jireenya Waaliyaa fi qamalee Galaadaa addunyaa irratti beekamoo.",
        },
        "bale-mountains": {
          name: "Paarkii Biyyooleessaa Gaarreen Baalee",
          region: "Naannoo Oromiyaa",
          duration: "Guyyoota 3 - 5",
          description: "Dirree Saaneettii iddoo jireenya Jeedala Diimaa Itoophiyaa fi bosona uumamaa Harennaa dinqisiisaa.",
        },
      },
    },
    sphere: {
      badge: "Kubbaa Qorannoo 3D",
      title: "Itoophiyaa Daangaa Olitti Daawwadhaa",
      items: {
        "Bete Giyorgis Monolith": {
          title: "Mana Qulqullummaa Bete Giyoorgis",
          description: "Jaarraa 11ffaa keessa Laallibalaa keessatti dhagaa voolkaanoo irraa fannoo fakkaatee kan tolfame.",
        },
        "Erta Ale & Dallol": {
          title: "Ertaa Alee fi Daalol",
          description: "Madda ashaboo dinqisiisaa fi haroo dhoqqee voolkaanoo addunyaa irratti adda ta'e.",
        },
        "Simien High Escarpments": {
          title: "Tabba Olka'aa Gaarreen Simieen",
          description: "Rifiiwwan Afroo-Alpaayin meetira 4,000 olka'an, qe'ee Waaliyaa fi qamalee Galaadaa.",
        },
        "Omo Valley Ceremonies": {
          title: "Sirna Aadaa Sulula Oomoo",
          description: "Hawaasa abbootii Haamar, Mursii fi Kaaroo waliin jireenya aadaa qorachuu.",
        },
        "Addis Ababa Capital": {
          title: "Finfinnee Wiirtuu Dippilomaasii",
          description: "Wiirtuu dippilomaasii Afrikaa, iddoo Luusii fi gaara Intoxxoo bakkawwan daawwanna adda addaa.",
        },
        "Sanetti Plateau & Wolves": {
          title: "Dirree Saaneettii fi Jeedala Diimaa",
          description: "Bakka jireenya Jeedala Diimaa Itoophiyaa fi bosona durii Harennaa.",
        },
        "Highland Sanctuaries": {
          title: "Iddoowwan Qulqullummaa Baddaa",
          description: "Qilleensa qulqulluu, manneen amantaa gaaraa, fi daangaa hundee dhala namaa.",
        },
        "Fasil Ghebbi Castles": {
          title: "Masaraa Mootota Faasiil",
          description: "Kaamelootii Afrikaa — Masaraa dhagaa jaarraa 17ffaa magaalaa seenaa Gondar keessatti.",
        },
      },
    },
    packages: {
      badge: "Sagantaalee Imalaa Filataman",
      title: "Paakeejjiiwwan Imalaa Filataman",
      subtitle: "Daawwanna guyyaa guutuu Finfinnee irraa kaasee hanga imala torbanootaa Oomoo fi Daanaakilitti.",
      exploreAll: "Paakeejjiiwwan Hunda 12 Ilaalaa",
      viewItinerary: "Sagantaa Daawwadhaa",
      bookPackage: "Paakeejjii Kana Qabadhaa",
      cards: {
        "book-addis-ababa-city-tour": {
          title: "Daawwanna Guyyaa Guutuu Seenaa fi Aadaa Magaalaa Finfinnee",
          category: "Aadaa fi Magaalaa",
          duration: "Guyyaa 1 Guutuu (Sa'aatii 8)",
          groupSize: "Imaltoota 1 - 8 (Dhuunfaa)",
          summary: "Luusii ganna miliyoona 3.2 muuziyeemii keessatti, tulluu Intoxxoo, gabaa Markaatoo fi Katedraala Qulqulluu Sillaasee daawwadhaa.",
        },
        "omo-valley-cultural-expedition": {
          title: "Imala Aadaa Sulula Oomoo Gadii fi Saafaarii",
          category: "Imala Aadaa",
          duration: "Guyyoota 8 / Halkan 7",
          groupSize: "Imaltoota 2 - 10",
          summary: "Aadaa uummata Haamar, Mursii, Kaaroo fi Dassaanech kabajaan daawwachuu, sirna aadaa dhugaa fi saafaarii bidiruu Haroo Chaamoo.",
        },
        "danakil-erta-ale-adventure": {
          title: "Imala Daanaakil, Daalol fi Voolkaanoo Ertaa Alee",
          category: "Gootummaa",
          duration: "Guyyoota 4 / Halkan 3",
          groupSize: "Imaltoota 2 - 8",
          summary: "Lafa addunyaa irratti ho'aa ta'e daawwadhaa. Haroo voolkaanoo bira buufadhaa, madda ashaboo fi geejjiba gaala Afaar ilaalaa.",
        },
        "historic-north-lalibela-gondar": {
          title: "Imala Seenaa Kaabaa: Laallibalaa fi Masaraa Faasiil Gondar",
          category: "Seenaa fi Dhaala",
          duration: "Guyyoota 6 / Halkan 5",
          groupSize: "Imaltoota 2 - 12",
          summary: "Manneen qulqullummaa dhagaa 11 Mootii Laallibalaa fi masaraa mootii Faasiiladaas jaarraa 17ffaa Gondar keessatti daawwadhaa.",
        },
      },
    },
    why: {
      badge: "Maaliif Nu-Enezur?",
      title: "Keessummeessummaa Itoophiyaatiin kan hundeeffame, kaayyootti kan fuuleffate.",
      nameExplain: '"Nu-Enezur"',
      nameQuote: " afaan Amaaraatiin yoo hiikamu ",
      nameMeaning: '"Kottaa, Waliin Haa Daawwannu"',
      descriptionRest: " jechuudha. Hoggantoota daawwanna beekamoo, qorattoota aadaa fi ogeeyyii gaarreenii naannichaatiin kan hundeeffame yoo ta'u, daawwanna qofa osoo hin taane walitti dhufeenya cimaa uuma.",
      feature1Title: "Hayyama fi Wabii Qaba",
      feature1Desc: "Ministeera Turiziimiitiin kan galmaa'e, konkolaattota Tiyootaa Laandi Kiruuzarii ammayyaa waliin.",
      feature2Title: "Hawaasa Naannoo Waliin Qindoomina",
      feature2Desc: "Gandoota naannoo Oomoo fi Afaariif kaffaltii haqa qabeessa mirkaneessa.",
      feature3Title: "Imala Addaa fi Garee Xiqqaaf",
      feature3Desc: "Fedhii suuraa fi miilaan deemuutiin kan qophaa'e sagantaa dhuunfaa.",
      feature4Title: "Ogeeyyii fi Seenessitoota Naannoo",
      feature4Desc: "Seenaa fi aadaa naannichaa gadi fageenyaan kan beekan hoggantoota muuxannoo qaban.",
      charterLink: "Seenaa hundeeffamaa fi heera naamusaa keenya guutuu dubbisaa →",
      certTitle: "Dhaabbata Turizimii Itti-fufiinsa Qabu",
      certDesc: "Garee maanguddoota gandaa fi eegumsa uumamaa Itoophiyaa waliin haala wal-simuun kan hojjetu.",
    },
    testimonials: {
      badge: "Ragaa Daawwattootaa",
      title: "Seenaa Imaltoota Keenyaa",
      quotes: {
        "1": {
          quote: "Imalli Laallibalaa fi Daanaakil Nu-Enezur waliin taasisne baay'ee dinqisiisaa ture. Walitti dhufeenyi isaanii sirna amantaa akka kabajaan hirmaannu nu gargaareera; hogganaan keenya akka maatiitti nu kunuunse.",
          tourTaken: "Imala Seenaa Kaabaa fi Daanaakil",
        },
        "2": {
          quote: "Saafaariin aadaa Sulula Oomoo naamusaa fi kabaja aadaa guddaadhaan geggeeffame. Nu-Enezur hawaasa naannoo waliin qindoominaan hojjeta; baay'ee kan nama gammachiisu ture.",
          tourTaken: "Saafaarii Aadaa Sulula Oomoo",
        },
        "3": {
          quote: "Akka suuraa kaastuutti, Gaarreen Simieen Nu-Enezur waliin deemuun abjuu koo naaf dhugoomseera. Hoggantoonni ganama bariin qamalee Galaadaa bira akka geenyu nu taasisan.",
          tourTaken: "Imala Gaarreen Simieen",
        },
      },
    },
    cta: {
      badge: "Imala Addaa Itoophiyaa",
      title: "Nu-Enezur Waliin Itoophiyaa Daawwachuuf Qophiidhaa?",
      subtitle: "Daawwanna guyyaa tokkoo Finfinnee yookiin imala guyyoota 14 Oomoo, Daanaakil fi Laallibalaa yoo barbaaddan, ogeeyyiin keenya qophiidha.",
      nameLabel: "Maqaa Guutuu",
      namePlaceholder: "fkn: Galaan Tolasaa",
      emailLabel: "Teessoo Imeelii",
      emailPlaceholder: "fkn: galaan@domain.com",
      destLabel: "Bakka Filattan",
      datesLabel: "Guyyoota / Waqtii",
      datesPlaceholder: "fkn: Muddee 2026",
      messageLabel: "Waa'ee Imala Abjuu Keessanii Nutti Himaa",
      messagePlaceholder: "Akkaataa imalaa, fedhii keessan (uumama, aadaa, gaara yaabbachuu) fi baay'ina garee...",
      submitBtn: "Sagantaa Addaa Gaafadhaa",
      successTitle: "Galatoomaa! (Thank You)",
      successDesc: "Gaaffiin keessan nu gaheera. Ogeessi Nu-Enezur sa'aatii 24 keessatti sagantaa qophaa'e waliin isin qunnama.",
    },
    footer: {
      tagline: "Daawwadhaa • Wal-qunnamaa • Kaka'aa",
      description: "Dhaabbata daawwanna Itoophiyaa isa adda duree. Aadaa Oomoo, Laallibalaa qulqulluu, fi lafa Daanaakil fi gaarreen Simieeniin kan kaka'e.",
      address: "Daandii Boolee, Gamoo Madhaaniyaalem Dhiyoo, Finfinnee, Itoophiyaa",
      popularPackages: "Paakeejjiiwwan Jaallataman",
      destinationsTitle: "Bakkeewwan Daawwanna",
      exploreTitle: "Nu-Enezur Daawwadhaa",
      viewAllPackages: "Paakeejjiiwwan Hunda Ilaalaa →",
      aboutStory: "Waa'ee Seenaa Keenyaa",
      curatedPackages: "Paakeejjiiwwan Filataman",
      guestReviews: "Yaada Daawwattootaa",
      contactSupport: "Nu Qunnamaa fi Gargaarsa",
      tailorMade: "Imala Dhuunfaa Qopheessaa",
      copyright: "Mirgi hundi seeraan kan eegame dha. Itoophiyaa jaalalaan daawwadhaa.",
    },
  },
};
