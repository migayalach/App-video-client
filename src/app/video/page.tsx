"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { getVideo } from "../redux/features/videoSlice";
import { RootState } from "../redux/store";

function Page() {
  const dispatch = useAppDispatch();
  const selectVideo = useAppSelector((state: RootState) => state.videos);
  console.log(selectVideo);

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  return (
    <div>
      <h1>Videos</h1>
    </div>
  );
}

export default Page;
