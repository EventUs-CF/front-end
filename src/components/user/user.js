import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from '../../utils/auto-bind';
import * as userActions from '../../actions/user';
import * as routes from '../../routes';
import UserForm from '../user-form/user-form';
import './user.scss';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    
    autoBind.call(this, User);
  }
  // ----------------
  // Member Functions
  // ----------------
  handleCreate(user) {
    this.props.userCreate(user)
      .then(() => {
        this.props.history.push(routes.USER_ROUTE);
      });
  }

  handleUpdate(user) {
    this.props.userUpdate(user);
    this.setState({ editing: false });
  }

  onClick() {
    this.setState({ editing: false });
  }

  // ----------------
  // LifeCycle Hooks
  // ----------------
  render() {
    const { user } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXUser = null;

    if (user) {
      JSXEditing = 
      <div className='userForm'>
        <UserForm user={user} onComplete={this.handleUpdate} onClick={this.onClick}/>
      </div>;
      JSXDisplay = 
      <div className='userInfo'>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <img src={user.avatar} />
        <p>{user.bio}</p>
        <button onClick={() => this.setState({ editing: true })}> Edit </button>
      </div>;
      JSXUser = 
      <div className='profileHeader'>
        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
        { this.state.editing ? JSXEditing : JSXDisplay }
      </div>;
    }

    return (
      <div className='User'>
        <h1>PROFILE</h1>
        { user ? JSXUser : <UserForm onComplete={this.handleCreate}/> }
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object,
  userCreate: PropTypes.func,
  userUpdate: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  userCreate: user => dispatch(userActions.createRequest(user)),
  userUpdate: user => dispatch(userActions.updateRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
