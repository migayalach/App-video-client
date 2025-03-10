import React from "react";
import { Select, Space } from "antd";

interface inputData {
  action: Function;
}

const SelectOrder: React.FC<inputData> = ({ action }) => {
  const handleChange = (value: string) => {
    action(value);
  };

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
