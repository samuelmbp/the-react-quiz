import React from "react";

const StartScreen = ({ numOfQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} Questions to Test Your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
};

export default StartScreen;
