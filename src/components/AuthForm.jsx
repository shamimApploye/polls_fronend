import React from 'react'
import { Button, FormContainer, Input, Labels, TextContainer } from '../styledComponents/common'

function AuthForm ({authInfo, handleForm}) {

  return (
      <FormContainer action="" onSubmit={(e) => handleForm(e.preventDefault())}>
        <h1 > {authInfo.heading}</h1>
        {authInfo.inputs.map ((item, index) => (
          <TextContainer key={index}>
            <Labels htmlFor= {item.htmlFor}>{item.name}</Labels>
            <Input id= {item.htmlFor} ref={item.ref} type={item.type} placeholder={item.name} />
          </TextContainer>
        ))}
        <Button>{authInfo.button}</Button>
      </FormContainer>
  )
}

export default AuthForm