import { LikeState, Results } from "@/interfaces/favorite.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Response } from "@/interfaces/response.interface";
import axios from "axios";

const initialState: LikeState = {
  info: null,
  favorites: [],
  loading: false,
  error: null,
};

export const getFavorites = createAsyncThunk<Results[], string>(
  "like/getFavorites",
  async (idUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<Results[]>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/like/${idUser}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Error al obtener favoritos"
      );
    }
  }
);

export const postFavorite = createAsyncThunk<any, Partial<any>>(
  "like/postFavorite",
  async (information, { rejectWithValue }) => {
    try {
      const data = await axios.post<any>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/like`,
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

export const deleteFavorite = createAsyncThunk<any, Partial<string>>(
  "like/deleteFavorite",
  async (information, { rejectWithValue }) => {
    try {
      const data = await axios.delete<any>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/like/${information}`,
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

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET FAVORITES
      .addCase(getFavorites.fulfilled, (state, action: PayloadAction<any>) => {
        state.info = action.payload.info;
        state.favorites = action.payload.results;
        state.error = null;
        state.loading = false;
      })

      // ADD NEW FAVORITE
      .addCase(postFavorite.fulfilled, (state, action: PayloadAction<any>) => {
        state.favorites = action.payload.video;
        state.error = null;
        state.loading = false;
      })

      // DELETE FAVORITE
      .addCase(
        deleteFavorite.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.favorites = action.payload.video;
          state.error = null;
          state.loading = false;
        }
      );
  },
});

export default favoriteSlice.reducer;
