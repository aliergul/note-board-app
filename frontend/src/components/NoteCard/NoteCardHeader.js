import React from "react";
import { RiPushpin2Fill, RiPushpinLine } from "react-icons/ri";
import moment from "moment";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const NoteCardHeader = ({ title, handlePinNote, isPinned, inserttime }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col font-semibold">
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <Tooltip title={isPinned ? t("tooltips.unpin") : t("tooltips.pin")}>
          <div onClick={handlePinNote}>
            {isPinned ? (
              <div
                style={{
                  opacity: 0.5,
                  transition: "opacity 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
              >
                <RiPushpin2Fill size={20} />
              </div>
            ) : (
              <div
                style={{
                  opacity: 0.5,
                  transition: "opacity 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
              >
                <RiPushpinLine size={20} />
              </div>
            )}
          </div>
        </Tooltip>
      </div>
      <span>{moment(inserttime).format("DD/MM/YYYY HH:mm")}</span>
    </div>
  );
};

export default NoteCardHeader;
