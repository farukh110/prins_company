import { Truck } from "lucide-react";
import Image from "next/image";

const ExpressCheckout = () => {
    return (
        <>
            <div className="bg-white flex items-center p-3 a2 rounded-[4px] border border-[#E7E7E9] mt-6 mb-6">

                <Truck size={24} />

                <p className="pl-2 text-[12px] poppins-medium"> Free Express Shipping &amp; Extended Returns
                </p>
            </div>

            <div className="bg-white p-6 shadow-sm mb-3 md:mt-0 mt-6">
                <h3 className="text-center text-[16px] poppins-regular mb-4">Express Checkout</h3>
                <div className="flex gap-4 justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 w-full text-black font-medium py-3 px-6 rounded transition">
                        <Image className="mx-auto" src="/images/payments/paypal.svg" alt="Amazon Pay" width={80} height={20} />
                    </button>
                    <button className="bg-orange-400 hover:bg-orange-500 w-full text-white font-medium py-3 px-6 rounded transition flex items-center gap-2">
                        <Image className="mx-auto" src="/images/payments/amazon.svg" alt="Amazon Pay" width={80} height={50} />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3 px-4 pb-2 md:px-6 md:pb-3">
                <span className="flex-1 h-px bg-[#E7E7E9]"></span>
                <span className="px-3 text-sm font-medium text-grayscale-700">OR</span>
                <span className="flex-1 h-px bg-[#E7E7E9]"></span>
            </div>
        </>
    );
};

export default ExpressCheckout;