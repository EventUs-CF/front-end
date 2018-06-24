import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventPost from '../event/event';
import * as eventActions from '../../actions/event';

class EventFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= 
    (document.body.offsetHeight - 500) && this.props.events.length) {
      console.log('fired');
    }
  }

  render() {
    return ( 
      <div className='eventfeed'>
        <div>
          {
            this.props.events.map((item) => {
              return <div className="eventfeed-row" key={item._id}>
                <EventPost event={item}/>
              </div>;
            })
          }
        </div>
      </div>
    );
  }
}

EventFeed.propTypes = {
  eventList: PropTypes.array,
  onPaginatedSearch: PropTypes.func,
  loadEvents: PropTypes.func,
  events: PropTypes.array,
};

const mapStateTopProps = state => ({
  event: state.event,
});

const mapDispatchToProps = dispatch => ({
  loadEvents: () => dispatch(eventActions.fetchRequest()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(EventFeed);
