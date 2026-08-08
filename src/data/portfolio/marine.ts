import type { PortfolioItem } from './types';

export const MARINE_PROJECTS: PortfolioItem[] = [
  {
    id: 'savoy-yacht',
    title: 'Savoy Yacht',
    category: 'Nile Cruise',
    categoryId: 'nile-cruise',
    type: 'video',
    videoUrl: 'https://vimeo.com/1216663728',
    location: 'The Nile, Egypt',
    year: '2025',
    designer: 'IRIS Media Production',
    lighting: 'Natural Dusk & Nile Sunset',
    imageUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'horizontal',
    description: 'Cinematic film production showcasing the opulent Savoy Yacht floating experience along the Nile.',
    details: {
      architect: 'Savoy Nile Cruises',
      client: 'Savoy Luxury Yacht',
      specs: 'Cinematic Video Production'
    }
  },
  {
    id: 'nile-admiral',
    title: 'Nile Admiral',
    category: 'Nile Cruise',
    categoryId: 'nile-cruise',
    type: 'video',
    videoUrl: 'https://vimeo.com/1216663730',
    location: 'The Nile, Egypt',
    year: '2025',
    designer: 'IRIS Media Production',
    lighting: 'Golden Hour & Nile Illumination',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'horizontal',
    description: 'Exclusive video coverage of the prestigious Nile Admiral floating cruise experience on the Nile.',
    details: {
      architect: 'Nile Admiral Fleet',
      client: 'Nile Admiral Cruise Line',
      specs: 'Cinematic Video Production'
    }
  }
];
