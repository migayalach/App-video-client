import React from "react";
import { Select, Space } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectOrder: React.FC = () => {
  return (
    <Space wrap>
      <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "", label: "" },
          { value: "ASC", label: "ASC" },
          { value: "DESC", label: "DESC" },
        ]}
      />
    </Space>
  );
};

export default SelectOrder;
