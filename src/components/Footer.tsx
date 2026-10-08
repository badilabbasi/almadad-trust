import React, { useState } from 'react';
import { PageId } from '../types';
import { Heart, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  onOpenZakatCalc: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonate, onOpenZakatCalc }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const nav = (p: PageId) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Newsletter & Fast Call to Action Ribbon */}
        <div className="bg-emerald-950/80 border border-emerald-900/60 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Stay Connected With Frontline Dispatches</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Receive verified updates directly from our aid missions
            </h3>
            <p className="text-stone-300 text-sm">
              Join over 45,000 global supporters receiving our quarterly transparency reports, emergency alerts, and field impact stories.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2.5">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-900/80 text-emerald-200 px-5 py-3 rounded-xl border border-emerald-700 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! You are now subscribed to verified field reports.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-stone-900/90 border border-stone-700 text-white placeholder-stone-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-80"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-stone-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400 border border-emerald-700">
                <Heart className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                ALMADAD TRUST
              </span>
            </div>
            <p className="text-amber-400/90 text-sm font-serif italic">
              “Together We Can Make a Difference.”
            </p>
            <p className="text-stone-400 text-sm leading-relaxed pr-4">
              ALMADAD TRUST is an international humanitarian charity dedicated to alleviating suffering and restoring dignity through sustainable food assistance, clean water boreholes, education, healthcare, and emergency response.
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>ALMADAD TRUST International HQ, 142 Whitechapel High Street, London E1 7PT, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Emergency Hotline: +44 (0) 20 7946 0912 / +44 (0) 800 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <span>info@almadadtrust.org · donorcare@almadadtrust.org</span>
              </div>
            </div>
          </div>

          {/* Col 2: What We Do */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
              Our Programs & Projects
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('programs')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Food Assistance & Nutrition
                </button>
              </li>
              <li>
                <button onClick={() => nav('programs')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Clean Water Wells (WASH)
                </button>
              </li>
              <li>
                <button onClick={() => nav('programs')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Education & Orphan Sponsorship
                </button>
              </li>
              <li>
                <button onClick={() => nav('programs')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Healthcare & Mobile Clinics
                </button>
              </li>
              <li>
                <button onClick={() => nav('programs')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Emergency Disaster Relief
                </button>
              </li>
              <li>
                <button onClick={() => nav('campaigns')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Ramadan & Qurbani Appeals
                </button>
              </li>
              <li>
                <button onClick={() => nav('projects')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  All Active Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
              Get Involved & Give
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onOpenDonate()} className="text-amber-400 hover:text-amber-300 font-medium transition-colors cursor-pointer text-left">
                  Donate Online Now
                </button>
              </li>
              <li>
                <button onClick={onOpenZakatCalc} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Calculate Your Zakat
                </button>
              </li>
              <li>
                <button onClick={() => nav('volunteer')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button onClick={() => nav('partner')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Become a Partner (CSR / NGO)
                </button>
              </li>
              <li>
                <button onClick={() => nav('impact')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Impact & Field Metrics
                </button>
              </li>
              <li>
                <button onClick={() => nav('gallery')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Field Photo & Video Gallery
                </button>
              </li>
              <li>
                <button onClick={() => nav('news')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  News & Dispatch Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
              Transparency & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('about')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  About Our Organization
                </button>
              </li>
              <li>
                <button onClick={() => nav('contact')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Contact Us & Offices
                </button>
              </li>
              <li>
                <button onClick={() => nav('faq')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => nav('donation-terms')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Donation Terms & Refunds
                </button>
              </li>
              <li>
                <button onClick={() => nav('privacy')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Privacy & Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => nav('terms')} className="text-stone-300 hover:text-white transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>© {new Date().getFullYear()} ALMADAD TRUST. All Rights Reserved.</span>
            <span>·</span>
            <span>UK Charity Commission Reg. #1192843</span>
            <span>·</span>
            <span>100% Zakat Policy</span>
            <span>·</span>
            <span>HMRC Gift Aid Enrolled</span>
          </div>

          <div className="flex items-center gap-3 text-stone-400">
            <span className="text-[11px] text-stone-500">Secure 256-Bit SSL Encrypted Giving</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
