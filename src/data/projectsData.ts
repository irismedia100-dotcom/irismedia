export interface Project {
  id: string;
  title: string;
  category: 'Hospitality & Tourism' | 'Events & Luxury' | 'Drone & Aerial' | 'Post-Production';
  year: string;
  client: string;
  director: string;
  duration: string;
  instagramUrl: string;
  videoUrl: string;
  previewUrl: string;
  thumbnail: string;
  description: string;
  tags: string[];
  credits: {
    role: string;
    name: string;
  }[];
  featured: boolean;
  aspectRatio: 'wide' | 'tall' | 'square';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'luxury-resort-showcase',
    title: 'LUXURY RESORT & HOTEL FILM',
    category: 'Hospitality & Tourism',
    year: '2025',
    client: 'Five-Star Resort & Nile Cruise Group',
    director: 'IRIS Production Team',
    duration: '02:15',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-futuristic-city-at-night-42861-large.mp4',
    previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-view-of-a-futuristic-city-at-night-42861-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    description: 'Customized luxury visual marketing showcasing architectural elegance, ambient interior lighting, and subtle details for top-tier hotels and Nile cruises.',
    tags: ['Hospitality', 'Resort', 'Nile Cruise', 'Luxury Marketing'],
    credits: [
      { role: 'Creative Director', name: 'IRIS Media' },
      { role: 'Cinematographer', name: 'IRIS Team' },
      { role: 'Colorist', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'same-day-edit-event',
    title: 'SAME-DAY EDIT: LUXURY GALA & EVENT',
    category: 'Events & Luxury',
    year: '2025',
    client: 'International Conference & Private Gala',
    director: 'IRIS Live Unit',
    duration: '01:45',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-adjusting-knobs-on-a-sound-mixing-board-42171-large.mp4',
    previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-adjusting-knobs-on-a-sound-mixing-board-42171-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop',
    description: 'Live event coverage with Same-Day Edit (SDE) delivery, publishing high-quality cinematic reels in record time during the event.',
    tags: ['Same-Day Edit', 'Live Event', 'Conference', 'NYE Gala'],
    credits: [
      { role: 'Live Unit Supervisor', name: 'IRIS Media' },
      { role: 'On-Site Editor', name: 'IRIS SDE Team' }
    ],
    featured: true,
    aspectRatio: 'tall'
  },
  {
    id: 'aerial-architecture-drone',
    title: 'AERIAL PERSPECTIVE: ICONIC DESTINATIONS',
    category: 'Drone & Aerial',
    year: '2025',
    client: 'Tourism Board & Luxury Estates',
    director: 'IRIS Aerial Division',
    duration: '02:00',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-camera-pan-over-a-dramatic-dark-mountain-range-41584-large.mp4',
    previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-camera-pan-over-a-dramatic-dark-mountain-range-41584-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    description: 'Breathtaking 4K drone cinematography capturing sweeping landscapes, Nile cruise waterways, and architectural landmarks from unconventional angles.',
    tags: ['Drone', 'Aerial Cinematography', 'Landscapes', 'Architecture'],
    credits: [
      { role: 'Drone Pilot', name: 'IRIS Aerial' },
      { role: 'Visual Director', name: 'IRIS Media' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'post-production-color-mastery',
    title: 'POST-PRODUCTION & CINEMATIC COLOR',
    category: 'Post-Production',
    year: '2025',
    client: 'IRIS Creative Suite',
    director: 'IRIS Post Studio',
    duration: '01:30',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-portrait-of-a-man-in-a-dark-room-41586-large.mp4',
    previewUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cinematic-portrait-of-a-man-in-a-dark-room-41586-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
    description: 'Where the story takes its final shape — precision editing, bespoke color grading, sound design, and visual effects that give videos a distinct luxury character.',
    tags: ['Post-Production', 'Color Grading', 'Sound Design', 'VFX'],
    credits: [
      { role: 'Lead Colorist', name: 'IRIS Color' },
      { role: 'Sound Designer', name: 'IRIS Audio' }
    ],
    featured: true,
    aspectRatio: 'square'
  }
];

export const SERVICES_DATA = [
  {
    id: 'hospitality-tourism',
    number: '01',
    title: 'Hospitality & Tourism Production',
    subtitle: 'Customized marketing solutions for resorts, hotels, and Nile cruises highlighting beauty, quality, and subtle details.',
    deliverables: [
      'Resort & Five-Star Hotel Films',
      'Nile Cruise & Maritime Cinematography',
      'Spatial & Interior Detail Coverage',
      'High-End Tourism Promotional Campaigns',
      'Luxury Lifestyle Visual Marketing'
    ],
    highlight: 'Deep understanding of the luxury sector, creating visual marketing that speaks for iconic destinations.'
  },
  {
    id: 'event-luxury-coverage',
    number: '02',
    title: 'Event & Luxury Coverage (Same-Day Edit)',
    subtitle: 'Live coverage of major conferences, New Year celebrations, and private galas with Same-Day Edit (SDE) capability.',
    deliverables: [
      'Same-Day Edit (SDE) Delivery During Event',
      'Major Conferences & Summits',
      'New Year & Festive Celebrations',
      'VIP & Private Luxury Parties',
      'High-Energy Social Reels'
    ],
    highlight: 'Speed & professionalism — editing and publishing high-quality live coverage in record time.'
  },
  {
    id: 'drone-aerial',
    number: '03',
    title: 'Drone & Aerial Cinematography',
    subtitle: 'Capturing breathtaking aerial scenes with the latest drone technology to add a fantastical dimension.',
    deliverables: [
      '4K Aerial Landscape Cinematography',
      'Architectural & Resort Fly-Throughs',
      'Nile Cruise & Coastal Tracking',
      'Licensed & Precision Drone Operation',
      'Dynamic Cinematic Aerial Angle Shots'
    ],
    highlight: 'Showcasing scenery, landscapes, and architecture from unconventional, unforgettable angles.'
  },
  {
    id: 'post-production-editing',
    number: '04',
    title: 'Post-Production & Editing Studio',
    subtitle: 'The true studio where the story takes shape through editing, cinematic color grading, and sound design.',
    deliverables: [
      'Cinematic Editing & Pacing',
      'Bespoke Color Grading & LUTs',
      'Visual Effects (VFX) & Compositing',
      'Custom Music & Sound Design Selection',
      '4K Master Delivery for Social & Broadcast'
    ],
    highlight: '"Behind every cinematic scene is a timeline filled with creative decisions."'
  }
];

export const STATS_DATA = [
  { number: '100+', label: 'Luxury Visual Projects', suffix: '+' },
  { number: 'Same-Day', label: 'Edit & Delivery Speed', suffix: '' },
  { number: '100%', label: 'Cinematic Precision Guarantee', suffix: '%' },
  { number: '4K Aerial', label: 'Drone Technology', suffix: '' }
];
