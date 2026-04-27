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
  price?: string;
  priceNote?: string;
  image: string;
  included?: string[];
  itinerary?: { day: string; description: string }[];
  note?: string;
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
    heroImage: '/images/places/bali.jpg',
    tagline: 'Island of the Gods',
    description: 'Bali is a tropical paradise known for its stunning beaches, ancient temples, terraced rice paddies, and vibrant culture. From the mystical Uluwatu Temple perched on dramatic cliffs to the lush rice terraces of Ubud, Bali offers a perfect blend of adventure, relaxation, and spiritual discovery. Experience world-class surfing, rejuvenating spa treatments, and unforgettable sunsets over the Indian Ocean.',
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    heroImage: '/images/places/singapore.jpg',
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
    heroImage: '/images/places/thailand.jpg',
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
    heroImage: '/images/places/maldives.jpg',
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
    image: '/images/places/bangkok.jpg',
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
    image: '/images/places/maldives.jpg',
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
    image: '/images/places/bali.jpg',
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
    image: '/images/places/singapore.jpg',
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
    image: '/images/places/singapore.jpg',
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
  {
    id: 'kashmir',
    title: 'KASHISH E KASHMIR',
    duration: '4N/5D',
    price: '₹24,999/-',
    priceNote: 'Per Person',
    image: '/images/places/kashmir.jpg',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: SRINAGAR ARRIVAL - LOCAL SIGHTSEEING', description: 'On arrival at Srinagar Airport, you will meet to our representative and transfer you to houseboat. leave for Mughal Gardens visiting Nishat Bagh (Abode of pleasure) built by Asif Khan brother-in-law of Jehangir in 1632 A.D. and Shalimar Bagh (Abode of love) built by Jehangir for his wife Empress Noor Jehan & Shankaracharya Temple. Overnight at Hotel.' },
      { day: 'Day 2: SRINAGAR - SONMARG - SRINAGAR', description: 'After breakfast leave from Srinagar and drive to Sonmarg, full day excursion to Sonmarg. Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Sonmarg is also the base for some interesting treks to the high altitude of Himalayan Lake. The everlasting Thajiwas glacier, 3 Km from Sonmarg, provides a chance to enjoy sledge ride on Snow even in mid – summer, Sonmarg is known as "Gateway of Ladakh", in the evening return to Srinagar and join Hotel for overnight stay.' },
      { day: 'Day 3: SRINAGAR – GULMARG- SRINAGAR', description: 'After breakfast drive to Gulmarg, (Meadow of Flowers) 2730 Mts, Gulmarg has one of the best Ski slopes in the world and highest golf course of the world with 18 holes, you can enjoy a pony ride and also enjoy a Gondola ride (cable car own) to Khilanmarg. Evening back to srinagar, overnight stay at Srinagar' },
      { day: 'Day 4: SRINAGAR – PAHALGAM - SRINAGAR', description: 'After breakfast drive to Pahalgam (Valley of Shepherds). On the way visit saffron fields Pahalgam is the most famous place for Film industry.You can do at your own ABC tour by union vehicle . evening back to Srinagar .  Overnight stay at Hotel.' },
      { day: 'Day 5: SRINAGAR – SRINAGAR AIRPORT', description: 'After breakfast transfer to Airport to connect to onwards destination. Thus the package ends upon on the 5th day, with sweet memories of the tour with "SAI MEHAR TRIPS PVT LTD".' }
    ],
    note: '"Gar firdaus bar roo-e-zameen ast, hameen ast-o hameen ast-o hameen ast"'
  },
  {
    id: 'sikkim',
    title: 'BEAT THE HEAT SIKKIM DARJEELING',
    duration: '5N/6D',
    price: '₹34,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/sikkim.png',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Ixb/Njp - Gangtok', description: 'After arrival meet & greet at ixb & transfer to Gangtok. On arrival check-in to the hotel. Evening free at leisure / you can visit m.g marg / shopping on your own. Overnight stay at Gangtok.' },
      { day: 'Day 2: Tsomgo Lake & Baba Mandir Excursion', description: 'After breakfast, start for an excursion to Tsomgo Lake (12,400 ft.) & Baba Mandir (13,200 ft.) which is 55 kms one way from Gangtok city. Evening back to the hotel & after dinner overnight stay in Gangtok hotel.' },
      { day: 'Day 3: Gangtok full day Sightseeing', description: 'After breakfast gangtok sightseeing: Tashi view point, Bakthang waterfall, Gna Jong monastery, Ganesh Tok, Hanuman Tok, flower show and Ridge Park, gangtok Ropeway, Chorten stupa, Tibetology (museum), Enchey monastery, Banjhakri waterfall, Directorate of Handicraft and Handloom. Overnight stay at Gangtok.' },
      { day: 'Day 4: Gangtok- Darjeeling', description: 'After breakfast Transfer to Darjeeling, on arrive check in hotel & overnight stay in room.' },
      { day: 'Day 5: Darjeeling Sightseeing', description: 'Early Morning (at 04.00 am) visit Tiger hill to watch the spectacular sunrise over Mt. Khangchendzongha, on your way back visit Ghoom Monastery, Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P. N. Zoological Park (Thursday closed), Tenzing Rock, Tea Garden (outer view), Peace Pagoda and Japanese Temple (4 hrs from 9.00 to 13.00 hrs). Evening free, overnight stay in hotel.' },
      { day: 'Day 6: Darjeeling - Ixb/Njp', description: 'After breakfast drop Ixb.' }
    ],
    note: 'Note: Nathula Pass is subject to availability on the spot because of weather conditions. Extra appx Rs 4500/- per car will be charged to be paid to driver. Please carry voter card, passport or driving licence proof along with 3 passport photographs.'
  },
  {
    id: 'kerala',
    title: "GOD'S OWN KERALA",
    duration: '4N/5D',
    price: '₹29,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/kerala.png',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Cochin - Munnar', description: 'Arrival at Cochin and transfer to Munnar. On the way visit Vaplara, Cheeyappara waterfalls and Tea Plantations. Afternoon visit Rajamala (Eravikulam National Park) and Tea Museum. Evening short visit at Munnar town. Overnight stay at Munnar.' },
      { day: 'Day 2: Munnar', description: 'After breakfast proceed for sightseeing of Munnar. Mattupetty dam, Echo Point, Kundala Dam, Pothenmedu View Point, Blossom Park etc are some of the highlights. Shopping & overnight stay at Munnar.' },
      { day: 'Day 3: Munnar – Thekkady', description: 'After breakfast checkout and transfer to Thekkady. Enjoy a beautiful journey through the hills and valleys of Western Ghats. Have an amazing boat ride in Periyar Lake to watch wild animals like Elephant, Bison, Sambar, Deer etc. Overnight stay at the hotel.' },
      { day: 'Day 4: Thekkady - Alleppey', description: 'After Breakfast check out from Thekkady and transferred to Alleppey, offering Lakeside and Backwater experience. Alleppey gives Kerala the name "Venice of the East". Check in at hotel, overnight stay at hotel.' },
      { day: 'Day 5: Thekkady – Cochin (Tour Ends)', description: 'Morning have breakfast, check out Hotel and drive to Airport / Railway Station for departure.' }
    ]
  },
  {
    id: 'goa',
    title: 'GO GOA',
    duration: '3N/4D',
    price: '₹22,499/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/goa.jpg',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1', description: 'AIRPORT TRANSFER GOI AIRPORT TO NORTH GOA HOTEL.' },
      { day: 'Day 2', description: 'South Goa Tour. Begin your day with a healthy breakfast. Today you will be taking a day tour to south Goa. To cover in south Goa is Se Cathedral church, Basilica of Bom Jesus, Balaji temple, Mangesh temple, Panjim church, Dona Paula bay, and Miramar beach. By evening escort back to hotel.' },
      { day: 'Day 3', description: 'North Goa Tour. Places to cover will be Fort Aguada, dolphin trip, Calangute Beach, Baga Beach, Anjuna Beach, and Vagator Beach. By evening escort back to Hotel.' },
      { day: 'Day 4', description: 'DROP TO GOI AIRPORT.' }
    ]
  },
  {
    id: 'ooty',
    title: 'SOUTH DELIGHT OOTY + KODAIKANAL',
    duration: '4N/5D',
    price: '₹38,000/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/kodaikanal.jpg',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Arrival & Ooty Highlights', description: 'Pick up from Coimbatore and drive to Ooty. Visit Doddabetta Peak, Tea Factory & Museum, and enjoy a boat ride at Ooty Lake in the evening.' },
      { day: 'Day 2: Pykara Excursion & Botanical Gardens', description: 'Pykara Sightseeing including 6th/9th Mile Shooting Spots and Pine Forest. Visit Government Botanical Garden and Rose Garden.' },
      { day: 'Day 3: Ooty to Kodaikanal (via Coonoor)', description: 'En route visit Sim’s Park, Dolphin’s Nose, and Lamb’s Rock. Scenic drive to Kodaikanal. Leisure evening walk at Coaker’s Walk.' },
      { day: 'Day 4: Kodaikanal Nature Tour', description: 'Visit Pillar Rocks, Guna Caves & Pine Forest, Silver Cascade Falls. Conclude with boating or cycling around Kodai Lake.' },
      { day: 'Day 5: Final Sightseeing & Departure', description: 'Visit Bryant Park or Kurinji Andavar Temple. Departure to Coimbatore or Madurai.' }
    ]
  },
  {
    id: 'ladakh',
    title: 'EXOTIC LADAKH',
    duration: '5N/6D',
    price: '₹44,599/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/ladakh.jpg',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Airport – Leh', description: 'Arrival on Leh Airport, meet & greet and transfer to Hotel. Relax for the rest of the day to acclimatize. Overnight stay in Leh.' },
      { day: 'Day 2: Leh Local sightseeing', description: 'Visit Magnetic Hill, Gurudwara Patthar Sahib, Confluence of Zanskar and Indus rivers. Visit Ladakh Hall of Fame. Arrive hotel for dinner and overnight.' },
      { day: 'Day 3: Leh to Nubra via Khardung-La', description: 'Drive to Nubra valley via Khardung-La pass. Drive to Disket, visit Disket Monastery. Further drive to Hunder to see Double Humped Bactrian Camels. Overnight stay in Nubra.' },
      { day: 'Day 4: Nubra to Pangong via Shyok', description: 'Pangong Lake is a beautiful lake. Enjoy the narrow ramp-like formation and changing colors. Overnight stay at Pangong.' },
      { day: 'Day 5: Pangong to Leh', description: 'Morning walk at Pangong Lake. Drive back to Leh. Overnight stay in Leh.' },
      { day: 'Day 6: Leh to Airport (Departure)', description: 'Transfer to Airport. Departure.' }
    ]
  },
  {
    id: 'andaman',
    title: 'ADVENTUROUS ANDAMAN',
    duration: '4N/5D',
    price: '₹39,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/andaman.jpg',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Port Blair Arrival', description: 'Arrival at Port Blair. Marina Park, Flag Point, Cellular Jail Visit, Sound & Light Show. Includes Airport Transfer, Entry tickets.' },
      { day: 'Day 2: Port Blair to Havelock', description: 'Harbour Transfers, early morning ferry to Havelock (Swaraj Dweep). Excursion to Radhanagar beach.' },
      { day: 'Day 3: Havelock / Elephant beach', description: 'Two-way Harbour Transfers. Speed boat to Elephant beach with 1 complimentary snorkeling session.' },
      { day: 'Day 4: Havelock to Port Blair', description: 'Return ferry to Port Blair. Corbyn’s Cove Beach and Shopping. Includes Harbour transfers.' },
      { day: 'Day 5: Departure', description: 'Check out and Airport transfer by AC exclusive cab.' }
    ]
  },
  {
    id: 'udaipur',
    title: 'UDAIPUR + MOUNT ABU',
    duration: '4N/5D',
    price: '₹29,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/udaipur.png',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Arrival & Lake Charm', description: 'Arrive at Udaipur, check-in. Visit City Palace and Jagdish Temple. Evening sunset boat ride on Lake Pichola and cultural show at Bagore Ki Haveli.' },
      { day: 'Day 2: Royal Gardens & Lakes', description: 'Explore Saheliyon-ki-Bari, Maharana Pratap Memorial. Visit Fateh Sagar Lake. Head to Sajjangarh Palace (Monsoon Palace) for sunset.' },
      { day: 'Day 3: Transfer & Sunset Views', description: 'Travel from Udaipur to Mount Abu (3-4 hrs). Visit Brahmakumaris Peace Park, Nakki Lake, Toad Rock, and Sunset Point.' },
      { day: 'Day 4: Peaks & Temples', description: 'Drive to Guru Shikhar, Dilwara Jain Temples, Achalgarh Fort, and Adhar Devi Temple. Evening shopping at local bazaars.' },
      { day: 'Day 5: Departure', description: 'After breakfast, check out and drive back to Udaipur for your onward flight or train.' }
    ]
  },
  {
    id: 'jaisalmer',
    title: 'HISTORICAL JODHPUR + JAISALMER',
    duration: '4N/5D',
    price: '₹29,999/-',
    priceNote: 'Per Person with Flight',
    image: '/images/places/jaislmer.jpg',
    included: ['Accommodation', 'Flight', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1: Arrival & Markets', description: 'Arrive at Jodhpur. Check into heritage hotel and spend evening at Clock Tower and Sardar Market.' },
      { day: 'Day 2: Forts & Palaces', description: 'Explore Mehrangarh Fort, Phool Mahal, Jaswant Thada. Visit Umaid Bhawan Palace Museum in the afternoon.' },
      { day: 'Day 3: Journey to the Desert', description: 'Drive to Jaisalmer (5-6 hrs). Visit Jaisalmer War Museum. Head to Sam Sand Dunes for overnight desert camp stay with sunset camel safari and cultural program.' },
      { day: 'Day 4: Living Fort & Havelis', description: 'Explore Jaisalmer Fort (Sonar Quila), Patwon-ki-Haveli, and Nathmal-ki-Haveli. Spend evening at Gadisar Lake for a peaceful boat ride.' },
      { day: 'Day 5: Departure', description: 'Morning sightseeing (if time permits: Bada Bagh or Kuldhara Village). Transfer to airport or station for departure.' }
    ]
  },
  {
    id: 'manali',
    title: 'COOL COOL MANALI',
    duration: '3N/4D',
    price: '₹9,999/-',
    priceNote: 'Per Person with Volvo',
    image: '/images/places/manali.jpg',
    included: ['Accommodation', 'Volvo Transfer', 'Sightseeing as per itinerary'],
    itinerary: [
      { day: 'Day 1', description: 'Delhi to Manali volvo' },
      { day: 'Day 2', description: 'Arrival manali, check in to hotel and later visit manali local sight seeing by pvt cab' },
      { day: 'Day 3', description: 'Enjoy snow point, solang valley, atal tunnel By pvt cab' },
      { day: 'Day 4', description: 'Manikaran sight seeing by pvt cab' },
      { day: 'Day 5', description: 'Volvo to delhi' }
    ]
  }
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
    image: '/images/places/pkg_baidyanath.png',
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
    image: '/images/places/pkg_somnath.png',
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
    image: '/images/places/pkg_ayodhya.png',
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
    image: '/images/places/pkg_rameshwaram.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'shirdi',
    title: 'SHIRDI + SHIGNAPUR + 3 JYOTIRLINGA DARSHAN',
    duration: '3N/4D',
    price: 'On Request',
    image: '/images/places/pkg_shirdi.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'mallikarjuna',
    title: 'MALLIKARJUNA JYOTIRLINGA',
    duration: '2N/3D',
    price: 'On Request',
    image: '/images/places/pkg_mallikarjuna.png',
    included: ['Accommodation', 'Daily Breakfast', 'Sightseeing as per itinerary'],
    note: 'Contact us for detailed itinerary and pricing.',
  },
  {
    id: 'mahakaleshwar',
    title: 'MAHAKALESHWAR + OMKARESHWAR',
    duration: '2N/3D',
    price: 'On Request',
    image: '/images/places/pkg_mahakaleshwar.png',
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
  { title: 'Sai Mehar Specials', image: '/images/places/bali.jpg' },
  { title: 'International Trips', image: '/images/places/singapore.jpg' },
  { title: 'Domestic Trips', image: '/images/places/kashmir.jpg' },
  { title: 'Custom Trips', image: '/images/places/manali.jpg' },
  { title: 'Pilgrimage Tours', image: '/images/places/greece.jpg' },
  { title: 'Cruises', image: '/images/places/maldives.jpg' },
];

