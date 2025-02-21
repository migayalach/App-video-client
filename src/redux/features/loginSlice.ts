import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Login {
  email: string;
  password: string;
}

export interface LoginState {
  user: Login | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  user: { email: "", password: "" },
  loading: false,
  error: null,
};

export const signIn = createAsyncThunk<Login, Partial<Login>>(
  "sign/in",
  async (information, { rejectWithValue }) => {
    try {
      const { data } = await axios.put<Login>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/sign/in`,
        information,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error al iniciar sesión"
      );
    }
  }
);

const SignSlice = createSlice({
  name: "Sign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<Login>) => {
      state.user = action.payload;
      state.loading = false;
    });
  },
});

export default SignSlice.reducer;
