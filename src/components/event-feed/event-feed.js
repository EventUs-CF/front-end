import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

export default class EventFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    // console.log(this.props.event);
    // this.setState({ eventList: this.props.events });
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
    return ( // expand/contract functionality???
      <div className="eventfeed">
        { !this.state.events ? 
          <div>
            {
              this.props.events.map((item) => {
                return <div className="eventfeed-row" key={item._id}>
                <p>{item.title} proof of concept</p>
                {/* <p>expand contract placeholder</p> */}
                </div>;
              })
            }
          </div> : 
          <div>
            {
              this.state.events.map((item) => {
                return <div className="eventfeed-row" key={item._id}>
                <p>{item.title} proof of concept</p>
                {/* <p>expand contract placeholder</p> */}
                </div>;
              })
            }
          </div>
        }
      </div>
    );
  }
}

EventFeed.propTypes = {
  eventList: PropTypes.array,
  onPaginatedSearch: PropTypes.func,
  events: PropTypes.array,
};

// const mapStateTopProps = state => ({
//   event: state.event,
// });

// export default connect(mapStateTopProps, null)(EventFeed);
