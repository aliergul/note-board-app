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
        <MdAssignmentLate size={200} color="white" />
      </div>

      <span>{t("no_data_found")}</span>
    </div>
  );
};

export default NoData;
