import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ userData }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="profile-container">
      <div className="profile-card">
        {userData && userData?.fullName?.[0].toUpperCase()}
      </div>
      <div className="profile-info">
        <span>{userData && userData?.fullName}</span>
        <a href="/login" onClick={handleLogOut}>
          logout
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
