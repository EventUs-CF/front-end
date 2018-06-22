import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import superagent from 'superagent';
import marker from '../../assets/map-marker.png';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
const defaultProps = {
  center: {
    lat: null,
    lng: null,
  },
  zoom: 16,
};
const lat = defaultProps.center.lat;
const lng = defaultProps.center.lng;

const GKEY = 'AIzaSyBFWPYRbgVhIdgeh3KYtDbgthf9Rlu6q8o';

const Marker = (props) => {
  return <img src={marker}/>;
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = this.props || defaultProps;
  }

  componentDidMount() {
    return superagent.get(`  http://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}`)
    // return superagent.get(`  http://maps.googleapis.com/maps/api/geocode/json?address=2901 3rd Ave. Suite 300 
    // Seattle, WA 98121 `)
      .then((response) => {
        defaultProps.center.lat = response.body.results[0].geometry.location.lat;
        defaultProps.center.lng = response.body.results[0].geometry.location.lng;
      });
  } 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%', padding: '0%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBFWPYRbgVhIdgeh3KYtDbgthf9Rlu6q8o' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
          />
          <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

 
export default SimpleMap;
