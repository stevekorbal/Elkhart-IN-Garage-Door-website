import React from 'react';
import { Clock, Shield, Star, Award, Zap, ThumbsUp, DollarSign, Hammer, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      title: 'Same-Day Service',
      desc: 'Most garage door issues are resolved in a single visit, often on the very same day you contact us.',
      icon: Clock,
      badge: 'Highly Popular',
    },
    {
      title: '24/7 Emergency Dispatch',
      desc: 'No matter if it is midnight or a holiday, our local emergency response vehicles are fully stocked and ready.',
      icon: Zap,
      badge: 'Immediate response',
    },
    {
      title: 'Experienced Technicians',
      desc: 'Our professionals are background-checked, drug-tested, and undergo regular advanced factory safety training.',
      icon: Award,
      badge: 'Certified Experts',
    },
    {
      title: 'Premium High-Cycle Parts',
      desc: 'We install premium galvanized torsion springs and sealed nylon rollers built to last up to 100,000 cycles.',
      icon: Hammer,
      badge: 'Long-term value',
    },
    {
      title: 'Transparent, Upfront Pricing',
      desc: 'We provide clear, custom written estimates before any repair begins. Absolutely zero hidden fees or surprises.',
      icon: DollarSign,
      badge: 'Honest rates',
    },
    {
      title: 'Residential & Commercial',
      desc: 'Equipped to service everything from small single-car garages to heavy-duty industrial warehouse rolling doors.',
      icon: Shield,
      badge: 'Full Service',
    },
    {
      title: 'Warranties Available',
      desc: 'All of our services include extensive parts and labor warranties, ensuring complete, worry-free operation.',
      icon: CheckCircle,
      badge: 'Guaranteed Work',
    },
    {
      title: 'Locally Owned & Operated',
      desc: 'We are proudly based in the Elkhart area, supporting our neighbors with honest, friendly community service.',
      icon: ThumbsUp,
      badge: 'Elkhart Base',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Intro heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Built On Local Trust, Reliability, & Quality Workmanship
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            We understand you have choices. That is why we work tirelessly to deliver an unmatched standard of technical precision, fair pricing, and friendly service that sets us apart.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    {/* Icon */}
                    <div className="bg-slate-50 text-blue-900 p-3 rounded-xl border border-slate-100 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6 animate-pulse-slow" />
                    </div>
                    {/* Badge */}
                    <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {val.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-slate-900 text-base mt-5 group-hover:text-blue-900 transition-colors">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs md:text-sm mt-2.5 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="w-8 h-1 bg-slate-200 group-hover:bg-blue-900 transition-colors mt-6 rounded"></div>
              </div>
            );
          })}
        </div>

        {/* Double Column Trust Stats Panel */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 mt-16 shadow-xl relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/50 via-blue-900 to-slate-950 opacity-95"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Our Absolute Commitment to Safety and Satisfaction
              </h3>
              <p className="text-blue-200 text-sm mt-4 leading-relaxed">
                A garage door is under extreme tension. We treat every repair run with rigorous safety standards to protect your assets, pets, and loved ones. All replacement springs are backed by an extensive multi-year warranty.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-900/30">
                  ✔ Background Checked Techs
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-900/30">
                  ✔ Fully Licensed & Insured
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-blue-950/50 p-4 rounded-2xl border border-blue-800/40">
                <span className="block font-black text-2xl md:text-3xl text-amber-400">100%</span>
                <span className="block text-[10px] md:text-xs text-blue-200 mt-1 uppercase tracking-wider font-bold">
                  Satisfaction Guarantee
                </span>
              </div>
              <div className="bg-blue-950/50 p-4 rounded-2xl border border-blue-800/40">
                <span className="block font-black text-2xl md:text-3xl text-amber-400">1-Hour</span>
                <span className="block text-[10px] md:text-xs text-blue-200 mt-1 uppercase tracking-wider font-bold">
                  Emergency Response
                </span>
              </div>
              <div className="bg-blue-950/50 p-4 rounded-2xl border border-blue-800/40">
                <span className="block font-black text-2xl md:text-3xl text-amber-400">15k+</span>
                <span className="block text-[10px] md:text-xs text-blue-200 mt-1 uppercase tracking-wider font-bold">
                  High-Cycle Springs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
