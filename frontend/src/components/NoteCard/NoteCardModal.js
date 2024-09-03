import React from "react";
import NoteCardAddEdit from "./NoteCardAddEdit";
import NoteCardDelete from "./NoteCardDelete";

const NoteCardModal = ({ open, setOpen, type, noteCard, getNotes }) => {
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
              getNotes={getNotes}
            />
          ) : (
            <NoteCardDelete
              open={open}
              setOpen={setOpen}
              data={noteCard}
              getNotes={getNotes}
            />
          )}
        </>
      )}
    </>
  );
};

export default NoteCardModal;
