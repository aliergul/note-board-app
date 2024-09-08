import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import NoteCardPreview from "./NoteCardPreview";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const NoteCardButtons = ({
  setOpen,
  setType,
  handleDelete,
  handleEdit,
  noteData,
}) => {
  const { t } = useTranslation();
  const [previewModal, setPreviewModal] = useState(false);
  return (
    <div className="flex gap-2">
      <Tooltip title={t("tooltips.preview")}>
        <div
          style={{
            opacity: 0.5,
            transition: "opacity 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
          onClick={() => setPreviewModal(true)}
        >
          <FaRegEye size={20} />
        </div>
      </Tooltip>

      <Tooltip title={t("tooltips.delete")}>
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
              setType("delete");
              setOpen(true);
              handleDelete();
            }}
          />
        </div>
      </Tooltip>

      <Tooltip title={t("tooltips.edit")}>
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
              setType("edit");
              setOpen(true);
              handleEdit();
            }}
          />
        </div>
      </Tooltip>

      <NoteCardPreview
        open={previewModal}
        setOpen={setPreviewModal}
        noteData={noteData}
      />
    </div>
  );
};

export default NoteCardButtons;
