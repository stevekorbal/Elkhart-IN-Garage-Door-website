import React, { useState } from 'react';
import { 
  ShieldCheck, Wrench, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, 
  Flame, Settings, Truck, MapPin, Building2, Home, FileText, Award, HelpCircle, Thermometer, CloudRain
} from 'lucide-react';

interface HomeComprehensiveContentProps {
  onNavigate: (path: string) => void;
}

export default function HomeComprehensiveContent({ onNavigate }: HomeComprehensiveContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'How much does garage door spring replacement cost in Elkhart, IN?',
      a: 'Garage door spring replacement typically ranges between $150 and $350 depending on whether your door uses torsion or extension springs, the weight of the door, and whether single or dual springs are required. We provide exact, transparent written quotes on-site before starting any work—with zero hidden service fees.'
    },
    {
      q: 'Can I open my garage door manually if the spring is snapped?',
      a: 'We strongly advise against attempting to open a garage door with a broken spring manually or with the automatic opener. A broken spring eliminates the counter-balance system, making a standard 150-250 lb door feel extremely heavy. Attempting to lift it can strip opener gears, bend tracks, or cause the door to crash down dangerously.'
    },
    {
      q: 'How fast can a technician arrive for emergency repairs in Elkhart?',
      a: 'Our emergency service trucks are dispatched directly from our central location in Elkhart. For urgent situations like trapped vehicles, off-track doors, or broken springs, we guarantee arrival within 45 to 60 minutes across Elkhart, Goshen, Bristol, Middlebury, Dunlap, Osceola, Mishawaka, and Granger.'
    },
    {
      q: 'What brands of openers do you install and service?',
      a: 'We service all major garage door opener brands including LiftMaster, Genie, Chamberlain, Craftsman, Linear, and Overhead Door. We stock replacement logic boards, gears, capacitors, remotes, keypads, and safety sensors directly on our service trucks.'
    },
    {
      q: 'What is the difference between torsion springs and extension springs?',
      a: 'Torsion springs are mounted horizontally on a bar above the garage door header and safely rotate to lift heavy doors evenly. Extension springs stretch along the side tracks. Torsion springs are safer, last significantly longer (up to 20,000–30,000 cycles), and provide smoother operation.'
    },
    {
      q: 'Do you offer warranties on parts and labor?',
      a: 'Yes! All of our high-cycle replacement springs and heavy-duty hardware come backed by multi-year to lifetime warranties. New opener installations feature up to a 3-year motor warranty, and all labor is backed by our 1-year 100% satisfaction guarantee.'
    }
  ];

  return (
    <div className="w-full font-sans bg-slate-50 border-t border-slate-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-24">

        {/* Section 1: Local Climate & Common Garage Door Failures in Elkhart */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Local Expertise & Climate Factors
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Why Garage Doors Fail in Elkhart & Northern Indiana
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
              Northern Indiana experiences distinct seasonal shifts—from humid summers along the St. Joseph and Elkhart Rivers to sub-freezing winter drops with heavy lake-effect snow. These environmental conditions put unique mechanical stress on your overhead garage door system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
                <Thermometer className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Winter Freeze-Thaw Fatigue</h3>
              <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                Freezing winter temperatures and lake-effect cold cause raw spring steel to contract and become brittle. When temperature drops occur suddenly in Elkhart County, worn springs snap unexpectedly during morning operation.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <CloudRain className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Summer Humidity & Road Salt</h3>
              <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                Midwest humidity and winter road salt tracked into garages accelerate track corrosion and cause bearings in cheap steel rollers to seize up, straining your opener motor and producing loud grinding noises.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base">Storm Electrical Surges</h3>
              <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
                Summer thunderstorms frequently trigger localized power surges across Elkhart and St. Joseph counties, burning out opener circuit boards or corrupting safety sensor alignments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Technical Service Breakdown */}
        <section className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Technical Knowledge Base
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Comprehensive Repair & Installation Guide
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Learn how our certified technicians solve critical door issues with precision engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spring Replacement Detail */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">High-Tension Spring Replacement</h3>
                    <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">Torsion & Extension Systems</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Your garage door springs carry the entire counterweight of your door (typically 150 to 300+ lbs). Standard contractor-grade springs are rated for only 10,000 cycles (approx 5-7 years of normal daily use).
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Dual-Spring Protocol:</strong> If one spring breaks, the matching spring has experienced equal cycles and will fail shortly. We replace both to save you double service calls.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>High-Cycle Upgrade:</strong> We install oil-tempered springs rated for 25,000+ cycles, backed by multi-year warranties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Extreme DIY Danger:</strong> Torsion springs store lethal kinetic energy. Professional winding bars and calibrated tools are strictly required.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('garage-door-spring-repair')}
                className="mt-6 w-full bg-slate-900 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                Learn More About Spring Repair &rarr;
              </button>
            </div>

            {/* Opener Repair & Smart Installation */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Opener Repair & Smart Upgrades</h3>
                    <span className="text-xs text-blue-900 font-bold uppercase tracking-wider">LiftMaster • Genie • Craftsman</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Whether your motor hums without moving, remote controls stop responding, or safety sensors blink constantly, our technicians carry original manufacturer replacement parts for all major brands.
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Ultra-Quiet Belt Drives:</strong> Steel-reinforced rubber belts deliver whisper-quiet operation perfect for attached garages near bedrooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Smartphone Control:</strong> Receive real-time open/close alerts and control your garage door from anywhere via myQ or smart home integrations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Battery Backup Systems:</strong> Ensure you can open your garage during severe weather power outages in Northern Indiana.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('garage-door-opener-repair')}
                className="mt-6 w-full bg-slate-900 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                Explore Opener Options &rarr;
              </button>
            </div>

            {/* Off-Track Door Realignment & Cables */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Off-Track Realignment & Cables</h3>
                    <span className="text-xs text-purple-900 font-bold uppercase tracking-wider">Precision Alignment</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  A door hanging off its tracks is a major emergency hazard. This occurs when lift cables snap, rollers jump the track, or a vehicle accidentally bumps the lower panel.
                </p>
                <ul className="mt-4 flex flex-col gap-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Aircraft-Grade Cables:</strong> We replace frayed or snapped lift cables with heavy-duty galvanized steel cables rated for 1,000+ lbs capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Sealed Nylon Rollers:</strong> Upgrade noisy steel rollers to 13-ball-bearing sealed nylon rollers for a 75% reduction in operating noise.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Track Straightening & Leveling:</strong> We square vertical and horizontal tracks, ensuring smooth glide without binding.</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onNavigate('garage-door-off-track-repair')}
                className="mt-6 w-full bg-slate-900 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                View Emergency Off-Track Solutions &rarr;
              </button>
            </div>

            {/* Residential vs Commercial Doors */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Residential vs. Commercial Services</h3>
                    <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Tailored Solutions</span>
                  </div>
                </div>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  We cater to both single-family homeowners looking to boost curb appeal and industrial facilities requiring heavy-duty warehouse loading dock maintenance.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block flex items-center gap-1">
                      <Home className="w-3.5 h-3.5 text-blue-900" /> Residential
                    </span>
                    <span className="text-slate-500 block text-[11px] mt-1">Carriage house, modern glass/aluminum, polyurethane insulated doors (R-12 to R-18).</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-blue-900" /> Commercial
                    </span>
                    <span className="text-slate-500 block text-[11px] mt-1">Full-size sectional steel, rolling steel service doors, high-speed warehouse bay doors, jackshaft openers.</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('garage-door-installation')}
                className="mt-6 w-full bg-slate-900 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                Explore New Door Installations &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Warranty Policy & Workmanship Guarantee */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/40 w-fit">
                ★ Peace of Mind Warranty ★
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Our Transparent Warranty & Workmanship Policy
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                When you hire Elkhart Garage Door Repair, you are covered by clear written warranties on both parts and labor. We stand firmly behind every spring replaced, opener installed, and cable tightened.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <Award className="w-6 h-6 text-amber-400 mb-2" />
                  <span className="font-black text-white text-sm block">Lifetime Hardware</span>
                  <span className="text-slate-400 text-xs block mt-1">On high-cycle torsion springs & heavy-duty steel hinges.</span>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                  <span className="font-black text-white text-sm block">3-Year Motor Warranty</span>
                  <span className="text-slate-400 text-xs block mt-1">On all premium LiftMaster & Genie smart opener installations.</span>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <FileText className="w-6 h-6 text-amber-400 mb-2" />
                  <span className="font-black text-white text-sm block">1-Year Labor Guarantee</span>
                  <span className="text-slate-400 text-xs block mt-1">Covers all on-site technician labor and adjustments.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="font-black text-lg text-slate-900 border-l-4 border-amber-500 pl-3">
                No Hidden Service Fees
              </h3>
              <p className="text-slate-600 text-xs md:text-sm mt-3 leading-relaxed">
                We believe in 100% upfront honest pricing. Before our technician touches a tool, you receive a itemized quote detailing exact parts, labor, and warranty coverage.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-500">Service Call Fee Waived:</span>
                <span className="text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 uppercase">With Any Completed Repair</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Service Boundaries & Elkhart County Coverage */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Service Boundaries
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                Coverage Map Across Elkhart County & Michiana
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-amber-500" /> Dispatching 24/7 Mobile Units
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Our central office located in Elkhart enables rapid dispatch to residential neighborhoods, commercial districts, and rural properties throughout Elkhart, St. Joseph, and Kosciusko counties.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Elkhart
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46514, 46516, 46517</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Goshen
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46526, 46528</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Bristol
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46507</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Middlebury
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46540</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Dunlap
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46526</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Osceola
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46561</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Mishawaka
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46544, 46545</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="font-black text-slate-900 text-sm block flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-500" /> Granger
              </span>
              <span className="text-[11px] text-slate-500 block mt-1 font-mono">ZIPs: 46530</span>
            </div>
          </div>
        </section>

        {/* Section 5: Direct Accordion FAQ Section with Schema structured data */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Direct Answers to Common Garage Door Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-900 transition-colors text-sm md:text-base cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 md:px-6 md:pb-6 pt-0 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-200/60 mt-1">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
