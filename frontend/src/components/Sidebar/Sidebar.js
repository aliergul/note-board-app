import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { useTranslation } from "react-i18next";
import SidebarItems from "./SidebarItems";
import SocialMedia from "./SocialMedia";

const Sidebar = ({ userData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ProfileCard userData={userData} />
        <div className="flex flex-col gap-3 mt-10">
          <SidebarItems to="/dashboard" title={t("pages.notes")} />
          <SidebarItems to="/tags" title={t("pages.tags")} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 gap-4">
        <SidebarItems to="/login" title={t("logout")} onClick={handleLogOut} />
        <SocialMedia />
      </div>
    </>
  );
};

export default Sidebar;
