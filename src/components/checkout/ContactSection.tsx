'use client';

import { CheckoutForm } from "@/types/checkout";
import { useState, useRef, useEffect } from "react";

interface Props {
  values: Pick<CheckoutForm, 'email'>;
  onChange: <K extends keyof CheckoutForm>(key: K, value: CheckoutForm[K]) => void;
}

const ContactSection = ({ values, onChange }: Props) => {
  const [subscribe, setSubscribe] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Optional: Sync label position on mount if email is pre-filled
  useEffect(() => {
    if (values.email && inputRef.current) {
      inputRef.current.setAttribute('data-filled', 'true');
    }
  }, [values.email]);

  return (
    <div className="bg-white shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] poppins-semibold text-[#161618]">CONTACT</h2>
        <div className="text-sm">
          <a href="#" className="underline">Sign In</a> / <a href="#" className="underline">Register</a>
        </div>
      </div>

      <div className="max-w-md">
        <div className="relative mb-4">
          <input
            ref={inputRef}
            type="email"
            value={values.email}
            onChange={(e) => {
              onChange('email', e.target.value);
              // Update data-filled attribute
              if (inputRef.current) {
                inputRef.current.setAttribute('data-filled', e.target.value ? 'true' : 'false');
              }
            }}
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none peer pt-6 pb-2"
            placeholder=" "
            required
          />
          <label
            className={`
              absolute left-4 text-gray-600 text-sm pointer-events-none transition-all duration-200 origin-left
              peer-focus:top-1 peer-focus:text-xs peer-focus:scale-75
              peer-valid:top-1 peer-valid:text-xs peer-valid:scale-75
              ${values.email ? 'top-1 text-xs scale-75' : 'top-3 scale-100'}
            `}
          >
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
          <span className="text-sm">Email me Prins Company updates and offers</span>
        </label>
      </div>
    </div>
  );
};

export default ContactSection;