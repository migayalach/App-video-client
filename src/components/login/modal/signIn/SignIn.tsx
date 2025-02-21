import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { signIn } from "@/redux/features/loginSlice";

type FieldType = {
  email?: string;
  password?: string;
};

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    dispatch(signIn(data));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
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

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
