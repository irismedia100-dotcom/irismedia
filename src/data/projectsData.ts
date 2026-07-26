export interface Project {
  id: string;
  title: string;
  category: 'Hospitality & Tourism' | 'Events & Luxury' | 'Drone & Aerial' | 'Post-Production';
  type: 'video' | 'photo';
  year: string;
  client: string;
  director: string;
  duration: string;
  instagramUrl: string;
  facebookUrl?: string;
  embedCode?: string;
  videoUrl?: string;
  previewUrl?: string;
  galleryImages?: string[];
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
    id: 'ms-savoy-nile-life',
    title: 'MS SAVOY — REDEFINING LIFE ON THE NILE',
    category: 'Hospitality & Tourism',
    type: 'photo',
    year: '2025',
    client: 'MS Savoy',
    director: 'IRIS Media Production',
    duration: '5 Photos',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    facebookUrl: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0gy2b8cEc2R5VCxDKgj1GzMTD8CpkboMGmgZigFtErhq69sGhrw9QXDDSt4bAaQWPl&id=61581044486713',
    embedCode: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0gy2b8cEc2R5VCxDKgj1GzMTD8CpkboMGmgZigFtErhq69sGhrw9QXDDSt4bAaQWPl%26id%3D61581044486713&show_text=true&width=500" width="100%" height="620" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    galleryImages: [
      '/projects/sovey/Hitube_N7UPjl7Z7d_2026_07_26_16_11_09.jpg',
      '/projects/sovey/Hitube_iAnEivPjhX_2026_07_26_16_11_12.jpg',
      '/projects/sovey/Hitube_D1nlL2FIPt_2026_07_26_16_11_13.jpg',
      '/projects/sovey/Hitube_VQrWEu5FYM_2026_07_26_16_11_15.jpg',
      '/projects/sovey/Hitube_rHbU3CtzD3_2026_07_26_16_11_16.jpg'
    ],
    thumbnail: '/projects/sovey/Hitube_N7UPjl7Z7d_2026_07_26_16_11_09.jpg',
    description: 'Balance and beauty in every detail — from the elegant lobby to the energizing gym, MS Savoy redefines life on the Nile. Captured by Iris.',
    tags: ['MS Savoy', 'Nile Cruise', 'Luxury Lifestyle', 'Lobby & Gym', 'Photography'],
    credits: [
      { role: 'Photography & Art Direction', name: 'IRIS Media Production' },
      { role: 'Lead Photographer', name: 'IRIS Team' },
      { role: 'Color & Retouching', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'seti-abu-simbel-view',
    title: 'SETI ABU SIMBEL — A VIEW WORTH EVERY MOMENT',
    category: 'Hospitality & Tourism',
    type: 'photo',
    year: '2025',
    client: 'Seti Abu Simbel',
    director: 'IRIS Media Production',
    duration: '5 Photos',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    facebookUrl: 'https://www.facebook.com/permalink.php?story_fbid=pfbid0e4JJ8iouY3xoCHnhv1azy7y2YY9q5iWhiwxGHy2YPtwhXwR7aBSMhC4ZxEVqb74il&id=61581044486713',
    embedCode: '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0e4JJ8iouY3xoCHnhv1azy7y2YY9q5iWhiwxGHy2YPtwhXwR7aBSMhC4ZxEVqb74il%26id%3D61581044486713&show_text=true&width=500" width="100%" height="709" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
    galleryImages: [
      '/projects/asl/Hitube_tlosTCXy0f_2026_07_26_16_16_10.jpg',
      '/projects/asl/Hitube_GOV4thvduO_2026_07_26_16_16_11.jpg',
      '/projects/asl/Hitube_l4n506LZbe_2026_07_26_16_16_12.jpg',
      '/projects/asl/Hitube_BZ8EJ0go1K_2026_07_26_16_16_14.jpg',
      '/projects/asl/Hitube_mpTH0Wdtl2_2026_07_26_16_16_15.jpg'
    ],
    thumbnail: '/projects/asl/Hitube_tlosTCXy0f_2026_07_26_16_16_10.jpg',
    description: 'A view worth every moment. Seti Abu Simbel — beautifully captured by Iris.',
    tags: ['Seti Abu Simbel', 'Resort View', 'Sunset', 'Luxury Hospitality', 'Photography'],
    credits: [
      { role: 'Photography & Art Direction', name: 'IRIS Media Production' },
      { role: 'Lead Photographer', name: 'IRIS Team' },
      { role: 'Color & Retouching', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'savoy-yacht-nile-journey',
    title: 'SAVOY YACHT: LUXOR TO ASWAN',
    category: 'Hospitality & Tourism',
    type: 'video',
    year: '2025',
    client: 'Savoy Yacht',
    director: 'IRIS Media Production',
    duration: '01:45',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    facebookUrl: 'https://www.facebook.com/share/r/14iRZCs5f9w/',
    videoUrl: '/videos/savoy-yacht-nile.mp4',
    previewUrl: '/videos/savoy-yacht-nile.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    description: 'Sailing the Nile in style — our lens aboard the Savoy Yacht, capturing the journey from Luxor to Aswan. Filmed and produced with cinematic excellence by IRIS Media Production.',
    tags: ['Yacht', 'Nile Cruise', 'Luxor', 'Aswan', 'Luxury Tourism'],
    credits: [
      { role: 'Filming & Production', name: 'IRIS Media Production' },
      { role: 'Cinematographer', name: 'IRIS Team' },
      { role: 'Post-Production', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'semiramis-iii-nile-cruise',
    title: 'SEMIRAMIS III NILE CRUISE',
    category: 'Hospitality & Tourism',
    type: 'video',
    year: '2025',
    client: 'Semiramis III Nile Cruise',
    director: 'IRIS Media Production',
    duration: '02:10',
    instagramUrl: 'https://www.instagram.com/reel/DQHiReREyJV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    videoUrl: '/videos/semiramis-iii-nile-cruise.mp4',
    previewUrl: '/videos/semiramis-iii-nile-cruise.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
    description: 'Step aboard Semiramis III — where timeless elegance meets the serene beauty of the Nile. From sunrise to sunset, every frame tells the story of Egypt’s heart through luxurious details, warm hospitality, and breathtaking views. Filmed by IRIS Production, capturing the spirit of the Nile journey between Luxor and Aswan with cinematic precision.',
    tags: ['Nile Cruise', 'Luxor', 'Aswan', 'Hospitality', 'Cinematic'],
    credits: [
      { role: 'Filming & Production', name: 'IRIS Media Production' },
      { role: 'Cinematographer', name: 'IRIS Team' },
      { role: 'Post-Production', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 'iris-brand-feeling-experience',
    title: 'WE CREATE THE FEELING OF BEING THERE',
    category: 'Post-Production',
    type: 'video',
    year: '2025',
    client: 'IRIS Media Brand',
    director: 'IRIS Creative Team',
    duration: '01:15',
    instagramUrl: 'https://www.instagram.com/reel/DZaiLnrzmS8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    videoUrl: '/videos/iris-brand-feeling.mp4',
    previewUrl: '/videos/iris-brand-feeling.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
    description: 'We don\'t just film places. We create the feeling of being there. Another story brought to life by Iris Media Production.',
    tags: ['Brand Story', 'Cinematic Feel', 'Post-Production', 'VFX'],
    credits: [
      { role: 'Concept & Direction', name: 'IRIS Creative Team' },
      { role: 'Editing & Color', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'square'
  },
  {
    id: 'sentido-hotel-anniversary',
    title: 'SENTIDO HOTEL 2ND ANNIVERSARY',
    category: 'Hospitality & Tourism',
    type: 'video',
    year: '2025',
    client: 'Sentido Hotel',
    director: 'IRIS Media Production',
    duration: '02:00',
    instagramUrl: 'https://www.instagram.com/iris.media_production/',
    facebookUrl: 'https://www.facebook.com/share/v/197xi4KmFo/',
    videoUrl: '/videos/sentido-hotel-anniversary.mp4',
    previewUrl: '/videos/sentido-hotel-anniversary.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop',
    description: 'A cinematic celebration of Sentido Hotel\'s 2nd anniversary — capturing the luxury ambiance, vibrant moments, and elegant atmosphere of one of the finest hospitality destinations. Filmed and produced by IRIS Media Production.',
    tags: ['Hotel', 'Anniversary', 'Luxury', 'Hospitality', 'Cinematic'],
    credits: [
      { role: 'Filming & Production', name: 'IRIS Media Production' },
      { role: 'Cinematographer', name: 'IRIS Team' },
      { role: 'Post-Production', name: 'IRIS Post Studio' }
    ],
    featured: true,
    aspectRatio: 'wide'
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
