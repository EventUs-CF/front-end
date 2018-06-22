import superagent from 'superagent';
import * as routes from '../routes';
import { setProfile } from './user';
import { eventCreate } from './event';
import { deleteCookie } from '../utils/cookie';

const TOKEN_COOKIE_KEY = 'EventUs-Token';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logout = () => {
  deleteCookie(TOKEN_COOKIE_KEY);
  return removeTokenAction();
};

// && removeEventsAction() && removeTokenAction()

export const signupRequest = user => (store) => {
  const result = {};
  return superagent.post(`${API_URL}/${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then((response) => {
      result.token = response.body.token;
      localStorage.setItem('EventUsCookie', result.token);
      return store.dispatch(setTokenAction(response.body.token));
    });
};

export const loginRequest = user => (store) => {
  const result = {};
  return superagent.get(`${API_URL}/${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then((response) => {
      result.token = response.body.token;
      localStorage.setItem('EventUsCookie', result.token);
      return store.dispatch(setTokenAction(response.body.token));
    })
    .then(() => {
      return superagent.get(`${API_URL}/${routes.USER_ROUTE}`)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${result.token}`);
    })
    .then((userProfile) => {
      result.user = userProfile.body;
      return store.dispatch(setProfile(userProfile.body));
    });
};
