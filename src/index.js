import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App"
import store from "./store"

import { browserHistory } from 'react-router'

store.subscribe(()=>{
    localStorage.setItem('todoReduxState', JSON.stringify(store.getState()))
})

const renderDom = (
    <Provider store={store}>
      <div>
        <Router history={browserHistory}>
          <App />
        </Router>
      </div>
    </Provider>
  );
  
  ReactDOM.render(renderDom, document.getElementById('app'));
