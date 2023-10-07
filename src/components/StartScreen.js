import React from 'react';

export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <h3>Welcome to the react Quiz</h3>
      <h3>{numQuestions} questions to test yuor React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}
