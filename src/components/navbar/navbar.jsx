import React from "react";
import SearchBar from "../search_bar/search_bar";

function NavBar() {
  return (
    <nav className="flex items-center justify-between h-10 w-full">
      <div className="ml-10">
        <SearchBar />
      </div>
      <div className="mr-5 flex items-center">
        <i className="mr-3">
          <img src="/images/icons/arrow_down.svg" alt=""/>
        </i>
        <span>Username</span>
      </div>
    </nav>
  );
}

export default NavBar;
