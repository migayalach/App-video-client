"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getIdVideo,
  clearVideos,
  clearVideoDetail,
} from "@/redux/features/videoSlice";
import Loading from "@/components/loading/Loading";

function Page() {
  const { idVideo }: { idVideo: string } = useParams();
  const dispatch = useAppDispatch();
  const information = useAppSelector(({ videos }) => videos?.videoDetail);

  useEffect(() => {
    if (idVideo) {
      dispatch(getIdVideo(idVideo));
      dispatch(clearVideos());
    }
    return () => {
      dispatch(clearVideoDetail());
    };
  }, [idVideo]);

  if (!information) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{idVideo}</h1>
    </div>
  );
}

export default Page;
