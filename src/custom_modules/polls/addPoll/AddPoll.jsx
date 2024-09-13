import React, { useState } from 'react';
import { Container, Form, Input, Button, Title } from '../../../styledComponents/common';

const POLL_API_URL = 'http://127.0.0.1:8000/polls/';

const AddPoll = () => {
  const [questionText, setQuestionText] = useState('');
  const [pubDate, setPubDate] = useState('');
  const [choices, setChoices] = useState([{ choice_text: '', votes: 0 }]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleQuestionChange = (e) => setQuestionText(e.target.value);
  const handlePubDateChange = (e) => setPubDate(e.target.value);

  const handleChoiceChange = (index, event) => {
    const newChoices = choices.map((choice, i) => 
      i === index ? { ...choice, choice_text: event.target.value } : choice
    );
    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices([...choices, { choice_text: '', votes: 0 }]);
  };

  const removeChoice = (index) => {
    const newChoices = choices.filter((_, i) => i !== index);
    setChoices(newChoices);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pollData = {
      question_text: questionText,
      pub_date: pubDate,
      choices: choices.filter(choice => choice.choice_text !== '')
    };

    try {
      const response = await fetch(POLL_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pollData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create poll');
      }

      setSuccessMessage('Poll created successfully!');
      setError(null);
      setQuestionText('');
      setPubDate('');
      setChoices([{ choice_text: '', votes: 0 }]); // Reset form after success
    } catch (err) {
      setError(err.message);
      setSuccessMessage('');
    }
  };

  return (
    <Container>
      <Title>Create a New Poll</Title>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label>
        <Input
          type="text"
          id="question"
          value={questionText}
          onChange={handleQuestionChange}
          placeholder="Enter poll question"
          required
        />

        <label htmlFor="pub_date">Publish Date:</label>
        <Input
          type="datetime-local"
          id="pub_date"
          value={pubDate}
          onChange={handlePubDateChange}
          required
        />

        <label>Choices:</label>
        {choices.map((choice, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <Input
              type="text"
              placeholder={`Choice ${index + 1}`}
              value={choice.choice_text}
              onChange={(e) => handleChoiceChange(index, e)}
              required
            />
            {choices.length > 1 && (
              <Button type="button" onClick={() => removeChoice(index)}>Remove</Button>
            )}
          </div>
        ))}

        <Button type="button" onClick={addChoice}>
          Add Another Choice
        </Button>

        <Button type="submit">Create Poll</Button>
      </Form>
    </Container>
  );
};

export default AddPoll;
