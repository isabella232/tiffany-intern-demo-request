import React from "react";
// UNIQBY LIB
import uniqBy from 'lodash.uniqby';


// Algolia import
import { connectCurrentRefinements } from "react-instantsearch-dom";

const CurrentRefinements = ({ items, refine }) => {
  const unique = uniqBy(items, "currentRefinement");
  return (
    <ul className="refinement-content">
      {unique.map((item) => {
        console.log(item)
        return (
          <li className="refinement-item" key={item.label}>
            {item.items ? (
              <React.Fragment>
                {/* <h3>{item.label}</h3> */}
                <ul className="refinement-results">
                  {item.items.map((nested) => {
                    return (
                      <li key={nested.label}>
                        <a
                          className="refinement-filter"
                          href="#"
                          onClick={(event) => {
                            event.preventDefault();
                            refine(nested.value);
                          }}
                        >
                          {nested.label.includes(">")
                            ? nested.label.split(">")[1]
                            : nested.label}
                          {/* {nested.label.includes("//")
                            ? nested.label.split("//")[1]
                            : nested.label} */}
                          <span
                            onClick={() => {
                              refine(item.value);
                            }}
                          >
                            X
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            ) : (
              <>
                <a
                  className="refinement-filter"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  {item.attribute === "storeNameShopNumberV2" ? (
                    <p>{item.currentRefinement.split("//")[1]}</p>
                  ) : (
                    <p>{item.currentRefinement}</p>
                  )}
                  <span
                    className="close-refinment"
                    onClick={() => {
                      refine(item.value);
                    }}
                  >
                    X
                  </span>
                </a>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export { CustomCurrentRefinements };
