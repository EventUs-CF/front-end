import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EventFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.setState({ eventList: this.props.event[0] });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= 
    // this.props.eventList.length SHOULD come from UI state
    (document.body.offsetHeight - 500) && this.props.eventList.length) {
      // New or different method here? 
      // do we want pagination search? 
      // should call the method to render/draw new items from the array 

      // this is not a function in our program 
      this.props.onPaginatedSearch();


      // Here we need ot make a call to state fro all events
      // store result from above  [] => eventList []
      // result [[{},{},{}]] @ [0] this.setState({ eventList = result[0] })
    }
  }

  render() {
    return ( // expand/contract functionality???
      <div className="eventfeed">
        {this.props.eventList.map((item) => {
          return <div className="eventfeed-row" key={item._id}>
          <p>{item.title} proof of concept</p>
          <p>expand contract placeholder</p>
          </div>;
        })
        }
      </div>
    );
  }
}

EventFeed.propTypes = {
  eventList: PropTypes.array,
  onPaginatedSearch: PropTypes.func,
  event: PropTypes.array,
};

const mapStateTopProps = state => ({
  event: state.event,
});

export default connect(mapStateTopProps, null)(EventFeed);
