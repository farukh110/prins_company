import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { WishlistItemProps } from '@/types/wishlist';

const WishlistItem: React.FC<WishlistItemProps> = ({
  id,
  title,
  imageSrc,
  imageAlt,
  metalType,
  caratWeight,
  price,
  originalPrice,
  discount,
  gemstoneQuality,
  stoneSize,
  onRemove,
}) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => onRemove?.(id)}
        aria-label="Remove from wishlist"
        className="cursor-pointer absolute top-2 right-2 z-10 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-red-50 transition-colors"
      >
        <Trash2 className="w-4 h-4 text-gray-600" />
      </button>

      <div className="flex justify-center items-center py-6 px-4 bg-white">
        <a
          href={`/p/${title.toLowerCase().replace(/\s+/g, '-')}-ring?metalType=${encodeURIComponent(
            metalType
          )}&gemstoneQuality=${gemstoneQuality || 'best'}`}
          target="_blank"
          rel="nofollow"
          className="block"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={180}
            height={180}
            className="w-full max-w-[140px] h-auto object-contain"
            loading="lazy"
          />
        </a>
      </div>

      <div className="px-4 pb-2">
        <div className="bg-[#F5F5F6] p-2 text-[#161618] text-[12px] !leading-5 font-light flex justify-between items-center">
          <span>
            {gemstoneQuality || 'Best'} | {caratWeight} ct.tw | {metalType}
          </span>
        </div>
      </div>

      <div className="px-4">
        <a
          href={`/p/${title.toLowerCase().replace(/\s+/g, '-')}-ring?metalType=${encodeURIComponent(
            metalType
          )}&gemstoneQuality=${gemstoneQuality || 'best'}`}
          target="_blank"
          rel="nofollow"
          className="block"
        >
          <p className="text-[#161618] text-[13px] line-clamp-2 leading-tight hover:underline">
            {title}
          </p>
        </a>
      </div>

      <div className="flex items-center justify-between px-4 pt-2 pb-3 md:mt-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">{price}</span>

          {originalPrice && (
            <span className="text-xs text-gray-500 line-through">{originalPrice}</span>
          )}

          {discount && (
            <span className="text-xs text-green-600 font-medium">({discount} OFF)</span>
          )}
        </div>
        <span className="bg-[#F5F5F6] text-gray-700 text-xs px-2 py-0.5 font-medium">
          Free Gift(s)
        </span>
      </div>

      <div className="px-4 pb-4">
        <button
          aria-label="Quick View"
          className="cursor-pointer w-full py-2.5 border border-gray-800 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;