import React from 'react';
import Breadcrumbs from './Breadcrumbs';

interface LegalViewsProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export default function LegalViews({ type, onNavigate }: LegalViewsProps) {
  const isPrivacy = type === 'privacy';

  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs
        paths={[{ label: isPrivacy ? 'Privacy Policy' : 'Terms & Conditions' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
            Last Updated: July 21, 2026. Review our commitments regarding customer information and service parameters.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16 text-left">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm text-xs md:text-sm text-slate-600 flex flex-col gap-6 leading-relaxed">
          {isPrivacy ? (
            <>
              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">1. Overview</h2>
              <p>
                At Elkhart Garage Door Repair, we value your privacy and trust. This Privacy Policy describes how we collect, use, process, and safeguard your personal information when you visit our website or submit inquiries through our online contact or request forms.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">2. Information Collection</h2>
              <p>
                We collect personal information that you voluntarily provide to us when requesting a free estimate, scheduling a repair, or submitting contact forms. This information may include:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-500">
                <li>Your name and physical residential/business address.</li>
                <li>Your telephone number and electronic email address.</li>
                <li>Details regarding your garage door, automatic opener, or structural repair needs.</li>
              </ul>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">3. How We Use Information</h2>
              <p>
                We use the information we collect strictly to coordinate local services, including:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate-500">
                <li>Scheduling physical on-site appointments and assigning technicians.</li>
                <li>Confirming dispatch details via telephone calls, text alerts, or email confirmations.</li>
                <li>Preparing upfront, honest written estimates for repairs or installations.</li>
                <li>Fulfilling legal and billing requirements.</li>
              </ul>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">4. Third-Party Sharing</h2>
              <p>
                We do not sell, rent, trade, or otherwise transfer your personal information to outside marketing firms or unrelated third parties. Your information is only accessed by our local dispatch operators and certified field technicians to perform requested services.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">5. Data Protection</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Our submission forms utilize industry-standard SSL encryption protocols to secure data during transit.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, submitting request forms, or booking services with Elkhart Garage Door Repair, you agree to be bound by these Terms & Conditions and all applicable state laws and regulations in Indiana.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">2. Service Estimates & Scheduling</h2>
              <p>
                All on-site estimates prepared by our technicians are written and valid for 30 days from the inspection date. While we make every effort to arrive within our scheduled appointment windows, travel times may vary slightly due to Midwest traffic or severe winter weather conditions. Our dispatch operators will always notify you of any delayed runs.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">3. Payment Parameters</h2>
              <p>
                Payments for physical repairs, hardware, and installations are due immediately upon the completion of service. We accept Visa, Mastercard, Discover, Amex, personal local checks, and cash. Any credit accounts or corporate purchase order limits must be approved by our administrative office prior to scheduling service.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">4. Springs & Hardware Warranties</h2>
              <p>
                All replacement parts are backed by our extensive manufacturer warranties. Torsion spring replacements are backed by a comprehensive multi-year warranty. Labor is backed by our direct local workmanship guarantee. Warranties are voided if any uncertified third party attempts to adjust, lubricate, or modify high-tension structural parts following our service run.
              </p>

              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-2">5. Limitation of Liability</h2>
              <p>
                Our technicians take great care to inspect wood framing and header structural integrity before adjusting springs. However, Elkhart Garage Door Repair is not responsible for pre-existing structural rot or decay in wood jambs or framing that fails to support standard operating stress.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
