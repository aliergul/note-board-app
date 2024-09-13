import React from "react";
import NoteCardTagItem from "./NoteCardTagItem";

const NoteCardTags = ({ tags }) => {
  return (
    <div className="flex gap-2 text-sm">
      {tags.map((tag, i) => (
        <div key={i}>
          <NoteCardTagItem item={tag} index={i} />
        </div>
      ))}
    </div>
  );
};

export default NoteCardTags;
