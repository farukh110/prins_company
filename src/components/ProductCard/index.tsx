import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Heart, Eye, Lock } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { addWishlistItem } from '@/redux/api/auth/authSlice'
import { AddWishlistPayload } from '@/types/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';

type ProductCardProps = {
  ProductId: string
  href: string
  title: string
  price: string
  imageSrc: string
  hoverImageSrc?: string
  alt?: string
  swatches?: string[]
}

const ProductCard: FC<ProductCardProps> = ({
  ProductId,
  href,
  title,
  price,
  imageSrc,
  hoverImageSrc,
  alt = '',
  swatches = []
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const { user } = useAppSelector((s) => s.auth)
  const isLoggedIn = !!user?.customer_id

  const addToWishlist = async () => {
    if (!isLoggedIn) {
      toast.error('Please log in to add items to your wishlist', {
        action: {
          label: 'Login',
          onClick: () => router.push('/login')
        }
      })
      return
    }

    if (isAdding) return

    const payload: AddWishlistPayload = {
      customer_id: user!.customer_id,
      product_id: Number(ProductId)
    }

    setIsAdding(true)

    try {
      const promise = dispatch(addWishlistItem(payload)).unwrap()

      await toast.promise(promise, {
        loading: 'Adding to wishlist...',
        success: () => {
          router.push('/wishlist')
          return 'Added to wishlist!'
        },
        error: (err: any) => err?.message || 'Failed to add to wishlist'
      })
    } catch {
      
    } finally {
      setIsAdding(false)
    }
  }


  const handleViewPriceClick = () => {
    toast.info('Log in to view pricing', {
      description: 'Exclusive prices for members only',
      action: {
        label: 'Log In',
        onClick: () => router.push('/login')
      }
    })
  }

  return (
    <article
      className="group pt-6 pb-2 hover:shadow-[0px_8px_18px_0px_rgba(22,22,24,0.08)] transition-all duration-300 bg-white rounded-lg overflow-hidden min-h-[371px] max-h-[462px]"
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
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Quick View */}
        <div className="absolute bottom-14 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            aria-label="Quick view"
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition"
          >
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={addToWishlist}
          disabled={isAdding}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition disabled:opacity-50"
        >
          <Heart
            size={18}
            className={`text-gray-700 ${isAdding ? 'fill-rose-500 text-rose-500' : ''}`}
          />
        </button>

        {/* Color Swatches */}
        {swatches.length > 0 && (
          <div className="flex justify-center items-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
            {swatches.slice(0, 4).map((color, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
                style={{ backgroundColor: color }}
              />
            ))}
            {swatches.length > 4 && (
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                +{swatches.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 px-3 text-sm text-gray-700 line-clamp-2">
        <Link href={href} className="hover:text-gray-900 transition">
          {title}
        </Link>
      </h3>

      {/* Price or View Price Button */}
      <div className="px-3 pt-2 pb-4">
        {isLoggedIn ? (
          <Link href={href} className="block">
            <p className="text-lg font-semibold text-gray-900">{price}</p>
          </Link>
        ) : (
          <button
            onClick={handleViewPriceClick}
            className="flex items-center cursor-pointer gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Lock size={16} className="text-gray-500" />
            View Price
          </button>
        )}
      </div>
    </article>
  )
}

export default ProductCard