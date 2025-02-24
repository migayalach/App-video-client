import React, { useState } from "react";
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SignIn from "@/components/login/signIn/SignIn";
import SignUp from "@/components/login/signUp/SignUp";

const Sign: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sign, setSign] = useState("in");

  const changeSign = () => {
    if (sign === "in") setSign("up");
    else if (sign === "up") setSign("in");
  };

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
      <Button
        type="text"
        onClick={showModal}
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <UserOutlined />
      </Button>

      <Modal
        title="Hello, welcome to my page."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {sign === "in" ? <SignIn /> : <SignUp />}
        <Button color="danger" variant="link" onClick={changeSign}>
          {sign === "in" ? "Don't have an account?" : "Log in with my account."}
        </Button>
      </Modal>
    </>
  );
};

export default Sign;
