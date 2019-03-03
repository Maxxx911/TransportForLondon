import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./logic/state";




let rerender = (state) => {
  ReactDOM.render(<App
    state={store.getState()}
    addStopPointMethod = {store.addStopPoint.bind(store)}
    getStopPointsMethod = {store.getStopPoints.bind(store)}
    clearStopPointMethod = {store.getStopPoints.bind(store)}
     />, document.getElementById('root'));
}
rerender(store.getState());
store.subscribe(rerender);
store.download();
serviceWorker.unregister();
