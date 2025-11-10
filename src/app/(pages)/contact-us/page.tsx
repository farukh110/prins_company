'use client';

import React, { useState } from 'react';
import { Loader2, ArrowRight, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUsComponent: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof ContactForm, boolean>>({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const usaPhoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    // Check required fields
    const requiredFields: (keyof ContactForm)[] = ['name', 'email', 'phone', 'subject', 'message'];
    const missingField = requiredFields.find((field) => !formData[field].trim());

    if (missingField) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate USA phone number
    if (!usaPhoneRegex.test(formData.phone.trim())) {
      setError('Please enter a valid US phone number (e.g., (555) 123-4567 or 555-123-4567)');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTouched({ name: false, email: false, phone: false, subject: false, message: false });
    } catch (err) {
      setError('Failed to send your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Helper: Check if phone is invalid (after touch)
  const isPhoneInvalid = touched.phone && formData.phone && !usaPhoneRegex.test(formData.phone);

  return (
    <div className="flex items-center justify-center bg-gray-50 p-12">
      <div className="w-full md:w-[580px] bg-white ring-1 ring-gray-200">
        {/* Header */}
        <div className="relative pt-12 px-8 pb-12">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-[20px] poppins-light text-[#161618]">
                Contact Us
              </p>
              <button
                type="button"
                className="text-[14px] poppins-light cursor-pointer flex items-center whitespace-nowrap hover:text-blue-700 transition-colors"
                onClick={() => (window.location.href = '/')}
              >
                <span>Back to Home</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <p className="mt-2 text-sm text-gray-600 poppins-light">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <input
                className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.name && !formData.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Name*"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Email */}
              <input
                className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.email && !formData.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Email Address*"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Phone Number (USA) */}
              <input
                className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  (touched.phone && !formData.phone) || isPhoneInvalid
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="Phone Number* (e.g., (555) 123-4567)"
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Subject */}
              <input
                className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.subject && !formData.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Subject*"
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Message */}
              <textarea
                className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-32 p-3 resize-none outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                  touched.message && !formData.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your Message*"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Feedback */}
              {error && (
                <p className="text-red-600 text-sm poppins-light">{error}</p>
              )}
              {success && !loading && (
                <p className="text-green-600 text-sm poppins-light">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#161618] cursor-pointer text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 mt-5 hover:bg-gray-900 disabled:opacity-50 transition-all"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#DDDDDD] text-center py-3 text-base flex flex-wrap justify-center items-center gap-1">
          <span className="poppins-light text-[16px]">Need immediate help?</span>
          <a
            href="tel:+15551234567"
            className="flex items-center cursor-pointer text-[#161618] hover:text-blue-700 transition-colors"
          >
            <span className="font-semibold poppins-semibold">Call Us</span>
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;