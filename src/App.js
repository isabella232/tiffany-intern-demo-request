import React from "react";
import { InstantSearch, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

// Import components
import Map from "./components/map/Map";

//CSS / SCSS

const App = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={window.index}>
        <h1>Coucou</h1>
        <Hits />
        <Map />
      </InstantSearch>
    </div>
  );
};

export default App;
