import React from "react";
import TagsSearch from "./TagsSearch";
import Language from "../Language";

const TagsHeader = () => {
  return (
    <div className="flex w-full mb-3">
      <TagsSearch />
      <Language />
    </div>
  );
};

export default TagsHeader;
