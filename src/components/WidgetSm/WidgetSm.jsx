import React from "react";
import "./WidgetSm.css";
import { newMembers } from "./../../datas";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <>
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {newMembers.map((user) => (
            <li key={user.id} className="widgetSmListItem">
              <img src={user.img} className="widgetSmImg" alt="" />

              <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.name}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
              </div>

              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
