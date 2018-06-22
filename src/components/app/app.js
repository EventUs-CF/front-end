import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthRedirect from '../auth-redirect/auth-redirect';
import AuthLanding from '../auth-landing/auth-landing';
import Header from '../header/header';
import Landing from '../landing/landing';
import EventForm from '../event-form/event-form';
import * as userActions from '../../actions/user';
import User from '../user/user';
// import Footer from '../footer/footer';
import './app.scss';

class App extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.pFetchUser()
        .catch(console.error);
    }
  }

  render() {
    return (
      <div className='app'>
        <Header/>
        <BrowserRouter>
        <div className='main'>
          <Route path='*' component={AuthRedirect}/>
          <Route exact path='/' component={AuthLanding}/>
          <Route exact path='/signup' component={AuthLanding}/>
          <Route exact path='/login' component={AuthLanding}/>
          <Route exact path='/landing' component={Landing}/>
          <Route exact path='/user' component={User}/>
          <Route exact path='/event' component={EventForm}/>
        </div>
        </BrowserRouter>
        {/* <Footer/> */}
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  pFetchUser: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  pFetchUser: () => dispatch((userActions.fetchRequest())),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
