import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center h-7">
      <div className="mr-6 flex items-center">
        <div className="text-lg font-medium flex items-center">
          <i className="mr-3">
            <img src="/images/icons/arrow_down.svg" alt="" />
          </i>
          <span>Artists</span>
        </div>
      </div>
      <input
        className="bg-secondary-dark_lighter text-sm rounded-md pr-3 pl-3 h-full w-[18rem]"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
