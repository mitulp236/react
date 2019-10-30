import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MdSignIn from './component/Signin';
import MdSignUpgnUp from './component/MdSignUp';
import Error from './component/Error';
import Dashboard from './component/Dashboard';
import {Route, BrowserRouter, Switch} from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/login/' component={MdSignIn} />
      <Route path='/signup/' component={MdSignUpgnUp} />
      <Route path='/dashboard/' component={Dashboard} />
      <Route component={Error} />
    </Switch>
</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
