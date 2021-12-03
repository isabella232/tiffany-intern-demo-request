import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

// Import components
import Header from "./components/header/Header";
import Hits from "./components/hits/Hits";
import Map from './components/map/Map'

//CSS / SCSS

import "./assets/scss/index.scss";

const App = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={window.index}>
        <Header />
        <Hits />
        <Map />
      </InstantSearch>
    </div>
  );
};

export default App;
