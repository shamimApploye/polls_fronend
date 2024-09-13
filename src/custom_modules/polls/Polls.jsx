import React, { useEffect } from 'react';
import { Title } from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';


const Polls = (props) => {
  const {pollsList, pollsLoading, pollsError, fetchPolls} = props

  useEffect (() => {
    fetchPolls()
  },[])
  console.log(pollsList)

  return (
    
    <Container>
      <Title>P-Polls: Express Your Opinion  {pollsList.length}</Title>
      {/* <PollContainer>
        <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
        <div>
          <Question>{poll.question_text}</Question>
          {choices.length > 0 ? (
            choices.map((choice) => (
              <ChoiceContainer key={choice.id}>
                <ChoiceInput
                  type="radio"
                  name={`poll-${poll.id}`}
                  value={choice.id}
                />
                <ChoiceLabel>{choice.choice_text}</ChoiceLabel>
                <Votes>{choice.votes} votes</Votes>
              </ChoiceContainer>
            ))
          ) : (
            <p>No choices available for this poll.</p>
          )}
        </div>
        <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
      </PollContainer> */}
    </Container>
  );
};

export default Polls
