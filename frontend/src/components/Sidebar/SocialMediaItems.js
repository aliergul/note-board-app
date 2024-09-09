import { Tooltip } from "antd";
import React from "react";

const SocialMediaItems = ({ to, icon, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <a
        href={`${to}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        style={{
          opacity: 0.6,
          transition: "opacity 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
      >
        {icon}
      </a>
    </Tooltip>
  );
};

export default SocialMediaItems;
