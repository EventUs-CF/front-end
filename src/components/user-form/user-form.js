import React from 'react';
import PropTypes from 'prop-types';
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
        showAvatars: false,
      });
    } else {
      this.setState({
        showAvatars: true,
      });
    }
  }

  handleAvatarChange(src) {
    console.log('passed image src', src);
    this.setState({
      avatar: src,
    });
  }

  render() {
    return (
      <article>
      <form className='user-form' onSubmit={this.handleSubmit}>
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
        <label>Bio</label>
        <textarea
          type='text'
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <div>
        <label>Avatar</label>
        <img src={this.state.avatar}/>
        <button onClick={this.handleAvatarToggle}>Select</button>
        </div>
        <div>
        <label></label>
        <button type='submit'>Update Profile</button>
        </div>
      </form>
      {this.state.showAvatars ? <Avatar onAvatar={this.handleAvatarChange}/> : null}
      </article>
    );
  }
}

UserForm.propTypes = {
  onComplete: PropTypes.func,
  user: PropTypes.object,
};

export default UserForm;
