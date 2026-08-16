import React, { useState } from 'react';
import { X, Plus, Menu, Mail, Phone, Home, MessageSquare } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { FacebookIcon } from './FacebookIcon';
import { CATEGORIES_DATA } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  selectedProjectId: string | null;
  onSelectProjectFilter: (project: PortfolioItem) => void;
  onOpenContactModal: () => void;
  onOpenAboutModal: () => void;
  isOpenMobile: boolean;
  onToggleMobile: () => void;
  onNavigateHome: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeCategory,
  onSelectCategory,
  selectedProjectId,
  onSelectProjectFilter,
  onOpenContactModal,
  onOpenAboutModal,
  isOpenMobile,
  onToggleMobile,
  onNavigateHome,
}) => {
  // Track open/collapsed categories
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({
    hotels: false,
    'nile-cruise': false,
    'nile-dahabiya': false,
  });

  const toggleCategoryCollapse = (categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <>
      {/* Mobile Menu Toggle Floating Icon */}
      <button
        onClick={onToggleMobile}
        className="md:hidden fixed top-4 left-4 z-50 bg-neutral-900 text-white p-2.5 rounded-full shadow-lg hover:bg-neutral-800 transition-all focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        {isOpenMobile ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop for Mobile Sidebar */}
      {isOpenMobile && (
        <div
          onClick={onToggleMobile}
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Sidebar Main Fixed Column */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[295px] bg-white border-r border-neutral-200/70 z-40 flex flex-col justify-between p-6 select-none overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top Header: Official IRIS Logo Image + Navigation */}
        <div>
          <div
            className="mb-8 cursor-pointer group flex items-center"
            onClick={onNavigateHome}
            title="Return to Home Page"
          >
            <img
              src="/assets/iris-logo-01.png"
              alt="IRIS Media Production Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Nav Links: Home, About, Contact, Archive */}
          <div className="mb-6 space-y-2 border-b border-neutral-100 pb-5 text-sm">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-neutral-900 font-bold text-xs tracking-wider hover:text-neutral-600 transition-colors uppercase"
            >
              <Home size={14} />
              <span>Home Page</span>
            </button>
            <button
              onClick={onOpenAboutModal}
              className="block text-neutral-500 hover:text-neutral-900 transition-colors font-medium text-xs tracking-wider"
            >
              About
            </button>
            <button
              onClick={onOpenContactModal}
              className="block text-neutral-500 hover:text-neutral-900 transition-colors font-medium text-xs tracking-wider"
            >
              Contact
            </button>
          </div>

          {/* Portfolio Navigation Sections */}
          <nav className="space-y-6 text-sm">
            <div>
              <div
                onClick={() => onSelectCategory('all')}
                className={`font-semibold tracking-wider text-xs uppercase mb-3 cursor-pointer transition-colors ${
                  activeCategory === 'all' ? 'text-neutral-900 font-bold' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                PORTFOLIO
              </div>

              {/* Subcategories */}
              <div className="space-y-4 pl-1">
                {CATEGORIES_DATA.map((cat) => {
                  const isCollapsed = collapsedCategories[cat.id];
                  const isCatActive = activeCategory === cat.id;

                  return (
                    <div key={cat.id} className="space-y-1.5">
                      {/* Subcategory Header with Collapsible X icon */}
                      <div
                        onClick={() => onSelectCategory(cat.id)}
                        className="flex items-center justify-between group cursor-pointer py-0.5"
                      >
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                            isCatActive
                              ? 'text-neutral-900 font-bold underline underline-offset-4 decoration-neutral-900'
                              : 'text-neutral-500 hover:text-neutral-900'
                          }`}
                        >
                          {cat.name}
                        </span>

                        {/* Collapsible toggle icon (x or +) */}
                        <button
                          onClick={(e) => toggleCategoryCollapse(cat.id, e)}
                          className="text-neutral-400 hover:text-neutral-900 p-0.5 rounded transition-colors"
                          title={isCollapsed ? 'Expand section' : 'Collapse section'}
                        >
                          {isCollapsed ? <Plus size={13} /> : <X size={13} />}
                        </button>
                      </div>

                      {/* Company items under category */}
                      {!isCollapsed && (
                        <ul className="pl-3 space-y-1.5 border-l border-neutral-100">
                          {cat.companies.map((company) => {
                            const firstProj = company.projects[0];
                            const isCompanySelected = selectedProjectId
                              ? company.projects.some((p) => p.id === selectedProjectId)
                              : false;

                            return (
                              <li key={company.id}>
                                <button
                                  onClick={() => {
                                    onSelectCategory(cat.id);
                                    if (firstProj) {
                                      onSelectProjectFilter(firstProj);
                                    }
                                    if (isOpenMobile) onToggleMobile();
                                  }}
                                  className={`text-[12px] text-left w-full transition-all duration-200 hover:translate-x-1 flex items-center justify-between py-0.5 ${
                                    isCompanySelected
                                      ? 'text-neutral-900 font-bold underline underline-offset-2'
                                      : 'text-neutral-400 hover:text-neutral-800'
                                  }`}
                                >
                                  <span>{company.name}</span>
                                  <span className="text-[10px] text-neutral-300 font-mono">
                                    {company.projects.length}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom Sidebar Footer Section */}
        <div className="pt-6 border-t border-neutral-100 space-y-2.5">
          {/* Gmail Link (Opens Gmail Compose Page) */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=irismediaproduction01@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="block text-xs font-medium text-neutral-900 hover:underline tracking-tight transition-colors"
            title="Compose message in Gmail"
          >
            irismediaproduction01@gmail.com
          </a>

          {/* Regular Phone Call (+20 102 887 5361) */}
          <a
            href="tel:01028875361"
            className="block text-xs font-medium text-neutral-800 hover:text-neutral-900 transition-colors"
          >
            +20 102 887 5361
          </a>

          {/* WhatsApp Direct (+20 12 74795553) */}
          <a
            href="https://wa.me/201274795553"
            target="_blank"
            rel="noreferrer"
            className="block text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            +20 12 74795553 (WhatsApp)
          </a>

          <div className="text-neutral-300 text-xs">-</div>

          {/* Copyright & Disclaimer */}
          <div className="text-[10px] text-neutral-400 leading-snug font-sans space-y-0.5">
            <p>All Images © {new Date().getFullYear()} IRIS Media Production</p>
            <p>No reproduction without permission.</p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3.5 pt-2 text-neutral-500">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/iris.media_production/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1JhB6ZMycS/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 transition-colors"
              title="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201274795553"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare size={13} />
            </a>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=irismediaproduction01@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 transition-colors"
              title="Send via Gmail"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
