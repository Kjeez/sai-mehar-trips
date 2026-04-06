export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  priceNote?: string;
  image: string;
  included: string[];
  itinerary?: { day: string; description: string }[];
  note?: string;
}

export interface DomesticPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
}

export interface PilgrimagePackage {
  id: string;
  title: string;
  destination?: string;
  duration: string;
  price: string;
  priceNote?: string;
  image: string;
  included: string[];
  itinerary?: { day: string; description: string }[];
  note?: string;
}

export interface VisaCountry {
  name: string;
  image: string;
}

export interface DestinationInfo {
  slug: string;
  name: string;
  heroImage: string;
  tagline: string;
  description: string;
}

// ─────────────────────────────────────────────
// DESTINATIONS METADATA
// ─────────────────────────────────────────────
export const destinationsData: DestinationInfo[] = [
  {
    slug: 'bali',
    name: 'Bali',
    heroImage: '/images/dest_bali_1774589152092.png',
    tagline: 'Island of the Gods',
    description: 'Bali is a tropical paradise known for its stunning beaches, ancient temples, terraced rice paddies, and vibrant culture. From the mystical Uluwatu Temple perched on dramatic cliffs to the lush rice terraces of Ubud, Bali offers a perfect blend of adventure, relaxation, and spiritual discovery. Experience world-class surfing, rejuvenating spa treatments, and unforgettable sunsets over the Indian Ocean.',
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    heroImage: '/images/dest_singapore_1774589168899.png',
    tagline: 'The Lion City',
    description: 'Singapore is a dazzling city-state that seamlessly blends futuristic architecture with rich cultural heritage. Explore the iconic Marina Bay Sands, wander through the enchanting Gardens by the Bay, and thrill at Universal Studios. From hawker centres serving legendary street food to luxury shopping on Orchard Road, Singapore delivers an unforgettable urban escape.',
  },
  {
    slug: 'japan',
    name: 'Japan',
    heroImage: '/images/dest_japan_1774589186858.png',
    tagline: 'Land of the Rising Sun',
    description: 'Japan is a mesmerizing blend of ancient tradition and cutting-edge modernity. Walk through the serene bamboo groves of Kyoto, marvel at the neon-lit streets of Tokyo, and experience the tranquility of centuries-old temples. From cherry blossom seasons to snow-capped Mt. Fuji, Japan promises a journey that touches every sense.',
  },
  {
    slug: 'srilanka',
    name: 'Sri Lanka',
    heroImage: '/images/dest_srilanka_1774589206836.png',
    tagline: 'Pearl of the Indian Ocean',
    description: 'Sri Lanka is a treasure trove of golden beaches, misty hill stations, ancient ruins, and lush tea plantations. Explore the cultural triangle of Kandy, Sigiriya, and Anuradhapura, go on a wildlife safari in Yala National Park, or simply unwind on the pristine southern coast. This island nation offers incredible value and unforgettable experiences.',
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    heroImage: '/images/dest_thailand_1774589225140.png',
    tagline: 'Land of Smiles',
    description: 'Thailand captivates with its stunning islands, ornate temples, world-renowned cuisine, and legendary hospitality. From the bustling streets of Bangkok to the crystal-clear waters of Phuket and Krabi, Thailand offers the perfect mix of adventure, culture, and relaxation for every type of traveler.',
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    heroImage: '/images/dest_dubai_1774589249274.png',
    tagline: 'City of Gold',
    description: 'Dubai is a city of superlatives — home to the tallest building, the largest mall, and some of the most luxurious experiences on Earth. From desert safaris under starlit skies to skiing in an indoor snow park, Dubai blends Arabian heritage with futuristic ambition. Experience world-class dining, shopping, and attractions.',
  },
  {
    slug: 'usa',
    name: 'USA',
    heroImage: '/images/dest_usa_1774589265816.png',
    tagline: 'Land of Dreams',
    description: 'The United States offers extraordinary diversity — from the iconic skyline of New York City to the sun-kissed beaches of California, the Grand Canyon\'s majesty to the magic of Walt Disney World. Every state tells a different story with unique landscapes, cultures, and experiences waiting to be discovered.',
  },
  {
    slug: 'vietnam',
    name: 'Vietnam',
    heroImage: '/images/dest_vietnam_1774589284358.png',
    tagline: 'Hidden Gem of Southeast Asia',
    description: 'Vietnam enchants with its breathtaking landscapes, from the limestone karsts of Ha Long Bay to the emerald rice terraces of Sapa. Explore ancient towns like Hoi An, cruise through the Mekong Delta, and savor one of the world\'s most vibrant street food cultures. Vietnam offers incredible beauty and value.',
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    heroImage: '/images/pkg_maldives.png',
    tagline: 'Paradise on Earth',
    description: 'The Maldives is the ultimate tropical escape — crystal-clear turquoise waters, overwater villas, pristine white-sand beaches, and some of the world\'s best diving and snorkeling spots. Perfect for honeymoons, luxury getaways, and anyone seeking pure paradise.',
  },
  {
    slug: 'newzealand',
    name: 'New Zealand',
    heroImage: '/images/pkg_newzealand.png',
    tagline: 'Adventure Awaits',
    description: 'New Zealand is an adventurer\'s dream — from the dramatic fjords of Milford Sound to the geothermal wonders of Rotorua, the rolling green hills of Hobbiton to the adrenaline capital Queenstown. Experience a land of breathtaking natural beauty, Maori culture, and endless outdoor adventures.',
  },
];

