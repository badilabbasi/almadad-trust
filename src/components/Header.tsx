import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { Heart, Menu, X, Calculator, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  onOpenZakatCalc: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenDonate,
  onOpenZakatCalc,
  currency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'projects', label: 'Projects' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'impact', label: 'Impact' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const secondaryNavItems: { id: PageId; label: string }[] = [
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'partner', label: 'Become a Partner' },
    { id: 'faq', label: 'FAQ' },
    { id: 'donate', label: 'Donation Portal' },
    { id: 'donation-terms', label: 'Donation Terms & Refunds' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      {/* Top Utility Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Zakat Policy Verified
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-400">
              UK Registered Charity No. 1192843 · Operating in 14 Countries
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenZakatCalc}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Zakat Calculator</span>
            </button>
            <span className="text-stone-600">·</span>
            <div className="flex items-center gap-1 text-stone-300">
              <Globe className="w-3 h-3 text-stone-400" />
              <select
                aria-label="Select Currency"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-stone-200 text-xs focus:outline-none cursor-pointer"
              >
                <option value="GBP" className="bg-stone-800 text-white">GBP (£)</option>
                <option value="USD" className="bg-stone-800 text-white">USD ($)</option>
                <option value="EUR" className="bg-stone-800 text-white">EUR (€)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar adhering to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-11 h-11 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400 shadow-sm border border-emerald-900 group-hover:bg-emerald-900 transition-colors">
            <Heart className="w-6 h-6 fill-amber-400 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900">
              ALMADAD TRUST
            </span>
            <span className="text-[11px] font-sans tracking-wide text-emerald-800 font-semibold uppercase">
              Together We Can Make a Difference
            </span>
          </div>
        </button>

        {/* Zone 2: Primary Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-stone-700">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors hover:text-emerald-800 cursor-pointer py-1 relative ${
                currentPage === item.id
                  ? 'text-emerald-800 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-800'
                  : 'text-stone-700'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="flex items-center gap-1 text-stone-700 hover:text-emerald-800 cursor-pointer py-1 text-sm font-medium"
            >
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {moreDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-stone-200 shadow-xl rounded-xl py-2 z-50">
                {secondaryNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenDonate()}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>DONATE NOW</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-stone-700 hover:text-emerald-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <p className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-2">Main Navigation</p>
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-emerald-50 text-emerald-900 font-semibold'
                    : 'text-stone-800 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-1">
            <p className="text-xs uppercase font-semibold tracking-wider text-stone-400 mb-2">Get Involved & Trust</p>
            {secondaryNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenZakatCalc();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg border border-amber-600 text-amber-700 text-sm font-medium hover:bg-amber-50"
            >
              Open Zakat Calculator
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 px-4 text-center rounded-lg bg-amber-600 text-white text-sm font-semibold shadow hover:bg-amber-700"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
