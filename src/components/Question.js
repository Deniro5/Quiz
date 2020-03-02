import React, { useState, useEffect } from 'react';


const spanStyle = {
  fontWeight: "bold",
  marginRight: "10px",
}


const Question = props => {

  const [selected , setSelected] = useState(-1);
  const [answers, setAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(-1)
  const {question, number, correct, incorrect, submitted, updateQuestionStatus} = props; 

  useEffect(()=> {
    let answers = [];
    let randIndex = Math.floor(Math.random() * 3); 
    let incorrectAnswers = 0;
    for (let i = 0; i < 3; i++) {
      if (i === randIndex) {
        answers.push(correct)
      }
      else {
        answers.push(incorrect[incorrectAnswers])
        incorrectAnswers++;
      }
    }
    setAnswers(answers)
    setCorrectAnswer(randIndex)
  },[])

  const updateSelected = (answer) => {
    if (answer === correctAnswer) {
      updateQuestionStatus(number-1, 2)
    }
    else {
      updateQuestionStatus(number-1, 1)
    }
    setSelected(answer)
  }

  const renderHTML = (rawHTML) =>  //We need this function to decode the string given by the API
      React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  if (answers.length === 0) {
    return (
      <div className = "questionContainer"> 
        <p> Loading Question </p> 
      </div>
    )
  }

  else if (submitted) {
    return (
      <div className="questionContainer">
        <img className = "resultIcon" alt = "result" src = {selected === correctAnswer ? "../img/checkmark.png" : "../img/wrong.png" }/>
        <h2 className="questionNumber"> Question {number} </h2>
        <div style={{ width: "90%", margin: "auto" }}>
          <h2 className="question"> {question} </h2>
          <div className={"answerContainer " + (correctAnswer === 0 ? "green" : "grey") + (selected === 0 ? "Selected" : "")}   >
            <p><span style={spanStyle}>A)</span> {answers[0]} </p>
          </div>
          <div className={"answerContainer " + (correctAnswer === 1 ? "green" : "grey") + (selected === 1 ? "Selected" : "")}  >
            <p><span style={spanStyle}>B)</span> {answers[1]}  </p>
          </div>
          <div className={"answerContainer " + (correctAnswer === 2 ? "green" : "grey") + (selected === 2 ? "Selected" : "")} >
            <p><span style={spanStyle}>C)</span> {answers[2]} </p>
          </div>
        </div>
      </div>
    ); 
  }

  return (
    <div className="questionContainer">
      <h2 className="questionNumber"> Question {number} </h2>
      <div style={{ width: "90%", margin: "auto" }}>
        <h2 className="question"> {renderHTML(question)} </h2>
        <div onClick = {() => {updateSelected(0)}} className={"answerContainer red" + (selected === 0 ? "Selected" : "")}   >
          <p><span style={spanStyle}>A)</span> {answers[0]} </p>
        </div>
        <div onClick = {() => {updateSelected(1)}} className={"answerContainer blue" + (selected === 1 ? "Selected" : "")}  >
          <p><span style={spanStyle}>B)</span> {answers[1]}  </p>
        </div>
        <div onClick = {() => {updateSelected(2)}} className={"answerContainer purple" + (selected === 2 ? "Selected" : "")} >
          <p><span style={spanStyle}>C)</span> {answers[2]} </p>
        </div>
      </div>
    </div>
  );
}


export default Question;


