"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";

const birthstones = [
  { month: "Sapphire", stone: "Sapphire", href: "/c/birthstone+jewelry/january+birthstone", src: "/images/products/rings/1.webp" },
  { month: "Eme", stone: "Eme", href: "/c/birthstone+jewelry/february+birthstone", src: "/images/products/rings/2.webp" },
  { month: "Star", stone: "Star", href: "/c/birthstone+jewelry/march+birthstone", src: "/images/products/rings/3.webp" },
  { month: "Plain Gold", stone: "Plain Gold", href: "/c/birthstone+jewelry/april+birthstone", src: "/images/products/rings/4.webp" },
  { month: "Ovem Antiqish", stone: "Ovem Antiqish", href: "/c/birthstone+jewelry/may+birthstone", src: "/images/products/rings/5.webp" },
  { month: "Bl Top", stone: "Bl Top", href: "/c/birthstone+jewelry/june+birthstone", src: "/images/products/rings/6.webp" },
  { month: "Bezel Set Stack Band", stone: "Ruby", href: "/c/birthstone+jewelry/july+birthstone", src: "/images/products/rings/7.webp" },
  { month: "Color Open Ring", stone: "Peridot", href: "/c/birthstone+jewelry/august+birthstone", src: "/images/products/rings/8.webp" },
  { month: "14KY Birthstone", stone: "14KY Birthstone", href: "/c/birthstone+jewelry/september+birthstone", src: "/images/products/rings/9.webp" },
  { month: "14KW Birthstone", stone: "14KW Birthstone", href: "/c/birthstone+jewelry/october+birthstone", src: "/images/products/rings/10.webp" },
  { month: "Semi Prec Prong", stone: "Semi Prec Prong", href: "/c/birthstone+jewelry/november+birthstone", src: "/images/products/rings/11.webp" },
  { month: "Birthstone", stone: "Birthstone", href: "/c/birthstone+jewelry/december+birthstone", src: "/images/products/rings/12.webp" },
];

export const BirthdaySlider = () => {
  const [slidesInView, setSlidesInView] = useState(2); // Default to 2 slides for mobile

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  // Update slidesInView based on window width
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlidesInView(7); // 7 slides on xl screens
      } else if (width >= 1024) {
        setSlidesInView(6); // 6 slides on lg screens
      } else if (width >= 640) {
        setSlidesInView(4); // 4 slides on sm screens
      } else {
        setSlidesInView(2); // 2 slides on mobile
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Update carousel when slidesInView changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({
        loop: true,
        align: "center",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
      });
    }
  }, [slidesInView, emblaApi]);

  return (
    <section className="mb-8 sm:mb-10 lg:mb-14 px-4 sm:px-6 lg:px-8 max-w-[1288px] mx-auto relative">
      <div className="relative w-full flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-[22px] font-medium leading-7 sm:leading-8 lg:leading-12 text-center sm:text-left">
          Bring More Color to the Party
        </h2>
        <Link
          href="/b/customer-reviews"
          className="text-sm text-gray-700 hover:text-gray-800 underline mt-3 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
        >
          View All Rings
        </Link>
      </div>

      <div className="relative embla-wrapper">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {birthstones.map((item, i) => (
              <div
                key={i}
                className="embla__slide px-2 sm:px-3"
                style={{ flex: `0 0 ${100 / slidesInView}%` }} // Dynamic slide width
              >
                <Link
                  href={item.href}
                  className="group hover:no-underline flex flex-col items-center"
                  aria-label={`${item.month} ${item.stone}`}
                >
                  <Image
                    src={item.src}
                    alt={`${item.month} ${item.stone}`}
                    width={120}
                    height={120}
                    className="object-contain h-24 sm:h-28 lg:h-[120px] w-24 sm:w-28 lg:w-[120px] group-hover:scale-105 transition-transform ease-in-out duration-300"
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
                  />
                  <span className="flex flex-col items-center no-underline mt-3 sm:mt-4">
                    <span className="group-hover:underline underline-offset-4 decoration-2 decoration-secondary text-sm sm:text-base font-semibold text-gray-700 group-hover:text-gray-800">
                      {item.month}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-700 group-hover:visible lg:invisible mt-1">
                      {item.stone}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          className="hidden sm:block absolute left-0 sm:left-[-24px] lg:left-[-40px] top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 border border-gray-300 rounded-full shadow-md outline-none focus:outline-none hover:bg-gray-100 transition-colors"
          onClick={() => emblaApi?.scrollPrev()}
          type="button"
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="hidden sm:block absolute right-0 sm:right-[-24px] lg:right-[-40px] top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 border border-gray-300 rounded-full shadow-md outline-none focus:outline-none hover:bg-gray-100 transition-colors"
          onClick={() => emblaApi?.scrollNext()}
          type="button"
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default BirthdaySlider;