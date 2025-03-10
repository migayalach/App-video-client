import React from "react";
import { Form } from "antd";
import SelectOrder from "@/components/select/select-order/SelectOrder";
import {
  clearVideos,
  getVideo,
  searchOrder,
} from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";

const FormFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const saveOption = (info: string | any) => {
    setTimeout(() => {
      if (info !== "") {
        dispatch(clearVideos());
        dispatch(
          searchOrder({
            search: "video",
            data: { key: "nameVideo", order: info },
          })
        );
      } else {
        dispatch(clearVideos());
        dispatch(getVideo());
      }
    }, 2000);
    return;
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item label="Order">
        <SelectOrder action={saveOption} />
      </Form.Item>
    </Form>
  );
};

export default FormFilters;
