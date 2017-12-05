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
          scrollwheel={false}
          zoom={17}>

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
        {this.loadMap()}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCclpY08qe8sctwyeXiMnSeYFjDKITLnSQ"
})(MapPage)
