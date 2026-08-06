import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import LeadForm from './LeadForm';
import Breadcrumbs from './Breadcrumbs';

export default function ContactView({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs paths={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mx-auto mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Contact Our Dispatch Team
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            Have a snapped spring, a jammed opener, or want to discuss a new carriage-house garage door installation? Contact us 24/7. We respond rapidly across all local regions.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column (Contact details, hours, map - 45%) */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          
          {/* Quick contact panel */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Direct Contact Channels
            </h2>
            <div className="flex flex-col gap-6 mt-6">
              
              {/* Phone item */}
              <div className="flex items-start gap-3.5">
                <div className="bg-amber-100 text-amber-600 p-2.5 rounded-xl border border-amber-200 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Telephone (24/7 Emergency Line)</span>
                  <a href="tel:5745558240" className="text-base md:text-lg font-black text-slate-900 hover:text-amber-500 transition-colors block mt-1">
                    (574) 555-8240
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Call now for average under-60 min dispatch responses.</span>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-3.5">
                <div className="bg-blue-50 text-blue-900 p-2.5 rounded-xl border border-blue-100 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                  <a href="mailto:service@elkhartgaragedoor.com" className="text-sm font-bold text-slate-800 hover:text-blue-900 transition-colors block mt-1">
                    service@elkhartgaragedoor.com
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">We respond to estimates and emails within 2 hours.</span>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3.5">
                <div className="bg-slate-100 text-slate-800 p-2.5 rounded-xl border border-slate-200 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Dispatch Office</span>
                  <span className="text-sm font-semibold text-slate-700 block mt-1">
                    Elkhart, IN 46516 & Surrounding Service Communities
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Locally owned and operated in Elkhart County.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Opening hours panel */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Clock className="w-5 h-5 text-blue-900" />
              Hours of Operation
            </h2>
            <div className="flex flex-col gap-3 mt-4 text-xs md:text-sm text-slate-600">
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span className="font-semibold text-slate-800">24/7 Emergency Repairs</span>
                <span className="font-extrabold text-red-600 uppercase tracking-wide">Always Open</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span>Monday - Friday (Office)</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-50 pb-1.5">
                <span>Saturday (Office)</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday (Office)</span>
                <span>Emergency Dispatch Only</span>
              </div>
            </div>
          </div>

          {/* Trust assurances check */}
          <div className="bg-slate-900 text-slate-300 p-6 rounded-3xl border border-slate-800 flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-extrabold text-sm">Need to cancel or reschedule?</h4>
              <p className="text-[11px] md:text-xs text-slate-400 mt-1 leading-relaxed">
                No problem. We do not charge cancellation fees as long as you notify our coordinator at least 2 hours before the scheduled dispatch window.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (LeadForm & Embedded Iframe Map - 55%) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Main interactive form */}
          <LeadForm sourcePage="Dedicated Contact Us Page" className="w-full" />

          {/* Location Interactive Embedded Map */}
          <div className="bg-white border border-slate-200 rounded-3xl p-3 shadow-md h-[300px] overflow-hidden relative">
            <iframe
              title="Central Office Map Location Elkhart IN"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94895.2319041285!2d-85.9767!3d41.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816c21e3f8a0e8d%3A0x6b4458b68cb26879!2sElkhart%2C%20IN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
