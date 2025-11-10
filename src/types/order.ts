export interface GetMyOrders {
    id: string,
    title: string,
    name: string,
    number: string,
    alternative_number: null,
    address: string,
    email: string,
    nearest_landmark: string,
    delievery_instruction: string,
    payment_information: string,
    total: string,
    delievery_fee: null,
    grand_total: string,
    status: string,
    mode: string,
    area: string,
    isread: string,
    created_at: string,
    updated_at: string,
    user_id: string,
    currency: null,
    country: null,
    city: string,
    zipcode: null,
    charge_id: null,
    tax_value: null,
    tax_name: null
};

export interface GetMyOrdersResponse {
    status: boolean;
    message: string;
    data: GetMyOrders[];
};