import React, {useState} from 'react';
import {QuestionCard} from "./components/question/question_card";
import {fetchQuizQuestions,Difficulty,QuestionState} from "./API";

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
  const [userAnswers, setAnswers] = useState<AnswerObject[]>([]);
  const [score,setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)
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
    <QuestionCard
      questionNumber={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]:undefined}
      callback={checkAnswer}
    />
    <button className="next" onClick={nextQuestion}>
      Next Question
    </button>
  </div>
}
