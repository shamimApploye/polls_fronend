import React from 'react'
import AuthForm from '../../components/AuthForm'

const signup = {
  heading: 'Registration',
  button: 'Sign Up',
  inputs: [
    {
      name: 'First Name',
      type: 'text',
      htmlFor: 'first-name',

    },
    {
      name: 'Last Name',
      type: 'text',
      htmlFor: 'last-name'
    },
    {
      name: 'Email Address',
      type: 'text',
      htmlFor: 'email'
    },
    {
      name: 'Password',
      type: 'password',
      htmlFor: 'password'
    },
    {
      name: 'Confirm Password',
      type: 'password',
      htmlFor: 'confirm'
    },
  ]
}

function Signup() {
  return (
    <div className='outer-1'>

      <AuthForm authInfo = {signup} />
      
    </div>
  )
}

export default Signup