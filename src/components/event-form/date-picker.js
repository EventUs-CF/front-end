import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class EventDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.handleSubmit();
  }

  handleSubmit() {
    this.props.getDate(this.state);
  }

  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
    />;
  }
}

EventDate.propTypes = {
  getDate: PropTypes.func,
};
