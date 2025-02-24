"use client";
import React, { useState } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ModalMessage from "../modal/modalMessage/ModalMessage";

function Suscription() {
  const [flag, setFlag] = useState(false);

  const handleAction = () => {
    setFlag(true);
  };

  const handleActionOff = () => {
    setFlag(false);
  };

  return (
    <div>
      <Button color="danger" variant="solid" onClick={handleAction}>
        Follow <AppstoreAddOutlined />
      </Button>
      {flag && <ModalMessage flag={flag} actionOff={handleActionOff} />}
    </div>
  );
}

export default Suscription;
