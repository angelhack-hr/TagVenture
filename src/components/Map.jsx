import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let message = "You are not at this location";
let x = 37.787799;
let y = -122.410344;

let radiusHelper = (lon1, lat1, lon2, lat2) => {
  let toRad = (val) => {
    /** Converts numeric degrees to radians */
    return val * Math.PI / 180;
  }

  let R = 6371; // Radius of the earth in km
  let dLat = toRad(lat2-lat1);  // Javascript functions in radians
  let dLon = toRad(lon2-lon1); 
  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c; // Distance in km
  console.log("firing", d);
  return d;
}

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9mTio0Aaz5JWmIVaNqLb6t52DToJWIwg&callback=",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 37.7749, lng: -122.410344 }}
  >
  
  {props.markers.map(marker => (
    
      <Marker
      title={marker.title}
      position={{ lat: marker.latitude, lng: marker.longitude }}
      key={marker.id}
      onClick={props.handleMarkerClick}
    />
  ))}
 
  </GoogleMap>
);

export default class MyMapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true,
      markers: [
      {
        id: 100,
        title:"Galvanize",
        latitude: 37.787799,
        longitude: -122.396595
      },
      {
        id: 200,
        title:"Yerba Buena Gardens",
        latitude: 37.785347,
        longitude: -122.402382
      },
      {
        id: 300,
        title:"Chinatown",
        latitude: 37.795347,
        longitude: -122.412382
      }
      ],
      loading: false,
      userLocation: { lat: 32, lng: 32 },
      present: false

    };
  }

  componentDidMount() {
    //this.delayedShowMarker()
    navigator.geolocation.getCurrentPosition(
      position => {

        const { latitude, longitude } = position.coords;
        this.confirmCheckpoint(longitude, latitude)

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });

       
       
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  // delayedShowMarker() {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true })
  //   }, 3000)
  // }

  confirmCheckpoint(lat2, lng2) {
    let dist = radiusHelper(y, x, lat2, lng2)

    // if(dist < 1.5) {
    //   this.handleMarkerClick = (e) => {
        
    //   }
    // }

  }

  handleMarkerClick (e) {
    console.log(e)
  }


  render() {
    return (
      <MapComponent
        key={99}
        isMarkerShown={this.state.isMarkerShown}
        markers={this.state.markers}
        userLocation={this.state.userLocation} 
        confirmCheckpoint={this.confirmCheckpoint.bind(this)}  
        handleMarkerClick={this.handleMarkerClick.bind(this)}
      />
    )
  }
}




// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={12}
//     defaultCenter={{ lat: 37.787876, lng: -122.4194 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 37.787876, lng: -122.396627 }} />}
//   </GoogleMap>

// <MyMapComponent
//   isMarkerShown
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9mTio0Aaz5JWmIVaNqLb6t52DToJWIwg&callback=initMap"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />


