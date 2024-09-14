import React from "react";
import TagsSearch from "./TagsSearch";
import Language from "../Language";

const TagsHeader = ({ setTags, setError, getTags }) => {
  return (
    <div className="flex w-full mb-3">
      <TagsSearch setTags={setTags} setError={setError} getTags={getTags} />
      <Language />
    </div>
  );
};

export default TagsHeader;
