import { render } from "@testing-library/react";
import React from "react";

function Quiz({ quiz }) {
  return (
    <li className="quiz-item">
      {quiz.title}
    </li>
  );
};

export default Quiz;