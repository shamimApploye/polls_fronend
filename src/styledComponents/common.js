import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center children horizontally */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Buttons
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

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


export const ErrorMessage = styled.div`
  background-color: #f8d7da; /* Light red background */
  color: #721c24; /* Dark red text */
  border: 1px solid #f5c6cb; /* Light red border */
  border-radius: 4px;
  padding: 15px;
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;