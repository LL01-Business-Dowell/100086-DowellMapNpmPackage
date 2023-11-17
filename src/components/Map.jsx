import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";
// import Marker from "./Marker";
import {APIProvider, Map, Marker, useMapsLibrary, useMarkerRef} from '@vis.gl/react-google-maps';
import { useCallback, useState } from "react";

export default function MainMap({centerCords, pins}){
    const [markerRef, marker] = useMarkerRef();
    const Circle = useMapsLibrary("Circle");
    // const [Circle,setCircle ] = useState(null);


    const defaultProps = {
        center: {
            lat: centerCords?centerCords.center_lat:51.50853,
            lng: centerCords?centerCords.center_lon:-0.12574,
          },
        zoom: 7,
  };


  return (
    <div style={{ height: "100%", width: "100%" }}>
     <APIProvider apiKey={"AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ"}>
    <Map
      zoom={12}
      center={{lat: centerCords?centerCords.center_lat:51.50853, lng: centerCords?centerCords.center_lon:-0.12574}}
      gestureHandling={'greedy'}
      
      // disableDefaultUI={true}
    >
      {pins?.map((key,value)=>{

        const cords = key.location_coord.split(" , ");
        console.log("coordinates",Number(cords[1]));
        return(
        <Marker ref={markerRef} position={{lat: Number(cords[0]), lng: Number(cords[1])}} />)
      })}
      {/* <Circle /> */}
      {/* <Marker ref={markerRef}  position={{lat: 51.5380341, lng: -0.1023212}}   /> */}
    </Map>
  </APIProvider>

    </div>
  );
}




