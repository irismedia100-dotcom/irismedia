import type { CategorySection, Company, PortfolioItem } from './types';

// ─── Separate Company Imports ───────────────────────────────────
// 1. Hotels
import { OPAL_LEGACY_PROJECTS } from './companies/hotels/opalLegacy';
import { SETI_ABUSIMBEL_PROJECTS } from './companies/hotels/setiAbusimbel';

// 2. Nile Cruise
import { SAVOY_YACHT_PROJECTS } from './companies/nileCruise/savoyYacht';
import { NILE_ADMIRAL_PROJECTS } from './companies/nileCruise/nileAdmiral';
import { SUN_RISE_SEMIRAMIS_PROJECTS } from './companies/nileCruise/sunRiseSemiramis';

// 3. Nile Dahabiya
import { JUBAL_PROJECTS } from './companies/nileDahabiya/jubal';
import { NEBU_RA_PROJECTS } from './companies/nileDahabiya/nebuRa';

export * from './types';
export * from './companies/hotels/opalLegacy';
export * from './companies/hotels/setiAbusimbel';
export * from './companies/nileCruise/savoyYacht';
export * from './companies/nileCruise/nileAdmiral';
export * from './companies/nileCruise/sunRiseSemiramis';
export * from './companies/nileDahabiya/jubal';
export * from './companies/nileDahabiya/nebuRa';

// ─── Individual Company Entities ────────────────────────────────
export const COMPANIES: Record<string, Company> = {
  // Hotels
  'opal-legacy': {
    id: 'opal-legacy',
    name: 'Opal Legacy',
    categoryId: 'hotels',
    categoryName: 'Hotels',
    coverImage: OPAL_LEGACY_PROJECTS[0]?.imageUrl || '',
    description: 'Luxury hotel & resort architecture captured with precision by IRIS Media Production.',
    projects: OPAL_LEGACY_PROJECTS
  },
  'seti-abusimbel': {
    id: 'seti-abusimbel',
    name: 'Seti Abusimbel',
    categoryId: 'hotels',
    categoryName: 'Hotels',
    coverImage: SETI_ABUSIMBEL_PROJECTS[0]?.imageUrl || '',
    description: 'Historic and luxury hospitality visual production in Abu Simbel.',
    projects: SETI_ABUSIMBEL_PROJECTS
  },

  // Nile Cruise
  'savoy-yacht': {
    id: 'savoy-yacht',
    name: 'Savoy Yacht',
    categoryId: 'nile-cruise',
    categoryName: 'Nile Cruise',
    coverImage: SAVOY_YACHT_PROJECTS[0]?.imageUrl || '',
    description: 'Cinematic film production showcasing the opulent Savoy Yacht floating experience along the Nile.',
    projects: SAVOY_YACHT_PROJECTS
  },
  'nile-admiral': {
    id: 'nile-admiral',
    name: 'Nile Admiral',
    categoryId: 'nile-cruise',
    categoryName: 'Nile Cruise',
    coverImage: NILE_ADMIRAL_PROJECTS[0]?.imageUrl || '',
    description: 'Exclusive video coverage of the prestigious Nile Admiral floating cruise experience on the Nile.',
    projects: NILE_ADMIRAL_PROJECTS
  },
  'sun-rise-semiramis-iii': {
    id: 'sun-rise-semiramis-iii',
    name: 'Sun Rise Semiramis III',
    categoryId: 'nile-cruise',
    categoryName: 'Nile Cruise',
    coverImage: SUN_RISE_SEMIRAMIS_PROJECTS[0]?.imageUrl || '',
    description: 'Bespoke cinematography capturing the timeless luxury and sailing ambiance aboard Sun Rise Semiramis III.',
    projects: SUN_RISE_SEMIRAMIS_PROJECTS
  },

  // Nile Dahabiya
  'jubal': {
    id: 'jubal',
    name: 'Jubal',
    categoryId: 'nile-dahabiya',
    categoryName: 'Nile Dahabiya',
    coverImage: JUBAL_PROJECTS[0]?.imageUrl || '',
    description: 'Cinematic visual experience aboard the Jubal luxury Nile Dahabiya, captured by IRIS Media Production.',
    projects: JUBAL_PROJECTS
  },
  'nebu-ra': {
    id: 'nebu-ra',
    name: 'Nebu Ra',
    categoryId: 'nile-dahabiya',
    categoryName: 'Nile Dahabiya',
    coverImage: NEBU_RA_PROJECTS[0]?.imageUrl || '',
    description: 'Bespoke heritage sailing aboard the Nebu Ra luxury Nile Dahabiya, captured by IRIS Media Production.',
    projects: NEBU_RA_PROJECTS
  }
};

export const ALL_COMPANIES: Company[] = Object.values(COMPANIES);

// ─── 3 Distinct Categories Data Structure ───────────────────────
export const CATEGORIES_DATA: CategorySection[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    subtitle: 'Luxury Hotels & Resorts Spatial Visuals',
    companies: [
      COMPANIES['opal-legacy'],
      COMPANIES['seti-abusimbel']
    ],
    projects: [
      ...OPAL_LEGACY_PROJECTS,
      ...SETI_ABUSIMBEL_PROJECTS
    ]
  },
  {
    id: 'nile-cruise',
    name: 'Nile Cruise',
    subtitle: 'Prestigious Floating Yachts & Cruises',
    companies: [
      COMPANIES['savoy-yacht'],
      COMPANIES['nile-admiral'],
      COMPANIES['sun-rise-semiramis-iii']
    ],
    projects: [
      ...SAVOY_YACHT_PROJECTS,
      ...NILE_ADMIRAL_PROJECTS,
      ...SUN_RISE_SEMIRAMIS_PROJECTS
    ]
  },
  {
    id: 'nile-dahabiya',
    name: 'Nile Dahabiya',
    subtitle: 'Heritage Boutique Nile Dahabiyat Experience',
    companies: [
      COMPANIES['jubal'],
      COMPANIES['nebu-ra']
    ],
    projects: [
      ...JUBAL_PROJECTS,
      ...NEBU_RA_PROJECTS
    ]
  }
];

// ─── Flattened Full Projects List ───────────────────────────────
export const ALL_PROJECTS: PortfolioItem[] = CATEGORIES_DATA.flatMap((cat) => cat.projects);

// ─── Helper Query Functions ─────────────────────────────────────
export function getCompanyById(companyId: string): Company | undefined {
  return COMPANIES[companyId];
}

export function getProjectById(id: string): PortfolioItem | undefined {
  return ALL_PROJECTS.find((p) => p.id === id);
}

export function getProjectsByCategory(categoryId: string): PortfolioItem[] {
  if (categoryId === 'all') return ALL_PROJECTS;
  const category = CATEGORIES_DATA.find((c) => c.id === categoryId);
  return category ? category.projects : [];
}
