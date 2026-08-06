import React from 'react';
import { HomeNavbar } from './HomeNavbar';
import { HomeHero } from './HomeHero';
import { ClientLogos } from './ClientLogos';
import { HomePortfolioShowcase } from './HomePortfolioShowcase';
import { HomeContact } from './HomeContact';

interface HomePageProps {
  activeCategory: string;
  onNavigateCategory: (catId: string) => void;
  onNavigateHome: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  activeCategory,
  onNavigateCategory,
  onNavigateHome,
}) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 overflow-x-hidden font-sans-body">
      {/* Top Navigation */}
      <HomeNavbar
        activeCategory={activeCategory}
        onNavigateHome={onNavigateHome}
        onNavigateCategory={onNavigateCategory}
        onNavigateContact={scrollToContact}
      />

      {/* Hero Section */}
      <HomeHero onExplore={scrollToSection} />

      {/* Client Logos Section (Screenshot 2 Match) */}
      <ClientLogos />

      {/* Portfolio Showcase Cards */}
      <HomePortfolioShowcase onSelectCategory={onNavigateCategory} />

      {/* Contact Section (Screenshot 3 Match) */}
      <HomeContact />
    </div>
  );
};
