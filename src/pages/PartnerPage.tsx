import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Building2,
  Handshake,
  CheckCircle2,
  Send,
  ShieldCheck,
} from 'lucide-react';

interface PartnerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [partnerType, setPartnerType] = useState('Corporate CSR & Matching Gifts');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orgName && email) {
      setSubmitted(true);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const partnerTypes = [
    {
      title: 'Corporate CSR & Matched Giving',
      desc: 'Align your business values with measurable humanitarian impact. We provide comprehensive ESG reporting and employee volunteer opportunities.',
    },
    {
      title: 'Philanthropic Foundations & Trusts',
      desc: 'Co-finance major capital investments including deep solar water infrastructure, school builds, and maternal health centres.',
    },
    {
      title: 'Mosques, Faith Groups & Schools',
      desc: 'Host joint Friday appeals, seasonal Ramadan drives, Qurbani programs, and educational presentations for your congregation.',
    },
    {
      title: 'Humanitarian NGOs & Supply Chain',
      desc: 'Collaborate on frontline field logistics, joint medical convoys, and rapid emergency disaster deployments.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Institutional Collaboration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Partner With ALMADAD TRUST
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            We partner with forward-thinking corporations, grantmakers, mosques, and NGOs to scale high-impact humanitarian interventions worldwide.
          </p>
        </div>
      </section>

      {/* Partner Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            Partnership Streams
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Collaborative Avenues for Meaningful Change
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerTypes.map((pt, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-stone-900">{pt.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Partnership Inquiry Form
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Our Institutional Partnerships team will review your proposal and respond within one business day.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-950">
                Partnership Inquiry Submitted
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Thank you, <strong className="text-emerald-950">{contactName}</strong> representing <strong className="text-emerald-950">{orgName}</strong>. Our Head of Partnerships has been notified and will email you at <strong className="text-emerald-950">{email}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Organization / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Global Solutions"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Key Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Corporate Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="partnerships@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Partnership Category *</label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="Corporate CSR & Matching Gifts">Corporate CSR & Matched Giving</option>
                    <option value="Grantmaking Trust / Foundation">Grantmaking Trust / Foundation</option>
                    <option value="Mosque & Community Collaboration">Mosque & Community Collaboration</option>
                    <option value="NGO / Humanitarian Supplier">NGO / Humanitarian Co-Delivery</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Overview of Proposed Collaboration</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your organization, anticipated budget, target geography, or areas of mutual interest..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
