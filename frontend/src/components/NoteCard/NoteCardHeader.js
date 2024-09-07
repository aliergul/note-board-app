import React from "react";
import { RiPushpin2Fill, RiPushpinLine } from "react-icons/ri";
import moment from "moment";

const NoteCardHeader = ({ title, handlePinNote, isPinned, inserttime }) => {
  return (
    <div className="flex flex-col font-semibold">
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <div onClick={handlePinNote}>
          {isPinned ? (
            <div className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200">
              <RiPushpin2Fill size={20} />
            </div>
          ) : (
            <div className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200">
              <RiPushpinLine size={20} />
            </div>
          )}
        </div>
      </div>
      <span>{moment(inserttime).format("DD/MM/YYYY HH:mm")}</span>
    </div>
  );
};

export default NoteCardHeader;
