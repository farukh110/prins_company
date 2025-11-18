'use client';

import { ChevronsDown } from 'lucide-react';
import Image from 'next/image';
import { CartItem } from '@/types/cart';  // Import your real CartItem

interface OrderStripProps {
  total: string;
  showDetails: boolean;
  setShowDetails: (value: boolean) => void;
  items: CartItem[];
  subtotal: number;
}

const OrderStrip = ({
  total,
  showDetails,
  setShowDetails,
  items,
  subtotal,
}: OrderStripProps) => {
  return (
    <>
      {/* Mobile Order Strip */}
      <div className="flex justify-between items-center px-5 py-3 bg-gray-100 border-b-2 border-gray-200 md:hidden sticky top-0 z-50">
        <h4 className="text-sm font-medium">
          Order Total:{' '}
          <span className="font-semibold text-base ml-1">${total}</span>
        </h4>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-1.5 text-sm cursor-pointer"
        >
          Show <ChevronsDown className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Order Details Drawer */}
      {showDetails && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40 max-h-[80vh] overflow-auto">
          <MobileOrderDetails items={items} subtotal={subtotal} total={total} />
        </div>
      )}
    </>
  );
};

interface MobileOrderProps {
  items: CartItem[];
  subtotal: number;
  total: string;
}

function MobileOrderDetails({ items, subtotal, total }: MobileOrderProps) {
  const savings = items.reduce((acc, item) => {
    const original = parseFloat(item.originalPrice || '0');
    const current = parseFloat(item.price);
    return acc + (original - current) * item.quantity;
  }, 0);

  return (
    <div className="p-4">
      {/* Items */}
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
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2">{item.name}</p>
              <p className="text-xs text-gray-600">QTY: {item.quantity}</p>

              <div className="text-right mt-1">
                {item.originalPrice && (
                  <span className="line-through text-gray-500 text-xs mr-2">
                    ${item.originalPrice}
                  </span>
                )}
                <span className="text-sm font-semibold">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Promotional Savings</span>
            <span>-${savings.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-green-600">
          <span>Express Shipping</span>
          <span>FREE</span>
        </div>

        <div className="flex justify-between">
          <span>Sales Tax</span>
          <span>TBD</span>
        </div>

        <div className="border-t pt-3 font-bold text-lg flex justify-between">
          <span>Order Total (before tax)</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderStrip;
