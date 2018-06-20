import React from 'react';
import PropTypes from 'prop-types';
import EventDate from './date-picker';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import autoBind from '../../utils/auto-bind';

const emptyState = {
  title: '',
  time: '',
  location: '',
  cost: '',
  description: '',
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
    this.setState(emptyState);
  }

  handleDate(date) {
    this.setState(date);
  }

  render() {
    return (
      <div>
        <EventDate getDate={this.handleDate}/>
        <form
          className="event-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="title"
            placeholder="event title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="time"
            id="time"
            name="time"
            value={this.state.time}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="event location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="currencyField"
            name="cost"
            placeholder="cost"
            value={this.state.cost}
            onChange={this.handleChange}
          />
          <textarea
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button type="submit"> Create Event </button>
        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  onComplete: PropTypes.func,
  event: PropTypes.object,
};
