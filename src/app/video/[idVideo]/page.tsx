"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  getIdVideo,
  clearVideos,
  clearVideoDetail,
} from "@redux/features/videoSlice";
import Multimedia from "@/components/videos/multimedia/Multimedia";
import Loading from "@/components/loading/Loading";
import Container from "@/components/videos/conteiner/Container";

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
      <Container
        title={information.nameVideo}
        date={information.dateCreate}
        description={information.description}
      />
      {/* <Multimedia url={information?.url} /> */}
    </div>
  );
}

export default Page;
