import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import Map from '../google-map/google-react';

export default class EventPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    autoBind.call(this, EventPost);
  }
  onClick() {
    this.setState({
      detail: true,
    });
  }
  render() {
    return (
      <div>
        {
          !this.state.detail ? 
          <div className='eventPost' onDoubleClick={this.onClick}>
            <div className="eventHeader"></div>
            <div className='location'>{this.props.event.location}</div>
            <div className='eventTitle'>{this.props.event.title}</div>
          </div> : 
          <div className='eventPost'>
            <button onClick={() => this.setState({ detail: false })}>close</button>
            <div className="eventHeader"></div>
            <div className='eventTitle'>{this.props.event.title}</div>
            <div className='date'>{this.props.event.date}</div>
            <div className='location'>{this.props.event.location}</div>
            {/* add api call for geo location -> lat and Long */}
            <Map/>
            <div className='cost'>{this.props.event.cost}</div>
            <div className='description'>{this.props.event.description}</div>
          </div>
        }
      </div>
    );
  }
}
EventPost.propTypes = {
  event: PropTypes.object,
};
