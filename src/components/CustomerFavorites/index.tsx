'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

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

const CustomerFavorites: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps', 
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8">
      <h2 className="text-center text-xl font-light text-gray-900 mb-8 font-poppins">
        Customer Favorites
      </h2>

      <div className="relative">
        <div className="overflow-x-hidden">
          <div ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.sku}
                  className="flex-none w-full min-[500px]:w-1/2 md:w-[275px] lg:w-[275px] min-w-[275px]"
                >
                  <div className="group relative bg-white rounded-lg p-4 transition-shadow hover:shadow-lg">
                    <button
                      className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-opacity hover:opacity-70"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>

                    <Link href={product.productUrl} className="block text-inherit no-underline" prefetch={false}>
                      <div className="relative mb-4">
                        {product.isLabGrown && (
                          <span className="absolute top-2 left-2 z-10 bg-[#FBF4E6] px-2 py-0.5 text-[14px] poppins-light text-[#161618]">
                            LAB GROWN
                          </span>
                        )}

                        <div className="mx-auto h-40 w-40 overflow-hidden rounded-md">
                          <Image
                            src={product.imageUrl}
                            alt={product.alt}
                            width={160}
                            height={160}
                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <h3 className="mb-1 line-clamp-2 text-sm font-medium text-gray-800">
                        {product.title}
                      </h3>

                      <p className="text-sm font-medium text-gray-900">{product.priceRange}</p>
                    </Link>

                    <Link
                      href={product.productUrl}
                      className="mt-3 block w-full border border-gray-800 py-2 text-center text-xs font-semibold uppercase tracking-wider text-gray-800 opacity-0 transition-opacity group-hover:opacity-100"
                      prefetch={false}
                    >
                      Customize Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md transition-transform hover:scale-110 md:left-0"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md transition-transform hover:scale-110 md:right-0"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default CustomerFavorites;