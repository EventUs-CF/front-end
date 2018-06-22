import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import * as eventActions from './../../actions/event';
import EventForm from './../event-form/event-form';
import User from '../user/user';
import EventFeed from './../event-feed/event-feed';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
    };
  }
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    const hideModal = () => {
      this.setState({ create: false }); 
    };
    const showModal = () => {
      this.setState({ create: true }); 
    };

    return (
      <div className='landing'>
        <h1> Welcome </h1>
        <h2> Thanks for logging in! </h2>
        { this.props.user ?
        <div>
          <div className='createEvent' onDoubleClick={showModal}> CREATE NEW EVENT
          <Modal className='modal' show={this.state.create} hide={hideModal}>
            <EventForm
              onComplete={this.props.createEvent}
              />
          </Modal>
          </div>
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
