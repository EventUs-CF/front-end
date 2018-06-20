import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class EventDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      // onBlur={() => this.props.word(this.state.startDate)}
    />;
  }
}

EventDate.propTypes = {
  word: PropTypes.func,
};
