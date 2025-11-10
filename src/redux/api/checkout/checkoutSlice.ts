import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  CheckoutPayload,
  CheckoutApiResponse,
  CheckoutSummary,
  CheckoutState,
} from "@/types/checkout";
import { checkoutService } from "./checkoutService";
import { CHECKOUT } from "@/constants";

const initialState: CheckoutState = {
  summary: null,
  loading: false,
  error: null,
};

export const performCheckout = createAsyncThunk<
  CheckoutSummary,               
  CheckoutPayload,              
  { rejectValue: string }        
>(CHECKOUT, async (payload, { rejectWithValue }) => {
  try {

    const res: CheckoutApiResponse = await checkoutService.checkout(payload);
    if (!res.status) {
      return rejectWithValue(res.message);
    }
    return res.data;

  } catch (err: any) {
    return rejectWithValue(err.message ?? "Checkout failed");
  }
});

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    clearCheckout(state) {
      state.summary = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performCheckout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        performCheckout.fulfilled,
        (state, action: PayloadAction<CheckoutSummary>) => {
          state.loading = false;
          state.summary = action.payload;
        }
      )
      .addCase(performCheckout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;

export const selectCheckoutSummary = (state: {
  checkout: CheckoutState;
}) => state.checkout.summary;

export const selectCheckoutLoading = (state: {
  checkout: CheckoutState;
}) => state.checkout.loading;

export const selectCheckoutError = (state: {
  checkout: CheckoutState;
}) => state.checkout.error;