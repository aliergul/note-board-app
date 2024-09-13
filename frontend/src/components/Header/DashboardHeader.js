import React from "react";
import DashboardSearch from "./DashboardSearch";
import Language from "../Language";

const DashboardHeader = ({
  setNotes,
  getNotes,
  setError,
  setNoData,
  isSearching,
  setIsSearching,
}) => {
  return (
    <div className="flex w-full mb-3">
      <DashboardSearch
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

export default DashboardHeader;
