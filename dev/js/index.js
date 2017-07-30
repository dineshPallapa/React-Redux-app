import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import allReducers from "./reducers";
import App from './components/App';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'


export default function configureStore(initialState) {
  return createStore(
    allReducers,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
const store = configureStore();
ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,document.getElementById('root'));
