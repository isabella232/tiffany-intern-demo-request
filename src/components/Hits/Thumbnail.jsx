import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom'

const StateResults = ({ searchResults }) => {
  console.log(searchResults)

  if (
    searchResults &&
    searchResults.userData &&
    searchResults.hits &&
    searchResults.hits[0]
  )
    return (
      <div className="thumbnails">
        {searchResults.userData.map(({ type }) => {
          if (!type) return <></>

          const hit = searchResults.hits[0]

          // If is a sku
          if (type == 'sku') {
            return (
              <div key={type}>
                <img hidden={!hit.fullImage} src={hit.fullImage} alt="" />

                <div className="align-vertically">
                  <p>{hit.ProductTypeDescription}</p>

                  <h2>{hit.LocalName || hit.Title}</h2>
                </div>
              </div>
            )
          }

          // If is a store
          if (type == 'store') {
            return (
              <div key={type}>
                <img
                  hidden={!hit.StorePhoto}
                  src={`https://www.tiffany.com/shared/images${hit.StorePhoto}`}
                  alt=""
                />

                <div className="align-vertically">
                  <h2>
                    {hit.Country}, {hit.City}
                  </h2>

                  <p>
                    {[hit.Address1, hit.Address2, hit.Address3]
                      // Ignore null values
                      .filter((value) => value)
                      .join(' — ')}
                  </p>
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  else return <></>
}

export default connectStateResults(StateResults)
