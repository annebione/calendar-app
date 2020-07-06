import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import Calendar from './app/containers/Calendar'
import Month from './app/containers/Month'

export default class App extends React.Component {
  render() {
    return (
      <Calendar>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Month} />
            <Route path="/:year/:month" component={Month} />
          </Switch>
        </HashRouter>
      </Calendar>
    );
  }
}
