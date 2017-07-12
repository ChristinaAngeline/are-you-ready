import firebase from 'firebase';
import React from 'react';
import thunk from 'redux-thunk';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';

import MainTemplate from './templates/main/Main';

import HomePage from './pages/home/Home';
import PersonalPage from './pages/personal/Personal';
import FormationPage from './pages/formation/Formation';
import AttendancePage from './pages/attendance/Attendance';
import EmployeesPage from './pages/employee/Employee';

import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyCIA-rnORwnlCelobIEeBhxm75FQ6SJeQE",
  authDomain: "are-you-ready-9bede.firebaseapp.com",
  databaseURL: "https://are-you-ready-9bede.firebaseio.com",
  projectId: "are-you-ready-9bede",
  storageBucket: "are-you-ready-9bede.appspot.com",
  messagingSenderId: "687208054267"
});



const router = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  applyMiddleware(
    thunk,
    router
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Router history={history}>
    <Route path={CONFIG.baseHref} component={MainTemplate}>
      <IndexRoute component={HomePage} />
      <Route component={PersonalPage} path="personal" />
      <Route component={FormationPage} path="formation" />
      <Route component={AttendancePage} path="attendance" />
      <Route component={EmployeesPage} path="employee" />
    </Route>
  </Router>,
  document.getElementById('app')
);
