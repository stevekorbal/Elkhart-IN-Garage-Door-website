import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown, Clock, MapPin, Shield } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { citiesData } from '../data/citiesData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Monitor scroll to apply compact sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAreasDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 font-sans">
      {/* Top Urgent Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs md:text-sm font-medium border-b border-slate-800 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-500 font-semibold animate-pulse">
            <Clock className="w-4 h-4" />
            24/7 EMERGENCY DISPATCH
          </span>
          <span className="hidden sm:inline-block text-slate-400">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-4 h-4 text-slate-400" />
            Elkhart, IN & Northern Indiana
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <span className="hidden md:flex items-center gap-1.5 text-emerald-400 font-semibold text-xs bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
            <Shield className="w-3.5 h-3.5" />
            Licensed, Insured & Local
          </span>
          <a
            href="tel:5745558240"
            className="flex items-center gap-1.5 text-slate-100 hover:text-amber-500 font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            (574) 555-8240
          </a>
        </div>
      </div>

      {/* Main Header Area */}
      <div
        className={`w-full transition-all duration-300 bg-white border-b border-slate-200 ${
          isSticky ? 'sticky top-0 shadow-md py-2.5' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-blue-900 text-white p-2 rounded-lg group-hover:bg-blue-800 transition-colors shadow-inner">
              <span className="font-extrabold text-lg md:text-xl tracking-tight block">ELK</span>
            </div>
            <div>
              <h1 className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 leading-none">
                ELKHART
              </h1>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-blue-900 block mt-0.5">
                GARAGE DOOR REPAIR
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'home' ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-900 flex items-center gap-1 py-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesDropdownOpen && (
                <div
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 grid grid-cols-1 gap-1 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    All Services
                  </div>
                  <div className="max-h-[380px] overflow-y-auto custom-scrollbar px-1">
                    {Object.values(servicesData).map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleLinkClick(`${service.id}`)}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-all flex items-center justify-between"
                      >
                        <span className="truncate">{service.title.split('|')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAreasDropdownOpen(true)}
                onClick={() => setIsAreasDropdownOpen(!isAreasDropdownOpen)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-900 flex items-center gap-1 py-1"
              >
                Service Areas
                <ChevronDown className="w-4 h-4" />
              </button>
              {isAreasDropdownOpen && (
                <div
                  onMouseLeave={() => setIsAreasDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    Cities We Serve
                  </div>
                  <button
                    onClick={() => handleLinkClick('service-areas')}
                    className="w-full text-left px-4 py-2 text-xs font-bold text-blue-900 hover:bg-slate-50 block transition-colors"
                  >
                    View All Regions
                  </button>
                  {Object.values(citiesData).map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleLinkClick(`city/${city.id}`)}
                      className="w-full text-left px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors block"
                    >
                      {city.cityName}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('why-choose-us')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'why-choose-us' ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'about' ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('faqs')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'faqs' ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleLinkClick('blog')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'blog' || currentPath.startsWith('blog/') ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-sm font-semibold transition-colors ${
                currentPath === 'contact' ? 'text-blue-900 border-b-2 border-blue-900 pb-0.5' : 'text-slate-600 hover:text-blue-900'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Contact CTA Button (Amber Warning Alert Style for CRO) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-button"
              href="tel:5745558240"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform active:scale-95 cursor-pointer border border-amber-600"
            >
              <Phone className="w-4 h-4 fill-current" />
              CALL (574) 555-8240
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-slate-200 py-4 px-4 shadow-inner">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              Home
            </button>

            {/* Mobile Services Expansion */}
            <div className="border-b border-slate-50 py-1">
              <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider block mb-1">
                Our Services
              </span>
              <div className="grid grid-cols-1 gap-1.5 pl-2 max-h-[180px] overflow-y-auto">
                {Object.values(servicesData).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleLinkClick(`${service.id}`)}
                    className="text-left text-xs font-medium text-slate-700 hover:text-blue-900 py-1 block"
                  >
                    • {service.title.split('|')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Service Areas Expansion */}
            <div className="border-b border-slate-50 py-1">
              <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider block mb-1">
                Local Cities Served
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <button
                  onClick={() => handleLinkClick('service-areas')}
                  className="text-left text-xs font-bold text-blue-900 py-1 block col-span-2"
                >
                  View All Regions
                </button>
                {Object.values(citiesData).map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleLinkClick(`city/${city.id}`)}
                    className="text-left text-xs font-medium text-slate-700 hover:text-blue-900 py-1 block"
                  >
                    • {city.cityName}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('why-choose-us')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('faqs')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              FAQs
            </button>

            <button
              onClick={() => handleLinkClick('blog')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="text-left py-2 font-semibold text-slate-800 hover:text-blue-900 text-sm border-b border-slate-50"
            >
              Contact
            </button>

            {/* Mobile Contact Button */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:5745558240"
                className="bg-amber-500 text-slate-950 py-3 rounded-lg font-bold text-sm tracking-wide shadow text-center flex items-center justify-center gap-2 border border-amber-600"
              >
                <Phone className="w-4 h-4 fill-current" />
                CALL NOW: (574) 555-8240
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-blue-900 text-white py-3 rounded-lg font-bold text-sm text-center"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
