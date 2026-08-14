import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send, PhoneCall } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { citiesData } from '../data/citiesData';

interface LeadFormProps {
  sourcePage?: string;
  className?: string;
}

export default function LeadForm({ sourcePage = 'General Website', className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceNeeded: '',
    message: '',
    website_hp: '', // Hidden honeypot field for spam prevention
    agreedToTerms: true
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate triggers if already submitting
    if (status === 'submitting') return;

    if (!formData.name.trim() || !formData.phone.trim() || !formData.serviceNeeded.trim() || !formData.city.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Phone, City, Service).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          city: formData.city.trim(),
          service: formData.serviceNeeded.trim(),
          message: formData.message.trim(),
          website_hp: formData.website_hp,
          sourcePage: sourcePage
        })
      });

      let responseData: any = null;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        try {
          responseData = await response.json();
        } catch {
          responseData = null;
        }
      } else {
        const text = await response.text();
        try {
          responseData = JSON.parse(text);
        } catch {
          responseData = { message: text };
        }
      }

      if (response.ok && responseData && responseData.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          responseData?.error || "Sorry, we couldn't send your request. Please call us directly."
        );
      }
    } catch (err) {
      console.error('Lead form submission error:', err);
      setStatus('error');
      setErrorMessage("Sorry, we couldn't send your request. Please call us directly.");
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 text-center shadow-md animate-fadeIn ${className}`}>
        <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-emerald-950 font-extrabold text-xl md:text-2xl tracking-tight">
          Request Received Successfully!
        </h3>
        <p className="text-emerald-800 text-sm mt-3 leading-relaxed font-semibold">
          Thank you. Your request has been received. We'll be in touch shortly.
        </p>
        <p className="text-emerald-700 text-xs mt-2 leading-relaxed">
          Coordinator dispatched for <strong>{formData.serviceNeeded}</strong> in <strong>{formData.city || 'Elkhart, IN'}</strong>.
        </p>
        <div className="bg-white rounded-xl p-4 my-5 border border-emerald-100 text-left text-xs text-slate-600 flex flex-col gap-2 shadow-sm">
          <span className="font-bold text-slate-800 text-sm block border-b border-slate-100 pb-1.5">What Happens Next?</span>
          <p>• <strong>Within 10 Minutes:</strong> We will call you at <strong className="text-slate-900">{formData.phone}</strong> to confirm your address and service schedule.</p>
          <p>• <strong>Technician Dispatch:</strong> A certified technician will be assigned to your service run in {formData.city || 'Elkhart, IN'}.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="tel:5745648115"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            (574) 564-8115 — Direct Line
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${className}`}>
      {/* Header Banner */}
      <div className="bg-blue-900 text-white px-6 py-4 border-b border-blue-950">
        <h3 className="font-black text-base md:text-lg tracking-tight">REQUEST A FREE ESTIMATE</h3>
        <p className="text-xs text-blue-200 mt-1">Get same-day service and upfront, clear options.</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        {/* Hidden Honeypot Field for anti-spam bots */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <input
            type="text"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp}
            onChange={handleChange}
          />
        </div>

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-xs flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span className="font-semibold">{errorMessage}</span>
            </div>
            <a
              href="tel:5745648115"
              className="inline-flex items-center gap-1.5 text-blue-900 font-extrabold hover:underline text-xs mt-1"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call us directly at (574) 564-8115
            </a>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="form-name" className="text-xs font-bold text-slate-700 block mb-1">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
          />
        </div>

        {/* Phone & Email Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-phone" className="text-xs font-bold text-slate-700 block mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="form-phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(574) 564-8115"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label htmlFor="form-email" className="text-xs font-bold text-slate-700 block mb-1">
              Email Address
            </label>
            <input
              id="form-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* City & Service Needed Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-city" className="text-xs font-bold text-slate-700 block mb-1">
              City / Location <span className="text-red-500">*</span>
            </label>
            <select
              id="form-city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            >
              <option value="">Select Location</option>
              <option value="Elkhart, IN">Elkhart, IN</option>
              {Object.values(citiesData).map(city => (
                <option key={city.id} value={city.cityName}>
                  {city.cityName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="form-service" className="text-xs font-bold text-slate-700 block mb-1">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="form-service"
              name="serviceNeeded"
              required
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
            >
              <option value="">Select Service</option>
              {Object.values(servicesData).map(service => (
                <option key={service.id} value={service.title.split('|')[0].trim()}>
                  {service.title.split('|')[0].trim()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description Message */}
        <div>
          <label htmlFor="form-message" className="text-xs font-bold text-slate-700 block mb-1">
            Tell us about the issue
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. My garage door spring snapped this morning, need help ASAP."
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        {/* Agreement to Terms checkbox */}
        <div className="flex items-start gap-2.5 mt-1">
          <input
            id="agreedToTerms"
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-blue-900 border-slate-300 rounded focus:ring-blue-900"
          />
          <label htmlFor="agreedToTerms" className="text-[10px] md:text-xs text-slate-500 leading-tight">
            I agree to receive SMS notifications or phone calls from Elkhart Garage Door Repair to coordinate services. Message & data rates may apply.
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-slate-950 font-black py-3 px-6 rounded-xl text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer border border-amber-600 mt-2 hover:shadow-lg active:scale-95 transform"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
              SUBMITTING REQUEST...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              SEND DISPATCH REQUEST
            </>
          )}
        </button>
      </form>
    </div>
  );
}

