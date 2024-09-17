import { useRef, useState } from 'react'
import AuthForm from '../../components/AuthForm'



function Signup(props) {
  console.log(props)
  const { postData } = props
  const [error, setError] = useState (null)

  const firstNameRef = useRef (null)
  const lastNameRef = useRef (null)
  const emailRef = useRef (null)
  const passRef = useRef (null)
  const confirmRef = useRef (null)

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

const handleForm = () => {
  console.log('Its working')
  // if (passRef.current.value !== confirmRef.current.value) {
  //   console.log(passRef)
  // }

  // if (!firstNameRef.current.value || !lastNameRef.current.value || !emailRef.current.value || !passRef.current.value || !confirmRef.current.value)
  //   console.log('firstNameRef')

  // console.log(firstNameRef)
  postData ({
    firstName: firstNameRef.current.value,
    lastName: lastNameRef.current.value,
    email: emailRef.current.value,
    password: passRef.current.value
  })
}

  return (
    <div className='outer-1'>

      <AuthForm authInfo = {signup} handleForm={handleForm}/>
     
      
    </div>
  )
}

export default Signup