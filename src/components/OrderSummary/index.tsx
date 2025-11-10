'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { OrderSummaryProps } from '@/types/cart';

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, saved }) => {

  const savingsPercentage = subtotal > 0 ? Math.round((saved / subtotal) * 100) : 0;
  const orderTotal = subtotal - saved;

  return (
    <div className="bg-white p-4 pt-0 md:p-6 md:pt-6 md:mt-2 md:shadow-[0_1px_10px_0_rgba(0,0,0,0.05)] lg:mt-0">
      <div className="offer-summary" id="offer-summary">
        <div className="summary-header">
          <h2 className="text-[16px] poppins-regular pb-2">Order Summary</h2>
        </div>

        <div className="total-section-wrapper">
          <div className="total-section pb-4">

            {/* Subtotal */}
            <div className="flex justify-between pb-2 text-sm">
              <span className="text-grayscale-700">Subtotal</span>
              <span className="notranslate">
                ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 0 })}
              </span>
            </div>

            {/* Promotional Savings */}
            {saved > 0 && (
              <div className="flex justify-between pb-2 text-sm">
                <p className="text-grayscale-700">
                  Promotional Savings{" "}
                  <span className="text-brand6-500">
                    (<span className="notranslate">{savingsPercentage}</span>%)
                  </span>
                </p>
                <span className="text-brand6-500 notranslate">
                  -${saved.toLocaleString('en-US', { minimumFractionDigits: 0 })}
                </span>
              </div>
            )}

            {/* Express Shipping */}
            <div className="flex justify-between pb-1 text-sm">
              <span className="text-grayscale-700">Express Shipping</span>
              <span className="text-brand6-500">FREE</span>
            </div>

            {/* Sales Tax */}
            <div className="flex justify-between pt-1 pb-0 relative text-sm">
              <div className="flex items-center text-grayscale-700">
                Sales Tax{" "}
                <span className="cursor-pointer ml-1">
                  <div
                    className="relative inline-block"
                    data-trk-type="tooltip"
                    data-trk-title="Sales tax is calculated based on your shipping address and applied at checkout."
                  >
                    <Info className="h-5 w-5 text-grayscale-800" />
                  </div>
                </span>
              </div>
              <span className="notranslate">Applied at Checkout</span>
            </div>
          </div>
        </div>

        {/* Final Total */}
        <div
          className="flex justify-between items-start border-t border-grayscale-500 pt-4 md:pt-4 text-base font-medium"
          id="orderTotal"
        >
          <span>
            Order Total
            <span className="text-grayscale-700 text-sm font-normal ml-1 relative top-[-1px] inline-block">
              (before tax)
            </span>
          </span>
          <span className="notranslate">
            ${orderTotal.toLocaleString('en-US', { minimumFractionDigits: 0 })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;