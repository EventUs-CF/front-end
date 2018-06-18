import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthRedirect from './auth-redirect';
import AuthLanding from './auth.-landing';
import Header from './header';
import Landing from './landing';

class App extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.pFetchClientProfile()
        .catch(console.error);
    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          <Header/>
          <Route path='*' component={AuthRedirect}/>
          <Route path='/' component={AuthLanding}/>
          <Route path='/signup' component={AuthLanding}/>
          <Route path='/login' component={AuthLanding}/>
          <Route path='/landing' component={Landing}/>
          <Route path='/eventform' component={eventForm}/>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool,
  pFetchClientProfile: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  pFetchClientProfile: () => dispatch(clientProfileActions.fetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
