"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Pause, ZoomIn } from "lucide-react";

interface ProductMediaProps {
  className?: string;
}

interface MediaItem {
  src: string;
  alt: string;
  label?: string;
  isLabGrown?: boolean;
  isVideo?: boolean;
  skinToneOverlay?: {
    light: string;
    dark: string;
  };
}

interface CustomerImage {
  src: string;
  alt: string;
  overlayText?: string;
}

interface SkinToneImageProps {
  item: MediaItem;
}

const ProductMedia: FC<ProductMediaProps> = ({ className }) => {
  const productImages: MediaItem[] = [
    {
      src: "/images/products/rings/1.webp",
      alt: "10x8mm AAAA Princess Diana Inspired Blue Sapphire Ring with Diamond Halo in Yellow Gold",
      label: "Premium | 4.03 ct.tw | 14K Yellow Gold",
      isLabGrown: true,
    },
    {
      src: "/images/products/rings/1.webp",
      alt: "10x8mm AAAA Princess Diana Inspired Blue Sapphire Ring with Diamond Halo in Yellow Gold - body_hand",
      skinToneOverlay: {
        light: "/images/products/detail/body_hand_light.webp",
        dark: "/images/products/detail/body_hand_dark.webp",
      },
    },
    {
      src: "/videos/product-detail/1.mp4",
      alt: "Silent Product Video",
      label: "Shown Here: Premium | 4.03 ct.tw | 14K Yellow Gold",
      isVideo: true,
    },
    {
      src: "/images/products/rings/1.webp",
      alt: "Side View 3",
    },
    {
      src: "/images/products/rings/1.webp",
      alt: "Side View 4",
    },
    {
      src: "/images/products/rings/1.webp",
      alt: "Ruler Comparison",
    },
    {
      src: "/images/products/rings/1.webp",
      alt: "Gift Box",
    },
  ];

  const customerImages: CustomerImage[] = [
    {
      src: "/images/reviews/1.webp",
      alt: "Beautiful Lab Grown Sapphire and Custom Bands",
    },
    {
      src: "/images/reviews/2.webp",
      alt: "Beautiful Lab Grown Sapphire and Custom Bands",
    },
    {
      src: "/images/reviews/3.webp",
      alt: "Proposal Ring",
    },
    {
      src: "/images/reviews/1.webp",
      alt: "So in love",
      overlayText: "View all 143 images",
    },
  ];

  return (
    <div
      className={`bg-gray-100 md:grow md:max-w-[calc(100%-370px)] lg:max-w-[calc(100%-500px)] ${className}`}
    >
      <div className="max-w-full">
        <div
          className="relative min-h-[400px] pt-4 lg:pl-6 lg:pb-0 lg:pt-6 lg:bg-white"
          data-trk-type="engagement"
          data-trk-title="Media"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {productImages.map((item, index) => (
              <div key={index}>
                <div
                  className="relative w-full overflow-hidden bg-gray-300 rounded-lg shadow-md"
                  role="button"
                  tabIndex={0}
                  aria-label="Product Image"
                  data-trk-type="button"
                  data-trk-title={item.alt}
                >
                  {item.isLabGrown && (
                    <div className="absolute top-3 left-3 z-30 flex items-center justify-center">
                      <span className="px-2 py-1 bg-blue-600 text-white text-sm font-semibold rounded">
                        LAB GROWN
                      </span>
                    </div>
                  )}

                  {item.isVideo ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="none"
                        aria-hidden="true"
                        aria-label="Silent Product Video"
                        className="absolute inset-0 object-cover h-full bg-gray-100 rounded-lg"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <span className="absolute bottom-6 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="w-12 h-12 bg-black/30 flex items-center justify-center rounded-full mb-3 hover:bg-black/50 transition"
                          aria-label="Pause video"
                        >
                          <Pause className="text-white" strokeWidth={1.5} />
                        </button>
                        <button
                          className="w-12 h-12 bg-black/30 flex items-center justify-center rounded-full hover:bg-black/50 transition"
                          data-trk-type="button"
                          data-trk-title="Expand video"
                          aria-label="Expand video"
                        >
                          <ZoomIn className="text-white" strokeWidth={1.5} />
                        </button>
                      </span>
                      {item.label && (
                        <div className="absolute bottom-3 inset-x-3 bg-white/70 z-30 py-1.5 px-3 text-center text-gray-900 text-sm font-medium rounded-b-lg">
                          {item.label}
                        </div>
                      )}
                    </div>
                  ) : item.skinToneOverlay ? (
                    <SkinToneImage item={item} />
                  ) : (
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={464}
                        height={464}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 bg-gray-300"
                        priority
                        onError={() => console.error(`Failed to load image: ${item.src}`)}
                      />
                      {item.label && (
                        <div className="absolute bottom-2 inset-x-2 z-30 py-1 px-2 text-center text-gray-800 text-sm font-medium bg-white/70 rounded-b-lg">
                          Selected: {item.label}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div
              className="w-full bg-gray-300 mt-6 sm:col-span-2"
              data-trk-type="engagement"
              data-trk-title="Customer Images"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-center mb-8 text-gray-900">
                  Customers Images
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center w-full">
                  {customerImages.map((img, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 overflow-hidden cursor-pointer rounded-lg shadow-md relative"
                      data-trk-type="button"
                      data-trk-title={img.alt}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={160}
                        height={160}
                        className="w-full h-full object-contain max-h-[296px]"
                        onError={() => console.error(`Failed to load customer image: ${img.src}`)}
                      />
                      {img.overlayText && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xl font-semibold">
                          {img.overlayText}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkinToneImage: FC<SkinToneImageProps> = ({ item }) => {
  const [tone, setTone] = useState(0.5); // Start at middle for better testing
  const [imageError, setImageError] = useState({ light: false, dark: false, ring: false });
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleToneChange = (clientY: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
      const newTone = 1 - y / rect.height; // 0 at bottom (light), 1 at top (dark)
      setTone(newTone);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    handleToneChange(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      requestAnimationFrame(() => handleToneChange(e.clientY));
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    handleToneChange(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      e.preventDefault(); // Prevent scrolling
      requestAnimationFrame(() => handleToneChange(e.touches[0].clientY));
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg group">
      {/* Light hand - base layer */}
      {!imageError.light ? (
        <Image
          src={item.skinToneOverlay?.light || "/fallback/light-hand.png"}
          alt="Light Skin Tone"
          width={464}
          height={464}
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
          priority
          onError={() => {
            console.error(`Failed to load light skin tone image: ${item.skinToneOverlay?.light}`);
            setImageError((prev) => ({ ...prev, light: true }));
          }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center z-0">
          <span className="text-red-500 text-sm">Light hand image failed to load</span>
        </div>
      )}

      {/* Dark hand - middle layer */}
      {!imageError.dark ? (
        <Image
          src={item.skinToneOverlay?.dark || "/fallback/dark-hand.png"}
          alt="Dark Skin Tone"
          width={464}
          height={464}
          className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500"
          style={{ opacity: tone }}
          onError={() => {
            console.error(`Failed to load dark skin tone image: ${item.skinToneOverlay?.dark}`);
            setImageError((prev) => ({ ...prev, dark: true }));
          }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center z-10">
          <span className="text-red-500 text-sm">Dark hand image failed to load</span>
        </div>
      )}

      {/* Ring - top layer */}
      {!imageError.ring ? (
        <Image
          src={item.src || "/fallback/ring.png"}
          alt={item.alt}
          width={464}
          height={464}
          className="absolute inset-0 w-full h-full object-contain z-20 transition-transform duration-500 group-hover:scale-105"
          priority
          onError={() => {
            console.error(`Failed to load ring image: ${item.src}`);
            setImageError((prev) => ({ ...prev, ring: true }));
          }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center z-20">
          <span className="text-red-500 text-sm">Ring image failed to load</span>
        </div>
      )}

      {/* Slider control */}
      <div
        ref={sliderRef}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-[80%] flex items-center justify-center cursor-pointer z-30 bg-white/50 backdrop-blur-sm rounded-2xl"
        data-trk-type="button"
        data-trk-title="Skintone"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="relative w-2 h-[90%] rounded-md flex items-center justify-center"
          style={{
            background: "linear-gradient(to top, rgb(130, 84, 68) 0%, rgb(241, 210, 205) 100%)",
          }}
        >
          <div
            className="absolute w-6 h-6 -left-2 bg-white rounded-full shadow-[inset_0_0_1px_#fff,_inset_0_1px_7px_#ebebeb,_0_3px_6px_-3px_#bbb]"
            style={{
              top: `${(1 - tone) * 100}%`, // Slider moves from bottom (light) to top (dark)
              cursor: "ns-resize",
              border: "1px solid #999",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMedia;