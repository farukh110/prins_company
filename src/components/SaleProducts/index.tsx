'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

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
];

const SaleProducts: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Added to cart:', product.title);
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8">
      <h2 className="text-[22px] poppins-medium text-center mb-8">
        Sale Products
      </h2>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.sku}
                className="flex-none w-full min-[500px]:w-1/2 md:w-[275px] lg:w-[275px] min-w-[275px]"
              >
                <div className="group relative bg-white rounded-lg p-4 transition-all duration-300 hover:shadow-xl">
                  {/* Sale Tag - Top Left */}
                  {product.isLabGrown && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-[#CA2A30] px-3 py-1 text-xs font-bold rounded text-white uppercase tracking-wider shadow-md">
                        Sale
                      </span>
                    </div>
                  )}

                  {/* Icons Container - Right Side, Stacked */}
                  <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                    {/* Wishlist Heart */}
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all hover:scale-110"
                      aria-label="Add to wishlist"
                      title="Add to wishlist"
                    >
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>

                    {/* Add to Cart - Directly Below Heart */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all hover:scale-110 hover:bg-green-50 hover:text-green-600"
                      aria-label="Add to cart"
                      title="Add to cart"
                    >
                      <ShoppingCart className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>

                  <Link href={product.productUrl} className="block text-inherit no-underline" prefetch={false}>
                    <div className="relative mb-4">
                      <div className="mx-auto h-40 w-40 overflow-hidden rounded-md bg-gray-50">
                        <Image
                          src={product.imageUrl}
                          alt={product.alt}
                          width={160}
                          height={160}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h3 className="mb-1 line-clamp-2 text-sm font-medium text-gray-800 leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-sm font-semibold text-gray-900">{product.priceRange}</p>
                  </Link>

                  <Link
                    href={product.productUrl}
                    className="mt-4 block w-full border border-gray-800 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-gray-800 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-gray-800 hover:text-white"
                    prefetch={false}
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2.5 shadow-xl rounded-full transition-all hover:scale-110 md:left-2 border"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2.5 shadow-xl rounded-full transition-all hover:scale-110 md:right-2 border"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default SaleProducts;