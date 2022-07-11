import React from "react";
import ItemsList from "../../components/items_list/items_list";
import CurrentTopArtist from "./current_top_artist";
import LibraryBox from "./library_box";

function HomePage(props) {
  return (
    <div>
      <div className="flex w-full justify-center h-[28rem] mb-12">
        <CurrentTopArtist className="rounded-[56px] w-[42rem] h-full" />
        <LibraryBox className="rounded-[30px] w-[28rem] h-full ml-7 bg-white bg-opacity-5" />  
      </div>

      <div>
        <ItemsList title="Recently played" />
        <ItemsList title="Made for you" />
        <ItemsList title="New releases" />
      </div>
    </div>
  );
}

export default HomePage;
