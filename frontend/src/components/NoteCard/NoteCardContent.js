import React from "react";
import truncate from "../../helpers/truncateString";

const NoteCardContent = ({ content }) => {
  return <div>{truncate(content)}</div>;
};

export default NoteCardContent;
