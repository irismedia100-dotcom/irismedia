import { CHALETS_HOTELS_PROJECTS } from './chaletsHotels';
import { MARINE_PROJECTS } from './marine';
import { RITUAL_PROJECTS } from './ritual';
import type { CategorySection, PortfolioItem } from './types';

export * from './types';
export * from './chaletsHotels';
export * from './marine';
export * from './ritual';

export const ALL_PROJECTS: PortfolioItem[] = [
  ...CHALETS_HOTELS_PROJECTS,
  ...MARINE_PROJECTS,
  ...RITUAL_PROJECTS
];

export const CATEGORIES_DATA: CategorySection[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    subtitle: 'Five-Star & Luxury Hospitality',
    projects: CHALETS_HOTELS_PROJECTS
  },
  {
    id: 'nile-cruise',
    name: 'Nile Cruise',
    subtitle: 'Luxury Nile Cruises & Floating Hotels',
    projects: MARINE_PROJECTS
  },
  {
    id: 'nile-dahabiya',
    name: 'Nile Dahabiya',
    subtitle: 'Bespoke Sailing & Heritage Vessels',
    projects: RITUAL_PROJECTS
  }
];

export function getProjectById(id: string): PortfolioItem | undefined {
  return ALL_PROJECTS.find((p) => p.id === id);
}
