import GoogleMapReact from "google-map-react";
import { ImLocation } from "react-icons/im";
import Marker from "./Marker";

export default function MainMap({centerCords, pins}){

  function createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  }


    const Pins = () => <div style={markerStyles}><ImLocation color="red" size={30}/></div>;


    const defaultProps = {
        center: {
            lat: centerCords.center_lat?centerCords.center_lat:10.23295,
            lng: centerCords.center_lon?centerCords.center_lon:10.28572,
          },
        zoom: 7,
  };
  const getLatandLong = (coord_string) => {
    // const lat_long = useState([]);
    // console.log("coordinates", coord_string.split(" , "));
    return coord_string.split(" , ");
  };
  return (
    <div style={{ height: "50vh", width: "90%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* {pins.map((item) => (
          <div key={item}>
            <Pins
              lat={parseFloat(getLatandLong(item.location_coord)[0])}
              lng={parseFloat(getLatandLong(item.location_coord)[1])}
            />
          </div>
        ))} */}
        <Marker lat={51.4409868} lng={-0.06103330000000001} text={"B"}/>
      </GoogleMapReact>
    </div>
  );
}




