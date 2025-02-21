import React from "react";
import { Select } from "antd";
import { ActionType, MP4Type } from "@/types/download.type";

const MP4Format: React.FC<{ action: ActionType }> = ({ action }) => {
  const onChange = (value: MP4Type) => {
    action("mp4", value);
  };

  return (
    <div>
      <p>Calidad:</p>
      <Select
        showSearch
        placeholder="Select a quality"
        optionFilterProp="label"
        onChange={onChange}
        options={[
          {
            value: "144p",
            label: "144p",
          },
          {
            value: "360p",
            label: "360p",
          },
          {
            value: "480p",
            label: "480p",
          },
          {
            value: "720p",
            label: "720p",
          },
          {
            value: "1080p",
            label: "1080p",
          },
        ]}
      />
    </div>
  );
};

export default MP4Format;
