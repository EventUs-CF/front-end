import React from 'react';
import { render as renderDom } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import reducers from './reducers/index';
import thunk from './lib/redux-thunk';
import session from './lib/redux-session';
import reporter from './lib/redux-reporter';


import './styles/main.scss';

const store = createStore(reducers, applyMiddleware(thunk, reporter, session));

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<Provider store={store}><App/></Provider>, appContainer);
