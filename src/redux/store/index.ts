import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../api/categories/categorySlice";
import testimonialReducer from '../api/testimonials/testimonialSlice';
import blogReducer from "../api/blog/blogSlice";
import subCategoryReducer from "../api/subCategories/subCategorySlice";
import authReducer from "../api/auth/authSlice";
import productReducer from "../api/products/productSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        testimonials: testimonialReducer,
        blogs: blogReducer,
        subCategory: subCategoryReducer,
        products: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;