import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const SnackbarMessage = ({ open, type, message, setSnackbarProps }) => {
  const handleClose = () => {
    setSnackbarProps({
      open: false,
      type: "",
      message: "",
    });
  };
  return (
    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={`${type}`}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMessage;
