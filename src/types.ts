export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  thumbnailGradient: string; // CSS gradient class
  brandingSystem: {
    concept: string;
    keywords: string[];
  };
  logoVariations: { name: string; type: string; purpose: string }[];
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; fontName: string; size: string }[];
  designProcess: { step: string; title: string; text: string }[];
  beforeAndAfter: { before: string; after: string };
  clientTestimonial: {
    quote: string;
    author: string;
    company: string;
    rating: number;
    avatarSeed: string;
  };
  projectResults: string[];
  mockupInteractiveType: 'card' | 'identity' | 'packaging' | 'poster' | 'ui' | 'thumbnail';
}

export interface Service {
  id: string;
  title: string;
  iconName: string; // Name of Lucide icon
  description: string;
  details: string;
  deliverables: string[];
  accentColor: 'lime' | 'purple' | 'red';
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0 - 100
  category: 'software' | 'creative';
  color: 'lime' | 'purple' | 'red' | 'white';
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'award' | 'milestone';
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarSeed: string;
}
