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

  const handleNavigate = (to) => {
    navigate(to);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <ProfileCard userData={userData} />
        <div className="flex flex-col gap-3 mt-10">
          <SidebarItems
            handleNavigate={() => handleNavigate("/dashboard")}
            title={t("pages.notes")}
          />
          <SidebarItems
            handleNavigate={() => handleNavigate("/tags")}
            title={t("pages.tags")}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 gap-4">
        <SidebarItems title={t("logout")} onClick={() => handleLogOut()} />
        <SocialMedia />
      </div>
    </>
  );
};

export default Sidebar;
