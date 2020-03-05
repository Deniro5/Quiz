import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './Home';
import '../scss/app.scss';
import Quiz from './Quiz'

const history = createHistory();



class App extends Component {
  
  render() {
    return (
      <Router history={history}>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/:quizType" component = {Quiz}/>
          />
        </Switch>
      </div>
      </Router>
    );
  }

}

export default App;
