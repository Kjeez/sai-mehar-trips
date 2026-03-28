export interface Package {
  id: string;
  title: string;
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
  duration: string;
  image: string;
}

export interface VisaCountry {
  name: string;
  image: string;
}

// ─────────────────────────────────────────────
// INTERNATIONAL HOLIDAYS
// ─────────────────────────────────────────────
export const internationalPackages: Package[] = [
  {
    id: 'phuket-krabi',
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
  { id: 'baidyanath', title: 'BABA BAIDYANATH DARSHAN', duration: '1N/2D', image: '/images/pkg_temple.png' },
  { id: 'somnath', title: 'SOMNATH + DWARKADHISH', duration: '3N/4D', image: '/images/pkg_temple.png' },
  { id: 'ayodhya', title: 'AYODHYA + PRAYAGRAJ + KASHI VISHWANATH', duration: '3N/4D', image: '/images/pkg_temple.png' },
  { id: 'rameshwaram', title: 'MADURAI + RAMESHWARAM + KANYAKUMARI', duration: '3N/4D', image: '/images/pkg_temple.png' },
  { id: 'shirdi', title: 'SHIRDI + SHIGNAPUR + 3 JYOTIRLINGA DARSHAN', duration: '3N/4D', image: '/images/pkg_temple.png' },
  { id: 'mallikarjuna', title: 'MALLIKARJUNA JYOTIRLINGA', duration: '2N/3D', image: '/images/pkg_temple.png' },
  { id: 'mahakaleshwar', title: 'MAHAKALESHWAR + OMKARESHWAR', duration: '2N/3D', image: '/images/pkg_temple.png' },
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
