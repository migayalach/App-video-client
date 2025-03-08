import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface AuditVideo {
  idUser: string;
  idVideo: string;
}

const initialState = {
  info: null,
  results: [],
  loading: false,
  error: null,
};

export const getAuditVideo = createAsyncThunk<any, AuditVideo>(
  "audit-Video",
  async ({ idUser, idVideo }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/audit/${idUser}/${idVideo}`,
      {
        method: "GET",
      }
    );
    if (!response) throw new Error("Error");
    return response.json();
  }
);

const audit = createSlice({
  name: "audit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAuditVideo.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.info = action.payload.info;
        state.results = action.payload.results;
      }
    );
  },
});

export default audit.reducer;
