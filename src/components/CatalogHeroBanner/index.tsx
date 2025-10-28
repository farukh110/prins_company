"use client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const CatalogHeroBanner: FC = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 custom-dots relative">
      {/* Banner Wrapper */}
      <div
        data-trk-type="engagement"
        data-trk-title="Banner"
        className="relative"
      >
        <Link
          href="/"
          aria-label="Catalog Hero Banner"
          className="block relative"
          tabIndex={0}
          data-trk-type="link"
          data-trk-title=""
          rel="follow"
        >
          <span
            className="relative block w-full overflow-hidden sm:aspect-[1920/106] aspect-[1920/212]"
            data-trk-type="banner"
            data-trk-title="catalogherobanner"
            data-trk-banner-id="catalogherobanner-la"
            data-trk-height={212}
            data-trk-width={1920}
            data-trk-url=""
          >
            <Image
              src="/images/category/category_banner.webp?width=2500&quality=85&auto=webp"
              alt="Catalog Banner"
              fill
              priority
              className="object-cover absolute inset-0"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
            />
          </span>
        </Link>

        {/* Optional extra div */}
        <div>
          <div />
        </div>
      </div>

      {/* See Details Button */}
      <span
        data-trk-type="button"
        data-trk-title="See Details - Terms and Conditions"
        className="hidden sm:block absolute right-4 sm:right-6 lg:right-11 bottom-2 sm:bottom-3 text-sm sm:text-base cursor-pointer text-grayscale-800 z-10"
      >
        *
        <span className="hover:underline">See details</span>
      </span>
    </div>
  );
};

export default CatalogHeroBanner;