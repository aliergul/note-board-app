import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 justify-center">
        <ProfileCard />
        <a
          href="/dashboard"
          className="mt-8 no-underline transition-all h-10 w-36 flex gap-x-4 items-center justify-center text-sm font-semibold rounded hover:text-palette_light px-4 bg-white"
        >
          <span>{t("pages.notes")}</span>
        </a>
        <a
          href="/tags"
          className="no-underline transition-all h-10 w-36 flex gap-x-4 items-center justify-center text-sm font-semibold rounded hover:text-palette_light px-4 bg-white"
        >
          <span>{t("pages.tags")}</span>
        </a>
      </div>
      <div className="flex justify-center mt-2">
        <a
          href="/login"
          onClick={handleLogOut}
          className="no-underline transition-all h-10 flex items-center text-sm font-semibold rounded hover:text-red-500 px-4 bg-white"
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default Sidebar;
