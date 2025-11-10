export interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: string;
    originalPrice?: string;
    quantity: number;
    metal: string;
    size: string;
    totalCarat: string;
    image?: string;
    gemstoneQuality?: string;
  };
  discountCode: string;
  onEdit?: () => void;
  onMoveToWishlist?: () => void;
};

export interface CartItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  quantity: number;
  metal: string;
  size: string;
  totalCarat: string;
  image?: string;
  gemstoneQuality?: string;
}

export interface CartState {
  items: CartItem[];
};

export interface OrderSummaryProps {
  subtotal: number;
  saved: number;
};
