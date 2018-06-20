import superagent from 'superagent';
import * as routes from '../routes';

const setProfile = user => ({
  type: 'USER_SET',
  payload: user,
});

const createRequest = user => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.USER_ROUTE}`)
    .set('Authorization', `Bearer ${token.split('"')[3]}`)
    .set('Content-Type', 'application/json')
    .send(user)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const updateRequest = user => (store) => {
  const { token } = store.getState();

  return superagent.put(`${API_URL}${routes.USER_ROUTE}/${user._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(user)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${API_URL}${routes.USER_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

export { setProfile, createRequest, updateRequest, fetchRequest };
