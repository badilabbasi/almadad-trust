import React, { useState } from 'react';
import { PageId, Currency } from '../types';
import {
  Heart,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Calculator,
  Building,
  CreditCard,
  Copy,
  Check,
} from 'lucide-react';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  onOpenZakatCalc: () => void;
  currency: Currency;
}

export const DonatePage: React.FC<DonatePageProps> = ({
  onNavigate,
  onOpenDonate,
  onOpenZakatCalc,
  currency,
}) => {
  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';
  const [copiedBank, setCopiedBank] = useState(false);

  const copyBankDetails = () => {
    navigator.clipboard.writeText(
      'ALMADAD TRUST\nBank: Barclays Bank UK PLC\nSort Code: 20-04-18\nAccount: 83920145\nIBAN: GB82 BARC 2004 1883 9201 45'
    );
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const givingOptions = [
    {
      title: 'Where Most Needed (General Humanitarian)',
      desc: 'Enables our rapid deployment teams to respond to sudden emergencies, floods, hunger crises, and critical medical needs.',
      suggested: [30, 60, 120, 300],
    },
    {
      title: '100% Zakat Fund',
      desc: '100% of your Zakat goes directly into the hands of eligible, verified beneficiaries with zero administrative deductions.',
      suggested: [100, 250, 500, 1000],
    },
    {
      title: 'Ramadan 2026 Food Baskets',
      desc: 'Provide comprehensive 50kg dry ration baskets providing nutritious Suhoor and Iftar meals for a family for a month.',
      suggested: [50, 100, 150, 300],
    },
    {
      title: 'Clean Water Hand Pump / Solar Well',
      desc: 'Install an engraved, durable community water pump providing fresh safe water to hundreds of villagers daily.',
      suggested: [180, 360, 720, 1400],
    },
    {
      title: 'Guardian Angel: Orphan Sponsorship',
      desc: 'Sponsor an orphaned child with comprehensive education, daily nutrition, clothing, and preventative healthcare.',
      suggested: [35, 70, 210, 420],
    },
    {
      title: 'Emergency Medical & Trauma Clinic',
      desc: 'Fund doctor consultations, life-saving medicines, maternal health checks, and minor surgeries in isolated zones.',
      suggested: [25, 50, 100, 250],
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Online Giving Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Give with Complete Trust, Dignity & Certainty
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Every donation to ALMADAD TRUST directly relieves hardship. We guarantee our strict 100% Zakat Policy, HMRC Gift Aid uplift, and rapid frontline delivery.
          </p>
        </div>
      </section>

      {/* Direct Giving Options Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
              Select Your Humanitarian Cause
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Where Would You Like Your Charity to Go?
            </h2>
          </div>
          <button
            onClick={onOpenZakatCalc}
            className="flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Open Zakat Calculator</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {givingOptions.map((opt, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6 hover:border-emerald-800/40 transition-all"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                  {opt.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {opt.desc}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block mb-2">
                    Popular Giving Amounts:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {opt.suggested.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => onOpenDonate(opt.title)}
                        className="py-2 px-1 text-center font-bold text-xs bg-stone-50 hover:bg-emerald-50 hover:text-emerald-900 border border-stone-200 rounded-lg transition-colors cursor-pointer"
                      >
                        {currencySymbol}{amt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenDonate(opt.title)}
                className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to this Cause</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Aid & 100% Policy Reassurance Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gift Aid Explained */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-serif font-bold text-lg">
              <CheckCircle className="w-5 h-5 text-emerald-700" />
              <span>UK Gift Aid: Add 25% to Your Gift for Free</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              If you are a UK income taxpayer, HM Revenue & Customs will contribute an extra 25p for every £1 you give. For example, a £100 donation automatically becomes £125 at no extra charge to you!
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Importantly, Gift Aid reclaims allow ALMADAD TRUST to cover 100% of its administrative and banking expenses, allowing us to keep our strict 100% Zakat Policy alive.
            </p>
          </div>

          {/* 100% Zakat Guarantee */}
          <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-emerald-900">
            <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-lg">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Strict 100% Zakat Guarantee</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Your Zakat is a sacred duty. We guarantee that every single penny donated as Zakat is distributed exclusively to eligible recipients (Mustahiqeen) as defined by Islamic jurisprudence.
            </p>
            <p className="text-xs text-stone-300 leading-relaxed">
              Zero percent of your Zakat funds marketing campaigns, rent, or staff salaries.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Bank Wire Details for Large Donors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-emerald-800" />
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Direct Bank Wire & Electronic Transfer
                </h3>
                <p className="text-xs text-stone-500">
                  Preferred method for large gifts, corporate matching, and international wire transfers.
                </p>
              </div>
            </div>
            <button
              onClick={copyBankDetails}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer self-start sm:self-auto"
            >
              {copiedBank ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
              <span>{copiedBank ? 'Details Copied!' : 'Copy Bank Details'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block">Bank Name:</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">Barclays Bank UK PLC</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block">Account Name:</span>
              <span className="font-bold text-stone-900 text-sm mt-0.5 block">ALMADAD TRUST</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block">Sort Code & Account:</span>
              <span className="font-mono font-bold text-stone-900 text-sm mt-0.5 block">20-04-18 / 83920145</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <span className="text-stone-500 block">International IBAN:</span>
              <span className="font-mono font-bold text-stone-900 text-xs mt-0.5 block truncate">GB82 BARC 2004 1883 9201 45</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-500 italic">
            * Please include your Full Name or Cause (e.g. &apos;Zakat&apos;, &apos;Water&apos;, &apos;Food&apos;) as the bank payment reference, and email <span className="font-semibold text-stone-700">donorcare@almadadtrust.org</span> with your transfer receipt so we can issue your official tax receipt.
          </p>
        </div>
      </section>
    </div>
  );
};
