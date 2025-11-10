'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useAppDispatch } from '@/hooks/redux';
import { CartItemProps } from '@/types/cart';
import { removeItem, updateQuantity, updateRingSize } from '@/redux/api/cart/cartSlice';

const ringSizes = [
  '3','3.5','4','4.5','5','5.5','6','6.5','7','7.5',
  '8','8.5','9','9.5','10','10.5','11','11.5','12','12.5','13','13.5','14',
];

export default function CartItem({
  item,
  discountCode,
  onEdit,
  onMoveToWishlist,
}: CartItemProps) {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(item.quantity);
  const [ringSize, setRingSize] = useState(item.size);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  useEffect(() => {
    setRingSize(item.size);
  }, [item.size]);

  const handleQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = Number(e.target.value);
    setQuantity(val);
    dispatch(updateQuantity({
      id: item.id,
      metal: item.metal,
      size: item.size,
      quantity: val,
    }));
  };

  const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value;
    setRingSize(newSize);
    dispatch(updateRingSize({
      id: item.id,
      metal: item.metal,
      oldSize: item.size,
      newSize,
    }));
  };

  const handleRemove = () => {
    dispatch(removeItem({
      id: item.id,
      metal: item.metal,
      size: item.size,
    }));
  };

  const originalPrice = item.originalPrice ? parseFloat(item.originalPrice) : null;
  const discountedPrice = parseFloat(item.price);
  const savedAmount = originalPrice ? Math.round((originalPrice - discountedPrice) * item.quantity) : 0;

  const imageUrl = item.image || '/images/placeholder.jpg';

  return (
    <div className="shadow-[0_1px_10px_0_rgba(0,0,0,0.05)] p-6 bg-white mb-4 border-b border-gray-500 md:border-0">
      <div className="flex gap-4 md:gap-5">

        {/* ---------- Image + Actions ---------- */}
        <div className="w-20 md:w-40 shrink-0">
          <button aria-label={item.name} className="block w-20 h-20 md:w-40 md:h-40 mx-auto">
            <div className="relative w-full h-full bg-gray-100 border border-[#fafafb] overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 80px, 160px"
                className="object-cover"
                unoptimized={true}
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </div>
          </button>

          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 mt-2 text-gray-700 text-sm">
            <button onClick={onEdit} className="underline">
              Edit
            </button>
            <button onClick={handleRemove} className="underline cursor-pointer">
              Remove
            </button>
          </div>

          <div className="text-center mt-2 text-gray-700 text-sm">
            <button onClick={onMoveToWishlist} className="underline cursor-pointer">
              Move to Wishlist
            </button>
          </div>
        </div>

        {/* ---------- Details ---------- */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between mb-2 md:mb-3">
            <h3 className="text-lg md:text-xl max-w-md">
              <button aria-label={item.name} className="text-left hover:underline underline-offset-4 block">
                {item.name}
              </button>
            </h3>

            <div className="hidden md:flex items-center gap-2 text-right">
              {originalPrice && (
                <span className="text-gray-700 line-through">
                  ${originalPrice.toLocaleString()}
                </span>
              )}
              <span>${discountedPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
            <span>SKU: <span className="font-medium">{item.id}</span></span>

            <div className="md:hidden flex items-center gap-2">
              {originalPrice && (
                <span className="text-gray-700 line-through">
                  ${originalPrice.toLocaleString()}
                </span>
              )}
              <span>${discountedPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Qty + Ring Size */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4 text-sm text-gray-700">
            <div className="flex items-center justify-between sm:justify-start">
              <span className="mr-3">QTY:</span>
              <div className="relative">
                <select
                  value={quantity}
                  onChange={handleQty}
                  aria-label="quantity"
                  className="appearance-none bg-transparent w-14 pl-4 pr-8 focus:outline-none border border-gray-500 h-8"
                >
                  {[1,2,3,4,5,6].map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-start">
              <label className="mr-3">Ring Size:</label>
              <div className="relative">
                <select
                  value={ringSize}
                  onChange={handleSize}
                  className="appearance-none bg-transparent pr-6 pl-1 text-center focus:outline-none border border-gray-500 h-8 w-auto"
                >
                  {ringSizes.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Details Accordion */}
          <div className="max-w-md w-full py-3 border-t border-b border-gray-500 mb-3">
            <button
              onClick={() => setDetailsOpen(v => !v)}
              className="flex w-full items-center justify-between font-normal text-left"
              aria-expanded={detailsOpen}
            >
              <span>Details</span>
              {detailsOpen ? (
                <ChevronUp className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              )}
            </button>

            {detailsOpen && (
              <div className="mt-2 bg-gray-300 p-2 md:p-4 text-sm">
                <span className="block mb-1 font-medium">Product Details</span>
                {item.gemstoneQuality && (
                  <p className="flex justify-between text-gray-700 mb-1">
                    <span>Gemstone Quality:</span>
                    <span>{item.gemstoneQuality}</span>
                  </p>
                )}
                <p className="flex justify-between text-gray-700 mb-1">
                  <span>Total Carat Weight:</span>
                  <span>{item.totalCarat}</span>
                </p>
                <p className="flex justify-between text-gray-700 mb-1">
                  <span>Metal Type:</span>
                  <span>{item.metal}</span>
                </p>
              </div>
            )}
          </div>

          {/* Savings */}
          {savedAmount > 0 && (
            <div className="flex items-center text-sm text-gray-700 mt-2">
              <Check className="mr-2 w-5 h-5 text-gray-900 flex-shrink-0" />
              <span>
                You Saved{' '}
                <span className="text-teal-600 font-medium">${savedAmount}</span>{' '}
                with discount code{' '}
                <span className="text-gray-800 uppercase font-normal">{discountCode}</span>
              </span>
            </div>
          )}

          <div className="flex items-center text-sm text-gray-700 mt-2">
            <Check className="mr-2 w-5 h-5 text-gray-900 flex-shrink-0" />
            <span className="text-gray-800">One Free Resizing For Rings</span>
          </div>
        </div>
      </div>
    </div>
  );
}