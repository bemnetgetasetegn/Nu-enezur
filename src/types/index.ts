export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  category: 'historical' | 'adventure' | 'cultural' | 'wildlife';
  rating: number;
  duration: string;
  price: string;
  coordinates: { x: number; y: number }; // percentage on SVG map
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  category: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  summary: string;
  itinerary: { day: string; title: string; desc: string }[];
  included: string[];
  excluded: string[];
}

export interface EthiopianRegion {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  coordinates: { x: number; y: number };
  image: string;
  keyAttractions: string[];
  bestTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  tourTaken: string;
  avatar: string;
  rating: number;
}
