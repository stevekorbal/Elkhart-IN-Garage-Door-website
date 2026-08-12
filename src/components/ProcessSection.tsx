import React from 'react';
import { PhoneCall, CalendarCheck, Truck, Search, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Call Us 24/7',
      desc: 'Connect immediately with our local Elkhart dispatcher at (574) 564-8115.',
      icon: PhoneCall,
      color: 'bg-blue-50 border-blue-200 text-blue-900 icon-blue',
    },
    {
      num: '02',
      title: 'Schedule Appointment',
      desc: 'Pick a convenient same-day or flexible emergency timeslot that works for you.',
      icon: CalendarCheck,
      color: 'bg-amber-50 border-amber-200 text-amber-600 icon-amber',
    },
    {
      num: '03',
      title: 'Technician Arrives',
      desc: 'Our uniformed, certified specialist rolls up in a fully stocked service truck.',
      icon: Truck,
      color: 'bg-slate-50 border-slate-200 text-slate-800 icon-slate',
    },
    {
      num: '04',
      title: 'Full Inspection',
      desc: 'A complete 25-point physical audit reveals all underlying wear points.',
      icon: Search,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-600 icon-emerald',
    },
    {
      num: '05',
      title: 'Repair or Replace',
      desc: 'We perform high-tension spring, cable, or opener services with premium parts.',
      icon: Wrench,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-900 icon-indigo',
    },
    {
      num: '06',
      title: 'Complete Satisfaction',
      desc: 'We perform safety tests and sign-off on our bulletproof industry-leading warranty.',
      icon: ShieldCheck,
      color: 'bg-purple-50 border-purple-200 text-purple-900 icon-purple',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Engineered For Speed
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Our Proven 6-Step Service Process
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            From your very first phone call to our final safety test, we make your garage door repair experience fast, safe, transparent, and completely stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                {/* Connecting Arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2 z-10 text-slate-300">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}

                {/* Number Badge */}
                <span className="absolute -top-3 -left-1 text-xs font-mono font-black text-slate-300 group-hover:text-amber-500 transition-colors">
                  {step.num}
                </span>

                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${step.color}`}>
                  <Icon className="w-9 h-9" />
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-sm md:text-base mt-4 group-hover:text-blue-900 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs mt-2 leading-relaxed px-2">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Notice */}
        <div className="bg-slate-50 rounded-2xl p-6 mt-12 border border-slate-150 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs font-black text-slate-700 bg-amber-400 px-2.5 py-1 rounded tracking-wide shrink-0">
            EMERGENCY NOTICE
          </span>
          <p className="text-xs text-slate-600 text-left leading-relaxed">
            Locked out or door hanging off-track right now? Skip the routine scheduling. Our emergency vehicles are rolling immediately across Elkhart, IN.
          </p>
        </div>
      </div>
    </section>
  );
}
