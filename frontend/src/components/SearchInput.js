import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";

const SearchInput = ({ search, getNotes }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      getNotes();
    }
    search({ query: searchQuery });
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    getNotes();
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("search_placeholder")}
        />
        {searchQuery && (
          <button className="clear-button" onClick={handleClearSearch}>
            X
          </button>
        )}
        <button onClick={(e) => handleSubmit(e)}>
          <IoMdSearch size={30} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
