import styled from 'styled-components';
import { Button } from './common';


export const PollList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const PollItem = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

export const Question = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

export const PubDate = styled.p`
  color: #777;
  font-size: 0.9em;
  margin-bottom: 20px;
  text-align: center;
`;

export const Choice = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: ${props => (props.disabled ? '#ccc' : '#F0F8FF')};
  color: black;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  transition: background-color 0.3s ease;
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.checked ? '#90EE90' : '#DEB887')};
  border: 2px solid #ffffff;
  margin-right: 10px;
  position: relative;

  &:after {
    content: "";
    display: ${props => (props.checked ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #3498db;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.span`
  flex: 1;
  font-size: 1em;
`;

export const Votes = styled.span`
  margin-left: 50px;
  font-size: 0.8em;
  color: #444;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center buttons horizontally */
  gap: 10px; /* Space between buttons */
  margin-top: 20px; /* Space from other content */
`;

export const NavButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
`;



//// AddPOLL ////
// Form container
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Input fields
export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.2);
  }
`;


export const HomeButton = styled(Button)`
  background-color: tomato;
  margin-top: 10px;
`;

// Container for choice actions
export const ChoiceActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Button to add choice
export const AddChoiceButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;