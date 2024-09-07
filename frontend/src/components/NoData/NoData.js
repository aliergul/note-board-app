import React from "react";
import { useTranslation } from "react-i18next";
import { MdAssignmentLate } from "react-icons/md";

const NoData = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 200,
        padding: 5,
        color: "white",
      }}
    >
      <div>
        <MdAssignmentLate size={200} color="#8EACCD" />
      </div>
      <span className="text-color4">{t("no_data_found")}</span>
    </div>
  );
};

export default NoData;
