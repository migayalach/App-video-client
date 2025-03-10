import React from "react";
import { Table } from "antd";

type Action = "Create" | "Update" | "Delete";

interface DataInput {
  _id: string;
  idVideo: string;
  action: Action;
  timeChanges: string;
  changes?: Array<string>;
  timeOnly: string;
}

const TableData: React.FC<any> = ({ dataAudit }) => {
  const columns = [
    {
      title: "N°",
      dataIndex: "numberItem",
      key: "numberItem",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Date",
      dataIndex: "timeChanges",
      key: "timeChanges",
    },
    {
      title: "Hour",
      dataIndex: "timeOnly",
      key: "timeOnly",
    },
    {
      title: "Changes",
      dataIndex: "changes",
      key: "changes",
      render: (data: object) => {
        if (data) {
          return "Changes";
        } else {
          return "Nothing changes";
        }
      },
    },
  ];

  const dataMap = (data: DataInput[]) => {
    return data?.map(({ action, timeChanges, changes, timeOnly }, index) => ({
      key: index,
      numberItem: index + 1,
      action,
      timeChanges: timeChanges.slice(0, 10),
      timeOnly,
      changes,
    }));
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataMap(dataAudit)}
        pagination={false}
      />
    </div>
  );
};

export default TableData;
