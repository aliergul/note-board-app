import { Divider } from "antd";
import React from "react";

const ModalTitleDivider = ({ title }) => {
  return (
    <Divider
      variant="dotted"
      style={{
        borderColor: "#000000",
      }}
    >
      {title}
    </Divider>
  );
};

export default ModalTitleDivider;
