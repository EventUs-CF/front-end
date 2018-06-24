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
            <aside>{this.props.event.time}</aside>
            <div className='eventInfo'>
              <div className="eventHeader"></div>
              <div className='location'>{this.props.event.location}</div>
              <div className='eventTitle'>{this.props.event.title}</div>
            </div>
          </div>  

          <Modal className='modal' show={this.state.detail} hide={hideModal}>
            <div>
            {/* <div className='modalDate'>Friday, June 22, 2018</div> */}

              <div className='modalDate'>{this.props.event.date}</div>
              <div className='modalTitle'><b>{this.props.event.title}</b></div>
              <p>Are You Going?</p>
              <button className='confirm'>confirm</button>
              <button className='deny'>deny</button>
              <hr/>
              <div className='info'>
                <div className='modalDate'>{this.props.event.date}</div>

                <div className='time'>{this.props.event.time}</div>

                <div className='modalLocation'>{this.props.event.location}</div>
                <div className='modalCost'>$ {this.props.event.cost}</div>
              </div>
              <Map address={this.props.event.address}/>
              <h3>Details</h3>
              <div className='modalDescription'>{this.props.event.description}</div>
            </div>
          </Modal>
      </div>
    );
  }
}
EventPost.propTypes = {
  event: PropTypes.object,
};
