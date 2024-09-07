import React from "react";
import SearchInput from "./SearchInput";
import Language from "./Language";

const Header = ({ setNotes, getNotes, setError, setNoData }) => {
  return (
    <div className="flex justify-between mb-3">
      <SearchInput
        setNotes={setNotes}
        getNotes={getNotes}
        setError={setError}
        setNoData={setNoData}
      />
      <Language />
    </div>
  );
};

export default Header;
