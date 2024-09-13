import { Tooltip } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "react-icons/md";

const TagsButtons = ({ setSelectedTag, setModalType, setOpenModal, tag }) => {
  const { t } = useTranslation();

  return (
    <>
      <Tooltip title={t("tooltips.tag_edit")}>
        <div
          style={{
            opacity: 0.5,
            transition: "opacity 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
        >
          <MdEdit
            size={20}
            onClick={() => {
              setSelectedTag(tag);
              setModalType("edit");
              setOpenModal(true);
            }}
          />
        </div>
      </Tooltip>

      <Tooltip title={t("tooltips.tag_delete")}>
        <div
          style={{
            opacity: 0.5,
            transition: "opacity 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
        >
          <MdDelete
            size={20}
            onClick={() => {
              setSelectedTag(tag);
              setModalType("delete");
              setOpenModal(true);
            }}
          />
        </div>
      </Tooltip>
    </>
  );
};

export default TagsButtons;
