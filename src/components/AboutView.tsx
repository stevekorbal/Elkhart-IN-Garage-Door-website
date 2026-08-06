import React from 'react';
import { ShieldCheck, Award, Heart, Hammer, Phone } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function AboutView({ onNavigate }: { onNavigate: (path: string) => void }) {
  const handleContactClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs paths={[{ label: 'About Us' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mx-auto mb-3">
            Our Company Backstory
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            About Elkhart Garage Door Repair
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            A locally owned, community-first garage door company serving Elkhart, IN, and surrounding regions with unmatched workmanship, safety, and upfront integrity.
          </p>
        </div>
      </section>

      {/* Story & Mission Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-left flex flex-col gap-10">
        
        {/* Core Backstory */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-900 pl-3">
            Our Humble Roots & Mission
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2">
            Elkhart Garage Door Repair was founded right here in Elkhart, Indiana, with a simple, unwavering mission: to provide our neighbors with a reliable, safe, and honest garage door service they can call on day or night. We noticed that local homeowners and businesses were often subjected to high-pressure sales tactics or delayed emergency dispatch support from national call-center franchises.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            We decided to change that. By focusing strictly on hiring background-checked, drug-screened local technicians and stocking our service vehicles with high-cycle, heavy-duty replacement hardware (like oil-tempered galvanized torsion springs and high-cycle nylon rollers), we ensure that over 90% of our garage door repairs are successfully executed on the very first visit.
          </p>
        </div>

        {/* Our Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-blue-50 text-blue-900 p-2.5 rounded-xl border border-blue-100 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Safety-First Culture</h3>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                A loose garage door or spring carries massive physical tension. We never take shortcuts, and perform rigorous safety, force, and auto-reverse testing on every run.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl border border-amber-100 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Verified Workmanship</h3>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                All of our technicians undergo regular factory training. We install top-tier hardware from Amarr, Clopay, LiftMaster, and Genie.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl border border-emerald-100 shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Community Dedication</h3>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                We live and work in the Elkhart area. We proudly support local charity events, community youth sports, and regional neighborhood associations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="bg-indigo-50 text-indigo-900 p-2.5 rounded-xl border border-indigo-100 shrink-0">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm md:text-base">Honest Upfront Estimates</h3>
              <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                We present custom, written, contract-free estimates before any tool is lifted. Absolutely zero hidden fees, upselling, or surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Believable Story Block */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-left">
          <h3 className="text-lg font-black text-slate-900">Our Commitment to Reliable Workmanship</h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-3">
            Since our founding, we have repaired thousands of doors in Elkhart, Goshen, and Bristol. We have stayed small enough to maintain personal, friendly communication with every single homeowner, yet large enough to possess the heavy-duty machinery, crane lifters, and industrial jackshaft inventory necessary for complex commercial loading dock services.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-3">
            We are fully licensed, bonded, and carry extensive liability and workman's compensation insurance to protect your property during repair or installation operations. When you choose Elkhart Garage Door Repair, you are choosing a solid, local business that stands behind its work with real, bulletproof warranties.
          </p>
        </div>

        {/* Action callout banner */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md">
          <div className="text-left">
            <h3 className="font-extrabold text-lg">Need to schedule a repair or installation consult?</h3>
            <p className="text-blue-200 text-xs md:text-sm mt-1 leading-relaxed">
              We provide same-day response times and local dispatch 24 hours a day, 365 days a year.
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3.5 px-7 rounded-xl text-xs md:text-sm tracking-wide transition-all border border-amber-600 shrink-0 active:scale-95 transform"
          >
            REQUEST FREE ESTIMATE
          </button>
        </div>
      </section>
    </div>
  );
}
