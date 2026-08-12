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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceNeeded || !formData.city) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Phone, City, Service).');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call to express backend /api/contact or similar
    setTimeout(() => {
      setStatus('success');
      // Console log for telemetry/debugging
      console.log('Lead submitted successfully from:', sourcePage, formData);
    }, 1200);
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
        <p className="text-emerald-800 text-sm mt-3 leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Our local Elkhart service coordinator has received your request for <strong>{formData.serviceNeeded}</strong>.
        </p>
        <div className="bg-white rounded-xl p-4 my-5 border border-emerald-100 text-left text-xs text-slate-600 flex flex-col gap-2 shadow-sm">
          <span className="font-bold text-slate-800 text-sm block border-b border-slate-100 pb-1.5">What Happens Next?</span>
          <p>• <strong>Within 10 Minutes:</strong> We will call you at <strong className="text-slate-900">{formData.phone}</strong> to confirm your address and schedule details.</p>
          <p>• <strong>Technician Dispatch:</strong> A certified technician will be assigned to your service run in {formData.city || 'your area'}.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="tel:5745648115"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 fill-current" />
            Call Emergency Line Now
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
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
            <span>{errorMessage}</span>
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
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-slate-950 font-black py-3 px-6 rounded-xl text-sm tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer border border-amber-600 mt-2 hover:shadow-lg active:scale-95 transform"
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
