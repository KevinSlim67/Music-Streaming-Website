import React from "react";
import ItemsList from "../../components/items_list/items_list";
import PremiumSubscription from "./premium_subscription";
import TopSection from "./top_section";
import TrendingAlbums from "./trending_albums";

function HomePage(props) {
  return (
    <div>
      <TopSection />

      <div>
        <ItemsList title="Recently played" className="mb-12"/>
        <ItemsList title="Made for you" className="mb-12" />
        <PremiumSubscription className="mb-12 rounded-[56px]" />
        <ItemsList title="New releases" className="mb-12" />
        <TrendingAlbums className="mb-12" />
      </div>
    </div>
  );
}

export default HomePage;
