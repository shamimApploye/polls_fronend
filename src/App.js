import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Polls from './custom_modules/polls/Polls';
import Home from './components/Home';
import AddPoll from './custom_modules/polls/addPoll/AddPoll';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/polls' element={ <Polls /> }/>
      <Route path='/add-poll' element={ <AddPoll /> }/>
    </Routes>
  </Router>
);

export default App;
