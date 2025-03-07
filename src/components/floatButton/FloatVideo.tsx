"use client";
import React, { useState } from "react";
import { VideoCameraAddOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { FloatButton, Modal } from "antd";
import FormVideo from "../form/form-video/FormVideo";

interface dataInput {
  option: string;
}

const FloatVideo: React.FC<dataInput> = ({ option }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <>
        <FloatButton
          shape="circle"
          type="primary"
          style={{ insetInlineEnd: 94 }}
          icon={<VideoCameraAddOutlined />}
          onClick={showModal}
        />

        <FloatButton
          shape="square"
          type="primary"
          style={{ insetInlineEnd: 24 }}
          icon={<InfoCircleOutlined />}
        />
      </>

      {isModalOpen && (
        <Modal
          title="Add new video"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <FormVideo option={option} />
        </Modal>
      )}
    </div>
  );
};

export default FloatVideo;
