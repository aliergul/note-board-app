import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const NoteCardButtons = ({ setOpen, setType, handleDelete, handleEdit }) => {
  return (
    <div className="flex gap-2">
      <MdDelete
        size={20}
        className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200"
        onClick={() => {
          setType("delete");
          setOpen(true);
          handleDelete();
        }}
      />
      <MdEdit
        size={20}
        className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200"
        onClick={() => {
          setType("edit");
          setOpen(true);
          handleEdit();
        }}
      />
    </div>
  );
};

export default NoteCardButtons;
