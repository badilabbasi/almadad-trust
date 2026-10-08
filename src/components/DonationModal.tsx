import React, { useState, useEffect } from 'react';
import { Currency } from '../types';
import { Heart, X, CheckCircle, ShieldCheck, Printer, ArrowRight, CreditCard } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCause?: string;
  currency: Currency;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  initialCause,
  currency,
}) => {
  const [frequency, setFrequency] = useState<'one-off' | 'monthly'>('one-off');
  const [cause, setCause] = useState<string>(initialCause || 'Where Most Needed (General Relief)');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isZakat, setIsZakat] = useState<boolean>(false);
  const [giftAid, setGiftAid] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank'>('card');

  // Form details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<{
    ref: string;
    date: string;
    amount: number;
    currency: Currency;
    cause: string;
    isZakat: boolean;
    giftAid: boolean;
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    if (initialCause) {
      setCause(initialCause);
      if (initialCause.toLowerCase().includes('zakat')) {
        setIsZakat(true);
      }
    }
  }, [initialCause]);

  if (!isOpen) return null;

  const currencySymbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '€';

  const presetAmounts = [25, 50, 100, 250];

  const getImpactMessage = (amt: number) => {
    if (amt <= 25) return 'Provides high-protein hot emergency meals for 10 vulnerable individuals.';
    if (amt <= 50) return 'Provides a 50kg family nutrition basket feeding a household of 6 for a full month.';
    if (amt <= 100) return 'Provides clean potable water, vital medicines, and pediatric care for 20 children.';
    if (amt <= 250) return 'Provides 6 months of school fees, uniform, learning tablet & meals for an orphan.';
    return 'Delivers transformative humanitarian relief directly to families facing critical hardship.';
  };

  const currentEffectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const giftAidAddition = giftAid ? (currentEffectiveAmount * 0.25).toFixed(2) : '0.00';
  const totalValueWithGiftAid = (currentEffectiveAmount * (giftAid ? 1.25 : 1)).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentEffectiveAmount <= 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'AMT-' + Math.floor(100000 + Math.random() * 900000);
      setReceipt({
        ref: generatedRef,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        amount: currentEffectiveAmount,
        currency,
        cause,
        isZakat,
        giftAid,
        name: name || 'Valued Donor',
        email: email || 'donor@example.com',
      });
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetModal = () => {
    setReceipt(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-emerald-900 text-white px-6 py-5 flex items-center justify-between border-b border-emerald-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400">
              <Heart className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                {receipt ? 'Donation Confirmation' : 'Donate to ALMADAD TRUST'}
              </h3>
              <p className="text-emerald-200 text-xs">
                100% Zakat Guarantee · UK Charity Commission No. 1192843
              </p>
            </div>
          </div>
          <button
            onClick={resetModal}
            aria-label="Close modal"
            className="text-stone-300 hover:text-white p-1 rounded-lg hover:bg-emerald-800/50 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {receipt ? (
          /* Receipt Screen */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900">
                May Allah (SWT) Bless Your Generosity!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Your donation has been recorded. An official receipt has been issued and sent to <span className="font-semibold text-stone-900">{receipt.email}</span>.
              </p>
            </div>

            {/* Receipt Card */}
            <div id="printable-receipt" className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Official Receipt Reference</span>
                  <p className="font-mono font-bold text-stone-900 text-base">{receipt.ref}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Date & Time</span>
                  <p className="text-stone-700 text-xs">{receipt.date}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-500">Beneficiary Cause:</span>
                  <p className="font-semibold text-stone-900 mt-0.5">{receipt.cause}</p>
                </div>
                <div>
                  <span className="text-stone-500">Donor Name:</span>
                  <p className="font-semibold text-stone-900 mt-0.5">{receipt.name}</p>
                </div>
                <div>
                  <span className="text-stone-500">Donation Classification:</span>
                  <p className="font-semibold text-emerald-800 mt-0.5">
                    {receipt.isZakat ? '100% Zakat Fund (Direct Aid)' : 'Sadaqah / General Humanitarian'}
                  </p>
                </div>
                <div>
                  <span className="text-stone-500">Gift Aid Status:</span>
                  <p className="font-semibold text-stone-900 mt-0.5">
                    {receipt.giftAid ? 'Claimed (+25% HMRC Reclaim)' : 'Not Claimed'}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-base">
                <span className="font-medium text-stone-700">Amount Received:</span>
                <span className="font-serif font-bold text-emerald-900 text-2xl">
                  {currencySymbol}{receipt.amount.toLocaleString()} {receipt.currency}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-stone-300 hover:bg-stone-50 rounded-xl text-stone-700 font-medium text-sm transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>
              <button
                onClick={resetModal}
                className="flex-1 py-3 px-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-medium text-sm transition-colors cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Donation Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Frequency Toggle */}
            <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
              <button
                type="button"
                onClick={() => setFrequency('one-off')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  frequency === 'one-off'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Give Once (One-Off)
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  frequency === 'monthly'
                    ? 'bg-white text-emerald-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Give Monthly (Ongoing Impact)
              </button>
            </div>

            {/* Cause Selector */}
            <div>
              <label htmlFor="donation-cause" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                Select Where Your Donation Goes
              </label>
              <select
                id="donation-cause"
                value={cause}
                onChange={(e) => {
                  setCause(e.target.value);
                  if (e.target.value.toLowerCase().includes('zakat')) {
                    setIsZakat(true);
                  }
                }}
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value="Where Most Needed (General Relief)">Where Most Needed (General Relief)</option>
                <option value="Gaza Urgent Food & Medical Lifeline">Gaza Urgent Food & Medical Lifeline</option>
                <option value="Ramadan Food Baskets 2026">Ramadan Food Baskets 2026</option>
                <option value="Thar & East Africa Solar Water Wells">Thar & East Africa Solar Water Wells</option>
                <option value="Guardian Angel: Orphan Sponsorship">Guardian Angel: Orphan Sponsorship</option>
                <option value="Mobile Health Clinics & Medicine">Mobile Health Clinics & Medicine</option>
                <option value="100% Zakat Fund">100% Zakat Fund (Direct to Beneficiaries)</option>
                <option value="Winter Warmth & Shelter Drive">Winter Warmth & Shelter Drive</option>
              </select>
            </div>

            {/* Preset Amount Grid */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                Choose Donation Amount ({currency})
              </label>
              <div className="grid grid-cols-4 gap-2.5 mb-3">
                {presetAmounts.map((amt) => {
                  const isSelected = !customAmount && amount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-2 rounded-xl text-center font-bold text-base transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-emerald-600/30'
                          : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {currencySymbol}{amt}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 font-bold">
                  {currencySymbol}
                </span>
                <input
                  type="number"
                  min="5"
                  step="1"
                  placeholder="Or enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              {/* Dynamic Impact Note */}
              <div className="mt-2.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 flex items-start gap-2">
                <Heart className="w-4 h-4 shrink-0 text-emerald-700 mt-0.5" />
                <span>{getImpactMessage(currentEffectiveAmount)}</span>
              </div>
            </div>

            {/* Zakat & Gift Aid Toggles */}
            <div className="space-y-3 pt-1 border-t border-stone-200 text-xs">
              <label className="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50/60 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isZakat}
                  onChange={(e) => setIsZakat(e.target.checked)}
                  className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <div>
                  <span className="font-semibold text-amber-950 block">This donation is my Zakat</span>
                  <span className="text-amber-800/90 text-[11px]">
                    We guarantee 100% distribution to verified eligible recipients with 0% administrative deduction.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-600 w-4 h-4 cursor-pointer"
                />
                <div>
                  <span className="font-semibold text-stone-900 block">
                    Boost your donation by 25% with UK Gift Aid
                  </span>
                  <span className="text-stone-600 text-[11px] block mt-0.5">
                    Reclaim 25p for every £1 you donate from HMRC at no extra cost to you. Adds{' '}
                    <strong className="text-emerald-800 font-semibold">{currencySymbol}{giftAidAddition}</strong>, making total impact{' '}
                    <strong className="text-emerald-800 font-semibold">{currencySymbol}{totalValueWithGiftAid}</strong>!
                  </span>
                </div>
              </label>
            </div>

            {/* Donor Information */}
            <div className="space-y-3 pt-1 border-t border-stone-200">
              <span className="block text-xs font-semibold uppercase tracking-wider text-stone-600">
                Donor Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address (for receipt) *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>
              {giftAid && (
                <input
                  type="text"
                  required
                  placeholder="Home Postcode / Zip (Required for Gift Aid verification) *"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              )}
            </div>

            {/* Payment Method Switcher */}
            <div className="space-y-3 pt-1 border-t border-stone-200">
              <span className="block text-xs font-semibold uppercase tracking-wider text-stone-600">
                Payment Method
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-900'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    paymentMethod === 'paypal'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-900'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span>PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    paymentMethod === 'bank'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-900'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span>Bank Wire</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-2.5 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <input
                    type="text"
                    required
                    maxLength={19}
                    placeholder="Card Number (e.g. 4532 •••• •••• ••••)"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                    <input
                      type="password"
                      required
                      maxLength={4}
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs space-y-1 text-stone-700">
                  <p className="font-semibold text-stone-900">Direct UK & International Bank Transfer:</p>
                  <p>Bank: <span className="font-mono font-medium">Barclays Bank UK PLC</span></p>
                  <p>Account Name: <span className="font-medium">ALMADAD TRUST</span></p>
                  <p>Sort Code: <span className="font-mono font-medium">20-04-18</span> · Account: <span className="font-mono font-medium">83920145</span></p>
                  <p>IBAN: <span className="font-mono font-medium">GB82 BARC 2004 1883 9201 45</span></p>
                </div>
              )}
            </div>

            {/* Submit Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || currentEffectiveAmount <= 0}
                className="w-full py-4 px-6 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin mr-2">⏳</span>
                ) : (
                  <ShieldCheck className="w-5 h-5 text-amber-200" />
                )}
                <span>
                  {isSubmitting
                    ? 'Processing Secure Donation...'
                    : `Complete ${frequency === 'monthly' ? 'Monthly' : ''} Donation of ${currencySymbol}${currentEffectiveAmount}`}
                </span>
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
              </button>
              <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>256-Bit SSL Encrypted · UK Registered Charity No. 1192843</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
