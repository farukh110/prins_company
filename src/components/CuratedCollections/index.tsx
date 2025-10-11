import Image from "next/image";
import Link from "next/link";

const CuratedCollections: React.FC = () => {
  return (
    <div
      className="flex justify-center gap-6 items-baseline flex-wrap relative mb-12 md:mb-14 lg:max-w-[1920px] mx-auto"
      style={{ minHeight: 0 }}
    >
      <h2 className="text-[22px] poppins-medium leading-8 tab:leading-12 mb-6 text-center">
        Curated by Our Master Jewelers
      </h2>
      <div className="basis-full w-full order-2">
        <div className="flex grid grid-cols-1 md:grid lg:grid-cols-3 gap-0.5 overflow-x-auto overflow-x-hidden no-scrollbar">
          <Link
            href="/c/celestial-jewelry"
            className="cursor-pointer no-underline block hover:no-underline s1 text-center relative group overflow-hidden min-w-64"
            aria-label="Celestial Collection"
            rel="follow"
          >
            <span className="block">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/home/collections/1.jpg"
                  alt="Celestial Collection"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:shadow-[5px_5px_15px_5px_rgba(0,0,0,0.05)] group-hover:scale-110 transition ease-in-out duration-500 block"
                  quality={85}
                />
              </div>
              <span className="absolute bottom-0 desk:h-[100px] h-14 bg-grayscale-100/20 backdrop-blur-[15px] w-full left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-col">
                <span className="text-[18px] poppins-medium leading-8 tab:leading-12 mb-6 text-center absolute top-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:-translate-y-[calc(50%+10px)] s1">
                  Celestial Collection
                </span>
                <span className="a1 hidden desk:flex transition-opacity underline ease-in-out duration-500 opacity-0 desk:group-hover:opacity-100 bottom-3 absolute">
                  Shop Now
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-2xl"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
          <Link
            href="/l/gardens+at+twilight-collection"
            className="cursor-pointer no-underline block hover:no-underline s1 text-center relative group overflow-hidden min-w-64"
            aria-label="Gardens at Twilight"
            rel="follow"
          >
            <span className="block">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/home/collections/2.jpeg"
                  alt="Gardens at Twilight"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:shadow-[5px_5px_15px_5px_rgba(0,0,0,0.05)] group-hover:scale-110 transition ease-in-out duration-500 block"
                  quality={85}
                />
              </div>
              <span className="absolute bottom-0 desk:h-[100px] h-14 bg-grayscale-100/20 backdrop-blur-[15px] w-full left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-col">
                <span className="text-[18px] poppins-medium leading-8 tab:leading-12 mb-6 text-center absolute top-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:-translate-y-[calc(50%+10px)] s1">
                  Gardens at Twilight
                </span>
                <span className="a1 hidden desk:flex transition-opacity underline ease-in-out duration-500 opacity-0 desk:group-hover:opacity-100 bottom-3 absolute">
                  Shop Now
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-2xl"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
          <Link
            href="/c/aeon-jewelry"
            className="cursor-pointer no-underline block hover:no-underline s1 text-center relative group overflow-hidden min-w-64"
            aria-label="Aeon Collection"
            rel="follow"
          >
            <span className="block">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/home/collections/3.jpeg"
                  alt="Aeon Collection"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:shadow-[5px_5px_15px_5px_rgba(0,0,0,0.05)] group-hover:scale-110 transition ease-in-out duration-500 block"
                  quality={85}
                />
              </div>
              <span className="absolute bottom-0 desk:h-[100px] h-14 bg-grayscale-100/20 backdrop-blur-[15px] w-full left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-col">
                <span className="text-[18px] poppins-medium leading-8 tab:leading-12 mb-6 text-center absolute top-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:-translate-y-[calc(50%+10px)] s1">
                  Aeon Collection
                </span>
                <span className="a1 hidden desk:flex transition-opacity underline ease-in-out duration-500 opacity-0 desk:group-hover:opacity-100 bottom-3 absolute">
                  Shop Now
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-2xl"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CuratedCollections;