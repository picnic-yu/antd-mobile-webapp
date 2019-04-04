import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible';
import './index.css';
import User from './pages/user/index';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Card from './pages/card/index';
import Calendar  from './pages/Calendar/index';
import UploadImage  from './pages/uploadImage/index';
import Toast  from './pages/Toast/index';
import reducer from './redux/reducer';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

//store
let store = createStore(reducer);
//渲染组件
ReactDOM.render(
    
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/user' component={User}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/card' component={Card}></Route>
                <Route path='/uploadImage' component={UploadImage}></Route>
                <Route path='/toast' component={Toast}></Route>
                <Route path='/calendar' component={Calendar }></Route>
                <Route path='/' component={Login}></Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
