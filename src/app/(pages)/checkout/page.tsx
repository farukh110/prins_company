'use client';

import ContactSection from '@/components/checkout/ContactSection';
import DeliverySection from '@/components/checkout/DeliverySection';
import ExpressCheckout from '@/components/checkout/ExpressCheckout';
import OrderStrip from '@/components/checkout/OrderStrip';
import OrderSummary from '@/components/checkout/OrderSummary';
import PaymentSection from '@/components/checkout/PaymentSection';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { cartSlice, selectCartSnapshot } from '@/redux/api/cart/cartSlice';
import {
  performCheckout,
  selectCheckoutSummary,
  selectCheckoutLoading,
  selectCheckoutError,
} from '@/redux/api/checkout/checkoutSlice';
import { CheckoutForm } from '@/types/checkout';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { items, subtotal } = useAppSelector(selectCartSnapshot);
  const checkoutSummary = useAppSelector(selectCheckoutSummary);
  const checkoutLoading = useAppSelector(selectCheckoutLoading);
  const checkoutError = useAppSelector(selectCheckoutError);

  const [hydrated, setHydrated] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const [form, setForm] = useState<CheckoutForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: 'United States',
  });

  useEffect(() => {
    const encoded = searchParams.get("cart");
    if (!encoded) {
      setHydrated(true);
      return;
    }
    try {
      const payload = JSON.parse(Buffer.from(encoded, "base64").toString());
      dispatch(cartSlice.actions.clearCart());
      payload.items.forEach((item: any) => {
        for (let i = 0; i < item.quantity; i++) {
          dispatch(cartSlice.actions.addItem({ ...item, quantity: undefined }));
        }
      });
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete("cart");
      window.history.replaceState({}, "", cleanUrl);
    } catch (e) {
      console.error("Failed to restore cart", e);
    } finally {
      setHydrated(true);
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    if (checkoutSummary) {
      // router.push(`/checkout/success?checkout_id=${checkoutSummary.checkout_id}`);
    }
  }, [checkoutSummary, router]);

  const updateForm = useCallback(<K extends keyof CheckoutForm>(key: K, value: CheckoutForm[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  }, []);

  const handlePay = async () => {
    if (!items.length) return;

    const payload = {
      ...form,
      products: JSON.stringify(items),
    };

    await dispatch(performCheckout(payload));
  };

  if (!hydrated) return null;
  const isEmpty = items.length === 0;

  return (
    <>
      <div className="bg-[#F5F5F6]">…</div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0 bg-[#FAFAFB]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-10 pt-6 lg:pt-8 pb-14 lg:pb-18">

            <div className="w-full lg:max-w-[732px] space-y-6">
              <OrderStrip
                total={`$${subtotal.toFixed(2)}`}
                showDetails={showOrderDetails}
                setShowDetails={setShowOrderDetails}
                items={items}
                subtotal={subtotal}
              />
              <ExpressCheckout />

              <ContactSection values={form} onChange={updateForm} />
              <DeliverySection values={form} onChange={updateForm} />

              <PaymentSection
                onPay={handlePay}
                disabled={checkoutLoading || isEmpty}
                loading={checkoutLoading}
              />

              {checkoutError && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
                  {checkoutError}
                </div>
              )}
            </div>

            <div className="hidden lg:block w-full lg:max-w-[508px] pr-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;