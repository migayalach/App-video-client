"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getIdVideo,
  clearVideos,
  clearVideoDetail,
} from "@/redux/features/videoSlice";
import Loading from "@/components/loading/Loading";
import Multimedia from "@/components/multimedia/Multimedia";
import Like from "@/components/like/LIke";
import Suscription from "@/components/suscription/Suscription";
import ModalDownload from "@/components/modal/modalDownload/ModalDownload";

function Page() {
  const [idLike, setIdLike] = useState("");
  const { idVideo }: { idVideo: string } = useParams();
  const dispatch = useAppDispatch();
  const information = useAppSelector(({ videos }) => videos?.videoDetail);
  const favorite = useAppSelector(({ favorites }) => favorites?.favorites);

  useEffect(() => {
    if (favorite) {
      const objInfo = favorite?.map(({ idLike, video: { idVideo } }) => {
        return { idLike, idVideo };
      });

      for (const index in objInfo) {
        if (objInfo[index]?.idVideo === idVideo) {
          setIdLike(objInfo[index]?.idLike);
        }
      }
    }
  }, [favorite]);

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
      <Like like={idLike} />
      <Suscription />
      <ModalDownload />
      {information.nameVideo}
      {information.dateCreate}
      {information.description}
    </div>
  );
}

export default Page;
