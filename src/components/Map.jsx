import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MainMap(){
  const defaultProps = {
    center: {
        lat: -0.17359,
        lon: 34.9189,
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '60vh', width: '50%' }}>
      <GoogleMapReact
        
        bootstrapURLKeys={{ key: "AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
        //   text={"My Marker"}
        />
      </GoogleMapReact>
    </div>
  );
}