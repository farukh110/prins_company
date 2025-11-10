'use client';

import React, { useState } from 'react';
import { Loader2, ArrowRight, Send, Gem, Handshake, Mail } from 'lucide-react';

interface PartnerForm {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  partnershipType: string;
  productInterest: string;
  message: string;
}

const PartnerWithUsComponent: React.FC = () => {
  const [formData, setFormData] = useState<PartnerForm>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: '',
    productInterest: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof PartnerForm, boolean>>({
    businessName: false,
    contactName: false,
    email: false,
    phone: false,
    website: false,
    partnershipType: false,
    productInterest: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const usaPhoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      businessName: true,
      contactName: true,
      email: true,
      phone: true,
      website: true,
      partnershipType: true,
      productInterest: true,
      message: true,
    });

    const required: (keyof PartnerForm)[] = [
      'businessName',
      'contactName',
      'email',
      'phone',
      'partnershipType',
      'productInterest',
      'message',
    ];
    const missing = required.find((f) => !formData[f].trim());
    if (missing) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!usaPhoneRegex.test(formData.phone.trim())) {
      setError('Please enter a valid US phone number (e.g., (555) 123‑4567).');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        partnershipType: '',
        productInterest: '',
        message: '',
      });
      setTouched({
        businessName: false,
        contactName: false,
        email: false,
        phone: false,
        website: false,
        partnershipType: false,
        productInterest: false,
        message: false,
      });
    } catch {
      setError('Failed to submit your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isPhoneInvalid =
    touched.phone && formData.phone && !usaPhoneRegex.test(formData.phone);

  return (
    <div className="flex items-center justify-center bg-gray-50 p-6 md:p-12">
      <div className="w-full max-w-lg md:max-w-[840px] bg-white ring-1 ring-gray-200 shadow-sm">
        {/* Header */}
        <div className="pt-10 px-6 pb-8 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Gem className="w-8 h-8 text-amber-600" />
              <h1 className="text-2xl poppins-light text-[#161618]">
                Partner With Prins
              </h1>
            </div>
            <button
              type="button"
              onClick={() => (window.location.href = '/')}
              className="flex items-center gap-1 text-sm poppins-light text-[#161618] hover:text-blue-700 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-600 poppins-light">
            Grow your jewelry business with Prins – the premium destination for
            rings, bracelets, gold & more. Whether you’re a retailer,
            wholesaler, designer, or influencer, let’s craft a partnership that
            shines.
          </p>

          <form noValidate onSubmit={handleSubmit} className="mt-7">
            {/* GRID LAYOUT STARTS HERE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Business Name */}
              <input
                name="businessName"
                type="text"
                placeholder="Business / Store Name*"
                required
                value={formData.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base placeholder:text-sm placeholder:text-gray-500 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.businessName && !formData.businessName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />

              {/* Contact Name */}
              <input
                name="contactName"
                type="text"
                placeholder="Your Full Name*"
                required
                value={formData.contactName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base placeholder:text-sm placeholder:text-gray-500 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.contactName && !formData.contactName
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                placeholder="Business Email*"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base placeholder:text-sm placeholder:text-gray-500 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.email && !formData.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number* (e.g., (555) 123‑4567)"
                required
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base placeholder:text-sm placeholder:text-gray-500 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  (touched.phone && !formData.phone) || isPhoneInvalid
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />

              {/* Partnership Type */}
              <select
                name="partnershipType"
                required
                value={formData.partnershipType}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.partnershipType && !formData.partnershipType
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              >
                <option value="" disabled>
                  Select Partnership Type*
                </option>
                <option value="retailer">Retailer / Boutique</option>
                <option value="wholesale">Wholesale Buyer</option>
                <option value="designer">Designer / Brand</option>
                <option value="influencer">Influencer / Affiliate</option>
                <option value="other">Other</option>
              </select>

              {/* Product Interest */}
              <select
                name="productInterest"
                required
                value={formData.productInterest}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`h-11 px-3 border text-base outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.productInterest && !formData.productInterest
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              >
                <option value="" disabled>
                  Products You’re Interested In*
                </option>
                <option value="rings">Rings</option>
                <option value="bracelets">Bracelets</option>
                <option value="necklaces">Necklaces</option>
                <option value="earrings">Earrings</option>
                <option value="gold">Gold Collections</option>
                <option value="custom">Custom / Bespoke</option>
                <option value="all">All Categories</option>
              </select>
            </div>

            {/* Website (Full Width, Optional) */}
            <input
              name="website"
              type="url"
              placeholder="Website (optional)"
              value={formData.website}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-5 w-full h-11 px-3 border text-base placeholder:text-sm placeholder:text-gray-500 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all border-gray-300"
            />

            {/* Message (Full Width) */}
            <textarea
              name="message"
              placeholder="Tell us about your business & partnership goals*"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-5 w-full p-3 border text-base placeholder:text-sm placeholder:text-gray-500 resize-none outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                touched.message && !formData.message
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />

            {/* Feedback */}
            {error && (
              <p className="mt-4 text-sm text-red-600 poppins-light">{error}</p>
            )}
            {success && !loading && (
              <p className="mt-4 text-sm text-green-600 poppins-light">
                Thank you! Your partnership request has been sent. A Prins
                representative will contact you soon.
              </p>
            )}

            {/* Submit Button (Full Width) */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full cursor-pointer flex items-center justify-center gap-2 h-14 bg-[#161618] text-white poppins-regular text-lg md:text-xl hover:bg-gray-900 disabled:opacity-50 transition-all"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-[#DDDDDD] flex flex-col items-center gap-2 py-4 px-6 text-center md:flex-row md:justify-center">
          <Handshake className="w-5 h-5 text-[#161618]" />
          <span className="poppins-light text-base">
            Prefer to talk? Reach our Partnership Team directly:
          </span>
          <a
            href="mailto:partners@prinscompany.com"
            className="flex items-center gap-1 text-[#161618] hover:text-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="font-semibold poppins-semibold">
              partners@prinscompany.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUsComponent;