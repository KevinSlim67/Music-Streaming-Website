import React from "react";
import ItemsList from "../../components/items_list/items_list";
import CurrentTopArtist from "./current_top_artist";
import LibraryBox from "./library_box";
import PremiumSubscription from "./premium_subscription";

function HomePage(props) {
  return (
    <div>
      <div className="flex w-full justify-center h-[28rem] mb-12">
        <CurrentTopArtist className="rounded-[56px] w-[42rem] h-full" />
        <LibraryBox className="rounded-[30px] w-[28rem] h-full ml-7 bg-white bg-opacity-5" />  
      </div>

      <div>
        <ItemsList title="Recently played" className="mb-12"/>
        <ItemsList title="Made for you" className="mb-12" />
        <PremiumSubscription className="mb-12 rounded-[56px]" />
        <ItemsList title="New releases" className="mb-12" />
      </div>
    </div>
  );
}

export default HomePage;
