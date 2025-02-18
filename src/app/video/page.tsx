"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getVideo } from "../redux/features/videoSlice";
import { RootState } from "../redux/store";
import CardVideo from "@/components/videos/card/CardVideo";

function Page() {
  const dispatch = useAppDispatch();
  const selectVideo = useAppSelector((state: RootState) => state.videos.videos);

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  return (
    <div>
      <CardVideo videos={selectVideo} />
    </div>
  );
}

export default Page;
