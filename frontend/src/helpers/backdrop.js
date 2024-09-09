import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const AllPageBackdrop = ({ loading }) => {
  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default AllPageBackdrop;
