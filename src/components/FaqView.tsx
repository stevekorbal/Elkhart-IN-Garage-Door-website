import React, { useState } from 'react';
import { HelpCircle, Search, Clock, ShieldCheck, Tag } from 'lucide-react';
import { FAQItem } from '../types';
import Breadcrumbs from './Breadcrumbs';

export default function FaqView({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'springs' | 'openers' | 'emergency' | 'maintenance' | 'pricing' | 'general'>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'f1',
      category: 'springs',
      question: 'How do I know if my garage door spring is broken?',
      answer: 'The most obvious sign is a visible 2-inch gap in the coil spring mounted on the shaft above your closed door. Other signs include a very loud bang coming from the garage, the automatic opener stalling after lifting the door only a few inches, or the door feeling incredibly heavy when you disengage the red emergency release cord to lift it manually.'
    },
    {
      id: 'f2',
      category: 'springs',
      question: 'Can I replace a broken garage door spring myself?',
      answer: 'Absolutely not. Torsion and extension springs operate under immense mechanical tension—often supporting 150 to 400 pounds. Attempting to unwind or replace a spring without professional winding bars, safety gear, and specialized training is highly hazardous and has resulted in severe injuries, lacerations, or worse. Always hire a certified specialist.'
    },
    {
      id: 'f3',
      category: 'springs',
      question: 'Should I replace both garage door springs if only one is snapped?',
      answer: 'Yes, we always recommend replacing both springs together. Because both springs have experienced the exact same number of cycles (every time the door opens and closes), they experience identical metal fatigue. If one spring has snapped, the unbroken spring has reached its limit and will almost always fail shortly after the new one is installed.'
    },
    {
      id: 'f4',
      category: 'openers',
      question: 'Why does my automatic opener motor hum but the door doesn\'t move?',
      answer: 'A humming motor with no movement usually indicates a mechanical failure in the opener\'s drive assembly. In LiftMaster and Chamberlain models, this is frequently caused by a stripped nylon main drive gear inside the housing. In chain or belt drive models, the door may also be locked using a manual slide lock, or the springs are broken, meaning the motor cannot lift the massive dead weight.'
    },
    {
      id: 'f5',
      category: 'openers',
      question: 'My garage door begins to close but immediately reverses and flashes. What is wrong?',
      answer: 'This is almost always a safety sensor alignment issue. Federal law requires automatic openers to features optical safety photo-eyes. If the beam is blocked by debris (cobwebs, trash cans, toys), if one sensor is misaligned, or if there is a loose connection in the wire, the opener assumes an obstacle is in the path and will reverse the door, flashing its light bulbs to alert you.'
    },
    {
      id: 'f6',
      category: 'openers',
      question: 'What is the lifespan of a typical automatic garage door opener?',
      answer: 'On average, a quality automatic opener lasts between 10 and 15 years. Regular maintenance (checking balance, keeping gears lubricated) can push it closer to 20 years. If your opener has a seized motor windings or is an obsolete pre-1993 model lacking safety photo-eyes, immediate replacement is highly recommended.'
    },
    {
      id: 'f7',
      category: 'emergency',
      question: 'What is considered a true garage door emergency?',
      answer: 'A garage door emergency is any situation that threatens your safety, security, or schedule. Examples include: a vehicle trapped inside when trying to leave for a critical shift or flight; a door stuck wide open overnight, exposing your inventory or home entryways; a door hanging out of its tracks at a crooked, unstable angle; or snaps in both high-tension cables simultaneously.'
    },
    {
      id: 'f8',
      category: 'emergency',
      question: 'How fast do you respond to emergency repair calls in Elkhart?',
      answer: 'Our local dispatch operators coordinate emergency responses in Elkhart and surrounding communities (Goshen, Bristol, Middlebury) 24/7/365. On average, we have a fully stocked service vehicle and certified technician on your property within 45 to 60 minutes of your call.'
    },
    {
      id: 'f9',
      category: 'maintenance',
      question: 'How often should a garage door receive a safety tune-up?',
      answer: 'To prevent unexpected breakdowns and extend the life of your equipment, you should schedule a professional multi-point tune-up at least once a year. The autumn or spring are ideal times to verify proper counterbalance and safety reverse settings before extreme temperatures strain the metal parts.'
    },
    {
      id: 'f10',
      category: 'maintenance',
      question: 'My garage door is incredibly noisy. What can I do to quiet it?',
      answer: 'A loud grinding, screeching, or rattling door is usually caused by unlubricated metal hinges, loose tracking bolts, or worn-out metal rollers. Upgrading your squeaking steel rollers to premium, sealed nylon ball-bearing rollers can reduce door noise by up to 75%. Combined with track leveling and proper silicone lubrication, your door will run whisper-quiet.'
    },
    {
      id: 'f11',
      category: 'maintenance',
      question: 'Is it safe to spray WD-40 on my garage door tracks and springs?',
      answer: 'No. WD-40 is a solvent, not a heavy-duty lubricant, and it will attract dust, dirt, and hair that eventually clogs tracking and rollers. You should only use high-grade silicone spray or white lithium grease designed specifically for overhead doors. Additionally, tracks should be wiped clean with a cloth, not heavily greased, as grease can cause rollers to slide instead of spin.'
    },
    {
      id: 'f12',
      category: 'installation',
      question: 'How do I choose the right R-value insulation for a new door?',
      answer: 'R-value measures thermal resistance. If you have an uninsulated, detached garage, a non-insulated door is sufficient. However, if you have an attached garage with living space above or adjacent to it, we recommend insulated doors with an R-value of 10 to 18. This acts as an excellent thermal barrier, lowering your home\'s overall heating and cooling bills.'
    },
    {
      id: 'f13',
      category: 'installation',
      question: 'Can I replace just one damaged garage door panel?',
      answer: 'Yes! If you backed into a middle or bottom panel but the rest of the door, tracks, and springs are completely intact, we can order an exact matching replacement section from the manufacturer, saving you hundreds of dollars compared to a complete new door installation.'
    },
    {
      id: 'f14',
      category: 'installation',
      question: 'What are the main types of garage doors available?',
      answer: 'The most popular options are insulated steel doors (highly durable, low maintenance), traditional wood carriage-house doors (extremely beautiful but require regular painting/staining), modern glass-and-aluminum frame doors, and impact-resistant fiberglass panels.'
    },
    {
      id: 'f15',
      category: 'pricing',
      question: 'Do you provide free estimates for your services?',
      answer: 'We provide completely transparent, free on-site written estimates for all new garage door installations and major system replacements. For routine diagnostic repair calls, we explain our affordable diagnostic dispatch fees upfront, and always obtain your written approval before any repair work starts.'
    },
    {
      id: 'f16',
      category: 'pricing',
      question: 'What methods of payment do you accept?',
      answer: 'For your convenience, our technicians carry mobile payment terminals. We accept all major credit and debit cards (Visa, Mastercard, Discover, American Express), local personal checks with valid identification, and cash.'
    },
    {
      id: 'f17',
      category: 'pricing',
      question: 'Are your garage door repairs backed by a warranty?',
      answer: 'Yes, absolutely. We take immense pride in our work. All replacement springs, hardware, and openers carry extensive manufacturer parts warranties. Additionally, we back all of our professional labor with a comprehensive satisfaction guarantee.'
    },
    {
      id: 'f18',
      category: 'general',
      question: 'What is rolling-code technology, and why is it important?',
      answer: 'Older garage remotes sent the exact same static radio frequency code every time you pressed the button, allowing high-tech burglars to "grab" the code from the air. Modern rolling-code systems change your access code out of billions of possibilities every single time the door is cycled, ensuring total security.'
    },
    {
      id: 'f19',
      category: 'general',
      question: 'How do I program my vehicle\'s built-in HomeLink button?',
      answer: 'Programming in-car HomeLink systems involves holding your handheld garage remote near your vehicle\'s mirror/overhead console while pressing both buttons to sync, followed by pressing the orange/purple "Learn Button" on your garage motor housing and immediately pressing your car\'s HomeLink button twice to pair.'
    },
    {
      id: 'f20',
      category: 'general',
      question: 'How can I test the balance of my garage door?',
      answer: 'Close the door and pull the red emergency disengage cord. Lift the door manually. It should rise easily with one hand and rest perfectly level at the halfway open position. If it slams down or shoots up rapidly, the springs are improperly tensioned, putting major strain on your automatic motor.'
    },
    {
      id: 'f21',
      category: 'general',
      question: 'Why does my garage door remote range keep getting shorter?',
      answer: 'A loss of range is most frequently caused by a dying remote battery, a bent or broken receiving antenna wire hanging from your ceiling opener motor, or electrical frequency interference caused by certain LED or CFL light bulbs installed inside the opener socket.'
    },
    {
      id: 'f22',
      category: 'general',
      question: 'What should I do if my garage door goes completely off-track?',
      answer: 'Stop using the door immediately. Do not try to manually force it down or pull the red release cord. An off-track door is highly unstable, holds massive physical tension, and can drop at any second. Secure the area and call our emergency line immediately.'
    }
  ];

  const handleToggle = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'springs', label: 'Spring Repair' },
    { id: 'openers', label: 'Openers & remotes' },
    { id: 'emergency', label: 'Emergency Care' },
    { id: 'maintenance', label: 'Maintenance & safety' },
    { id: 'pricing', label: 'Pricing & warranty' },
    { id: 'general', label: 'General Questions' }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans">
      <Breadcrumbs paths={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

      {/* Intro Header */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest block w-fit mx-auto mb-3">
            Knowledge Center
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            Have a question about broken springs, loud noises, smart openers, or safety balances? Explore our complete list of technical and pricing guides prepared by our certified installers.
          </p>
        </div>
      </section>

      {/* FAQ Search and Filter Panel */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col gap-6">
          {/* Search bar */}
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm p-2 flex items-center gap-2">
            <Search className="w-5 h-5 text-slate-400 ml-2 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g. spring, price, remote)..."
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none py-2 px-1"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 justify-center pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 border-blue-950 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-4 mt-8">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm overflow-hidden transition-all text-left"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 text-left font-extrabold text-slate-800 hover:bg-slate-50 flex justify-between items-center gap-4 text-xs md:text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-900 shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-slate-400 text-xl font-bold shrink-0">
                    {activeFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === faq.id && (
                  <div className="px-6 pb-6 pt-3 text-slate-500 text-xs md:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-sm">
              No matching questions found. Try search keywords like "spring", "remote", or "price".
            </div>
          )}
        </div>

        {/* Dynamic call out segment */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md text-left">
          <div>
            <h3 className="font-extrabold text-lg">Still have questions or need immediate service?</h3>
            <p className="text-blue-200 text-xs md:text-sm mt-1 leading-relaxed">
              Don't risk structural or bodily damage. Our local Elkhart experts are ready to diagnose and repair your system right now.
            </p>
          </div>
          <a
            href="tel:5745648115"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-6 rounded-xl text-xs tracking-wider transition-all flex items-center gap-2 border border-amber-600 shrink-0 shadow-md"
          >
            CALL DIRECT: (574) 564-8115
          </a>
        </div>
      </section>
    </div>
  );
}
