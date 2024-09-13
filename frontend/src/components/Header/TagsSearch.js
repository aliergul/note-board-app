import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { useTranslation } from "react-i18next";

const TagsSearch = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const search = async () => {
    console.log("tag search");
  };
  useEffect(() => {
    if (searchQuery === "") {
      console.log("get tags");
    }
  }, [searchQuery]); //eslint-disable-line

  return (
    <div className="flex justify-center w-full">
      <div className="w-96">
        <Search
          placeholder={t("tag_search_placeholder")}
          //loading={isSearching}
          value={searchQuery}
          onSearch={search}
          onChange={(e) => setSearchQuery(e.target.value)}
          allowClear
          onClear={handleClearSearch}
          size="large"
        />
      </div>
    </div>
  );
};

export default TagsSearch;
