import React from "react";
import { Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Mp4Select: React.FC = () => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select quality"
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      onChange={handleChange}
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
  );
};

export default Mp4Select;
