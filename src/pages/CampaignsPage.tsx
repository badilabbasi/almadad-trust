import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { CAMPAIGNS } from '../data/mockData';
import { Heart, MapPin, Users, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface CampaignsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  currency: Currency;
}

export const CampaignsPage: React.FC<CampaignsPageProps> = ({ onNavigate, onOpenDonate, currency }) => {
  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Emergency', 'Ramadan', 'Water', 'Orphans', 'Health'];

  const filtered = CAMPAIGNS.filter((c) => {
    if (selectedCategory === 'All') return true;
    return c.category === selectedCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Live Appeals & Humanitarian Drives</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Frontline Emergency Appeals & Campaigns
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            When crisis strikes, our emergency logistics mobilize immediately. Help us deliver lifesaving survival rations, warm blankets, and medical care to vulnerable people.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-200">
          <span className="text-xs uppercase font-bold tracking-wider text-stone-500 mr-2 shrink-0">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((campaign) => {
            const percent = Math.min(100, Math.round((campaign.raisedAmount / campaign.targetAmount) * 100));
            return (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {campaign.urgent && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Urgent Appeal
                      </span>
                    )}
                    {campaign.zakatEligible && (
                      <span className="absolute top-3 right-3 bg-emerald-900/90 text-amber-300 text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                        100% Zakat
                      </span>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 truncate max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{campaign.location}</span>
                      </span>
                      <span className="shrink-0">{campaign.category}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                      {campaign.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {campaign.subtitle}
                    </p>

                    {/* Impact Note Banner */}
                    <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-950 font-medium">
                      {campaign.impactNote}
                    </div>

                    {/* Progress Bar & Financials */}
                    <div className="space-y-2 pt-2">
                      <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-emerald-700 h-2.5 rounded-full"
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

                    {/* Metadata indicators */}
                    <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-stone-400" />
                        {campaign.donorsCount.toLocaleString()} Donors
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {campaign.daysRemaining} Days Left
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenDonate(campaign.title)}
                    className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Donate to this Appeal</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
