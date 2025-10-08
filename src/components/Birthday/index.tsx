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
  const [slidesInView, setSlidesInView] = useState(4); // Default to 4 slides

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    }
  );

  // Update slidesInView based on window width
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesInView(7); // 8 slides on large screens
      } else if (width >= 768) {
        setSlidesInView(6); // 6 slides on medium screens
      } else if (width >= 640) {
        setSlidesInView(5); // 5 slides on small-medium screens
      } else {
        setSlidesInView(4); // 4 slides on small screens
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
    <section className="mb-12 lg:mb-14 px-4 sm:px-8 lg:px-8 max-w-[1288px] mx-auto relative">
      
      <div className="relative w-full">
        <h2 className="text-[22px] poppins-medium leading-8 lg:leading-12 text-center">
          Bring More Color to the Party
        </h2>
        <a
          href="/b/customer-reviews"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-700 hover:text-gray-800 underline md:right-8 lg:right-18"
        >
          View All Rings
        </a>
      </div>

      <div className="relative embla-wrapper">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {birthstones.map((item, i) => (
              <div
                key={i}
                className="embla__slide"
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
                    className="object-contain h-20 lg:h-[120px] w-20 lg:w-[120px] group-hover:scale-110 transition-transform ease-in-out duration-500"
                  />
                  <span className="flex flex-col items-center no-underline">
                    <span className="group-hover:underline underline-offset-8 decoration-2 decoration-secondary my-3 text-base font-semibold text-gray-700 group-hover:text-gray-800">
                      {item.month}
                    </span>
                    <span className="text-sm text-gray-700 group-hover:visible lg:invisible">
                      {item.stone}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
          onClick={() => emblaApi?.scrollPrev()}
          type="button"
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
          onClick={() => emblaApi?.scrollNext()}
          type="button"
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
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