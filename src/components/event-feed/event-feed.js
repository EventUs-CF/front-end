import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventPost from '../event/event';
import * as eventActions from '../../actions/event';
import './event-feed.scss';

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
      // New or different method here? 
      // do we want pagination search? 
      // should call the method to render/draw new items from the array 

      // this is not a function in our program 
      // this.props.onPaginatedSearch();


      // Here we need ot make a call to state fro all events
      // store result from above  [] => eventList []
      // result [[{},{},{}]] @ [0] this.setState({ eventList = result[0] })
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
