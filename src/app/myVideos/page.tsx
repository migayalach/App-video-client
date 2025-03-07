"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getAllList } from "@/redux/features/myVideos.slice";
import CardVideo from "@/components/card/CardVideo";
import FloatVideo from "@/components/floatButton/FloatVideo";

function page() {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector(({ sign }) => sign?.user);
  const myVideos = useAppSelector(({ myVideos }) => myVideos);

  useEffect(() => {
    if (selectUser) {
      dispatch(getAllList(selectUser?.idUser));
    }
  }, []);

  return (
    <div>
      <h1>Hello user, here is your list of videos</h1>
      <div>
        {myVideos?.results.map(({ idVideo, nameVideo, image, average }) => {
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
        })}
      </div>
      <div>
        <FloatVideo />
      </div>
    </div>
  );
}

export default page;
