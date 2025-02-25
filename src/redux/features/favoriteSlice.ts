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
  "like",
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

export const postFavorite = () => {};

export const deleteFavorite = () => {};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //GET FAVORITES
    builder.addCase(
      getFavorites.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.info = action.payload.info;
        state.favorites = action.payload.results;
        state.error = null;
        state.loading = false;
      }
    );
  },
});

export default favoriteSlice.reducer;
