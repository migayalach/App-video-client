"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getFavorites } from "@redux/features/favoriteSlice";
import CardVideo from "@/components/card/CardVideo";

function page() {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector(({ sign }) => sign?.user);
  const selectFavorites = useAppSelector(
    ({ favorites }) => favorites?.favorites
  );

  useEffect(() => {
    if (selectUser) {
      dispatch(getFavorites(selectUser?.idUser));
    }
  }, []);

  // : {idVideo, nameVideo, average}
  // return (
  //   <div key={idVideo}>
  //   <CardVideo
  //     idVideo={idVideo}
  //     nameVideo={nameVideo}
  //     average={average}
  //   />
  // </div>

  // const data = selectFavorites?.map(({ idLike, video }) => {
  //   return {
  //     a: video.
  //   }
  // }
  // );

  return (
    <div>
      <h1>favorites</h1>
      {/* <div>{selectFavorites.map(({ idLike, video }) => )}</div> */}
    </div>
  );
}

export default page;
