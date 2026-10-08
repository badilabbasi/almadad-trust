/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId, Currency } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/EmergencyBanner';
import { DonationModal } from './components/DonationModal';
import { ZakatCalculatorModal } from './components/ZakatCalculatorModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { DonatePage } from './pages/DonatePage';
import { CampaignsPage } from './pages/CampaignsPage';
import { ImpactPage } from './pages/ImpactPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { PartnerPage } from './pages/PartnerPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currency, setCurrency] = useState<Currency>('GBP');

  // Donation Modal state
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState<string | undefined>(undefined);

  // Zakat Calculator Modal state
  const [isZakatCalcOpen, setIsZakatCalcOpen] = useState(false);

  const handleOpenDonate = (cause?: string) => {
    setSelectedCause(cause);
    setIsDonateOpen(true);
  };

  const handleOpenZakatCalc = () => {
    setIsZakatCalcOpen(true);
  };

  const handleDonateCalculatedZakat = (amount: number) => {
    setSelectedCause('100% Zakat Fund');
    setIsDonateOpen(true);
  };

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-emerald-800 selection:text-white">
      {/* 1. Emergency Crisis Alert Banner */}
      <EmergencyBanner onOpenDonate={handleOpenDonate} />

      {/* 2. Sticky Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenDonate={handleOpenDonate}
        onOpenZakatCalc={handleOpenZakatCalc}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* 3. Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenDonate={handleOpenDonate}
            onOpenZakatCalc={handleOpenZakatCalc}
            currency={currency}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenDonate={handleOpenDonate}
            currency={currency}
          />
        )}

        {currentPage === 'donate' && (
          <DonatePage
            onNavigate={navigateTo}
            onOpenDonate={handleOpenDonate}
            onOpenZakatCalc={handleOpenZakatCalc}
            currency={currency}
          />
        )}

        {currentPage === 'campaigns' && (
          <CampaignsPage
            onNavigate={navigateTo}
            onOpenDonate={handleOpenDonate}
            currency={currency}
          />
        )}

        {currentPage === 'impact' && (
          <ImpactPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'volunteer' && (
          <VolunteerPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'partner' && (
          <PartnerPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'news' && (
          <NewsPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} onOpenDonate={handleOpenDonate} />
        )}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={navigateTo}
            onOpenDonate={handleOpenDonate}
            onOpenZakatCalc={handleOpenZakatCalc}
          />
        )}

        {currentPage === 'privacy' && (
          <LegalPage initialTab="privacy" onNavigate={navigateTo} />
        )}

        {currentPage === 'terms' && (
          <LegalPage initialTab="terms" onNavigate={navigateTo} />
        )}

        {currentPage === 'donation-terms' && (
          <LegalPage initialTab="donation-terms" onNavigate={navigateTo} />
        )}
      </main>

      {/* 4. Trustworthy Humanitarian Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenDonate={handleOpenDonate}
        onOpenZakatCalc={handleOpenZakatCalc}
      />

      {/* 5. Interactive Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialCause={selectedCause}
        currency={currency}
      />

      <ZakatCalculatorModal
        isOpen={isZakatCalcOpen}
        onClose={() => setIsZakatCalcOpen(false)}
        onDonateZakat={handleDonateCalculatedZakat}
        currency={currency}
      />
    </div>
  );
}

