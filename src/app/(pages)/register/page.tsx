'use client';

import React, { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

const Register: React.FC = () => {
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
        <div className="relative pt-12 px-8 pb-12">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-[20px] poppins-light text-[#161618]">Create New Account</p>
              <button
                type="button"
                className="text-[14px] poppins-light cursor-pointer flex items-center whitespace-nowrap hover:text-blue-700 transition-colors"
                data-trk-type="button"
                data-trk-title="Create New Account"
              >
                <span>Log In</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* ... all input fields ... */}
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="First Name*"
                required
                type="text"
                name="firstName"
              />
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="Last Name*"
                required
                type="text"
                name="lastName"
              />
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="Email*"
                required
                type="email"
                name="email"
              />
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="Password*"
                required
                type="password"
                name="password"
              />
              <input
                className="w-full border border-gray-300 text-base md:text-sm font-normal placeholder:text-sm placeholder:text-gray-500 h-10 px-3 outline-none focus:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                placeholder="Confirm Password*"
                required
                type="password"
                name="confirmPassword"
              />

              <div className="flex items-start gap-3 text-[13px]">
                <div className="relative">
                  <input
                    id="terms"
                    type="checkbox"
                    className="peer sr-only"
                    data-trk-type="button"
                    data-trk-title="By clicking Register. I agree and accept your Terms and Privacy Policy."
                    data-trk-extra='{"action":"checked"}'
                  />
                  <label
                    htmlFor="terms"
                    className="
                      flex h-5 w-5 cursor-pointer items-center justify-center
                      border-2 border-gray-800 bg-white
                      transition-all duration-200
                      peer-checked:bg-[#161618] peer-checked:border-[#161618]
                      peer-focus-visible:outline-none peer-focus-visible:ring-2
                      peer-focus-visible:ring-blue-500 peer-focus-visible:ring-opacity-50
                      after:absolute after:h-2 after:w-1 after:scale-0
                      after:border-b-2 after:border-r-2 after:border-white
                      after:rotate-45 after:origin-center
                      after:transition-transform after:duration-200
                      peer-checked:after:scale-100
                    "
                  />
                </div>

                <label htmlFor="terms" className="cursor-pointer select-none leading-tight">
                  By clicking "Register". I agree and accept your{" "}
                  <a
                    href="/b/term-of-use"
                    target="_blank"
                    rel="follow"
                    className="underline underline-offset-4 hover:text-blue-700"
                    data-trk-type="link"
                    data-trk-title="Terms"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="/b/privacy-and-security"
                    target="_blank"
                    rel="follow"
                    className="underline underline-offset-4 hover:text-blue-700"
                    data-trk-type="link"
                    data-trk-title="Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex items-start gap-3 text-[13px]">
                <div className="relative">
                  <input
                    id="offer"
                    type="checkbox"
                    className="peer sr-only"
                    data-trk-type="button"
                    data-trk-title="By clicking Register. I agree and accept your Terms and Privacy Policy."
                    data-trk-extra='{"action":"checked"}'
                  />
                  <label
                    htmlFor="offer"
                    className="
                      flex h-5 w-5 cursor-pointer items-center justify-center
                      border-2 border-gray-800 bg-white
                      transition-all duration-200
                      peer-checked:bg-[#161618] peer-checked:border-[#161618]
                      peer-focus-visible:outline-none peer-focus-visible:ring-2
                      peer-focus-visible:ring-blue-500 peer-focus-visible:ring-opacity-50
                      after:absolute after:h-2 after:w-1 after:scale-0
                      after:border-b-2 after:border-r-2 after:border-white
                      after:rotate-45 after:origin-center
                      after:transition-transform after:duration-200
                      peer-checked:after:scale-100
                    "
                  />
                </div>

                <label htmlFor="terms" className="cursor-pointer select-none leading-tight">
                  Sign me up for exclusive offers from Prins Company
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#161618] text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 mt-5 hover:bg-gray-900 disabled:opacity-50 transition-all"
                data-trk-type="button"
                data-trk-title="Register"
              >
                <span>Register</span>
                {isLoading && <Loader2 className="w-6 h-6 animate-spin" />}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#DDDDDD] text-center py-3 text-base flex flex-wrap justify-center items-center gap-1">
          <span className="poppins-light text-[16px]">Already have an account?</span>
          <button
            type="button"
            className="flex items-center cursor-pointer text-[#161618] hover:text-blue-700 transition-colors"
            data-trk-type="button"
            data-trk-title="Login"
          >
            <span className="font-semibold poppins-semibold">Login</span>
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;