import React, { useEffect } from 'react';
import { PollContainer, Question, Title } from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';


const Polls = (props) => {
  const {pollsList, pollsLoading, pollsError, fetchPolls} = props

  useEffect (() => {
    fetchPolls()
  },[])
  console.log(pollsList)

  const poll = pollsList[0]

  return (
    
    <Container>
      <Title>P-Polls: Express Your Opinion  {pollsList.length}</Title>
      <PollContainer>
        <Question>{poll.question_text}</Question>
      </PollContainer>
    </Container>
  );
};

export default Polls
