import moment from "moment";
import React from "react";
// import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiPushpin2Fill, RiPushpinLine } from "react-icons/ri";

const NoteCard = ({
  title,
  inserttime,
  endtime,
  content,
  tags,
  isPinned,
  handlePinNote,
  handleEdit,
  handleDelete,
  setType,
  setOpen,
}) => {
  //   const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <div className="dashboard-item-header">
          <div className="dashboard-header-content">
            <span>{title}</span>
            {isPinned ? (
              <RiPushpin2Fill size={20} className="pin-button" />
            ) : (
              <RiPushpinLine size={20} className="pin-button" />
            )}
          </div>
          <span>{moment(inserttime * 1000).format("DD/MM/YYYY HH:mm")}</span>
          <span>{moment(endtime * 1000).format("DD/MM/YYYY HH:mm")}</span>
        </div>
        <hr />
        <p>{content}</p>
        <hr />

        <div className="dashboard-item-footer">
          <div className="tags">
            {tags.map((tag, i) => (
              <span key={i}>#{tag}</span>
            ))}
          </div>
          <div className="footer-buttons">
            <MdDelete
              size={20}
              onClick={() => {
                setType("delete");
                setOpen(true);
              }}
            />
            <MdEdit
              size={20}
              onClick={() => {
                setType("edit");
                setOpen(true);
              }}
            />
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default NoteCard;
