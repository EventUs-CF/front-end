import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import Modal from '../modal/index';
import Map from '../google-map/google-react';
import './event.scss';

export default class EventPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false,
    };
    autoBind.call(this, EventPost);
  }
  render() {
    const hideModal = () => {
      this.setState({ detail: false }); 
    };
    const showModal = (event) => {
      event.preventDefault();
      this.setState({ detail: true }); 
    };
    return (
      <div>
          <div className='eventPost' onClick={showModal}>
            <aside>6:30 PM</aside>
            <div className='eventInfo'>
              <div className="eventHeader"></div>
              <div className='location'>{this.props.event.location}</div>
              <div className='eventTitle'>{this.props.event.title}</div>
            </div>
          </div>  

          <Modal className='modal' show={this.state.detail} hide={hideModal}>
            <div>
            <div className='modalDate'>Friday, June 22, 2018</div>

              {/* <div className='modalDate'>{this.props.event.date}</div> */}
              <div className='modalTitle'><b>{this.props.event.title}</b></div>
              <p>Are You Going?</p>
              <button className='confirm'>confirm</button>
              <button className='deny'>deny</button>
              <hr/>
              <div className='info'>
                {/* <div className='modalDate'>{this.props.event.date}</div> */}
                <div className='date2'>Friday, June 22, 2018</div>

                {/* <div className='time'>{this.props.event.time}</div> */}
                <div className='time'>1:00 PM</div>

                <div className='modalLocation'>{this.props.event.location}</div>
                <div className='modalCost'>$ {this.props.event.cost}</div>
              </div>
              <Map address={this.props.event.address}/>
              {/* add api call for geo location -> lat and Long */}
              <h3>Details</h3>
              {/* <div className='modalDescription'>{this.props.event.description}</div> */}
              <div className='modalDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec suscipit quam. Praesent in nisi tellus. Suspendisse potenti. Sed sapien dolor, porttitor ac mattis tincidunt, finibus vel est. Ut ultricies justo blandit faucibus porta. Mauris ullamcorper lobortis ornare. Sed dolor arcu, pulvinar sit amet sem non, suscipit laoreet ex. Mauris rutrum, justo et scelerisque ornare, eros felis vestibulum dolor, et vestibulum elit arcu varius elit. Mauris dapibus ullamcorper placerat. Aenean condimentum vestibulum rhoncus. Mauris id commodo est, eget vehicula purus. Mauris bibendum, elit sit amet pellentesque ultrices, orci erat pharetra felis, in consectetur dui est et justo.</div>

            </div>
          </Modal>
      </div>
    );
  }
}
EventPost.propTypes = {
  event: PropTypes.object,
};
