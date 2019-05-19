import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let message = "You are not at this location";

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
      onClick={props.onMarkerClick}
    />
  ))}
 {props.isMarkerShown && <Marker position={props.userLocation} />}
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
      userLocation: { lat: 32, lng: 32 }

    };
  }

  componentDidMount() {
    //this.delayedShowMarker()
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        
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

  handleMarkerClick() {
    console.log('ping')
    alert(message)
    this.setState({ isMarkerShown: false })
    //this.delayedShowMarker()
  }

  isAtCheckpoint() {

  }

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        markers={this.state.markers}
        userLocation={this.state.userLocation}
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


