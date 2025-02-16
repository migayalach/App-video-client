"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getVideo } from "../redux/features/videoSlice";
import { RootState } from "../redux/store";
import CardVideo from "@/components/videos/card/CardVideo";

function Page() {
  const dispatch = useAppDispatch();
  const selectVideo = useAppSelector((state: RootState) => state.videos);

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      <CardVideo />
    </div>
  );
}

export default Page;
