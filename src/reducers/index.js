import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import event from './event';

export default combineReducers({ token, user, event });
