import { Response } from "@/interfaces/response.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  results: [],
  message: "",
  loading: false,
  error: null,
};

export const getAllFollowing = createAsyncThunk<Response, string>(
  "get-all-list",
  async (idUser) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/follow/${idUser}`
    );
    if (!response) throw new Error("Error");
    return response.json();
  }
);

export const addOrDeleteFollow = createAsyncThunk<any, any>(
  "action-follow",
  async (data) => {
    console.log(data);
    
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/follow`,
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

const folloing = createSlice({
  name: "following",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // !GET ALL MY FOLLOWERS
      .addCase(
        getAllFollowing.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.info = action.payload.info;
          state.results = action.payload.results;
        }
      )

      // !ADD OR DELETE NEW FOLLOWER
      .addCase(
        addOrDeleteFollow.fulfilled,
        (state, action: PayloadAction<any>) => {}
      );
  },
});

export default folloing.reducer;
