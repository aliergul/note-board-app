import React from "react";

const ProfileCard = () => {
  const userName = "test";

  return (
    <div className="profile-container">
      <div className="profile-card">{userName[0].toUpperCase()}</div>
      <div className="profile-info">
        <span>{userName}</span>
        <a href="/login">logout</a>
      </div>
    </div>
  );
};

export default ProfileCard;
