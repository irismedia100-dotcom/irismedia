import type { PortfolioItem } from './types';

export const RITUAL_PROJECTS: PortfolioItem[] = [
  {
    id: 'desert-mirage',
    title: 'Desert Mirage',
    category: 'Nile Dahabiya',
    categoryId: 'nile-dahabiya',
    type: 'video',
    videoUrl: '/videos/44.mp4',
    location: 'AlUla, Saudi Arabia',
    year: '2025',
    designer: 'Gio Forma Architects',
    lighting: 'Desert Sun & Dusk Studio',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'horizontal',
    description: 'Mirror-clad desert concert hall reflecting ancient red sandstone canyons and shifting golden dunes.',
    details: {
      architect: 'Gio Forma Studio',
      client: 'AlUla Royal Commission',
      specs: 'Landscape Reflection & Architecture'
    }
  },
  {
    id: 'golden-horizons',
    title: 'Golden Horizons',
    category: 'Nile Dahabiya',
    categoryId: 'nile-dahabiya',
    location: 'Siwa Oasis, Egypt',
    year: '2024',
    designer: 'Eco-Earth Architecture',
    lighting: 'Candlelight & Sunset Horizon',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'vertical',
    description: 'Minimalist salt-rock eco retreat harmonizing handcrafted clay walls with infinite desert horizon vistas.',
    details: {
      architect: 'Siwa Eco Design Lab',
      client: 'Adrère Amellal Retreat',
      specs: 'Earth Architecture & Sunset Studies'
    }
  },
  {
    id: 'silent-sands',
    title: 'Silent Sands',
    category: 'Nile Dahabiya',
    categoryId: 'nile-dahabiya',
    location: 'Rub\' al Khali, UAE',
    year: '2025',
    designer: 'Studio Desert Oasis',
    lighting: 'Natural Starlight & Solar Dusk',
    imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'horizontal',
    description: 'Modernist low-slung desert pavilion submerged within sweeping orange dunes under crisp starlit skies.',
    details: {
      architect: 'Emirates Spatial Design',
      client: 'Desert Sanctuary Sanctuary',
      specs: 'Solitary Architecture & Night Sky'
    }
  }
];
