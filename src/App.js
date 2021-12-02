import React from "react";
import { InstantSearch, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

//CSS / SCSS

const App = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={window.index}>
        <h1>Coucou</h1>
        <Hits />
      </InstantSearch>
    </div>
  );
};

export default App;
