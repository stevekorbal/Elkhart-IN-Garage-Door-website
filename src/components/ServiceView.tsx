import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { getServiceImage } from '../data/serviceImages';
import { ShieldCheck, PhoneCall, Check, Wrench, HelpCircle, AlertTriangle } from 'lucide-react';
import LeadForm from './LeadForm';
import Breadcrumbs from './Breadcrumbs';

interface ServiceViewProps {
  serviceId: string;
  onNavigate: (path: string) => void;
}

interface ContentSection {
  title: string;
  type: 'list' | 'text';
  items?: string[];
  content?: string[];
}

interface ServiceContent {
  title: string;
  subtitle: string;
  intro: string[];
  sections: ContentSection[];
  faqs?: { question: string; answer: string }[];
  outro: {
    title: string;
    content: string[];
  };
}

const serviceContents: Record<string, ServiceContent> = {
  'garage-door-repair': {
    title: 'Garage Door Repair',
    subtitle: 'Garage Door Repair in Elkhart',
    intro: [
      "When your garage door stops working, you need fast, dependable service from technicians who understand every type of residential garage door system. Whether your door won't open, makes loud noises, gets stuck halfway, or has been damaged by everyday wear and tear, we're here to help.",
      "Our experienced team repairs all major garage door brands and components, restoring safe and reliable operation as quickly as possible."
    ],
    sections: [
      {
        title: 'We Repair',
        type: 'list',
        items: [
          'Garage doors that won\'t open or close',
          'Loud or squeaking garage doors',
          'Broken rollers',
          'Bent or damaged tracks',
          'Worn cables',
          'Broken hinges',
          'Misaligned safety sensors',
          'Doors that are off balance',
          'Slow-moving garage doors',
          'Remote and keypad issues'
        ]
      },
      {
        title: 'Why Prompt Repairs Matter',
        type: 'text',
        content: [
          'Ignoring a small garage door problem can quickly turn into a costly repair. A worn roller, loose cable, or damaged track can place extra strain on the entire system, increasing the risk of a complete breakdown.',
          'Our goal is to identify the problem, explain your options, and complete the repair correctly the first time.'
        ]
      },
      {
        title: 'Why Homeowners Choose Us',
        type: 'list',
        items: [
          'Fast response times',
          'Experienced technicians',
          'Quality replacement parts',
          'Honest recommendations',
          'Friendly customer service'
        ]
      }
    ],
    faqs: [
      {
        question: 'How do I know if my garage door needs repair?',
        answer: 'If your door is making unusual noises, opens unevenly, moves slowly, or won\'t open completely, it\'s time to schedule an inspection.'
      },
      {
        question: 'Can most garage doors be repaired?',
        answer: 'Yes. Many problems can be fixed without replacing the entire garage door.'
      }
    ],
    outro: {
      title: 'Schedule Your Repair',
      content: [
        'If your garage door isn\'t working properly, contact us today to schedule professional garage door repair in Elkhart.',
        'Call (574) 555-8240 or complete our online contact form.'
      ]
    }
  },
  'garage-door-spring-repair': {
    title: 'Broken Garage Door Spring Repair',
    subtitle: 'Garage Door Spring Repair in Elkhart',
    intro: [
      "Broken garage door springs are one of the most common causes of garage door failure. If you heard a loud bang inside your garage or your door suddenly became too heavy to lift, a broken spring is often the reason.",
      "Garage door springs are under extreme tension and should never be repaired without the proper tools and training."
    ],
    sections: [
      {
        title: 'Signs of a Broken Spring',
        type: 'list',
        items: [
          'Loud snapping sound',
          'Garage door won\'t lift',
          'Door feels extremely heavy',
          'Visible gap in the spring',
          'Opener struggles to move the door',
          'Door only opens a few inches'
        ]
      },
      {
        title: 'Our Spring Repair Service Includes',
        type: 'list',
        items: [
          'Torsion spring replacement',
          'Extension spring replacement',
          'Spring inspection',
          'System balancing',
          'Safety testing'
        ]
      },
      {
        title: 'Why Professional Replacement Matters',
        type: 'text',
        content: [
          'Incorrect spring installation can damage your opener and create serious safety risks. Our technicians install properly sized replacement springs and verify the entire system operates safely before the job is complete.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can I replace a garage door spring myself?',
        answer: 'No. Garage door springs are under high tension and can cause serious injury if handled incorrectly.'
      }
    ],
    outro: {
      title: 'Need Spring Repair?',
      content: [
        'Call (574) 555-8240 for professional garage door spring repair in Elkhart.'
      ]
    }
  },
  'garage-door-opener-repair': {
    title: 'Garage Door Opener Repair',
    subtitle: 'Garage Door Opener Repair in Elkhart',
    intro: [
      "A faulty garage door opener can leave you unable to access your garage when you need it most. Whether the motor won't run, the remote has stopped working, or your opener only works intermittently, we can diagnose and repair the problem."
    ],
    sections: [
      {
        title: 'We Repair',
        type: 'list',
        items: [
          'Motor failures',
          'Remote controls',
          'Wall switches',
          'Wireless keypads',
          'Safety sensors',
          'Travel limit adjustments',
          'Gear replacement',
          'Chain and belt issues'
        ]
      },
      {
        title: '',
        type: 'text',
        content: [
          'We work with many popular opener brands, including LiftMaster, Chamberlain, Genie, Craftsman, and more.'
        ]
      },
      {
        title: 'Common Problems',
        type: 'list',
        items: [
          'Opener hums but door doesn\'t move',
          'Door reverses before closing',
          'Remote stopped working',
          'Flashing lights',
          'Door only opens halfway'
        ]
      }
    ],
    outro: {
      title: 'Call Today',
      content: [
        'Schedule garage door opener repair by calling (574) 555-8240.'
      ]
    }
  },
  'garage-door-opener-installation': {
    title: 'Garage Door Opener Installation',
    subtitle: 'Garage Door Opener Installation in Elkhart',
    intro: [
      "If your current opener is outdated, unreliable, or beyond repair, installing a new garage door opener can improve convenience, security, and everyday reliability.",
      "We install quality garage door openers designed for smooth and dependable operation."
    ],
    sections: [
      {
        title: 'Installation Options',
        type: 'list',
        items: [
          'Belt-drive openers',
          'Chain-drive openers',
          'Wi-Fi smart openers',
          'Battery backup systems',
          'Wireless keypads',
          'Smartphone control'
        ]
      },
      {
        title: 'Benefits of a New Opener',
        type: 'list',
        items: [
          'Quieter operation',
          'Improved security',
          'Better reliability',
          'Modern smart-home features',
          'Smooth opening and closing'
        ]
      }
    ],
    outro: {
      title: 'Request an Estimate',
      content: [
        'Contact us today to learn more about garage door opener installation in Elkhart.',
        'Call (574) 555-8240.'
      ]
    }
  },
  'garage-door-installation': {
    title: 'New Garage Door Installation',
    subtitle: 'Garage Door Installation in Elkhart',
    intro: [
      "Replacing your garage door is one of the best ways to improve your home's appearance, security, and energy efficiency.",
      "Whether you're replacing an aging door or building a new home, we'll help you choose a garage door that matches your style and budget."
    ],
    sections: [
      {
        title: 'Available Options',
        type: 'list',
        items: [
          'Traditional garage doors',
          'Carriage-style doors',
          'Contemporary designs',
          'Steel garage doors',
          'Insulated garage doors',
          'Single and double garage doors'
        ]
      },
      {
        title: 'Professional Installation',
        type: 'text',
        content: [
          'Our installation process includes removing the old door, installing the new system, testing all safety features, and ensuring smooth operation.'
        ]
      },
      {
        title: 'Benefits',
        type: 'list',
        items: [
          'Improved curb appeal',
          'Better insulation',
          'Increased home value',
          'Reliable daily performance',
          'Enhanced security'
        ]
      }
    ],
    outro: {
      title: 'Schedule Your Installation',
      content: [
        'Call (574) 555-8240 for a free consultation on garage door installation in Elkhart.'
      ]
    }
  },
  'emergency-garage-door-repair': {
    title: 'Emergency Garage Door Repair',
    subtitle: 'Emergency Garage Door Repair in Elkhart',
    intro: [
      "Garage door problems don't always happen during business hours. A broken spring, damaged cable, or garage door stuck open can leave your home vulnerable and prevent you from using your garage safely.",
      "Our emergency repair service is designed to help homeowners quickly restore safe operation."
    ],
    sections: [
      {
        title: 'Emergency Situations We Handle',
        type: 'list',
        items: [
          'Broken springs',
          'Doors stuck open',
          'Doors stuck closed',
          'Off-track garage doors',
          'Broken cables',
          'Garage doors hit by vehicles',
          'Opener failures preventing access'
        ]
      },
      {
        title: 'Safety First',
        type: 'text',
        content: [
          'If your garage door is hanging unevenly, has come off its track, or appears unsafe, avoid using it until it has been inspected by a qualified technician.'
        ]
      },
      {
        title: 'Why Call Us?',
        type: 'list',
        items: [
          'Prompt response',
          'Experienced technicians',
          'Fully equipped service vehicles',
          'Honest recommendations',
          'Reliable repairs'
        ]
      }
    ],
    outro: {
      title: 'Contact Us Now',
      content: [
        'If you need emergency garage door repair in Elkhart, call (574) 555-8240 immediately or submit our online contact form.'
      ]
    }
  }
};

export default function ServiceView({ serviceId, onNavigate }: ServiceViewProps) {
  const serviceMeta = servicesData[serviceId];
  const serviceContent = serviceContents[serviceId];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!serviceMeta || !serviceContent) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-900">Service Not Found</h2>
        <p className="text-slate-500 mt-2">We couldn\'t locate the specified service page.</p>
        <button
          onClick={() => onNavigate('home')}
          className="mt-6 bg-blue-900 text-white font-bold py-2.5 px-6 rounded-lg text-sm"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const imageUrl = getServiceImage(serviceId);

  return (
    <div className="w-full bg-slate-50 font-sans">
      {/* Dynamic SEO Breadcrumbs */}
      <Breadcrumbs
        paths={[
          { label: 'Services', route: 'home' },
          { label: serviceContent.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header Area */}
      <section className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={imageUrl}
            alt={serviceMeta.imageAlt}
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mb-3">
            Local Specialists in Elkhart
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl">
            {serviceContent.subtitle}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mt-4">
            {serviceMeta.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Double Column Layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (Content, approx. 66%) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Main Service Banner Image */}
          <div className="relative w-full h-64 md:h-[380px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200">
            <img
              src={imageUrl}
              alt={serviceMeta.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] md:text-xs font-black text-amber-400 bg-slate-950 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
                  Professional Solution
                </span>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  {serviceMeta.imageAlt}
                </p>
              </div>
              <span className="text-[10px] text-slate-200 bg-slate-950/50 px-2.5 py-1 rounded-md backdrop-blur-xs w-fit">
                Elkhart, IN
              </span>
            </div>
          </div>

          {/* Heading 2 subtitle */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {serviceContent.subtitle}
            </h2>
            
            {/* Intro text */}
            <div className="mt-6 flex flex-col gap-4">
              {serviceContent.intro.map((para, idx) => (
                <p key={idx} className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Dynamic Content Sections */}
          {serviceContent.sections.map((section, idx) => {
            if (!section.title && section.type === 'text') {
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm -mt-4">
                  {section.content?.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              );
            }

            return (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-900 pl-3">
                  {section.title}
                </h3>
                
                {section.type === 'list' && section.items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === 'text' && section.content && (
                  <div className="flex flex-col gap-4 mt-4">
                    {section.content.map((para, pIdx) => (
                      <p key={pIdx} className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* FAQs section (if exists) */}
          {serviceContent.faqs && serviceContent.faqs.length > 0 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-blue-900 pl-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-900" />
                Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-3 mt-6">
                {serviceContent.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-150 rounded-xl overflow-hidden bg-slate-50/50">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 font-bold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center text-sm"
                    >
                      <span>{faq.question}</span>
                      <span className="text-slate-400 font-extrabold text-lg leading-none shrink-0">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-150 pt-3 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outro section */}
          <div className="bg-blue-900 text-white rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-black border-l-4 border-amber-400 pl-3">
              {serviceContent.outro.title}
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-slate-200 text-sm md:text-base leading-relaxed">
              {serviceContent.outro.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (Conversion Form & Sticky Contacts Sidebar) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="lg:sticky lg:top-24 flex flex-col gap-6">
            {/* Direct Call Widget */}
            <div className="bg-amber-500 text-slate-950 p-6 rounded-3xl border border-amber-600 shadow-lg text-center flex flex-col gap-4">
              <span className="bg-slate-950 text-amber-400 font-black text-[10px] tracking-wider px-2.5 py-1 rounded mx-auto w-fit">
                SPEAK TO A DISPATCHER IN ELKHART
              </span>
              <h3 className="font-black text-xl leading-tight">
                Emergency & Same-Day Service Response
              </h3>
              <p className="text-slate-900 text-xs leading-relaxed font-medium">
                Our local crews are on stand-by with fully-stocked service vehicles. Get your garage door fixed today.
              </p>
              <a
                href="tel:5745558240"
                className="bg-slate-950 hover:bg-slate-900 text-white font-black py-3 px-6 rounded-xl text-sm tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                (574) 555-8240
              </a>
            </div>

            {/* Embedded Form */}
            <LeadForm sourcePage={`Service: ${serviceContent.title}`} />

            {/* Trust highlights checklist widget */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3">
              <span className="font-bold text-slate-800 text-xs uppercase tracking-wider block border-b border-slate-100 pb-2">Why Our Team?</span>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-black text-sm">✔</span>
                <span>Background checked, drug-tested staff</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-black text-sm">✔</span>
                <span>Fully stocked service vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-black text-sm">✔</span>
                <span>Warranties on springs, cables, & motors</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="text-emerald-500 font-black text-sm">✔</span>
                <span>Locally based in Elkhart area</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