// ─────────────────────────────────────────────
// INTERNATIONAL HOLIDAYS
// ─────────────────────────────────────────────
export const internationalPackages: Package[] = [
  {
    id: 'phuket-krabi',
    destination: 'thailand',
    title: 'LOADED PHUKET + KRABI',
    duration: '5N/6D',
    price: '₹64,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/pkg_phuket.png',
    included: ['Welcome meet on arrival', 'Daily breakfast', 'Accommodation', 'Airfare'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival Phuket Airport and transfer to Krabi, check in and day free to explore Ao Nang Beach or Krabi Night Market' },
      { day: 'Day 2', description: 'Krabi 4 Island Tour with Lunch by Speed Boat' },
      { day: 'Day 3', description: 'Check out from Krabi, transfer to Phuket Hotel, free to explore Patong Beach and Bangla Road' },
      { day: 'Day 4', description: 'Phi Phi Island Tour with Lunch by Speed Boat' },
      { day: 'Day 5', description: 'Phuket City Tour and Tiger Kingdom' },
      { day: 'Day 6', description: 'Drop to Airport' },
    ],
    note: 'This is merely an offer, no reservation has been made as yet. You can customize the itinerary in even more detail.',
  },
  {
    id: 'bangkok-pattaya',
    destination: 'thailand',
    title: 'FUN WITH BANGKOK + PATTAYA',
    duration: '4N/5D',
    price: '₹39,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/pkg_bangkok.png',
    included: ['Welcome meet on arrival', 'Daily breakfast', 'Accommodation'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival Bangkok airport, transfer to Pattaya hotel, evening free for Walking Street and nightlife' },
      { day: 'Day 2', description: 'Coral Island Tour with Lunch' },
      { day: 'Day 3', description: 'Check out Pattaya, transfer to Bangkok via City Tour, overnight Bangkok' },
      { day: 'Day 4', description: 'Safari World with Marine Park and Lunch' },
      { day: 'Day 5', description: 'Drop to Airport' },
    ],
    note: 'This is merely an offer, no reservation has been made as yet.',
  },
  {
    id: 'maldives',
    destination: 'maldives',
    title: 'AMAZING MALDIVES',
    duration: '4N/5D',
    price: '₹75,000/-',
    priceNote: 'Per Person Ex Male',
    image: '/images/pkg_maldives.png',
    included: [
      'Welcome meet on arrival',
      'Daily Breakfast, Lunch and Dinner',
      '4N Stay in 5* Beach Villa',
      'Accommodation',
      'Airport Transfer by Speed Boat',
      'Green Taxes',
    ],
    note: 'This is merely an offer, no reservation has been made as yet.',
  },
  {
    id: 'bali',
    destination: 'bali',
    title: 'EXOTIC BALI',
    duration: '6N/7D',
    price: '₹29,990/-',
    priceNote: 'Per Person Ex Bali',
    image: '/images/dest_bali_1774589152092.png',
    included: ['Welcome meet on arrival', 'Daily breakfast', 'Accommodation'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival Bali Airport, transfer to Hotel, Candle Light Dinner on Jimbaran Beach' },
      { day: 'Day 2', description: 'Kintamani – Puri – Ubud Celuk Mas Monkey Forest Waterfall Tour' },
      { day: 'Day 3', description: 'Bali Swing' },
      { day: 'Day 4', description: 'Uluwatu Temple Tour' },
      { day: 'Day 5', description: 'Tanjung Benoa Beach Jet Ski – Parasailing – 60 Min Spa' },
      { day: 'Day 6', description: 'Day free to enjoy Beach and Shopping' },
      { day: 'Day 7', description: 'Drop to Airport' },
    ],
    note: 'Contact us for more custom itineraries.',
  },
  {
    id: 'srilanka',
    destination: 'srilanka',
    title: 'MEMORABLE SRI LANKA',
    duration: '6N/7D',
    price: '₹32,499/-',
    priceNote: 'Per Person Ex Colombo',
    image: '/images/dest_srilanka_1774589206836.png',
    included: ['Welcome meet on arrival', 'Daily breakfast & dinner', 'Accommodation', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1', description: 'Airport to Kandy – Pinnawala Elephant Orphanage, Spice Garden' },
      { day: 'Day 2', description: 'Kandy City Tour – Temple of the Tooth, Royal Botanic Gardens, Cultural Dance Show' },
      { day: 'Day 3', description: 'Kandy to Bentota – Leisure at Beach' },
      { day: 'Day 4', description: 'Bentota City Tour – Madu River Boat Ride & Turtle Hatchery' },
      { day: 'Day 5', description: 'Bentota to Colombo – City Tour & Shopping' },
      { day: 'Day 6', description: 'Colombo to Airport – Fly Back Home' },
    ],
    note: 'You tell us and we will prepare your favorite itinerary for you.',
  },
  {
    id: 'singapore',
    destination: 'singapore',
    title: 'SHORT BREAK SINGAPORE',
    duration: '4N/5D',
    price: '₹82,500/-',
    priceNote: 'Ex Delhi',
    image: '/images/dest_singapore_1774589168899.png',
    included: ['Welcome meet on arrival', 'Daily breakfast in hotel', 'Visa', 'Airfare on Direct Flight', '4N Stay'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival Singapore, transfer to hotel, enjoy Night Safari' },
      { day: 'Day 2', description: 'Universal Studio' },
      { day: 'Day 3', description: 'Singapore City Tour + Sentosa Island 5 in 1 Combo' },
      { day: 'Day 4', description: 'Day free or Garden by the Bay (extra cost)' },
      { day: 'Day 5', description: 'Drop to Airport' },
    ],
    note: 'This is merely an offer, no reservation has been made as yet.',
  },
  {
    id: 'singapore-cruise',
    destination: 'singapore',
    title: 'HONEYMOON SINGAPORE + CRUISE',
    duration: '6N/7D',
    price: '₹1,25,000/-',
    priceNote: 'Per Person with Flight',
    image: '/images/hero_singapore_1774589129848.png',
    included: ['Welcome meet on arrival', 'Daily breakfast in hotel', 'Visa', 'Airfare Direct Flight'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival Singapore, transfer to hotel, Evening Night Safari' },
      { day: 'Day 2', description: 'Universal Studio' },
      { day: 'Day 3', description: 'Singapore City Tour, Drop to Cruise Terminal, Overnight Cruise' },
      { day: 'Day 4', description: 'Cruise Day' },
      { day: 'Day 5', description: 'Check out Cruise, transfer to hotel, Free for Shopping' },
      { day: 'Day 6', description: 'Afternoon Sentosa Island 5 in 1 Combo' },
      { day: 'Day 7', description: 'Drop to Singapore Airport' },
    ],
    note: 'TCS 2% extra (refundable). Gratuities: 25 USD per person per night payable on cruise directly.',
  },
  {
    id: 'newzealand',
    destination: 'newzealand',
    title: 'DISCOVER NEW ZEALAND',
    duration: 'Northern Splendour – Self Driven',
    price: '₹1,10,000/-',
    priceNote: 'Per Person',
    image: '/images/pkg_newzealand.png',
    included: ['Auckland', 'Waitomo', 'Hobbiton', 'Rotorua', 'Napier', 'Wellington'],
    note: 'Contact us for your preferred itinerary and share your details for many more trips.',
  },
];

