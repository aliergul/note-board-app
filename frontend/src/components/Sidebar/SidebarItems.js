import { Button } from "antd";
import React from "react";

const SidebarItems = ({ handleNavigate, title }) => {
  return (
    <Button className="w-40" onClick={handleNavigate}>
      {title}
    </Button>
  );
};

export default SidebarItems;
