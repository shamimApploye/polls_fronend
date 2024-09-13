import React, { useRef } from 'react'
import { Button, Container, FormContainer, Input, Labels, TextContainer } from '../../styledComponents/common'
import AuthForm from '../../components/AuthForm'



function Signup() {

  const firstNameRef = useRef (null)
  const lastNameRef = useRef (null)
  const emailRef = useRef (null)
  const passRef = useRef (null)
  const confirmRef = useRef (null)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e)
  //   console.log(firstNameRef.current)
  // }

  const signup = {
    heading: 'Registration',
    button: 'Sign Up',
    inputs: [
      {
        name: 'First Name',
        type: 'text',
        htmlFor: 'first-name',
        ref: firstNameRef
  
      },
      {
        name: 'Last Name',
        type: 'text',
        htmlFor: 'last-name',
        ref: lastNameRef
      },
      {
        name: 'Email Address',
        type: 'text',
        htmlFor: 'email',
        ref: emailRef
      },
      {
        name: 'Password',
        type: 'password',
        htmlFor: 'password',
        ref: passRef
      },
      {
        name: 'Confirm Password',
        type: 'password',
        htmlFor: 'confirm',
        ref: confirmRef
      },
    ]
  }

  return (
    <div className='outer-1'>

      <AuthForm authInfo = {signup} />
     
      
    </div>
  )
}

export default Signup