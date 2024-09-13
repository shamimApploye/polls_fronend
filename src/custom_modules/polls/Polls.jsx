import React, { useState, useEffect } from 'react';
import { PollContainer, Question, ChoiceContainer, ChoiceLabel, Votes, ChoiceInput, NavigationButton, Title } from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';

// Replace with your actual API endpoint for fetching polls
const POLLS_API_URL = 'http://127.0.0.1:8000/polls/';
// Replace with your actual API endpoint for fetching results
const RESULTS_API_URL = 'http://127.0.0.1:8000/polls/';

const Polls = () => {
  const [polls, setPolls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [choices, setChoices] = useState([]);

  // Function to fetch polls
  const fetchPolls = async () => {
    try {
      const response = await fetch(POLLS_API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPolls(data);
      // Fetch results for the first poll initially
      if (data.length > 0) {
        fetchResults(data[0].id);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch results for a specific poll
  const fetchResults = async (pollId) => {
    try {
      const response = await fetch(`${RESULTS_API_URL}${pollId}/results/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setChoices(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch polls on component mount
  useEffect(() => {
    fetchPolls();
  }, []);

  // Fetch results when currentIndex changes
  useEffect(() => {
    if (polls.length > 0) {
      fetchResults(polls[currentIndex].id);
    }
  }, [currentIndex, polls]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % polls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + polls.length) % polls.length);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (polls.length === 0) return <p>No polls available.</p>;

  const poll = polls[currentIndex];

  return (
    <Container>
      <Title>P-Polls: Express Your Opinion</Title>
      <PollContainer>
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
      </PollContainer>
    </Container>
  );
};

export default Polls;
