import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, About } from '../index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
