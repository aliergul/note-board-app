import moment from "moment";
import React from "react";
// import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit, MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  handlePinNote,
  handleEdit,
  handleDelete,
}) => {
  //   const { t } = useTranslation();

  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <div className="dashboard-item-header">
          <div className="dashboard-header-content">
            <span>{title}</span>
            <MdOutlinePushPin
              size={20}
              className="pin-button"
              color={`${isPinned ? "#0019F8" : "#131842"}`}
            />
          </div>
          <span>{moment(date * 1000).format("DD/MM/YYYY HH:mm")}</span>
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
            <MdDelete size={20} />
            <MdEdit size={20} />
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default NoteCard;
