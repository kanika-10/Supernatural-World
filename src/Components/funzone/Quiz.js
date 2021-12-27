import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import quizData from "./quizData";

let loop = 1;
const Quiz = ({ title, id, count }) => {
  const [start, setStart] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(id);
  const [quesCount, setQuesCount] = useState(count);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState(false);

  const handleStartButton = () => {
    setStart(false);
    setResult(false);
    setClicked(false);
    setCurrentQuestion(id);
    setQuesCount(0);
    setScore(0);
    loop = 1;
  };

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    console.log("clicked");

    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);

    if (loop < 10) {
      setCurrentQuestion(currentQuestion + 1);
      setQuesCount(quesCount + 1);
      loop = loop + 1;
    } else {
      setResult(true);
    }
  };

  const handlePlayAgain = () => {
    setResult(false);
    setClicked(false);
    setCurrentQuestion(id);
    setQuesCount(0);
    setScore(0);
    setStart(true);
    loop = 1;
  };

  return (
    <div>
      <div>
        <h1 className="quiz-heading"> {title} </h1>
        <section className="quiz-box">
          {start ? (
            <div className="start-end">
              <h1 className="start-end-title">Welcome to the quiz !!</h1>
              <button
                className="btn btn-primary start-end-button m-3"
                onClick={handleStartButton}
              >
                Lets's Start
              </button>
              <Link to="/funzone">
                <button className="btn btn-primary">Quiz Home</button>
              </Link>
            </div>
          ) : result ? (
            <div className="start-end">
              <div className="start-end-title">
                Hurray!! You Completed the Quiz!!
              </div>
              <div className="result-body">
                Your Score : <span className="score">{score} </span>{" "}
              </div>
              <button
                className="btn btn-primary start-end-button m-3"
                onClick={handlePlayAgain}
              >
                Play again
              </button>
              <Link to="/funzone">
                <button className="btn btn-primary ">Quiz Home</button>
              </Link>
            </div>
          ) : (
            <div>
              <h6 className="ques-count">Question: {quesCount + 1} /10</h6>
              <h4 className="quiz-question">
                {quizData[currentQuestion].question}
              </h4>
              {quizData[currentQuestion].choices.map((options) => (
                <ul className="options-container" key={uuidv4()}>
                  <li className="op">
                    <button
                      disabled={clicked}
                      className={`choice ${
                        clicked && options.isCorrect
                          ? "correct"
                          : clicked && !options.isCorrect
                          ? "incorrect"
                          : ""
                      }`}
                      onClick={() => handleCorrectAnswer(options.isCorrect)}
                    >
                      {options.choice}
                    </button>
                  </li>
                </ul>
              ))}

              <button
                className="btn btn-primary"
                onClick={handleNextQuestion}
                disabled={!clicked}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Quiz;
