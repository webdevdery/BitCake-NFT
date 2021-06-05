import {
  BellIcon,
  BriefcaseIcon,
  CogIcon,
  ColorSwatchIcon,
} from "@heroicons/react/solid";
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/auth/selector";

export default function SideBar(props) {
  const user = useSelector(userSelector);
  return (
    <div className="w-full h-full min-h-screen text-gray-500 border-r border-gray-300">
      <div className="w-full border-b border-gray-300 p-4 flex items-center space-x-3">
        <BriefcaseIcon className="w-6 h-6" />
        <div className="text-lg font-medium">My wallet</div>
      </div>
      <div
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black ${
          props.currentTab === "wallet" ? "bg-blue-50" : ""
        }`}
        onClick={() => {
          props.onClick("wallet");
        }}
      >
        <img
          src="https://www.seekpng.com/png/detail/245-2454602_tanni-chand-default-user-image-png.png"
          className="w-8 h-8 object-cover rounded-full"
        />
        <div className="text-lg font-medium w-48 truncate">{user.address}</div>
      </div>
      <div
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black ${
          props.currentTab === "general" ? "bg-blue-50" : ""
        }`}
        onClick={() => {
          props.onClick("general");
        }}
      >
        <CogIcon className="w-6 h-6" />
        <div className="text-lg font-medium">General</div>
      </div>
      <div
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black ${
          props.currentTab === "notification" ? "bg-blue-50" : ""
        }`}
        onClick={() => {
          props.onClick("notification");
        }}
      >
        <BellIcon className="w-6 h-6" />
        <div className="text-lg font-medium">Notification Settings</div>
      </div>
      <div
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black ${
          props.currentTab === "appearance" ? "bg-blue-50" : ""
        }`}
        onClick={() => {
          props.onClick("appearance");
        }}
      >
        <ColorSwatchIcon className="w-6 h-6" />
        <div className="text-lg font-medium">Appearance</div>
      </div>
    </div>
  );
}
