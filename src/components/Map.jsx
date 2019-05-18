import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9mTio0Aaz5JWmIVaNqLb6t52DToJWIwg&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 37.787876, lng: -122.396627 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

export default class MyMapComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isMarkerShown: false};
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick() {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
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


