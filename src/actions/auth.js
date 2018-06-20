import superagent from 'superagent';
import * as routes from '../routes';
import { setProfile } from './user';
import { eventCreate } from './event';
import { deleteCookie } from '../utils/cookie';

const TOKEN_COOKIE_KEY = 'PPA-Token';

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

export const signupRequest = user => (store) => {
  return superagent.post(`${API_URL}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then((response) => {
      return store.dispatch(setTokenAction(response.text));
    });
};

export const loginRequest = user => (store) => {
  const result = {};
  return superagent.get(`${API_URL}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then((response) => {
      result.token = response.text;
      return store.dispatch(setTokenAction(response.text));
    })
    .then(() => {
      return superagent.get(`${API_URL}${routes.EVENT_ROUTE}`);
    })
    .then((response) => {
      return store.dispatch(eventCreate(response.body));
    })
    .then(() => {
      return superagent.get(`${API_URL}${routes.USER_ROUTE}`)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${result.token.split('"')[3]}`);
    })
    .then((userProfile) => {
      result.user = userProfile.body;
      return store.dispatch(setProfile(userProfile.body));
    });
};
