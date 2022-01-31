import React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/app/app';
import heroesReducer from './store/heroes-reducer';

const routeReducer = combineReducers(
{
  heroes: heroesReducer,
});

const store = createStore(routeReducer, composeWithDevTools(applyMiddleware(logger, reduxThunk)));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    const UpdatedAppComponent = require('./components/app/app').default; // eslint-disable-line global-require
    render(<UpdatedAppComponent />, document.getElementById('root'));
  });
}