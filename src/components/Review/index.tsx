"use client";
import React, { useEffect } from 'react';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Review } from '@/types/review';

const reviews: Review[] = [
    {
        id: '1',
        title: 'Well pleased with the ring.',
        image: '/images/products/rings/10.webp',
        alt: '8x6mm A Emerald-Cut Solitaire Morganite Infinity Twist Ring in White Gold',
        rating: 5,
        comment: 'Well pleased with the ring. Ordered a size w1/2. Received a size x. had to take to jewelers to get resized.',
        reviewer: 'Michael Y.',
        date: 'Oct 03, 2025',
        link: '/p/solitaire-emerald-cut-morganite-and-diamond-infinity-twist-ring-sr1494mgd'
    },
    {
        id: '2',
        title: 'Something for myself',
        image: '/images/products/rings/11.webp',
        alt: '7mm AAAA Solitaire Round Pink Tourmaline Ring with Diamond Accents in P950 Platinum',
        rating: 5,
        comment: 'It’s a very gorgeous ring. Not too big not too small gemstone. 💎 love it.',
        reviewer: 'Nazneen S.',
        date: 'Oct 02, 2025',
        link: '/p/solitaire-round-pink-tourmaline-ring-with-diamond-accents-sr2677ptd'
    },
    {
        id: '3',
        title: 'Absolutely beautiful.',
        image: '/images/gifts/3.webp',
        alt: '3mm KI3 Solitaire Diamond Cross Pendant in Rose Gold',
        rating: 5,
        comment: 'White gold cross and chain arrived beautifully packaged with an illuminated box. This was ordered as a birthday gift for my daughter and I could not be happier with the merchandise.',
        reviewer: 'Michael K.',
        date: 'Oct 02, 2025',
        link: '/p/prong-set-diamond-cross-pendant-sp1094d'
    },
    {
        id: '4',
        title: 'Well pleased with the ring.',
        image: '/images/gifts/4.webp',
        alt: '8x6mm A Emerald-Cut Solitaire Morganite Infinity Twist Ring in White Gold',
        rating: 5,
        comment: 'Well pleased with the ring. Ordered a size w1/2. Received a size x. had to take to jewelers to get resized.',
        reviewer: 'Michael Y.',
        date: 'Oct 03, 2025',
        link: '/p/solitaire-emerald-cut-morganite-and-diamond-infinity-twist-ring-sr1494mgd'
    },
    {
        id: '5',
        title: 'Something for myself',
        image: '/images/gifts/5.webp',
        alt: '7mm AAAA Solitaire Round Pink Tourmaline Ring with Diamond Accents in P950 Platinum',
        rating: 5,
        comment: 'It’s a very gorgeous ring. Not too big not too small gemstone. 💎 love it.',
        reviewer: 'Nazneen S.',
        date: 'Oct 02, 2025',
        link: '/p/solitaire-round-pink-tourmaline-ring-with-diamond-accents-sr2677ptd'
    },
    {
        id: '6',
        title: 'Absolutely beautiful.',
        image: '/images/gifts/1.webp',
        alt: '3mm KI3 Solitaire Diamond Cross Pendant in Rose Gold',
        rating: 5,
        comment: 'White gold cross and chain arrived beautifully packaged with an illuminated box. This was ordered as a birthday gift for my daughter and I could not be happier with the merchandise.',
        reviewer: 'Michael K.',
        date: 'Oct 02, 2025',
        link: '/p/prong-set-diamond-cross-pendant-sp1094d'
    },
];

const ReviewSlider: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 3000, stopOnInteraction: true })]
    );

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi]);

    return (
        <div className="flex flex-col items-center justify-center gap-6 max-w-[1288px] mx-auto mb-12 md:mb-14 relative">

            <div className="relative w-full">
                <h2 className="text-3xl font-bold text-center whitespace-nowrap">
                    What Customers Are Saying
                </h2>
                <a
                    href="/b/customer-reviews"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-700 hover:text-gray-800 underline md:right-8 lg:right-18"
                >
                    View All Reviews
                </a>
            </div>

            <div className="w-full px-5 md:px-9 lg:px-10 relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="flex-[0_0_calc(100%/3)] px-2 min-w-0"
                            >
                                <div className="flex flex-col items-center bg-[#FAFAFB] p-4 min-h-[372px]">
                                    <a href={review.link} className="no-underline">
                                        <Image
                                            src={review.image}
                                            alt={review.alt}
                                            width={100}
                                            height={100}
                                            className="border border-gray-400 object-cover"
                                            loading="lazy"
                                        />
                                    </a>
                                    <a
                                        href={review.link}
                                        className="text-center no-underline hover:no-underline my-2"
                                    >
                                        <span className="text-lg font-medium line-clamp-1 h-7">
                                            {review.title}
                                        </span>
                                    </a>
                                    <div className="flex gap-1">
                                        {Array.from({ length: review.rating }).map((_, index) => (
                                            <svg
                                                key={index}
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="text-center mt-6 text-sm line-clamp-2">
                                        {review.comment}
                                    </div>
                                    <span className="text-sm underline cursor-pointer mt-2">
                                        Read more
                                    </span>
                                    <p className="text-sm font-medium mt-4 lg:mt-6">
                                        {review.reviewer}
                                    </p>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1.5 border border-grayscale-800 outline-none focus:outline-none 
             slick-prev shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] border-0"
                    onClick={scrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default ReviewSlider;