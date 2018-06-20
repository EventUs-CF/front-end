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
    case 'EVENT_CREATE':
      // validateEvent(payload);
      return [payload, ...state];
    default: 
      return state;
  }
};
