import React from "react";
import discoverData from "./discover/discoverData";
import DiscoverDetails from "./discover/discoverDetails";
import "./discover/discover.css";

function Discover() {
  return (
    <section className="discover-background">
      <DiscoverDetails discoverData={discoverData} />
    </section>
  );
}

export default Discover;
