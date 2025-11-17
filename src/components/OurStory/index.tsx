import Image from 'next/image';

const OurStory: React.FC = () => {
    return (
        <>
            <div className="pt-5 px-4 pb-2.5 md:pt-6 md:pb-10 md:px-8 lg:px-0 lg:max-w-[1212px] lg:mx-auto lg:pb-16">
                {/* Optional subtitle */}
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mx-4 sm:mx-14 mb-10 md:mb-12 lg:mb-20 items-start lg:items-center">
                {/* Image Section - Made Taller */}
                <div className="w-full lg:w-[44.7%] mb-8 lg:mb-0">
                    {/* Desktop & Tablet: Taller portrait-style (e.g. 4:5 or 5:6) */}
                    <div className="relative w-full aspect-[5/5] lg:aspect-[6/6] overflow-hidden shadow-xl">
                        <Image
                            src="/images/about/about_prins_company.jpg"
                            alt="Prins Company Founders"
                            fill
                            priority={true} // Recommended for above-the-fold hero images
                            quality={90}
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                    </div>

                    {/* Mobile: Slightly shorter but still elegant */}
                    <div className="md:hidden relative w-full aspect-[3/4] overflow-hidden shadow-xl rounded-lg mt-6">
                        <Image
                            src="/images/about/about_prins_company.jpg"
                            alt="Prins Company Founders"
                            fill
                            quality={90}
                            className="object-cover object-center"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="px-8 lg:px-0 lg:w-[55.3%] poppins-light text-[#161618] text-[15px] leading-relaxed text-justify">
                    <h1 className="text-[26px] md:text-[28px] poppins-semibold leading-tight lg:leading-[48px] mb-8 text-[#1a1a1a]">
                        From Passion to Pieces You'll Love
                    </h1>
                    <p className="mb-5">
                        What started as a shared passion between a husband-and-wife duo has grown into a brand built on style, substance, and everyday elegance. They began their journey in the jewelry world by sourcing and selling handpicked pieces to retail stores. But after years of listening closely to what customers truly wanted—timeless design, effortless wearability, and just the right touch of sophistication—they took a bold step.
                    </p>
                    <p className="mb-5">
                        In 2010, they launched their own collection: jewelry created for real life. Not too trendy, never overdone—just beautifully crafted pieces you’ll reach for day after day. With his background in sales and her perspective as a lifelong jewelry lover, they blended business know-how with an intuitive sense of style.
                    </p>
                    <p className="mb-5">
                        The result? A thoughtfully curated line designed to be worn, loved, and lived in. Jewelry that doesn’t just accessorize—but tells your story, your way.
                    </p>
                </div>
            </div>
        </>
    );
};

export default OurStory;