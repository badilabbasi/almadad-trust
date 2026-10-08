import React, { useState } from 'react';
import { PageId } from '../types';
import { ShieldCheck, FileText, CheckCircle, Scale } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'donation-terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'donation-terms'>(initialTab);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-800">
            <Scale className="w-4 h-4" />
            <span>Governance & Legal Compliance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white max-w-3xl">
            Legal & Transparency Standards
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light">
            ALMADAD TRUST is registered with the Charity Commission for England & Wales (No. 1192843). We are dedicated to the highest standards of integrity, donor privacy, and financial governance.
          </p>
        </div>
      </section>

      {/* Legal Tabs & Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Tab Buttons */}
        <div className="flex border-b border-stone-200">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab('donation-terms')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'donation-terms'
                ? 'border-emerald-800 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Donation Terms & Refund Policy
          </button>
        </div>

        {/* Tab 1: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6 text-stone-700 text-sm leading-relaxed">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Privacy & Data Protection Policy (GDPR Compliant)
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Last updated: January 2026 · ALMADAD TRUST Data Protection Officer
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">1. Introduction & Scope</h3>
              <p>
                ALMADAD TRUST is committed to safeguarding the privacy and personal data of our donors, volunteers, beneficiaries, and website visitors. We comply strictly with the UK Data Protection Act 2018, the General Data Protection Regulation (UK GDPR), and the Privacy and Electronic Communications Regulations (PECR).
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">2. Personal Information We Collect</h3>
              <p>
                When you make a donation, apply to volunteer, or sign up for field dispatches, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Your name, postal address, email address, and phone number.</li>
                <li>Donation amounts, chosen causes, and Gift Aid tax declarations.</li>
                <li>Encrypted transaction confirmation tokens (we do not store raw credit card numbers on our servers).</li>
                <li>Communication preferences and records of volunteer applications.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">3. How We Use Your Information</h3>
              <p>
                We use your personal data to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Process your donations and generate statutory tax receipts.</li>
                <li>Submit Gift Aid repayment claims directly to HM Revenue & Customs (HMRC).</li>
                <li>Provide progress updates and emergency appeal alerts when you have opted in.</li>
                <li>Maintain statutory accounting records as mandated by the UK Charity Commission.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">4. Sharing and Third Parties</h3>
              <p>
                We never sell, rent, or trade your personal data to any third-party marketing agencies. Data is only shared with accredited payment processors (Stripe, PayPal, Barclays Bank) and HM Revenue & Customs for Gift Aid reclaims under strict confidentiality agreements.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">5. Your Legal Rights</h3>
              <p>
                Under UK GDPR, you have the right to request access to your stored personal data, request correction of inaccurate data, or request erasure (&apos;right to be forgotten&apos;), subject to statutory charity accounting retention rules. Contact our Data Protection Officer at <span className="font-semibold text-emerald-800">dataprotection@almadadtrust.org</span>.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Terms & Conditions */}
        {activeTab === 'terms' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6 text-stone-700 text-sm leading-relaxed">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Terms and Conditions of Website Use
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Last updated: January 2026 · ALMADAD TRUST
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">1. Agreement to Terms</h3>
              <p>
                By accessing and using this website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">2. Intellectual Property Rights</h3>
              <p>
                All content on this website, including humanitarian photography, field reports, brand emblems, and software code, is the property of ALMADAD TRUST or its verified partners. You may share links to our campaigns and dispatches for non-commercial charitable advocacy, provided appropriate attribution is given.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">3. Accurate Donor Information</h3>
              <p>
                When making a donation or submitting a volunteer form, you represent that all information provided is accurate and that you are authorized to use the chosen payment method.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">4. Limitation of Liability</h3>
              <p>
                While we strive to ensure the website is accessible and secure 24/7, ALMADAD TRUST shall not be liable for any interruption in service, transmission delays, or technical errors beyond our reasonable control.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Donation Terms & Refund Policy */}
        {activeTab === 'donation-terms' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6 text-stone-700 text-sm leading-relaxed">
            <div className="border-b border-stone-200 pb-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Donation Terms & Refund Policy
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                In compliance with the Charities Act 2011 and Fundraising Regulator Standards
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">1. Nature of Charitable Donations</h3>
              <p>
                Under UK charity law (Charities Act 2011), charitable donations are non-refundable unconditional voluntary gifts made to support humanitarian objectives. Once a donation is received, it becomes trust property dedicated to charitable purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">2. Exceptional Circumstances & Refund Procedure</h3>
              <p>
                ALMADAD TRUST recognizes that exceptional circumstances may occur. We will examine and consider refund requests under the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>An unintended duplicate transaction caused by internet lag or gateway error.</li>
                <li>An accidental error in the donation amount (e.g., £1,000 entered instead of £100).</li>
                <li>Unauthorized or fraudulent use of the donor’s payment card.</li>
              </ul>
              <p className="text-xs mt-2">
                Refund requests must be submitted in writing within <strong>14 calendar days</strong> of the transaction date to <span className="font-semibold text-emerald-800">donorcare@almadadtrust.org</span> with your full name, transaction date, and generated Receipt Reference ID.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">3. Cancellation of Recurring Monthly Donations</h3>
              <p>
                Donors may cancel their recurring monthly donation at any time without penalty. You can notify us by emailing <span className="font-semibold text-emerald-800">donorcare@almadadtrust.org</span> at least 3 business days before your scheduled billing date.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-stone-900">4. 100% Zakat Allocation Guarantee</h3>
              <p>
                When a donor specifies that their contribution is Zakat, ALMADAD TRUST strictly applies its 100% Zakat Policy. 100% of these funds are segregated into dedicated Shariah-monitored accounts and disbursed solely to verified eligible recipients without deducting administrative overheads.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
