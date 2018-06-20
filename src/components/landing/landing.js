import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from './../../actions/event';
import EventForm from './../event-form/event-form';
import User from '../user/user';
import EventFeed from './../event-feed/event-feed';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h1> Welcome </h1>
        <h2> Thanks for logging in! </h2>
        { this.props.user ?
        <div> 
          <EventForm
            onComplete={this.props.createEvent}
          />
          {/* <EventFeed/>  */}
        </div> :
          <User/>
        }
      </div>
    );
  }
}

Landing.propTypes = {
  createEvent: PropTypes.func,
  user: PropTypes.object,
};

const mapStateTopProps = state => ({
  event: state.event,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(eventActions.createRequest(event)),

});

export default connect(mapStateTopProps, mapDispatchToProps)(Landing);
