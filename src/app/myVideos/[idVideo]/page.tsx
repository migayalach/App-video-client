"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAuditVideo } from "@redux/features/audit.slice";
import Table from "@/components/table/TableData";

function page() {
  const dispatch = useAppDispatch();
  const { idVideo }: { idVideo: string } = useParams();
  const selectUser = useAppSelector(({ sign }) => sign?.user);
  const infoAudit = useAppSelector(({ audit }) => audit);

  useEffect(() => {
    if (selectUser) {
      dispatch(
        getAuditVideo({
          idVideo,
          idUser: selectUser?.idUser,
        })
      );
    }
  }, []);

  return (
    <div>
      <h1>Audit</h1>
      <Table dataAudit={infoAudit?.results} />
    </div>
  );
}

export default page;
