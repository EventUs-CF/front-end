import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autoBind from '../../utils/auto-bind';

import * as authActions from '../../actions/auth';
import * as routes from '../../routes';
import AuthForm from '../auth-form/auth-form';
import './header.scss';
import eventUs from '../../assets/eventUs.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Header);
  }
  handleLogin(user) {
    return this.props.pDoLogin(user)
      .then(() => {
        this.props.history.push(routes.LANDING_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    return (
      <header className='header'>
        <a href={routes.LANDING_ROUTE}>
          <img src={eventUs} />
        </a>
        {
          this.props.loggedIn ? 
          <div className='headerLoggedIn'>
            <img src={this.props.user ? this.props.user.avatar : null}/>
            <h3><a href={routes.USER_ROUTE}> {
                this.props.user ?
              this.props.user.username : undefined
              }</a></h3>
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
