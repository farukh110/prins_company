import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../api/categories/categorySlice";
import testimonialReducer from '../api/testimonials/testimonialSlice';
import blogReducer from "../api/blog/blogSlice";
import subCategoryReducer from "../api/subCategories/subCategorySlice";
import authReducer from "../api/auth/authSlice";
import productReducer from "../api/products/productSlice";
import cartReducer from "../api/cart/cartSlice";
import checkoutReducer from "../api/checkout/checkoutSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        testimonials: testimonialReducer,
        blogs: blogReducer,
        subCategory: subCategoryReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;