export const validateEvent = (event) => {
  if (!event) {
    throw new Error('Event is Required');
  }

  const {
    _id, title, when, startAddy, startCoord, 
    trail, shiggy, distance, hares, hashCash, description, bring, expect,
  } = event;

  if (!_id || !title || !when || !startAddy || !startCoord || !trail || !shiggy || !distance || 
    !hares || !hashCash || !description || !bring || !expect) {
    throw new Error('Must Complete All Fields');
  }
};

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'TOKEN_REMOVE': // eslint-disable-line
      return [];
    case 'EVENT_CREATE':
      // validateEvent(payload);
      if (payload.length === 0) {
        return state;
      } else if (payload.length > 1) {
        payload.forEach((event) => {
          state = [...state, event]; // eslint-disable-line
          return state;
        });
      } else {
        return [...state, payload];
      }
    default: // eslint-disable-line
      return state;
  }
};
