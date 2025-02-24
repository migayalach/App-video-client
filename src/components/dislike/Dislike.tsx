"use client";
import React, { useState } from "react";
import { DislikeOutlined } from "@ant-design/icons";
import ModalMessage from "../modal/modalMessage/ModalMessage";

function Dislike() {
  const [flag, setFlag] = useState(false);

  const handleAction = () => {
    setFlag(true);
  };

  const handleActionOff = () => {
    setFlag(false);
  };

  return (
    <div>
      <DislikeOutlined onClick={handleAction} />
      {flag && <ModalMessage flag={flag} actionOff={handleActionOff} />}
    </div>
  );
}

export default Dislike;
