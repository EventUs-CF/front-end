import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import autoBind from '../../utils/auto-bind';

const emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is Required',

  email: '',
  emailDirty: false,
  emailError: 'email is required',

  password: '',
  passwordDirty: false,
  passwordError: 'password is required',
};

const MIN_NAME_LENGTH = 7;
const MIN_PASSWORD_LENGTH = 7;

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    autoBind.call(this, AuthForm);
  }

  // -----MEMBER FUNCTIONS HERE----------

  handleValidation(name, value) {
    if (this.props.type === 'login') {
      return null;
    }
    switch (name) {
      case 'username':
        if (value.length < MIN_NAME_LENGTH) {
          return `Your name must be at least ${MIN_NAME_LENGTH} characters long`;
        }
        return null;
      case 'email':
        if (!validator.isEmail(value)) {
          return 'You must provide a valid email';
        }
        return null;
      case 'password':
        if (value.length < MIN_PASSWORD_LENGTH) {
          return `Your password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
        }
        return null;
      default:
        return null;
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { usernameError, emailError, passwordError } = this.state;

    if (this.props.type === 'login' || this.props.type === 'headerLogin' || (!usernameError && !passwordError && !emailError)) {
      this.props.onComplete(this.state);
      this.setState(emptyState);
    }
  }
  // --------LIFECYCLE HOOKS HERE---------------
  render() {
    let { type } = this.props;

    type = type === 'login' || 'headerLogin' ? type : 'signup';

    const signupJSX =
      <div>
        {type !== 'headerLogin' ? 
        <input
          name='email'
          placeholder='email'
          type='email'
          autoComplete='email'
          value={this.state.email}
          onChange={this.handleChange}
        /> : 
        <input
          name='email'
          placeholder=''
          type='email'
          autoComplete='email'
          value={this.state.email}
          onChange={this.handleChange}
        />}
      </div>;

    const signupRenderedJSX = (type !== 'login' && type !== 'headerLogin') ? signupJSX : undefined;

    return (
      <form className='auth-form' noValidate onSubmit={this.handleSubmit} >
        <div className='headerLoginInput'>
          {type === 'headerLogin' ? <p>username</p> : undefined}
          {type !== 'headerLogin' ? 

          <input
            name='username'
            placeholder='username'
            type='text'
            autoComplete='username'
            value={this.state.username}
            onChange={this.handleChange}
          /> : 
          <input
            name='username'
            placeholder=''
            type='text'
            autoComplete='username'
            value={this.state.username}
            onChange={this.handleChange}
          />}
        </div>

        {signupRenderedJSX}

        <div className='headerLoginInput'>
          {type === 'headerLogin' ? <p>password</p> : undefined}
          {type !== 'headerLogin' ? 
          <input
            className={ this.state.passwordDirty ? 'input-error' : '' }
            name='password'
            placeholder='password'
            type='password'
            autoComplete='password'
            value={this.state.password}
            onChange={this.handleChange}
          /> : 
          <input
            className={ this.state.passwordDirty ? 'input-error' : '' }
            name='password'
            placeholder=''
            type='password'
            autoComplete='password'
            value={this.state.password}
            onChange={this.handleChange}
          />}
        </div>

        <button type='submit'> {type === 'headerLogin' || type === 'login' ? 'login' : 'Sign Up'} </button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.string,
  onComplete: PropTypes.func,
};

export default AuthForm;
