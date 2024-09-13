import React from 'react';
import Polls from './custom_modules/polls/Polls';
import Signup from './custom_modules/signup/Signup';
import Login from './custom_modules/login/Login';
import Dashboard from './custom_modules/dashboard/Dashboard';
import { Route, Router } from 'react-router-dom';

const App = () => (
  <Router >
    <Route  path='' element= {<Polls/>}/>
    <Route  path='/signup' element= {<Signup/>}/>
    <Route  path='/login' element= {<Login/>}/>
    <Route path= '/protected'>
      <Route  path='/users' element= {<Users/>}/>
      <Route  path='/dashboard' element= {<Dashboard/>}/>
      <Route  path='/pollList' element= {<Dashboard/>}/>

    </Route>

  </Router>
);

export default App;
