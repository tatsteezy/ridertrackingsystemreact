import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "../../styles/InteractiveMap.css";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 14.5311, lng: 121.0213 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function InteractiveMap() {
  // "AIzaSyCOW0rwexUSAqaDFHyPNSybph7rbrlriQ8",

  return (
    <>
      <div className="spacer-10" />
      <div className="map_container">
        <div className="map_controls"></div>
        <div className="interactive_map">
          <WrappedMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCOW0rwexUSAqaDFHyPNSybph7rbrlriQ8"
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      </div>
    </>
  );
}

export default InteractiveMap;


