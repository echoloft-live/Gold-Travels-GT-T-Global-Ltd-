import type { ServiceInfo, TravelPackage, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: "Gold Travels and Tours (GT&T) Global Ltd",
  handle: "Goldtravels.ng",
  phones: ["07056103924", "09026160471"],
  address: "FCT, Abuja, Nigeria",
  whatsappNumber: "2347056103924",
  email: "concierge@goldtravels.ng",
  hours: "Mon - Sat: 8:00 AM - 6:00 PM (WAT)"
};

export const SERVICES: ServiceInfo[] = [
  {
    id: "flight-booking",
    code: "FLT",
    title: "Flight Booking",
    shortDesc: "Seamless domestic & international airline ticketing with competitive rates, priority seating, and flexible rescheduling.",
    fullDesc: "Whether flying business class to London Heathrow, economy to Dubai, or managing multi-city corporate itineraries across West Africa, our flight desk secures optimal routing, baggage allowances, and premier carrier partnerships.",
    iconName: "Plane",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Access to global GDS airline inventory",
      "Corporate & VIP group ticketing desks",
      "Real-time fare alerts & baggage consulting",
      "24/7 emergency rebooking & date changes"
    ],
    process: [
      { step: "01", title: "Submit Itinerary", desc: "Share your travel dates, preferred cabin class, and destination route." },
      { step: "02", title: "Review Curated Options", desc: "Our ticketing desk sends optimized flight schedules and fare comparisons within minutes." },
      { step: "03", title: "Confirm & Issue", desc: "Approve your itinerary and receive verified e-tickets directly via email & WhatsApp." }
    ]
  },
  {
    id: "visa-assistance",
    code: "VSA",
    title: "Visa Assistance",
    shortDesc: "Expert documentation review, embassy appointment booking, and interview coaching for high-success travel approval.",
    fullDesc: "Navigating complex visa requirements for the UK, US, Schengen zone, Canada, and the UAE requires precision. Our dedicated visa consultants manage document checklists, cover letter drafting, and appointment scheduling to maximize approval rates.",
    iconName: "FileCheck",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Comprehensive document audit & formatting",
      "Embassy priority appointment scheduling",
      "Tailored visa interview simulation & prep",
      "Photo & biometric guidance per consulate specs"
    ],
    process: [
      { step: "01", title: "Consultation & Assessment", desc: "We review your travel purpose and passport history to outline the ideal visa category." },
      { step: "02", title: "Document Compilation", desc: "Our team audits bank statements, employment letters, and invitation support papers." },
      { step: "03", title: "Submission & Tracking", desc: "We book your biometric appointment and track your application status until passport collection." }
    ]
  },
  {
    id: "study-abroad",
    code: "STY",
    title: "Study Abroad",
    shortDesc: "End-to-end university admissions, student visa counseling, and scholarship advisory across the UK, Canada, US & Europe.",
    fullDesc: "Transform your academic future with our trusted university placement desk. We partner with prestigious institutions globally to secure admissions, manage tuition deposits, and guide you seamlessly through student visa regulations.",
    iconName: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Direct university partnership placements",
      "Undergraduate & postgraduate program selection",
      "Student visa (Tier 4 / Study Permit) expertise",
      "Pre-departure orientation & accommodation support"
    ],
    process: [
      { step: "01", title: "Academic Profiling", desc: "We evaluate your transcripts, test scores, and career goals to select top-fit universities." },
      { step: "02", title: "Admission Processing", desc: "Our counselors prepare your personal statement and submit applications directly to institutions." },
      { step: "03", title: "Visa & Departure", desc: "Once admitted, we secure your student visa and arrange student housing and flights." }
    ]
  },
  {
    id: "hotel-reservation",
    code: "HTL",
    title: "Hotel Reservation",
    shortDesc: "Handpicked 4 & 5-star luxury hotels, boutique resorts, and executive apartments worldwide with VIP perks.",
    fullDesc: "Enjoy exclusive rates, complimentary breakfasts, room upgrades, and late check-outs at world-class properties. From beachfront villas in Zanzibar to executive suites in downtown London, we secure your ideal stay.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Global network of 500,000+ luxury properties",
      "VIP amenities (spa credits, breakfast, upgrades)",
      "Flexible cancellation & corporate billing",
      "Direct liaison with hotel general managers"
    ],
    process: [
      { step: "01", title: "Preference Matching", desc: "Tell us your destination, budget, and special amenity requests." },
      { step: "02", title: "Proposal Selection", desc: "Receive curated hotel options complete with virtual tours and exclusive perks." },
      { step: "03", title: "Confirmed Booking", desc: "Secure your reservation with instant confirmation vouchers." }
    ]
  },
  {
    id: "car-rental",
    code: "CAR",
    title: "Car Rental Services",
    shortDesc: "Chauffeur-driven luxury sedans, airport VIP transfers, and self-drive exotic vehicle rentals for ultimate mobility.",
    fullDesc: "Arrive in style with professional chauffeur services or enjoy complete freedom with premium self-drive rentals. Fully insured vehicles ranging from Mercedes-Benz S-Class to rugged Toyota Land Cruisers.",
    iconName: "Car",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Airport meet-and-greet with armed security option",
      "Professional, vetted multilingual chauffeurs",
      "Luxury fleet (Sedans, SUVs, Limousines)",
      "24/7 dispatch and roadside assistance"
    ],
    process: [
      { step: "01", title: "Specify Route & Vehicle", desc: "Select vehicle category and whether you require airport transfer or daily chauffeur." },
      { step: "02", title: "Dispatch Confirmation", desc: "Receive driver details, vehicle plate number, and arrival protocol." },
      { step: "03", title: "Seamless Transit", desc: "Enjoy punctual, comfortable, and secure ground transportation." }
    ]
  },
  {
    id: "vacation-packages",
    code: "PKG",
    title: "Vacation Packages",
    shortDesc: "Curated all-inclusive holiday itineraries combining flights, luxury stays, guided excursions, and airport transfers.",
    fullDesc: "Experience stress-free global getaways tailored to perfection. From romantic escapes in Santorini to family adventures in Dubai and wildlife safaris in Kenya, every detail is expertly managed.",
    iconName: "Palmtree",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "All-inclusive flights, hotels & transfers",
      "Private guided tours & excursion passes",
      "Customizable itineraries for solo, couple or family",
      "On-ground concierge support throughout your trip"
    ],
    process: [
      { step: "01", title: "Choose Your Destination", desc: "Browse our signature packages or request a bespoke itinerary." },
      { step: "02", title: "Customize & Quote", desc: "Select your preferred dates and optional add-on excursions." },
      { step: "03", title: "Travel & Enjoy", desc: "Receive your comprehensive digital travel portfolio and embark on your journey." }
    ]
  },
  {
    id: "honeymoon-celebrations",
    code: "HNY",
    title: "Destination Honeymoon & Celebrations",
    shortDesc: "Bespoke romantic getaways, destination weddings, and landmark birthday milestones in breathtaking paradises.",
    fullDesc: "Mark life's most precious milestones with unparalleled elegance. Overwater bungalows in the Maldives, private yacht charters in the Mediterranean, or candlelit dinners under African stars—we craft memories that last a lifetime.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Exclusive overwater villas & private islands",
      "Custom event planning for destination weddings",
      "VIP champagne welcome & spa packages",
      "Dedicated romance concierge on call"
    ],
    process: [
      { step: "01", title: "Vision Session", desc: "Discuss your dream celebration theme, guest count, and romantic preferences." },
      { step: "02", title: "Curated Concept", desc: "We present a bespoke proposal featuring private villas, dining, and celebratory touches." },
      { step: "03", title: "Magical Execution", desc: "Relax as our luxury team orchestrates every detail of your unforgettable celebration." }
    ]
  }
];

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: "dubai-luxury-escape",
    slug: "dubai-luxury-escape",
    title: "Dubai Royal Luxury Escape",
    destination: "Dubai",
    country: "UAE",
    routeCode: "ABV → DXB",
    duration: "5 Days / 4 Nights",
    priceNaira: "₦1,850,000",
    priceUSD: "$1,250",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    badge: "Popular This Month",
    highlights: ["5-Star Fairmont The Palm Stay", "Desert Safari with VIP BBQ", "Burj Khalifa At The Top Access", "Return Flights & Airport Transfers"],
    description: "Immerse yourself in glittering skylines, pristine beaches, and world-class shopping. Enjoy luxury accommodation with daily breakfast, VIP desert excursion, and seamless airport pick-ups.",
    includes: ["Return Economy Flight (Emirates/Ethiopian)", "4 Nights Luxury Accommodation", "Daily Breakfast & Dinner", "Visa Assistance Included", "Private Chauffeur Airport Transfers"]
  },
  {
    id: "london-executive-getaway",
    slug: "london-executive-getaway",
    title: "London West End & Culture Tour",
    destination: "London",
    country: "United Kingdom",
    routeCode: "ABV → LHR",
    duration: "7 Days / 6 Nights",
    priceNaira: "₦2,400,000",
    priceUSD: "$1,620",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    badge: "Best Seller",
    highlights: ["Kensington 4-Star Boutique Hotel", "Thames Luxury Dinner Cruise", "Bicester Village VIP Shopping Pass", "Standard Visa Support"],
    description: "Experience the timeless charm of London. From West End theatres and historic landmarks to premier shopping at Oxford Street and Bicester Village.",
    includes: ["Return Flight ABV - LHR", "6 Nights Central Hotel Stay", "Airport Fast-Track Assistance", "Guided City Tour", "Comprehensive Visa Documentation Support"]
  },
  {
    id: "maldives-honeymoon-bliss",
    slug: "maldives-honeymoon-bliss",
    title: "Maldives Overwater Bungalow Retreat",
    destination: "Maldives",
    country: "Indian Ocean",
    routeCode: "ABV → MLE",
    duration: "6 Days / 5 Nights",
    priceNaira: "₦3,500,000",
    priceUSD: "$2,350",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    badge: "Honeymoon Special",
    highlights: ["Overwater Villa with Private Pool", "All-Inclusive Dining & Drinks", "Couples Sunset Spa Session", "Speedboat Airport Transfer"],
    description: "The ultimate romantic escape. Wake up above turquoise lagoons, indulge in couples massages, and dine under starlit Indian Ocean skies.",
    includes: ["Return Flights to Malé", "5 Nights Overwater Villa", "All-Inclusive Gourmet Dining", "Complimentary Champagne on Arrival", "Seaplane/Speedboat Transfers"]
  },
  {
    id: "zanzibar-beach-safari",
    slug: "zanzibar-beach-safari",
    title: "Zanzibar Spice & Beach Paradise",
    destination: "Zanzibar",
    country: "Tanzania",
    routeCode: "ABV → ZNZ",
    duration: "5 Days / 4 Nights",
    priceNaira: "₦1,650,000",
    priceUSD: "$1,100",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    badge: "Trending",
    highlights: ["Beachfront Resort in Nungwi", "Stone Town Historic Walking Tour", "Safari Blue Snorkeling Excursion", "Seafood Dinner at The Rock"],
    description: "Discover white powdery sands, crystal clear turquoise waters, and rich Swahili culture in historic Zanzibar.",
    includes: ["Return Flights via Nairobi/Addis", "4 Nights Beachfront Resort Stay", "Daily Breakfast & Dinner", "Guided Stone Town Tour", "Airport Transfers"]
  },
  {
    id: "paris-romance-art",
    slug: "paris-romance-art",
    title: "Parisian Romance & Haute Couture",
    destination: "Paris",
    country: "France",
    routeCode: "ABV → CDG",
    duration: "5 Days / 4 Nights",
    priceNaira: "₦2,150,000",
    priceUSD: "$1,450",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    badge: "Romantic",
    highlights: ["Hotel near Champs-Élysées", "Eiffel Tower Summit Dinner", "Seine River Evening Cruise", "Schengen Visa Consulting"],
    description: "Walk hand in hand along the Seine, explore world-class art at the Louvre, and savor exquisite French gastronomy.",
    includes: ["Return Flights to Paris CDG", "4 Nights Luxury Hotel", "Eiffel Tower Priority Access", "Seine Cruise Tickets", "Visa Guidance & Cover Letter Support"]
  },
  {
    id: "capetown-adventure",
    slug: "capetown-adventure",
    title: "Cape Town Table Mountain & Winelands",
    destination: "Cape Town",
    country: "South Africa",
    routeCode: "ABV → CPT",
    duration: "6 Days / 5 Nights",
    priceNaira: "₦1,950,000",
    priceUSD: "$1,320",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    badge: "Top Rated",
    highlights: ["V&A Waterfront Hotel", "Table Mountain Cable Car Pass", "Stellenbosch Wine Tasting Tour", "Penguin Colony Boulders Beach"],
    description: "Breathtaking landscapes, world-renowned vineyards, and iconic coastal adventures await in South Africa's Mother City.",
    includes: ["Return Flights to Cape Town", "5 Nights Waterfront Hotel", "Daily Breakfast", "Full-Day Peninsula Tour", "Airport Transfers"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. & Mrs. Adebayo",
    role: "Medical Consultants",
    location: "Abuja, Nigeria",
    quote: "GT&T handled our destination honeymoon to the Maldives with absolute perfection. From the VIP airport reception in Abuja to our overwater bungalow, everything was seamless.",
    serviceUsed: "Destination Honeymoon",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    name: "Emeka Ojukwu",
    role: "Tech Executive",
    location: "Lagos, Nigeria",
    quote: "Getting my UK Tier 4 study visa and booking my flight seemed daunting until I engaged GT&T. Their visa desk is extraordinarily thorough. Got my visa approved without any hassle!",
    serviceUsed: "Study Abroad & Visa",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    name: "Hajiya Fatima Bello",
    role: "Entrepreneur",
    location: "Abuja, Nigeria",
    quote: "I use GT&T for all my corporate flights and Dubai family holidays. Their 24/7 responsiveness on WhatsApp is unmatched in Nigeria. Truly a world-class agency.",
    serviceUsed: "Flight Booking & Packages",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    q: "Are you an online travel agency (OTA) with instant payment, or a travel agency?",
    a: "Gold Travels and Tours (GT&T) Global Ltd is a full-service luxury travel agency based in Abuja, Nigeria. All inquiries and bookings are expertly managed by our concierge team and verified via WhatsApp, phone, or email to ensure personalized precision."
  },
  {
    q: "How do I make payments for my flight or vacation package?",
    a: "We support secure Nigerian banking channels including direct bank transfer to our corporate account, POS, and integrated payment gateways (Paystack/Flutterwave) upon invoice confirmation by our desk."
  },
  {
    q: "What is your success rate for visa assistance?",
    a: "Our visa desk boasts a remarkably high success rate due to our rigorous pre-audit of financial documents, customized cover letters, and meticulous embassy appointment scheduling for the UK, US, Canada, Schengen, and Dubai."
  },
  {
    q: "Can I contact GT&T via WhatsApp for urgent bookings?",
    a: "Yes! WhatsApp is our primary instant support channel. You can click the floating WhatsApp button on any page or reach us directly at +234 705 610 3924 for immediate response."
  }
];
