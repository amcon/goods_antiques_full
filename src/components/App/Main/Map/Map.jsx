import React from 'react';
// import MapComponent from './MapComponent/MapComponent.jsx';
import styles from './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapPage extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentLocation: {
  //       lat: lat,
  //       lng: lng
  //     }
  //   }
  // }

  loadMap() {
    if (!this.props.loaded) {
      return (
        <p>Loading...</p>
      )
    } else {
      return (
        <div className="map-container">
          <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          initialCenter={{
            lat: 42.784743,
            lng: -88.414086
          }}
          zoom={15}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          </Map>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="map" id="map">
        <div className="map-info">
          <div className="store-info">
            <h1>Address:</h1>
            <p>3066 Main Street<br/>
            East Troy, WI 53155<br/>
            (262) 642-2277</p>
            <h1>Directions:</h1>
            <a id="google-maps" href="https://www.google.com/maps/place/3066+Main+St,+East+Troy,+WI+53120/@42.7847429,-88.4162751,17z/data=!3m1!4b1!4m5!3m4!1s0x88059411d6629855:0x54cb884f262ca51b!8m2!3d42.7847429!4d-88.4140864" target="_blank">Use Google Maps</a>
            <h1>Store Hours:</h1>
            <p>Mon - Wed: closed<br/>
            Thur - Sat: 10am - 4pm<br/>
            Sunday: 10am - 2pm<br />
            or by appointment</p>
          </div>
          <div id="map-line"></div>
          {this.loadMap()}
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCclpY08qe8sctwyeXiMnSeYFjDKITLnSQ"
})(MapPage)
