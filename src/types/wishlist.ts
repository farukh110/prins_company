export interface WishlistItemProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  metalType: string;
  caratWeight: string;
  price: string;
  originalPrice: string;
  discount: string;
  gemstoneQuality: string;
  stoneSize?: string;
  onRemove?: (id: string) => void;
}