import React from "react";
import { Card } from "antd";
import { CardVideoProps } from "@/interfaces/video.interface";
import Link from "next/link";

const { Meta } = Card;

const CardVideo: React.FC<CardVideoProps> = ({
  idVideo,
  nameVideo,
  average,
}) => {
  return (
    <div>
      <Link href={`/video/${idVideo}`}>
        <Card
          hoverable
          style={{ width: 240, marginBottom: 16 }}
          cover={
            <img
              alt={nameVideo}
              src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1727672916/Ballet/qplzcc8imwnxtmwjcdec.jpg"
            />
          }
        >
          <Meta title={nameVideo} />
        </Card>
      </Link>
    </div>
  );
};

export default CardVideo;
