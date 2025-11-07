"use client";

import ContactSection from '@/components/checkout/ContactSection';
import DeliverySection from '@/components/checkout/DeliverySection';
import ExpressCheckout from '@/components/checkout/ExpressCheckout';
import OrderStrip from '@/components/checkout/OrderStrip';
import OrderSummary from '@/components/checkout/OrderSummary';
import PaymentSection from '@/components/checkout/PaymentSection';
import { Lock, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const Checkout: React.FC = () => {

    const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);

    return (
        <>
            <div className="bg-[#F5F5F6]">
                <h1
                    className="text-xl md:text-2xl font-bold text-center px-2 py-4 md:px-0 md:py-4 lg:px-4 bg-gray-400 md:bg-transparent mx-auto border-b-2 border-gray-500 md:border-none"
                    id="checkoutHeading"
                >
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4 h-full">

                        <div className="hidden md:flex text-[12px] items-center justify-start">
                            <a
                                href="/my-cart"
                                aria-label="back"
                                className="flex items-center text-[#161618] font-medium hover:no-underline"
                                tabIndex={0}
                                data-trk-type="link"
                                data-trk-title="back"
                                rel="follow"
                            >
                                <ChevronLeft className='text-[#161618]' size={24} />
                                <span className="ml-2 text-[#161618]">Bag</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-2 col-span-3 md:col-span-1">
                            <Lock size={24} className="mb-1" />
                            <span className='text-[24px] text-[#161618] poppins-medium'>Secure Checkout</span>
                        </div>

                        <div className="hidden md:block" />
                    </div>
                </h1>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0 bg-[#FAFAFB]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-10 pt-6 lg:pt-8 pb-14 lg:pb-18">
                        {/* Left Column */}
                        <div className="w-full lg:max-w-[732px]">
                            <OrderStrip total="$1,034" showDetails={showOrderDetails} setShowDetails={setShowOrderDetails} />
                            <ExpressCheckout />
                            <ContactSection />
                            <DeliverySection />
                            <PaymentSection />
                        </div>

                        {/* Right Column - Desktop Order Summary */}
                        <div className="hidden lg:block w-full lg:max-w-[508px] pr-4">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;