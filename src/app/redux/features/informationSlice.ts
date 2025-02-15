import { createSlice } from "@reduxjs/toolkit";

export interface InformationState {
  information: any;
}

const initialState: InformationState = {
  information: {},
};

export const getInformation = () => {
  console.log("Holis");
};

const informationSclice = createSlice({
  name: "information",
  initialState,
  reducers: {},
});

export default informationSclice.reducer;
