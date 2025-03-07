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
import Like from "@/components/like/Like";
import Suscription from "@/components/suscription/Suscription";
import ModalDownload from "@/components/modal/modalDownload/ModalDownload";
import FloatVideo from "@/components/floatButton/FloatVideo";

function Page() {
  const { idVideo }: { idVideo: string } = useParams();
  const dispatch = useAppDispatch();
  const information = useAppSelector(({ videos }) => videos?.videoDetail);
  const infoUser = useAppSelector(({ sign }) => sign?.user);

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
      <div>
        <Multimedia url={information.url} />
        <Like />
        <Suscription />
        <ModalDownload />
        {information.nameVideo}
        {information.dateCreate}
        {information.description}
      </div>

      <div>{infoUser && <FloatVideo option="edit" />}</div>
    </div>
  );
}

export default Page;
