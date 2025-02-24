import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import SignIn from "@/components/login/signIn/SignIn";
import SignUp from "@/components/login/signUp/SignUp";
import { ModalMessageProps } from "@/interfaces/modalMessage.interface";

const ModalMessage: React.FC<ModalMessageProps> = ({ flag, actionOff }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sign, setSign] = useState("in");

  const changeSign = () => {
    if (sign === "in") setSign("up");
    else if (sign === "up") setSign("in");
  };

  const handleOk = () => {
    actionOff();
  };

  const handleCancel = () => {
    actionOff();
  };

  useEffect(() => {
    if (flag) {
      setIsModalOpen(true);
    }
    return () => {
      setIsModalOpen(false);
      () => actionOff();
    };
  }, [flag]);

  return (
    <>
      {isModalOpen && (
        <Modal
          title="Please log in!"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {sign === "in" ? <SignIn /> : <SignUp />}
          <Button color="danger" variant="link" onClick={changeSign}>
            {sign === "in"
              ? "Don't have an account?"
              : "Log in with my account."}
          </Button>
        </Modal>
      )}
    </>
  );
};

export default ModalMessage;
