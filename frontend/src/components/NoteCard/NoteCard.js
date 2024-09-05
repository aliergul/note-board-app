import moment from "moment";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiPushpin2Fill, RiPushpinLine } from "react-icons/ri";
import TagItem from "../Tags/TagItem";

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
  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <div className="dashboard-item-header">
          <div className="dashboard-header-content">
            <span>{title}</span>
            <div onClick={handlePinNote}>
              {isPinned ? (
                <RiPushpin2Fill size={20} className="pin-button" />
              ) : (
                <RiPushpinLine size={20} className="pin-button" />
              )}
            </div>
          </div>
          <span>{moment(inserttime).format("DD/MM/YYYY HH:mm")}</span>
        </div>
        <hr />
        <p>{content}</p>
        <hr />

        <div className="dashboard-item-footer">
          <div className="tags">
            {tags.map((tag, i) => (
              <div key={i}>
                <TagItem item={tag} index={i} />
              </div>
            ))}
          </div>
          <div className="footer-buttons">
            <MdDelete
              size={20}
              onClick={() => {
                setType("delete");
                setOpen(true);
                handleDelete();
              }}
            />
            <MdEdit
              size={20}
              onClick={() => {
                setType("edit");
                setOpen(true);
                handleEdit();
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
