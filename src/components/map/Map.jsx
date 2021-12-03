import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { connectHits } from 'react-instantsearch-dom';


const Markers = ( {text, stock} ) => (
    <div className="markers">
        <div className="stock"><span>{stock}</span></div>
        <img
            src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/map-marker-icon.png"
            style={{ height: '50px', width: '50px' }}
        />
    </div>
);


const Map = () => {
    const [allHits, setAllHits] = useState(null)
    const mapStyles = {
        width: '100%',
        height: '100%',
        position: 'relative'
    };

    const defaultProps = {
        zoom: 11,
        center: {
            lat: 40.7128,
            lng: -74.006
        }
    };
    
    const getHits = async () => {
        let {hits} = await useSelector(state => state.hits) 
        return hits
        }
        getHits().then(hits => {
            setAllHits(hits)
        })

    return (
        
        <div
            className="google-map"
            style={{
                width: '100%',
                height: '100vh'
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_API_KEY
                }}
                style={mapStyles}
                center={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            {allHits && (
               allHits.map(hit => (
                    <Markers
                    // stock={hit.sku_physicalShops_stock}
                    lat={hit._geoloc.lat}
                    lng={hit._geoloc.lng}
                    text={'Kreyser Avrora'}
                    stock={hit.sku_physicalShops_stock}
                    />
               ))
           )}    
            </GoogleMapReact>
        </div>
    );
}


export default Map