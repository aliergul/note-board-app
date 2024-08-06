import React from "react";
import NoteCardAddEdit from "./NoteCardAddEdit";
import NoteCardDelete from "./NoteCardDelete";

const NoteCardModal = ({ open, setOpen, type }) => {
  return (
    <>
      {open && (
        <>
          {type !== "delete" ? (
            <NoteCardAddEdit open={open} setOpen={setOpen} type={type} />
          ) : (
            <NoteCardDelete open={open} setOpen={setOpen} />
          )}
        </>
      )}
    </>
  );
};

export default NoteCardModal;
