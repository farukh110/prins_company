import { GiftItem } from '@/types/gifts';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const giftItems: GiftItem[] = [
    {
        title: 'Over $2,500',
        href: '/c/jewelry?minPrice=2500&maxPrice=99999',
        imageSrc: '/images/gifts/1.webp',
        alt: 'Over $2,500',
        rel: 'nofollow',
        dataUwRmAlt: 'ALT',
    },
    {
        title: 'Earrings',
        href: '/c/jewelry?minPrice=1000&maxPrice=2500',
        imageSrc: '/images/gifts/2.webp',
        alt: 'Earrings',
        rel: 'nofollow',
        dataUwRmAlt: 'QU',
    },
    {
        title: '$500 - $1,000',
        href: '/c/jewelry?minPrice=500&maxPrice=1000',
        imageSrc: '/images/gifts/3.webp',
        alt: '$500 - $1,000',
        rel: 'nofollow',
        dataUwRmAlt: 'QU',
    },
    {
        title: 'Bracelets',
        href: '/c/special+days/birthday',
        imageSrc: '/images/gifts/4.webp',
        alt: 'Bracelets',
        rel: 'follow',
        dataUwRmAlt: 'ALT',
    },
    {
        title: 'Necklaces',
        href: '/c/promise-rings',
        imageSrc: '/images/gifts/5.webp',
        alt: 'Necklaces',
        rel: 'follow',
        dataUwRmAlt: 'ALT',
    },
];

const GiftSection: FC = () => {
    return (
        <div
            data-trk-type="view"
            data-trk-title="Gifts That Say It All"
            className="flex justify-center gap-6 items-baseline flex-wrap relative container mt-10 mb-12 max-w-[1288px] mx-auto px-4 md:px-8"
            style={{ minHeight: 0 }}
        >
            <div className="relative w-full flex flex-col md:flex-row md:items-center md:justify-center">
                <h2 className="text-[22px] poppins-medium leading-8 lg:leading-12 text-center md:text-left">
                    Gifts That Say It All
                </h2>
                <a
                    href="/b/customer-reviews"
                    className="text-sm text-gray-700 hover:text-gray-800 underline text-center md:text-right mt-2 md:mt-0 md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2"
                >
                    View All Gifts
                </a>
            </div>
            <div className="w-full order-2">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 justify-center text-gray-700">
                    {giftItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="cursor-pointer no-underline block text-center group hover:no-underline"
                            tabIndex={0}
                            data-trk-type="link"
                            data-trk-title={item.title}
                            rel={item.rel}
                            data-uw-rm-brl="PR"
                            data-uw-original-href={item.href}
                        >
                            <span className="block relative overflow-hidden">
                                <div className="relative z-10">
                                    <span className="relative block w-full overflow-hidden h-full">
                                        <Image
                                            alt={item.alt}
                                            src={item.imageSrc}
                                            width={224}
                                            height={224}
                                            loading="lazy"
                                            className="w-full h-full duration-300 transition object-cover bg-gray-300 group-hover:scale-105"
                                            sizes="15vw"
                                            quality={85}
                                            data-uw-rm-alt-original={item.alt}
                                            data-uw-rm-alt={item.dataUwRmAlt}
                                        />
                                    </span>
                                </div>
                            </span>
                            <span className="pt-1 text-sm md:text-base block">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GiftSection;