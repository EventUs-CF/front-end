import superagent from 'superagent';
import * as routes from '../routes';

const setEvent = event => ({
  type: 'EVENT_SET',
  payload: event,
});

const createRequest = event => (store) => {
  const { token } = store.getState();

  return superagent.post(`${API_URL}${routes.ROOT_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(event)
    .then((response) => {
      return store.dispatch(setEvent(response.body));
    });
};

const updateRequest = event => (store) => {
  const { token } = store.getState();

  return superagent.put(`${API_URL}${routes.ROOT_ROUTE}/${event._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(event)
    .then((response) => {
      return store.dispatch(setEvent(response.body));
    });
};

const deleteRequest = event => {
  
}

export { setEvent, createRequest, updateRequest };
