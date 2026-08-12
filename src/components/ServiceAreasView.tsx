import React from 'react';
import { citiesData } from '../data/citiesData';
import { MapPin, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

export default function ServiceAreasView({ onNavigate }: { onNavigate: (path: string) => void }) {
  const handleCityClick = (cityId: string) => {
    onNavigate(`city/${cityId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs paths={[{ label: 'Service Areas' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mx-auto mb-3">
            Local Communities Served
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Our Northern Indiana Service Areas
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            We proudly serve homeowners, businesses, and property managers within a 25-30 mile radius of Elkhart, IN. Our emergency dispatch fleets are stationed locally for rapid service.
          </p>
        </div>
      </section>

      {/* Main Content Areas Listing */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-left">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Select Your Nearest Location For Same-Day Support
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-3 leading-relaxed">
            By stationing certified, friendly technicians in strategic regions across Elkhart, St. Joseph, and Marshall counties, we guarantee an average response time of under an hour for urgent emergencies like broken high-tension springs or off-track doors.
          </p>
        </div>

        {/* Cities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(citiesData).map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-lg transition-all shadow-sm group"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div className="bg-blue-50 text-blue-900 p-3 rounded-2xl border border-blue-150 group-hover:bg-blue-900 group-hover:text-white transition-all">
                    <MapPin className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase">
                    Elkhart dispatch
                  </span>
                </div>

                {/* City name */}
                <h3 className="font-extrabold text-slate-900 text-xl mt-5 group-hover:text-blue-900 transition-colors">
                  {city.cityName}
                </h3>

                {/* Local intro */}
                <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed">
                  {city.intro}
                </p>

                {/* Neighborhoods list block */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Neighborhoods Serviced:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {city.neighborhoods.slice(0, 4).map((n, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {n}
                      </span>
                    ))}
                    {city.neighborhoods.length > 4 && (
                      <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                        +{city.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action button linking to specific page */}
              <button
                onClick={() => handleCityClick(city.id)}
                className="w-full bg-slate-50 hover:bg-blue-900 text-slate-800 hover:text-white border border-slate-200 hover:border-blue-950 font-extrabold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 mt-8 group-hover:shadow"
              >
                Explore Services in {city.cityName.split(',')[0]}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Localized trust assurance box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 mt-16 max-w-4xl mx-auto text-center shadow-sm relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-slate-50 text-slate-100 rounded-tl-full flex items-center justify-end p-6 select-none pointer-events-none">
            <ShieldCheck className="w-16 h-16 opacity-30 text-blue-900/10" />
          </div>
          <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider inline-block">
            Immediate Safe Dispatch Area
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mt-4">
            Outside our standard 30-mile radius?
          </h3>
          <p className="text-slate-600 text-xs md:text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            If you are located just outside of our core Elkhart or St. Joseph county borders, please contact our dispatch managers at <a href="tel:5745648115" className="text-blue-900 font-extrabold hover:underline">(574) 564-8115</a>. Depending on technical workloads, we are often able to schedule specialized commercial or residential runs with nominal travel adjustments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:5745648115"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-6 rounded-xl text-xs tracking-wider transition-all flex items-center justify-center gap-1.5 border border-amber-600"
            >
              <PhoneCall className="w-4 h-4 fill-current" />
              CALL DISPATCH CO-ORDINATOR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
