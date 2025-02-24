"use client";
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import CollapseOpt from "@/components/collapseOpt/CollapseOpt";
import { FileType, MP3Type, MP4Type } from "@/types/download.type";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { downloadServer } from "@redux/features/downloadSlice";

function Lower() {
  const dispatch = useAppDispatch();
  const infoVideo = useAppSelector(({ videos }) => videos?.videoDetail);

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

  useEffect(() => {
    if (infoVideo) {
      data.url = infoVideo.url;
    } else {
      data.url = "";
    }
    return () => {
      setData({
        url: "",
        quality: "",
        format: "",
      });
    };
  }, [infoVideo]);

  return (
    <div>
      <div>
        {!infoVideo && (
          <Input
            name="url"
            onChange={handleData}
            style={{ width: "40%" }}
            placeholder="URL"
          />
        )}
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
