'use client';

import React, { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

const ForgotPassword: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 p-12">
      <div
        className="w-full md:w-[460px] bg-white ring-1 ring-gray-200"
        data-trk-title="Login Form"
        data-trk-type="engagement"
      >
        {/* Main Form Container */}
        <div className="relative pt-12 px-8 pb-12 max-h-[calc(90vh-30px)] overflow-y-auto">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-[20px] poppins-light text-[#161618]">Forgot Password</p>
              <button
                type="button"
                className="text-[14px] poppins-light cursor-pointer flex items-center whitespace-nowrap hover:text-blue-700 transition-colors"
                data-trk-type="button"
                data-trk-title="Create New Account"
              >
                <span>Go Back</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <p className="mt-3 text-[14px] poppins-light text-[#161618]">Please enter your email address below to receive a password reset link.</p>

            <form noValidate onSubmit={handleSubmit} className="mt-5 mb-10 space-y-5">
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="Email*"
                required
                type="email"
                name="email"
              />
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#161618] text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 hover:bg-gray-900 disabled:opacity-50 transition-all"
                data-trk-type="button"
                data-trk-title="Log In"
              >
                <span>Submit</span>
                {isLoading && <Loader2 className="w-6 h-6 animate-spin" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;