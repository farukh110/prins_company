'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAppSelector } from '@/hooks/redux';
import { selectCartSnapshot } from '@/redux/api/cart/cartSlice';
import { useState } from 'react';

const PaymentSection = () => {
  const { items, subtotal } = useAppSelector(selectCartSnapshot);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [orderId, setOrderId] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="bg-white shadow-sm p-6 text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  // SUCCESS STATE — shown right inside checkout
  if (paymentStatus === 'success') {
    return (
      <div className="bg-white shadow-sm p-8 rounded-lg text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#161618] mb-3">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">
          Thank you for your order. We`&apos;ll send a confirmation to your email shortly.
        </p>
        <p className="text-sm text-gray-500">
          Order ID: <span className="font-mono font-bold">{orderId}</span>
          <br />
          Amount Paid: <span className="font-bold">${subtotal.toFixed(2)}</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition"
        >
          Place Another Order
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm p-6 rounded-lg">
      <h2 className="text-[20px] poppins-semibold text-[#161618] mb-2">PAYMENT</h2>
      <p className="text-sm text-gray-600 mb-6">
        All transactions are secure and encrypted.
      </p>

      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
          currency: "USD",
          intent: "capture",
        }}
      >
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
          <PayPalButtons
            style={{ layout: "vertical", color: "gold", shape: "rect", label: "paypal", height: 48 }}
            disabled={paymentStatus === 'processing'}

            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  description: "Prins Company Order",
                  amount: {
                    currency_code: "USD",
                    value: subtotal.toFixed(2),
                  },
                }],
                application_context: { shipping_preference: "NO_SHIPPING" },
              });
            }}

            onApprove={async (data, actions) => {
              setPaymentStatus('processing');
              try {
                const order = await actions.order!.capture();
                setOrderId(order.id);
                setPaymentStatus('success');
                console.log("Payment completed!", order);
              } catch (err) {
                setPaymentStatus('error');
                console.log('error: ', err);
                alert("Payment failed. Please try again.");
              }
            }}

            onError={() => {
              setPaymentStatus('error');
              alert("PayPal error. Please try again.");
            }}
          />
        </div>

        {paymentStatus === 'processing' && (
          <p className="text-center text-sm text-gray-600 mt-4 animate-pulse">
            Processing your payment...
          </p>
        )}

        {paymentStatus === 'error' && (
          <p className="text-center text-sm text-red-600 mt-4">
            Payment failed. Please try again.
          </p>
        )}
      </PayPalScriptProvider>

      <p className="text-xs text-gray-600 text-right mt-6">
        By placing your order, you agree to our{' '}
        <a href="#" className="underline hover:text-gray-900">Terms & Conditions</a> and{' '}
        <a href="#" className="underline hover:text-gray-900">Privacy Policy</a>
      </p>
    </div>
  );
};

export default PaymentSection;