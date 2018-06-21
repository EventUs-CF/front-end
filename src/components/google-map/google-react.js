import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = defaultProps;
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBFWPYRbgVhIdgeh3KYtDbgthf9Rlu6q8o' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text={'somewhere'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
