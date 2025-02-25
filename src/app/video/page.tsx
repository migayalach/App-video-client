"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { getVideo } from "../../redux/features/videoSlice";
import { RootState } from "../../redux/store";
import CardVideo from "@/components/card/CardVideo";
import Filters from "@/components/filters/Filters";

function Page() {
  const dispatch = useAppDispatch();
  const selectVideo = useAppSelector((state: RootState) => state.videos.videos);

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  return (
    <div>
      <div>
        <Filters />
      </div>

      <div>
        {selectVideo.map(({ idVideo, nameVideo, average }) => {
          return (
            <div key={idVideo}>
              <CardVideo
                idVideo={idVideo}
                nameVideo={nameVideo}
                average={average}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;

// https://www.robertwalters.es/ittelecomunicaciones/ofertas-empleo/softwaredevelopment/1810853-net-engineer-junior-sector-ind%c3%bastria.html
