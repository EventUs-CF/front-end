import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

export default class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={this.props.type}>{
        (this.props.type === 'avatar') ? 
        <div >
          <div className={showHideClassName}>
            <main className='modal-main'>
              <div onClick={this.props.hide}>
                {this.props.children}
              </div>
            </main>
          </div>
        </div> :
      <div className={showHideClassName}>
        <main className='modal-main'>
          <button onClick={this.props.hide}>X</button>
          {this.props.children}
        </main>
      </div>
    }</div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
  children: PropTypes.node,
};
