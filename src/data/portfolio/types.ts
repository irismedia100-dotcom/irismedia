export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Hotels' | 'Nile Cruise' | 'Nile Dahabiya';
  categoryId: 'hotels' | 'nile-cruise' | 'nile-dahabiya';
  location: string;
  year: string;
  designer?: string;
  lighting?: string;
  imageUrl: string;
  videoUrl?: string;
  type?: 'photo' | 'video';
  aspectRatio: 'vertical' | 'horizontal' | 'square';
  description: string;
  details?: {
    architect?: string;
    client?: string;
    specs?: string;
  };
}

export interface Company {
  id: string;
  name: string;
  categoryId: 'hotels' | 'nile-cruise' | 'nile-dahabiya';
  categoryName: string;
  coverImage?: string;
  description?: string;
  projects: PortfolioItem[];
}

export interface CategorySection {
  id: 'hotels' | 'nile-cruise' | 'nile-dahabiya';
  name: string;
  subtitle?: string;
  companies: Company[];
  projects: PortfolioItem[];
}
