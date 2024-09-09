import React, { useState } from "react";
import NoteCardAddEdit from "./NoteCardAddEdit";
import NoteCardDelete from "./NoteCardDelete";
import SnackbarMessage from "../../helpers/snackbar";

const NoteCardModal = ({ open, setOpen, type, noteCard, getNotes }) => {
  const [snackbarProps, setSnackbarProps] = useState({
    open: false,
    type: "",
    message: "",
  });

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
              setSnackbarProps={setSnackbarProps}
            />
          ) : (
            <NoteCardDelete
              open={open}
              setOpen={setOpen}
              data={noteCard}
              getNotes={getNotes}
              setSnackbarProps={setSnackbarProps}
            />
          )}
        </>
      )}
      <SnackbarMessage
        open={snackbarProps?.open}
        setSnackbarProps={setSnackbarProps}
        type={snackbarProps?.type}
        message={snackbarProps?.message}
      />
    </>
  );
};

export default NoteCardModal;
