import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import './user-form.scss';

const emptyState = {
  firstName: '',
  lastName: '',
  bio: '',
  avatar: '',
  preview: undefined,
};

const fileToBase64String = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error('Avatar Required'));
    }

    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => resolve(fileReader.result));
    fileReader.addEventListener('error', reject);

    return fileReader.readAsDataURL(file);
  });
};

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user ? props.user : emptyState;
    autoBind.call(this, UserForm);
  }

  handleChange(e) {
    const { 
      type, name, value, files, 
    } = e.target;
    
    if (type === 'file') {
      fileToBase64String(files[0])
        .then(preview => this.setState({ preview }));
      
      this.setState({
        picture: files[0],
      }, () => {
        console.log('applied after state change');
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  render() {
    return (
      <article>

      <form className='user-form' onSubmit={this.handleSubmit}>
        <img src={this.state.preview} />
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
        <input
          type='file'
          name='avatar'
          onChange={this.handleChange}
        />
        </div>
        <div>
          <label> </label>
        <button type='submit'>Update Profile</button>
        </div>
      </form>
      </article>
    );
  }
}

UserForm.propTypes = {
  onComplete: PropTypes.func,
  user: PropTypes.object,
};

export default UserForm;
