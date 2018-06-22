import userReducer from '../reducers/user';

describe('Testing the UserReducer', () => {
  const testState = {
    moo: 'I\'m a cow',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '',
      payload: testState.profile,
    };
    expect(userReducer(testState, testAction)).toEqual(testState);
  });
  test('testing the Create Profile functionality', () => {
    const testAction = {
      type: 'USER_SET',
      payload: testState.profile,
    };
    expect(userReducer(testState, testAction)).toEqual(testState.profile);
  });
  test('testing the Token remove functionality', () => {
    const testAction = {
      type: 'TOKEN_REMOVE',
      payload: testState.profile,
    };
    expect(userReducer(testState, testAction)).toBeNull();
  });
});
