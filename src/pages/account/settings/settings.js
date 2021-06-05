import React, { useState } from "react";
import SideBar from "./sidebar";
import AppearancePage from "./subpages/appearance";
import GeneralPage from "./subpages/general";
import NotificationPage from "./subpages/notification";
import WalletPage from "./subpages/wallet";

export default function SettingsPage() {
  const [currentTab, setcurrentTab] = useState("general");
  return (
    <div className="w-full flex flex-nowrap min-h-screen text-center lg:text-left flex flex-wrap w-screen xl:-ml-40 lg:-ml-16 md:-ml-16 sm:-ml-20 -ml-2">
      <div className="lg:block hidden min-w-80">
        <SideBar currentTab={currentTab} onClick={setcurrentTab} />
      </div>
      <div className="w-full">
        {currentTab === "general" ? (
          <GeneralPage />
        ) : currentTab === "wallet" ? (
          <WalletPage />
        ) : currentTab === "notification" ? (
          <NotificationPage />
        ) : (
          <AppearancePage />
        )}
      </div>
    </div>
  );
}
