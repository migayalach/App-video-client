import { Response } from "@/interfaces/response.interface";
import { Video } from "@/interfaces/video.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  results: [],
  loading: false,
  error: null,
};

export interface ResNewVideo {
  message: string;
  video: Video;
}

export interface CreateVideo {
  idUser: string;
  nameVideo: string;
  image: string;
  description: string;
  url: string;
}

export interface UpdateVideo {
  idVideo: string;
  data: CreateVideo;
}

export interface DeleteVideo {
  idUser: string;
  idVideo: string;
}

export const getAllList = createAsyncThunk<Response, string>(
  "myVideos/getIdUser",
  async (idUser) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/my-videos/${idUser}`
    );
    if (!response) throw new Error("Error");
    return response.json();
  }
);

export const postVideo = createAsyncThunk<ResNewVideo, CreateVideo>(
  "create-new-video",
  async (data) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/video`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response) throw new Error("Error");
    return response.json();
  }
);

export const editVideo = createAsyncThunk<ResNewVideo, UpdateVideo>(
  "update-video",
  async ({ data, idVideo }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/video/${idVideo}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response) throw new Error("Error al actualizar el video");
    return response.json();
  }
);

export const deleleVideo = createAsyncThunk<ResNewVideo, DeleteVideo>(
  "deleteVideo",
  async ({ idUser, idVideo }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/video/${idUser}/${idVideo}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response) throw new Error("Error");
    return response.json();
  }
);

const myVideos = createSlice({
  name: "myMideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllList.fulfilled, (state, action: PayloadAction<any>) => {
        state.info = action.payload.info;
        state.results = action.payload.results;
      })
      // !CREATE NEW VIDEO
      .addCase(
        postVideo.fulfilled,
        (state, action: PayloadAction<ResNewVideo>) => {}
      )
      // !UPDATE VIDEO
      .addCase(
        editVideo.fulfilled,
        (state, action: PayloadAction<ResNewVideo>) => {}
      )
      //! DELETE VIDEO
      .addCase(
        deleleVideo.fulfilled,
        (state, action: PayloadAction<ResNewVideo>) => {}
      );
  },
});

export default myVideos.reducer;
