import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import { PROJECTS } from '../data/mockData';
import { Heart, MapPin, Users, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  currency: Currency;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenDonate, currency }) => {
  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';

  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const regions = ['All', 'Middle East', 'South Asia', 'Horn of Africa', 'Domestic / UK'];
  const sectors = ['All', 'Water Sanitation', 'Nutrition & Food', 'Healthcare', 'Education & Orphan Care', 'Emergency Shelter'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchRegion = selectedRegion === 'All' || p.region === selectedRegion;
    const matchSector = selectedSector === 'All' || p.sector === selectedSector;
    return matchRegion && matchSector;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Ground Operations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Active Humanitarian Projects Worldwide
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Every project has a transparent target budget, verified beneficiary count, and regular photo auditing updates. Choose a project to support directly.
          </p>
        </div>
      </section>

      {/* Filter Controls (Segmented buttons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
          {/* Region Tabs */}
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
              Filter by Region:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-emerald-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Sector Tabs */}
          <div className="space-y-1.5">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block">
              Filter by Sector:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedSector === sec
                      ? 'bg-emerald-900 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const percent = Math.min(100, Math.round((project.fundedBudget / project.totalBudget) * 100));
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span
                      className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow ${
                        project.status === 'Urgent Funding'
                          ? 'bg-red-600 text-white'
                          : project.status === 'Completed'
                          ? 'bg-stone-800 text-stone-200'
                          : 'bg-emerald-800 text-white'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        {project.region}
                      </span>
                      <span>{project.sector}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      {project.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-emerald-900 font-semibold bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                      <Users className="w-4 h-4 shrink-0 text-emerald-700" />
                      <span>Direct Beneficiaries: {project.beneficiaries}</span>
                    </div>

                    {project.costPerUnit && (
                      <p className="text-xs text-stone-500 font-medium">
                        Unit Benchmark: <span className="text-stone-900 font-semibold">{project.costPerUnit}</span>
                      </p>
                    )}

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-emerald-700 h-2 rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-stone-600">
                        <span className="font-bold text-stone-900">
                          {currencySymbol}{project.fundedBudget.toLocaleString()} raised
                        </span>
                        <span>
                          Goal: {currencySymbol}{project.totalBudget.toLocaleString()} ({percent}%)
                        </span>
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="space-y-1 pt-2 border-t border-stone-100 text-[11px] text-stone-600">
                      {project.outcomes.map((out, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenDonate(project.title)}
                    className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Support This Project</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
            <p className="text-stone-500 text-sm">No projects currently matching the selected criteria.</p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedSector('All');
              }}
              className="text-emerald-800 text-xs font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
