import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';

import autoBind from '../../utils/auto-bind';
import AuthForm from '../auth-form/auth-form';
import './authLanding.scss';
import discover from '../../assets/discover-events.png';
import see from '../../assets/see-events.png';
import share from '../../assets/share-events.png';

import * as routes from '../../routes';

class AuthLanding extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, AuthLanding);
  }

  // ----MEMBER FUNCTIONS HERE------
  handleLogin(user) {
    return this.props.pDoLogin(user)
      .then(() => {
        this.props.history.push(routes.LANDING_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user) {
    return this.props.pDoSignup(user)
      .then(() => {
        this.props.history.push(routes.LANDING_ROUTE);
      })
      .catch(console.error);
  }

  // ------LIFECYCLE HOOKS-------
  render() {
    const signupJSX = 
    <div className='rootBox'>
      <div className='signUpAside'>
        <div className='message'>
          <h2>Connect with friends and share Hashes</h2>
          <h2>around the world with EventUs.</h2>

        </div>
        <div className='motivation'>
          <img src={see}/>
          <p><b>See events and updates</b> from the community in Events Feed.</p>
        </div>
        <div className='motivation'>
          <img src={share}/>
          <p><b>Share events</b> in your Hashing life with the community.</p>
        </div>
        <div className='motivation'>
          <img src={discover}/>
          <p><b>Discover</b> new and completed Hashes with EventUs.</p>
        </div>
      
      <div className='signupForm'>
        <h2> CREATE A NEW ACCOUNT </h2>
        <AuthForm onComplete={this.handleSignup}/>
      </div>
      </div>
    </div>;

    const loginJSX = <div>
      <h2> LOGIN!!! </h2>
      <AuthForm type='login' onComplete={this.handleLogin}/>
      <p> No account? Sign up here! </p>
      <Link to='/signup'> Sign up to our app</Link>
    </div>;

    const { location } = this.props;

    return (
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? signupJSX : undefined }
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
      </div>
    );
  }
}

AuthLanding.propTypes = {
  pDoLogin: PropTypes.func,
  pDoSignup: PropTypes.func,
  location: PropTypes.object,
  history: PropTypes.object,
  cookieToToken: PropTypes.func,
};

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  cookieToToken: cookie => dispatch(authActions.setCookieAsToken(cookie)),
  pDoSignup: user => dispatch(authActions.signupRequest(user)),
  pDoLogin: user => dispatch(authActions.loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLanding);