export const getCategoryPackages = (slug: string): any[] => {
  switch (slug) {
    case 'international-trips':
      return internationalPackages;
    case 'domestic-trips':
      return domesticPackages;
    case 'pilgrimage-tours':
      return pilgrimagePackages;
    case 'cruises':
      return cruisePackages;
    case 'sai-mehar-specials':
    case 'custom-trips':
    default:
      return internationalPackages.slice(0, 4); // Generic fallback
  }
};

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
  { id: 'royal-caribbean', title: 'Royal Caribbean International Cruises', duration: 'Varies', image: '/images/logos/Royal_Caribbean_logo_PNG_(2).png' },
  { id: 'cordelia', title: 'Cordelia Cruises', duration: 'Varies', image: '/images/logos/Cordelia-Final-Logo-01-2048x2048.png' },
  { id: 'world-dream', title: 'World Dream Cruise', duration: 'Varies', image: '/images/logos/dreamcruise.jpeg' },
  { id: 'star-cruises', title: 'Star Cruises', duration: 'Varies', image: '/images/logos/cf6056d33abb9f31328b872ce4c2a48c.png' },
  { id: 'msc-cruises', title: 'MSC Cruises', duration: 'Varies', image: '/images/logos/MSC_logo_PNG4.png' },
  { id: 'disney-cruises', title: 'Disney Cruises', duration: 'Varies', image: '/images/logos/disney-cruise-line-seeklogo.png' },
];
