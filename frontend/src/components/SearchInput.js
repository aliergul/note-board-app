import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import noteService from "../services/noteService";

const SearchInput = ({ setNotes, getNotes, setError, setNoData }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const search = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      getNotes();
    }
  }, [searchQuery]); //eslint-disable-line

  return (
    <div className="w-80">
      <Search
        placeholder={t("search_placeholder")}
        loading={loading}
        value={searchQuery}
        onSearch={search}
        onChange={(e) => setSearchQuery(e.target.value)}
        allowClear
        onClear={handleClearSearch}
        size="large"
      />
    </div>
  );
};

export default SearchInput;
