import tokenReducer from '../reducers/token';

describe('token reducer', () => {
  const testState = {
    token: 'testValue',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '',
      payload: testState.token,
    };
    expect(tokenReducer(testState, testAction)).toEqual(testState);
  });
  test('TOKEN_SET', () => {
    const action = {
      type: 'TOKEN_SET',
      payload: testState.token,
    };
    expect(tokenReducer(testState.token, action)).toEqual('testValue');
  });
  test('TOKEN_REMOVE', () => {
    const action = {
      type: 'TOKEN_REMOVE',
      payload: testState.token,
    };
    expect(tokenReducer(testState.token, action)).toBeNull();
  });
});
