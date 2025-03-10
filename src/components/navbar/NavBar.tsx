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
import Sign from "@/components/login/Sign/Sign";
import { useAppSelector } from "@redux/hooks";

type MenuItem = Required<MenuProps>["items"][number];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const userData = useAppSelector(({ sign }) => sign?.user);
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href="/video">Videos</Link>,
      key: "videos",
      icon: <PlayCircleOutlined />,
    },
    {
      label: <Link href="/download">Download</Link>,
      key: "download",
      icon: <DownloadOutlined />,
    },
    ...(!userData
      ? [
          {
            label: <Sign />,
            key: "login",
          },
        ]
      : [
          {
            label: "User",
            key: "SubMenu",
            icon: <SettingOutlined />,
            children: [
              {
                label: <Link href="/myVideos">My videos</Link>,
                key: "setting:1",
              },
              {
                label: <Link href="/favorites">Favorite videos</Link>,
                key: "setting:2",
              },
              {
                label: <Link href="/following">Following</Link>,
                key: "setting:3",
              },
              { label: "Close sesion", key: "setting:4" },
            ],
          },
        ]),
  ];

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
