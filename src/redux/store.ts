import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/videoSlice";
import signReducer from "@/redux/features/loginSlice";
import downloadReducer from "@redux/features/downloadSlice";
import favoriteReducer from "@redux/features/favoriteSlice";
import myVideosReducer from "@/redux/features/myVideos.slice";
import auditReducer from "@redux/features/audit.slice";
import followReducer from "@redux/features/follow.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      downloar: downloadReducer,
      sign: signReducer,
      videos: videoReducer,
      favorites: favoriteReducer,
      myVideos: myVideosReducer,
      audit: auditReducer,
      follow: followReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
