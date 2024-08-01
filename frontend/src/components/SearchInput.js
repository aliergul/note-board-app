import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    console.log("test search: ", search);
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("search_placeholder")}
        />
        <button type="submit">
          <IoMdSearch size={30} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
