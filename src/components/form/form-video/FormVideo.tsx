import React, { useEffect, useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Switch } from "antd";
import Cloudinary from "@/utils/Cloudinary";
import TextArea from "antd/es/input/TextArea";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { editVideo, postVideo } from "@/redux/features/myVideos.slice";

type FieldType = {
  nameVideo: string;
  description?: string;
  url: string;
  stateVideo?: boolean;
};

interface dataInput {
  option: string;
}

const FormVideo: React.FC<dataInput> = ({ option }) => {
  const dispatch = useAppDispatch();
  const infoUser = useAppSelector(({ sign }) => sign?.user);
  const information = useAppSelector(({ videos }) => videos?.videoDetail);

  const [data, setData] = useState({
    idUser: "",
    nameVideo: "",
    image: "",
    description: "",
    url: "",
    stateVideo: true,
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
      image: URL,
    });
  };

  const onChangeState = (checked: boolean) => {
    setData({
      ...data,
      stateVideo: checked,
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = () => {
    if (infoUser) {
      if (!option) {
        dispatch(postVideo({ ...data, idUser: infoUser?.idUser }));
      } else if (option === "edit" && information) {
        dispatch(editVideo({ data, idVideo: information?.idVideo }));
      }
    }
  };

  useEffect(() => {
    if (option === "edit" && information) {
      setData({
        idUser: information?.idUser,
        nameVideo: information?.nameVideo,
        image: information?.image,
        description: information?.description,
        url: information?.url,
        stateVideo: information?.stateVideo === "true" ? true : false,
      });
    }
  }, [option]);

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
        label="Nane"
        rules={[{ required: true, message: "Please input the name to video!" }]}
      >
        <Input
          name="nameVideo"
          onChange={handleChange}
          value={data.nameVideo}
        />
      </Form.Item>

      <Form.Item label="Image" valuePropName="fileList">
        <Cloudinary onChange={handleURLChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        rules={[
          {
            required: false,
            message: "Please input the description to video!",
          },
        ]}
      >
        <TextArea
          rows={10}
          name="description"
          onChange={handleChange}
          value={data.description}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Url"
        rules={[{ required: true, message: "Please input the url!" }]}
      >
        <Input name="url" onChange={handleChange} value={data.url} />
      </Form.Item>

      {
        <Form.Item<FieldType>
          label="State Video"
          rules={[{ required: true, message: "Please select the state!" }]}
        >
          <Switch
            defaultChecked
            onChange={onChangeState}
            value={data.stateVideo}
          />
        </Form.Item>
      }

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormVideo;
