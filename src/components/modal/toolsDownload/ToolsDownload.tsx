import React, { useState } from "react";
import { Button, Modal } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
import CollapseOpt from "@/components/videos/collapseOpt/CollapseOpt";

interface ToolsDownloadProps {
  open: boolean;
}

const ToolsDownload: React.FC = () => {
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
    <>
      <CloudDownloadOutlined onClick={showModal} />
      <Modal
        title="Download"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CollapseOpt />
      </Modal>
    </>
  );
};

export default ToolsDownload;
