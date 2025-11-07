'use client';

import { useState } from 'react';

const DeliverySection = () => {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  return (
    <div className="bg-white shadow-sm p-6 mb-6">
      <h2 className="text-[20px] poppins-semibold mb-4 text-[#161618]">DELIVERY & SHIPPING</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name*"
          className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name*"
          className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>

      <select className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mt-4">
        <option>United States</option>
      </select>

      <input
        type="text"
        placeholder="Address*"
        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mt-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          placeholder="Apartment, Suite, Floor (Optional)"
          className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        <input
          type="text"
          placeholder="Town / City*"
          className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <select className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
          <option>Select State</option>
        </select>
        <input
          type="text"
          placeholder="Zip Code*"
          className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
      </div>

      <input
        type="tel"
        placeholder="Phone Number (for delivery updates)*"
        className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mt-4"
      />

      <label className="flex items-center gap-3 mt-6 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={sameAsShipping}
          onChange={(e) => setSameAsShipping(e.target.checked)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <span className="text-sm text-gray-700">Use this address for billing</span>
      </label>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="font-medium text-gray-900 mb-3">Shipping Method</p>
        <div className="bg-[#F5F5F6] p-4 border border-[#F5F5F6]">
          <p className="flex items-center gap-2 text-sm font-medium text-gray-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            FREE Express Shipping
          </p>
          <p className="text-sm text-gray-600 mt-1">Estimated Delivery By: Nov 10 - Nov 11</p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;