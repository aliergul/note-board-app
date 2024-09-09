import React from "react";
import SearchInput from "./SearchInput";
import Language from "./Language";

const Header = ({
  setNotes,
  getNotes,
  setError,
  setNoData,
  isSearching,
  setIsSearching,
}) => {
  return (
    <div className="flex justify-between mb-3">
      <SearchInput
        setNotes={setNotes}
        getNotes={getNotes}
        setError={setError}
        setNoData={setNoData}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
      <Language />
    </div>
  );
};

export default Header;
