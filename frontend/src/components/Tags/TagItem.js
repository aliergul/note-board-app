import React from "react";

const TagItem = ({ item, index }) => {
  return <div key={index}>#{item?.name}</div>;
};

export default TagItem;
