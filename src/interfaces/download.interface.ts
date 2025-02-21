import { ActionType } from "@/types/download.type";
import { CollapseProps } from "antd";

export interface CollapseOptProps extends CollapseProps {
    action: ActionType;
  }