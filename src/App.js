import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Polls from './custom_modules/polls/Polls';
import Home from './components/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/polls' element={ <Polls /> }/>
    </Routes>
  </Router>
);

export default App;
