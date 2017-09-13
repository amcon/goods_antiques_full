import React from 'react';
import styles from './Map.css';

const MapPage = () => (
  <div className="map">
    <div className="map-info">
      <div className="store-info">
        <h1>Address:</h1>
        <p>3066 Main Street<br/>
        East Troy, WI 53155<br/>
        (262) 642-2277</p>
        <h1>Directions:</h1>
        <button id="google-maps">Use Google Maps</button>
        <h1>Store Hours:</h1>
        <p>Mon: 10am-4pm<br/>
        Tues & Wed: closed<br/>
        Thur - Sun: 10am-4pm<br/>
        or by appointment</p>
      </div>
      <div id="map-line"></div>
      <div id="map">MAP</div>
    </div>
  </div>
)

export default MapPage;
