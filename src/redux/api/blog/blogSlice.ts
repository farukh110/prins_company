import { GET_ALL_BLOGS } from "@/constants";
import { BlogsResponse, BlogState } from "@/types/blog";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

const initialState: BlogState = {
    data: [],
    loading: false,
    error: null
};

export const getAllBlogs = createAsyncThunk<BlogsResponse, void>(
    GET_ALL_BLOGS,
    async (_, { rejectWithValue }) => {

        try {

            const response = await blogService.getAllBlogs();
            return response;

        } catch (error) {

            return rejectWithValue((error as Error).message);
        }
    }
);

const blogSlice = createSlice({

    name: 'blogs',
    initialState,
    reducers: {
        resetBlogState: (state) => {
            state.data = [];
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {

        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
});

export const { resetBlogState } = blogSlice.actions;
export default blogSlice.reducer;