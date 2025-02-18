import React from "react";
import { Card } from "antd";
import { CardVideoProps } from "@/interfaces/video.interface";
import Link from "next/link";

const { Meta } = Card;

const CardVideo: React.FC<CardVideoProps> = ({ videos }) => {
  return (
    <div>
      {videos?.map(({ idVideo, nameVideo, url, average }) => (
        <Link key={idVideo} href={`/video/${idVideo}`}>
          <Card
            hoverable
            style={{ width: 240, marginBottom: 16 }}
            cover={
              <img
                alt={nameVideo}
                src="https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/235870188_4251140108307134_4442336178437690477_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0CoSosrJNKgQ7kNvgG5-Zld&_nc_oc=AdhnVqRb96MxEKqUvzyqbc2i5YvCNcHZ3RjmTcR251nCRhKmU7mmjntPXzWHaDOcvH8&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=AO7hT3lhR6sBOoDS0v8cUKR&oh=00_AYAhU32uEje-SX4ooofVV7B2buCe7o6XIYRa7dw1xNB2tQ&oe=67B75CA8"
              />
            }
          >
            <Meta title={nameVideo} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardVideo;
