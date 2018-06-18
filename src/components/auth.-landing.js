//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
//
// import * as authActions from './../actions/auth';
//
// import autoBind from './../utils/auto-bind';
// import AuthForm from './auth-form';
//
// import * as routes from './../routes';
//
// class AuthLanding extends React.Component {
//   constructor(props) {
//     super(props);
//     autoBind.call(this, AuthLanding);
//   }
//
//   // ----MEMBER FUNCTIONS HERE------
//   handleLogin(user) {
//     return this.props.pDoLogin(user)
//       .then(() => {
//         this.props.history.push(routes.DASHBOARD_ROUTE);
//       })
//       .catch(console.error);
//   }
//
//   handleSignup(user) {
//     return this.props.pDoSignup(user)
//       .then(() => {
//         this.props.history.push(routes.DASHBOARD_ROUTE);
//       })
//       .catch(console.error);
//   }
//
//   // ------LIFECYCLE HOOKS-------
//   render() {
//     const rootJSX = <div>
//       <h2> WELCOME TO EventUs!!! </h2>
//       <Link to='/signup'> Sign up to our app</Link>
//       <Link to='/login'> Login up to our app</Link>
//     </div>;
//
//     const signupJSX = <div>
//       <h2> SIGN UP!!! </h2>
//       <AuthForm onComplete={this.handleSignup}/>
//       <p> Already have an account with us??? </p>
//       <Link to='/login'> Login up to our app</Link>
//     </div>;
//
//     const loginJSX = <div>
//       <h2> LOGIN!!! </h2>
//       <AuthForm type='login' onComplete={this.handleLogin}/>
//       <p> No account? Sign up here! </p>
//       <Link to='/signup'> Sign up to our app</Link>
//     </div>;
//
//     const { location } = this.props;
//
//     return (
//       <div className='landing'>
//         {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined }
//         {location.pathname === routes.SIGNUP_ROUTE ? signupJSX : undefined }
//         {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined }
//       </div>
//     );
//   }
// }
//
// AuthLanding.propTypes = {
//   pDoLogin: PropTypes.func,
//   pDoSignup: PropTypes.func,
//   location: PropTypes.object,
//   history: PropTypes.object,
// };
//
// const mapStateToProps = state => ({
//   token: state.token,
// });
//
// const mapDispatchToProps = dispatch => ({
//   pDoSignup: user => dispatch(authActions.signupRequest(user)),
//   pDoLogin: user => dispatch(authActions.loginRequest(user)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(AuthLanding);