// ─────────────────────────────────────────────
// DOMESTIC PACKAGES
// ─────────────────────────────────────────────
export const domesticPackages: DomesticPackage[] = [
  { id: 'kashmir', title: 'KASHISH E KASHMIR', duration: '4N/5D', image: '/images/pkg_kashmir.png' },
  { id: 'sikkim', title: 'BEAT THE HEAT SIKKIM DARJEELING', duration: '5N/6D', image: '/images/pkg_sikkim.png' },
  { id: 'kerala', title: "GOD'S OWN KERALA", duration: '4N/5D', image: '/images/pkg_kerala.png' },
  { id: 'goa', title: 'GO GOA', duration: '3N/4D', image: '/images/pkg_goa.png' },
  { id: 'ooty', title: 'SOUTH DELIGHT OOTY + KODAIKANAL', duration: '4N/5D', image: '/images/pkg_ooty.png' },
  { id: 'ladakh', title: 'LADAKH', duration: '5N/6D', image: '/images/pkg_ladakh.png' },
  { id: 'andaman', title: 'ANDAMAN', duration: '5N/6D', image: '/images/pkg_andaman.png' },
  { id: 'udaipur', title: 'UDAIPUR + MOUNT ABU', duration: '4N/5D', image: '/images/pkg_udaipur.png' },
  { id: 'jaisalmer', title: 'JODHPUR + JAISALMER', duration: '4N/5D', image: '/images/pkg_jaisalmer.png' },
  { id: 'manali', title: 'MANALI', duration: '3N/4D', image: '/images/pkg_manali.png' },
];

