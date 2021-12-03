import React from "react";

import { SearchBox } from "react-instantsearch-dom";

const SearchBoxComponent = () => {
  return (
    <div>
      <SearchBox
        translations={{
          placeholder: "Search SKU,Shop here...",
        }}
      />
    </div>
  );
};

export default SearchBoxComponent;
