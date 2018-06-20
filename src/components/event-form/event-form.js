import React from 'react';
import PropTypes from 'prop-types';
import EventDate from './date-picker';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import autoBind from '../../utils/auto-bind';

const emptyState = {

  title: '',
  titleDirty: false,
  titleError: 'title is required',
  
  date: '',
  dateDirty: false,
  dateError: 'a date is required',
  
  time: '',
  timeDirty: false,
  timeError: 'time is required',
  
  startAddress: '',
  startAddressDirty: false,
  startAddressError: 'a starting address is required',

  hashCash: '',
  hashCashDirty: false,
  hashCashError: 'hash cash is required',

  description: '',
  descriptionDirty: false,
  descriptionError: 'a description is required',
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
      [`${name}Dirty`]: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      titleError, dateError, timeError, startAddressError,
      hashCashError, descriptionError,
    } = this.state;

    if (!titleError && !dateError && !timeError
      && !startAddressError && !hashCashError && !descriptionError) {
      this.props.onComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        titleDirty: true,
        dateDirty: true,
        timeDirty: true,
        startAddressDirty: true,
        hashCashDirty: true,
        descriptionDirty: true,
      });
    }
  }

  // pickedDate(selected) {
  //   this.setState({
  //     date: selected,
  //   });
  // }


  // render() {
  //   return <DatePicker
  //     selected={this.state.startDate}
  //     onChange={this.handleChange}
  //     />;
  // }

  render() {
    return (
      <div>
      <EventDate
      // word={this.pickedDate}
      />
      <form
        className="event-form"
        onSubmit={this.handleSubmit}
      >
        <div>
          <aside>
            <label>Event Title:</label>
          </aside>
        <div>
          <input
            type="text"
            name="title"
            placeholder="event title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        </div>
        <div>
            <aside>
              <label>Event Date:</label>
            </aside>
            <div>

            </div>
        </div>
        <div>
            <aside>
              <label>Event Time:</label>
            </aside>
            <div>
              <input
                type="time"
                id="time"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div>
            <aside>
              <label>Event Address:</label>
            </aside>
            <div>
              <input
                type="text"
                name="start address"
                placeholder="event address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            </div>
          </div>

        <div>
          <aside>
            <label>Hash Cash:</label>
          </aside>
          <div>
            <input
              type="text"
              id="currencyField"
              name="hashCash"
              placeholder="hashCash"
              value={this.state.hashCash}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
          <aside>
            <label>Event Description:</label>
          </aside>
          <div>
            <textarea
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
        </div>
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
