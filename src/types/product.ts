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
  dia_1_shape?: string | null;
  dia_1_pcs?: string | null;
  dia_1_wt?: string | null;
  dia_2_shape?: string | null;
  dia_2_pcs?: string | null;
  dia_2_wt?: string | null;
  total_dia_wt?: string | null;
};

export interface ParsedProduct {
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
  image: string[];
  sub_categories: string;
  dia_1_shape?: string | null;
  dia_1_pcs?: string | null;
  dia_1_wt?: string | null;
  dia_2_shape?: string | null;
  dia_2_pcs?: string | null;
  dia_2_wt?: string | null;
  total_dia_wt?: string | null;
};

export interface ProductType {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  subcategory_id: string;
  slug: string;
  products: Product[];
};

export interface StoneType {
  stoneTypeId: string;
  stoneType: string;
  productTypes: ProductType[];
};

export interface ProductApiResponse {
  status: boolean;
  count: number;
  data: StoneType[];
};

export interface GetProductTypePayload {
  stoneType: string[];
};

export interface ProductState {
  data: StoneType[] | null;
  single: ParsedProduct | null;
  loading: boolean;
  error: string | null;
  count: number;
};

export const parseProductImages = (image: string): string[] => {
  
  if (!image || image.trim() === '') return [];

  try {
    const parsed = JSON.parse(image);
    if (Array.isArray(parsed)) {
      return parsed.filter(url => typeof url === 'string' && url.trim());
    }
  } catch (e) {

  }

  return image
    .split(',')
    .map(s => s.trim())
    .filter(url => url && url.startsWith('http'));
    
};

export interface SingleProductResponse {
  status: boolean;
  message: string;
  data: Product;
}