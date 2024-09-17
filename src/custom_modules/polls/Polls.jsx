import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Loader,
  ErrorMessage,
} from "../../styledComponents/common";
import {
  PollList,
  PollItem,
  Question,
  PubDate,
  Choice,
  Circle,
  Text,
  Votes,
  NavButton,
  ButtonWrapper,
} from "../../styledComponents/pollComponents";
import axios from "axios";

const Polls = (props) => {
  const { pollsList, pollsLoading, pollsError, fetchPolls } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVotes, setShowVotes] = useState(false);
  const [choices, setChoices] = useState([]);
  const [loadingChoices, setLoadingChoices] = useState(false);
  const [choicesError, setChoicesError] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    fetchPolls();
  }, [fetchPolls]);

  useEffect(() => {
    if (pollsList.length > 0) {
      fetchChoices(pollsList[currentIndex].id);
    }
  }, [currentIndex, pollsList]);

  const fetchChoices = async (pollId) => {
    setLoadingChoices(true);
    setChoicesError(null);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/polls/${pollId}/results/`
      );
      setChoices(response.data);
    } catch (error) {
      console.error("Error fetching choices:", error);
      setChoicesError("Failed to load choices.");
    } finally {
      setLoadingChoices(false);
    }
  };

  const handleVote = async (choiceId) => {
    try {
      await axios.post(`http://127.0.0.1:8000/polls/choices/${choiceId}/vote/`);
      // Refresh choices after voting
      fetchChoices(pollsList[currentIndex].id);
    } catch (error) {
      console.error("Error voting:", error);
      setChoicesError("Failed to register vote.");
    }
  };

  const handleChoiceClick = (choiceId) => {
    if (!showVotes) {
      setSelectedChoice(choiceId);
      handleVote(choiceId);
      setShowVotes(true);
    }
  };

  if (pollsLoading) return <Loader />;
  if (pollsError)
    return <ErrorMessage>Error: {pollsError.message}</ErrorMessage>;

  const currentPoll = pollsList[currentIndex];

  if (!currentPoll) return <ErrorMessage>No poll data available.</ErrorMessage>;

  return (
    <Container>
      <Title>P-Polls: Express Your Opinion</Title>
      <PollList>
        <PollItem key={currentPoll.id}>
          <Question>{currentPoll.question_text}</Question>
          <PubDate>
            Published on: {new Date(currentPoll.pub_date).toLocaleDateString()}
          </PubDate>
          {loadingChoices ? (
            <Loader />
          ) : choicesError ? (
            <ErrorMessage>{choicesError}</ErrorMessage>
          ) : (
            choices.map((choice) => (
              <Choice
                key={choice.id}
                onClick={() => handleChoiceClick(choice.id)}
                disabled={showVotes}
              >
                <Circle checked={selectedChoice === choice.id} />
                <Text>{choice.choice_text}</Text>
                {showVotes && (
                  <Votes>{choice.votes} votes</Votes>
                )}
              </Choice>
            ))
          )}
        </PollItem>
      </PollList>
      <ButtonWrapper>
        <NavButton
          onClick={() => {
            setShowVotes(false);
            setCurrentIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : pollsList.length - 1
            );
          }}
        >
          Previous
        </NavButton>
        <NavButton
          onClick={() => {
            setShowVotes(false);
            setCurrentIndex((prevIndex) =>
              prevIndex < pollsList.length - 1 ? prevIndex + 1 : 0
            );
          }}
        >
          Next
        </NavButton>
      </ButtonWrapper>
    </Container>
  );
};

export default Polls;
