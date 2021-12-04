import React, { useState } from "react";

// Import features from IS

// Import component
import Hits from "../components/Hits/Hits";

import GMap from "../components/Map/Map";
import { CustomFilters } from "../components/Filters/Filters";
import SearchBox from "../components/SearchBox/SearchBox";
import { CustomCurrentRefinements } from "../components/Filters/CurrentRefinement";

import { Stats } from "react-instantsearch-dom";

const Homepage = () => {
  // REACT STATE
  const [filterAnim, setFilterAnim] = useState(true);
  const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);
  return (
    <div>
      <SearchBox />
      <div className="current-stats">
        <CustomCurrentRefinements />
        <Stats />
      </div>
      <div className="homepage-content">
        <CustomFilters
          filterAnim={filterAnim}
          isDynamicFactesOn={isDynamicFactesOn}
          setIsDynamicFactesOn={setIsDynamicFactesOn}
        />
        <Hits />
      </div>
      <GMap />
    </div>
  );
};

export default Homepage;
