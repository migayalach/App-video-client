"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getIdVideo,
  clearVideos,
  clearVideoDetail,
} from "@/redux/features/videoSlice";
import Loading from "@/components/loading/Loading";
import Multimedia from "@/components/multimedia/Multimedia";
import Like from "@/components/like/LIke";
import Dislike from "@/components/dislike/Dislike";
import Suscription from "@/components/suscription/Suscription";
import ModalDownload from "@/components/modal/modalDownload/ModalDownload";

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
      <Multimedia url={information.url} />
      <Like />
      <Dislike />
      <Suscription />
      <ModalDownload />
      {information.nameVideo}
      {information.dateCreate}
      {information.description}
    </div>
  );
}

export default Page;
