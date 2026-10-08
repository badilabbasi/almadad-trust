import React, { useState } from 'react';
import { PageId } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenDonate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('General Inquiries & Support');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const offices = [
    {
      city: 'London International HQ (UK)',
      address: '142 Whitechapel High Street, London E1 7PT, United Kingdom',
      phone: '+44 (0) 20 7946 0912 / +44 (0) 800 123 4567',
      email: 'london@almadadtrust.org',
      hours: 'Mon – Fri: 09:00 – 17:30 GMT',
    },
    {
      city: 'Midlands Operations & Logistics',
      address: '88 Stratford Road, Sparkhill, Birmingham B11 1AN, United Kingdom',
      phone: '+44 (0) 121 496 0821',
      email: 'midlands@almadadtrust.org',
      hours: 'Mon – Sat: 09:30 – 17:00 GMT',
    },
    {
      city: 'South Asia Regional Coordination Hub',
      address: 'Sector F-7/2, Margalla Road, Islamabad, Pakistan',
      phone: '+92 51 843 9201',
      email: 'southasia@almadadtrust.org',
      hours: 'Mon – Fri: 08:30 – 16:30 PKT',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Contact ALMADAD TRUST
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Have questions regarding your donation, Gift Aid, Zakat calculation, or field partnerships? Our dedicated donor care team is here to assist you.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800">
            Global Offices
          </span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Our Headquarters & Regional Field Hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((off, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Office 0{i + 1}
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900">{off.city}</h3>
                <div className="space-y-2 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{off.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{off.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>{off.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
              Send a Direct Message
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              How Can We Help You Today?
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Please route your message to the appropriate department for prompt resolution.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-emerald-950">
                Message Dispatched Successfully
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                Thank you, <strong className="text-emerald-950">{name}</strong>. Your message regarding &ldquo;{subject || 'General Assistance'}&rdquo; has been routed to our <strong className="text-emerald-950">{department}</strong> team. A confirmation receipt has been sent to <strong className="text-emerald-950">{email}</strong>.
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
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Khan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="fatima@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Department Routing *</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="General Inquiries & Support">General Inquiries & Support</option>
                    <option value="Donor Care & Tax Receipts">Donor Care & Official Receipts</option>
                    <option value="Zakat Consultation & Advisory">Zakat & Shariah Compliance Advisory</option>
                    <option value="Volunteering & Community Events">Volunteering & Community Events</option>
                    <option value="Media, Press & Corporate CSR">Media, Press & Corporate CSR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Subject / Reference *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Donation receipt inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can our donor care team assist you today?"
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
                <span>Send Message to ALMADAD TRUST</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
