import React from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const FloatVideo: React.FC = () => {
  return (
    <div>
      <>
        <FloatButton
          shape="circle"
          type="primary"
          style={{ insetInlineEnd: 94 }}
          icon={<CustomerServiceOutlined />}
        />
        <FloatButton
          shape="square"
          type="primary"
          style={{ insetInlineEnd: 24 }}
          icon={<CustomerServiceOutlined />}
        />
      </>
    </div>
  );
};

export default FloatVideo;
