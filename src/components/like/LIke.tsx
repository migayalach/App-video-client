"use client";
import React, { useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import ModalMessage from "../modal/modalMessage/ModalMessage";

function Like() {
  const [flag, setFlag] = useState(false);

  const handleAction = () => {
    setFlag(true);
  };

  const handleActionOff = () => {
    setFlag(false);
  };

  return (
    <div>
      <LikeOutlined onClick={handleAction} />
      {flag && <ModalMessage flag={flag} actionOff={handleActionOff} />}
    </div>
  );
}

export default Like;
