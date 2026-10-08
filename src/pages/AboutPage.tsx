import React from 'react';
import { PageId } from '../types';
import { IMAGES, TRUST_STATS } from '../data/mockData';
import {
  Heart,
  Globe2,
  FileText,
  Download,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDonate }) => {
  const leadership = [
    {
      name: 'Dr. Tariq Al-Hussaini',
      role: 'Chair of the Board of Trustees',
      bio: 'Former senior physician and humanitarian logistics expert with over 22 years directing emergency relief initiatives across South Asia and the Levant.',
    },
    {
      name: 'Amina Mansour, MSc',
      role: 'Chief Executive Officer',
      bio: 'Specialist in sustainable international development and WASH infrastructure. Oversees field operations across 14 sovereign jurisdictions.',
    },
    {
      name: 'Farooq Rehman, FCA',
      role: 'Director of Finance & Governance',
      bio: 'Fellow Chartered Accountant ensuring strict 100% Zakat segregation, Gift Aid compliance, and transparent annual independent auditing.',
    },
    {
      name: 'Shaykh Dr. Ismail Nadwi',
      role: 'Head of Shariah Advisory Board',
      bio: 'Renowned scholar in Islamic jurisprudence guiding our 100% Zakat distribution guidelines and beneficiary verification protocols.',
    },
  ];

  const operatingCountries = [
    { name: 'Palestine (Gaza & West Bank)', focus: 'Emergency Food, Water Trucking, Trauma Aid' },
    { name: 'Pakistan', focus: 'Solar Water Wells, Orphan Care, Flood Recovery' },
    { name: 'Yemen', focus: 'Malnutrition Clinics, Bread Distribution, Clean Water' },
    { name: 'Syrian Refugee Hubs (Lebanon/Jordan)', focus: 'Winterisation, Education, Family Shelters' },
    { name: 'Somalia & Horn of Africa', focus: 'Drought Relief, Mobile Health Vans, Boreholes' },
    { name: 'Kenya', focus: 'Deep Aquifer Wells, School Classrooms' },
    { name: 'Bangladesh & Rohingya Camps', focus: 'Water Filtration, Maternal Healthcare' },
    { name: 'Afghanistan', focus: 'Winter Survival Packs, Food Rations' },
    { name: 'United Kingdom (Domestic)', focus: 'Food Banks, Winter Warm Hubs, Rough Sleeper Kits' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>About ALMADAD TRUST</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Founded on Compassion. Driven by Sacred Trust.
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            “Together We Can Make a Difference.” Dedicated to uplifting vulnerable communities through emergency relief, food security, education, healthcare, and clean water.
          </p>
        </div>
      </section>

      {/* Mission & Founding Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Our Origin & Purpose
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 leading-tight">
              A Legacy of Restoring Dignity to Destitute Families
            </h2>
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                <strong>ALMADAD TRUST</strong> was founded by a committed collective of humanitarian doctors, civil engineers, and community elders who witnessed firsthand the heartbreaking vulnerability of families trapped in protracted crises without basic necessities.
              </p>
              <p>
                Our mission is uncompromising: to alleviate suffering and empower the vulnerable through sustainable food assistance, high-spec clean water boreholes, dignified orphan care, preventative healthcare, and agile 48-hour disaster relief.
              </p>
              <p>
                We do not believe in superficial band-aids. Every project we commission is engineered for long-term self-sufficiency, operated in direct partnership with local village committees, and subjected to rigorous independent audits.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenDonate()}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center gap-2 shadow"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Support Our Mission</span>
              </button>
              <button
                onClick={() => onNavigate('impact')}
                className="border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Explore Impact Data
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100 aspect-[4/3]">
              <img
                src={IMAGES.hero}
                alt="ALMADAD TRUST volunteers distributing food aid"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs space-y-1">
                  <p className="font-serif italic text-amber-300">
                    “Whoever saves one life, it is as if he had saved all of humanity.”
                  </p>
                  <p className="text-stone-300 text-[11px]">— Quran (Surah Al-Ma’idah 5:32)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="bg-stone-100/70 border-y border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Our Four Foundational Values
            </h2>
            <p className="text-stone-600 text-sm">
              These ethical pillars guide every project we commission and every penny we disburse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-2xl font-serif font-bold text-emerald-900 block">01</span>
              <h3 className="text-lg font-serif font-bold text-stone-900">Rahmah (Compassion)</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Serving every human being regardless of creed, race, or ethnicity with unconditional kindness and warmth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-2xl font-serif font-bold text-emerald-900 block">02</span>
              <h3 className="text-lg font-serif font-bold text-stone-900">Amanah (Sacred Trust)</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Upholding 100% Zakat integrity and complete fiduciary responsibility with strict segregation of charitable funds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-2xl font-serif font-bold text-emerald-900 block">03</span>
              <h3 className="text-lg font-serif font-bold text-stone-900">Karamah (Human Dignity)</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Delivering humanitarian assistance respectfully without degrading recipients, preserving human honor at all times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <span className="text-2xl font-serif font-bold text-emerald-900 block">04</span>
              <h3 className="text-lg font-serif font-bold text-stone-900">Ihsan (Excellence)</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Demanding top engineering specs, qualified medical personnel, and independent audit oversight for lasting durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Field Operations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
            <Globe2 className="w-4 h-4" />
            <span>Global Reach</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Active in 14 Countries Across 4 Continents
          </h2>
          <p className="text-stone-600 text-sm">
            Our established regional field offices and vetted NGO hubs allow swift, safe deployment across frontline zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operatingCountries.map((c, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
              <span className="text-xs font-semibold uppercase text-emerald-800 tracking-wider">
                Region {i + 1}
              </span>
              <h4 className="text-base font-serif font-bold text-stone-900">{c.name}</h4>
              <p className="text-xs text-stone-500">{c.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Trustees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            Fiduciary Stewardship
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Board of Trustees & Executive Governance
          </h2>
          <p className="text-stone-600 text-sm">
            Distinguished professionals dedicating their skills to ensure integrity, accountability, and Shariah compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((l, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-serif font-bold text-lg">
                {l.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-stone-900">{l.name}</h4>
                <p className="text-xs text-emerald-800 font-semibold">{l.role}</p>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audited Financials & Transparency Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-800 pb-8">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Audited Financial Governance
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Download Annual Reports & Audit Filings
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
                We believe in total radical transparency. Our full statutory accounts are submitted annually to the UK Charity Commission and published publicly.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-amber-400 shrink-0" />
              <div className="text-xs text-stone-300">
                <p className="font-bold text-white">Chartered Audit Standard</p>
                <p>Clean Unqualified Audit Opinion</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs font-semibold text-white">Annual Report 2025</p>
                  <p className="text-[11px] text-stone-400">PDF · 48 Pages · Audited</p>
                </div>
              </div>
              <button
                onClick={() => alert('Downloading official ALMADAD TRUST 2025 Annual Financial Report (PDF)...')}
                className="p-2 hover:bg-stone-700 rounded-lg text-amber-400 cursor-pointer"
                title="Download report"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs font-semibold text-white">100% Zakat Policy Certificate</p>
                  <p className="text-[11px] text-stone-400">PDF · Shariah Board Attestation</p>
                </div>
              </div>
              <button
                onClick={() => alert('Downloading Shariah Board 100% Zakat Compliance Certificate (PDF)...')}
                className="p-2 hover:bg-stone-700 rounded-lg text-amber-400 cursor-pointer"
                title="Download report"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs font-semibold text-white">Annual Report 2024</p>
                  <p className="text-[11px] text-stone-400">PDF · 42 Pages · Audited</p>
                </div>
              </div>
              <button
                onClick={() => alert('Downloading official ALMADAD TRUST 2024 Annual Financial Report (PDF)...')}
                className="p-2 hover:bg-stone-700 rounded-lg text-amber-400 cursor-pointer"
                title="Download report"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
