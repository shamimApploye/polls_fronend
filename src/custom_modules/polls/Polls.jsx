import React, { useEffect } from 'react';
import { PollContainer, Question, ChoiceContainer, ChoiceLabel, Votes, ChoiceInput } from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';


// Dummy data
const polls = [
  {
    id: 3,
    question_text: 'What is your favorite language?',
    pub_date: '2024-09-12T14:30:00Z',
  },
  {
    id: 4,
    question_text: 'What is your favorite color?',
    pub_date: '2024-09-12T12:00:00Z',
  },
  {
    id: 5,
    question_text: 'What is your favorite prog lang?',
    pub_date: '2024-09-12T12:00:00Z',
  },
];

const accumulatedResultsByPoll = {
  3: [],
  4: [
    { id: 1, choice_text: 'Red', votes: 0 },
    { id: 2, choice_text: 'Blue', votes: 0 },
  ],
  5: [
    { id: 3, choice_text: 'C', votes: 2 },
    { id: 4, choice_text: 'Python', votes: 3 },
  ],
};

const PollList = (props) => {
  const {pollsList, pollsLoading, pollsError, fetchPolls} = props


  useEffect (() => {
    fetchPolls()
  },[])
  console.log(pollsList)
  console.log(typeof fetchPolls)
  return (
    
    <Container>
      {polls.map((poll) => (
        <PollContainer key={poll.id}>
          <Question>{poll.question_text}</Question>
          {accumulatedResultsByPoll[poll.id].length > 0 ? (
            accumulatedResultsByPoll[poll.id].map((choice) => (
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
        </PollContainer>
      ))}
    </Container>
  );
};

export default PollList;