import React, { useEffect } from 'react';
import { Container } from '../../styledComponents/common';
import { Title, PollList, PollItem, Question, PubDate  } from '../../styledComponents/pollComponents';


const Polls = (props) => {
  const { pollsList, pollsLoading, pollsError, fetchPolls } = props;

  useEffect(() => {
    fetchPolls();
  }, [fetchPolls]);

  if (pollsLoading) return <p>Loading...</p>;
  if (pollsError) return <p>Error: {pollsError.message}</p>;

  return (
    <Container>
      <Title>P-Polls: Express Your Opinion ({pollsList.length})</Title>
      <PollList>
        {pollsList.map(poll => (
          <PollItem key={poll.id}>
            <Question>{poll.question_text}</Question>
            <PubDate>Published on: {new Date(poll.pub_date).toLocaleDateString()}</PubDate>
          </PollItem>
        ))}
      </PollList>
    </Container>
  );
};

export default Polls;
