"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Truck, ChevronDown, Mail, Phone, FileText, Sparkles } from 'lucide-react';
import { useAppSelector } from '@/hooks/redux';
import { selectProduct } from '@/redux/api/products/productSlice';

// Default fallback data (only for UI preview)
const DEFAULT_METAL_ICONS: Record<string, string> = {
  '14k white gold': '/images/products/type/1.webp',
  '14k yellow gold': '/images/products/type/2.webp',
  '14k rose gold': '/images/products/type/3.webp',
  '18k white gold': '/images/products/type/4.webp',
  '18k yellow gold': '/images/products/type/5.webp',
  '18k rose gold': '/images/products/type/6.webp',
  platinum: '/images/products/type/7.webp',
};

const RING_SIZES = Array.from({ length: 22 }, (_, i) => (i + 3) * 0.5).map(v => v.toFixed(1));

const ProductRightSide: React.FC = () => {
  const product = useAppSelector(selectProduct);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  
  if (!product) {
    return (
      <div className="p-4 text-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  // Dynamic values
  const title = product.name;
  const price = `$${parseFloat(product.price).toLocaleString()}`;
  const originalPrice = product.original_price ? `$${parseFloat(product.original_price).toLocaleString()}` : null;
  const discount = originalPrice ? Math.round((1 - parseFloat(product.price) / parseFloat(product.original_price)) * 100) : 0;
  const sku = product.style_no || product.item_no;
  const metal = product.metal;
  const weight = product.weight;
  // const size = product.size;
  const description = product.description;

  // Gemstone quality (mocked – extend API to include this)
  // const gemstoneQuality = product.gemstone_quality || 'Premium';
  const totalCarat = product.total_carat || '4.03';

  // Diamond details
  // const hasDiamonds = product.dia_1_pcs || product.dia_2_pcs;
  // const diamondCount = (parseInt(product.dia_1_pcs || '0') || 0) + (parseInt(product.dia_2_pcs || '0') || 0);
  // const diamondWeight = (parseFloat(product.dia_1_wt || '0') || 0) + (parseFloat(product.dia_2_wt || '0') || 0);
  // const diamondQuality = product.diamond_quality || 'F-G VS';

  // Gemstone video options (mocked – extend API)
  // const gemstoneOptions = (product.gemstone_videos || [
  //   { id: 'premium', title: 'Premium', videoSrc: '/videos/product-detail/oval.mp4', label: 'Lab Grown' },
  //   { id: 'good', title: 'Good(A)', videoSrc: '/videos/product-detail/oval-good.mp4', label: 'Natural' },
  //   { id: 'better', title: 'Better(AA)', videoSrc: '/videos/product-detail/oval-better.mp4', label: 'Natural' },
  //   { id: 'best', title: 'Best(AAA)', videoSrc: '/videos/product-detail/oval-best.mp4', label: 'Natural' },
  //   { id: 'heirloom', title: 'Heirloom(AAAA)', videoSrc: '/videos/product-detail/oval-heirloom.mp4', label: 'Natural' },
  // ]) as any[];

  // Carat options (mocked – extend API)
  const caratOptions = (product.carat_options || [
    { id: '6x4mm', title: '0.80 Carat', value: '0.80' },
    { id: '7x5mm', title: '1.10 Carats', value: '1.10' },
    { id: '8x6mm', title: '1.90 Carats', value: '1.90' },
    { id: '9x7mm', title: '2.49 Carats', value: '2.49' },
    { id: '10x8mm', title: '4.03 Carats', value: '4.03' },
    { id: '12x10mm', title: '5.95 Carats', value: '5.95' },
    { id: '14x10mm', title: '8.64 Carats', value: '8.64' },
  ]) as any[];

  // Metal options (dynamic from API or fallback)
  const metalOptions = (product.metal_options || [
    { id: '14k+white+gold', title: 'White Gold', icon: DEFAULT_METAL_ICONS['14k white gold'] },
    { id: '14k+yellow+gold', title: 'Yellow Gold', icon: DEFAULT_METAL_ICONS['14k yellow gold'] },
    { id: '14k+rose+gold', title: 'Rose Gold', icon: DEFAULT_METAL_ICONS['14k rose gold'] },
    { id: '18k+white+gold', title: 'White Gold', icon: DEFAULT_METAL_ICONS['18k white gold'] },
    { id: '18k+yellow+gold', title: 'Yellow Gold', icon: DEFAULT_METAL_ICONS['18k yellow gold'] },
    { id: '18k+rose+gold', title: 'Rose Gold', icon: DEFAULT_METAL_ICONS['18k rose gold'] },
    { id: 'platinum', title: 'Platinum', icon: DEFAULT_METAL_ICONS['platinum'] },
  ]) as any[];

  const addToCart = () => {

    console.log("add to cart");
  };

  return (
    <div className="sticky top-0 pt-4 md:pt-6 bg-white p-4 w-full">
      {/* Product Title */}
      <h1 className="text-gray-900 text-2xl font-bold mb-3 md:mb-4">
        {title}
      </h1>

      {/* Ratings (mocked – extend API) */}
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={18} />
          ))}
          <Star className="text-yellow-400" fillOpacity={0.5} size={18} />
        </div>
        <div className="text-gray-600 underline underline-offset-2 text-sm">296 Reviews</div>
      </div>

      {/* Price Section */}
      <div className="mb-4 md:mb-6">
        <div className="flex items-baseline text-gray-900 text-xl font-semibold mb-2">
          <span className="text-lg md:text-xl">{price}</span>
          {originalPrice && (
            <>
              <span className="text-gray-500 line-through ml-2 text-sm md:text-base">{originalPrice}</span>
              <span className="text-green-600 text-sm md:text-base ml-2">({discount}% OFF)</span>
            </>
          )}
        </div>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <span>Pay as low as <span className="font-medium text-gray-900">${(parseFloat(product.price) / 2).toFixed(2)}/month</span> (0% Interest)</span>
          <span className="underline cursor-pointer">Select Plan</span>
        </div>
        {/* <div className="mt-3 border border-gray-300 rounded-md">
          <div className="bg-yellow-50 border border-yellow-500 px-3 py-2 flex items-center">
            <Gift className="text-yellow-600 mr-2" size={18} />
            <span className="text-sm text-yellow-800">
              {discount > 0 ? `${discount}% OFF` : 'Special Offer'} + Free Gifts <span className="underline">Applied</span>
            </span>
          </div>
        </div> */}
      </div>

      {/* Gemstone Quality */}
      {/* <div className="border-t border-gray-200 pb-4 md:pb-2">
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-900">Gemstone Quality</span>
          <span className="text-gray-600 text-sm">: {gemstoneQuality}</span>
        </div>
        <div className="flex overflow-x-auto gap-2 md:gap-3 py-2">
          {gemstoneOptions.map((option: any) => (
            <div key={option.id} className="flex-shrink-0 flex flex-col items-center cursor-pointer">
              <span className={`border-2 ${option.id === 'premium' ? 'border-blue-600' : 'border-transparent'} rounded-full p-1`}>
                <video
                  className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={option.videoSrc} type="video/mp4" />
                  <Image
                    src="/images/products/placeholder-fallback.jpg"
                    alt="Gemstone"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </video>
              </span>
              <small className="text-center text-xs text-gray-700 mt-1">{option.title}</small>
              {option.label && (
                <span className="mt-1 bg-yellow-100 text-yellow-800 text-xs px-1 rounded flex items-center">
                  {option.label} <Info className="ml-1" size={12} />
                </span>
              )}
            </div>
          ))}
          <div className="flex-shrink-0 ml-4 hidden md:block">
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <Sparkles size={20} />
              <span className="text-xs mt-1">Compare</span>
            </button>
          </div>
        </div>
      </div> */}

      {/* Total Carat Weight */}
      <div className="border-t border-gray-200 pb-4 md:pb-2">
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-900">Total Carat Weight</span>
          <span className="text-gray-600 text-sm">: {totalCarat} Cts</span>
        </div>
        <div className="flex overflow-x-auto gap-2 md:gap-3 py-2">
          {caratOptions.map((option: any) => (
            <div key={option.id} className="flex-shrink-0 flex flex-col items-center cursor-pointer">
              <span className={`border-2 ${option.id === '10x8mm' ? 'border-blue-600' : 'border-gray-300'} rounded-full p-1`}>
                <span className="text-sm text-gray-900 w-10 h-10 flex items-center justify-center">{option.value}</span>
              </span>
              <small className="text-center text-xs text-gray-700 mt-1">{option.title}</small>
            </div>
          ))}
          <div className="flex-shrink-0 ml-4 hidden md:block">
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <Sparkles size={20} />
              <span className="text-xs mt-1">Compare</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metal Type */}
      <div className="border-t border-gray-200 pb-4 md:pb-2">
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-900">Metal Type</span>
          <span className="text-gray-600 text-sm">: {metal}</span>
        </div>
        <div className="flex overflow-x-auto gap-2 md:gap-3 py-2">
          {metalOptions.map((option: any) => (
            <div key={option.id} className="flex-shrink-0 flex flex-col items-center cursor-pointer">
              <span className={`border-2 ${option.id.includes(metal.toLowerCase().replace(' ', '+')) ? 'border-blue-600' : 'border-transparent'} rounded-full p-1`}>
                <Image src={option.icon} alt={option.title} width={30} height={30} className="rounded-full" />
              </span>
              <small className="text-center text-xs text-gray-700 mt-1">{option.title}</small>
            </div>
          ))}
          <div className="flex-shrink-0 ml-4 hidden md:block">
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <Sparkles size={20} />
              <span className="text-xs mt-1">Compare</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ring Size */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-gray-700 text-sm font-medium">Select Size</h3>
          <button className="text-sm text-blue-600 underline">Size Guide</button>
        </div>
        <div className="flex overflow-x-auto gap-2 py-2">
          {RING_SIZES.map((size) => (
            <button
              key={size}
              className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-gray-200 border ${size === product.size ? 'border-blue-600' : 'border-gray-300'} rounded-full hover:border-gray-600 text-sm text-gray-900`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="mb-6">
        <div className="flex gap-3 md:gap-4">
          <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-800 rounded-full hover:border-gray-900">
            <Heart size={24} className="text-gray-800" />
          </button>
          <button onClick={addToCart} className="w-full h-12 cursor-pointer bg-gray-800 text-white rounded-md flex items-center justify-center gap-2 text-sm font-semibold uppercase">
            <span className="hidden md:inline">{price}</span>
            {originalPrice && <span className="hidden md:inline text-gray-400 line-through ml-1">{originalPrice}</span>}
            <span>Add to Cart</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
          <Truck size={20} className="mr-1" />
          <span>Express Shipping (<span className="line-through mr-1">$12</span><span className="text-green-600 font-medium">FREE</span>)</span>
        </div>
      </div>

      {/* Order Deadline (mocked) */}
      <div className="bg-gray-200 text-center px-3 py-2 mb-4 rounded-md text-sm">
        <div>Order within <span className="text-orange-600 font-medium">17h : 46m : 07s</span></div>
        <div className="mt-1">Estimated Delivery By: <span className="text-green-600 font-medium">Oct 24 - Oct 27</span></div>
      </div>

      {/* Contact */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4 bg-yellow-50 p-3 rounded-md">
        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <Sparkles size={20} />
          <span className="text-sm">Drop a Hint</span>
        </button>
        <Link href="mailto:customer.service@angara.com" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 no-underline">
          <Mail size={20} />
          <span className="text-sm">Email Us</span>
        </Link>
        <Link href="/b/contact-us" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 no-underline">
          <Phone size={20} />
          <span className="text-sm">+1-844-527-4367</span>
        </Link>
      </div>

      {/* Engraving */}
      {/* <div>
        <button className="w-full flex items-center justify-center gap-2 bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 hover:border-gray-600">
          <Plus size={20} />
          <span>Add Free Engraving</span>
        </button>
      </div> */}

      {/* Accordions */}
      <div className="mt-4 space-y-2">
        {/* Product Overview */}
        <div className="border-t border-gray-200">
          <button
            className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 border-b border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-200"
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
          >
            Product Overview
            <ChevronDown className={isOverviewOpen ? 'rotate-180' : ''} size={20} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isOverviewOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div className="px-3 py-3 text-sm text-gray-700">
              <p className="uppercase mb-2">About ring</p>
              <p>{description}</p>
              <p className="mt-2">SKU #: {sku}</p>
              <p className="mt-1">Metal - <span className="font-medium">{metal}</span></p>
              <p className="mt-1">Weight - <span className="font-medium">{weight}g</span></p>
              <button className="mt-2 flex items-center gap-1 text-blue-600 underline">
                <FileText size={20} />
                <span>Certificate of Authenticity</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gemstone Details */}
        {/* <div className="border-t border-gray-200">
          <button
            className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 border-b border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-200"
            onClick={() => setIsGemstoneOpen(!isGemstoneOpen)}
          >
            Gemstone Details
            <ChevronDown className={isGemstoneOpen ? 'rotate-180' : ''} size={20} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isGemstoneOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <div className="px-3 py-3 text-sm text-gray-700">
              <div className="flex justify-between items-center mb-2">
                <p className="uppercase text-sm">Gemstone Information</p>
                <button className="text-blue-600 underline text-sm">Know more</button>
              </div>
              <div className="grid grid-cols-8 text-xs border border-gray-300">
                <p className="col-span-5 bg-gray-100 border-r border-b p-2">Total Carat Weight</p>
                <p className="col-span-3 border-b p-2">{totalCarat}</p>
                <p className="col-span-5 bg-gray-100 border-r border-b p-2">Quality Grade</p>
                <p className="col-span-3 border-b p-2">{gemstoneQuality}</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* {hasDiamonds && (
          <div className="border-t border-gray-200">
            <button
              className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 border-b border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-200"
              onClick={() => setIsDiamondOpen(!isDiamondOpen)}
            >
              Diamond Details
              <ChevronDown className={isDiamondOpen ? 'rotate-180' : ''} size={20} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isDiamondOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
              <div className="px-3 py-3 text-sm text-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <p className="uppercase text-sm">Diamond Information</p>
                  <button className="text-blue-600 underline text-sm">Know more</button>
                </div>
                <div className="grid grid-cols-8 text-xs border border-gray-300">
                  <p className="col-span-5 bg-gray-100 border-r border-b p-2">No. of Diamonds</p>
                  <p className="col-span-3 border-b p-2">{diamondCount}</p>
                  <p className="col-span-5 bg-gray-100 border-r border-b p-2">Diamond Total Weight (ct. tw.)</p>
                  <p className="col-span-3 border-b p-2">{diamondWeight.toFixed(2)}</p>
                  <p className="col-span-5 bg-gray-100 border-r border-b p-2">Quality Grade</p>
                  <p className="col-span-3 border-b p-2">{diamondQuality}</p>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductRightSide;