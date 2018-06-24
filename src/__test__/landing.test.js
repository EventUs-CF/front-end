import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import reporter from '../lib/redux-reporter';
import session from '../lib/redux-session';
import thunk from '../lib/redux-thunk';
// import App from '../components/app/app';
import Header from '../components/header/header';


configureEnzyme({ adapter: new Adapter() });

describe('Landing page testing', () => {
  const testState = {
    
  };
  test('testing to see if the header is present', () => {
    const middleware = [thunk, reporter, session];
    const mockStore = configureStore(middleware);
    const mountedHeader = mount(<Provider store={mockStore(testState)}><Header/></Provider>);
    expect((mountedHeader).find('header')).toBeTruthy();
  });
});
