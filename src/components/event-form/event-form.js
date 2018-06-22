import React from 'react';
import PropTypes from 'prop-types';
import superagent from 'superagent';
import EventDate from './date-picker';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import autoBind from '../../utils/auto-bind';

import './event-form.scss';

const emptyState = {
  title: '',
  time: '',
  location: '',
  cost: '',
  description: '',
};
const flag = {
  fire: false,
};

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.event || emptyState;
    autoBind.call(this, EventForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.props.hide();
    this.setState(emptyState);
  }

  handleDate(newDate) {
    this.setState({ date: newDate });
  }

  // popMap() {
  //   flag.fire = true;
  //   flag.address = this.state;
  //   return superagent.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${flag.address}`)
  //     .then((response) => {
  //       flag.address.long = response.results.geometry.location.lng;
  //       flag.address.lat = response.results.geometry.location.lat;
  //     });
  // }

  render() {
    return (
      <div className='postForm'>
        <form
          className="event-form"
          onSubmit={this.handleSubmit}

        >
          <h2>Create New Event</h2>
          <div className='title'>
            <aside className='title-aside'>Title</aside>
            <input
              type="text"
              name="title"
              placeholder="event title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className='date'>
            <aside className='date-aside'>Date</aside>
            <EventDate getDate={this.handleDate}/>
          </div>
          <div>
            <aside className='time-aside'>Time</aside>
            <input
              type="time"
              id="time"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />
          </div>
          <div className='location'>
            <aside className='location-aside'>Location</aside>
            <input
              type="text"
              name="location"
              placeholder="event location"
              value={this.state.location}
              onChange={this.handleChange}
              // onBlur={this.popMap}
            />
          </div>
          <div className='cost'>
            <aside className='cost-aside'>Cost</aside>
            <input
              type="text"
              id="currencyField"
              name="cost"
              placeholder="cost"
              value={this.state.cost}
              onChange={this.handleChange}
            />
          </div>
          <div className='description'>
            <aside className='description-aside'>Description</aside>
            <textarea
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" > Create Event </button>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  onComplete: PropTypes.func,
  event: PropTypes.object,
};
