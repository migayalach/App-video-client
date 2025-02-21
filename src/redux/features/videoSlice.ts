import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { setInformation } from "./informationSlice";

export interface Video {
  idVideo: string;
  idUser: string;
  idRanking: string;
  nameVideo: string;
  description: string;
  url: string;
  stateVideo: string;
  dateCreate: string;
  average: number;
  isDelete: string;
}

export interface VideoState {
  videos: Video[];
  videoDetail: Video | null;
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  videoDetail: null,
  loading: false,
  error: null,
};

export const getVideo = createAsyncThunk(
  "video/getVideo",
  async (_, { dispatch }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/video`);
    if (!response.ok) throw new Error("Error al obtener los videos");
    const data = await response.json();
    dispatch(setInformation(data.info));
    return data.results;
  }
);

export const getIdVideo = createAsyncThunk<Video, string>(
  "video/getIdVideo",
  async (idVideo) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/video/${idVideo}`
    );
    if (!response) throw new Error("Error al obtener informacion");
    return response.json();
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
    },
    clearVideoDetail: (state) => {
      state.videoDetail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // VIDEO ALL
      .addCase(getVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideo.fulfilled, (state, action: PayloadAction<Video[]>) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(getVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error desconocido";
      })
      // VIDEO DETAIL
      .addCase(getIdVideo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIdVideo.fulfilled, (state, action: PayloadAction<Video>) => {
        state.videoDetail = action.payload;
        state.loading = false;
      })
      .addCase(getIdVideo.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Error al obtener los detalles del video";
      });
  },
});

export const { clearVideos, clearVideoDetail } = videoSlice.actions;
export default videoSlice.reducer;
