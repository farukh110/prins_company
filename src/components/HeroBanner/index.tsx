"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

const HeroBanner: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const buttonStyles = {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        verticalAlign: 'middle',
        color: isHovered ? '#000000' : '#ffffff',
        fontSize: '1.4vw',
        textAlign: 'center',
        textDecoration: 'none',
        backgroundColor: isHovered ? '#ffffff' : '#000000',
        borderColor: isHovered ? '#ffffff' : '#000000',
        borderWidth: '2px',
        width: '100%',
        maxWidth: '20vw',
        top: '62%',
        left: '24.7%',
        height: '3vw',
        transform: 'translate(-50%, -50%)',
        zIndex: 20, // Ensure button is above overlay
    } as const;

    return (
        <div className="relative">
            <div
                data-trk-type="engagement"
                data-trk-title="Hero Banner"
                className="relative"
            >
                <Link
                    href="/c/jewelry"
                    className="block relative"
                    tabIndex={0}
                    data-trk-type="link"
                    data-trk-title=""
                    rel="follow"
                    data-uw-rm-brl="PR"
                    data-uw-original-href="/c/jewelry"
                >
                    <span
                        className="relative block w-full overflow-hidden"
                        style={{ paddingTop: '39.58333333333333%' }}
                        data-trk-type="banner"
                        data-trk-title="US-Home-Page-Hero-Banner-Fall"
                        data-trk-banner-id="us-home-page-hero-banner-fall-la"
                        data-trk-height={760}
                        data-trk-width={1920}
                        data-trk-url="/c/jewelry"
                    >
                        <Image
                            alt="Desktop"
                            src="/images/banners/diamond-ring.jpg"
                            fill
                            priority
                            className="object-cover object-right-center absolute inset-0"
                            sizes="1400px"
                            quality={85}
                            data-uw-rm-alt-original="Desktop"
                            data-uw-rm-alt="ALT"
                        />
                        {/* Dark overlay */}
                        <div
                            className="absolute inset-0 bg-black opacity-40"
                            style={{ zIndex: 10 }}
                        />
                    </span>
                </Link>
                <div>
                    <div>
                        <div>
                            <Link
                                href="/c/jewelry"
                                target="_blank"
                                style={buttonStyles}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                data-uw-rm-brl="PR"
                                data-uw-original-href="/c/jewelry"
                                aria-label="SHOP JEWELRY - open in a new tab"
                                data-uw-rm-ext-link=""
                                data-uw-rm-external-link-id="https://www.angara.com/c/jewelry$shopjewelry"
                            >
                                SHOP JEWELRY
                            </Link>
                            <div
                                className="absolute flex items-center justify-center text-white font-poppins text-[2vw] font-light text-center"
                                style={{
                                    top: '40%',
                                    left: '15.1%',
                                    height: '3vw',
                                    verticalAlign: 'middle',
                                    zIndex: 20, // Ensure text is above overlay
                                }}
                            >
                                YOUR FALL STYLE,
                            </div>
                            <div
                                className="absolute flex items-center justify-center text-white font-poppins text-[1.25vw] font-light text-center"
                                style={{
                                    top: '48%',
                                    left: '11.7%',
                                    height: '3vw',
                                    verticalAlign: 'middle',
                                    zIndex: 20, // Ensure text is above overlay
                                }}
                            >
                                Handcrafted pieces for this season and beyond.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;