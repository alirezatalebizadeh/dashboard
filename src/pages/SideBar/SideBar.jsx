import React from "react";
import "./SideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sider-menu">
          <h3 className="sider-title">Dashboard</h3>
          <ul className="sliderList">
            <Link className="link" to="/">
              <li className="sliderListItem">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link className="link" to="/">
              <li className="sliderListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link className="link" to="/">
              <li className="sliderListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
            
          </ul>
        </div>

        <div className="sider-menu">
          <h3 className="sider-title">Quick Menu</h3>
          <ul className="sliderList">
            <Link className="link" to="/users">
              <li className="sliderListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link className="link" to="/newUser">
              <li className="sliderListItem">
                <StorefrontIcon className="sidebarIcon" />
                New User
              </li>
            </Link>

            <Link className="link" to="/products">
              <li className="sliderListItem">
                <AttachMoneyIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link className="link">
              <li className="sliderListItem">
                <BarChartIcon className="sidebarIcon" />
                Transaction
              </li>
            </Link>

            <Link className="link">
              <li className="sliderListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sider-menu">
          <h3 className="sider-title">Notifications</h3>
          <ul className="sliderList">
            <Link className="link">
              <li className="sliderListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
            </Link>

            <Link className="link">
              <li className="sliderListItem">
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </li>
            </Link>

            <Link className="link">
              <li className="sliderListItem">
                <ChatBubbleIcon className="sidebarIcon" />
                Message
              </li>
            </Link>
          </ul>
        </div>

        <div className="sider-menu">
          <h3 className="sider-title">Staff</h3>
          <ul className="sliderList">
            <Link className="link">
              <li className="sliderListItem">
                <MessageOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
            </Link>

            <Link className="link">
              <li className="sliderListItem">
                <WorkOutlineOutlinedIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link className="link">
              <li className="sliderListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
