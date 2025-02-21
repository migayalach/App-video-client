"use client";
import React, { useState } from "react";
import { Input, Button } from "antd";
import CollapseOpt from "@/components/collapseOpt/CollapseOpt";
import { FileType, MP3Type, MP4Type } from "@/types/download.type";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/redux/hooks";
import { downloadServer } from "@redux/features/downloadSlice";

function Lower() {
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    url: "",
    quality: "",
    format: "",
  });

  const handleData = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const changeInfo = (name: FileType, value: MP3Type | MP4Type) => {
    setData({
      ...data,
      format: name,
      quality: value,
    });
  };

  const handleDownload = () => {
    dispatch(downloadServer(data));
  };

  return (
    <div>
      <div>
        <Input
          name="url"
          onChange={handleData}
          style={{ width: "40%" }}
          placeholder="URL"
        />
        <CollapseOpt action={changeInfo} />
      </div>
      <div>
        <Button color="purple" variant="solid" onClick={handleDownload}>
          <CloudDownloadOutlined />
        </Button>
      </div>
    </div>
  );
}

export default Lower;
