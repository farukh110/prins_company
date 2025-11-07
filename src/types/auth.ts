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