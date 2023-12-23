import React, { useReducer } from 'react';

// Quiz initial state
const initialState = {
  currentQuestion: 0,
  answers: [],
  quizData: [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      question: 'Which is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris',
    },
  ],
};

// Reducer function
const quizReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answers: [...state.answers, action.payload],
      };
    default:
      return state;
  }
};

const Quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleAnswer = (answer) => {
    dispatch({ type: 'NEXT_QUESTION', payload: answer });
  };

  const { currentQuestion, quizData } = state;

  if (currentQuestion >= quizData.length) {
    return (
      <div>
        <h1>Quiz Completed!</h1>
        <h2>Your answers:</h2>
        <ul>
          {state.answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>{quizData[currentQuestion].question}</h2>
      <ul>
        {quizData[currentQuestion].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
