import React from 'react'

const FlashCard = ({
  question, answer, edit, id,
}) => (
  <div data-id={id} className="flashcard card">
    <div className="card-header bg-warning" />
    <div className="card-body">
      <h5 className="card-title">
        {question}
      </h5>
      <p className="card-text">
        {answer}
      </p>
      <button onClick={edit} className="text-primary edit">
        Edit
        <i className="fas fa-edit" />
      </button>
    </div>
  </div>
)

export default FlashCard
