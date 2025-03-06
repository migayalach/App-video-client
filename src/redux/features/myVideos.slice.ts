import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  results: [],
  loading: false,
  error: null,
};

export const getAllList = createAsyncThunk<any, string>(
  "myVideos/getIdUser",
  async (idUser) => {    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/my-videos/${idUser}`
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
    builder.addCase(
      getAllList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.info = action.payload.info;
        state.results = action.payload.results;
      }
    );
  },
});

export default myVideos.reducer;
