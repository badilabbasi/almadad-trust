import React, { useState } from 'react';
import { PageId } from '../types';
import { PROGRAMS, IMAGES } from '../data/mockData';
import {
  Heart,
  Droplets,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  HandCoins,
  CheckCircle,
} from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(PROGRAMS[0].id);

  const activeProgram = PROGRAMS.find((p) => p.id === selectedProgramId) || PROGRAMS[0];

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'Droplets':
        return Droplets;
      case 'GraduationCap':
        return GraduationCap;
      case 'HeartPulse':
        return HeartPulse;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return HandCoins;
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>What We Do</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Sustainable Programs Restoring Human Dignity
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Every initiative at ALMADAD TRUST is planned for lasting impact. From deep aquifer water pumps to emergency trauma relief, discover our six core humanitarian pillars.
          </p>
        </div>
      </section>

      {/* Program Selector Tabs & Detail View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Horizontal Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200 scrollbar-none">
          {PROGRAMS.map((p) => {
            const Icon = getProgramIcon(p.iconName);
            const isSelected = p.id === selectedProgramId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProgramId(p.id)}
                className={`flex items-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-950 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-emerald-800'}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Program Showcase */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <span>{activeProgram.stats.label}: {activeProgram.stats.value}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                {activeProgram.title}
              </h2>

              <p className="text-base text-stone-700 font-serif italic border-l-2 border-amber-600 pl-4 py-1">
                {activeProgram.tagline}
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                {activeProgram.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500">
                  Key Operational Highlights
                </h4>
                {activeProgram.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenDonate(activeProgram.title)}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-2 shadow"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Support {activeProgram.title}</span>
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Browse Related Projects
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100 aspect-[4/3]">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Matrix Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            All Programs at a Glance
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Tailored Interventions for Every Crisis Stage
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog) => {
            const Icon = getProgramIcon(prog.iconName);
            return (
              <div
                key={prog.id}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-stone-900">{prog.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">{prog.description}</p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      setSelectedProgramId(prog.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="font-semibold text-emerald-800 hover:text-emerald-950 cursor-pointer"
                  >
                    View Specifications
                  </button>
                  <button
                    onClick={() => onOpenDonate(prog.title)}
                    className="font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                  >
                    Donate
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
