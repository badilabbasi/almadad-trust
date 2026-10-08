import React, { useState } from 'react';
import { Currency } from '../types';
import { Calculator, X, Heart, Info, ArrowRight } from 'lucide-react';

interface ZakatCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDonateZakat: (amount: number) => void;
  currency: Currency;
}

export const ZakatCalculatorModal: React.FC<ZakatCalculatorModalProps> = ({
  isOpen,
  onClose,
  onDonateZakat,
  currency,
}) => {
  const [nisabStandard, setNisabStandard] = useState<'silver' | 'gold'>('silver');
  const [cash, setCash] = useState<string>('');
  const [goldSilver, setGoldSilver] = useState<string>('');
  const [investments, setInvestments] = useState<string>('');
  const [businessAssets, setBusinessAssets] = useState<string>('');
  const [moneyOwedToYou, setMoneyOwedToYou] = useState<string>('');
  const [shortTermDebts, setShortTermDebts] = useState<string>('');
  const [expensesDue, setExpensesDue] = useState<string>('');

  if (!isOpen) return null;

  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';

  // Benchmark Nisab thresholds in GBP, adjusted roughly for currency
  const multiplier = currency === 'USD' ? 1.3 : currency === 'EUR' ? 1.18 : 1.0;
  const silverNisab = Math.round(460 * multiplier);
  const goldNisab = Math.round(5100 * multiplier);
  const activeNisabThreshold = nisabStandard === 'silver' ? silverNisab : goldNisab;

  const numCash = parseFloat(cash) || 0;
  const numGoldSilver = parseFloat(goldSilver) || 0;
  const numInvestments = parseFloat(investments) || 0;
  const numBusinessAssets = parseFloat(businessAssets) || 0;
  const numOwed = parseFloat(moneyOwedToYou) || 0;

  const numDebts = parseFloat(shortTermDebts) || 0;
  const numExpenses = parseFloat(expensesDue) || 0;

  const totalAssets = numCash + numGoldSilver + numInvestments + numBusinessAssets + numOwed;
  const totalLiabilities = numDebts + numExpenses;
  const netZakatableWealth = Math.max(0, totalAssets - totalLiabilities);

  const isEligible = netZakatableWealth >= activeNisabThreshold;
  const zakatDue = isEligible ? Math.round(netZakatableWealth * 0.025 * 100) / 100 : 0;

  const handleApplyZakat = () => {
    if (zakatDue > 0) {
      onDonateZakat(zakatDue);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-emerald-900 text-white px-6 py-5 flex items-center justify-between border-b border-emerald-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                ALMADAD TRUST Zakat Calculator
              </h3>
              <p className="text-emerald-200 text-xs">
                100% Zakat Policy · Zero Admin Deduction · Shariah Compliant
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-stone-300 hover:text-white p-1 rounded-lg hover:bg-emerald-800/50 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Nisab Selector Notice */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-700" />
                Select Nisab Benchmark:
              </span>
              <div className="flex rounded-lg bg-stone-200/80 p-0.5">
                <button
                  type="button"
                  onClick={() => setNisabStandard('silver')}
                  className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    nisabStandard === 'silver' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
                  }`}
                >
                  Silver ({currencySymbol}{silverNisab})
                </button>
                <button
                  type="button"
                  onClick={() => setNisabStandard('gold')}
                  className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                    nisabStandard === 'gold' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
                  }`}
                >
                  Gold ({currencySymbol}{goldNisab})
                </button>
              </div>
            </div>
            <p className="text-stone-500 leading-relaxed">
              Most scholars recommend using the <strong>Silver Nisab</strong> threshold ({currencySymbol}{silverNisab}) as it allows more wealth to benefit impoverished and vulnerable people.
            </p>
          </div>

          {/* Section 1: Zakatable Assets */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-900 border-b border-emerald-100 pb-1">
              1. Your Zakatable Assets ({currency})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Cash in Bank & at Home</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Gold & Silver Jewellery Value</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={goldSilver}
                    onChange={(e) => setGoldSilver(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Stocks, Shares & ISAs (Accessible)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={investments}
                    onChange={(e) => setInvestments(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Business Stock / Resale Inventory</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={businessAssets}
                    onChange={(e) => setBusinessAssets(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-stone-700 font-medium mb-1">Money Lent to Others (Expected back)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={moneyOwedToYou}
                    onChange={(e) => setMoneyOwedToYou(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Deductible Liabilities */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-900 border-b border-amber-100 pb-1">
              2. Immediate Liabilities Due ({currency})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Immediate Debts Due Now</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={shortTermDebts}
                    onChange={(e) => setShortTermDebts(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Bills & Expenses Due This Month</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 font-medium">{currencySymbol}</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0.00"
                    value={expensesDue}
                    onChange={(e) => setExpensesDue(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Summary Card */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-300 pb-2 border-b border-emerald-900">
              <span>Total Assets: {currencySymbol}{totalAssets.toLocaleString()}</span>
              <span>Total Liabilities: -{currencySymbol}{totalLiabilities.toLocaleString()}</span>
              <span>Net Wealth: {currencySymbol}{netZakatableWealth.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                  Total Zakat Due (2.5%)
                </span>
                <span className="text-3xl font-serif font-bold text-white">
                  {currencySymbol}{zakatDue.toLocaleString()} {currency}
                </span>
              </div>
              <div className="text-right text-xs">
                {isEligible ? (
                  <span className="inline-block bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded font-medium">
                    Wealth Exceeds Nisab ({currencySymbol}{activeNisabThreshold})
                  </span>
                ) : (
                  <span className="inline-block bg-stone-800 text-stone-400 px-2.5 py-1 rounded font-medium">
                    Below Nisab ({currencySymbol}{activeNisabThreshold})
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleApplyZakat}
              disabled={zakatDue <= 0}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all cursor-pointer text-sm shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Pay Calculated Zakat ({currencySymbol}{zakatDue})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 border border-stone-300 hover:bg-stone-50 text-stone-700 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              Close Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
