import React from 'react';
import { citiesData } from '../data/citiesData';
import { MapPin, PhoneCall, ShieldAlert, ShieldCheck, CheckCircle, ArrowLeft } from 'lucide-react';
import LeadForm from './LeadForm';
import Breadcrumbs from './Breadcrumbs';

interface CityViewProps {
  cityId: string;
  onNavigate: (path: string) => void;
}

export default function CityView({ cityId, onNavigate }: CityViewProps) {
  const city = citiesData[cityId];

  if (!city) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-900">Location Not Found</h2>
        <p className="text-slate-500 mt-2">We couldn't locate the specified service region. Please return to our main service areas overview.</p>
        <button
          onClick={() => onNavigate('service-areas')}
          className="mt-6 bg-blue-900 text-white font-bold py-2.5 px-6 rounded-lg text-sm"
        >
          View All Service Areas
        </button>
      </div>
    );
  }

  const handlePrimaryLink = () => {
    onNavigate('service/garage-door-repair');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      {/* Localized Breadcrumbs */}
      <Breadcrumbs
        paths={[
          { label: 'Service Areas', route: 'service-areas' },
          { label: city.cityName }
        ]}
        onNavigate={onNavigate}
      />

      {/* Local SEO Header Banner */}
      <section className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <span className="text-xs font-black text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/45 uppercase tracking-widest block w-fit mb-3">
            Local Service Dispatch Center
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Same-Day Garage Door Repair in <span className="text-amber-400">{city.cityName}</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mt-4">
            Need urgent help in {city.cityName}? {city.intro} We provide swift emergency response and transparent local rates.
          </p>
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column - SEO Rich Local Content (66%) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Section 1: Intro Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-left">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-900 pl-3">
              Your Trusted Local Garage Door Company
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
              At Elkhart Garage Door Repair, we are committed to providing the absolute highest standard of workmanship for our clients in {city.cityName}. Whether you are experiencing snapped torsion springs or require a modern high-security smart opener, our local technician teams are dispatched with fully loaded vehicles to resolve your overhead door problems in a single trip.
            </p>
            <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
              We focus on executing highly precise repairs and carry top-rated parts backed by exceptional structural warranties. If you need immediate assistance, explore our localized solutions below or check out our primary{' '}
              <button
                onClick={handlePrimaryLink}
                className="text-blue-900 font-extrabold hover:text-amber-500 hover:underline inline-block transition-colors cursor-pointer"
              >
                Garage Door Repair
              </button>{' '}
              offerings.
            </p>
          </div>

          {/* Section 2: Core Offerings breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Repair block */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2">
                Garage Door Repair in {city.cityName.split(',')[0]}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                {city.repairContent}
              </p>
            </div>

            {/* Installation block */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2">
                New Garage Door Installation
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                {city.installationContent}
              </p>
            </div>

            {/* Emergency block */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2 text-red-700 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                24/7 Emergency Assistance
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                {city.emergencyContent}
              </p>
            </div>

            {/* Springs & Openers block */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2">
                Springs & Automatic Openers
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                {city.springsOpenersContent}
              </p>
            </div>
          </div>

          {/* Section 3: Same-Day Guarantee Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-left">
            <h3 className="text-xl font-black text-slate-900 border-l-4 border-blue-900 pl-3">
              Same-Day Service & Commercial Support
            </h3>
            <p className="text-slate-600 text-sm mt-4 leading-relaxed">
              {city.sameDayServiceContent}
            </p>
          </div>

          {/* Section 4: Neighborhoods Served (Bento Style Checklist for Local SEO) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-left">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-900" />
              Neighborhoods We Proudly Serve in {city.cityName.split(',')[0]}
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              We offer rapid emergency dispatch and home visits across all local neighborhoods, residential subdivisions, and business districts:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-6">
              {city.neighborhoods.map((n, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back button to main areas */}
          <button
            onClick={() => onNavigate('service-areas')}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-500 transition-colors w-fit cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Service Areas
          </button>
        </div>

        {/* Right Column - Sticky Conversion Sidebar (33%) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            
            {/* Urgent Phone CTA box */}
            <div className="bg-blue-900 text-white p-6 rounded-3xl border border-blue-950 shadow-lg text-center flex flex-col gap-4">
              <span className="bg-amber-400 text-slate-950 font-black text-[10px] tracking-wider px-2.5 py-1 rounded mx-auto w-fit">
                LOCAL DIRECT LINE
              </span>
              <h3 className="font-black text-xl leading-tight">
                Get Same-Day Service in {city.cityName.split(',')[0]}
              </h3>
              <p className="text-blue-200 text-xs leading-relaxed font-medium">
                Call our direct routing number to check technician availability or request emergency roadside assistance immediately.
              </p>
              <a
                href="tel:5745648115"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-6 rounded-xl text-sm tracking-widest transition-all flex items-center justify-center gap-2 border border-amber-600"
              >
                <PhoneCall className="w-4 h-4 fill-current" />
                (574) 564-8115
              </a>
            </div>

            {/* Interactive Form */}
            <LeadForm sourcePage={`City LP: ${city.cityName}`} />

            {/* Local Trust badging */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3 text-left">
              <span className="font-bold text-slate-800 text-xs uppercase tracking-wider block border-b border-slate-100 pb-2">
                Our Guarantee
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-bold">✔</span>
                <span>Average response time under 60 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-bold">✔</span>
                <span>All quotes written & contract-free</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-bold">✔</span>
                <span>Warrantied high-cycle replacement springs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
