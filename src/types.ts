export interface ServiceInfo {
  id: string;
  code: string; // FLT, VSA, STY, HTL, CAR, PKG, HNY
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  process?: { step: string; title: string; desc: string }[];
}

export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  routeCode: string;
  duration: string;
  priceNaira: string;
  priceUSD: string;
  image: string;
  badge?: string;
  highlights: string[];
  description: string;
  includes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  serviceUsed: string;
  rating: number;
  image: string;
}

export type QuoteTabType = 'flights' | 'visa' | 'hotels' | 'cars' | 'packages';
