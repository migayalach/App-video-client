import Date from "@/components/text/date/Date";
import Description from "@/components/text/description/Description";
import Title from "@/components/text/title/Title";
import React from "react";
import Multimedia from "../multimedia/Multimedia";
import Ranking from "@/components/text/ranking/Ranking";
import Like from "@/components/buttons/like/Like";
import Dislike from "@/components/buttons/dislike/Dislike";
import Download from "@/components/buttons/download/Download";
import Suscription from "@/components/buttons/suscription/Suscription";

function Container({
  url,
  title,
  date,
  description,
  averange,
}: {
  url: string;
  title: string;
  date: string;
  description: string;
  averange: number;
}) {
  return (
    <div>
      <Multimedia url={url} />
      <Title title={title} />
      <Like />
      <Dislike />
      <Download />
      <Suscription />
      <Date date={date} />
      <Description description={description} />
      <Ranking averange={averange} />
    </div>
  );
}

export default Container;
