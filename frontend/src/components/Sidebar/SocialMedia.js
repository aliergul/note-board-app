import React from "react";
import { FiTwitter, FiGithub, FiYoutube, FiInstagram } from "react-icons/fi";

import SocialMediaItems from "./SocialMediaItems";

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <SocialMediaItems
        tooltip="Github"
        to="https://github.com/aliergul"
        icon={<FiGithub size={20} color="black" />}
      />
      <SocialMediaItems
        to="https://www.instagram.com"
        icon={<FiInstagram size={20} color="black" />}
        tooltip="Instagram"
      />
      <SocialMediaItems
        tooltip="X (Twitter)"
        to="https://www.x.com"
        icon={<FiTwitter size={20} color="black" />}
      />
      <SocialMediaItems
        tooltip="YouTube"
        to="https://youtube.com/channel/UC-YkIUaQDOH49TirkScFXug?si=3K8UORPB_x_uP7jl"
        icon={<FiYoutube size={20} color="black" />}
      />
    </div>
  );
};

export default SocialMedia;