// ─────────────────────────────────────────────
// PILGRIMAGE TOURS
// ─────────────────────────────────────────────
export const pilgrimagePackages: PilgrimagePackage[] = [
  {
    id: 'baidyanath',
    title: 'BABA BAIDYANATH DARSHAN',
    duration: '1N/2D',
    price: '₹17,999/-',
    priceNote: 'Per Person Ex Delhi',
    image: '/images/pkg_temple.png',
    included: ['Airfare on Direct Flight', '1N Stay', 'Breakfast'],
    itinerary: [
      { day: 'Day 1', description: 'Arrival at Deoghar airport and transfer to hotel. Located near Baba Baidyanath Jyotirlinga — proceed for Darshan. Overnight stay at Hotel.' },
      { day: 'Day 2', description: 'After breakfast, visit Basukinath Temple and Trikut Parvat. Later, drop to airport and fly back home.' },
    ],
    note: 'We wish you all the best on your journey.',
  },
  {
    id: 'somnath-dwarkadhish',
    title: 'SOMNATH + DWARKADHISH',
    duration: '3N/4D',
    price: '₹31,999/-',
    priceNote: 'Per Person Ex Delhi',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary', 'All Transfers'],
    itinerary: [
      { day: 'Day 1 — Rajkot – Jamnagar – Dwarka', description: 'Arrive at Rajkot, meet and greet. Drive to Jamnagar to visit Bala Hanuman Temple — world famous for the continuous chanting of "Jai Ram, Shri Ram" since 1964, recorded in the Guinness Book of World Records. Continue drive to Dwarka, transfer to hotel. Attend evening Aarti Darshan at Dwarkadhish Temple. Overnight stay at Dwarka.' },
      { day: 'Day 2 — Dwarka', description: 'Attend Morning Aarti Darshan at Dwarkadhish Temple. Later visit Bet Dwarka (where Lord Krishna lived with his family), Nageshwar Jyotirlinga (one of the 12 sacred Jyotirlingas) & Rukmani Temple (Temple of Lord Krishna\'s wife). Attend evening Aarti Darshan at Dwarkadhish Temple. Overnight stay at Dwarka.' },
      { day: 'Day 3 — Dwarka – Porbandar – Somnath', description: 'Morning after breakfast, proceed to Porbandar. Visit Kirti Temple, Sudama Temple & birthplace of Mahatma Gandhi. Also visit Gandhi Museum and study room. Later drive to Somnath and visit Somnath Temple — a Lord Shiva temple known as Jyotirlinga built by Moon God. Visit Bhalka Tirtha & Triveni Ghat. Attend evening Aarti and enjoy the Light & Sound Show. Overnight stay at Somnath.' },
      { day: 'Day 4 — Somnath – Rajkot Departure', description: 'Morning after breakfast, drive to Rajkot airport and fly back home.' },
    ],
    note: 'We wish you all the best on your journey.',
  },
  {
    id: 'ayodhya-kashi',
    title: 'AYODHYA + PRAYAGRAJ + KASHI VISHWANATH',
    duration: '3N/4D',
    price: '₹27,999/-',
    priceNote: 'Per Person Ex Delhi',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary', 'All Transfers'],
    itinerary: [
      { day: 'Day 1 — Arrival in Varanasi (Kashi)', description: 'Arrive at Varanasi (VNS) airport or railway station. Check in to hotel and proceed for Darshan of Kashi Vishwanath Jyotirlinga. Later visit Manikarnika Ghat for the mesmerizing evening Ganga Aarti. Overnight stay at Hotel.' },
      { day: 'Day 2 — Drive to Prayagraj', description: 'After breakfast, check out and transfer to Prayagraj. Check in to hotel. Visit the holy Triveni Sangam (confluence of Ganga, Yamuna, and mythical Saraswati rivers), Bade Hanuman Temple, Anand Bhawan (Nehru family residence turned museum), and Khusro Bagh. Overnight stay at Prayagraj.' },
      { day: 'Day 3 — Transfer to Ayodhya', description: 'After breakfast, check out and transfer to Ayodhya. Arrival and check in to hotel. Visit the grand Ram Mandir and attend the serene evening Saryu Aarti at Naya Ghat or Ram Ki Paidi. Overnight stay at Ayodhya.' },
      { day: 'Day 4 — Departure', description: 'After breakfast, check out and drop to airport. Fly back home.' },
    ],
    note: 'We wish you all the best on your journey.',
  },
  {
    id: 'rameshwaram',
    title: 'MADURAI + RAMESHWARAM + KANYAKUMARI',
    duration: '3N/4D',
    price: 'On Request',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'shirdi',
    title: 'SHIRDI + SHIGNAPUR + 3 JYOTIRLINGA DARSHAN',
    duration: '3N/4D',
    price: 'On Request',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'mallikarjuna',
    title: 'MALLIKARJUNA JYOTIRLINGA',
    duration: '2N/3D',
    price: 'On Request',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'mahakaleshwar',
    title: 'MAHAKALESHWAR + OMKARESHWAR',
    duration: '2N/3D',
    price: 'On Request',
    image: '/images/pkg_temple.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
];

// ─────────────────────────────────────────────
// VISA COUNTRIES
// ─────────────────────────────────────────────
export const visaCategories = ['Business', 'Tourist', 'Transit', 'Visitor'];

export const visaCountries: string[] = [
  'Dubai', 'Singapore', 'Vietnam', 'Australia', 'New Zealand', 'Canada', 'USA',
  'Indonesia', 'UK', 'Europe (Schengen)', 'South Korea', 'Russia', 'South Africa',
  'Azerbaijan', 'Oman', 'Saudi Arabia', 'Georgia', 'Turkey', 'Egypt', 'Japan',
  'Bangladesh', 'China', 'Hong Kong', 'Ireland', 'Jordan', 'Qatar', 'Taiwan',
];

// ─────────────────────────────────────────────
// PASSPORT SERVICES
// ─────────────────────────────────────────────
export const passportServices = {
  types: ['New', 'Renew'],
  pricing: [
    { type: 'Normal', price: '₹2,000/- PP' },
    { type: 'Tatkal', price: '₹4,000/- PP' },
  ],
  note: 'Contact us for required documents and details.',
};

// ─────────────────────────────────────────────
// AIRFARE SERVICES
// ─────────────────────────────────────────────
export const airfareServices = {
  types: ['International', 'Domestic'],
  features: ['Special Fare', 'Coupon Fare', 'Fixed Departure', 'Best Fare from Online Side'],
};

// ─────────────────────────────────────────────
// MENU CATEGORIES
// ─────────────────────────────────────────────
export const menuCategories = [
  { title: 'Sai Mehar Specials', image: '/images/dest_bali_1774589152092.png' },
  { title: 'International Trips', image: '/images/hero_dubai_1774589057519.png' },
  { title: 'Domestic Trips', image: '/images/pkg_kashmir.png' },
  { title: 'Custom Trips', image: '/images/pkg_manali.png' },
  { title: 'Pilgrimage Tours', image: '/images/pkg_temple.png' },
];

// Tagline
export const tagline = "As many itineraries and options as you like and as many destinations as you like";

// ─────────────────────────────────────────────
// CRUISE PACKAGES
// ─────────────────────────────────────────────
export interface CruisePackage {
  id: string;
  title: string;
  duration: string;
  price?: string;
  priceNote?: string;
  image: string;
}

export const cruisePackages: CruisePackage[] = [
  { id: 'royal-caribbean', title: 'Royal Caribbean International Cruises', duration: 'Varies', image: '/images/hero_singapore_1774589129848.png' },
  { id: 'cordelia', title: 'Cordelia Cruises', duration: 'Varies', image: '/images/hero_dubai_1774589057519.png' },
  { id: 'world-dream', title: 'World Dream Cruise', duration: 'Varies', image: '/images/dest_singapore_1774589168899.png' },
  { id: 'star-cruises', title: 'Star Cruises', duration: 'Varies', image: '/images/dest_vietnam_1774589284358.png' },
  { id: 'msc-cruises', title: 'MSC Cruises', duration: 'Varies', image: '/images/dest_usa_1774589265816.png' },
];
