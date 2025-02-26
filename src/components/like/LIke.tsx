"use client";
import React, { useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import ModalMessage from "../modal/modalMessage/ModalMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { postFavorite, deleteFavorite } from "@redux/features/favoriteSlice";

function Like({ like }: { like: string }) {
  const dispatch = useAppDispatch();
  const existInfo = useAppSelector(({ sign }) => sign?.user);
  const videoData = useAppSelector(({ videos }) => videos?.videoDetail);
  const [flag, setFlag] = useState(false);

  const handleAction = () => {
    if (existInfo) {
      dispatch(
        postFavorite({ idUser: existInfo?.idUser, idVideo: videoData?.idVideo })
      );
    } else {
      setFlag(true);
    }
  };

  const handleActionOff = () => {
    setFlag(false);
  };

  return (
    <div>
      <LikeOutlined
        onClick={handleAction}
        style={{
          color: like.length ? "blue" : "black",
        }}
      />
      {flag && <ModalMessage flag={flag} actionOff={handleActionOff} />}
    </div>
  );
}

export default Like;
