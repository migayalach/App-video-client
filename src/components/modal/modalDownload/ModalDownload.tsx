import React, { useState } from "react";
import { Button, Modal } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
import Lower from "@/components/lower/Lower";

const ModalDownload: React.FC = () => {
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
      <Button type="primary" onClick={showModal}>
        <span> Download</span>
        <CloudDownloadOutlined />
      </Button>
      <Modal
        title="Download resource!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Lower />
        </div>
      </Modal>
    </div>
  );
};

export default ModalDownload;
