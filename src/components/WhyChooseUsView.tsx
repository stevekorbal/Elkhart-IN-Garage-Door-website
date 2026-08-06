import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import Breadcrumbs from './Breadcrumbs';

export default function WhyChooseUsView({ onNavigate }: { onNavigate: (path: string) => void }) {
  const handleContactClick = () => {
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs paths={[{ label: 'Why Choose Us' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mx-auto mb-3">
            Our Key Advantages
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Why Choose Our Service Teams?
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            We are the highest-rated garage door company in Elkhart, IN. Discover the standard of precision, safety, and community values we bring to every home.
          </p>
        </div>
      </section>

      {/* Embedded Bento Grid & Trust Details */}
      <WhyChooseUs />

      {/* Extra Detail Segment */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 text-left flex flex-col gap-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg md:text-xl font-black text-slate-900 border-l-4 border-blue-900 pl-3">
            Our Vetted Vows of Quality
          </h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-4">
            At Elkhart Garage Door Repair, we believe in long-term relationships with our clients in Elkhart, Mishawaka, and Goshen. This starts by refusing to install cheap, low-cycle parts that break down shortly after service calls. We only use high-tensile aircraft steel cables, oil-tempered springs rated for 15,000+ cycles, and nylon ball-bearing rollers designed to run smoothly and quietly for decades.
          </p>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-4">
            Furthermore, our technician recruitment process is among the most rigorous in Northern Indiana. Every applicant undergoes professional background checks, drug testing, and completes multi-week classroom and field safety modules, ensuring you only receive courteous, certified professionals at your door.
          </p>
        </div>

        {/* Closing Action Banner */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-md">
          <div className="text-left">
            <h3 className="font-extrabold text-lg">Experience the Elkhart Difference Today</h3>
            <p className="text-blue-200 text-xs md:text-sm mt-1 leading-relaxed">
              We provide free estimates for all new door replacements and same-day dispatch on repairs.
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3.5 px-7 rounded-xl text-xs md:text-sm tracking-wide transition-all border border-amber-600 shrink-0 active:scale-95 transform"
          >
            GET A FREE ESTIMATE NOW
          </button>
        </div>
      </section>
    </div>
  );
}
