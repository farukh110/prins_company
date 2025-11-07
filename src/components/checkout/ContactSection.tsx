'use client';

import { useState } from 'react';

const ContactSection = () => {

  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div className="bg-white shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] poppins-semibold [#161618]">CONTACT</h2>
        <div className="text-sm">
          <a href="#" className="underline">Sign In</a> / <a href="#" className="underline">Register</a>
        </div>
      </div>

      <div className="max-w-md">
        <div className="relative mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none peer"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-gray-600 text-sm pointer-events-none transition-all peer-focus:top-1 peer-focus:text-xs">
            Email (for sending order confirmation)*
          </label>
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="w-4 h-4 rounded border-gray-800"
          />
          <span className="text-sm">Email me Angara updates and offers</span>
        </label>
      </div>
    </div>
  );
}

export default ContactSection;