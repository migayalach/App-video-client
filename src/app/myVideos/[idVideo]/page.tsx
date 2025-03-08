"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAuditVideo } from "@redux/features/audit.slice";

function page() {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector(({ sign }) => sign?.user);

  // useEffect(() => {
  //     if (selectUser && videoInfo) {
  //       dispatch(
  //         getAuditVideo({
  //           idVideo: videoInfo?.idVideo,
  //           idUser: selectUser?.idUser,
  //         })
  //       );
  //     }
  //   }, []);

  return (
    <div>
      <h1>Audit</h1>
    </div>
  );
}

export default page;
