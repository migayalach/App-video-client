"use client";
import React, { useState } from "react";
import {
  HomeOutlined,
  PlayCircleOutlined,
  DownloadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import Sign from "@/components/login/modal/Sign/Sign";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/video">"Videos"</Link>,
    key: "videos",
    icon: <PlayCircleOutlined />,
  },
  {
    label: <Link href="/download">Download</Link>,
    key: "download",
    icon: <DownloadOutlined />,
  },
  {
    label: <Sign />,
    key: "login",
  },
  {
    label: "User",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "My profile",
        children: [
          { label: "My videos", key: "setting:1" },
          { label: "Favorite videos", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Options",
        children: [{ label: "Close sesion", key: "setting:3" }],
      },
    ],
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;
