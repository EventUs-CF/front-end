import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/auto-bind';

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

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.event || emptyState;
    autoBind.call(this, ExpenseForm);
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
    // const { expense } = this.props;
    const buttonText = Event ? 'Update Event' : 'Create Event';
    console.log(event, "here's an event object");
    return (
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
          type="date"
          id="date"
          name="when"
          value={this.state.date}
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
          name="start address"
          placeholder="start address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <label>
          Select your Trail:
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
        </label>
        <label>
          Shiggy level:
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
        </label>
        <label>
          How many miles?
        <input
          id="number"
          type="number"
          name="distance"
          value={this.state.distance}
          onChange={this.handleChange}
        />
          miles
        </label>
        <input
          type="hares"
          name="hares"
          placeholder="hares"
          value={this.state.hares}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="currencyField"
          name="hashCash"
          value={this.state.hashCash}
          onChange={this.handleChange}
        />
        <label>
          description
        <textarea
        name="description"
        value={this.state.description}
        />
        </label>
        <label>
          What to bring
          <textarea
            name="what to bring"
            value={this.state.whatToBring}
          />
        </label>
        <label>
          What to expect
          <textarea
            name="what to expect"
            value={this.state.whatToExpect}
          />
        </label>
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
