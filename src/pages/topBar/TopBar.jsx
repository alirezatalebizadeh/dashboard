import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">dashboard</span>
        </div>

        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topBarIconContainer">
            <SettingsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <img src="./images/person.png" className="topAvatar" alt=""/>
        </div>
      </div>
    </div>
  );
}
