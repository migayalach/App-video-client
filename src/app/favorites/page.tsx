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

  return (
    <div>
      <h1>favorites</h1>
      {selectFavorites?.map(({ idLike, video }) => {
        return (
          <div key={idLike}>
            <CardVideo
              idVideo={video.idVideo}
              nameVideo={video.nameVideo}
              image={video.image}
              average={video.average}
            />
          </div>
        );
      })}
    </div>
  );
}

export default page;
