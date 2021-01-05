import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { compose, withProps } from "recompose";
import "../../styles/InteractiveMap.css";
import * as citiesData from "../../assets/map_data.json";

function Map({ setSelectedCity, selectedCity }) {
  return (
    <GoogleMap
      defaultZoom={selectedCity ? 12 : 10}
      defaultCenter={{
        lat: selectedCity
          ? selectedCity.google_geocode[0].geometry.location.lat
          : 14.5311,
        lng: selectedCity
          ? selectedCity.google_geocode[0].geometry.location.lng
          : 121.0213,
      }}
    >
      {citiesData.data.map((city, index) => (
        <Marker
          key={"city" + index}
          position={{
            lat: city.google_geocode[0].geometry.location.lat,
            lng: city.google_geocode[0].geometry.location.lng,
          }}
          onClick={() => {
            if (city === selectedCity) {
              setSelectedCity(null);
            } else {
              setSelectedCity(city);
            }
          }}
        />
      ))}
    </GoogleMap>
  );
}

// const WrappedMap = withScriptjs(withGoogleMap(Map));

function InteractiveMap() {
  // "AIzaSyCOW0rwexUSAqaDFHyPNSybph7rbrlriQ8",
  const [selectedCity, setSelectedCity] = useState(null);

  const WrappedMap = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCOW0rwexUSAqaDFHyPNSybph7rbrlriQ8",
      loadingElement: <div style={{ height: "100%" }} />,
      containerElement: <div style={{ height: "100%" }} />,
      mapElement: <div style={{ height: "100%" }} />,
      setSelectedCity,
      selectedCity,
    }),
    withScriptjs,
    withGoogleMap
  )(Map);

  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className="spacer-10" />
      <div className="map_container">
        <div className="map_controls">
          {selectedCity ? (
            <>
              <p>Region: {selectedCity.region}</p>
              <p>City Municipality: {selectedCity.city_municipality}</p>
              <p>
                Population: {numberWithCommas(selectedCity.population_2015)}
              </p>
              <p>Land Area: {selectedCity.land_area_sqkm}sqm</p>
              <p>
                Population Density:{" "}
                {numberWithCommas(selectedCity.population_density)}
              </p>
            </>
          ) : (
            <p>Select a Marker</p>
          )}
        </div>
        <div className="interactive_map">
          <WrappedMap isMarkerShown setSelectedCity selectedCity />
        </div>
      </div>
    </>
  );
}

export default InteractiveMap;
