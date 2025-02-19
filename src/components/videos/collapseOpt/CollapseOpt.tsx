import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import MP4Format from "../formats/mp4/MP4Format";
import MP3Format from "../formats/mp3/MP3Format";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Video",
    children: <MP4Format/>,
  },
  {
    key: "2",
    label: "Music",
    children: <MP3Format/>,
  },
];

const CollapseOpt: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default CollapseOpt;
