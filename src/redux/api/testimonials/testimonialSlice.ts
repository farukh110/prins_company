import { TestimonialsResponse, TestimonialState } from "@/types/testimonials";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { testimonialService } from "./testimonialService";
import { GET_ALL_TESTIMONIALS } from "@/constants";

const initialState: TestimonialState = {
  data: [],
  loading: false,
  error: null,
};

export const getAllTestimonials = createAsyncThunk<TestimonialsResponse, void>(
  GET_ALL_TESTIMONIALS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await testimonialService.getAllTestimonials();
      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    resetTestimonialState: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getAllTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTestimonialState } = testimonialSlice.actions;
export default testimonialSlice.reducer;