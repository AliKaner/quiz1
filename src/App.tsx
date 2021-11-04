import React, {useState} from 'react';
import {QuestionCard} from "./components/question/question_card";
import {fetchQuizQuestions,Difficulty,QuestionState} from "./API";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

const TOTAL_QUESTIONS = 10;
export const  App = () =>{
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const startTravia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);


  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
  }
  const nextQuestion = () => {

  }

  return (
  <div className="App">
    <h1> React Quiz</h1>
    { gameOver  // userAnswers.lenght === TOTAL_QUESTIONS ? (
    <button className="start" onClick={startTravia}>
      start
    </button>
      ): null}
    {!gameOver ? <p className="score">Score:</p> : null}
    {loading && <p>Loading Questions...</p>}
    {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number]:undefined}
          callback={checkAnswer}
        />)}
{!gameOver && !loading && userAnswers.length === number +1 && number !=== TOTAL_QUESTIONS-1 ? (
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
)}</div>)}
