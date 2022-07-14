import React from "react";
import BrowseMusic from "./browse_music";
import "./sidebar.scss";

function SideBar() {
  return (
    <div className="sidebar border-white border-opacity-10 border-r-[1px] h-full">
      <div className="h-10 flex items-center mb-10">
        <h1 className="text-[1.3rem] text-primary-400 font-bold">
          AppName
        </h1>
      </div>
      <BrowseMusic />
      <BrowseMusic />
    </div>
  );
}

export default SideBar;
