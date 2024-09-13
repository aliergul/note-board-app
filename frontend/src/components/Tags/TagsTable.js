import React from "react";
import { Space, Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
import Column from "antd/es/table/Column";
import moment from "moment";
import TagsButtons from "./TagsButtons";

const TagsTable = ({
  dataSource,
  setSelectedTag,
  setModalType,
  setOpenModal,
}) => {
  const { t } = useTranslation();
  return (
    <Table dataSource={dataSource}>
      <Column
        title={t("tag_table.tag_title")}
        dataIndex="title"
        key="title"
        render={(_, record) => (
          <Space size="large">
            <Tag color={record?.color} style={{ fontSize: 15 }}>
              {record.title}
            </Tag>
          </Space>
        )}
      />
      <Column
        title={t("tag_table.tag_inserttime")}
        dataIndex="inserttime"
        key="inserttime"
        render={(_, record) => (
          <Space size="middle">
            <span>{moment(record?.inserttime).format("DD/MM/YYYY HH:mm")}</span>
          </Space>
        )}
      />
      <Column
        title={t("tag_table.tag_actions")}
        key="actions"
        render={(_, record) => (
          <div className="flex space-x-3">
            <TagsButtons
              setSelectedTag={setSelectedTag}
              setModalType={setModalType}
              setOpenModal={setOpenModal}
              tag={record}
            />
          </div>
        )}
      />
    </Table>
  );
};

export default TagsTable;
