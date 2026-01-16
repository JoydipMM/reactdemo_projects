import React, { useState } from 'react';
import QuestionHolder from './questionHolder';
import QuestionButton from './QuestionButton';


const questions = [
  {
    id:1,
    hint: "a___e",
    question: "A for",
    correctAnswer: "apple",
  },
  {
    id:2,
    hint: "_l_e",
    question: "color of the sky",
    correctAnswer: "blue",
  },
  {
    id:3,
    hint: "t_g_r",
    question: "national animal of india",
    correctAnswer: "tiger",
  },
];


const GueseWord = () => {

const [getQuestions, setGetQuestions] = useState(questions);
let ACTIVE_QUESTION_INDEX = 0;
const [activeQuestion, setActiveQuestion] = useState(getQuestions[ACTIVE_QUESTION_INDEX]);
const { question, hint } = activeQuestion || {};

const getButtonEvent = (data) => {
    console.log(data);
}
  return (
    <div>
      <h2>Word Game</h2>

      <QuestionHolder question={question}/>

      <QuestionButton label={"prev"} buttonEvent={getButtonEvent}/>
      <QuestionButton label={"next"} buttonEvent={getButtonEvent}/>
    </div>
  )
}

export default GueseWord;









