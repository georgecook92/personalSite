import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';

import Home from './components/Home';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Stir from './components/Stir';
import ParentsVoice from './components/ParentsVoice';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={Profile} />
        <Route path='projects' component={Projects} />
        <Route path='projects/stir' component={Stir} />
        <Route path='projects/parents-voice' component={ParentsVoice} />
        <Route path='*' component={Home} />
      </Route>

    </Router>

  </Provider>
  , document.querySelector('.container'));
