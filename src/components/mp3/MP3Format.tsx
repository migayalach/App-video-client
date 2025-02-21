import React from "react";
import { Select } from "antd";
import { ActionType, MP3Type } from "@/types/download.type";

const MP3Format: React.FC<{ action: ActionType }> = ({ action }) => {
  const onChange = (value: MP3Type) => {
    action("mp3", value);
  };

  return (
    <div>
      <p>Quality</p>
      <Select
        showSearch
        placeholder="Select a quality"
        optionFilterProp="label"
        onChange={onChange}
        options={[
          {
            value: "low",
            label: "low",
          },
          {
            value: "high",
            label: "high",
          },
          {
            value: "best",
            label: "best",
          },
        ]}
      />
    </div>
  );
};

export default MP3Format;
