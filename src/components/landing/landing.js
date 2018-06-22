import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as eventActions from './../../actions/event';
import EventForm from './../event-form/event-form';
import User from '../user/user';
import EventFeed from './../event-feed/event-feed';
import './landing.scss';

class Landing extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    return (
      <div className='landing'>
        <aside className='category-sort'>placeholder</aside>
        { this.props.user ?
        <div className='main-window'>
          <EventForm
            onComplete={this.props.createEvent}
          />
          <EventFeed events={this.props.event}/>
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
  event: PropTypes.array,
  loadEvents: PropTypes.func,
  loadEventsToState: PropTypes.func,
};

const mapStateTopProps = state => ({
  event: state.event,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loadEventsToState: events => dispatch(eventActions.eventCreate(events)),
  createEvent: event => dispatch(eventActions.createRequest(event)),
  loadEvents: () => dispatch(eventActions.fetchRequest()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Landing);
