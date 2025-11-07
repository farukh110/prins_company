'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { Register } from '@/types/auth';
import { registerUser, resetRegisterState } from '@/redux/api/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

const RegisterComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector((s) => s.auth);

  const [formData, setFormData] = useState<Register>({
    business_name: '',
    contact_name: '',
    email: '',
    customer_id: '',
    phone: '',
    address: '',
    zipcode: '',
  });

  const [touched, setTouched] = useState<Record<keyof Register, boolean>>({
    business_name: false,
    contact_name: false,
    email: false,
    customer_id: false,
    phone: false,
    address: false,
    zipcode: false,
  });

  // Reset error when component unmounts
  useEffect(() => {
    return () => {
      dispatch(resetRegisterState());
    };
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark every field as touched
    setTouched({
      business_name: true,
      contact_name: true,
      email: true,
      customer_id: true,
      phone: true,
      address: true,
      zipcode: true,
    });

    // Simple required-field validation
    const required: (keyof Register)[] = [
      'business_name',
      'contact_name',
      'email',
      'customer_id',
      'phone',
      'address',
      'zipcode',
    ];
    const isValid = required.every((f) => formData[f].trim() !== '');
    if (!isValid) return;

    // Dispatch the async thunk
    dispatch(registerUser(formData));
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-12">
      <div className="w-full md:w-[460px] bg-white ring-1 ring-gray-200">
        {/* Header */}
        <div className="relative pt-12 px-8 pb-12">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-[20px] poppins-light text-[#161618]">
                Create New Account
              </p>
              <button
                type="button"
                className="text-[14px] poppins-light cursor-pointer flex items-center whitespace-nowrap hover:text-blue-700 transition-colors"
                onClick={() => (window.location.href = '/login')}
              >
                <span>Log In</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* ==== INPUTS ==== */}
              {(
                [
                  { label: 'Business Name*', name: 'business_name' },
                  { label: 'Contact Name*', name: 'contact_name' },
                  { label: 'Email*', name: 'email', type: 'email' },
                  { label: 'Customer ID*', name: 'customer_id' },
                  { label: 'Phone* (e.g. 03001234567)', name: 'phone', type: 'tel' },
                  { label: 'Address*', name: 'address' },
                  { label: 'Zipcode*', name: 'zipcode' },
                ] as const
              ).map(({ label, name, type = 'text' }) => (
                <input
                  key={name}
                  className={`w-full border text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all ${
                    touched[name] && !formData[name] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={label}
                  required
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ))}

              {/* Terms & Offers */}
              <div className="flex items-start gap-3 text-[13px]">
                <div className="relative">
                  <input id="terms" type="checkbox" className="peer sr-only" required />
                  <label
                    htmlFor="terms"
                    className="flex h-5 w-5 cursor-pointer items-center justify-center border-2 border-gray-800 bg-white transition-all duration-200 peer-checked:bg-[#161618] peer-checked:border-[#161618] peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-opacity-50 after:absolute after:h-2 after:w-1 after:scale-0 after:border-b-2 after:border-r-2 after:border-white after:rotate-45 after:origin-center after:transition-transform after:duration-200 peer-checked:after:scale-100"
                  />
                </div>
                <label htmlFor="terms" className="cursor-pointer select-none leading-tight">
                  By clicking "Register". I agree and accept your{' '}
                  <a href="/b/term-of-use" target="_blank" rel="follow" className="underline underline-offset-4 hover:text-blue-700">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="/b/privacy-and-security" target="_blank" rel="follow" className="underline underline-offset-4 hover:text-blue-700">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex items-start gap-3 text-[13px]">
                <div className="relative">
                  <input id="offer" type="checkbox" className="peer sr-only" />
                  <label
                    htmlFor="offer"
                    className="flex h-5 w-5 cursor-pointer items-center justify-center border-2 border-gray-800 bg-white transition-all duration-200 peer-checked:bg-[#161618] peer-checked:border-[#161618] peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-opacity-50 after:absolute after:h-2 after:w-1 after:scale-0 after:border-b-2 after:border-r-2 after:border-white after:rotate-45 after:origin-center after:transition-transform after:duration-200 peer-checked:after:scale-100"
                  />
                </div>
                <label htmlFor="offer" className="cursor-pointer select-none leading-tight">
                  Sign me up for exclusive offers from Prins Company
                </label>
              </div>

              {/* Feedback */}
              {error && (
                <p className="text-red-600 text-sm poppins-light">{error}</p>
              )}
              {data.email && !loading && !error && (
                <p className="text-green-600 text-sm poppins-light">
                  Registration successful! Welcome, {data.contact_name}.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#161618] text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 mt-5 hover:bg-gray-900 disabled:opacity-50 transition-all"
              >
                <span>Register</span>
                {loading && <Loader2 className="w-6 h-6 animate-spin" />}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#DDDDDD] text-center py-3 text-base flex flex-wrap justify-center items-center gap-1">
          <span className="poppins-light text-[16px]">Already have an account?</span>
          <button
            type="button"
            onClick={() => (window.location.href = '/login')}
            className="flex items-center cursor-pointer text-[#161618] hover:text-blue-700 transition-colors"
          >
            <span className="font-semibold poppins-semibold">Login</span>
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;