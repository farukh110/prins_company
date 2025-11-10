export interface WishlistItemProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  metalType: string;
  caratWeight: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  gemstoneQuality?: string;
  stoneSize?: string;
  onRemove?: (id: string) => void;
};

export interface WishlistItem {
  id: string;
  style_no: string;
  item_no: string;
  vendor_model: string;
  metal: string | null;
  size: string;
  weight: string;
  name: string;
  price: string;
  category: string;
  quantity: number | null;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  product_type: string;
  image: string;
  sub_categories: string;
  dia_1_shape: string | null;
  dia_1_pcs: string | null;
  dia_1_wt: string | null;
  dia_2_shape: string | null;
  dia_2_pcs: string | null;
  dia_2_wt: string | null;
  total_dia_wt: string | null;
};

export interface GetWishlistResponse {
  status: boolean;
  message: string;
  data: WishlistItem[];
};

export const mapWishlistApiToProps = (api: WishlistItem): WishlistItemProps => {
  const getFirstImage = (json: string): string => {
    try {
      const arr = JSON.parse(json);
      return Array.isArray(arr) && arr.length > 0 ? arr[0] : "/placeholder.jpg";
    } catch {
      return "/placeholder.jpg";
    }
  };

  return {
    id: api.id,
    title: api.name,
    imageSrc: getFirstImage(api.image),
    imageAlt: api.name,
    metalType: api.metal ?? "N/A",
    caratWeight: api.total_dia_wt ?? "0",
    price: `$${api.price}`,
    originalPrice: undefined,
    discount: undefined,
    gemstoneQuality: "Best",
    stoneSize: api.size,
  };
};