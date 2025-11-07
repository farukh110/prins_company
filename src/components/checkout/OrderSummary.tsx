import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const OrderSummary = () => {

    return (
    <div className="p-6">
      <h4 className="text-xl font-semibold mb-6">ORDER SUMMARY</h4>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          Cart Icon <span className="font-medium">2 items</span>
        </div>
        <button className="text-sm flex items-center gap-1">Show <ChevronDown className="w-5 h-5" /></button>
      </div>

      <div className="flex gap-3 border-t border-b py-4">
        <div className="w-14 h-14 border overflow-hidden rounded relative">
          <Image src="/images/products/rings/10.webp" alt="Emerald Pendant" fill className="object-cover" />
        </div>
        <div className="w-14 h-14 border overflow-hidden rounded relative">
          <Image src="/images/products/rings/12.webp" alt="Free Pendant" fill className="object-cover" />
          <span className="absolute top-1 left-[-18px] -rotate-45 bg-red-500 text-white text-xs px-3">FREE</span>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span> <span>$1,149</span></div>
        <div className="flex justify-between text-[#161618]">
          <span>Promotional Savings (10% OFF)</span> <span>-$115</span>
        </div>
        <div className="flex justify-between text-[#161618]"><span>Express Shipping</span> <span>FREE</span></div>
        <div className="flex justify-between"><span>Sales Tax</span> <span>TBD</span></div>
        <div className="border-t pt-3 font-bold text-lg flex justify-between">
          <span>Order Total (before tax)</span> <span>$1,034</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;