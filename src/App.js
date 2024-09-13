import React from 'react';
import PollList from './components/PollList';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Polls from './custom_modules/polls/Polls';

const App = () => (
  <Switch>
    <Route exact path='/'>
      <Polls />
    </Route>
  </Switch>
);

export default App;
