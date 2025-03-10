import React from "react";
import { Card } from "antd";

const { Meta } = Card;
export interface DataInputCF {
  idUser: string;
  name: string;
  email: string;
  picture: string;
}

interface CardFollowProps extends DataInputCF {}

const CardFollow: React.FC<CardFollowProps> = ({
  idUser,
  name,
  email,
  picture,
}) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={name} src={picture} />}
    >
      <Meta title={name} description={email} />
    </Card>
  );
};

export default CardFollow;
