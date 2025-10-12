"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const HeroBanner: FC = () => {
  return (
    <div className="relative">
      <div data-trk-type="engagement" data-trk-title="Hero Banner" className="relative">
        {/* Banner Image */}
        <Link href="/c/jewelry" className="block relative" rel="follow">
          <span
            className="relative block w-full overflow-hidden pt-[39.58333333333333%] max-md:pt-[75%]"
          >
            <Image
              alt="Hero Banner"
              src="/images/banners/diamond-ring.jpg"
              fill
              priority
              className="absolute inset-0 object-cover object-right-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              quality={85}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-10" />
          </span>
        </Link>

        {/* Text and Button Layer */}
        <div>
          {/* Heading */}
          <div
            className="
              absolute text-white font-poppins font-light text-center z-20
              text-[2vw] top-[40%] left-[15.1%] h-[3vw]
              md:text-[2vw] md:left-[15.1%] md:top-[40%]
              max-md:text-[5vw] max-md:left-1/2 max-md:top-[20%] 
              max-md:-translate-x-1/2
            "
          >
            YOUR FALL STYLE,
          </div>

          {/* Subheading */}
          <div
            className="
              absolute text-white font-poppins font-light text-center z-20
              text-[1.25vw] top-[48%] left-[11.7%] h-[3vw]
              md:text-[1.25vw] md:left-[11.7%] md:top-[48%]
              max-md:text-[3.5vw] max-md:left-1/2 max-md:top-[35%]
              max-md:-translate-x-1/2 max-md:w-[80%]
            "
          >
            Handcrafted pieces for this season and beyond.
          </div>

          {/* Button */}
          <Link
            href="/c/jewelry"
            target="_blank"
            aria-label="SHOP JEWELRY - open in a new tab"
            className="absolute flex items-center justify-center z-20
              border-2 px-5 border-black bg-black text-white
              text-[1.4vw] font-medium text-center
              left-[25%] top-[62%] h-[3.5vw] max-w-[24vw]
              transform -translate-x-1/2 -translate-y-1/2
              transition-all duration-300
              hover:bg-white hover:text-black hover:border-white
              max-md:left-1/2 max-md:top-[55%]
              max-md:h-[12vw] max-md:text-[3.8vw] 
              max-md:max-w-[70vw] max-md:mt-[3vw]
            "
          >
            SHOP JEWELRY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;