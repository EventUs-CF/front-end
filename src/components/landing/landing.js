import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from './../../actions/event';
import EventForm from './../event-form/event-form';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h1> Welcome </h1>
        <h2> Thanks for logging in! </h2>
        <EventForm
        onComplete={this.props.createEvent}/>
      </div>
    );
  }
}

Landing.propTypes = {
  createEvent: PropTypes.func,
};

const mapStateTopProps = state => ({
  event: state.event,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(eventActions.createRequest(event)),

});

export default connect(mapStateTopProps, mapDispatchToProps)(Landing);
