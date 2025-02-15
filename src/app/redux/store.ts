import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/videoSlice";
import informationReducer from "./features/informationSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      information: informationReducer,
      videos: videoReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
