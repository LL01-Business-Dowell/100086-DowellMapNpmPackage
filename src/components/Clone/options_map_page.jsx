import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

function createMapOptions(maps) {
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

export default class SimpleMapPage extends PureComponent {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
      };
      

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };


//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
    <div style={{width:"100%",height:"100%"}}>
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={createMapOptions}>
                        {console.log("rendered")}

        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
      </div>
    );
  }
}


