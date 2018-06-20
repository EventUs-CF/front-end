import React from 'react';
import PropTypes from 'prop-types';

export default class EventFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= 
    (document.body.offsetHeight - 500) && this.props.eventList.length) {
      // New or different method here? 
      // do we want pagination search? 
      // should call the method to render/draw new items from the array 
      this.props.onPaginatedSearch();
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
};
