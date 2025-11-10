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
  category: string;
  quantity: string | null;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  product_type: string;
  image: string;
  sub_categories: string;

  // Diamond fields
  dia_1_shape?: string | null;
  dia_1_pcs?: string | null;
  dia_1_wt?: string | null;
  dia_2_shape?: string | null;
  dia_2_pcs?: string | null;
  dia_2_wt?: string | null;
  total_dia_wt?: string | null;

  // Optional media fields
  video?: string;
  is_lab_grown?: boolean;
  skin_tone_hand?: { light: string; dark: string };
  customer_images?: { src: string; alt: string; overlayText?: string }[];
}

/* Parsed version – used in Redux state & UI */
export interface ParsedProduct extends Omit<Product, "image"> {
  image: string[]; // parsed array
  video: string | null;
  isLabGrown: boolean;
  skinToneHand: { light: string; dark: string } | null;
  customerImages: { src: string; alt: string; overlayText?: string }[] | null;
}

/* Product type hierarchy */
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

/* API responses */
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

export interface GetProductTypePayload {
  stoneType: string[];
}

export interface SingleProductResponse {
  status: boolean;
  message: string;
  data: Product;
}

export interface GetProductsPayload {
  stoneType: string[];
  productType: string[],
  minPrice: number,
  maxPrice: number,
  minWeight: number,
  maxWeight: number,
  sortColumn: string,
  sortDir: string;
}

/* Redux state */
export interface ProductState {
  products: Product[] | null;
  productsCount: number;
  data: StoneType[] | null;
  stoneTypes: StoneType[] | null;
  stoneTypesCount: number;
  single: ParsedProduct | null;
  loading: boolean;
  error: string | null;
  count: number;
};

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
  }

  return image
    .split(",")
    .map(s => s.trim())
    .filter(u => u && u.startsWith("http"));
};