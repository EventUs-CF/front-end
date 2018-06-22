import eventReducer from '../reducers/event';

describe('Testing the UserReducer', () => {
  const testState = {
    groot: 'I am root',
  };
  test('testing the default state functionality', () => {
    const testAction = {
      type: '',
      payload: testState.event,
    };
    expect(eventReducer(testState, testAction)).toEqual(testState);
  });
  const createState = {
    title: 'cow',
    location: 'cow secret palace',
  };
  test('Testing the Event Create', () => {
    const testAction = {
      type: 'EVENT_CREATE',
      payload: createState.event,
    };
    expect(eventReducer(createState, testAction)).toEqual(createState.event);
  });
  const mockState = {};
  test('Testing the Event Create payload === 0', () => {
    const testAction = {
      type: 'EVENT_CREATE',
      payload: mockState,
    };
    expect(eventReducer(createState, testAction)).toEqual([mockState]);
  });
});
