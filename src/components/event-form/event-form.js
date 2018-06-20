import React from 'react';
import PropTypes from 'prop-types';
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
  
  trail: '',
  trailDirty: false,
  trailError: 'trail is required',
  
  shiggy: '',
  shiggyDirty: false,
  shiggyError: 'shiggy is required',
  
  distance: '',
  distanceDirty: false,
  distanceError: 'distance is required',

  hares: '',
  haresDirty: false,
  haresError: 'hares are required',

  hashCash: '',
  hashCashDirty: false,
  hashCashError: 'hash cash is required',

  description: '',
  descriptionDirty: false,
  descriptionError: 'a description is required',

  whatToBring: '',
  whatToBringDirty: false,
  whatToBringError: 'what to bring is required',

  whatToExpect: '',
  whatToExpectDirty: false,
  whatToExpectError: 'what to expect is required',
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
      trailError, shiggyError, distanceError, haresError,
      hashCashError, descriptionError, whatToBringError,
      whatToExpectError,
    } = this.state;

    if (!titleError && !dateError && !timeError
      && !startAddressError && !trailError
      && !startAddressError && !shiggyError
      && !distanceError && !haresError
      && !hashCashError && !descriptionError
      && !whatToBringError && !whatToExpectError) {
      this.props.onComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        titleDirty: true,
        dateDirty: true,
        timeDirty: true,
        startAddressDirty: true,
        trailDirty: true,
        shiggyDirty: true,
        distanceDirty: true,
        haresDirty: true,
        hashCashDirty: true,
        descriptionDirty: true,
        whatToBringDirty: true,
        whatToExpectDirty: true,
      });
    }
  }

  render() {
    return (
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
              <input
                type="grid"
                />
              <datepicker
                type="grid"
                value={this.state.date}
                onChange={this.handleChange}
              />
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
            <label>Event Trail:</label>
          </aside>
          <div>
            <select
              name="trail"
              value={this.state.trail}
              onChange={this.handleChange}>
              <option
                value="A-A">A-A</option>
              <option
                value="A-A~">A-A~</option>
              <option
                value="A-B">A-B</option>
            </select>
          </div>
        </div>

        <div>
          <aside>
            <label>Event Shiggy:</label>
          </aside>
          <div>
            <select
              name="shiggy"
              value={this.state.shiggy}
              onChange={this.handleChange}>
              <option
                value="0">0</option>
              <option
                value="1">1</option>
              <option
                value="2">2</option>
              <option
                value="3">3</option>
              <option
                value="4">4</option>
              <option
                value="5">5</option>
            </select>
          </div>
        </div>

        <div>
          <aside>
            <label>Event Distance:</label>
          </aside>
          <div>
            <input
              id="number"
              type="number"
              name="distance"
              placeholder="distance"
              value={this.state.distance}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
          <aside>
            <label>Event Hares:</label>
          </aside>
          <div>
            <input
              type="number"
              name="hares"
              placeholder="hares"
              value={this.state.hares}
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
              value={this.state.handleChange}
            />
          </div>
        </div>

        <div>
          <aside>
            <label>What to bring:</label>
          </aside>
          <div>
            <textarea
              name="what to bring"
              placeholder="what to bring"
              value={this.state.handleChange}
            />
          </div>
        </div>

        <div>
          <aside>
            <label>What to expect:</label>
          </aside>
          <div>
            <textarea
              name="what to expect"
              placeholder="what to expect"
              value={this.state.handleChange}
            />
          </div>
        </div>
        <button type="submit"> Create Event </button>
      </form>
    );
  }
}

EventForm.propTypes = {
  onComplete: PropTypes.func,
  event: PropTypes.object,
};
