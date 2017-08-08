import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import allReducers from './reducer/index';
import Products from './containers/Products'
import Counter from './containers/Counter'

let store = createStore(allReducers)

class App extends React.Component{
  render() {
    return(
      <div>
        <Counter />
      </div>
    )
  }
}

ReactDOM.render(
            <Provider store={store}>
              <App />
            </Provider>,document.getElementById('root'));