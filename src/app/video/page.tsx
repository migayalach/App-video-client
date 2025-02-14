"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../redux/features/videoSlice";
import { RootState } from "../redux/store";

function Page() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo() as any);
  }, []);

  return (
    <div>
      <h1>Videos</h1>
    </div>
  );
}

export default Page;
