"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getFavorites } from "@redux/features/favoriteSlice";
import CardVideo from "@/components/card/CardVideo";

function page() {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector(({ sign }) => sign?.user);
  const selectFavorites = useAppSelector(
    ({ favorites }) => favorites?.results
  );

  useEffect(() => {
    if (selectUser) {
      dispatch(getFavorites(selectUser?.idUser));
    }
  }, []);

  return (
    <div>
      <h1>favorites</h1>
      {selectFavorites?.map(
        ({ idVideo, nameVideo, image, average }) => {
          return (
            <div key={idVideo}>
              <CardVideo
                idVideo={idVideo}
                nameVideo={nameVideo}
                image={image}
                average={average}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

export default page;
