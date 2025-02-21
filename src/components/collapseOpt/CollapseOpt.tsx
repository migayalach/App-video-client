"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import MP4Format from "@/components/mp4/MP4Format";
import MP3Format from "@/components/mp3/MP3Format";
import { CollapseOptProps } from "@/interfaces/download.interface";

const CollapseOpt: React.FC<CollapseOptProps> = ({ action }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Video",
      children: <MP4Format action={action} />,
    },
    {
      key: "2",
      label: "Music",
      children: <MP3Format action={action} />,
    },
  ];

  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default CollapseOpt;
