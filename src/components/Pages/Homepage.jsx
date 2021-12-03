import React from "react";

// Import features from IS
import { Configure } from "react-instantsearch-dom";

// Import component
import Hits from "../../components/Hits/Hits";
import Map from "../../components/map/Map";
import SearchBox from "../SearchBox/SearchBox";

const Homepage = () => {
  return (
    <div>
      <SearchBox />
      <Hits />
      <Map />
    </div>
  );
};

export default Homepage;
