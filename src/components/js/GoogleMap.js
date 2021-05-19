import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import img from "../img/marker.svg";

export class MapContainer extends Component {
  render() {
    const google = window.google;

    const containerStyle = {
      position: "relative",
      width: "200px",
      height: "200px",
      borderRadius: "100%",
      overflow: "hidden",
    };

    const mapStyle = [
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#dceafa",
          },
        ],
      },
    ];

    const _mapLoaded = (mapProps, map) => {
      map.setOptions({
        styles: mapStyle,
      });
    };

    return (
      <Map
        google={this.props.google}
        zoom={8}
        containerStyle={containerStyle}
        initialCenter={{ lat: 52.409538, lng: 16.931992 }}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          position={{ lat: 52.409538, lng: 16.931992 }}
          icon={{
            url: img,
            // anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(36, 50),
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCaNH9_Shco6aynLg-ej7RrL3_zWU6EQQg",
})(MapContainer);
