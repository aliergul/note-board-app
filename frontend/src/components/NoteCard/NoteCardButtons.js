import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import NoteCardPreview from "./NoteCardPreview";

const NoteCardButtons = ({
  setOpen,
  setType,
  handleDelete,
  handleEdit,
  noteData,
}) => {
  const [previewModal, setPreviewModal] = useState(false);
  return (
    <div className="flex gap-2">
      <div
        style={{ opacity: 0.5, transition: "opacity 0.2s", cursor: "pointer" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
        onClick={() => setPreviewModal(true)}
      >
        <FaRegEye size={20} />
      </div>

      <div
        style={{ opacity: 0.5, transition: "opacity 0.2s", cursor: "pointer" }}
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
      <div
        style={{ opacity: 0.5, transition: "opacity 0.2s", cursor: "pointer" }}
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

      <NoteCardPreview
        open={previewModal}
        setOpen={setPreviewModal}
        noteData={noteData}
      />
    </div>
  );
};

export default NoteCardButtons;
