import React, { useState } from "react";
import TagsAddEdit from "./TagsAddEdit";
import TagsDelete from "./TagsDelete";
import SnackbarMessage from "../../helpers/snackbar";

const TagsModal = ({ open, setOpen, type, tag, getTags }) => {
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
            <TagsAddEdit
              open={open}
              setOpen={setOpen}
              type={type}
              data={tag}
              getTags={getTags}
              setSnackbarProps={setSnackbarProps}
            />
          ) : (
            <TagsDelete
              open={open}
              setOpen={setOpen}
              data={tag}
              getTags={getTags}
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

export default TagsModal;
