import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import { CardVideoProps } from "@/interfaces/video.interface";
import Link from "next/link";
import {
  EditOutlined,
  DeleteOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { deleleVideo } from "@/redux/features/myVideos.slice";

const { Meta } = Card;

const CardVideo: React.FC<CardVideoProps> = ({
  idVideo,
  nameVideo,
  image,
  average,
  own,
}) => {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector(({ sign }) => sign?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (idVideo: string) => {
    if (selectUser) {
      dispatch(deleleVideo({ idVideo, idUser: selectUser?.idUser }));
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Link href={`/video/${idVideo}`}>
          <Card
            style={{ width: 300 }}
            cover={<img alt={nameVideo} src={image} />}
            actions={[
              <EditOutlined key="edit" />,
              <EditOutlined key="edit" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <Meta title={nameVideo} />
          </Card>
        </Link>
      </div>
      {own && (
        <div>
          <Button type="primary" onClick={showModal}>
            <DeleteOutlined />
          </Button>
          <Button color="cyan" variant="solid">
            <Link href={`/myVideos/${idVideo}`}>
              <FileDoneOutlined />
            </Link>
          </Button>
        </div>
      )}
      {isModalOpen && (
        <Modal
          title="Delete video!"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <p>Are you sure you want to delete this video?</p>
            <Button type="primary" onClick={() => handleDelete(idVideo)}>
              Yes
            </Button>
            <Button type="primary" danger>
              No
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardVideo;
