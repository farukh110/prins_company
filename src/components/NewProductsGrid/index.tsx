'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

interface Product {
  sku: string;
  title: string;
  priceRange: string;
  imageUrl: string;
  productUrl: string;
  isLabGrown?: boolean;
  alt: string;
}

const products: Product[] = [
  // ... your products (unchanged)
  {
    sku: 'SP1084AQD-WG-AAAA-6',
    title: 'Heart-Shaped Aquamarine Infinity Pendant with Diamond Accents',
    priceRange: '$309 - $3,599',
    imageUrl: '/images/products/rings/1.webp',
    productUrl: '/p/floating-aquamarine-infinity-heart-pendant-with-diamond-accents-sp1084aqd',
    alt: 'Heart-Shaped Aquamarine Infinity Pendant with Diamond Accents',
  },
  {
    sku: 'LSE0976D-WGE-FGVS-6.4',
    title: 'Lab-Grown Basket-Set Solitaire Diamond Stud Earrings',
    priceRange: '$679 - $10,000+',
    imageUrl: '/images/products/rings/2.webp',
    productUrl: '/p/lab-grown-basket-set-solitaire-diamond-stud-earrings-lse0976d',
    isLabGrown: true,
    alt: 'Lab-Grown Basket-Set Solitaire Diamond Stud Earrings',
  },
  {
    sku: 'SP0169E-WG-AAA-6x4',
    title: 'Prong-Set Emerald Teardrop V-Bale Pendant with Diamond',
    priceRange: '$299 - $10,000+',
    imageUrl: '/images/products/rings/3.webp',
    productUrl: '/p/pear-emerald-and-diamond-v-bale-pendant-sp0169e',
    alt: 'Prong-Set Emerald Teardrop V-Bale Pendant with Diamond',
  },
  {
    sku: 'LSB0463D-WG-BC-FGVS-2.3-70',
    title: 'Lab-Grown Classic Round Diamond Tennis Bracelet',
    priceRange: '$1,089 - $8,399',
    imageUrl: '/images/products/rings/4.webp',
    productUrl: '/p/lab-grown-classic-round-diamond-tennis-bracelet-lsb0463d',
    isLabGrown: true,
    alt: 'Lab-Grown Classic Round Diamond Tennis Bracelet',
  },
  {
    sku: 'SP0530G-WG-AAAA-9x7',
    title: 'V-Bale Pear-Shaped Garnet Solitaire Pendant',
    priceRange: '$139 - $839',
    imageUrl: '/images/products/rings/5.webp',
    productUrl: '/p/v-bale-pear-shaped-garnet-solitaire-pendant-sp0530g',
    alt: 'V-Bale Pear-Shaped Garnet Solitaire Pendant',
  },
  // ... rest of your products
];

const NewProductsGrid: React.FC = () => {
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Added to cart:', product.title);
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.sku}
            className="group relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Sale Badge - Top Left */}
            {product.isLabGrown && (
              <div className="absolute top-3 left-3 z-20">
                <span className="bg-[#00345D] px-3 py-1 text-xs font-bold rounded text-white uppercase tracking-wider shadow-md">
                  New
                </span>
              </div>
            )}

            {/* Icons Stack - Top Right */}
            <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
              {/* Wishlist Heart - No color change */}
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all hover:scale-110"
                aria-label="Add to wishlist"
                title="Add to wishlist"
              >
                <Heart className="h-5 w-5 text-gray-600" />
              </button>

              {/* Add to Cart - Below Heart */}
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all hover:scale-110 hover:bg-green-50 hover:text-green-600"
                aria-label="Add to cart"
                title="Add to cart"
              >
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            <Link href={product.productUrl} prefetch={false}>
              <div className="aspect-square p-8 bg-white">
                <Image
                  src={product.imageUrl}
                  alt={product.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-4 text-center border-t">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  {product.priceRange}
                </p>
              </div>
            </Link>

            {/* View Detail Button on Hover */}
            <Link
              href={product.productUrl}
              className="absolute inset-x-0 bottom-0 translate-y-full bg-black text-white py-3 text-center text-sm font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              prefetch={false}
            >
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProductsGrid;