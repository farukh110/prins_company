'use client';

import { ChevronsDown } from 'lucide-react';
import Image from 'next/image';

interface OrderStripProps {
  total: string;
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
}

const OrderStrip = ({ total, showDetails, setShowDetails }: OrderStripProps) => {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="flex justify-between items-center px-5 py-3 bg-gray-100 border-b-2 border-gray-200 md:hidden sticky top-0 z-50">
        <h4 className="text-sm font-medium">
          Order Total: <span className="font-semibold text-base ml-1">${total}</span>
        </h4>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1.5 text-sm cursor-pointer"
        >
          Show <ChevronsDown className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {showDetails && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40 max-h-[80vh] overflow-auto">
          <MobileOrderDetails />
        </div>
      )}
    </>
  );
}

function MobileOrderDetails() {
  return (
    <div className="p-4">
      <div className="space-y-4 border-b border-t border-gray-200 pb-4">
        {/* Items */}
        <div className="flex gap-4 items-center">
          <div className="w-20 h-20 border border-gray-200 overflow-hidden relative">
            <Image
              src="https://assets.angara.com/pendant/sp0169e/6x4mm-aaa-emerald-white-gold-pendant.jpg"
              alt="Prong-Set Emerald Teardrop Pendant"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-2">Prong-Set Emerald Teardrop V-Bale Pendant with Diamond</p>
            <p className="text-xs text-gray-600">QTY: 1</p>
            <p className="text-right">
              <span className="line-through text-gray-500 text-xs">$1,149</span>{' '}
              <span className="text-sm">$1,034</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="w-20 h-20 border border-gray-200 overflow-hidden relative">
            <Image
              src="https://assets.angara.com/pendant/fr000147/5mm-aa-london-blue-topaz-s999-silver-pendant.jpg"
              alt="Free Topaz Pendant"
              fill
              className="object-cover"
            />
            <span className="absolute top-2 left-[-24px] -rotate-45 bg-red-500 text-white text-xs px-4 py-0.5">FREE</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-2">Free Trillion London Blue Topaz Criss-Cross Pendant</p>
            <p className="text-right text-green-600">$0</p>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span> <span>$1,149</span></div>
        <div className="flex justify-between text-green-600">
          <span>Promotional Savings (10% OFF)</span> <span>-$115</span>
        </div>
        <div className="flex justify-between text-green-600"><span>Express Shipping</span> <span>FREE</span></div>
        <div className="flex justify-between"><span>Sales Tax</span> <span>TBD</span></div>
        <div className="border-t pt-3 font-bold text-lg flex justify-between">
          <span>Order Total (before tax)</span> <span>${total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderStrip;