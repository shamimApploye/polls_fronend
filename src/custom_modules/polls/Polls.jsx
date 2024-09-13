import React, { useEffect } from 'react';
import { PollContainer, Question, ChoiceContainer, ChoiceLabel, Votes, ChoiceInput, NavigationButton } from '../../styledComponents/pollComponents';
import { Container } from '../../styledComponents/common';


const PollList = (props) => {
  // const {pollsList, pollsLoading, pollsError, fetchPolls} = props

  // useEffect (() => {
  //   fetchPolls()
  // },[])
  // console.log(pollsList)
  // console.log(typeof fetchPolls)
  // return (
    
  //   <Container>
  //     <Title>P-Polls: Express Your Opinion</Title>
  //     <PollContainer>
  //       <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
  //       <div>
  //         <Question>{poll.question_text}</Question>
  //         {choices.length > 0 ? (
  //           choices.map((choice) => (
  //             <ChoiceContainer key={choice.id}>
  //               <ChoiceInput
  //                 type="radio"
  //                 name={`poll-${poll.id}`}
  //                 value={choice.id}
  //               />
  //               <ChoiceLabel>{choice.choice_text}</ChoiceLabel>
  //               <Votes>{choice.votes} votes</Votes>
  //             </ChoiceContainer>
  //           ))
  //         ) : (
  //           <p>No choices available for this poll.</p>
  //         )}
  //       </div>
  //       <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
  //     </PollContainer>
  //   </Container>
  // );
};

export default PollList
