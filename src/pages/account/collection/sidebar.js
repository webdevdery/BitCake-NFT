import { InformationCircleIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { LibraryIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className="w-full h-full min-h-screen text-gray-500 border-r border-gray-300">
      <div className="w-full border-b border-gray-300 p-4 flex items-center space-x-3">
        <MenuAlt1Icon className="w-6 h-6" />
        <div className="text-lg font-medium">My Payouts</div>
      </div>

      <div
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black ${
          props.currentTab === "collections" ? "bg-blue-50" : ""
        }`}
        onClick={() => {
          props.onClick("collections");
        }}
      >
        <LibraryIcon className="w-8 h-8 object-cover" />
        <div className="text-lg font-medium w-48 truncate">My Collections</div>
      </div>

      <a
        href="https://bitcake.freshdesk.com/support/home"
        className={`w-full border-b border-gray-300 p-4 flex items-center space-x-3 cursor-pointer hover:text-black`}
      >
        <InformationCircleIcon className="w-8 h-8 object-cover" />
        <div className="text-lg font-medium w-48 truncate">
          Community & Help
        </div>
      </a>
    </div>
  );
}
