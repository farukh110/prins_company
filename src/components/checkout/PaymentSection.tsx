import { useState } from "react";

const PaymentSection: React.FC = () => {

    const [showOrderDetails, setShowOrderDetails] = useState<boolean>(false);

    return (
        <div className="bg-white shadow-sm p-6">
            <h2 className="text-[20px] poppins-semibold [#161618] mb-2">PAYMENT</h2>
            <p className="text-sm text-gray-600 mb-6">All transactions are secure and encrypted.</p>

            {/* Stripe Element Placeholder */}
            <div className="border border-gray-300 rounded p-4 h-96 flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Stripe Payment Element Here</p>
            </div>

            <div className="mt-6 flex justify-end">
                <button className="w-full md:w-90 bg-gray-900 text-white py-3 px-6 font-medium hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">
                    Pay with Card
                </button>
            </div>

            <p className="text-xs text-gray-600 text-right mt-4">
                By placing your order, you agree to our{' '}
                <a href="#" className="underline">Terms & Conditions</a> and{' '}
                <a href="#" className="underline">Privacy Policy</a>
            </p>
        </div>
    );
};

export default PaymentSection;