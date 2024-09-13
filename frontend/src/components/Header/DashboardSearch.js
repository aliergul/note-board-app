import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import noteService from "../../services/noteService";

const DashboardSearch = ({
  setNotes,
  getNotes,
  setError,
  setNoData,
  isSearching,
  setIsSearching,
}) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const search = async () => {
    setIsSearching(true);
    try {
      const searchData = await noteService.searchNotes({ query: searchQuery });
      setNotes(searchData.notes);
      if (searchData.notes?.length < 1) {
        setNoData(true);
      } else {
        setNoData(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      getNotes();
    }
  }, [searchQuery]); //eslint-disable-line

  return (
    <div className="flex justify-center w-full">
      <div className="w-96">
        <Search
          placeholder={t("note_search_placeholder")}
          loading={isSearching}
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

export default DashboardSearch;
