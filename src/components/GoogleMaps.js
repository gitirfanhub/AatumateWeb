import React, { useMemo } from "react";
import styled from "styled-components";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
// import LocationIcon from "../images/pin.png";

const GoogleMapStyleWrapper = styled.div`
  .maps {
    height: 90vh;
  }
`;

const GoogleMaps = () => {
  const center = useMemo(() => ({ lat: 12.6735122, lng: 78.6161546 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB6EYmzCDBVeIetsBgUXxgTlph45wwoG5c"
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMapStyleWrapper>
      <GoogleMap zoom={10} center={center} mapContainerClassName="maps">
        <MarkerF
          position={center}
          // icon={{ url: require(LocationIcon), scale: 7 }}
        />
      </GoogleMap>
    </GoogleMapStyleWrapper>
  );
};

export default GoogleMaps;
