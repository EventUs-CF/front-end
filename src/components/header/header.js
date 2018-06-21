import React from 'react';
import PropTypes from 'prop-types';
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
    return (
      <header className='header'>
        <h1> EventUs </h1>
        {
          this.props.loggedIn ? 
          <div className='headerloggedIn'>
            <img src='avatar'/>
            <h3>{
                this.props.user ?
              this.props.user.username : undefined
              }</h3>
            <button onClick={this.props.doLogout}>Logout</button>
          </div> : 
          <AuthForm type='headerLogin' onComplete={this.handleLogin}/>
        }
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  doLogout: PropTypes.func,
  pDoLogin: PropTypes.func,
  history: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logout()),
  pDoLogin: user => dispatch(authActions.loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
