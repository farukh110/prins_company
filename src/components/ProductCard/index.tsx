import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Heart, Eye } from 'lucide-react'

type ProductCardProps = {
  href: string
  title: string
  price: string
  imageSrc: string
  hoverImageSrc?: string
  alt?: string
  swatches?: string[]
}

const ProductCard: FC<ProductCardProps> = ({
  href,
  title,
  price,
  imageSrc,
  hoverImageSrc,
  alt = '',
  swatches = []
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="pb-2 hover:shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] transition-shadow duration-300 bg-white rounded-lg overflow-hidden min-h-[371px] max-h-[462px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link href={href} aria-label={title} className="block pb-10">
          <div className="relative flex items-center justify-center w-full overflow-hidden min-h-[224px] max-h-[332px] py-6 pt-8">
            <Image
              src={isHovered && hoverImageSrc ? hoverImageSrc : imageSrc}
              alt={alt || title}
              fill
              priority
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 480px, 828px"
              className="object-contain transition-transform duration-500 ease-out"
            />
          </div>
        </Link>

        <div className="group absolute bottom-14 right-2.5 flex items-center shadow-[0px_1px_10px_0px_rgba(0,0,0,0.05)] bg-white/30 backdrop-blur-sm rounded-full p-1 cursor-pointer">
          <button
            aria-label="View Similar"
            className="p-1 rounded-full bg-white/60 hover:bg-white flex items-center justify-center"
          >
            <Eye size={18} strokeWidth={1.5} className="text-gray-800 opacity-80" />
          </button>
          {/* <div className="hidden md:inline-block px-1 max-w-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-300 ease-out opacity-0 whitespace-nowrap text-sm">
            View Similar
          </div> */}
        </div>

        <button
          aria-label="wishlist"
          className="absolute top-2.5 right-2.5 p-1 rounded-full shadow-[0px_1px_10px_0px_rgba(0,0,0,0.05)] bg-white/30 hover:bg-white/70 transition"
        >
          <Heart size={18} strokeWidth={1.5} className="text-gray-800 opacity-70" />
        </button>

        <div className="flex justify-center items-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 pb-2 z-40">
          {swatches.slice(0, 4).map((color, i) => (
            <span
              key={color + i}
              className="cursor-pointer border rounded-full w-7 h-7 flex justify-center items-center"
            >
              <svg width="16" height="16" className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill={color || '#e5e7eb'} />
              </svg>
            </span>
          ))}
          {swatches.length > 4 && (
            <span className="flex justify-center items-center text-sm px-1 h-[28px] bg-gray-200 text-gray-800 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition">
              +{swatches.length - 4}
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-3 px-3 text-gray-700 text-sm line-clamp-2 hover:text-gray-900">
        <Link href={href} className="hover:no-underline">
          {title}
        </Link>
      </h3>
      <Link href={href} className="hover:no-underline">
        <div className="px-3 pt-1.5 text-gray-700 text-sm">{price}</div>
      </Link>
    </article>
  )
}

export default ProductCard
