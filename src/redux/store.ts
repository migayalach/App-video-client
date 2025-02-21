import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/videoSlice";
import informationReducer from "./features/informationSlice";
import signReducer from "@/redux/features/loginSlice";
import downloadReducer from "@redux/features/downloadSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      downloar: downloadReducer,
      videos: videoReducer,
      sign: signReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
