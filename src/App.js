import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

// Import components
import Header from "./components/Header/Header";
import Homepage from "./components/Pages/Homepage";
import Footer from './components/Footer/Footer'

//CSS / SCSS

import "./assets/scss/index.scss";

const App = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={window.index}>
        <Header />
        <Homepage/>
        <Footer/>
      </InstantSearch>
    </div>
  );
};

export default App;
