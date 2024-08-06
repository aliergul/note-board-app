import React from "react";
import NoteCardAddEdit from "./NoteCardAddEdit";
import NoteCardDelete from "./NoteCardDelete";

const NoteCardModal = ({ open, setOpen, type, noteCard }) => {
  return (
    <>
      {open && (
        <>
          {type !== "delete" ? (
            <NoteCardAddEdit
              open={open}
              setOpen={setOpen}
              type={type}
              data={noteCard}
            />
          ) : (
            <NoteCardDelete open={open} setOpen={setOpen} data={noteCard} />
          )}
        </>
      )}
    </>
  );
};

export default NoteCardModal;
