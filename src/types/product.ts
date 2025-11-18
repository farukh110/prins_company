// src/types/product.ts
export interface Product {
  id: string;
  style_no: string;
  item_no: string;
  vendor_model: string;
  metal: string;
  size: string;
  weight: string;
  name: string;
  price: string;
  original_price?: string;
  category: string;
  quantity: string | null;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  product_type: string;
  image: string; // ← this is raw from API (string)
  sub_categories: string;

  total_carat?: string;
  dia_1_shape?: string | null;
  dia_1_pcs?: string | null;
  dia_1_wt?: string | null;
  dia_2_shape?: string | null;
  dia_2_pcs?: string | null;
  dia_2_wt?: string | null;
  total_dia_wt?: string | null;

  video?: string;
  is_lab_grown?: boolean;
  skin_tone_hand?: { light: string; dark: string };
  customer_images?: { src: string; alt: string; overlayText?: string }[];
}

export type ParsedProductListItem = Omit<Product, "image"> & { image: string[] };

export interface ParsedProduct extends Omit<
  Product,
  "image" | "video" | "is_lab_grown" | "skin_tone_hand" | "customer_images"
> {
  image: string[];
  video: string | null;
  isLabGrown: boolean;
  skinToneHand: { light: string; dark: string } | null;
  customerImages: { src: string; alt: string; overlayText?: string }[] | null;

  original_price?: string;
  total_carat?: string;
  dia_1_shape?: string | null;
  dia_1_pcs?: string | null;
  dia_1_wt?: string | null;
  dia_2_shape?: string | null;
  dia_2_pcs?: string | null;
  dia_2_wt?: string | null;
  total_dia_wt?: string | null;

  carat_options?: Array<{ id: string; title: string; value: string }>;
  metal_options?: Array<{ id: string; title: string; icon: string }>;
  gemstone_videos?: any[];
  gemstone_quality?: string;
  _rawImage?: string;
}

/* Rest of your types (unchanged) */
export interface ProductType {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  subcategory_id: string;
  slug: string;
  products: Product[];
}

export interface StoneType {
  stoneTypeId: string;
  stoneType: string;
  productTypes: ProductType[];
}

export interface ProductApiResponse {
  status: boolean;
  count: number;
  data: StoneType[];
}

export interface ProductsApiResponse {
  status: boolean;
  count: number;
  data: Product[];
}

export interface SingleProductResponse {
  status: boolean;
  message: string;
  data: Product;
}

export interface GetProductTypePayload {
  stoneType: string[];
}

export interface GetProductsPayload {
  stoneType: string[];
  productType: string[];
  minPrice: number;
  maxPrice: number;
  minWeight: number;
  maxWeight: number;
  sortColumn: string;
  sortDir: string;
}

export interface ProductState {
  data: StoneType[] | null;
  products: ParsedProductListItem[] | null;   // ← Fixed!
  productsCount: number;
  stoneTypes: StoneType[] | null;
  stoneTypesCount: number;
  single: ParsedProduct | null;
  loading: boolean;
  error: string | null;
  count: number;
}

export const parseProductImages = (
  image: string | string[] | null | undefined
): string[] => {
  if (Array.isArray(image)) {
    return image
      .filter((u): u is string => typeof u === "string")
      .map(u => u.trim())
      .filter(u => u && u.startsWith("http"));
  }

  if (!image || image.trim() === "") return [];

  try {
    const parsed = JSON.parse(image);
    if (Array.isArray(parsed)) {
      return parsed
        .filter((u): u is string => typeof u === "string")
        .map(u => u.trim())
        .filter(u => u && u.startsWith("http"));
    }
  } catch {
    // ignore
  }

  return image
    .split(",")
    .map(s => s.trim())
    .filter(u => u && u.startsWith("http"));
};