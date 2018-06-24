import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../modal/index';

import autoBind from '../../utils/auto-bind';
import Avatar from './avatar';
import './user-form.scss';

const emptyState = {
  firstName: '',
  lastName: '',
  bio: '',
  avatar: '',
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user ? props.user : emptyState;
    autoBind.call(this, UserForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  handleAvatarToggle(e) {
    e.preventDefault();
    if (this.state.showAvatars) {
      this.setState({
        showAvatars: true,
      });
    } else {
      this.setState({
        showAvatars: false,
      });
    }
  }

  handleAvatarChange(src) {
    this.setState({
      avatar: src,
    });
  }

  render() {
    const hideModal = () => {
      this.setState({ showAvatars: false }); 
    };
    const showModal = () => {
      this.setState({ showAvatars: true }); 
    };

    return (
      <article>
        {
          this.state.showAvatars ? 
        <Modal className='modal' show={this.state.showAvatars} hide={hideModal} type='avatar'>
          <Avatar onAvatar={this.handleAvatarChange}/>
        </Modal> : undefined
        }
      
      <form className='user-form' onSubmit={this.handleSubmit}>
        <label></label>
        <button className='cancelButton' onClick={() => this.props.onClick}>X</button>
        <label></label>
        { this.props.userProfile ?
          <div>
            <label></label>
            <article className='info'>
              <h3 className='username'>{this.props.userProfile.username}</h3>
              <p className='email'>{this.props.userProfile.email}</p>
              <div className='newAvatar' onClick={showModal}>Select New Avatar</div>
            </article>
          </div> 
          : undefined
        }
        <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        </div>
        <label></label>
        <textarea
          type='text'
          name='bio'
          placeholder='tell us something about you!'
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <div>
        <label></label>
        <button type='submit' className='updateButton'>Update Profile</button>
        </div>
      </form>
      </article>
    );
  }
}

UserForm.propTypes = {
  onComplete: PropTypes.func,
  user: PropTypes.object,
  userProfile: PropTypes.object,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  userProfile: state.user,
});

export default connect(mapStateToProps, null)(UserForm);
