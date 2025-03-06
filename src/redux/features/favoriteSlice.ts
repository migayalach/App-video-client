import {
  ActFavorite,
  LikeState,
  ResponseLike,
} from "@/interfaces/favorite.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: LikeState = {
  info: null,
  results: [],
  message: "",
  loading: false,
  error: null,
};

export const getFavorites = createAsyncThunk<LikeState, string>(
  "like/getFavorites",
  async (idUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<LikeState>(
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

export const postFavorite = createAsyncThunk<
  ResponseLike,
  Partial<ActFavorite>
>("like/postFavorite", async (information, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<ResponseLike>(
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
});

export const deleteFavorite = createAsyncThunk<
  ResponseLike,
  Partial<ActFavorite>
>("like/deleteFavorite", async (information, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete<ResponseLike>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/like/${information.idVideo}/${information.idUser}`,
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
});

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    clearMessageFavorite: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // GET FAVORITES
      .addCase(
        getFavorites.fulfilled,
        (state, action: PayloadAction<LikeState>) => {
          state.info = action.payload.info;
          state.results = action.payload.results;
          state.error = null;
          state.loading = false;
        }
      )

      // ADD NEW FAVORITE
      .addCase(
        postFavorite.fulfilled,
        (state, action: PayloadAction<ResponseLike>) => {
          state.message = action.payload.message;
          state.error = null;
          state.loading = false;
        }
      )

      // DELETE FAVORITE
      .addCase(
        deleteFavorite.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.message = action.payload.message;
          state.error = null;
          state.loading = false;
        }
      );
  },
});

export default favoriteSlice.reducer;
export const { clearMessageFavorite } = favoriteSlice.actions;
