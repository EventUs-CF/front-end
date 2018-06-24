import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

const Marker = () => {
  return <img src={marker}/>;
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = this.props || defaultProps;
  }

  componentDidMount() {
    return superagent.get(`  http://maps.googleapis.com/maps/api/geocode/json?address=${this.props.address}`)
      .then((response) => {
        defaultProps.center.lat = response.body.results[0].geometry.location.lat;
        defaultProps.center.lng = response.body.results[0].geometry.location.lng;
      });
  } 

  render() {
    return (
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

AnyReactComponent.propTypes = {
  text: PropTypes.string,
};

SimpleMap.propTypes = {
  address: PropTypes.string,
};

export default SimpleMap;
