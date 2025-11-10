import { createSlice, createAsyncThunk, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { REGISTER_USER, LOGIN_USER, ADD_TO_WISHLIST, USER_WISHLIST } from "@/constants";
import { AddWishlistPayload, AddWishlistResponse, AuthState, LoginPayload, LoginResponse, PersistedAuth, Register } from "@/types/auth";
import { authService } from "./authService";
import { AxiosError } from "axios";
import { AUTH_STORAGE_KEY } from "@/util/storage";
import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { WishlistItem } from "@/types/wishlist";
import { RootState } from "@/redux/store";

const loadPersistedAuth = (): PersistedAuth | null => {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PersistedAuth) : null;
  } catch {
    return null;
  }
};

const persistAuth = (payload: PersistedAuth): void => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  wishlist: [],
  wishlistLoading: false,
  wishlistError: null,
};

export const registerUser = createAsyncThunk(
  REGISTER_USER,
  async (registerData: Register, { rejectWithValue }) => {

    try {

      const response = await authService.register(registerData);
      return response;

    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue(err.response?.data?.message ?? "Registration failed");
    }
  }
);

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string | ValidationError }
>(LOGIN_USER, async (loginData, { rejectWithValue }) => {

  try {

    const response = await authService.login(loginData);
    return response;

  } catch (error) {

    const err = error as AxiosError<ValidationError>;
    const data = err.response?.data;

    if (data?.errors) {

      return rejectWithValue(data);

    }

    return rejectWithValue(data?.message ?? "Login failed");
  }
});

export const addWishlistItem = createAsyncThunk<
  AddWishlistResponse,
  AddWishlistPayload,
  { rejectValue: string }
>(
  ADD_TO_WISHLIST,
  async (payload, { rejectWithValue }) => {

    try {

      const res = await authService.addWishlist(payload);
      return res.data;

    } catch (error) {

      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue(err.response?.data?.message ?? "Failed to add to wishlist");

    }
  }
);

export const getWishlistItems = createAsyncThunk<
  WishlistItem[],
  string,
  { rejectValue: string }
>(
  USER_WISHLIST,
  async (customerId, { rejectWithValue }) => {

    try {

      const res = await authService.getWishlist(customerId);
      return res.data.data;

    } catch (error) {

      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue(
        err.response?.data?.message ?? "Failed to fetch wishlist"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem(AUTH_STORAGE_KEY);
    },
    resetError: (state) => {
      state.error = null;
    },
    hydrateFromStorage: (state) => {
      const persisted = loadPersistedAuth();
      if (persisted) {
        state.user = persisted.user;
        state.token = persisted.token;
      }
    },
  },
  extraReducers: (builder) => {

    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.loading = false;
      state.user = action.payload.data;
      state.token = action.payload.token;
      persistAuth({ token: action.payload.token, user: action.payload.data });
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Registration failed";
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.loading = false;
      state.user = action.payload.data;
      state.token = action.payload.token;
      persistAuth({ token: action.payload.token, user: action.payload.data });
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Login failed";
    })
    builder.addCase(addWishlistItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addWishlistItem.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addWishlistItem.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) ?? "Wishlist error";
    })
    builder.addCase(getWishlistItems.pending, (state) => {
      state.wishlistLoading = true;
      state.wishlistError = null;
    });
    builder.addCase(
      getWishlistItems.fulfilled,
      (state, action: PayloadAction<WishlistItem[]>) => {
        state.wishlistLoading = false;
        state.wishlist = action.payload;
      }
    );
    builder.addCase(getWishlistItems.rejected, (state, action) => {
      state.wishlistLoading = false;
      state.wishlistError = (action.payload as string) ?? "Wishlist error";
    });
  },
});

export const { logout, resetError, hydrateFromStorage } = authSlice.actions;

const selectAuthState = (state: RootState) => state.auth;

export const selectWishlistCount = createSelector(
  selectAuthState,
  (auth) => auth.wishlist.length
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (auth) => auth.user
);

export const selectAuthToken = createSelector(
  (state: RootState) => state.auth,
  (auth) => auth.token
);

export default authSlice.reducer;