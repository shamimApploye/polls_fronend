import styled from 'styled-components';

// Container for individual polls
export const PollContainer = styled.div`
  margin: 20px auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
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
    left: -60px;
  }

  &:nth-of-type(2) {
    right: -60px; 
  }
`;

export const VoteButton = styled.button`
  background-color: #28a745;  /* Green background */
  color: white;  /* White text */
  border: none;  /* Remove default border */
  padding: 10px 20px;  /* Add some padding */
  font-size: 16px;  /* Increase font size */
  border-radius: 5px;  /* Rounded corners */
  cursor: pointer;  /* Pointer cursor on hover */
  transition: background-color 0.3s ease;  /* Smooth transition for hover effect */

  &:hover {
    background-color: #218838;  /* Darker green on hover */
  }

  &:active {
    background-color: #1e7e34;  /* Even darker green when clicked */
  }

  &:disabled {
    background-color: #6c757d;  /* Gray when disabled */
    cursor: not-allowed;  /* No pointer cursor when disabled */
  }
`;
