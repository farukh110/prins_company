'use client';

import React from 'react';
import { Check } from 'lucide-react';

const OfferCode: React.FC = () => {
    return (
        <div className="bg-white md:shadow-[0_1px_10px_0_rgba(0,0,0,0.05)] lg:mt-0">
            <section className="px-4 py-6 md:p-6 md:shadow-[0_1px_10px_0_rgba(0,0,0,0.05)] bg-white lg:mt-0">
                <h2 className="text-[16px] poppins-regular flex items-center" role="heading" aria-level={4}>
                    Offer Code
                </h2>

                <div className="mt-2 flex gap-2">
                    <div className="w-full max-w-[256px] md:max-w-[167px] lg:max-w-[248px]">
                        <input
                            type="text"
                            id="coupon_code"
                            name="coupon_code"
                            defaultValue="HOLIDAY"
                            placeholder="Enter coupon code"
                            aria-label="Enter coupon code"
                            className="w-full h-10 border border-grayscale-500 px-3 py-2 text-base uppercase outline-none placeholder:text-grayscale-600 focus:border-grayscale-800 md:text-[13px] font-medium transition-colors"
                        />
                    </div>

                    <div className="flex-1 min-w-[100px] md:max-w-[100px] lg:max-w-[calc(100%_-_256px)]">
                        <span className="flex h-10 items-center justify-center gap-2 border border-grayscale-800 bg-white px-4 text-sm font-medium text-[#161618] cursor-default">
                            <span>Applied</span>
                            <Check className="h-5 w-5 text-grayscale-900" aria-hidden="true" />
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfferCode;