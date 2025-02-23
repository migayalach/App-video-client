import React from "react";
import { Pagination } from "antd";

const Current: React.FC = () => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />;
    </div>
  );
};

export default Current;
