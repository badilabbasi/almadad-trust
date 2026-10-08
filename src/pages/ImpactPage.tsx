import React, { useState } from 'react';
import { PageId } from '../types';
import { TRUST_STATS, IMAGES } from '../data/mockData';
import {
  Heart,
  Droplets,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Gaza & Palestine');

  const countryImpacts: Record<
    string,
    { meals: string; water: string; healthcare: string; education: string; summary: string }
  > = {
    'Gaza & Palestine': {
      meals: '340,000+ Hot Meals & Ration Packs',
      water: '2.8 Million Litres Potable Water Trucked',
      healthcare: '24,000 Emergency Wound & Trauma Treatments',
      education: '3,200 Children in Psycho-Social Learning Hubs',
      summary: 'Operating daily humanitarian kitchens, mobile clean water trucking stations, and trauma care medical tents for displaced families.',
    },
    Pakistan: {
      meals: '480,000+ Family Food Parcels',
      water: '680 Deep Solar Water Tube-Wells',
      healthcare: '35,000 Eye Checkups & Free Cataract Surgeries',
      education: '18,500 Orphans & Vulnerable Schoolchildren',
      summary: 'Leading permanent clean water access across arid desert zones of Thar and operating holistic schools for orphans in flood-affected districts.',
    },
    Yemen: {
      meals: '290,000+ Monthly Bread & Food Hampers',
      water: '190 Village Rainwater Reservoirs & Pumps',
      healthcare: '19,500 Malnutrition Clinic Consultations',
      education: '4,100 Scholastic Kits & Uniforms',
      summary: 'Targeting severe acute malnutrition in toddlers and supplying community bakeries that feed thousands of displaced families daily.',
    },
    'East Africa (Kenya & Somalia)': {
      meals: '185,000+ Emergency Drought Food Packs',
      water: '410 Deep Aquifer Boreholes Built',
      healthcare: '12,000 Pastoralist Medical Consults',
      education: '6,700 Primary Students in New Classrooms',
      summary: 'Building high-capacity deep solar boreholes that supply clean water to pastoralist communities and livestock herds during severe droughts.',
    },
  };

  const activeData = countryImpacts[selectedCountry] || countryImpacts['Gaza & Palestine'];

  const caseStudies = [
    {
      title: 'Restoring Light to Grandmother Zainab (Age 68)',
      location: 'Rural Sindh, Pakistan',
      sector: 'Healthcare & Eye Care',
      story: 'Zainab had lived in near-total darkness for four years due to bilateral cataracts. Her family could not afford the £45 surgery. Through our Mobile Eye Care Camp, Dr. Mansoor performed a 20-minute phacoemulsification surgery with zero cost to the family.',
      outcome: 'Zainab saw her grandchildren’s faces for the first time in four years and can now walk to the village prayer hall independently.',
      image: IMAGES.medical,
    },
    {
      title: 'Safe Clean Water Transforms the Village of Wajir',
      location: 'Northern Kenya',
      sector: 'Clean Water (WASH)',
      story: 'Before ALMADAD TRUST commissioned the solar submersible pump, young Amina (12) walked four miles every morning before dawn to collect stagnant, dirty water. Waterborne diarrhea was endemic throughout the village.',
      outcome: 'Amina is now top of her class in Grade 6. Typhoid rates in the community dropped by over 80% within six months of installation.',
      image: IMAGES.water,
    },
    {
      title: 'Guardian Angel Orphan Support: Young Tariq’s Dream',
      location: 'Syrian Border Settlement',
      sector: 'Education & Orphan Care',
      story: 'After losing his father, 9-year-old Tariq was at risk of working in scrap collection. Our Guardian Angel programme provided his mother with a monthly stipend, school books, uniform, and nutrition.',
      outcome: 'Tariq is flourishing in mathematics and dreams of becoming an architect to help rebuild damaged communities.',
      image: IMAGES.education,
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Verified Accountability</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Our Human Impact & Real World Outcomes
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Every donation is transformed into dignity, nourishment, and sustainable self-reliance. Explore verified metrics across our frontline missions.
          </p>
        </div>
      </section>

      {/* Global Impact Summary Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-100 text-center">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0 md:px-4 space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 block">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-emerald-800 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Regional Footprint Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            Country By Country Data
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Field Impact Explorer
          </h2>
          <p className="text-stone-600 text-sm">
            Select a region below to review audited outputs delivered directly by our ground teams.
          </p>
        </div>

        {/* Region buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Object.keys(countryImpacts).map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedCountry === c
                  ? 'bg-emerald-900 text-white border-emerald-950 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Selected Country Data Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Operations in {selectedCountry}
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {activeData.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
              <UtensilsCrossed className="w-5 h-5 text-amber-600" />
              <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Food Security</span>
              <p className="text-lg font-serif font-bold text-stone-900">{activeData.meals}</p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
              <Droplets className="w-5 h-5 text-blue-600" />
              <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Clean Water (WASH)</span>
              <p className="text-lg font-serif font-bold text-stone-900">{activeData.water}</p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
              <HeartPulse className="w-5 h-5 text-red-600" />
              <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Healthcare Access</span>
              <p className="text-lg font-serif font-bold text-stone-900">{activeData.healthcare}</p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-2">
              <GraduationCap className="w-5 h-5 text-emerald-700" />
              <span className="text-xs text-stone-500 uppercase font-bold tracking-wider block">Education & Orphans</span>
              <p className="text-lg font-serif font-bold text-stone-900">{activeData.education}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Stories / Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-1.5 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
            Real Lives Changed
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Frontline Case Studies
          </h2>
          <p className="text-stone-600 text-sm">
            Behind every number is a human being with a story, dignity, and dreams for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span>{cs.location}</span>
                    <span className="text-emerald-800 font-semibold">{cs.sector}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {cs.story}
                  </p>
                  <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-xs text-emerald-950 font-medium">
                    <strong className="block font-semibold mb-0.5">Verified Outcome:</strong>
                    {cs.outcome}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenDonate()}
                  className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Help Another Family Like This</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
