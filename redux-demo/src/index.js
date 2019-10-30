import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allreducers from '../src/reducers'
import Signup from './component/Signup';

const store = createStore(allreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/login/' component={Login} />
                <Route path='/signup/' component={Signup} />
                <Route path='/dashboard/' component={Dashboard} />
                
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
