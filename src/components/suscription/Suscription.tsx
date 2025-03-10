"use client";
import React, { useState, useEffect } from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ModalMessage from "../modal/modalMessage/ModalMessage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addOrDeleteFollow } from "@/redux/features/follow.slice";

function Suscription() {
  const dispatch = useAppDispatch();
  const infoUser = useAppSelector(({ sign }) => sign?.user);
  const information = useAppSelector(({ videos }) => videos?.videoDetail);

  const [flag, setFlag] = useState(false);

  const handleAction = () => {
    if (infoUser && infoUser && information) {
      dispatch(
        addOrDeleteFollow({
          idUser: infoUser.idUser,
          idCreador: information.idUser,
          option: "Adding",
        })
      );
    } else {
      setFlag(true);
    }
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
