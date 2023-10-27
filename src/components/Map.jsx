import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";

export default function MainMap({ centerCords, pins }) {
  const Pins = () => (
    <div>
      <ImLocation color="red" size={30} />
    </div>
  );

  const defaultProps = {
    center: {
      lat: centerCords.center_lat ? centerCords.center_lat : 10.23295,
      lng: centerCords.center_lon ? centerCords.center_lon : 10.28572,
    },
    zoom: 8,
  };
  const getLatandLong = (coord_string) => {
    // const lat_long = useState([]);
    console.log("coordinates", coord_string.split(" , "));
    return coord_string.split(" , ");
  };
  return (
    <div style={{ height: "50vh", width: "90%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {pins.map((item) => (
          <div>
            <Pins
              lat={parseFloat(getLatandLong(item.location_coord)[0])}
              lng={parseFloat(getLatandLong(item.location_coord)[1])}
            />
          </div>
        ))}
        <Pins lat={51.4409868} lng={-0.06103330000000001} />
      </GoogleMapReact>
    </div>
  );
}
