import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InformationState {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

const initialState: InformationState = {
  info: { count: 0, pages: 0, next: null, prev: null },
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setInformation: (
      state,
      action: PayloadAction<InformationState["info"]>
    ) => {
      state.info = action.payload;
    },
    clearInformation: (state) => {
      state.info = { count: 0, pages: 0, next: null, prev: null };
    },
  },
});

export const { setInformation, clearInformation } = informationSlice.actions;
export default informationSlice.reducer;
