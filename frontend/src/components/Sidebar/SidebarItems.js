import { Button } from "antd";
import React from "react";

const SidebarItems = ({ handleNavigate, title, onClick }) => {
  return (
    <Button className="w-40" onClick={onClick ? onClick : handleNavigate}>
      {title}
    </Button>
  );
};

export default SidebarItems;
