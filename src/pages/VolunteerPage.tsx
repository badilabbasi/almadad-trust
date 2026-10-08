import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Heart,
  Users,
  CheckCircle2,
  Send,
  Calendar,
  Sparkles,
  MapPin,
} from 'lucide-react';

interface VolunteerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const VolunteerPage: React.FC<VolunteerPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [roleInterest, setRoleInterest] = useState('Emergency Logistics & Warehouse');
  const [availability, setAvailability] = useState('Weekends');
  const [skills, setSkills] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email) {
      setSubmitted(true);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const roles = [
    {
      title: 'Emergency Aid Logistics & Food Packing',
      desc: 'Join our regional dispatch hubs in London, Birmingham, and Manchester to pack family food hampers and winter shelter kits.',
      commit: 'Flexible / Shift-based',
    },
    {
      title: 'Community Fundraising & Mosque Liaison',
      desc: 'Represent ALMADAD TRUST at local community halls, schools, Friday prayers, and Ramadan charity dinners.',
      commit: '2–4 hours/week',
    },
    {
      title: 'Frontline Medical & Disaster Deployments',
      desc: 'Accredited physicians, nurses, paramedics, and WASH engineers deployed on rotational short-term clinical missions.',
      commit: 'Mission-based (1–2 weeks)',
    },
    {
      title: 'Digital Storytelling, Social & Media',
      desc: 'Help amplify human stories through video editing, photography, translation, copywriting, and social advocacy.',
      commit: 'Remote / Flexible',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Join the Movement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Volunteer With ALMADAD TRUST
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            “The best of people are those that bring the most benefit to the rest of mankind.” Put your skills and passion into action to change lives.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunity Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            Ways to Help
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Discover Your Volunteer Role
          </h2>
          <p className="text-stone-600 text-sm">
            Whether you have two hours a month or two weeks for a field mission, your time makes a massive difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Track 0{i + 1}
                </span>
                <h3 className="text-base font-serif font-bold text-stone-900 leading-snug">
                  {r.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Commitment: {r.commit}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
              Apply in 2 Minutes
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Volunteer Registration Form
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Complete your details below and our National Volunteer Coordinator will be in touch within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-950">
                Application Received! Welcome to the Team.
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Thank you, <strong className="text-emerald-950">{fullName}</strong>. We have registered your application for <strong className="text-emerald-950">{roleInterest}</strong>. A member of our community team will email you at <strong className="text-emerald-950">{email}</strong> with your orientation invite.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer pt-2"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zayd Ibrahim"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="zayd@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+44 7911 123456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">City & Country *</label>
                  <input
                    type="text"
                    required
                    placeholder="London, UK"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Area of Interest *</label>
                  <select
                    value={roleInterest}
                    onChange={(e) => setRoleInterest(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Emergency Logistics & Warehouse">Emergency Logistics & Warehouse Food Packing</option>
                    <option value="Community & Mosque Ambassador">Community & Mosque Ambassador</option>
                    <option value="Medical & Health Professional">Medical & Health Professional Volunteer</option>
                    <option value="Digital Media, Video & Photo">Digital Media, Video & Photography</option>
                    <option value="Ramadan Campaign Volunteer Squad">Ramadan Campaign Volunteer Squad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Availability *</label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Weekends">Weekends Only</option>
                    <option value="Weekday Evenings">Weekday Evenings</option>
                    <option value="Full-time during Emergencies">Full-time during Emergencies</option>
                    <option value="Flexible / As Needed">Flexible / As Needed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Relevant Skills or Background</label>
                <textarea
                  rows={3}
                  placeholder="Share any languages you speak, driving licence, medical certification, or prior charity experience..."
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
