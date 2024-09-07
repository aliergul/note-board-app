import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const NoteCardButtons = ({ setOpen, setType, handleDelete, handleEdit }) => {
  return (
    <div className="flex gap-2">
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
    </div>
  );
};

export default NoteCardButtons;
