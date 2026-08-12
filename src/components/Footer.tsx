import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Star } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { citiesData } from '../data/citiesData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t-4 border-blue-900">
      {/* Upper Footer Segment (Trust Badges & Immediate Action) */}
      <div className="bg-slate-950 py-10 px-4 md:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-950 p-3 rounded-full border border-blue-800 text-blue-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-base">FULLY LICENSED & INSURED</h3>
              <p className="text-xs text-slate-400 mt-1">Complete protection for your home and commercial property assets.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-amber-950 p-3 rounded-full border border-amber-800 text-amber-500">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-base">PREMIUM WARRANTY INCLUDED</h3>
              <p className="text-xs text-slate-400 mt-1">All replacement high-cycle springs and parts backed by multi-year warranties.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-extrabold text-sm mb-2">HAVE A GARAGE EMERGENCY?</h3>
            <a
              href="tel:5745648115"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-2.5 px-6 rounded-lg text-sm tracking-wider text-center transition-all inline-block border border-amber-600"
            >
              CALL NOW: (574) 564-8115
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Bio column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="bg-blue-900 text-white p-2 rounded-lg">
              <span className="font-extrabold text-sm tracking-tight block">ELK</span>
            </div>
            <div>
              <h4 className="font-extrabold text-sm tracking-tight text-white leading-none">ELKHART</h4>
              <span className="text-[9px] font-bold tracking-widest text-blue-400 block mt-0.5 uppercase">GARAGE DOOR</span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Elkhart Garage Door Repair is Elkhart's premier provider of professional residential and commercial overhead door repair, installation, and spring replacement. We operate 24/7 to keep our community safe and secure.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <span className="text-xs text-white font-semibold uppercase tracking-wider block">Authorized Installer of:</span>
            <div className="text-[10px] font-mono text-slate-500 tracking-wider flex flex-wrap gap-x-2">
              <span>LIFTMASTER</span> • <span>CHAMBERLAIN</span> • <span>C.H.I. OVERHEAD</span> • <span>AMARR</span> • <span>GENIE</span>
            </div>
          </div>
        </div>

        {/* Services column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">OUR SERVICES</h3>
          <ul className="grid grid-cols-1 gap-2 text-xs">
            <li>
              <button onClick={() => handleLinkClick('garage-door-repair')} className="hover:text-amber-500 transition-colors text-left">
                Garage Door Repair
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('garage-door-spring-repair')} className="hover:text-amber-500 transition-colors text-left">
                Garage Door Spring Repair
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('garage-door-opener-repair')} className="hover:text-amber-500 transition-colors text-left">
                Garage Door Opener Repair
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('garage-door-opener-installation')} className="hover:text-amber-500 transition-colors text-left">
                Garage Door Opener Installation
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('garage-door-installation')} className="hover:text-amber-500 transition-colors text-left">
                New Garage Door Installation
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('emergency-garage-door-repair')} className="hover:text-amber-500 transition-colors text-left text-amber-400 font-semibold">
                24/7 Emergency Repairs
              </button>
            </li>
          </ul>
        </div>

        {/* Service Areas column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">LOCAL SERVICE AREAS</h3>
          <ul className="grid grid-cols-2 gap-2 text-xs">
            {Object.values(citiesData).map((city) => (
              <li key={city.id}>
                <button
                  onClick={() => handleLinkClick(`city/${city.id}`)}
                  className="hover:text-amber-500 transition-colors text-left text-slate-400 block"
                >
                  {city.cityName.split(',')[0]}
                </button>
              </li>
            ))}
            <li className="col-span-2 mt-1 pt-1 border-t border-slate-800">
              <button onClick={() => handleLinkClick('service-areas')} className="text-blue-400 hover:text-amber-500 transition-colors text-left font-semibold">
                View All Regions &rarr;
              </button>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">CONTACT DIRECT</h3>
          <ul className="flex flex-col gap-3.5 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Elkhart, IN 46516 &
                <br />
                Surrounding Service Communities
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href="tel:5745648115" className="hover:text-white transition-colors font-semibold">
                (574) 564-8115
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href="mailto:contact@elkhartgaragedoorrepair.com" className="hover:text-white transition-colors">
                contact@elkhartgaragedoorrepair.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-slate-300">Emergency Repair: 24/7/365</span>
                <span className="text-slate-500 block">Office Hours: Mon-Sat 7am-8pm</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Corporate bottom section */}
      <div className="bg-slate-950 py-6 px-4 text-xs border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Elkhart Garage Door Repair. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-1">
              Serving Elkhart, Goshen, Bristol, Middlebury, Dunlap, Osceola, Mishawaka, Granger, Nappanee, Wakarusa, Edwardsburg, Simonton Lake, and Concord, IN.
            </p>
          </div>
          <div className="flex gap-4 text-slate-500">
            <button onClick={() => handleLinkClick('blog')} className="hover:text-slate-300 font-semibold text-amber-500 transition-colors">
              Blog & Guides
            </button>
            <span>|</span>
            <button onClick={() => handleLinkClick('privacy-policy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => handleLinkClick('terms-and-conditions')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
