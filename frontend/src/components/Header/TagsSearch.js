import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { useTranslation } from "react-i18next";
import tagService from "../../services/tagService";

const TagsSearch = ({ setTags, getTags, setError }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const search = async () => {
    try {
      const searchData = await tagService.searchTags({ query: searchQuery });
      setTags(searchData.tags);
      if (searchData.tags?.length < 1) {
        //setNoData(true);
      } else {
        //setNoData(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      //setIsSearching(false);
    }
  };
  useEffect(() => {
    if (searchQuery === "") {
      getTags();
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
