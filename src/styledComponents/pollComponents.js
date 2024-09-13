import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

export const PollList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PollItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Question = styled.h2`
  font-size: 1.25rem;
  color: #333;
`;

export const PubDate = styled.p`
  font-size: 0.875rem;
  color: #666;
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