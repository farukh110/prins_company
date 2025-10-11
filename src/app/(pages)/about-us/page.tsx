"use client";

import OurStory from "@/components/OurStory";
import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";
import Link from "next/link";

const AboutUS: React.FC = () => {
  return (
    <>
      <VideoBanner />
      <OurStory />
      <section className="mb-12 lg:mb-14">
        <div className="relative">
          <Link href="/c/lab+grown-jewelry" aria-label="Lab Grown Jewelry" className="block relative">
            <span className="relative block w-full overflow-hidden pt-[29.6875%]">
              <Image
                src="/images/banners/2.jpg"
                alt="Lab Grown Jewelry Banner"
                className="absolute inset-0 w-full h-full object-cover"
                width={2500}
                height={742}
                loading="eager"
                quality={85}
                onError={() => console.error("Failed to load Lab Grown Jewelry Banner")}
              />
            </span>
          </Link>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="absolute top-[15.5vw] left-[11.4vw] text-[17px] font-light">
              Sustainably crafted, exquisitely designed,
            </div>
            <div className="absolute top-[17.2vw] left-[18.38vw] text-[17px] font-light">
              timelessly radiant
            </div>
            <Link
              href="/c/lab+grown-jewelry"
              className="absolute top-[22vw] left-[24vw] -translate-x-1/2 -translate-y-1/2 
                flex items-center justify-center w-full max-w-[19vw] h-[3vw] 
                border-2 border-white text-white text-[1.2vw] text-center 
                transition-all duration-300 hover:bg-white hover:text-black"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-7 mx-4 lg:mx-14 mb-6 lg:mb-16 items-center">
        <div className="w-full md:px-8 lg:px-0 lg:w-[44.7%]">
          {/* Desktop Image */}
          <div className="hidden lg:block">
            <Image
              alt="Prins Company Gemstone Jewelry"
              src="/images/about/about.jpg?width=1440&quality=85&auto=webp"
              width={580}
              height={580}
              priority={false}
              className="w-full mx-auto max-w-[540px] lg:max-w-full object-contain"
              onError={(e) => {
                console.error("Failed to load desktop image");
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
          </div>
          {/* Tablet Image */}
          <div className="hidden md:block lg:hidden">
            <Image
              alt="Prins Company Gemstone Jewelry"
              src="/images/about/about.jpg?width=1440&quality=85&auto=webp"
              width={540}
              height={300}
              priority={false}
              className="w-full mx-auto max-w-[540px] object-contain"
              onError={(e) => {
                console.error("Failed to load tablet image");
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
          </div>
          {/* Mobile Image */}
          <div className="block md:hidden">
            <Image
              alt="Prins Company Gemstone Jewelry"
              src="/images/about/about.jpg?width=1440&quality=85&auto=webp"
              width={414}
              height={300}
              priority={false}
              className="w-full mx-auto object-contain"
              onError={(e) => {
                console.error("Failed to load mobile image");
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-[55.3%] px-8 lg:px-0 md:pb-8 pt-4 text-justify">
          <p className="mb-4">
            At Prins Company, we craft jewelry from the heart of the earth. As a vertically-integrated brand, we oversee every step of the process, ensuring unparalleled quality and care. We sustainably source our gemstones, cutting and polishing them with precision to honor their natural beauty, formed over millions of years. Each piece is handcrafted to reflect your unique vision.
          </p>
          <p className="mb-4">
            Our commitment to craftsmanship extends to our service. Beyond automated responses, our dedicated team of jewelry experts is here to guide you, offering personalized advice and insights—from gemstone education to style inspiration, including the fascinating stories behind our stones.
          </p>
          <p className="mb-4">
            Our dedication to excellence has earned us accolades from industry leaders, recognizing Prins Company as a trusted name in fine jewelry, celebrated for both quality and customer care.
          </p>
          <p className="mb-4">
            The name Prins Company reflects our heritage. Inspired by the word &quot;prince,&quot; it symbolizes nobility, elegance, and the enduring brilliance of our gemstones. It embodies the spark of creativity that drives us to craft jewelry that resonates with your individuality.
          </p>
          <p className="mb-4">
            We believe in the power of color to inspire and uplift. Our mission is to bring vibrant, sustainable beauty to the world, one piece at a time.
          </p>
          <p className="mb-4">
            Celebrate life &quot;s moments with jewelry that shines as brightly as you do.
          </p>
          <div>
            <p className="mb-6 lg:mb-2.5 flex flex-col md:items-center text-base font-normal leading-6 tracking-[0.3px] text-gray-800">
              Life’s special moments deserve timeless elegance!
            </p>
            <div className="flex flex-col md:flex-row md:gap-6 justify-center">
              <div className="flex flex-col items-center mb-4 md:mb-0">
                <span className="text-center">
                  <p>Founder Name</p>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-center">
                  <p>Co-Founder Name</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;