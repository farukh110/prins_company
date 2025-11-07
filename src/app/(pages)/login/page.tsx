'use client';

import React, { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  // const createNewAccount = () => {
  //   router.push('/register');
  // };

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
              <p className="text-[20px] poppins-light text-[#161618]">Log In</p>
              <button
                type="button"
                className="text-[14px] poppins-light cursor-pointer flex items-center whitespace-nowrap hover:text-blue-700 transition-colors"
                data-trk-type="button"
                data-trk-title="Create New Account"
                // onClick={createNewAccount}
              >
                <span>Create New Account</span>
                <ArrowRight className="inline-block w-5 h-5 ml-1" />
              </button>
            </div>

            <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
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

              <div className="text-left">
                <button
                  type="button"
                  className="text-[#161618] text-[14px] poppins-light hover:text-blue-700 transition-colors"
                  data-trk-type="button"
                  data-trk-title="Forgot Password"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#161618] text-white poppins-regular md:text-[22px] h-[55px] flex items-center justify-center gap-2 mt-5 hover:bg-gray-900 disabled:opacity-50 transition-all"
                data-trk-type="button"
                data-trk-title="Log In"
              >
                <span>Log In</span>
                {isLoading && <Loader2 className="w-6 h-6 animate-spin" />}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#DDDDDD] text-center py-3 text-base flex flex-wrap justify-center items-center gap-1">
          <span className='poppins-light text-[16px]'>Don't have an account?</span>
          <button
            type="button"
            className="flex items-center cursor-pointer text-[#161618] hover:text-blue-700 transition-colors"
            data-trk-type="button"
            data-trk-title="Register Now"
            // onClick={createNewAccount}
          >
            <span className='font-semibold poppins-semibold'>Register Now</span>
            <ArrowRight className="inline-block w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;