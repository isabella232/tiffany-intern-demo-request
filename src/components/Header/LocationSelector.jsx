import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';


const ShopSelector = ({items, refine, searchForItems, setIsShopLocatorOpen, isShopLocatorOpen}) => {
    console.log(items)
    return ( 
        <div className={`shopLocator ${isShopLocatorOpen && "shopLocator__active"}`}>
            <h2>Shop Locator</h2>
            <input
            className="shopLocator__input"
            type="search"
            placeholder="Search for your shop..."
            onChange={event => searchForItems(event.currentTarget.value)}
        />
        <ul className="shopLocator__list">
        {items.map(item => {
            return (
                <li onClick={()=> {
                    refine(item.label)
                }} key={item.label}>
                    {item.label}
                </li>
            )
        })}
        </ul>

        </div>
     );
}

const LocationSelector = connectRefinementList(ShopSelector);
 
export default LocationSelector;