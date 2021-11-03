import React from 'react';
import {QuestionCard} from "./components/question/question_card";
export const  App = () =>{
  const startTravia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }

  return <div className="App">
    <h1> React Quiz</h1>
    <button className="start" onClick={startTravia}>
      start
    </button>
    <p className="score">Score:</p>
    <p>Loading Questions...</p>
    <QuestionCard/>
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
  </div>
}
