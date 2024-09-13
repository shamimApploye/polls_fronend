import React, { useState, useEffect } from 'react';
import { 
  PollContainer, 
  Question, 
  ChoiceContainer, 
  ChoiceLabel, 
  Votes, 
  ChoiceInput, 
  NavigationButton, 
  Title, 
  VoteButton 
} from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';

const POLLS_API_URL = 'http://127.0.0.1:8000/polls/';
const CHOICES_API_URL = 'http://127.0.0.1:8000/polls/choices/';
const VOTE_API_URL = 'http://127.0.0.1:8000/polls/choices/';

const Polls = () => {
  const [polls, setPolls] = useState([]);
  const [choices, setChoices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [voted, setVoted] = useState(false); // To track if vote has been submitted

  // Fetch polls and choices on component mount
  const fetchPollsAndChoices = async () => {
    try {
      const pollsResponse = await fetch(POLLS_API_URL);
      if (!pollsResponse.ok) {
        throw new Error('Failed to fetch polls');
      }
      const pollsData = await pollsResponse.json();
      setPolls(pollsData);

      const choicesResponse = await fetch(CHOICES_API_URL);
      if (!choicesResponse.ok) {
        throw new Error('Failed to fetch choices');
      }
      const choicesData = await choicesResponse.json();
      setChoices(choicesData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPollsAndChoices();
  }, []);

  const handleVote = async () => {
    if (selectedChoice === null) {
      alert('Please select a choice before voting!');
      return;
    }

    try {
      const response = await fetch(`${VOTE_API_URL}${selectedChoice}/vote/`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to cast vote');
      }

      // Re-fetch choices to update vote count
      const choicesResponse = await fetch(CHOICES_API_URL);
      const updatedChoices = await choicesResponse.json();
      setChoices(updatedChoices);

      setVoted(true); // Set vote state to true after successful vote
    } catch (error) {
      setError(error.message);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % polls.length);
    setSelectedChoice(null); // Reset selected choice when navigating to next poll
    setVoted(false); // Reset voted state when navigating to the next poll
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + polls.length) % polls.length);
    setSelectedChoice(null); // Reset selected choice when navigating to previous poll
    setVoted(false); // Reset voted state when navigating to the previous poll
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const poll = polls[currentIndex];
  const filteredChoices = choices.filter(choice => choice.question_id === poll.id);

  return (
    <Container>
      <Title>P-Polls: Express Your Opinion</Title>
      <PollContainer>
        <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
          <Question>{poll.question_text}</Question>
          {filteredChoices.length > 0 ? (
            filteredChoices.map((choice) => (
              <ChoiceContainer key={choice.id}>
                <ChoiceInput
                  type="radio"
                  name={`poll-${poll.id}`}
                  value={choice.id}
                  checked={selectedChoice === choice.id}
                  onChange={() => setSelectedChoice(choice.id)}
                  disabled={voted} // Disable selection after voting
                />
                <ChoiceLabel>{choice.choice_text}</ChoiceLabel>
                <Votes>{choice.votes} votes</Votes>
              </ChoiceContainer>
            ))
          ) : (
            <p>No choices available for this poll.</p>
          )}
        <NavigationButton onClick={handleNext}>&gt;</NavigationButton>

        <VoteButton onClick={handleVote} disabled={voted}>
          {voted ? 'Voted' : 'Vote Now'}
        </VoteButton>
        
      </PollContainer>
      
    </Container>
  );
};

export default Polls;
