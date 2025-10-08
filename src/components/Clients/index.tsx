"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";

const logos = [
  { src: "/images/clients/vogue.webp", alt: "Vogue" },
  { src: "/images/clients/forbes.webp", alt: "Forbes" },
  { src: "/images/clients/cnbc.webp", alt: "CNBC" },
  { src: "/images/clients/hello.webp", alt: "Hello" },
  { src: "/images/clients/newyork.webp", alt: "New York Post" },
  { src: "/images/clients/medium.webp", alt: "Medium" },
  { src: "/images/clients/vogue.webp", alt: "Vogue" },
  { src: "/images/clients/forbes.webp", alt: "Forbes" },
  { src: "/images/clients/cnbc.webp", alt: "CNBC" },
  { src: "/images/clients/hello.webp", alt: "Hello" },
  { src: "/images/clients/newyork.webp", alt: "New York Post" },
  { src: "/images/clients/medium.webp", alt: "Medium" },
];

export default function ClientSection() {

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  return (
    <section className="mb-12 lg:mb-14">
      <div className="px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Featured In</h2>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="
  embla__slide 
  flex-[0_0_50%]   sm:flex-[0_0_33.33%] 
  md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.66%] 
  min-w-0 flex justify-center items-center
"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Optional buttons */}
          <button
            className="embla__button embla__button--prev absolute left-2 top-1/2 -translate-y-1/2 
             bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
            onClick={() => emblaApi?.scrollPrev()}
            type="button"
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            className="embla__button embla__button--next absolute right-2 top-1/2 -translate-y-1/2 
             bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
            onClick={() => emblaApi?.scrollNext()}
            type="button"
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
