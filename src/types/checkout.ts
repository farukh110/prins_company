export interface CheckoutPayload {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    products: string;
};

export interface CheckoutSummary {
  checkout_id: number;
  subtotal: string;      
  tax_rate: string;      
  tax_amount: string;    
  total: string;         
};

export interface CheckoutApiResponse {
  status: boolean;
  message: string;
  data: CheckoutSummary;
};

export interface CheckoutState {
  summary: CheckoutSummary | null;
  loading: boolean;
  error: string | null;
};

export type CheckoutForm = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
};
