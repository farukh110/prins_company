import AwardsSection from "@/components/Awards/Awards";
import ClientSection from "@/components/Clients";
import CuratedCollections from "@/components/CuratedCollections";
import NewsletterSection from "@/components/NewsLetter";
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
      <section className="mb-12 lg:mb-14">
        <div className="relative">
          <Link
            href="/c/lab+grown-jewelry"
            aria-label="Lab Grown Jewelry"
            className="block relative"
          >
            <span className="relative block w-full overflow-hidden pt-[29.6875%]">
              <Image
                src="/images/banners/2.jpg"
                alt="Lab Grown Jewelry Banner"
                className="absolute inset-0 w-full h-full object-cover"
                width={2500}
                height={742} // Calculated based on aspect ratio (29.6875% of 2500)
                loading="eager"
                decoding="async"
                quality={85}
              />
            </span>
          </Link>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="absolute top-[15.5vw] left-[11.4vw] text-[17px] poppins-light">
              Sustainably created, meticulously crafted,
            </div>
            <div className="absolute top-[17.2vw] left-[18.38vw] text-[17px] poppins-light">
              endlessly brilliant
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