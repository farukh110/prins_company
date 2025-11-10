"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import "./style.css";
import { getAllSubCategories } from "@/redux/api/subCategories/subCategorySlice";

export const BirthdaySlider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: subCategories, loading, error } = useSelector(
    (state: RootState) => state.subCategory
  );

  useEffect(() => {
    if (!subCategories.length && !loading && !error) {
      dispatch(getAllSubCategories());
    }
  }, [dispatch, subCategories.length, loading, error]);

  const [slidesInView, setSlidesInView] = useState(2);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSlidesInView(7);
      else if (w >= 1024) setSlidesInView(6);
      else if (w >= 640) setSlidesInView(4);
      else setSlidesInView(2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    emblaApi?.reInit({ loop: true, align: "center", slidesToScroll: 1, containScroll: "trimSnaps" });
  }, [slidesInView, emblaApi]);

  const slides = subCategories.map((sub) => ({
    month: sub.name,
    stone: sub.name,
    href: `/c/rings/${sub.slug}`,
    src: `/images/products/rings/1.webp`,
  }));

  return (
    <section className="mb-8 sm:mb-10 lg:mb-14 px-4 sm:px-6 lg:px-8 max-w-[1288px] mx-auto relative">
      
      <div className="relative flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-[22px] font-medium leading-7 sm:leading-8 lg:leading-[2.75rem] text-center sm:text-left">
          Bring More Color to the Party
        </h2>

        <Link
          href="/c/rings"
          className="hidden sm:block text-sm text-gray-700 hover:text-gray-800 underline sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
        >
          View All Rings
        </Link>

        <Link
          href="/c/rings"
          className="sm:hidden text-sm text-gray-700 hover:text-gray-800 underline mt-2"
        >
          View All Rings
        </Link>
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <div className="animate-pulse text-gray-500">Loading rings…</div>
        </div>
      )}
      {error && (
        <div className="flex justify-center py-12 text-red-600">{error}</div>
      )}

      {!loading && !error && slides.length > 0 && (
        <div className="relative embla-wrapper">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {slides.map((item) => (
                <div
                  key={item.href}
                  className="embla__slide px-2 sm:px-3"
                  style={{ flex: `0 0 ${100 / slidesInView}%` }}
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
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" fill="none" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className="hidden sm:block absolute right-0 sm:right-[-24px] lg:right-[-40px] top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 border border-gray-300 rounded-full shadow-md outline-none focus:outline-none hover:bg-gray-100 transition-colors"
            onClick={() => emblaApi?.scrollNext()}
            type="button"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" fill="none" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default BirthdaySlider;