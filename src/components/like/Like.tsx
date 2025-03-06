"use client";
import React, { useEffect, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import ModalMessage from "../modal/modalMessage/ModalMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  postFavorite,
  deleteFavorite,
  getFavorites,
  clearMessageFavorite,
} from "@redux/features/favoriteSlice";

function Like() {
  const dispatch = useAppDispatch();
  const existInfo = useAppSelector(({ sign }) => sign?.user);
  const videoData = useAppSelector(({ videos }) => videos?.videoDetail);
  const [flag, setFlag] = useState(false);
  const [flagLike, setFlagLike] = useState(false);

  const handleAction = () => {
    if (existInfo) {
      if (videoData?.usersLike.includes(existInfo?.idUser)) {
        dispatch(
          deleteFavorite({
            idUser: existInfo?.idUser,
            idVideo: videoData?.idVideo,
          })
        );
        setFlagLike(false);
      } else {
        dispatch(
          postFavorite({
            idUser: existInfo?.idUser,
            idVideo: videoData?.idVideo,
          })
        );
        setFlagLike(true);
      }
      dispatch(getFavorites(existInfo?.idUser));
    }
  };

  const handleActionOff = () => {
    setFlag(false);
  };

  useEffect(() => {
    if (videoData && existInfo) {
      if (videoData.usersLike.includes(existInfo?.idUser)) {
        setFlagLike(true);
      }
    }
  }, [videoData]);

  return (
    <div>
      <LikeOutlined
        onClick={handleAction}
        style={{
          color: flagLike ? "blue" : "black",
        }}
      />
      {flag && <ModalMessage flag={flag} actionOff={handleActionOff} />}
    </div>
  );
}

export default Like;
