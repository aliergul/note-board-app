import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import { textColor } from "../../../helpers/colorFunctions";

const NoteCardTags = ({ tags }) => {
  const allTags = JSON.parse(localStorage.getItem("tags"));
  const [noteTags, setNoteTags] = useState([]);

  useEffect(() => {
    if (allTags && tags) {
      const matchingTags = allTags
        .filter((tag) => tags.includes(tag._id))
        .map((tag) => ({ title: tag.title, color: tag.color }));

      setNoteTags(matchingTags);
    }
  }, [tags]); // eslint-disable-line
  return (
    <>
      {noteTags.map((tag, i) => (
        <div key={i} className="m-1">
          <Tag
            color={tag?.color}
            style={{ fontSize: 15, color: textColor(tag?.color) }}
          >
            {tag?.title}
          </Tag>
        </div>
      ))}
    </>
  );
};

export default NoteCardTags;
