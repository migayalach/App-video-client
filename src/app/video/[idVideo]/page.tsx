"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  getIdVideo,
  clearVideos,
  clearVideoDetail,
} from "@redux/features/videoSlice";
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
        url={information.url}
        title={information.nameVideo}
        date={information.dateCreate}
        description={information.description}
        averange={information.average}
      />
    </div>
  );
}

export default Page;
