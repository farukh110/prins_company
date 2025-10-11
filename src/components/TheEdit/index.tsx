"use client";
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/types/blogPost';

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: "How Angara’s 8Cs Set a New Standard in Fine Jewelry",
        image: "/images/blogs/5.webp",
        alt: "How Angara’s 8Cs Set a New Standard in Fine Jewelry",
        link: "#",
    },
    {
        id: '2',
        title: "2025 Fall Edit: Trending Jewelry You’ll Love to Wear and Style",
        image: "/images/blogs/2.webp",
        alt: "2025 Fall Edit: Trending Jewelry You’ll Love to Wear and Style",
        link: "#",
    },
    {
        id: '3',
        title: "Best Metal for Opal Jewelry–Which One Should You Choose?",
        image: "/images/blogs/3.webp",
        alt: "Best Metal for Opal Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '4',
        title: "Best Metal for Garnet Jewelry–Which One Should You Choose?",
        image: "/images/blogs/1.webp",
        alt: "Best Metal for Garnet Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '5',
        title: "Best Metal For Pearl Jewelry–Which One Should You Choose?",
        image: "/images/blogs/6.webp",
        alt: "Best Metal For Pearl Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '6',
        title: "Tsavorite Necklace and Pendant Buying Guide",
        image: "/images/blogs/4.webp",
        alt: "Tsavorite Necklace and Pendant Buying Guide",
        link: "#",
    },
    {
        id: '7',
        title: "How Angara’s 8Cs Set a New Standard in Fine Jewelry",
        image: "/images/blogs/5.webp",
        alt: "How Angara’s 8Cs Set a New Standard in Fine Jewelry",
        link: "#",
    },
    {
        id: '8',
        title: "2025 Fall Edit: Trending Jewelry You’ll Love to Wear and Style",
        image: "/images/blogs/2.webp",
        alt: "2025 Fall Edit: Trending Jewelry You’ll Love to Wear and Style",
        link: "#",
    },
    {
        id: '9',
        title: "Best Metal for Opal Jewelry–Which One Should You Choose?",
        image: "/images/blogs/3.webp",
        alt: "Best Metal for Opal Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '10',
        title: "Best Metal for Garnet Jewelry–Which One Should You Choose?",
        image: "/images/blogs/1.webp",
        alt: "Best Metal for Garnet Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '11',
        title: "Best Metal For Pearl Jewelry–Which One Should You Choose?",
        image: "/images/blogs/6.webp",
        alt: "Best Metal For Pearl Jewelry–Which One Should You Choose?",
        link: "#",
    },
    {
        id: '12',
        title: "Tsavorite Necklace and Pendant Buying Guide",
        image: "/images/blogs/4.webp",
        alt: "Tsavorite Necklace and Pendant Buying Guide",
        link: "#",
    },
];

const TheEditSlider: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 3, // Default: show 3 slides
        breakpoints: {
            '(max-width: 767px)': {
                slidesToScroll: 1, // Show 1 slide on mobile
                align: 'center', // Center the single slide
            },
        },
    });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi]);

    return (
        <div
            className="mb-12 md:mb-14 mx-auto max-w-[1288px] text-center px-9 md:px-14 lg:px-6"
            data-trk-type="view"
            data-trk-title="The Edit"
        >
            <div className="relative w-full mb-6">
                <h2 className="text-3xl font-bold text-center whitespace-nowrap">
                    The Edit
                </h2>
                <a
                    href="https://www.angara.com/blog/"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-700 hover:text-gray-800 underline md:right-8 lg:right-18"
                    aria-label="Read More The Edit - open in a new tab"
                    target="_blank"
                    rel="follow"
                    data-trk-type="link"
                    data-trk-title="Read More"
                >
                    Read More
                </a>
            </div>
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex-[0_0_calc(100%/3)] md:flex-[0_0_calc(100%/3)] max-[767px]:flex-[0_0_100%] px-1 min-w-0"
                            >
                                <a
                                    href={post.link}
                                    className="flex flex-col text-left items-center no-underline hover:no-underline"
                                    target="_blank"
                                    rel="follow"
                                    data-trk-type="link"
                                    data-trk-title={post.title}
                                    aria-label={`${post.title} - open in a new tab`}
                                >
                                    <span className="block relative">
                                        <Image
                                            src={post.image}
                                            alt={post.alt}
                                            width={370}
                                            height={370}
                                            className="max-w-[258px] min-h-[258px] lg:min-w-[390px] lg:min-h-[370px] object-cover max-[767px]:max-w-full"
                                            loading="lazy"
                                            sizes="(max-width: 767px) 100vw, (max-width: 768px) 258px, 370px"
                                        />
                                    </span>
                                    <span className="pt-4 pb-4 pl-2 pr-2 inline-block">
                                        <span className="block mb-2 md:mb-3 text-lg font-medium md:line-clamp-3 lg:line-clamp-2 md:h-[96px] lg:h-16">
                                            {post.title}
                                        </span>
                                        <span className="text-sm underline block">Read &amp; Shop</span>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0 cursor-pointer"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                    data-trk-type="button"
                    data-trk-title="Prev"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0 cursor-pointer"
                    onClick={scrollNext}
                    aria-label="Next slide"
                    data-trk-type="button"
                    data-trk-title="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <a
                className="s2 border-solid border max-w-[148px] 
            lg:max-w-[336px] p-2 w-full inline-block mt-6 hover:no-underline cursor-pointer"
                target="_blank">Read More</a>
        </div>
    );
};

export default TheEditSlider;