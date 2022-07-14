import React from "react";
import SearchBar from "../search_bar/search_bar";
import "./navbar.scss"

function NavBar() {
  return (
    <nav className="flex items-center justify-between h-10 w-full">
      <div className="search-bar ml-10">
        <SearchBar />
      </div>
      <div className="user mr-5 flex items-center">
        <i className="mr-3 w-[1em] h-[1em] flex items-center">
          <img src="/images/icons/arrow_down.svg" alt=""/>
        </i>
        <span className="username">Username</span>
        <div className="image rounded-full bg-white w-10 h-10 hidden"></div>
      </div>
    </nav>
  );
}

export default NavBar;
