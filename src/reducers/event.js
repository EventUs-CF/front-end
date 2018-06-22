
export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
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
