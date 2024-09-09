import React from "react";

const SidebarItems = ({ to, title, onClick }) => {
  return (
    <a
      href={`${to}`}
      onClick={onClick && onClick}
      className="no-underline transition-all h-10 w-36 flex gap-x-4 items-center justify-center text-sm font-semibold rounded hover:text-color3 px-4 bg-color4"
    >
      <span>{title}</span>
    </a>
  );
};

export default SidebarItems;
