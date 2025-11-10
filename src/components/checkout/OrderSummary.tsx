// components/checkout/OrderSummary.tsx
"use client";

import { useAppSelector } from "@/hooks/redux";
import { selectCartSnapshot } from "@/redux/api/cart/cartSlice";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const OrderSummary = () => {
  
  const { items, subtotal, saved } = useAppSelector(selectCartSnapshot);
  const totalBeforeTax = subtotal - saved;

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h4 className="text-xl font-semibold mb-6">ORDER SUMMARY</h4>

      {/* Items Count */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Cart Icon</span>
          <span className="font-medium">{items.length} items</span>
        </div>
        <button className="text-sm flex items-center gap-1 text-blue-600 hover:underline">
          Show <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Product Thumbnails */}
      <div className="flex gap-3 border-t border-b py-4">
        {items.slice(0, 3).map((item) => (
          <div
            key={`${item.id}-${item.metal}-${item.size}`}
            className="w-14 h-14 border overflow-hidden rounded relative"
          >
            <Image
              src={item.image || "/images/fallback.jpg"}
              alt={item.name}
              fill
              className="object-cover"
            />
            {item.originalPrice && parseFloat(item.originalPrice) > parseFloat(item.price) && (
              <span className="absolute top-1 left-[-18px] -rotate-45 bg-red-500 text-white text-xs px-3 py-0.5">
                FREE
              </span>
            )}
          </div>
        ))}
        {items.length > 3 && (
          <div className="w-14 h-14 border rounded flex items-center justify-center text-xs text-gray-500">
            +{items.length - 3}
          </div>
        )}
      </div>

      {/* Pricing Breakdown */}
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {saved > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Promotional Savings</span>
            <span>-${saved.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-[#161618]">
          <span>Express Shipping</span>
          <span>FREE</span>
        </div>

        <div className="flex justify-between">
          <span>Sales Tax</span>
          <span>TBD</span>
        </div>

        <div className="border-t pt-3 font-bold text-lg flex justify-between">
          <span>Order Total (before tax)</span>
          <span>${totalBeforeTax.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;