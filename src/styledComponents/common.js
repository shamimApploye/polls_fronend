import styled from "styled-components";


export const Container = styled.div`
  margin: 20px auto; /* Center horizontally with auto margin */
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1200px; /* Restrict maximum width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  min-width: 300px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: rgb(45, 255, 255);
  color: black;
  outline: none;
  border: 0px;
  margin: 15px 0px;
  font-size: medium;
  border-radius: 10px;
  width: 100%;
`

export const Input = styled.input`
  padding: 10px 15px;
  border: 0px;
  outline: 0px;
  border-radius: 10px;
  font-size: medium;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`

export const Labels = styled.label`
  font-size: large;
  margin-left: 10px;
  font-weight: 600;
`

export const FormContainer = styled.form `
    border-radius: 20px;
    width: 30%;
    padding: 20px;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`


export const button = styled.button``;
