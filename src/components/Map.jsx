import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";
// import Marker from "./Marker";
import {APIProvider, Map, Marker, useMapsLibrary, useMarkerRef} from '@vis.gl/react-google-maps';
import { useCallback, useState,useEffect } from "react";
import { useGlobalContext } from "../Context/PreviewContext";

export default function MainMap({centerCords, pins}){
    const [markerRef, marker] = useMarkerRef();
    const [clicked, setClicked] = useState(false);

    const defaultProps = {
      center: {
          lat: centerCords?centerCords.center_lat:51.50853,
          lng: centerCords?centerCords.center_lon:-0.12574,
        },
      zoom: 12,
};



  return (
    <div style={{ height: "100%", width: "100%" }}>
     <APIProvider apiKey={"AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ"}>
      
        <Map
         
          zoom={defaultProps.zoom}
          center={defaultProps.center}
          gestureHandling={'greedy'}      
          // disableDefaultUI={true}
        >

          {pins?.map((value,key)=>{
            const cords = value.location_coord.split(" , ");
              return(
                //add animation for the markers
                  <Marker animation={clicked?1:0} onClick={()=>setClicked(!clicked)} ref={markerRef} position={{lat: Number(cords[0]), lng: Number(cords[1])}} />

                  )

            })}
          
        </Map>
    </APIProvider>

    </div>
  );
}




