import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Upload } from "antd";
import Cloudinary from "@/utils/Cloudinary";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  picture?: string;
};

const normFile = (event: any) => {
  if (Array.isArray(event)) {
    return event;
  }
  return event?.fileList;
};

const SignUp: React.FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    picture: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleURLChange = (URL: string) => {
    setData({
      ...data,
      picture: URL,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    console.log("Success:", data);
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input name="email" onChange={handleChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password name="password" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Cloudinary onChange={handleURLChange} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
