import superagent from 'superagent';
import * as routes from '../routes';

const apiUrl = process.env.API_URL;

export const eventCreate = event => ({
  type: 'EVENT_CREATE',
  payload: event,
});

const eventUpdate = event => ({
  type: 'EVENT_UPDATE',
  payload: event,
});

const eventDelete = event => ({
  type: 'EVENT_DELETE',
  payload: event,
});

export const eventsFetch = events => ({
  type: 'EVENTS_FETCH',
  payload: events,
});

const createRequest = event => (store) => {
  const { token, user } = store.getState();
  event.createdBy = user._id;
  return superagent.post(`${apiUrl}${routes.EVENT_ROUTE}`)
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token.split('"')[3]}`)
    .send(event)
    .then((response) => {
      return store.dispatch(eventCreate(response.body));
    });
};

const updateRequest = event => (store) => {
  const { token } = store.getState();

  return superagent.put(`${apiUrl}${routes.EVENT_ROUTE}/${event._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(event)
    .then((response) => {
      return store.dispatch(eventUpdate(response.body));
    });
};

const deleteRequest = event => (store) => {
  const { token } = store.getState();

  return superagent.delete(`${apiUrl}${routes.EVENT_ROUTE}/${event._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(eventDelete(response.body));
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState();

  return superagent.get(`${apiUrl}${routes.EVENT_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(eventsFetch(response.body));
    });
};

export { createRequest, updateRequest, deleteRequest, fetchRequest };
