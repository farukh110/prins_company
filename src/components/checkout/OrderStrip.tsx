'use client';

import { ChevronsDown } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface OrderStripProps {
  total: string;
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
  items: Product[];
  subtotal: number;
}

const OrderStrip = ({ total, showDetails, setShowDetails, items, subtotal }: OrderStripProps) => {
  return (
    <>
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

      {showDetails && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40 max-h-[80vh] overflow-auto">
          <MobileOrderDetails items={items} subtotal={subtotal} />
        </div>
      )}
    </>
  );
};

function MobileOrderDetails({ items, subtotal }: { items: Product[]; subtotal: number }) {

  const savings = items.reduce((acc, p) => acc + (p.originalPrice || 0) - p.price, 0);

  return (
    <div className="p-4">
      <div className="space-y-4 border-b border-t border-gray-200 pb-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="w-20 h-20 border border-gray-200 overflow-hidden relative">
              <Image
                src={item.image || '/placeholder.jpg'}
                alt={item.name}
                fill
                className="object-cover"
              />
              {item.isFree && (
                <span className="absolute top-2 left-[-24px] -rotate-45 bg-red-500 text-white text-xs px-4 py-0.5">FREE</span>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-600">QTY: {item.quantity}</p>
              <p className="text-right">
                {item.originalPrice && (
                  <span className="line-through text-gray-500 text-xs">${item.originalPrice}</span>
                )}{' '}
                <span className="text-sm">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></div>
        {savings > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Promotional Savings</span> <span>-${savings.toFixed(2)}</span>
          </div>
        )}
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