import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface DownloadInterface {
  results: "" | "Download successfully.";
  loading: boolean;
  error: string | null;
}

const initialState: DownloadInterface = {
  results: "",
  loading: false,
  error: null,
};

interface InterfaceResource {
  url: string;
  quality: string;
  format: string;
}

export const downloadServer = createAsyncThunk<
  DownloadInterface,
  Partial<InterfaceResource>
>("download", async (information, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<DownloadInterface>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/download?url=${information.url}&quality=${information.quality}&format=${information.format}`,
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

const downloadSlice = createSlice({
  name: "download",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      downloadServer.fulfilled,
      (state, action: PayloadAction<DownloadInterface>) => {
        state.results = action.payload.results;
      }
    );
  },
});

export default downloadSlice.reducer;
