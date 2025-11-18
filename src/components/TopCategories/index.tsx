"use client";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface Category {
    name: string;
    href: string;
    imgSrc: string;
    alt: string;
}

const categories: Category[] = [
    { name: "Colored Gems", href: "/c/gemstone-rings", imgSrc: "/images/products/rings/1.webp", alt: "Colored Gems" },
    { name: "Diamond", href: "/c/diamond-rings", imgSrc: "/images/products/rings/2.webp", alt: "Diamond" },
    { name: "Infinity", href: "/c/infinity-rings", imgSrc: "/images/products/rings/3.webp", alt: "Infinity" },
    { name: "Side Stone", href: "/c/side+stones-rings", imgSrc: "/images/products/rings/4.webp", alt: "Side Stone" },
    { name: "Classic", href: "/c/classic-rings", imgSrc: "/images/products/rings/5.webp", alt: "Classic" },
    { name: "Lab-Grown", href: "/c/lab+grown-rings", imgSrc: "/images/products/rings/6.webp", alt: "Lab-Grown" },
    { name: "GIA Certified", href: "/c/certified-rings", imgSrc: "/images/products/rings/7.webp", alt: "GIA Certified" },
];

const TopCategories: FC = () => {
    return (
        <section
            data-trk-type="view"
            data-trk-title="Top Categories"
            className="shadow-[0px_3px_3px_0px_rgba(0,0,0,0.03)]"
        >
            <div className="p-4 sm:p-6 md:p-8 text-center lg:text-center">
                {/* Heading */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium leading-6 sm:leading-7 md:leading-8 lg:leading-[38px]">
                    Rings
                </h1>

                {/* Description */}
                <div className="mt-2 sm:mt-1.5 md:mt-1 mx-auto max-w-full sm:max-w-2xl lg:max-w-3xl text-gray-700 text-sm sm:text-base md:text-base">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <p className="text-ellipsis">
                            Make a statement wherever you go with handcrafted rings from
                            Angara. From &apos;love&apos; tokens to outfit pick-me-ups, we&apos;ve got them
                            all. Get exploring.
                        </p>
                        <button
                            aria-label="Read More"
                            data-trk-type="button"
                            data-trk-title="Read More"
                            className="underline text-sm sm:pl-2 whitespace-nowrap mt-2 sm:mt-0"
                        >
                            Read More
                        </button>
                    </div>
                </div>

                {/* Categories Carousel */}
                <div className="max-w-[1440px] mx-auto w-full mt-6 sm:mt-5 md:mt-4 lg:mt-6 overflow-hidden">
                    <div
                        className="flex justify-start lg:justify-center gap-2 md:gap-0 overflow-x-auto px-1 sm:px-2 md:px-3 lg:px-0 hide-scrollbar scroll-smooth"
                    >
                        {categories.map((category, index) => (
                            <div key={index}>
                                <Link
                                    href={category.href}
                                    className="group block text-center hover:no-underline mr-1.5 sm:mr-2 md:mr-3 pb-0.5 min-w-[90px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-40 max-w-[90px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-40"
                                    data-trk-type="link"
                                    rel="follow"
                                >
                                    <span className="block relative overflow-hidden bg-[#F5F5F6] rounded mb-2 min-w-[90px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-40 max-w-[90px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-40">
                                        <Image
                                            src={category.imgSrc}
                                            alt={category.alt}
                                            width={200}
                                            height={200}
                                            loading="eager"
                                            className="aspect-square object-cover w-full h-full mix-blend-multiply"
                                        />
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-900 relative inline-block pb-0.5 after:block after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bg-gray-800 after:transition-all after:bottom-0 group-hover:after:w-full">
                                        {category.name}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;