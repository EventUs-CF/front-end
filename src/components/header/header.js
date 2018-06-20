import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import autoBind from '../../utils/auto-bind';

import * as authActions from '../../actions/auth';
import * as routes from '../../routes';
import AuthForm from '../auth-form/auth-form';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Header);
  }
  handleLogin(user) {
    return this.props.pDoLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    const JSXNotLoggedIn =
      <ul>
        <li><Link to={routes.ROOT_ROUTE}> Home </Link></li>
        <li><Link to={routes.LOGIN_ROUTE}> Login </Link></li>
        <li><Link to={routes.SIGNUP_ROUTE}> Sign up! </Link></li>
      </ul>;
    const JSXLoggedIn =
      <ul>
        <li><Link to={routes.LANDING_ROUTE}> Landing </Link></li>
      </ul>;

    return (
      <header className='header'>
        <h1> EventUs </h1>
        {
          this.props.loggedIn ? 
          <div className='headerloggedIn'>
            <img src='avatar'/>
            <h3>username</h3>
            <button onClick={this.props.doLogout}>Logout</button>
          </div> : 
          <AuthForm type='headerLogin' onComplete={this.handleLogin}/>
        }
        {/* <nav className='links'>
          { this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn }
        </nav> */}
        {/* {
          this.props.loggedIn ?
            <button onClick={this.props.doLogout}>Logout</button>
            : undefined
        } */}
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
  pDoLogin: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
  pDoLogin: user => dispatch(authActions.loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
