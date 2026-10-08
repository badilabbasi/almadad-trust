import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS } from '../data/mockData';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (cause?: string) => void;
  onOpenZakatCalc: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onOpenDonate, onOpenZakatCalc }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id]);

  const categories = ['All', '100% Policy', 'Zakat', 'Donations & Receipts', 'Gift Aid', 'Volunteering', 'General'];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filtered = FAQS.filter((f) => {
    const matchCat = selectedCat === 'All' || f.category === selectedCat;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            Answers to common questions regarding our 100% Zakat policy, tax receipts, Gift Aid claims, and field operations.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCat === cat
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-stone-50 border border-stone-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {filtered.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded-full bg-stone-100 text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-serif font-bold text-emerald-950">
              Still have a specific inquiry?
            </h4>
            <p className="text-xs text-emerald-800">
              Our donor care team is happy to discuss your charitable intentions or arrange a phone consultation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-emerald-900 hover:bg-emerald-950 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Contact Donor Care
          </button>
        </div>
      </section>
    </div>
  );
};
