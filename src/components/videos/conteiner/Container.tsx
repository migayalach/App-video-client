import Date from "@/components/text/date/Date";
import Description from "@/components/text/description/Description";
import Title from "@/components/text/title/Title";
import React from "react";

function Container({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div>
      video
      <div>
        <Title title={title} />
        <Date date={date} />
      </div>
      <Description description={description} />
      averange
    </div>
  );
}

export default Container;
