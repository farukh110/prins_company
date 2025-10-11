import CuratedCollections from "@/components/CuratedCollections";
import ReasonSection from "@/components/Reasons";
import Image from "next/image";
import Link from "next/link";
import ReviewSlider from "@/components/Review";
import TheEditSlider from "@/components/TheEdit";
import { BirthdaySlider } from "@/components/Birthday";
import GiftSection from "@/components/Gifts";
import HeroBanner from "@/components/HeroBanner";

const Home: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <GiftSection />
      <BirthdaySlider />
      <section className="mb-8 sm:mb-10 lg:mb-14">
        <div className="relative">
          <Link
            href="/c/lab+grown-jewelry"
            aria-label="Lab Grown Jewelry"
            className="block relative"
          >
            <span className="relative block w-full overflow-hidden pt-[50%] sm:pt-[40%] lg:pt-[29.6875%]">
              <Image
                src="/images/banners/2.jpg"
                alt="Lab Grown Jewelry Banner"
                className="absolute inset-0 w-full h-full object-cover"
                width={2500}
                height={742}
                loading="eager"
                decoding="async"
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
            </span>
          </Link>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
            <div className="text-base sm:text-lg lg:text-[17px] font-light mb-2 sm:mb-3 lg:mb-0 lg:absolute lg:top-[15.5vw] lg:left-[11.4vw]">
              Sustainably created, meticulously crafted,
            </div>
            <div className="text-base sm:text-lg lg:text-[17px] font-light mb-4 sm:mb-6 lg:mb-0 lg:absolute lg:top-[17.2vw] lg:left-[18.38vw]">
              endlessly brilliant
            </div>
            <Link
              href="/c/lab+grown-jewelry"
              className="inline-flex items-center justify-center w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[19vw] h-12 sm:h-14 lg:h-[3vw] 
            border-2 border-white text-white text-sm sm:text-base lg:text-[1.2vw] font-medium 
            transition-all duration-300 hover:bg-white hover:text-black 
            lg:absolute lg:top-[22vw] lg:left-[24vw] lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
      <CuratedCollections />
      {/* <ClientSection /> */}
      <ReasonSection />
      <TheEditSlider />
      <ReviewSlider />
      {/* <NewsletterSection /> */}
      {/* <AwardsSection /> */}
    </>
  );
};

export default Home;