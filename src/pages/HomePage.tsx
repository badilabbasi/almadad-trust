import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { IMAGES, TRUST_STATS, CAMPAIGNS, PROGRAMS, NEWS_ARTICLES } from '../data/mockData';
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  HandCoins,
  MapPin,
  Calendar,
  Sparkles,
  Award,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  onOpenZakatCalc: () => void;
  currency: Currency;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenZakatCalc,
  currency,
}) => {
  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';

  // Fast Hero Donation Widget state
  const [fastCause, setFastCause] = useState('Where Most Needed');
  const [fastAmount, setFastAmount] = useState<number>(50);
  const [fastCustomAmount, setFastCustomAmount] = useState<string>('');

  const quickAmounts = [25, 50, 100, 250];

  const handleFastDonate = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenDonate(fastCause);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-stone-900 text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Humanitarian workers distributing food aid parcels to vulnerable families"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Measured multi-layer gradient scrim for high contrast legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Zakat Policy · Registered Charity No. 1192843</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] text-balance">
                Together, We Can Change Lives.
              </h1>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-light">
                ALMADAD TRUST works to support vulnerable families and communities by providing food, education, healthcare, clean water, emergency assistance and sustainable opportunities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDonate()}
                  className="flex items-center gap-2.5 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-amber-600/30 transition-all cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>DONATE NOW</span>
                </button>

                <button
                  onClick={() => onNavigate('programs')}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Trust Pillars */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Zakat Directly Given</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>14 Countries Reached</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Audited Financials</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Fast Donation Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-stone-200 text-stone-900">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="text-xs uppercase font-bold tracking-wider text-emerald-900">
                    Quick Giving Portal
                  </span>
                  <span className="text-xs text-stone-500 font-medium">HMRC Gift Aid +25%</span>
                </div>

                <form onSubmit={handleFastDonate} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Choose Your Humanitarian Cause
                    </label>
                    <select
                      value={fastCause}
                      onChange={(e) => setFastCause(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-medium"
                    >
                      <option value="Where Most Needed">Where Most Needed (General Relief)</option>
                      <option value="Gaza Urgent Food & Medical Lifeline">Gaza Urgent Food & Medical Aid</option>
                      <option value="Ramadan Food Baskets 2026">Ramadan 2026 Food Baskets</option>
                      <option value="Thar & East Africa Solar Water Wells">Clean Water Well Installation</option>
                      <option value="Guardian Angel: Orphan Sponsorship">Orphan Sponsorship Programme</option>
                      <option value="100% Zakat Fund">100% Zakat Fund</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-2">
                      Select Amount ({currency})
                    </label>
                    <div className="grid grid-cols-4 gap-2 mb-2.5">
                      {quickAmounts.map((amt) => {
                        const isSelected = !fastCustomAmount && fastAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setFastAmount(amt);
                              setFastCustomAmount('');
                            }}
                            className={`py-2 px-1 rounded-xl text-center font-bold text-sm transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                            }`}
                          >
                            {currencySymbol}{amt}
                          </button>
                        );
                      })}
                    </div>

                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-bold text-xs">
                        {currencySymbol}
                      </span>
                      <input
                        type="number"
                        min="5"
                        placeholder="Other custom amount"
                        value={fastCustomAmount}
                        onChange={(e) => setFastCustomAmount(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                    <span>Includes 100% Direct Delivery Pledge</span>
                    <button
                      type="button"
                      onClick={onOpenZakatCalc}
                      className="text-amber-800 font-bold underline hover:text-amber-900 cursor-pointer"
                    >
                      Calculate Zakat
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>
                      DONATE {currencySymbol}{fastCustomAmount ? fastCustomAmount : fastAmount} NOW
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED IMPACT STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Verified Humanitarian Footprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Transforming Generosity into Measurable Change
            </h2>
            <p className="text-sm text-stone-500">
              Through your compassionate support, our field teams deliver life-saving relief every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0 md:px-4 text-center space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-emerald-900 block">
                  {stat.label}
                </span>
                <p className="text-[11px] text-stone-500 leading-tight">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. URGENT CAMPAIGNS & APPEALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-700">
              Current Humanitarian Appeals
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Urgent Relief Campaigns
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Critical crises require swift collective action. Support active emergency deployments where immediate help is needed right now.
            </p>
          </div>
          <button
            onClick={() => onNavigate('campaigns')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View All Campaigns</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGNS.slice(0, 3).map((campaign) => {
            const percent = Math.min(100, Math.round((campaign.raisedAmount / campaign.targetAmount) * 100));
            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {campaign.urgent && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                      Urgent Appeal
                    </span>
                  )}
                  {campaign.zakatEligible && (
                    <span className="absolute top-3 right-3 bg-emerald-900/90 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                      100% Zakat Eligible
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400" />
                      <span>{campaign.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{campaign.category}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 line-clamp-1">
                      {campaign.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {campaign.subtitle}
                    </p>
                  </div>

                  {/* Progress Bar & Financials */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-emerald-700 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-900 font-bold">
                        {currencySymbol}{campaign.raisedAmount.toLocaleString()}
                        <span className="text-stone-400 font-normal"> raised</span>
                      </span>
                      <span className="text-stone-500 font-medium">
                        Goal: {currencySymbol}{campaign.targetAmount.toLocaleString()} ({percent}%)
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenDonate(campaign.title)}
                      className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>Donate to this Campaign</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OUR CORE PROGRAMS (WHAT WE DO) */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Pillars of Dignity
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Comprehensive Humanitarian Programs
            </h2>
            <p className="text-stone-600 text-sm">
              We provide sustainable interventions that move communities from acute vulnerability to self-reliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog) => {
              const Icon =
                prog.iconName === 'UtensilsCrossed'
                  ? UtensilsCrossed
                  : prog.iconName === 'Droplets'
                  ? Droplets
                  : prog.iconName === 'GraduationCap'
                  ? GraduationCap
                  : prog.iconName === 'HeartPulse'
                  ? HeartPulse
                  : prog.iconName === 'ShieldAlert'
                  ? ShieldAlert
                  : HandCoins;

              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:border-emerald-800/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {prog.tagline}
                    </p>

                    <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <span className="text-[11px] text-stone-500 block uppercase font-medium">
                        {prog.stats.label}
                      </span>
                      <span className="text-base font-serif font-bold text-emerald-900">
                        {prog.stats.value}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('programs')}
                      className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Learn Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenDonate(prog.title)}
                      className="text-xs font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                    >
                      Support Program
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 100% DONATION POLICY & FINANCIAL TRANSPARENCY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-emerald-900 shadow-xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Sacred Trust (Amanah)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Our 100% Zakat Policy & Transparent Financial Model
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                At ALMADAD TRUST, we operate under a strict 100% Zakat policy. Every single penny of your Zakat donation goes directly to impoverished and verified beneficiaries.
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                All overheads, banking fees, and logistics are fully covered by institutional gift aid reclaims and non-Zakat corporate sponsorships. We publish fully audited annual financial statements for total public accountability.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-white text-emerald-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  View Audited Financials
                </button>
                <button
                  onClick={onOpenZakatCalc}
                  className="border border-amber-400 text-amber-400 hover:bg-amber-400/10 font-semibold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Calculate Your Zakat
                </button>
              </div>
            </div>

            {/* Financial Split Visual Card */}
            <div className="lg:col-span-5 bg-emerald-900/80 backdrop-blur-md rounded-2xl p-6 border border-emerald-800/80 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Annual Fund Allocation Breakdown
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Direct Field Aid & Community Relief</span>
                    <span className="text-amber-400 font-bold">88%</span>
                  </div>
                  <div className="w-full bg-emerald-950 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Emergency Surge Relief Reserve</span>
                    <span className="text-emerald-300 font-bold">8%</span>
                  </div>
                  <div className="w-full bg-emerald-950 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full w-[8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Governance & Auditing (Gift Aid Funded)</span>
                    <span className="text-stone-300 font-bold">4%</span>
                  </div>
                  <div className="w-full bg-emerald-950 rounded-full h-2">
                    <div className="bg-stone-400 h-2 rounded-full w-[4%]" />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-800 text-[11px] text-stone-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Independently audited by chartered public accounting standards.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FRONTLINE DISPATCHES / LATEST FIELD STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
              Field Reports
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Latest News & Humanitarian Dispatches
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Real stories of dignity, resilience, and hope made possible by donors like you.
            </p>
          </div>
          <button
            onClick={() => onNavigate('news')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM URGENT CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 border border-stone-800 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold max-w-2xl mx-auto text-balance">
            Your Support Can Save a Family From Despair Today
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether it is clean drinking water for a village, monthly food for a struggling family, or emergency medical aid, your kindness makes an eternal impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenDonate()}
              className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-base cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>DONATE NOW</span>
            </button>
            <button
              onClick={() => onNavigate('volunteer')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer text-sm"
            >
              Volunteer With ALMADAD TRUST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
