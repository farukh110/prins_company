import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../api/categories/categorySlice";
import testimonialReducer from '../api/testimonials/testimonialSlice';
import blogReducer from "../api/blog/blogSlice";
import subCategoryReducer from "../api/subCategories/subCategorySlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        testimonials: testimonialReducer,
        blogs: blogReducer,
        subCategory: subCategoryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;