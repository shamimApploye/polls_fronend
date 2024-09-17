import React from 'react';
import Polls from './custom_modules/polls';
import AddPoll from './custom_modules/polls/addPoll';
import Signup from './custom_modules/signup';
import Login from './custom_modules/login/Login';
import Dashboard from './custom_modules/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Users from './custom_modules/users/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/polls' element={<Polls />} />
      <Route path='/add-poll' element={<AddPoll />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route element = {<Dashboard/>}>
        <Route path='/users' element={<Users />} />
        <Route path='/pollList' element={<Users />} />
      </Route>
    </Routes>
  
  )
}

export default App