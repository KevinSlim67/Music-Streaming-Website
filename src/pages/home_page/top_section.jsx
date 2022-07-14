import React from "react";
import CurrentTopArtist from "./current_top_artist";
import LibraryBox from "./library_box";

function TopSection() {
  return (
    <div className="top-section flex w-full h-[28rem] object-contain justify-center mb-12">
      <CurrentTopArtist className="current-top-artist rounded-[56px] w-[42rem] max-w-[42rem] h-full" />
      <LibraryBox className="library-box rounded-[30px] w-[28rem] max-w-[28rem] h-full ml-7 bg-white bg-opacity-5" />
    </div>
  );
}

export default TopSection;
