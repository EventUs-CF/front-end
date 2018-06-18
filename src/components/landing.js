import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h1> Welcome </h1>
        <h2> Thanks for logging in! </h2>
      </div>
    );
  }
}

Dashboard.propTypes = {
  doCreatePicture: PropTypes.func,
};

// every property inside this object will become props.
const mapDispatchToProps = dispatch => ({
  doCreatePicture: picture => dispatch(clientPicturesActions.createRequest(picture)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
