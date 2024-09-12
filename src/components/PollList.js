// src/components/PollList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolls } from '../redux/actions/pollsActions';

const PollList = () => {
  const dispatch = useDispatch();
  const { polls, loading, error } = useSelector(state => state.polls);

  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Polls</h1>
      <ul>
        {polls.map(poll => (
          <li key={poll.id}>
            {poll.question_text} (Published on {new Date(poll.pub_date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollList;
