import styled from 'styled-components';

// Container for individual polls
export const PollContainer = styled.div`
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 400px;
  text-align: center; /* Center content */
  position: relative;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  /* Optional: add more styles as needed */
`;

// Question text
export const Question = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

// Container for each choice
export const ChoiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

// Label for choices
export const ChoiceLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
`;

// Display votes
export const Votes = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: rebeccapurple;
`;

// Radio input
export const ChoiceInput = styled.input`
  margin-right: 10px;
`;

// Navigation buttons
export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-of-type(1) {
    left: -60px; /* Adjust positioning */
  }

  &:nth-of-type(2) {
    right: -60px; /* Adjust positioning */
  }
`;
