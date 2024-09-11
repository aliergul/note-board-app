import React from "react";

const ProfileCard = ({ userData }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg border border-black-600 p-6 text-center">
      <div className="h-16 w-16 bg-color4 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
        {userData?.fullName?.[0].toUpperCase()}
      </div>

      <div className="mt-4">
        <div className="text-xl font-semibold text-gray-900">
          {userData?.fullName}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
