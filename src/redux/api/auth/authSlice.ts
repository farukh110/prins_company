import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Register, RegisterState } from '@/types/auth';
import { authService } from './authService';
import { REGISTER_USER } from '@/constants';

const initialState: RegisterState = {
  data: {
    business_name: '',
    contact_name: '',
    email: '',
    customer_id: '',
    phone: '',
    address: '',
    zipcode: '',
  },
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  REGISTER_USER,
  async (registerData: Register, { rejectWithValue }) => {
    try {
      const response = await authService.register(registerData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  REGISTER_USER,
  async (loginData: Register, { rejectWithValue }) => {
    try {
      const response = await authService.login(loginData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetRegisterState: (state) => {
      state.loading = false;
      state.error = null;
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<Register>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetRegisterState } = authSlice.actions;
export default authSlice.reducer;