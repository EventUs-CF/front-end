import { fetchCookie } from '../utils/cookie';

const TOKEN_COOKIE_KEY = 'PPA-Token';
const token = fetchCookie(TOKEN_COOKIE_KEY);
const initialState = token || null; 

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
