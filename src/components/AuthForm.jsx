import React from 'react'
import { Button, FormContainer, Input, Labels, TextContainer } from '../styledComponents/common'

function AuthForm (props) {
  console.log(props)
  return (
      <FormContainer action="">
        <h1 > {props.authInfo.heading}</h1>
        {props.authInfo.inputs.map ((item, index) => (
          <TextContainer key={index}>
            <Labels htmlFor= {item.htmlFor}>{item.name}</Labels>
            <Input id= {item.htmlFor} type={item.type} placeholder={item.name} />
          </TextContainer>
        ))}
        <Button>{props.authInfo.button}</Button>
      </FormContainer>
  )
}

export default AuthForm