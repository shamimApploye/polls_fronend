import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PollList from './components/PollList';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={ <PollList /> } />
    </Routes>
  </Router>
);

export default App;
