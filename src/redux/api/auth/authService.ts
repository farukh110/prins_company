import { AddWishlistPayload, AddWishlistResponse, LoginPayload, LoginResponse } from "@/types/auth";
import { GetMyOrdersResponse } from "@/types/order";
import { GetWishlistResponse } from "@/types/wishlist";
import { BACKEND } from "@/util/base_url";
import axios, { AxiosError, AxiosResponse } from "axios";

const register = async (data: unknown) => {

  try {

    const response = await axios.post(`${BACKEND}/user/register`, data);
    return response.data;

  } catch (error: unknown) {

    if (error instanceof AxiosError) {

      throw new Error(`Error: ${error.message}`);
    }

    throw new Error('Error: An unexpected error occurred');
  }
};

const login = async (data: LoginPayload): Promise<LoginResponse> => {

  try {

    const response = await axios.post<LoginResponse>(`${BACKEND}/user/login`, data);
    return response.data;

  } catch (error: unknown) {

    if (error instanceof AxiosError) {
      throw error;
    }

    throw new Error('Error: An unexpected error occurred');
  }
};

export const addWishlist = async (
  data: AddWishlistPayload
): Promise<AxiosResponse<AddWishlistResponse>> => {

  try {

    const response = await axios.post<AddWishlistResponse>(`${BACKEND}/wishlist/add`, data);
    return response;

  } catch (error: unknown) {

    if (error instanceof AxiosError) {

      throw error;
    }

    throw new Error('Error: An unexpected error occurred');
  }
};

export const getWishlist = async (
  customerId: string
): Promise<AxiosResponse<GetWishlistResponse>> => {

  try {
    const response = await axios.get<GetWishlistResponse>(
      `${BACKEND}/wishlist/${customerId}`
    );
    return response;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("Error: An unexpected error occurred");
  }
};
// 

export const removeWishlist = async (
  payload: { customer_id: string; product_id: number }
): Promise<AxiosResponse<{ message: string }>> => {
  try {
    const response = await axios.delete(`${BACKEND}/wishlist/remove`, {
      data: payload  
    });
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("Error: An unexpected error occurred");
  }
};

export const getOrderCustomerId = async (
  userId: string
): Promise<AxiosResponse<GetMyOrdersResponse>> => {

  try {
    const response = await axios.get<GetMyOrdersResponse>(
      `${BACKEND}/my-orders/${userId}`
    );
    return response;

  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("Error: An unexpected error occurred");
  }
};

export const authService = {
  register,
  login,
  addWishlist,
  getWishlist,
  removeWishlist,
  getOrderCustomerId
}; 