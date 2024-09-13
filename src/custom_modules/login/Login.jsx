import React from 'react'
import AuthForm from '../../components/AuthForm'

const login = {
  heading: 'Login',
  button: 'Login',
  inputs: [
    
    {
      name: 'Email Address',
      type: 'text',
      htmlFor: 'email'
    },
    {
      name: 'Password',
      type: 'password',
      htmlFor: 'confirm'
    }
    
  ]
}

function Login() {
  return (
    <div className='outer-1'>

      <AuthForm authInfo = {login} />
      
    </div>
  )
}

export default Login