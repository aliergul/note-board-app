import React from "react";
import { useTranslation } from "react-i18next";
import { MdAssignmentAdd } from "react-icons/md";

const EmptyCard = () => {
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
        <MdAssignmentAdd size={200} color="white" />
      </div>

      <span>{t("empty_dashboard")}</span>
    </div>
  );
};

export default EmptyCard;
