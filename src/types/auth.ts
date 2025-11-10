import { GetMyOrders } from "./order";
import { WishlistItem } from "./wishlist";

export interface Register {
    business_name: string;
    contact_name: string;
    email: string;
    customer_id: string;
    phone: string;
    address: string;
    zipcode: string;
};

export interface RegisterState {
  data: Register;
  loading: boolean;
  error: string | null;
};

export interface LoginPayload {
  customer_id: string;
  zipcode: string;
};

export interface LoginResponse {
  status: boolean;
  message: string;
  token: string;
  data: Register & {
    id: string;
    created_at: string;
    updated_at: string;
    status: string;
  };
};

export interface PersistedAuth {
  token: string;
  user: LoginResponse["data"];
};

export interface ValidationError {
  status: boolean;
  message: string;
  errors: Record<string, string[]>;
};

export interface AuthState {
  user: LoginResponse["data"] | null;
  token: string | null;
  loading: boolean;
  error: string | ValidationError | null;

  wishlist: WishlistItem[];
  wishlistLoading: boolean;
  wishlistError: string | null;

  orders: GetMyOrders[];
  ordersLoading: boolean;
  ordersError: string | null;
  
};

export interface FormErrors {
  customer_id?: string;
  zipcode?: string;
  general?: string;
};

export interface AddWishlistPayload {
  customer_id: string;
  product_id: number;  
};

export interface AddWishlistResponse {
  success: boolean;
  message?: string;
};
