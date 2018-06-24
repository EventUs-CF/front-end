import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import * as eventActions from './../../actions/event';
import EventForm from './../event-form/event-form';
import User from '../user/user';
import EventFeed from './../event-feed/event-feed';
import './landing.scss';

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
        <aside className='category-sort'></aside>
        { this.props.user ?
        <div className='main-window'>
          <div className='createEvent' onClick={showModal}> CREATE NEW EVENT
          <Modal className='modal' show={this.state.create} hide={hideModal} type='eventForm'>
            <EventForm
              onComplete={this.props.createEvent}
              hide={hideModal}
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
