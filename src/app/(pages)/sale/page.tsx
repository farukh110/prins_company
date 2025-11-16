"use client";

import SaleGrid from "@/components/SaleGrid";
import SaleProducts from "@/components/SaleProducts";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sale: React.FC = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <>
            <section className="mb-8 sm:mb-10 lg:mb-14">
                <div className="relative">
                    <Link
                        href="/c/lab+grown-jewelry"
                        aria-label="Lab Grown Jewelry"
                        className="block relative"
                    >
                        <span className="relative block w-full overflow-hidden pt-[50%] sm:pt-[40%] lg:pt-[29.6875%]">
                            <Image
                                src="/images/sale/banner.webp"
                                alt="Lab Grown Jewelry Banner"
                                className="absolute inset-0 w-full h-full object-cover"
                                width={2500}
                                height={742}
                                loading="eager"
                                decoding="async"
                                quality={90}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                            />
                        </span>
                    </Link>

                    {/* Dark overlay + centered content */}
                    <div className="absolute inset-0 bg-black/50"> {/* ← This is the dark overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">
                            <div className="max-w-2xl space-y-4 sm:space-y-5 lg:space-y-7">
                                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight tracking-wide">
                                    Sustainably created. Meticulously crafted.
                                </p>
                                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-light leading-tight tracking-wide">
                                    Brilliance without compromise.
                                </p>
                                <Link
                                    href="/c/lab+grown-jewelry"
                                    className="inline-flex items-center justify-center w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] h-12 sm:h-14 lg:h-16
                       border-2 border-white text-white text-sm sm:text-base lg:text-lg font-medium tracking-wider
                       transition-all duration-300 hover:bg-white hover:text-black
                       mt-6 sm:mt-8 lg:mt-10"
                                >
                                    CALL US
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SaleProducts />
            <SaleGrid />

        </>);
};

export default Sale;
