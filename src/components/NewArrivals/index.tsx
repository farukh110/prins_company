'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface CollectionItem {
  title: string;
  ariaLabel: string;
  href: string;
  imageSrc: string;
  logoSrc?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const collections: CollectionItem[] = [
  {
    title: 'Vintage Collection',
    ariaLabel: 'Vintage Collection',
    href: '/c/vintage+inspired-rings',
    imageSrc: '/images/gifts/1.webp',
    logoSrc: '/images/cart/logo1.webp',
    logoWidth: 88,
    logoHeight: 55,
  },
  {
    title: 'GIA Certified Collection',
    ariaLabel: 'GIA Certified Collection',
    href: '/c/certified-jewelry',
    imageSrc: '/images/gifts/2.webp',
    logoSrc: '/images/cart/logo2.webp',
    logoWidth: 140,
    logoHeight: 55,
  },
  {
    title: 'Infinity Collection',
    ariaLabel: 'Infinity Collection',
    href: '/c/infinity-collection',
    imageSrc: '/images/gifts/3.webp',
    logoSrc: '/images/cart/logo3.webp',
    logoWidth: 88,
    logoHeight: 55,
  },
  {
    title: 'Cocktail Rings',
    ariaLabel: 'Cocktail Rings',
    href: '/c/cocktail-rings',
    imageSrc: '/images/gifts/4.webp',
    logoSrc: '',
    logoWidth: 88,
    logoHeight: 55,
  },
];

const NewArrivals: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 4,
    breakpoints: {
      '(max-width: 767px)': {
        slidesToScroll: 1,
        align: 'center',
      },
    },
  });

  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi]);

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-center text-[22px] poppins-regular font-light text-[#161618] mb-6">
        Shop Our New Arrivals
      </h2>

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {collections.map((item) => (
              <div
                key={item.title}
                className="flex-shrink-0 px-2 md:px-4 min-w-[260px] md:min-w-[290px]"
              >
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  data-trk-type="link"
                  data-trk-title={item.title}
                  rel="follow"
                >
                  <div className="bg-[#FCFCFC] p-0 md:p-0 border border-[#DFDFDF]">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={480}
                        height={480}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 260px, 290px"
                        loading="lazy"
                      />

                      {/* Hover overlay (no rounded) */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-lg font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore Collection
                      </div>
                    </div>
                  </div>

                  {item.logoSrc && (
                    <div className="mt-3 flex justify-center py-1">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.title} logo`}
                        width={item.logoWidth}
                        height={item.logoHeight}
                        className="h-auto"
                        loading="lazy"
                      />
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;