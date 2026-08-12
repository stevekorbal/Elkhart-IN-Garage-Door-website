import React from 'react';
import { Phone, Calendar, ShieldCheck, ArrowRight, Star, MapPin, Wrench, Flame, Settings, Hammer, Layers, AlertTriangle } from 'lucide-react';
import LeadForm from './LeadForm';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';
import HomeComprehensiveContent from './HomeComprehensiveContent';
import { servicesData } from '../data/servicesData';
import { getServiceImage } from '../data/serviceImages';
import { Testimonial } from '../types';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const handleServiceClick = (serviceId: string) => {
    onNavigate(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6 high-converting realistic sample testimonials
  const sampleTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Michael S.',
      location: 'Elkhart, IN',
      rating: 5,
      date: 'July 14, 2026',
      service: 'Torsion Spring Repair',
      text: 'Our garage door spring snapped loud like a gunshot at 6:00 AM on a Tuesday, trapping both of our cars inside. I called Elkhart Garage Door Repair and their technician, Brad, arrived by 7:15 AM! He replaced both springs, balanced the door, and had us rolling in less than an hour. Exceptional same-day response and honest upfront pricing!'
    },
    {
      id: '2',
      name: 'Jessica L.',
      location: 'Goshen, IN',
      rating: 5,
      date: 'June 28, 2026',
      service: 'Smart Opener Installation',
      text: 'Upgraded our noisy old chain-drive opener to a modern LiftMaster belt-drive with smartphone controls. It is so quiet we can barely hear it inside, and being able to check if the door is closed from my phone is a lifesaver. The installer was polite, wore shoe covers, and cleaned up everything. Five-star experience!'
    },
    {
      id: '3',
      name: 'David R.',
      location: 'Bristol, IN',
      rating: 5,
      date: 'July 02, 2026',
      service: 'Emergency Off-Track Repair',
      text: 'I accidentally backed into our garage door before it was fully open, knocking it completely out of the track and leaving it hanging dangerously at a scary angle. I called their emergency line at 9 PM. A technician arrived within 45 minutes, secured the door, straightened the rails, and got it closing perfectly. Absolute lifesaver!'
    },
    {
      id: '4',
      name: 'Robert K.',
      location: 'Middlebury, IN',
      rating: 5,
      date: 'May 19, 2026',
      service: 'Commercial Roll-Up Door Repair',
      text: 'We had a warehouse dock door fail right in the middle of our peak shipping afternoon. The team responded within an hour, replaced the damaged lift cables, and checked the industrial jackshaft opener. They minimized our warehouse downtime and are fully compliant with safety standards. Very professional team!'
    },
    {
      id: '5',
      name: 'Sarah P.',
      location: 'Mishawaka, IN',
      rating: 5,
      date: 'June 10, 2026',
      service: 'New Insulated Garage Door Installation',
      text: 'The curb appeal boost on our house is incredible. They helped us choose an insulated carriage-style door that matches our home perfectly. Not only does it look amazing, but our garage is noticeably warmer and draft-free now. Upfront pricing, quick clean install, and zero high-pressure sales pitches.'
    },
    {
      id: '6',
      name: 'James T.',
      location: 'Granger, IN',
      rating: 5,
      date: 'July 18, 2026',
      service: '25-Point Safety Tune-Up',
      text: 'Our door had started making awful grinding and popping sounds. Booked their preventative maintenance tune-up. The technician lubricated all springs and hinges, tightened loose brackets, and replaced the worn rollers with sealed nylon ones. The door is quieter now than when it was first built!'
    }
  ];

  // Helper to map services to lucide icons dynamically
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'garage-door-repair':
        return Wrench;
      case 'garage-door-spring-repair':
      case 'broken-garage-door-springs':
        return Flame;
      case 'garage-door-opener-repair':
      case 'garage-door-remote-programming':
        return Settings;
      case 'garage-door-opener-installation':
        return Settings;
      case 'garage-door-installation':
      case 'garage-door-replacement':
        return Hammer;
      case 'emergency-garage-door-repair':
      case 'garage-door-off-track-repair':
        return AlertTriangle;
      case 'garage-door-maintenance':
      case 'garage-door-tune-ups':
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      {/* High-Impact Hero Section with Embedded Form */}
      <section className="relative bg-slate-900 py-12 lg:py-20 overflow-hidden text-white min-h-[600px] flex items-center">
        {/* Generated Hero Image Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40">
          <img
            src="/src/assets/images/garage_door_hero_1784628372796.jpg"
            alt="Premium Garage Door in Elkhart IN"
            className="w-full h-full object-cover object-center scale-105 filter saturate-110"
            referrerPolicy="no-referrer"
          />
          {/* Deep Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <span className="inline-block text-xs md:text-sm font-black text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1.5 rounded-full border border-amber-800/40 w-fit">
              ★ Same-Day Service in Elkhart & Northern Indiana ★
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight md:leading-none text-slate-100">
              Fast & Reliable Garage Door Repair in <span className="text-amber-400">Elkhart, IN</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-200 leading-relaxed max-w-xl">
              Broken springs? Noisy opener? Stuck door? Get fully certified, local professionals at your door today. We specialize in fast-response repairs and premium installations.
            </p>

            {/* Quick value props bullets list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">✔</span>
                <span className="text-xs md:text-sm font-bold">Same-Day Service Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">✔</span>
                <span className="text-xs md:text-sm font-bold">24/7 Immediate Emergency Care</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">✔</span>
                <span className="text-xs md:text-sm font-bold">Licensed, Bonded & Insured Techs</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shrink-0">✔</span>
                <span className="text-xs md:text-sm font-bold">Upfront Quotes & Clear Warranties</span>
              </div>
            </div>

            {/* Immediate Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-4">
              <a
                href="tel:5745648115"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-4 px-8 rounded-xl text-center text-sm md:text-base tracking-wide shadow-lg hover:shadow-xl transition-all transform active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 border border-amber-600"
              >
                <Phone className="w-5 h-5 fill-current animate-pulse" />
                CALL NOW: (574) 564-8115
              </a>
              <button
                onClick={() => handleServiceClick('emergency-garage-door-repair')}
                className="bg-transparent hover:bg-white/10 text-white font-extrabold py-4 px-8 rounded-xl border-2 border-white/40 text-center text-sm md:text-base transition-all hover:border-white"
              >
                Schedule Service Today
              </button>
            </div>
          </div>

          {/* Right LeadForm Column */}
          <div className="lg:col-span-5 w-full">
            <LeadForm sourcePage="Home Hero Form" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Residential & Commercial Garage Door Services
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
            Our expert local technicians are fully equipped to diagnose and repair any residential or commercial overhead door malfunction. Explore our core services below.
          </p>
        </div>

        {/* 6 core services featured in alternating single-column rows */}
        <div className="flex flex-col gap-12 mt-12">
          {Object.values(servicesData).slice(0, 6).map((service, index) => {
            const IconComponent = getServiceIcon(service.id);
            const isEven = index % 2 === 0; // 1st, 3rd, 5th -> left text & right image. 2nd, 4th, 6th -> left image & right text
            const imageUrl = getServiceImage(service.id);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all grid grid-cols-1 md:grid-cols-12 items-stretch gap-0 group"
              >
                {/* Text Content Block */}
                <div className={`p-8 md:p-12 lg:p-16 md:col-span-7 flex flex-col justify-center text-left ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 text-blue-900 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-all shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-blue-900 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      Professional Solution
                    </span>
                  </div>

                  <h3 className="font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                    {service.title.split('|')[0]}
                  </h3>

                  <p className="text-slate-500 text-xs md:text-sm mt-3.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights listing */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.commonProblems.slice(0, 2).map((prob, pIdx) => (
                      <span key={pIdx} className="bg-slate-50 border border-slate-200 text-[10px] md:text-xs text-slate-600 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        {prob.replace('.', '').substring(0, 45)}{prob.length > 45 ? '...' : ''}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      id={`btn-learn-more-${service.id}`}
                      className="bg-blue-900 hover:bg-blue-850 text-white font-extrabold text-xs md:text-sm py-3 px-6 rounded-xl transition-all shadow-sm flex items-center gap-2 group-hover:shadow cursor-pointer active:scale-98"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <a
                      href="tel:5745648115"
                      className="text-xs md:text-sm font-extrabold text-slate-700 hover:text-amber-500 transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Free Quote</span>
                    </a>
                  </div>
                </div>

                {/* Image Block */}
                <div className={`relative h-64 md:h-auto min-h-[240px] md:col-span-5 overflow-hidden ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                  <img
                    src={imageUrl}
                    alt={service.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom services navigation nudge */}
        <div className="text-center mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <span className="font-bold text-slate-800 block text-sm">Need a specialized or niche repair?</span>
            <span className="text-xs text-slate-500 block mt-0.5">We handle roller replacement, off-track errors, cable repairs, remote programming, panel swaps, and tune-ups.</span>
          </div>
          <button
            onClick={() => onNavigate('why-choose-us')}
            className="bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs py-3 px-6 rounded-xl transition-colors shrink-0"
          >
            Why Choose Us &rarr;
          </button>
        </div>
      </section>

      {/* Visual process timeline */}
      <ProcessSection />

      {/* Why Choose Us & Trust Bento Grid */}
      <WhyChooseUs />

      {/* Testimonials Segment */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Highly Rated By Homeowners & Businesses
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-4 leading-relaxed">
              We take immense pride in our workmanship. See what our local customers in Elkhart, Goshen, Bristol, Middlebury, and surrounding communities are saying about our rapid service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleTestimonials.map((t) => (
              <div key={t.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Testimonial Quote */}
                  <p className="text-slate-600 text-xs md:text-sm mt-4 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-extrabold text-slate-800 block">{t.name}</span>
                    <span className="text-slate-500 text-[10px] block mt-0.5">{t.location}</span>
                  </div>
                  <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase text-[10px] tracking-wider">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Callout & Dynamic Google Map Placeholder Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column (Written local address and directions) */}
        <div className="flex flex-col gap-5 text-left">
          <span className="text-xs md:text-sm font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 w-fit">
            Our Central Location
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Elkhart, IN & Surrounding Communities
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We are centrally based in Elkhart, allowing our emergency repair vehicles to reach nearby Goshen, Bristol, Middlebury, Dunlap, Osceola, Mishawaka, Granger, and Nappanee within approximately 45-60 minutes.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-slate-800 text-sm block">Central Headquarters:</span>
                <span className="text-xs text-slate-500 block mt-0.5">Elkhart, IN 46516 & Surrounding Service Communities</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-slate-800 text-sm block">24/7 Telephone line:</span>
                <a href="tel:5745648115" className="text-xs font-bold text-blue-950 block mt-0.5 hover:text-amber-500 transition-colors">
                  (574) 564-8115
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Secure Google Map Iframe representing Elkhart, IN) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-3 shadow-md h-[380px] overflow-hidden relative">
          <iframe
            title="Google Map Elkhart IN"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94895.2319041285!2d-85.9767!3d41.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816c21e3f8a0e8d%3A0x6b4458b68cb26879!2sElkhart%2C%20IN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.25rem' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Comprehensive 1,000+ Word Depth Content & FAQ Section */}
      <HomeComprehensiveContent onNavigate={onNavigate} />
    </div>
  );
}
