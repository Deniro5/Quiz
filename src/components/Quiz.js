import React, { useState, useEffect } from 'react';
import apiCalls from './ApiCalls';
import { useParams } from 'react-router';
import Question from './Question';
import {Link} from 'react-router-dom';


const Quiz = (props) => {

  const {quizType} = useParams()
  const [questions, setQuestions] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionStatus, setQuestionStatus] = useState([0,0,0,0,0])  //0 unanswered, 1 wrong, 2 correct
  const [score, setScore] = useState(0);

  async function getQuiz(quizType) {
    let res = await fetch(apiCalls[quizType]);
    let data = await res.json()
    return data
  }

  useEffect(() => {
    getQuiz(quizType)
    .then(data => {
      setQuestions(data.results)
    })
  }, [])

  const updateQuestionStatus = (index, update) => {
    let newQuestionStatus = [...questionStatus]
    newQuestionStatus[index] = update;
    setQuestionStatus(newQuestionStatus);
  }

  const submit = () => {
    let complete = true;
    let score = 0;
    for (let i = 0; i < 5; i++) {
      if (questionStatus[i] === 0) {
        complete = false;
      }
      score+= questionStatus[i]
    }
    if (complete) {
      setScore(score - 5) //we minus 5 because we give 2 for correct score and 1 for answering
      setIsSubmitted(true);
    }
    else {
      alert("Please answer all the questions before submitting")
    }
  }

 if (questions.length === 0) {
   return (
      <div className="quizContainer">
        <img alt = "loading" className = "loadingWheel" src = "../img/loading.gif"/>
      </div>
   )
  }

  return (
    <div className="quizContainer">
      <h1 className = "quizTitle"> {quizType.charAt(0).toUpperCase() + quizType.substring(1,quizType.length)} quiz </h1> 
      {isSubmitted && <h2 className = "scoreDisplay">You answered {score} out of 5 questions correctly</h2> }
      {questions.map((question,index) => (
        <Question key = {index} number = {index + 1} question = { unescape(question.question)} correct = {question.correct_answer} incorrect = {question.incorrect_answers} submitted = {isSubmitted} updateQuestionStatus = {updateQuestionStatus}/>
      ))}
      {!isSubmitted ? 
      <button onClick = {()=> {submit(); window.scrollTo(0, 0)}} className = "submitButton"> Submit Answers </button>
      :
      <Link to = "/" style = {{textDecoration: "none"}}>
        <button onClick = {()=>window.scrollTo(0, 0)} className = "submitButton"> Return to Menu </button>
      </Link> 
      } 
    </div>
  );
}


export default Quiz;
