import styled from "styled-components";


export const PollContainer = styled.div`
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 400px;
`;

export const Question = styled.h3`
  margin-bottom: 10px;
`;

export const ChoiceContainer = styled.div`
  margin-bottom: 10px;
`;

export const ChoiceLabel = styled.label`
  margin-left: 10px;
  font-size: 16px;
`;

export const Votes = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: gray;
`;

export const ChoiceInput = styled.input`
  margin-right: 10px;
`;