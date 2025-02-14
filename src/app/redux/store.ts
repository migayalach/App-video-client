import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import productReducer from "./features/productSlice";
import videoReducer from "./features/videoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
      videos: videoReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
