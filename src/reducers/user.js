
export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'USER_SET': 
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;    
  }
};
